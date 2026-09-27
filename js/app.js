/**
 * ITICS — Industrial Thermal Identification & Classification System
 * Problem Statement: SIH26162 (Smart India Hackathon 2026)
 * Prototype Data Flow & UI Controller
 */

// ─── Global Application State ──────────────────────────────────────────────────
const APP = {
    hotspots: [],
    zones: [],
    mainMap: null,
    dashMap: null,
    markers: {},
    syncMinutes: 7,
    activeFilter: 'all'
};

// ─── Visual Constants (NASA FIRMS & NDMA Ops Theme) ───────────────────────────
const CLASSIFICATION_COLORS = {
    industrial_fire: '#dc2626', // High-contrast Red
    uncertain:       '#f59e0b', // Warning Amber
    natural_wildfire:'#64748b'  // Muted Slate
};

const CLASSIFICATION_LABELS = {
    industrial_fire: 'Industrial Fire',
    uncertain:       'Uncertain Source',
    natural_wildfire:'Natural / Wildfire'
};

const CLASSIFICATION_BADGE_CLASS = {
    industrial_fire: 'industrial',
    uncertain:       'uncertain',
    natural_wildfire:'natural'
};

const TILE_URL = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const TILE_ATTR = '&copy; <a href="https://carto.com/">CARTO</a> &bull; OpenStreetMap contributors &bull; NASA FIRMS';
const OSM_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OSM_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// ─── Utility Functions ─────────────────────────────────────────────────────────
function formatRelativeTime(isoString) {
    const then = new Date(isoString).getTime();
    const now = Date.now();
    const diffMs = Math.max(0, now - then);
    const mins = Math.floor(diffMs / 60000);
    const hrs  = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);

    if (mins < 1)  return 'Just now';
    if (mins < 60) return `${mins} min ago`;
    if (hrs < 24)  return `${hrs} hr${hrs > 1 ? 's' : ''} ago`;
    return `${days} day${days > 1 ? 's' : ''} ago`;
}

