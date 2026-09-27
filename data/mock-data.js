window.MOCK_HOTSPOTS = [
  {
    "id": "FH-20260927-001",
    "latitude": 22.7842,
    "longitude": 86.2031,
    "location_name": "Tata Steel Works, Jamshedpur",
    "state": "Jharkhand",
    "detected_at": "2026-09-27T12:47:23+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 287.4,
    "brightness": 452.3,
    "confidence": "high",
    "scan": 0.48,
    "track": 0.53,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.97,
    "osm_proximity": {
      "nearest_industrial": "Tata Steel Blast Furnace Complex",
      "distance_m": 85,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 7,
      "first_detected": "2026-09-25T14:23:11+05:30",
      "is_persistent": true
    },
    "flagged_reason": "85m from Tata Steel blast furnace, persistent across 7 satellite passes over 46 hours"
  },
  {
    "id": "FH-20260927-002",
    "latitude": 22.7798,
    "longitude": 86.1964,
    "location_name": "Tata Steel Coke Oven Battery, Jamshedpur",
    "state": "Jharkhand",
    "detected_at": "2026-09-27T12:47:19+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 195.8,
    "brightness": 418.7,
    "confidence": "high",
    "scan": 0.49,
    "track": 0.52,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.95,
    "osm_proximity": {
      "nearest_industrial": "Tata Steel Coke Oven Plant",
      "distance_m": 120,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 6,
      "first_detected": "2026-09-25T20:11:45+05:30",
      "is_persistent": true
    },
    "flagged_reason": "120m from coke oven battery, FRP 195.8 MW consistent with coking process thermal signature"
  },
  {
    "id": "FH-20260927-003",
    "latitude": 21.2147,
    "longitude": 81.3821,
    "location_name": "Bhilai Steel Plant, Blast Furnace #7",
    "state": "Chhattisgarh",
    "detected_at": "2026-09-27T11:32:08+05:30",
    "satellite": "MODIS_Terra",
    "frp": 312.5,
    "brightness": 467.1,
    "confidence": "high",
    "scan": 0.92,
    "track": 0.88,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.98,
    "osm_proximity": {
      "nearest_industrial": "SAIL Bhilai Steel Plant",
      "distance_m": 65,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 8,
      "first_detected": "2026-09-25T09:17:33+05:30",
      "is_persistent": true
    },
    "flagged_reason": "Highest FRP in region at 312.5 MW, 65m from BF#7 slag pit, continuous detection across all 8 passes"
  },
  {
    "id": "FH-20260927-004",
    "latitude": 17.6312,
    "longitude": 83.1745,
    "location_name": "Vizag Steel Plant, SMS Area",
    "state": "Andhra Pradesh",
    "detected_at": "2026-09-27T10:18:42+05:30",
    "satellite": "VIIRS_SNPP",
    "frp": 178.3,
    "brightness": 402.9,
    "confidence": "high",
    "scan": 0.44,
    "track": 0.47,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.93,
    "osm_proximity": {
      "nearest_industrial": "RINL Vizag Steel SMS-2",
      "distance_m": 145,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 5,
      "first_detected": "2026-09-26T04:42:17+05:30",
      "is_persistent": true
    },
    "flagged_reason": "145m from Steel Melting Shop, FRP pattern matches converter tapping cycle (periodic spikes)"
  },
  {
    "id": "FH-20260927-005",
    "latitude": 22.3418,
    "longitude": 69.8712,
    "location_name": "Reliance Jamnagar Refinery, CDU Block",
    "state": "Gujarat",
    "detected_at": "2026-09-27T09:53:14+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 341.2,
    "brightness": 478.4,
    "confidence": "high",
    "scan": 0.41,
    "track": 0.45,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.98,
    "osm_proximity": {
      "nearest_industrial": "Reliance Jamnagar Crude Distillation Unit",
      "distance_m": 52,
      "zone_type": "refinery"
    },
    "persistence": {
      "satellite_passes": 8,
      "first_detected": "2026-09-25T06:28:51+05:30",
      "is_persistent": true
    },
    "flagged_reason": "52m inside refinery perimeter, highest FRP recorded (341.2 MW), flare stack thermal signature confirmed"
  },
  {
    "id": "FH-20260927-006",
    "latitude": 22.3451,
    "longitude": 69.8648,
    "location_name": "Reliance Jamnagar Refinery, Flare Tower",
    "state": "Gujarat",
    "detected_at": "2026-09-27T09:53:11+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 248.7,
    "brightness": 441.2,
    "confidence": "high",
    "scan": 0.42,
    "track": 0.44,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.96,
    "osm_proximity": {
      "nearest_industrial": "Reliance Jamnagar Ground Flare",
      "distance_m": 78,
      "zone_type": "refinery"
    },
    "persistence": {
      "satellite_passes": 8,
      "first_detected": "2026-09-25T06:28:51+05:30",
      "is_persistent": true
    },
    "flagged_reason": "78m from ground flare stack, persistent thermal source co-located with CDU block detection"
  },
  {
    "id": "FH-20260927-007",
    "latitude": 22.2234,
    "longitude": 84.8598,
    "location_name": "Rourkela Steel Plant, Sinter Plant",
    "state": "Odisha",
    "detected_at": "2026-09-27T08:41:37+05:30",
    "satellite": "MODIS_Aqua",
    "frp": 145.2,
    "brightness": 389.6,
    "confidence": "high",
    "scan": 0.87,
    "track": 0.91,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.91,
    "osm_proximity": {
      "nearest_industrial": "SAIL Rourkela Sinter Plant",
      "distance_m": 198,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 4,
      "first_detected": "2026-09-26T14:55:22+05:30",
      "is_persistent": true
    },
    "flagged_reason": "198m from sinter plant, FRP 145.2 MW consistent with sintering bed ignition temperature"
  },
  {
    "id": "FH-20260927-008",
    "latitude": 23.6723,
    "longitude": 86.1542,
    "location_name": "Bokaro Steel Plant, Hot Strip Mill",
    "state": "Jharkhand",
    "detected_at": "2026-09-27T07:14:52+05:30",
    "satellite": "VIIRS_SNPP",
    "frp": 167.9,
    "brightness": 411.8,
    "confidence": "high",
    "scan": 0.51,
    "track": 0.48,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.92,
    "osm_proximity": {
      "nearest_industrial": "SAIL Bokaro Hot Strip Mill",
      "distance_m": 112,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 5,
      "first_detected": "2026-09-26T01:33:18+05:30",
      "is_persistent": true
    },
    "flagged_reason": "112m from hot strip mill, temperature profile matches rolling mill reheat furnace operation"
  },
  {
    "id": "FH-20260927-009",
    "latitude": 22.0618,
    "longitude": 88.0587,
    "location_name": "Haldia Petrochemicals, Naphtha Cracker",
    "state": "West Bengal",
    "detected_at": "2026-09-27T05:28:33+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 224.6,
    "brightness": 436.1,
    "confidence": "high",
    "scan": 0.46,
    "track": 0.49,
    "daynight": "N",
    "classification": "industrial_fire",
    "classification_confidence": 0.94,
    "osm_proximity": {
      "nearest_industrial": "HPL Naphtha Cracker Unit",
      "distance_m": 93,
      "zone_type": "petrochemical"
    },
    "persistence": {
      "satellite_passes": 6,
      "first_detected": "2026-09-25T23:47:05+05:30",
      "is_persistent": true
    },
    "flagged_reason": "93m from naphtha cracker, nocturnal detection with FRP 224.6 MW matches petrochemical flare pattern"
  },
  {
    "id": "FH-20260927-010",
    "latitude": 20.2734,
    "longitude": 86.6712,
    "location_name": "Indian Oil Paradip Refinery, Coker Unit",
    "state": "Odisha",
    "detected_at": "2026-09-27T03:47:18+05:30",
    "satellite": "VIIRS_SNPP",
    "frp": 189.3,
    "brightness": 425.7,
    "confidence": "high",
    "scan": 0.52,
    "track": 0.55,
    "daynight": "N",
    "classification": "industrial_fire",
    "classification_confidence": 0.93,
    "osm_proximity": {
      "nearest_industrial": "IOCL Paradip Delayed Coker Unit",
      "distance_m": 107,
      "zone_type": "refinery"
    },
    "persistence": {
      "satellite_passes": 5,
      "first_detected": "2026-09-26T09:21:44+05:30",
      "is_persistent": true
    },
    "flagged_reason": "107m from delayed coker unit, night detection confirms active flaring, persisted 5 passes"
  },
  {
    "id": "FH-20260927-011",
    "latitude": 20.8413,
    "longitude": 85.0978,
    "location_name": "Jindal Steel, DRI Plant, Angul",
    "state": "Odisha",
    "detected_at": "2026-09-27T02:11:47+05:30",
    "satellite": "MODIS_Terra",
    "frp": 156.8,
    "brightness": 398.4,
    "confidence": "nominal",
    "scan": 0.94,
    "track": 0.89,
    "daynight": "N",
    "classification": "industrial_fire",
    "classification_confidence": 0.89,
    "osm_proximity": {
      "nearest_industrial": "JSPL DRI Rotary Kiln",
      "distance_m": 174,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 4,
      "first_detected": "2026-09-26T14:38:29+05:30",
      "is_persistent": true
    },
    "flagged_reason": "174m from DRI rotary kiln, consistent thermal output during night shift operations"
  },
  {
    "id": "FH-20260927-012",
    "latitude": 22.3512,
    "longitude": 82.6834,
    "location_name": "NTPC Korba Super Thermal Power Station",
    "state": "Chhattisgarh",
    "detected_at": "2026-09-27T01:23:56+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 278.1,
    "brightness": 448.2,
    "confidence": "high",
    "scan": 0.43,
    "track": 0.47,
    "daynight": "N",
    "classification": "industrial_fire",
    "classification_confidence": 0.96,
    "osm_proximity": {
      "nearest_industrial": "NTPC Korba Unit 6 Boiler",
      "distance_m": 68,
      "zone_type": "thermal_power"
    },
    "persistence": {
      "satellite_passes": 7,
      "first_detected": "2026-09-25T13:09:42+05:30",
      "is_persistent": true
    },
    "flagged_reason": "68m from Unit 6 boiler, FRP 278 MW matches 500MW coal-fired unit baseload thermal output"
  },
  {
    "id": "FH-20260927-013",
    "latitude": 23.5532,
    "longitude": 87.3187,
    "location_name": "Durgapur Steel Plant, Wheel & Axle Plant",
    "state": "West Bengal",
    "detected_at": "2026-09-26T22:38:14+05:30",
    "satellite": "VIIRS_SNPP",
    "frp": 134.7,
    "brightness": 387.3,
    "confidence": "nominal",
    "scan": 0.57,
    "track": 0.52,
    "daynight": "N",
    "classification": "industrial_fire",
    "classification_confidence": 0.88,
    "osm_proximity": {
      "nearest_industrial": "SAIL Durgapur Wheel & Axle Plant",
      "distance_m": 221,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 3,
      "first_detected": "2026-09-26T10:14:53+05:30",
      "is_persistent": true
    },
    "flagged_reason": "221m from wheel forging facility, thermal signature consistent with induction furnace operation"
  },
  {
    "id": "FH-20260927-014",
    "latitude": 22.8418,
    "longitude": 69.7312,
    "location_name": "Adani Power Mundra, Unit 4 Stack",
    "state": "Gujarat",
    "detected_at": "2026-09-26T19:52:31+05:30",
    "satellite": "MODIS_Aqua",
    "frp": 245.6,
    "brightness": 439.8,
    "confidence": "high",
    "scan": 0.88,
    "track": 0.85,
    "daynight": "N",
    "classification": "industrial_fire",
    "classification_confidence": 0.95,
    "osm_proximity": {
      "nearest_industrial": "Adani Mundra UMPP Unit 4",
      "distance_m": 89,
      "zone_type": "thermal_power"
    },
    "persistence": {
      "satellite_passes": 6,
      "first_detected": "2026-09-25T19:18:07+05:30",
      "is_persistent": true
    },
    "flagged_reason": "89m from UMPP Unit 4, baseload coal plant with expected continuous thermal output"
  },
  {
    "id": "FH-20260927-015",
    "latitude": 23.8712,
    "longitude": 86.9734,
    "location_name": "IISCO Steel Plant, Burnpur",
    "state": "West Bengal",
    "detected_at": "2026-09-26T17:29:08+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 118.4,
    "brightness": 376.2,
    "confidence": "nominal",
    "scan": 0.54,
    "track": 0.58,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.86,
    "osm_proximity": {
      "nearest_industrial": "IISCO Burnpur Blast Furnace",
      "distance_m": 267,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 3,
      "first_detected": "2026-09-26T05:47:31+05:30",
      "is_persistent": true
    },
    "flagged_reason": "267m from blast furnace, moderate FRP but location within plant boundary confirms industrial origin"
  },
  {
    "id": "FH-20260927-016",
    "latitude": 22.7923,
    "longitude": 86.2187,
    "location_name": "Near Tata Steel Adityapur Industrial Area",
    "state": "Jharkhand",
    "detected_at": "2026-09-27T11:08:43+05:30",
    "satellite": "VIIRS_SNPP",
    "frp": 72.4,
    "brightness": 348.9,
    "confidence": "nominal",
    "scan": 0.62,
    "track": 0.58,
    "daynight": "D",
    "classification": "uncertain",
    "classification_confidence": 0.68,
    "osm_proximity": {
      "nearest_industrial": "Tata Steel Works Boundary",
      "distance_m": 847,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 2,
      "first_detected": "2026-09-27T04:32:18+05:30",
      "is_persistent": false
    },
    "flagged_reason": "847m from steel plant boundary, FRP 72.4 MW too high for vegetation but below typical industrial levels"
  },
  {
    "id": "FH-20260927-017",
    "latitude": 21.2287,
    "longitude": 81.3945,
    "location_name": "Bhilai Township Periphery",
    "state": "Chhattisgarh",
    "detected_at": "2026-09-27T06:22:17+05:30",
    "satellite": "MODIS_Aqua",
    "frp": 58.3,
    "brightness": 334.7,
    "confidence": "nominal",
    "scan": 0.98,
    "track": 1.02,
    "daynight": "D",
    "classification": "uncertain",
    "classification_confidence": 0.62,
    "osm_proximity": {
      "nearest_industrial": "SAIL Bhilai Plant Boundary",
      "distance_m": 1240,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 1,
      "first_detected": "2026-09-27T06:22:17+05:30",
      "is_persistent": false
    },
    "flagged_reason": "1.2km from plant boundary, single pass detection \u00e2\u20ac\u201d could be waste burning or small industrial workshop"
  },
  {
    "id": "FH-20260927-018",
    "latitude": 22.3598,
    "longitude": 69.8921,
    "location_name": "Jamnagar Industrial Estate Outskirts",
    "state": "Gujarat",
    "detected_at": "2026-09-26T23:14:52+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 89.7,
    "brightness": 361.4,
    "confidence": "nominal",
    "scan": 0.47,
    "track": 0.51,
    "daynight": "N",
    "classification": "uncertain",
    "classification_confidence": 0.71,
    "osm_proximity": {
      "nearest_industrial": "Reliance SEZ Boundary",
      "distance_m": 678,
      "zone_type": "refinery"
    },
    "persistence": {
      "satellite_passes": 2,
      "first_detected": "2026-09-26T17:41:33+05:30",
      "is_persistent": false
    },
    "flagged_reason": "678m from refinery SEZ boundary, night-time source \u00e2\u20ac\u201d possible unauthorized industrial activity or pipeline leak"
  },
  {
    "id": "FH-20260927-019",
    "latitude": 23.6478,
    "longitude": 86.1823,
    "location_name": "Bokaro Industrial Area Extension",
    "state": "Jharkhand",
    "detected_at": "2026-09-26T15:47:29+05:30",
    "satellite": "MODIS_Terra",
    "frp": 45.2,
    "brightness": 321.8,
    "confidence": "nominal",
    "scan": 1.08,
    "track": 0.97,
    "daynight": "D",
    "classification": "uncertain",
    "classification_confidence": 0.58,
    "osm_proximity": {
      "nearest_industrial": "SAIL Bokaro Township",
      "distance_m": 1450,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 1,
      "first_detected": "2026-09-26T15:47:29+05:30",
      "is_persistent": false
    },
    "flagged_reason": "1.45km from steel township, low confidence single detection \u00e2\u20ac\u201d could be agricultural residue burning"
  },
  {
    "id": "FH-20260927-020",
    "latitude": 17.6487,
    "longitude": 83.1923,
    "location_name": "Visakhapatnam Port Industrial Cluster",
    "state": "Andhra Pradesh",
    "detected_at": "2026-09-26T13:11:42+05:30",
    "satellite": "VIIRS_SNPP",
    "frp": 67.8,
    "brightness": 342.1,
    "confidence": "nominal",
    "scan": 0.58,
    "track": 0.54,
    "daynight": "D",
    "classification": "uncertain",
    "classification_confidence": 0.65,
    "osm_proximity": {
      "nearest_industrial": "Vizag Port Bulk Handling Area",
      "distance_m": 934,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 2,
      "first_detected": "2026-09-26T07:28:15+05:30",
      "is_persistent": false
    },
    "flagged_reason": "934m from port bulk handling, moderate FRP \u00e2\u20ac\u201d possible ship-breaking activity or cargo fire"
  },
  {
    "id": "FH-20260927-021",
    "latitude": 20.2612,
    "longitude": 86.6834,
    "location_name": "Near Paradip Port Storage Tanks",
    "state": "Odisha",
    "detected_at": "2026-09-26T10:38:55+05:30",
    "satellite": "MODIS_Aqua",
    "frp": 51.3,
    "brightness": 328.4,
    "confidence": "nominal",
    "scan": 0.94,
    "track": 0.91,
    "daynight": "D",
    "classification": "uncertain",
    "classification_confidence": 0.59,
    "osm_proximity": {
      "nearest_industrial": "IOCL Paradip Tank Farm",
      "distance_m": 1180,
      "zone_type": "refinery"
    },
    "persistence": {
      "satellite_passes": 1,
      "first_detected": "2026-09-26T10:38:55+05:30",
      "is_persistent": false
    },
    "flagged_reason": "1.18km from tank farm, single MODIS pixel \u00e2\u20ac\u201d coarse resolution makes precise attribution uncertain"
  },
  {
    "id": "FH-20260927-022",
    "latitude": 21.8734,
    "longitude": 86.3521,
    "location_name": "Simlipal National Park, Northern Range",
    "state": "Odisha",
    "detected_at": "2026-09-27T10:54:18+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 42.1,
    "brightness": 332.8,
    "confidence": "high",
    "scan": 0.44,
    "track": 0.48,
    "daynight": "D",
    "classification": "natural_wildfire",
    "classification_confidence": 0.91,
    "osm_proximity": {
      "nearest_industrial": "None",
      "distance_m": 6720,
      "zone_type": "none"
    },
    "persistence": {
      "satellite_passes": 3,
      "first_detected": "2026-09-26T22:18:42+05:30",
      "is_persistent": true
    },
    "flagged_reason": "Dense sal forest, 6.7km from nearest infrastructure, NDVI confirms active vegetation \u00e2\u20ac\u201d seasonal forest fire"
  },
  {
    "id": "FH-20260927-023",
    "latitude": 21.8912,
    "longitude": 86.3287,
    "location_name": "Simlipal National Park, Chahala Range",
    "state": "Odisha",
    "detected_at": "2026-09-27T10:54:22+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 28.7,
    "brightness": 318.4,
    "confidence": "nominal",
    "scan": 0.45,
    "track": 0.49,
    "daynight": "D",
    "classification": "natural_wildfire",
    "classification_confidence": 0.88,
    "osm_proximity": {
      "nearest_industrial": "None",
      "distance_m": 7140,
      "zone_type": "none"
    },
    "persistence": {
      "satellite_passes": 2,
      "first_detected": "2026-09-27T04:31:08+05:30",
      "is_persistent": false
    },
    "flagged_reason": "Adjacent to northern range detection, fire front spreading southwest through deciduous forest"
  },
  {
    "id": "FH-20260927-024",
    "latitude": 22.4187,
    "longitude": 78.1823,
    "location_name": "Satpura Tiger Reserve, Tawa Buffer Zone",
    "state": "Madhya Pradesh",
    "detected_at": "2026-09-27T08:17:33+05:30",
    "satellite": "MODIS_Terra",
    "frp": 35.4,
    "brightness": 324.1,
    "confidence": "nominal",
    "scan": 0.91,
    "track": 0.87,
    "daynight": "D",
    "classification": "natural_wildfire",
    "classification_confidence": 0.85,
    "osm_proximity": {
      "nearest_industrial": "None",
      "distance_m": 4280,
      "zone_type": "none"
    },
    "persistence": {
      "satellite_passes": 2,
      "first_detected": "2026-09-27T02:43:17+05:30",
      "is_persistent": false
    },
    "flagged_reason": "Tiger reserve buffer zone, 4.3km from nearest road, typical dry-season understory fire pattern"
  },
  {
    "id": "FH-20260927-025",
    "latitude": 11.6623,
    "longitude": 76.6198,
    "location_name": "Bandipur National Park, Eastern Slope",
    "state": "Karnataka",
    "detected_at": "2026-09-26T14:22:47+05:30",
    "satellite": "VIIRS_SNPP",
    "frp": 18.9,
    "brightness": 311.7,
    "confidence": "nominal",
    "scan": 0.53,
    "track": 0.49,
    "daynight": "D",
    "classification": "natural_wildfire",
    "classification_confidence": 0.82,
    "osm_proximity": {
      "nearest_industrial": "None",
      "distance_m": 5430,
      "zone_type": "none"
    },
    "persistence": {
      "satellite_passes": 1,
      "first_detected": "2026-09-26T14:22:47+05:30",
      "is_persistent": false
    },
    "flagged_reason": "Western Ghats deciduous forest, low FRP single detection \u00e2\u20ac\u201d likely controlled burn or small ground fire"
  },
  {
    "id": "FH-20260927-026",
    "latitude": 11.1312,
    "longitude": 76.4287,
    "location_name": "Silent Valley Buffer, Attappadi Plateau",
    "state": "Kerala",
    "detected_at": "2026-09-26T08:47:12+05:30",
    "satellite": "MODIS_Aqua",
    "frp": 12.3,
    "brightness": 305.2,
    "confidence": "low",
    "scan": 1.12,
    "track": 1.08,
    "daynight": "D",
    "classification": "natural_wildfire",
    "classification_confidence": 0.76,
    "osm_proximity": {
      "nearest_industrial": "None",
      "distance_m": 8120,
      "zone_type": "none"
    },
    "persistence": {
      "satellite_passes": 1,
      "first_detected": "2026-09-26T08:47:12+05:30",
      "is_persistent": false
    },
    "flagged_reason": "8.1km from any structure, low FRP with coarse MODIS pixel \u00e2\u20ac\u201d possible slash-and-burn agriculture"
  },
  {
    "id": "FH-20260927-027",
    "latitude": 17.6912,
    "longitude": 83.2734,
    "location_name": "HPCL Visakh Refinery, FCC Unit",
    "state": "Andhra Pradesh",
    "detected_at": "2026-09-26T21:33:48+05:30",
    "satellite": "VIIRS_NOAA20",
    "frp": 203.4,
    "brightness": 428.9,
    "confidence": "high",
    "scan": 0.43,
    "track": 0.46,
    "daynight": "N",
    "classification": "industrial_fire",
    "classification_confidence": 0.94,
    "osm_proximity": {
      "nearest_industrial": "HPCL Visakh FCC Regenerator",
      "distance_m": 134,
      "zone_type": "refinery"
    },
    "persistence": {
      "satellite_passes": 5,
      "first_detected": "2026-09-25T21:12:34+05:30",
      "is_persistent": true
    },
    "flagged_reason": "134m from FCC regenerator, night-time FRP 203 MW matches catalyst regeneration burn cycle"
  },
  {
    "id": "FH-20260927-028",
    "latitude": 21.1123,
    "longitude": 72.6312,
    "location_name": "AM/NS Hazira Steel Complex",
    "state": "Gujarat",
    "detected_at": "2026-09-26T16:18:27+05:30",
    "satellite": "MODIS_Terra",
    "frp": 198.7,
    "brightness": 421.3,
    "confidence": "high",
    "scan": 0.89,
    "track": 0.92,
    "daynight": "D",
    "classification": "industrial_fire",
    "classification_confidence": 0.92,
    "osm_proximity": {
      "nearest_industrial": "AM/NS Hazira Hot Strip Mill",
      "distance_m": 156,
      "zone_type": "steel_plant"
    },
    "persistence": {
      "satellite_passes": 4,
      "first_detected": "2026-09-26T04:42:11+05:30",
      "is_persistent": true
    },
    "flagged_reason": "156m from hot strip mill, FRP 198.7 MW with 4-pass persistence confirms continuous steelmaking operation"
  }
];

