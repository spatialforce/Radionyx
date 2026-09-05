export default "https://www.radionyx.co.zw";
export const siteName = "Radionyx Geospatial Solutions";
export const siteTagline = "GIS Services in Zimbabwe";

export const contactInfo = {
  phone: "+263 71 742 8085",
  phoneAlt: "+263 77 913 5076",
  email: "info@radionyx.co.zw",
  address: "17 Longhurst Road, Northlyne, Bulawayo",
  city: "Bulawayo",
  region: "Bulawayo Province",
  country: "Zimbabwe",
  hours: "Mon–Fri: 8:00 AM – 4:30 PM",
};

export const mainNavLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Work", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Work", href: "/projects" },
    { label: "Insights", href: "/insights" },
  ],
  support: [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy-policy" },
  ],
} as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export const categories = [
  "All",
  "Data & Mapping",
  "Remote Sensing",
  "Environment",
  "Water",
  "Terrain & Modelling",
  "Urban & Infrastructure",
  "Web GIS & Training",
] as const;

export type ServiceCategory = (typeof categories)[number];

export type CatalogService = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: Exclude<ServiceCategory, "All">;
  caption: string;
  features: string[];
  outputs: string[];
};

const img = (name: string) => `/images/services/${name}.webp`;

export const serviceCatalog: CatalogService[] = [
  {
    id: "gis-data-digitization",
    slug: "gis-data-digitization",
    title: "GIS Data Digitization",
    description:
      "Convert paper maps, scanned records and analogue geographic information into structured, GIS-ready vector data.",
    price: 150,
    image: img("digitizing"),
    category: "Data & Mapping",
    caption: "Earth observation imagery — the source material we digitise into usable GIS layers.",
    features: [
      "On-screen digitising of maps and plans",
      "Attribute capture from source records",
      "Topology cleaning and snapping",
      "Quality control against source documents",
    ],
    outputs: ["Shapefiles / GeoPackage layers", "Attribute tables", "Digitising report"],
  },
  {
    id: "spatial-database-setup",
    slug: "spatial-database-setup",
    title: "Spatial Database Setup",
    description:
      "Structure geographic information into an organised spatial database that teams can query, update and share.",
    price: 450,
    image: img("database"),
    category: "Data & Mapping",
    caption:
      "GIS analysis workspace — overlaying roads, water and land-use layers inside a structured spatial database.",
    features: [
      "Schema design for spatial datasets",
      "Coordinate system and topology rules",
      "PostGIS / file-geodatabase setup",
      "Data loading and validation",
    ],
    outputs: ["Spatial database", "Data dictionary", "Access workflow notes"],
  },
  {
    id: "custom-map-design",
    slug: "custom-map-design",
    title: "Custom Map Design",
    description:
      "Professional cartography for reports, presentations, planning documents and field use — designed to be read, not just produced.",
    price: 90,
    image: img("zimbabwe-cartography"),
    category: "Data & Mapping",
    caption: "National cartography of Zimbabwe — administrative geography, designed as a print-ready map.",
    features: [
      "Print-ready layout and hierarchy",
      "Custom symbology and legends",
      "Scale-appropriate labelling",
      "Digital and presentation variants",
    ],
    outputs: ["Print-ready PDF maps", "Digital map layouts", "Report figures"],
  },
  {
    id: "boundary-processing",
    slug: "boundary-processing",
    title: "Boundary & Survey Data Processing",
    description:
      "Clean, organise and integrate boundary, cadastral and survey-related spatial data so parcels actually fit together.",
    price: 250,
    image: img("cadastral-chirumhanzu"),
    category: "Data & Mapping",
    caption: "Chirumhanzu cadastral sheet — parcel fabric, roads and settlement extents from survey records.",
    features: [
      "Coordinate transformation and projection",
      "Parcel edge-matching",
      "Survey record reconciliation",
      "Boundary topology repair",
    ],
    outputs: ["Cleaned parcel layers", "Boundary GIS files", "Processing notes"],
  },
  {
    id: "cadastral-mapping",
    slug: "cadastral-mapping",
    title: "Cadastral Mapping",
    description:
      "Create and organise land-parcel and cadastral GIS information for land administration, planning and property work.",
    price: 500,
    image: img("cadastral"),
    category: "Data & Mapping",
    caption: "Aerial urban fabric — the kind of dense parcel geography cadastral mapping has to capture cleanly.",
    features: [
      "Parcel polygon construction",
      "Owner / stand attribute tables",
      "Cadastral map series",
      "Integration with survey records",
    ],
    outputs: ["Cadastral GIS layers", "Parcel maps", "Attribute schedule"],
  },
  {
    id: "georeferencing",
    slug: "georeferencing",
    title: "Georeferencing & Rectification",
    description:
      "Align scanned maps, imagery and historic documents to real-world coordinates so they sit correctly in GIS.",
    price: 200,
    image: img("georeferencing"),
    category: "Data & Mapping",
    caption: "A paper map waiting to be tied to the earth — georeferencing puts historic sheets into GIS.",
    features: [
      "Control-point georeferencing",
      "Rubber-sheeting and rectification",
      "Accuracy assessment",
      "Export to GIS-ready rasters",
    ],
    outputs: ["Georeferenced rasters", "World files / GeoTIFFs", "RMSE report"],
  },
  {
    id: "spatial-data-conversion",
    slug: "spatial-data-conversion",
    title: "Spatial Data Format Conversion",
    description:
      "Convert geographic datasets between shapefile, GeoJSON, KML, GeoPackage, CAD and raster formats without losing meaning.",
    price: 150,
    image: img("convert"),
    category: "Data & Mapping",
    caption: "Infrastructure for moving data — conversion that keeps geometry, projection and attributes intact.",
    features: [
      "Vector and raster conversion",
      "Projection handling",
      "CAD to GIS translation",
      "Batch processing of large sets",
    ],
    outputs: ["Converted datasets", "Format notes", "Projection metadata"],
  },
  {
    id: "land-cover-classification",
    slug: "land-cover-classification",
    title: "Land Cover Classification",
    description:
      "Satellite-based classification of land-cover categories for a defined study area — agriculture, vegetation, built-up, water and bare land.",
    price: 500,
    image: img("land-cover-lulc"),
    category: "Remote Sensing",
    caption:
      "Land-use / land-cover map of Zimbabwe — classified satellite imagery as a national spatial baseline.",
    features: [
      "Supervised and unsupervised classification",
      "Class schema tailored to the project",
      "Accuracy assessment",
      "Change-ready raster outputs",
    ],
    outputs: ["Classified rasters", "LULC maps", "Accuracy statistics"],
  },
  {
    id: "google-earth-engine-analysis",
    slug: "google-earth-engine-analysis",
    title: "Google Earth Engine Services and Analysis",
    description:
      "Cloud-based geospatial processing and analysis using Google Earth Engine for large-scale environmental monitoring, time-series analysis, and data visualization.",
    price: 200,
    image: img("change-detection-gee"), 
    category: "Remote Sensing",
    caption:
      "Google Earth Engine analysis — processing vast satellite datasets in the cloud for actionable environmental insights.",
    features: [
      "Cloud-based raster processing",
      "Custom Earth Engine scripts (JS/Python)",
      "Large-scale time-series analysis",
      "Automated environmental monitoring",
    ],
    outputs: ["Interactive GEE Apps", "Exported spatial datasets", "Analysis statistics"],
  },
  {
    id: "vegetation-analysis",
    slug: "vegetation-analysis",
    title: "Vegetation & NDVI Analysis",
    description:
      "Analyse vegetation condition and change using satellite-derived indices such as NDVI, EVI and NDWI.",
    price: 350,
    image: img("vegetation-ndvi"),
    category: "Remote Sensing",
    caption: "NDVI map — vegetation vigour rendered as a continuous index across the study area.",
    features: [
      "Index calculation (NDVI, EVI, NDWI)",
      "Seasonal and annual composites",
      "Anomaly and drought screening",
      "Zonal statistics by farm or ward",
    ],
    outputs: ["Index rasters", "Vegetation maps", "Summary statistics"],
  },
  {
    id: "climate-data-analysis",
    slug: "climate-data-analysis",
    title: "Climate Data Analysis & Mapping",
    description:
      "Map and analyse spatial and temporal patterns in rainfall, temperature and other climate datasets.",
    price: 500,
    image: img("climate"),
    category: "Remote Sensing",
    caption: "Hyperspectral / climate-style raster — multi-band earth observation used for climatic mapping.",
    features: [
      "Gridded climate data processing",
      "Rainfall and temperature surfaces",
      "Anomaly mapping",
      "Seasonal summaries",
    ],
    outputs: ["Climate rasters", "Thematic climate maps", "Time-series tables"],
  },
  {
    id: "forest-vegetation-mapping",
    slug: "forest-vegetation-mapping",
    title: "Forest & Vegetation Mapping",
    description:
      "Map forest cover, woodland and vegetation structure for conservation, timber and land-management decisions.",
    price: 550,
    image: img("Gwampa forest"),
    category: "Remote Sensing",
    caption: "Chimanimani highlands — forest, woodland and escarpment vegetation mapped from imagery and GIS.",
    features: [
      "Forest / woodland classification",
      "Canopy and fragmentation metrics",
      "Buffer and reserve mapping",
      "Change in forest extent",
    ],
    outputs: ["Forest GIS layers", "Vegetation maps", "Area statistics"],
  },
  {
    id: "wetland-mapping",
    slug: "wetland-mapping",
    title: "Wetland Extent Mapping",
    description:
      "Map and analyse wetland extent using GIS and satellite imagery — seasonal water, reed beds and surrounding land use.",
    price: 450,
    image: img("wetland-extent"),
    category: "Environment",
    caption: "Wetland extent map — open water, marsh and surrounding land cover for a Zimbabwean wetland system.",
    features: [
      "Wetland boundary delineation",
      "Seasonal water-extent mapping",
      "Buffer and land-use context",
      "Multi-date comparison",
    ],
    outputs: ["Wetland polygons", "Extent maps", "Change figures"],
  },
  {
    id: "environmental-spatial-assessment",
    slug: "environmental-spatial-assessment",
    title: "Environmental Spatial Assessment",
    description:
      "GIS-based spatial support for environmental assessment, baseline studies and reporting.",
    price: 900,
    image: img("environmental-gwaai"),
    category: "Environment",
    caption: "Gwaai environmental GIS — catchments, vegetation and land systems brought into one assessment frame.",
    features: [
      "Baseline spatial inventory",
      "Sensitivity and constraint mapping",
      "Figures for ESIA / EMP reports",
      "Impact overlay analysis",
    ],
    outputs: ["Assessment GIS pack", "Report figures", "Constraint maps"],
  },
  {
    id: "habitat-suitability",
    slug: "habitat-suitability",
    title: "Habitat Suitability Modelling",
    description:
      "Model geographic conditions associated with habitat suitability using environmental, terrain and land-cover variables.",
    price: 600,
    image: img("white_rhino"),
    category: "Environment",
    caption: "Species distribution map — modelled habitat suitability across a conservation landscape.",
    features: [
      "Presence / environmental predictors",
      "Suitability surfaces",
      "Thresholded habitat classes",
      "Model validation notes",
    ],
    outputs: ["Suitability rasters", "Habitat maps", "Model documentation"],
  },
  {
    id: "data-cleaning",
    slug: "data-cleaning",
    title: "Data Cleaning",
    description:
      "Process, format, and correct errors in your raw spatial datasets to ensure accuracy, topological consistency, and readiness for analysis.",
    price: 100,
    image: img("data-cleaning"),
    category: "Data & Mapping",
    caption:
      "Structuring and repairing messy spatial data into clean, analysis-ready datasets.",
    features: [
      "Geometry validation and repair",
      "Attribute table standardization",
      "Coordinate system reprojection",
      "Topology error correction",
    ],
    outputs: ["Cleaned spatial datasets", "Topology error reports", "Standardized attributes"],
  },
  {
    id: "fire-risk",
    slug: "fire-risk",
    title: "Fire Risk & Burn Severity Mapping",
    description:
      "Map fire-related spatial patterns using GIS and remote sensing — fuel, risk and post-fire severity.",
    price: 450,
    image: img("fire-analysis"),
    category: "Environment",
    caption: "Mafungabusi forest — woodland fuel and burn-prone landscape used for fire-risk mapping.",
    features: [
      "Fuel and vegetation layers",
      "Fire-risk modelling",
      "Burn-severity indices",
      "Post-fire recovery mapping",
    ],
    outputs: ["Risk maps", "Burn-severity rasters", "Summary statistics"],
  },
  {
    id: "protected-area-mapping",
    slug: "protected-area-mapping",
    title: "Protected Area Mapping",
    description:
      "Map protected areas, buffers and surrounding land use for conservation planning and management.",
    price: 480,
    image: img("SA"),
    category: "Environment",
    caption: "Mbire conservation landscape — protected-area geography, settlement and surrounding land use.",
    features: [
      "Park and reserve boundary GIS",
      "Buffer and zonation maps",
      "Land-use pressure around reserves",
      "Management-plan figures",
    ],
    outputs: ["Protected-area layers", "Zonation maps", "Pressure overlays"],
  },
  {
    id: "erosion-risk",
    slug: "erosion-risk",
    title: "Erosion Risk Assessment",
    description:
      "Map spatial patterns associated with soil erosion risk using terrain, cover and rainfall variables.",
    price: 400,
    image: img("erosion-risk"),
    category: "Environment",
    caption: "Erosion risk map — high-risk slopes and catchments classified from terrain and land cover.",
    features: [
      "RUSLE-style factor layers",
      "Slope and cover analysis",
      "Hotspot mapping",
      "Intervention targeting",
    ],
    outputs: ["Erosion-risk rasters", "Hotspot maps", "Priority areas"],
  },
  {
    id: "watershed-delineation",
    slug: "watershed-delineation",
    title: "Watershed Delineation",
    description:
      "Delineate drainage areas and catchments from elevation and hydrological data for water-resource work.",
    price: 400,
    image: img("watershed"),
    category: "Water",
    caption: "Water-resource GIS — dams, rivers and catchment boundaries in one hydrological frame.",
    features: [
      "DEM hydrology processing",
      "Pour-point catchment delineation",
      "Stream-network derivation",
      "Nested sub-catchments",
    ],
    outputs: ["Catchment polygons", "Stream networks", "Hydrology maps"],
  },
  {
    id: "flood-risk-mapping",
    slug: "flood-risk-mapping",
    title: "Flood Risk Mapping",
    description:
      "Spatial assessment and mapping of areas exposed to potential flood risk using terrain, rainfall and land use.",
    price: 850,
    image: img("chimanimani"),
    category: "Water",
    caption: "Flood risk map — low-lying and high-exposure zones classified for planning and response.",
    features: [
      "Terrain-based inundation screening",
      "Exposure of assets and settlements",
      "Return-period scenarios where data allows",
      "Risk communication maps",
    ],
    outputs: ["Flood-risk maps", "Exposed-asset tables", "Scenario figures"],
  },
  {
    id: "floodplain-mapping",
    slug: "floodplain-mapping",
    title: "Floodplain & Inundation Mapping",
    description:
      "Map areas potentially affected by flooding or inundation along rivers, vleis and dam basins.",
    price: 650,
    image: img("inundation"),
    category: "Water",
    caption: "River valley after rain — the landscape floodplain mapping has to describe, not just the channel.",
    features: [
      "Floodplain delineation",
      "Inundation extent mapping",
      "Dam-basin water extent",
      "Land-use within the floodplain",
    ],
    outputs: ["Floodplain polygons", "Inundation maps", "Land-use overlay"],
  },
  {
    id: "hotspot-analysis",
    slug: "hotspot-analysis",
    title: "Hotspot Analysis",
    description:
      "Identify statistically significant spatial clusters of high values (hotspots) and low values (coldspots) within your geographic data.",
    price: 350,
    image: img("hotspot"),
    category: "Data & Mapping",
    caption:
      "Hotspot analysis mapping — revealing statistically significant spatial clusters and patterns.",
    features: [
      "Getis-Ord Gi* hotspot mapping",
      "Kernel density estimation",
      "Spatial autocorrelation",
      "Cluster and outlier analysis",
    ],
    outputs: ["Hotspot/Coldspot maps", "Density rasters", "Statistical reports"],
  },
  {
    id: "land-suitability-mapping",
    slug: "land-suitability-mapping",
    title: "Land Suitability Mapping",
    description:
      "Spatial suitability analysis using environmental and geographic variables — soils, slope, rainfall, land cover.",
    price: 600,
    image: img("AGRIC"),
    category: "Terrain & Modelling",
    caption:
      "Multi-criteria analysis (MCA) — weighted geographic factors combined into a suitability surface.",
    features: [
      "Criteria selection and weighting",
      "MCA / weighted overlay",
      "Constraint masking",
      "Classed suitability maps",
    ],
    outputs: ["Suitability rasters", "Classed maps", "Criteria documentation"],
  },
  {
    id: "terrain-analysis",
    slug: "terrain-analysis",
    title: "Terrain & Slope Analysis",
    description:
      "Analyse elevation, slope, aspect and terrain characteristics for spatial planning and engineering.",
    price: 300,
    image: img("slope"),
    category: "Terrain & Modelling",
    caption: "Spatial analysis of terrain — slope, aspect and derived surfaces from a digital elevation model.",
    features: [
      "DEM derivatives (slope, aspect, TWI)",
      "Hillshade and relief",
      "Cut-and-fill screening",
      "Terrain statistics by site",
    ],
    outputs: ["Terrain rasters", "Slope maps", "Site statistics"],
  },
  {
    id: "topographic-mapping",
    slug: "topographic-mapping",
    title: "Topographic Mapping",
    description:
      "Map terrain and elevation information for planning, engineering and environmental analysis.",
    price: 350,
    image: img("DEM"),
    category: "Terrain & Modelling",
    caption: "Mountain terrain — the kind of relief topographic mapping has to make legible at the right scale.",
    features: [
      "Contour generation",
      "Spot heights and relief",
      "Topographic map layouts",
      "DEM-based cartography",
    ],
    outputs: ["Contour layers", "Topo maps", "Elevation datasets"],
  },
  {
    id: "3d-terrain",
    slug: "3d-terrain",
    title: "3D Terrain Visualisation",
    description:
      "Create three-dimensional terrain representations for analysis, presentation and stakeholder communication.",
    price: 400,
    image: img("3d-terrain"),
    category: "Terrain & Modelling",
    caption: "3D terrain model — elevation extruded so clients can see the land, not just the contour lines.",
    features: [
      "DEM-based 3D scenes",
      "Draped imagery and land cover",
      "Viewpoints and fly-through stills",
      "Presentation-ready renders",
    ],
    outputs: ["3D scenes", "Still renders", "Presentation figures"],
  },
  {
    id: "data-collection-field-surveys",
    slug: "data-collection-field-surveys",
    title: "Data Collection and Field Surveys",
    description:
      "Gather accurate, on-the-ground spatial data using GPS and mobile mapping tools for ground-truthing, asset inventories, and environmental assessments.",
    price: 300,
    image: img("field-survey"), 
    category: "Environment",
    caption:
      "On-the-ground field surveys — capturing precise spatial coordinates and attributes directly from the source.",
    features: [
      "High-precision GPS mapping",
      "Mobile data collection workflows",
      "Ground-truthing for remote sensing",
      "Infrastructure and asset inventory",
    ],
    outputs: ["Cleaned field datasets", "Spatial databases", "Survey reports"],
  },
  {
    id: "least-cost-path",
    slug: "least-cost-path",
    title: "Least-Cost Path Modelling",
    description:
      "Identify efficient routes across a landscape using spatial cost surfaces — slope, land cover, rivers, exclusion zones.",
    price: 450,
    image: img("Route"),
    category: "Terrain & Modelling",
    caption: "A path through difficult country — least-cost modelling finds the route the land will actually allow.",
    features: [
      "Cost-surface construction",
      "Least-cost path and corridor",
      "Alternative route comparison",
      "Exclusion and barrier handling",
    ],
    outputs: ["Path polylines", "Corridor rasters", "Route comparison"],
  },
  {
    id: "soil-analysis",
    slug: "soil-analysis",
    title: "Soil Mapping & Analysis",
    description:
      "Organise and analyse soil-related spatial information for agriculture, irrigation and land evaluation.",
    price: 500,
    image: img("agriculture-soil"),
    category: "Terrain & Modelling",
    caption: "Agricultural land-suitability map — soil, slope and land cover combined for cropping decisions.",
    features: [
      "Soil unit mapping",
      "Sample-point interpolation",
      "Land evaluation overlays",
      "Irrigation constraint mapping",
    ],
    outputs: ["Soil GIS layers", "Evaluation maps", "Sample tables"],
  },
  {
    id: "urban-land-use-survey",
    slug: "urban-land-use-survey",
    title: "Urban Land-Use Survey",
    description:
      "Map urban land use and develop spatial baselines for municipal planning and growth management.",
    price: 650,
    image: img("urban-land-use-mutare"),
    category: "Urban & Infrastructure",
    caption: "Mutare Ward 30 land-use / land-cover, 2025 — a ward-scale urban classification ready for planning.",
    features: [
      "Urban land-use classification",
      "Ward and stand-level mapping",
      "Informal / formal settlement extent",
      "Planning-baseline GIS",
    ],
    outputs: ["Urban LULC layers", "Ward maps", "Area statistics"],
  },
  {
    id: "route-network-analysis",
    slug: "route-network-analysis",
    title: "Route & Network Analysis",
    description:
      "Analyse routes, accessibility and geographic networks for transport, service delivery and logistics.",
    price: 400,
    image: img("route-network"),
    category: "Urban & Infrastructure",
    caption: "A dense urban road network — the geography network analysis has to model, not just draw.",
    features: [
      "Network dataset construction",
      "Shortest / fastest path",
      "Service-area (isochrone) mapping",
      "Facility accessibility",
    ],
    outputs: ["Network dataset", "Route maps", "Service-area layers"],
  },
  {
    id: "study-area-maps",
    slug: "study-area-maps",
    title: "Study Area Maps",
    description:
      "Professional, high-quality location and study area maps for academic research, environmental reports, dissertations, and project proposals.",
    price: 50,
    image: img("Mbire"),
    category: "Data & Mapping",
    caption: "A well-designed study area map showing regional context alongside local site boundaries.",
    features: [
      "Inset locator maps for geographic context",
      "Standard cartographic elements (scale, north arrow, legend)",
      "Coordinate grids and graticules",
      "Custom symbology and labeling",
    ],
    outputs: ["High-resolution map layouts (PDF/PNG)", "Report-ready visuals", "Map document files"],
  },
  {
    id: "urban-planning",
    slug: "urban-planning",
    title: "Urban Planning & Zoning",
    description:
      "Support city planning, zoning, and urban development with spatial analysis of land use, infrastructure, and population distribution.",
    price: 400,
    image: img("urban planning"),
    category: "Urban & Infrastructure",
    caption: "Urban development planning — mapping zoning, infrastructure, and land use for growing cities.",
    features: [
      "Land use and zoning mapping",
      "Site suitability analysis",
      "Urban sprawl tracking",
      "Demographic and service overlays",
    ],
    outputs: ["Zoning maps", "Suitability models", "Urban expansion reports"],
  },
  {
    id: "urban-sprawl-analysis",
    slug: "urban-sprawl-analysis",
    title: "Urban Sprawl Analysis",
    description:
      "Analyze the uncontrolled expansion of urban areas over time, tracking encroachment into peri-urban, agricultural, and protected landscapes.",
    price: 700,
    image: img("urban sprawl"),
    category: "Urban & Infrastructure",
    caption: "Mapping urban sprawl to visualize how rapidly built-up areas encroach on surrounding land.",
    features: [
      "Multi-temporal sprawl tracking",
      "Encroachment analysis (wetlands/farmland)",
      "Spatial growth pattern modeling",
      "Urban edge and boundary detection",
    ],
    outputs: ["Sprawl extent maps", "Encroachment metrics", "Time-series change reports"],
  },
  {
    id: "interactive-web-map",
    slug: "interactive-web-map",
    title: "Interactive Web Map",
    description:
      "Publish geographic information through an interactive web-based map that people can actually use.",
    price: 550,
    image: img("interactive-web-map"),
    category: "Web GIS & Training",
    caption: "Web GIS of Zimbabwe — layers, filters and a map people can open in a browser.",
    features: [
      "Layered interactive map",
      "Filters, popups and legends",
      "Mobile-friendly layout",
      "Hosting and update workflow",
    ],
    outputs: ["Live web map", "Source GIS pack", "Update notes"],
  },
  {
    id: "gis-dashboard",
    slug: "gis-dashboard",
    title: "GIS Dashboard Development",
    description:
      "Develop interactive dashboards for exploring and monitoring spatial information alongside charts and KPIs.",
    price: 1200,
    image: img("dashboard"),
    category: "Web GIS & Training",
    caption: "An operations dashboard — spatial KPIs, charts and a map in one monitoring surface.",
    features: [
      "Map + chart composition",
      "Filterable indicators",
      "Scheduled data refresh",
      "Role-appropriate views",
    ],
    outputs: ["Hosted dashboard", "Indicator dictionary", "Handover notes"],
  },
  {
    id: "gis-training",
    slug: "gis-training",
    title: "GIS Training Workshop",
    description:
      "Practical GIS training tailored to a team’s workflow — QGIS, ArcGIS, field capture or remote sensing.",
    price: 200,
    image: img("workshop"),
    category: "Web GIS & Training",
    caption: "Campus GIS project map — the kind of applied exercise used in Radionyx training workshops.",
    features: [
      "Curriculum tailored to the team",
      "Hands-on datasets from your work",
      "QGIS / ArcGIS / GEE tracks",
      "Take-home exercises",
    ],
    outputs: ["Workshop sessions", "Exercise pack", "Reference notes"],
  },
  {
    id: "mobile-data-collection",
    slug: "mobile-data-collection",
    title: "Mobile Data Collection Setup",
    description:
      "Structure field data collection workflows for GIS projects — forms, GPS capture and sync back to the database.",
    price: 250,
    image: img("mobile GIS"),
    category: "Web GIS & Training",
    caption: "Field geography — mobile collection is how land observations get into GIS without losing the place.",
    features: [
      "Form design (Kobo / ODK / Survey123)",
      "GPS and photo capture",
      "QA rules in the form",
      "Sync to GIS / spreadsheets",
    ],
    outputs: ["Live survey form", "Field SOP", "GIS-ready exports"],
  },
  {
    id: "custom-web-gis",
    slug: "custom-web-gis",
    title: "Custom Web GIS Application",
    description:
      "Develop a tailored browser-based GIS application for spatial workflows your organisation actually runs.",
    price: 1200,
    image: img("custom-web-gis"),
    category: "Web GIS & Training",
    caption: "A custom web application — GIS that lives in the browser, built around your workflow not a generic viewer.",
    features: [
      "Requirements and information design",
      "Map, search and edit workflows",
      "Auth and role-based access",
      "Deployment and handover",
    ],
    outputs: ["Web GIS application", "Admin guide", "Source GIS pack"],
  },
];