function formatTimestamp(isoString) {
    const d = new Date(isoString);
    const day = d.getDate();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const mon = months[d.getMonth()];
    const yr = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${day} ${mon} ${yr}, ${hh}:${mm} IST`;
}

function getColor(classification) {
    return CLASSIFICATION_COLORS[classification] || '#9ca3af';
}

function getLabel(classification) {
    return CLASSIFICATION_LABELS[classification] || 'Unknown';
}

function getBadgeClass(classification) {
    return CLASSIFICATION_BADGE_CLASS[classification] || '';
}

function markerRadius(frp) {
    return Math.max(6, Math.min(18, frp / 20));
}

function lightenColor(hex, amount) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
    const b = Math.min(255, (num & 0x0000FF) + amount);
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

// ─── Data Loading ──────────────────────────────────────────────────────────────
async function loadData() {
    // 1. Instant load from in-memory script (Works 100% offline & directly via file://)
    if (window.MOCK_HOTSPOTS && window.MOCK_ZONES) {
        APP.hotspots = Array.from(window.MOCK_HOTSPOTS);
        APP.zones    = Array.from(window.MOCK_ZONES);
        APP.hotspots.sort((a, b) => new Date(b.detected_at) - new Date(a.detected_at));
        initApp();
        return;
    }

    // 2. Fallback to fetch for web server environments
    try {
        const [hRes, zRes] = await Promise.all([
            fetch('./data/mock-hotspots.json'),
            fetch('./data/industrial-zones.json')
        ]);

        APP.hotspots = await hRes.json();
        APP.zones    = await zRes.json();
        APP.hotspots.sort((a, b) => new Date(b.detected_at) - new Date(a.detected_at));
        initApp();
    } catch (err) {
        console.error('Failed to load mock data:', err);
    }
}

// ─── Main Application Initialization ───────────────────────────────────────────
function initApp() {
    initNavigation();
    populateDashboardStats();
    populateDashboardMiniFeed();
    buildTrendChart();
    initDashboardMap();
    initMainMap();
    renderAlertFeed();
    setupFilterButtons();
    setupLiveSyncTimer();
}

// ─── View Switching & Navigation ──────────────────────────────────────────────
function switchView(targetViewId) {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view-section');

    navItems.forEach(n => {
        if (n.getAttribute('data-target') === targetViewId) {
            n.classList.add('active');
        } else {
            n.classList.remove('active');
        }
    });

    views.forEach(v => {
        if (v.id === targetViewId) {
            v.classList.add('active');
        } else {
            v.classList.remove('active');
        }
    });

    // Invalidate Leaflet maps when containers become visible
    if (targetViewId === 'view-map' && APP.mainMap) {
        setTimeout(() => APP.mainMap.invalidateSize(), 150);
    }
    if (targetViewId === 'view-dashboard' && APP.dashMap) {
        setTimeout(() => APP.dashMap.invalidateSize(), 150);
    }
    if (targetViewId === 'view-pipeline') {
        setTimeout(animatePipeline, 100);
    }
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = item.getAttribute('data-target');
            if (targetId) switchView(targetId);
        });
    });
}

// ─── Focus & Zoom to a Hotspot from Any View ───────────────────────────────────
function focusHotspotOnMap(hotspotId) {
    const h = APP.hotspots.find(item => item.id === hotspotId);
    if (!h) return;

    switchView('view-map');

    setTimeout(() => {
        if (APP.mainMap) {
            APP.mainMap.invalidateSize();
            APP.mainMap.flyTo([h.latitude, h.longitude], 11, {
                duration: 1.2,
                easeLinearity: 0.25
            });
        }
        showMapDetail(h);
    }, 180);
}

// ─── Dashboard Stats Cards ─────────────────────────────────────────────────────
function populateDashboardStats() {
    const total = APP.hotspots.length;
    const industrial = APP.hotspots.filter(h => h.classification === 'industrial_fire').length;
    const uncertain  = APP.hotspots.filter(h => h.classification === 'uncertain').length;
    const natural    = APP.hotspots.filter(h => h.classification === 'natural_wildfire').length;

    const cards = document.querySelectorAll('.dashboard-grid .stat-card');
    if (cards.length >= 4) {
        cards[0].querySelector('.stat-value').textContent = total;
        cards[1].querySelector('.stat-value').textContent = industrial;
        cards[2].querySelector('.stat-value').textContent = uncertain;
        cards[3].querySelector('.stat-value').textContent = natural;
    }
}

// ─── Dashboard Mini Feed ───────────────────────────────────────────────────────
function populateDashboardMiniFeed() {
    const container = document.querySelector('.alert-mini-feed');
    if (!container) return;

    const top5 = APP.hotspots.slice(0, 5);
    container.innerHTML = top5.map(h => {
        const badgeCls = getBadgeClass(h.classification);
        const label = h.classification === 'natural_wildfire' ? 'Wildfire' : 
                      h.classification === 'industrial_fire' ? 'Industrial' : 'Uncertain';
        return `
            <div class="alert-card ${badgeCls}" data-hotspot-id="${h.id}" title="Click to view on Live Map">
                <div class="alert-header">
                    <span class="badge ${badgeCls}">${label}</span>
                    <span class="alert-time">${formatRelativeTime(h.detected_at)}</span>
                </div>
                <div class="alert-location">${h.location_name}</div>
                <div class="alert-details">
                    <span>Conf: ${Math.round(h.classification_confidence * 100)}%</span>
                    <span>FRP: ${h.frp} MW</span>
                    <span style="color:#60a5fa;margin-left:auto;">Locate &rarr;</span>
                </div>
                <div class="alert-reason">${h.flagged_reason}</div>
            </div>
        `;
    }).join('');

    // Attach click listeners to cards
    container.querySelectorAll('.alert-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-hotspot-id');
            if (id) focusHotspotOnMap(id);
        });
    });
}

// ─── 24-Hour Detection Trend Bar Chart ─────────────────────────────────────────
function buildTrendChart() {
    const container = document.getElementById('trend-chart');
    if (!container) return;

    container.innerHTML = '';

    const now = Date.now();
    const hourBuckets = new Array(24).fill(null).map(() => ({ industrial: 0, uncertain: 0, natural: 0 }));

    APP.hotspots.forEach(h => {
        const diffHrs = Math.floor((now - new Date(h.detected_at).getTime()) / 3600000);
        if (diffHrs >= 0 && diffHrs < 24) {
            const idx = 23 - diffHrs; // 0 = 24h ago, 23 = now
            if (h.classification === 'industrial_fire') hourBuckets[idx].industrial++;
            else if (h.classification === 'uncertain')  hourBuckets[idx].uncertain++;
            else hourBuckets[idx].natural++;
        }
    });

    const maxVal = Math.max(...hourBuckets.map(b => b.industrial + b.uncertain + b.natural), 1);

    hourBuckets.forEach((bucket, i) => {
        const total = bucket.industrial + bucket.uncertain + bucket.natural;
        const pct = (total / maxVal) * 100;

        const wrapper = document.createElement('div');
        wrapper.className = 'bar-wrapper';

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${Math.max(4, pct)}%`;

        if (bucket.industrial > 0) {
            bar.style.backgroundColor = 'rgba(220, 38, 38, 0.85)';
        } else if (bucket.uncertain > 0) {
            bar.style.backgroundColor = 'rgba(245, 158, 11, 0.8)';
        } else if (bucket.natural > 0) {
            bar.style.backgroundColor = 'rgba(100, 116, 139, 0.7)';
        }

        bar.title = `${24 - i}h ago: ${total} detection(s) (${bucket.industrial} industrial, ${bucket.uncertain} uncertain, ${bucket.natural} natural)`;

        const label = document.createElement('div');
        label.className = 'bar-label';
        if (i % 4 === 0) {
            label.textContent = `${24 - i}h`;
        }

        wrapper.appendChild(bar);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
    });
}