window.MOCK_ZONES = [
  {
    "id": "IZ-01",
    "name": "Tata Steel Works",
    "type": "steel_plant",
    "lat": 22.78,
    "lng": 86.2,
    "radius_m": 5000,
    "operator": "Tata Steel",
    "city": "Jamshedpur",
    "state": "Jharkhand"
  },
  {
    "id": "IZ-02",
    "name": "Bhilai Steel Plant",
    "type": "steel_plant",
    "lat": 21.21,
    "lng": 81.38,
    "radius_m": 6000,
    "operator": "SAIL",
    "city": "Bhilai",
    "state": "Chhattisgarh"
  },
  {
    "id": "IZ-03",
    "name": "Vizag Steel Plant",
    "type": "steel_plant",
    "lat": 17.63,
    "lng": 83.17,
    "radius_m": 4500,
    "operator": "RINL",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh"
  },
  {
    "id": "IZ-04",
    "name": "IISCO Steel Plant",
    "type": "steel_plant",
    "lat": 23.87,
    "lng": 86.97,
    "radius_m": 4000,
    "operator": "SAIL",
    "city": "Burnpur",
    "state": "West Bengal"
  },
  {
    "id": "IZ-05",
    "name": "Rourkela Steel Plant",
    "type": "steel_plant",
    "lat": 22.22,
    "lng": 84.86,
    "radius_m": 5500,
    "operator": "SAIL",
    "city": "Rourkela",
    "state": "Odisha"
  },
  {
    "id": "IZ-06",
    "name": "Bokaro Steel City",
    "type": "steel_plant",
    "lat": 23.67,
    "lng": 86.15,
    "radius_m": 7000,
    "operator": "SAIL",
    "city": "Bokaro",
    "state": "Jharkhand"
  },
  {
    "id": "IZ-07",
    "name": "Jindal Steel",
    "type": "steel_plant",
    "lat": 20.84,
    "lng": 85.1,
    "radius_m": 3500,
    "operator": "JSPL",
    "city": "Angul",
    "state": "Odisha"
  },
  {
    "id": "IZ-08",
    "name": "NTPC Korba",
    "type": "thermal_power",
    "lat": 22.35,
    "lng": 82.68,
    "radius_m": 4000,
    "operator": "NTPC",
    "city": "Korba",
    "state": "Chhattisgarh"
  },
  {
    "id": "IZ-09",
    "name": "Haldia Petrochemicals",
    "type": "petrochemical",
    "lat": 22.06,
    "lng": 88.06,
    "radius_m": 3000,
    "operator": "HPL",
    "city": "Haldia",
    "state": "West Bengal"
  },
  {
    "id": "IZ-10",
    "name": "Paradip Refinery",
    "type": "refinery",
    "lat": 20.27,
    "lng": 86.67,
    "radius_m": 4500,
    "operator": "IOCL",
    "city": "Paradip",
    "state": "Odisha"
  },
  {
    "id": "IZ-11",
    "name": "Durgapur Steel Plant",
    "type": "steel_plant",
    "lat": 23.55,
    "lng": 87.32,
    "radius_m": 5000,
    "operator": "SAIL",
    "city": "Durgapur",
    "state": "West Bengal"
  },
  {
    "id": "IZ-12",
    "name": "Adani Power Mundra",
    "type": "thermal_power",
    "lat": 22.84,
    "lng": 69.73,
    "radius_m": 4000,
    "operator": "Adani Power",
    "city": "Mundra",
    "state": "Gujarat"
  },
  {
    "id": "IZ-13",
    "name": "Jamnagar Refinery",
    "type": "refinery",
    "lat": 22.34,
    "lng": 69.87,
    "radius_m": 8000,
    "operator": "Reliance",
    "city": "Jamnagar",
    "state": "Gujarat"
  },
  {
    "id": "IZ-14",
    "name": "Essar Steel Hazira",
    "type": "steel_plant",
    "lat": 21.11,
    "lng": 72.63,
    "radius_m": 4500,
    "operator": "AM/NS India",
    "city": "Surat",
    "state": "Gujarat"
  },
  {
    "id": "IZ-15",
    "name": "HPCL Visakh Refinery",
    "type": "refinery",
    "lat": 17.69,
    "lng": 83.27,
    "radius_m": 3500,
    "operator": "HPCL",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh"
  }
];