export const services = [
  {
    n: "01",
    id: "gis-analysis",
    title: "GIS Analysis",
    slug: "spatial-database-setup",
    image: img("gis-analysis"),
    deck: "Turn spatial data into answers about land, water, infrastructure and the environment.",
  },
  {
    n: "02",
    id: "gis-mapping",
    title: "GIS Mapping",
    slug: "custom-map-design",
    image: img("zimbabwe-cartography"),
    deck: "Create maps that help people explore, understand and monitor geographic information.",
  },
  {
    n: "03",
    id: "remote-sensing",
    title: "Remote Sensing",
    slug: "multi-temporal-change-detection",
    image: img("change-detection-gee"),
    deck: "Use satellite imagery to understand how landscapes change across seasons, years and decades.",
  },
  {
    n: "04",
    id: "land-use-land-cover-mapping",
    title: "Land Use & Land Cover",
    slug: "land-cover-classification",
    image: img("land-cover-lulc"),
    deck: "Map what is covering the land and how those land-cover patterns are changing.",
  },
  {
    n: "05",
    id: "environmental-gis",
    title: "Environmental GIS",
    slug: "environmental-spatial-assessment",
    image: img("environmental-gwaai"),
    deck: "Build spatial evidence for environmental monitoring, assessment and planning.",
  },
  {
    n: "06",
    id: "cartography",
    title: "Cartography",
    slug: "custom-map-design",
    image: img("zimbabwe-cartography"),
    deck: "Design maps around the person who needs to read them and the decision they need to make.",
  },
  {
    n: "07",
    id: "spatial-analysis-modelling",
    title: "Spatial Analysis & Modelling",
    slug: "land-suitability-mapping",
    image: img("land-suitability-mca"),
    deck: "Model relationships between location, terrain, environment and human activity.",
  },
];

