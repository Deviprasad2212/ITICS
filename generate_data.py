import json
import random
import datetime
import os

os.makedirs(r'd:\PROJECTS\SIH26162\data', exist_ok=True)

zones = [
    {"id": "IZ-01", "name": "Tata Steel Works", "type": "steel_plant", "lat": 22.78, "lng": 86.20, "radius_m": 5000, "operator": "Tata Steel", "city": "Jamshedpur", "state": "Jharkhand"},
    {"id": "IZ-02", "name": "Bhilai Steel Plant", "type": "steel_plant", "lat": 21.21, "lng": 81.38, "radius_m": 6000, "operator": "SAIL", "city": "Bhilai", "state": "Chhattisgarh"},
    {"id": "IZ-03", "name": "Vizag Steel Plant", "type": "steel_plant", "lat": 17.63, "lng": 83.17, "radius_m": 4500, "operator": "RINL", "city": "Visakhapatnam", "state": "Andhra Pradesh"},
    {"id": "IZ-04", "name": "IISCO Steel Plant", "type": "steel_plant", "lat": 23.87, "lng": 86.97, "radius_m": 4000, "operator": "SAIL", "city": "Burnpur", "state": "West Bengal"},
    {"id": "IZ-05", "name": "Rourkela Steel Plant", "type": "steel_plant", "lat": 22.22, "lng": 84.86, "radius_m": 5500, "operator": "SAIL", "city": "Rourkela", "state": "Odisha"},
    {"id": "IZ-06", "name": "Bokaro Steel City", "type": "steel_plant", "lat": 23.67, "lng": 86.15, "radius_m": 7000, "operator": "SAIL", "city": "Bokaro", "state": "Jharkhand"},
    {"id": "IZ-07", "name": "Jindal Steel", "type": "steel_plant", "lat": 20.84, "lng": 85.10, "radius_m": 3500, "operator": "JSPL", "city": "Angul", "state": "Odisha"},
    {"id": "IZ-08", "name": "NTPC Korba", "type": "thermal_power", "lat": 22.35, "lng": 82.68, "radius_m": 4000, "operator": "NTPC", "city": "Korba", "state": "Chhattisgarh"},
    {"id": "IZ-09", "name": "Haldia Petrochemicals", "type": "petrochemical", "lat": 22.06, "lng": 88.06, "radius_m": 3000, "operator": "HPL", "city": "Haldia", "state": "West Bengal"},
    {"id": "IZ-10", "name": "Paradip Refinery", "type": "refinery", "lat": 20.27, "lng": 86.67, "radius_m": 4500, "operator": "IOCL", "city": "Paradip", "state": "Odisha"},
    {"id": "IZ-11", "name": "Durgapur Steel Plant", "type": "steel_plant", "lat": 23.55, "lng": 87.32, "radius_m": 5000, "operator": "SAIL", "city": "Durgapur", "state": "West Bengal"},
    {"id": "IZ-12", "name": "Adani Power Mundra", "type": "thermal_power", "lat": 22.84, "lng": 69.73, "radius_m": 4000, "operator": "Adani Power", "city": "Mundra", "state": "Gujarat"},
    {"id": "IZ-13", "name": "Jamnagar Refinery", "type": "refinery", "lat": 22.34, "lng": 69.87, "radius_m": 8000, "operator": "Reliance", "city": "Jamnagar", "state": "Gujarat"},
    {"id": "IZ-14", "name": "Essar Steel Hazira", "type": "steel_plant", "lat": 21.11, "lng": 72.63, "radius_m": 4500, "operator": "AM/NS India", "city": "Surat", "state": "Gujarat"},
    {"id": "IZ-15", "name": "HPCL Visakh Refinery", "type": "refinery", "lat": 17.69, "lng": 83.27, "radius_m": 3500, "operator": "HPCL", "city": "Visakhapatnam", "state": "Andhra Pradesh"}
]

with open(r'd:\PROJECTS\SIH26162\data\industrial-zones.json', 'w') as f:
    json.dump(zones, f, indent=2)