// ─── Dashboard Mini Map ────────────────────────────────────────────────────────
function initDashboardMap() {
    const el = document.getElementById('dashboard-map');
    if (!el || APP.dashMap || typeof L === 'undefined') return;

    APP.dashMap = L.map('dashboard-map', {
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
        dragging: true
    }).setView([22.5, 82.0], 5);

    L.tileLayer(TILE_URL, {
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(APP.dashMap);

    // Industrial zones on dashboard map
    APP.zones.forEach(z => {
        L.circle([z.lat, z.lng], {
            radius: z.radius_m,
            color: '#3b82f6',
            weight: 1.2,
            dashArray: '5, 4',
            fillColor: '#3b82f6',
            fillOpacity: 0.05,
            interactive: true
        }).bindTooltip(`<strong>${z.name}</strong><br>${z.operator || ''} (${z.city})`, {
            className: 'zone-tooltip',
            sticky: true
        }).addTo(APP.dashMap);
    });

    // Hotspot markers with hover info and click-to-focus
    APP.hotspots.forEach(h => {
        const color = getColor(h.classification);

        const marker = L.circleMarker([h.latitude, h.longitude], {
            radius: Math.max(5, Math.min(13, h.frp / 25)),
            fillColor: color,
            color: lightenColor(color, 35),
            weight: 1.5,
            opacity: 0.95,
            fillOpacity: 0.8
        }).addTo(APP.dashMap);

        const badgeLabel = getLabel(h.classification);
        marker.bindTooltip(`
            <div style="font-weight:700;color:#f8fafc;font-size:12px;margin-bottom:3px;">${h.location_name}</div>
            <div style="font-size:11px;color:${color};font-weight:600;">${badgeLabel} &bull; FRP: ${h.frp} MW</div>
            <div style="font-size:10px;color:#94a3b8;margin-top:2px;">Click to inspect on Live Map &rarr;</div>
        `, {
            className: 'zone-tooltip',
            sticky: true
        });

        marker.on('click', () => {
            focusHotspotOnMap(h.id);
        });
    });

    // Expand button in panel header
    const expandBtn = document.getElementById('btn-expand-map');
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            switchView('view-map');
        });
    }

    setTimeout(() => {
        if (APP.dashMap) {
            APP.dashMap.invalidateSize();
            APP.dashMap.fitBounds([[8.0, 68.0], [35.5, 96.0]], { padding: [10, 10] });
        }
    }, 250);
}