export const solutions = [
  {
    id: "land-agriculture",
    title: "Agriculture & Land",
    slug: "gis-for-agriculture-zimbabwe",
    image: img("farming"),
    intro:
      "GIS can bring soil, terrain, rainfall, land cover and satellite observations together to support agricultural planning and land-based decisions.",
    topics: [
      "Land suitability mapping",
      "Agricultural land-use mapping",
      "Vegetation and crop monitoring",
      "Soil and terrain analysis",
      "Irrigation planning",
    ],
    related: ["land-suitability-mapping", "soil-analysis", "vegetation-analysis", "land-cover-classification"],
  },
  {
    id: "environment-conservation",
    title: "Environment & Conservation",
    slug: "environmental-gis-zimbabwe",
    image: img("deforestation"),
    intro:
      "Environmental management depends on understanding where resources are located, how they are changing and what pressures affect them.",
    topics: [
      "Wetland monitoring",
      "Forest and vegetation mapping",
      "Land degradation assessment",
      "Conservation mapping",
      "Environmental change detection",
    ],
    related: [
      "wetland-mapping",
      "forest-vegetation-mapping",
      "habitat-suitability",
      "wildlife-corridor",
    ],
  },
  {
    id: "water-resources",
    title: "Water Resources",
    slug: "water-resources-gis-zimbabwe",
    image: img("wetland-1"),
    intro:
      "Water resources are inherently spatial. GIS helps connect dams, rivers, catchments, terrain, rainfall, groundwater and surrounding land use.",
    topics: [
      "Catchment and watershed mapping",
      "Dam and water extent monitoring",
      "Borehole and water-point mapping",
      "Terrain and drainage analysis",
      "Flood-risk mapping",
    ],
    related: ["watershed-delineation", "flood-risk-mapping", "borehole-water-point-mapping", "floodplain-mapping"],
  },
  {
    id: "urban-regional-planning",
    title: "Urban & Regional Planning",
    slug: "urban-planning-gis-zimbabwe",
    image: img("urban planning"),
    intro:
      "Urban areas change quickly. GIS provides planners with a way to map existing land use, analyse growth and organise spatial information for planning decisions.",
    topics: [
      "Urban land-use mapping",
      "Urban growth monitoring",
      "Infrastructure mapping",
      "Development suitability analysis",
      "Environmental constraints mapping",
    ],
    related: [
      "urban-land-use-survey",
      "urban-growth-monitoring",
      "infrastructure-network",
      "cadastral-mapping",
    ],
  },
];