wildfire_locs = [
    {"name": "Simlipal National Park", "state": "Odisha", "lat": 21.87, "lng": 86.35},
    {"name": "Satpura Tiger Reserve", "state": "Madhya Pradesh", "lat": 22.42, "lng": 78.18},
    {"name": "Bandipur National Park", "state": "Karnataka", "lat": 11.66, "lng": 76.62},
    {"name": "Silent Valley", "state": "Kerala", "lat": 11.13, "lng": 76.43}
]

satellites = ["VIIRS_SNPP", "VIIRS_NOAA20", "MODIS_Terra", "MODIS_Aqua"]
base_time = datetime.datetime.fromisoformat("2026-09-27T13:00:00+05:30")

hotspots = []
hid = 1

def make_hotspot(loc, is_ind, is_uncertain=False):
    global hid
    
    dt = base_time - datetime.timedelta(minutes=random.randint(0, 48*60))
    dt_str = dt.isoformat(timespec='seconds')
    
    lat = loc['lat'] + random.uniform(-0.01, 0.01)
    lng = loc['lng'] + random.uniform(-0.01, 0.01)
    
    sat = random.choice(satellites)
    is_day = 6 <= dt.hour <= 18
    daynight = "D" if is_day else "N"
    
    if is_ind:
        frp = round(random.uniform(50, 350), 1)
        brightness = round(random.uniform(320, 480), 1)
        confidence = random.choice(["high", "nominal"])
        cls = "industrial_fire"
        cls_conf = round(random.uniform(0.85, 0.98), 2)
        dist = random.randint(50, 300)
        flag_reason = "High FRP persistent near known industrial infrastructure"
        osm = {"nearest_industrial": loc['name'], "distance_m": dist, "zone_type": loc.get('type', 'industrial')}
    elif is_uncertain:
        frp = round(random.uniform(20, 100), 1)
        brightness = round(random.uniform(300, 380), 1)
        confidence = "nominal"
        cls = "uncertain"
        cls_conf = round(random.uniform(0.55, 0.75), 2)
        dist = random.randint(300, 1500)
        flag_reason = "Moderate FRP near edge of industrial zone, requires verification"
        osm = {"nearest_industrial": loc['name'], "distance_m": dist, "zone_type": loc.get('type', 'industrial')}
    else:
        frp = round(random.uniform(5, 80), 1)
        brightness = round(random.uniform(300, 350), 1)
        confidence = random.choice(["nominal", "low", "high"])
        cls = "natural_wildfire"
        cls_conf = round(random.uniform(0.70, 0.95), 2)
        dist = random.randint(2000, 8000)
        flag_reason = "Vegetation fire far from industrial sources"
        osm = {"nearest_industrial": "None", "distance_m": dist, "zone_type": "none"}
        
    passes = random.randint(1, 8) if is_ind else random.randint(1, 3)
    first_det = (dt - datetime.timedelta(hours=random.randint(1, 48))).isoformat(timespec='seconds')
    
    hs = {
        "id": f"FH-20260927-{hid:03d}",
        "latitude": round(lat, 5),
        "longitude": round(lng, 5),
        "location_name": loc['name'] if is_ind or is_uncertain else f"{loc['name']} Outskirts",
        "state": loc['state'],
        "detected_at": dt_str,
        "satellite": sat,
        "frp": frp,
        "brightness": brightness,
        "confidence": confidence,
        "scan": round(random.uniform(0.4, 1.2), 2),
        "track": round(random.uniform(0.4, 1.2), 2),
        "daynight": daynight,
        "classification": cls,
        "classification_confidence": cls_conf,
        "osm_proximity": osm,
        "persistence": {
            "satellite_passes": passes,
            "first_detected": first_det,
            "is_persistent": passes > 2
        },
        "flagged_reason": flag_reason
    }
    hid += 1
    return hs

# Generate ~20 industrial
for _ in range(20):
    loc = random.choice(zones)
    hotspots.append(make_hotspot(loc, True))

# Generate ~4 uncertain
for _ in range(4):
    loc = random.choice(zones)
    hotspots.append(make_hotspot(loc, False, True))

# Generate ~5 natural
for _ in range(5):
    loc = random.choice(wildfire_locs)
    hotspots.append(make_hotspot(loc, False, False))

with open(r'd:\PROJECTS\SIH26162\data\mock-hotspots.json', 'w') as f:
    json.dump(hotspots, f, indent=2)

print("Generated files successfully.")