// ─── Live Interactive Map View ─────────────────────────────────────────────────
function initMainMap() {
    const el = document.getElementById('main-map');
    if (!el || APP.mainMap || typeof L === 'undefined') return;

    APP.mainMap = L.map('main-map', {
        zoomControl: true,
        attributionControl: true
    }).setView([22.5, 79.5], 5);

    window.mainMap = APP.mainMap;

    // Base layers (neither requires any API key)
    const darkTileLayer = L.tileLayer(TILE_URL, {
        attribution: TILE_ATTR,
        subdomains: 'abcd',
        maxZoom: 19
    });

    const streetTileLayer = L.tileLayer(OSM_URL, {
        attribution: OSM_ATTR,
        maxZoom: 19
    });

    darkTileLayer.addTo(APP.mainMap);

    // Layer switcher control in top-right
    L.control.layers({
        'FIRMS Dark Canvas': darkTileLayer,
        'OpenStreetMap Streets': streetTileLayer
    }, null, { position: 'topright' }).addTo(APP.mainMap);

    // Render OSM industrial zones as subtle dashed boundary circles
    APP.zones.forEach(z => {
        L.circle([z.lat, z.lng], {
            radius: z.radius_m,
            color: '#3b82f6',
            weight: 1.2,
            dashArray: '6, 5',
            fillColor: '#3b82f6',
            fillOpacity: 0.05,
            interactive: true
        }).bindTooltip(`<strong>${z.name}</strong><br>${z.operator || ''} (${z.city})`, {
            className: 'zone-tooltip',
            sticky: true
        }).addTo(APP.mainMap);
    });

    // Render Hotspot circle markers
    APP.hotspots.forEach(h => {
        const color = getColor(h.classification);
        const r = markerRadius(h.frp);

        const marker = L.circleMarker([h.latitude, h.longitude], {
            radius: r,
            fillColor: color,
            color: lightenColor(color, 35),
            weight: 1.5,
            opacity: 0.95,
            fillOpacity: 0.75
        }).addTo(APP.mainMap);

        marker.on('click', () => showMapDetail(h));
        APP.markers[h.id] = marker;
    });

    // Detail Panel Close Button
    const closeBtn = document.getElementById('close-map-panel');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const panel = document.getElementById('map-panel');
            if (panel) panel.classList.remove('active');
        });
    }
}

// ─── Hotspot Detail Slide-Out Panel ────────────────────────────────────────────
function showMapDetail(h) {
    const panel = document.getElementById('map-panel');
    const content = document.getElementById('map-panel-content');
    if (!panel || !content) return;

    const color = getColor(h.classification);
    const confPct = Math.round(h.classification_confidence * 100);
    const badgeCls = getBadgeClass(h.classification);

    content.innerHTML = `
        <div class="detail-section">
            <div class="detail-location">${h.location_name}</div>
            <div class="detail-state">${h.state} &bull; ${h.latitude.toFixed(4)}°N, ${h.longitude.toFixed(4)}°E</div>
        </div>

        <div class="detail-section" style="display:flex;align-items:center;justify-content:space-between;">
            <span class="badge ${badgeCls}">${getLabel(h.classification)}</span>
            <span style="font-size:11px;color:var(--text-muted);font-family:monospace;">ID: ${h.id}</span>
        </div>

        <div class="detail-grid">
            <div class="detail-item">
                <div class="detail-label">AI Confidence</div>
                <div class="detail-value" style="font-weight:700;color:#f8fafc;">${confPct}%</div>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width:${confPct}%;background:${color};"></div>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-label">FRP (Radiative Power)</div>
                <div class="detail-value" style="font-family:monospace;color:#f8fafc;">${h.frp} MW</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Brightness Temp</div>
                <div class="detail-value" style="font-family:monospace;">${h.brightness} K</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Sensor / Platform</div>
                <div class="detail-value">${h.satellite.replace('_', ' ')}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Observation Pass</div>
                <div class="detail-value">${h.daynight === 'D' ? 'Daytime (Solar)' : 'Nighttime (Thermal)'}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Detection Timestamp</div>
                <div class="detail-value" style="font-size:11px;">${formatTimestamp(h.detected_at)}</div>
            </div>
        </div>

        <div class="detail-section detail-context">
            <div class="detail-label">OSM Infrastructure Cross-Check</div>
            <div class="detail-context-text">
                ${h.osm_proximity.nearest_industrial !== 'None' 
                    ? `Nearest: <strong>${h.osm_proximity.nearest_industrial}</strong><br>Distance: <strong style="color:var(--accent-amber);">${h.osm_proximity.distance_m} meters</strong> &bull; Category: <code>${h.osm_proximity.zone_type.replace('_', ' ')}</code>`
                    : '<span style="color:var(--text-muted);">No industrial infrastructure detected within 2km radius</span>'}
            </div>
        </div>

        <div class="detail-section detail-context">
            <div class="detail-label">Thermal Persistence Engine</div>
            <div class="detail-context-text">
                Observed in <strong>${h.persistence.satellite_passes} satellite pass${h.persistence.satellite_passes > 1 ? 'es' : ''}</strong> &bull; 
                ${h.persistence.is_persistent ? '<span class="persist-yes">&bull; PERSISTENT THERMAL SOURCE</span>' : '<span class="persist-no">&bull; Transient anomaly</span>'}<br>
                First flagged: ${formatRelativeTime(h.persistence.first_detected)}
            </div>
        </div>

        <div class="detail-section detail-reason" style="border-left: 3px solid ${color};">
            <div class="detail-label">Classification Rationale</div>
            <div class="detail-reason-text">${h.flagged_reason}</div>
        </div>
    `;

    panel.classList.add('active');
}