export const process = [
  {
    n: "01",
    title: "Understand",
    description:
      "We begin with the geographic question, decision or problem the work needs to address.",
  },
  {
    n: "02",
    title: "Analyse",
    description:
      "We collect, clean and process the relevant GIS, survey, field, environmental or satellite data.",
  },
  {
    n: "03",
    title: "Visualise",
    description:
      "We turn the analysis into maps, spatial datasets, figures, dashboards or other usable outputs.",
  },
  {
    n: "04",
    title: "Decide",
    description:
      "The final result is structured around what the information needs to help you understand or decide.",
  },
];

export const techStack = [
  {
    category: "GIS & Cartography",
    tools: ["ArcGIS Pro", "QGIS", "Global Mapper"],
    desc: "Desktop GIS and mapping tools for spatial data management, analysis and cartographic production.",
  },
  {
    category: "Remote Sensing",
    tools: ["Google Earth Engine", "Sentinel-2", "Landsat", "MODIS"],
    desc: "Satellite imagery and cloud-based processing workflows for monitoring geographic change.",
  },
  {
    category: "Spatial Analysis",
    tools: ["Python", "GeoPandas", "Rasterio", "GDAL"],
    desc: "Programming and geospatial libraries used for data processing and specialised spatial analysis.",
  },
  {
    category: "Spatial Data & Web Mapping",
    tools: ["PostgreSQL / PostGIS", "GeoJSON", "Leaflet", "React"],
    desc: "Spatial databases and web technologies for organising and presenting geographic information online.",
  },
];

