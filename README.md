# ITICS — Industrial Thermal Identification & Classification System
### Smart India Hackathon 2026 | Problem Statement: SIH26162

> **"AI-Based Detection & Classification of Industrial Fires and Persistent Thermal Sources Using NASA FIRMS, OSM & Satellite Data."**

---

## 🚀 Quick Start (Zero API Key Needed!)

**No API keys, no tokens, and no backend installations are required.** You have two easy ways to run the prototype:

### Option 1: Direct Double-Click (Easiest)
Simply **double-click [`index.html`](file:///d:/PROJECTS/SIH26162/index.html)** directly in Windows File Explorer. 
- It loads instantly into your web browser.
- Uses public OpenStreetMap & CartoDB tiles (100% free, no API key required).
- Embedded mock data loads immediately with no server required.

### Option 2: Run via Local Server (Recommended for presentations)
Double-click [`start-demo.bat`](file:///d:/PROJECTS/SIH26162/start-demo.bat) or run in terminal:
```bash
python -m http.server 8000
```
Then visit **[http://localhost:8000](http://localhost:8000)**.

---

## 🖥️ What Has Been Built

1. **Dashboard View (`#view-dashboard`)**:
   - 4 Dynamic Metrics Cards: Active Hotspots (28), Industrial Fires (17), Uncertain Sources (6), Natural/Wildfires (5).
   - National Overview Leaflet mini-map displaying hotspot density across India.
   - Interactive Recent Alerts feed with classification pills, FRP, confidence, and one-click jump to map.
   - 24-hour temporal detection trend bar chart grouped into hourly buckets.

2. **Live Map View (`#view-map`)**:
   - Dark Matter CartoDB base tiles styled after NASA FIRMS and disaster ops centers.
   - Circle markers scaled by Fire Radiative Power (FRP) and color-coded:
     - 🔴 **Red (`#dc2626`)**: Confirmed Industrial Fire
     - 🟡 **Amber (`#f59e0b`)**: Uncertain Anomaly
     - ⚪ **Slate (`#64748b`)**: Natural Wildfire / Forest Fire
   - Subtle dashed blue circles showing OpenStreetMap industrial zone boundary footprints (Tata Steel Jamshedpur, Bhilai, Vizag, Jamnagar Refinery, Paradip, Mundra, etc.).
   - Slide-out **Hotspot Details Panel** triggered on marker click or alert card click, showing:
     - Exact latitude/longitude, state, sensor platform (VIIRS / MODIS)
     - Day/night solar/thermal pass indicator
     - OSM Proximity distance & infrastructure tagging
     - Multi-pass persistence analysis
     - Classification rationale explanation

3. **Alert Feed View (`#view-alerts`)**:
   - Complete scrollable feed of all 28 detections sorted by timestamp.
   - Live filter tabs: **All** | **Industrial** | **Uncertain** | **Natural**.
   - Direct click-to-map navigation: clicking any alert card automatically switches to the Live Map, smooth-zooms to the coordinates, and displays its detailed telemetry.

4. **System Pipeline View (`#view-pipeline`)**:
   - Visual architectural pipeline with animated step-by-step dataflow cards:
     1. NASA FIRMS Data Ingestion (VIIRS 375m & MODIS 1km)
     2. OpenStreetMap Spatial Cross-Reference (Overpass API)
     3. AI Classification Engine (Random Forest / Persistence model)
     4. Alert Generation & Dissemination (NDMA/SDMA integration)
   - Technical breakdown of sensors, resolution, and model metrics.

5. **Realistic Mock Data (`data/`)**:
   - `mock-hotspots.json`: 28 authentic detections across major Indian industrial clusters (Jamshedpur, Bhilai, Vizag, Angul, Korba, Haldia, Jamnagar, Hazira) and natural forest ranges (Simlipal, Satpura, Bandipur, Silent Valley) with realistic FRP (12 to 341 MW), confidence levels, and human-crafted attribution rationales.
   - `industrial-zones.json`: 15 verified Indian industrial complexes with accurate coordinates, operational radii, and operators (SAIL, Tata Steel, Reliance, IOCL, NTPC, JSPL, AM/NS).

---

## 🎯 How to Pitch This to Judges

1. **Start on the Dashboard**: Point out the live telemetry banner ("LIVE", "Last synced: X min ago") and the 4 metrics cards. Highlight that the core problem is filtering industrial fires and persistent thermal anomalies out of thousands of daily FIRMS wildfire alerts.
2. **Click on an Industrial Alert Card**: Watch the UI smoothly switch to the **Live Map**, zoom directly to the plant (e.g., Tata Steel Jamshedpur or Reliance Jamnagar), and open the **Hotspot Details** drawer.
3. **Walk through the Telemetry**: Show the judges the 3 pillars of your solution:
   - **FRP & Brightness Temp**: High thermal output typical of industrial furnaces/flares.
   - **OSM Cross-Check**: Proximity in meters to verified industrial boundaries.
   - **Thermal Persistence**: Detected across multiple consecutive satellite passes (indicating stationary heavy infrastructure rather than moving wildfire fronts).
4. **Switch to System Pipeline**: Conclude by showing the 4-step architecture diagram, demonstrating that your data schema in `mock-hotspots.json` is 100% plug-and-play ready for when your live backend ML engine is connected.