// ─── Alert Feed View ───────────────────────────────────────────────────────────
function renderAlertFeed(filter) {
    const container = document.querySelector('#view-alerts .alerts-list');
    if (!container) return;

    const filterVal = filter || APP.activeFilter;
    let filtered = APP.hotspots;

    if (filterVal === 'industrial')     filtered = APP.hotspots.filter(h => h.classification === 'industrial_fire');
    else if (filterVal === 'uncertain') filtered = APP.hotspots.filter(h => h.classification === 'uncertain');
    else if (filterVal === 'natural')   filtered = APP.hotspots.filter(h => h.classification === 'natural_wildfire');

    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center;color:#64748b;padding:48px;">No detections matching this category filter.</div>';
        return;
    }

    container.innerHTML = filtered.map(h => {
        const badgeCls = getBadgeClass(h.classification);
        const confPct = Math.round(h.classification_confidence * 100);
        const label = getLabel(h.classification);

        return `
            <div class="alert-card ${badgeCls}" data-hotspot-id="${h.id}" title="Click to view coordinates on Live Map">
                <div class="alert-header">
                    <span class="badge ${badgeCls}">${label}</span>
                    <span class="alert-time">${formatRelativeTime(h.detected_at)} &bull; ${h.satellite.replace('_', ' ')}</span>
                </div>
                <div class="alert-location">${h.location_name}</div>
                <div class="alert-details">
                    <span>Confidence: <strong>${confPct}%</strong></span>
                    <span>FRP: <strong>${h.frp} MW</strong></span>
                    <span style="font-family:monospace;">${h.latitude.toFixed(3)}°N, ${h.longitude.toFixed(3)}°E</span>
                    <span>${h.daynight === 'D' ? 'Day' : 'Night'}</span>
                    <span style="color:#60a5fa;margin-left:auto;font-weight:500;">Locate on Map &rarr;</span>
                </div>
                <div class="alert-reason">${h.flagged_reason}</div>
            </div>
        `;
    }).join('');

    // Attach click listeners to all alert cards
    container.querySelectorAll('.alert-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-hotspot-id');
            if (id) focusHotspotOnMap(id);
        });
    });
}

function setupFilterButtons() {
    const buttons = document.querySelectorAll('#view-alerts .filter-btn');
    const filterMap = ['all', 'industrial', 'uncertain', 'natural'];

    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            APP.activeFilter = filterMap[idx] || 'all';
            renderAlertFeed(APP.activeFilter);
        });
    });
}

// ─── Live Telemetry Sync Timer ─────────────────────────────────────────────────
function setupLiveSyncTimer() {
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const now = new Date();
        dateEl.textContent = now.toLocaleDateString('en-IN', {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
        });
    }

    setInterval(() => {
        APP.syncMinutes++;
        const syncEl = document.querySelector('.header-status span:nth-child(2)');
        if (syncEl) {
            syncEl.textContent = `Last synced: ${APP.syncMinutes} min ago`;
        }
    }, 60000);
}

// ─── Pipeline Staggered Animation ──────────────────────────────────────────────
function animatePipeline() {
    const steps = document.querySelectorAll('.pipeline-step');
    const arrows = document.querySelectorAll('.pipeline-arrow');

    steps.forEach((step) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(14px)';
        step.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    arrows.forEach(a => {
        a.style.opacity = '0';
        a.style.transition = 'opacity 0.3s ease';
    });

    steps.forEach((step, i) => {
        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, 180 * (i + 1));
    });
    arrows.forEach((arrow, i) => {
        setTimeout(() => {
            arrow.style.opacity = '1';
        }, 180 * (i + 1) + 90);
    });
}

// ─── Entry Point & Window Events ───────────────────────────────────────────────
window.addEventListener('resize', () => {
    if (APP.dashMap) APP.dashMap.invalidateSize();
    if (APP.mainMap) APP.mainMap.invalidateSize();
});

document.addEventListener('DOMContentLoaded', loadData);