export const values = [
  {
    title: "Evidence first",
    description: "Our work starts with the data and the geographic question, not a predetermined map.",
  },
  {
    title: "Purposeful analysis",
    description:
      "We focus analysis on the decision, problem or research question the client needs to address.",
  },
  {
    title: "Usable outputs",
    description:
      "Maps and spatial datasets should be understandable, reusable and appropriate for their intended audience.",
  },
];

export const projects = [
  {
    title: "Wetland Extent & Land-Use Change",
    category: "Environmental GIS",
    location: "Bulawayo, Zimbabwe",
    image: img("wetland-1"),
    description:
      "Multi-temporal GIS and satellite-image analysis to investigate changes in wetland areas and surrounding land use.",
    slug: "wetland-extent-land-use-change",
  },
  {
    title: "Land Suitability Analysis",
    category: "Agriculture & Land",
    location: "Zimbabwe",
    image: img("land"),
    description:
      "Spatial modelling that combines geographic variables to investigate land suitability for a defined agricultural application.",
    slug: "land-suitability-analysis",
  },
  {
    title: "Dam & Water Resource Analysis",
    category: "Water Resources",
    location: "Zimbabwe",
    image: img("dam"),
    description:
      "Spatial analysis and mapping workflows for understanding dams, catchments, water extent and surrounding landscapes.",
    slug: "water-resource-analysis",
  },
];

export const faqs = [
  {
    question: "What data do you need for a GIS project?",
    answer:
      "It depends on the project. You can provide existing shapefiles, survey data, GPS or field observations, spreadsheets, satellite imagery or other geographic information. Where appropriate, we can also identify and source suitable public or commercial datasets.",
  },
  {
    question: "Do you provide GIS services outside Bulawayo?",
    answer:
      "Yes. Radionyx is based in Bulawayo and can support GIS, remote sensing and spatial analysis work across Zimbabwe and, where suitable, elsewhere in Southern Africa.",
  },
  {
    question: "Can you provide both maps and GIS data?",
    answer:
      "Yes. Depending on the project, outputs can include print-ready maps, GIS layers, spatial databases, raster datasets, digital map products and technical documentation.",
  },
  {
    question: "How long does a GIS project take?",
    answer:
      "A focused mapping assignment may take around one to two weeks. Larger multi-temporal analysis, classification or modelling projects can take several weeks depending on the scope, data and level of validation required.",
  },
];

export const insights = [
  {
    slug: "what-is-gis-in-zimbabwe",
    category: "GIS",
    title: "What Is GIS and How Is It Used in Zimbabwe?",
    description:
      "An introduction to Geographic Information Systems and how GIS can support agriculture, environmental management, water resources, urban planning and infrastructure.",
  },
  {
    slug: "gis-for-agriculture-zimbabwe",
    category: "Agriculture",
    title: "How GIS Can Support Agricultural Planning in Zimbabwe",
    description:
      "Explore how spatial data, terrain, satellite imagery and other geographic information can support agricultural planning and land suitability.",
  },
  {
    slug: "remote-sensing-zimbabwe",
    category: "Remote Sensing",
    title: "Remote Sensing and Satellite Imagery in Zimbabwe",
    description:
      "Understand how satellite imagery can be used to monitor vegetation, water, land cover and environmental change across Zimbabwe.",
  },
  {
    slug: "gis-for-water-resources-zimbabwe",
    category: "Water",
    title: "Using GIS for Water Resources in Zimbabwe",
    description:
      "An overview of how GIS can support catchment mapping, water-point inventories, dam monitoring and spatial water-resource analysis.",
  },
  {
    slug: "urban-gis-zimbabwe",
    category: "Urban Planning",
    title: "How GIS Can Help Monitor Urban Growth in Zimbabwe",
    description:
      "Explore how land-use mapping, satellite imagery and spatial analysis can help describe urban expansion and development patterns.",
  },
];

export function getService(slug: string) {
  return serviceCatalog.find((s) => s.slug === slug);
}
