// Biome data for the EcoSurge Species Archive
// Scientifically grounded biome definitions with conservation statistics,
// threat assessments, and biodiversity trend data.

import type { ConservationStatus } from './taxonomy/types'

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

export interface BiomeClimate {
  temperatureRange: string
  precipitation: string
  seasonality: string
}

export interface BiomeStats {
  totalSpecies: number
  endemicSpecies: number
  threatenedSpecies: number
  extinctSpecies: number
}

export interface BiomeThreat {
  name: string
  severity: 'critical' | 'high' | 'moderate' | 'low'
  description: string
}

export interface Biome {
  id: string
  name: string
  description: string
  climate: BiomeClimate
  area: string
  percentLand: number
  regions: string[]
  keySpeciesGroups: string[]
  biodiversityIndex: number
  threats: BiomeThreat[]
  conservationBreakdown: Partial<Record<ConservationStatus, number>>
  trendData: { year: number; index: number }[]
  stats: BiomeStats
  color: string
  iconEmoji?: string
}

// ---------------------------------------------------------------------------
// Biome data
// ---------------------------------------------------------------------------

export const biomes: Biome[] = [
  // =========================================================================
  // 1. TROPICAL RAINFOREST
  // =========================================================================
  {
    id: 'tropical-rainforest',
    name: 'Tropical Rainforest',
    description:
      'Earth\'s most biodiverse terrestrial biome, tropical rainforests encircle the equator in a belt of dense, multi-layered canopy. They harbour more than half of all known species despite covering only about 6% of the planet\'s land surface. From the towering emergent layer to the dim forest floor, these ecosystems drive global weather patterns, sequester vast quantities of carbon, and support indigenous cultures that have co-evolved with the forest for millennia.',
    climate: {
      temperatureRange: '24-30 °C year-round',
      precipitation: '1,750-3,000 mm annually; no true dry season',
      seasonality: 'Minimal temperature variation; rainfall relatively constant with slight peaks',
    },
    area: '17.0 million km²',
    percentLand: 6.0,
    regions: [
      'Amazon Basin (Brazil, Peru, Colombia)',
      'Congo Basin (DRC, Republic of Congo, Cameroon)',
      'Southeast Asian Archipelago (Indonesia, Malaysia, Papua New Guinea)',
      'Western Ghats (India)',
      'Daintree & Queensland Wet Tropics (Australia)',
      'Atlantic Forest (Brazil)',
    ],
    keySpeciesGroups: [
      'arthropoda',
      'insecta',
      'aves',
      'mammalia',
      'amphibia',
      'reptilia',
      'angiosperms',
      'fungi',
    ],
    biodiversityIndex: 100,
    threats: [
      {
        name: 'Deforestation',
        severity: 'critical',
        description:
          'Industrial logging, cattle ranching, and soy cultivation drive annual forest loss of ~4.7 million hectares, fragmenting habitats and pushing edge-sensitive species toward extinction.',
      },
      {
        name: 'Climate Change',
        severity: 'high',
        description:
          'Rising temperatures and altered precipitation regimes are shifting the moisture balance, increasing drought frequency and fire susceptibility in historically fire-free forests.',
      },
      {
        name: 'Palm Oil Expansion',
        severity: 'high',
        description:
          'Conversion of lowland rainforest to oil palm monocultures, especially in Borneo and Sumatra, eliminates complex habitat structure required by orangutans, hornbills, and thousands of invertebrates.',
      },
      {
        name: 'Illegal Wildlife Trade',
        severity: 'moderate',
        description:
          'Poaching and trafficking of primates, parrots, reptiles, and orchids depletes populations of charismatic and ecologically important species.',
      },
      {
        name: 'Mining & Infrastructure',
        severity: 'moderate',
        description:
          'Gold mining, road construction, and hydroelectric dams open previously inaccessible forest to colonisation and pollution.',
      },
    ],
    conservationBreakdown: {
      LC: 3150000,
      NT: 425000,
      VU: 520000,
      EN: 340000,
      CR: 115000,
      DD: 400000,
      EX: 5000,
      NE: 45000,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 96 },
      { year: 1980, index: 91 },
      { year: 1985, index: 86 },
      { year: 1990, index: 80 },
      { year: 1995, index: 74 },
      { year: 2000, index: 68 },
      { year: 2005, index: 63 },
      { year: 2010, index: 58 },
      { year: 2015, index: 54 },
      { year: 2020, index: 50 },
      { year: 2024, index: 47 },
    ],
    stats: {
      totalSpecies: 5000000,
      endemicSpecies: 2500000,
      threatenedSpecies: 975000,
      extinctSpecies: 5000,
    },
    color: '#1B7A2B',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 2. TEMPERATE FOREST
  // =========================================================================
  {
    id: 'temperate-forest',
    name: 'Temperate Forest',
    description:
      'Deciduous and mixed temperate forests experience four distinct seasons and are defined by broadleaf trees that shed their leaves in autumn. Once spanning vast tracts of the Northern Hemisphere, these forests have been heavily modified by agriculture and urbanisation, yet they remain among the most productive terrestrial ecosystems. Their rich leaf litter supports complex fungal networks and a wealth of invertebrate decomposers.',
    climate: {
      temperatureRange: '-10 to 30 °C; pronounced seasonal cycle',
      precipitation: '750-1,500 mm annually; distributed fairly evenly',
      seasonality: 'Strong four-season cycle with cold winters and warm summers',
    },
    area: '10.4 million km²',
    percentLand: 7.0,
    regions: [
      'Eastern North America (Appalachians, Great Lakes region)',
      'Western & Central Europe',
      'Eastern China & Korea',
      'Southern Japan',
      'Patagonian Valdivian forests (Chile, Argentina)',
      'Southeastern Australia (Tasmania)',
    ],
    keySpeciesGroups: [
      'mammalia',
      'aves',
      'insecta',
      'angiosperms',
      'fungi',
      'amphibia',
    ],
    biodiversityIndex: 65,
    threats: [
      {
        name: 'Urbanisation & Land Conversion',
        severity: 'high',
        description:
          'Centuries of agricultural expansion and suburban sprawl have reduced temperate forests to approximately 50% of their pre-industrial extent.',
      },
      {
        name: 'Invasive Species',
        severity: 'high',
        description:
          'Emerald ash borer, chestnut blight, sudden oak death, and Japanese knotweed are restructuring forest composition and eliminating keystone tree species.',
      },
      {
        name: 'Climate Change',
        severity: 'moderate',
        description:
          'Shifting phenology causes mismatches between insect emergence and bird breeding, while increasing drought stress affects beech and oak stands.',
      },
      {
        name: 'Fragmentation',
        severity: 'moderate',
        description:
          'Road networks and development create isolated forest patches too small to support wide-ranging species like bears, wolves, and large raptors.',
      },
    ],
    conservationBreakdown: {
      LC: 680000,
      NT: 95000,
      VU: 85000,
      EN: 52000,
      CR: 18000,
      DD: 55000,
      EX: 3000,
      NE: 12000,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 97 },
      { year: 1980, index: 93 },
      { year: 1985, index: 90 },
      { year: 1990, index: 87 },
      { year: 1995, index: 85 },
      { year: 2000, index: 83 },
      { year: 2005, index: 81 },
      { year: 2010, index: 79 },
      { year: 2015, index: 78 },
      { year: 2020, index: 76 },
      { year: 2024, index: 75 },
    ],
    stats: {
      totalSpecies: 1000000,
      endemicSpecies: 150000,
      threatenedSpecies: 155000,
      extinctSpecies: 3000,
    },
    color: '#4A8C3F',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 3. BOREAL FOREST (TAIGA)
  // =========================================================================
  {
    id: 'boreal-forest',
    name: 'Boreal Forest',
    description:
      'The taiga forms the largest terrestrial biome on Earth, stretching in an almost unbroken belt across the northern latitudes of North America and Eurasia. Dominated by conifers such as spruce, pine, and larch, these forests endure extreme cold and long winters. Despite relatively low species richness compared to tropical forests, boreal ecosystems store roughly twice as much carbon per unit area as tropical forests, primarily in deep peat soils and permafrost.',
    climate: {
      temperatureRange: '-40 to 20 °C; average annual temperature below 0 °C in many areas',
      precipitation: '300-900 mm annually; much falling as snow',
      seasonality: 'Very long, cold winters (6-8 months); short, mild summers',
    },
    area: '17.0 million km²',
    percentLand: 11.5,
    regions: [
      'Canadian Shield & boreal belt (Canada)',
      'Siberian taiga (Russia)',
      'Fennoscandia (Finland, Sweden, Norway)',
      'Alaska interior (United States)',
    ],
    keySpeciesGroups: [
      'mammalia',
      'aves',
      'insecta',
      'gymnosperms',
      'fungi',
    ],
    biodiversityIndex: 28,
    threats: [
      {
        name: 'Industrial Logging',
        severity: 'high',
        description:
          'Clear-cut logging for pulp, paper, and timber removes old-growth stands that take 80-200 years to regenerate, displacing caribou, lynx, and boreal owls.',
      },
      {
        name: 'Climate Change & Permafrost Thaw',
        severity: 'critical',
        description:
          'Arctic amplification is warming boreal regions at twice the global average rate, thawing permafrost, releasing stored methane, and enabling catastrophic wildfires.',
      },
      {
        name: 'Mining & Resource Extraction',
        severity: 'moderate',
        description:
          'Oil sands (Alberta), nickel mining (Norilsk), and peat extraction fragment habitat and contaminate waterways.',
      },
      {
        name: 'Insect Outbreaks',
        severity: 'high',
        description:
          'Warmer winters allow spruce budworm and mountain pine beetle to survive at higher densities, killing millions of hectares of conifers.',
      },
    ],
    conservationBreakdown: {
      LC: 215000,
      NT: 28000,
      VU: 22000,
      EN: 12000,
      CR: 3500,
      DD: 16000,
      EX: 500,
      NE: 3000,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 98 },
      { year: 1980, index: 96 },
      { year: 1985, index: 94 },
      { year: 1990, index: 91 },
      { year: 1995, index: 88 },
      { year: 2000, index: 85 },
      { year: 2005, index: 82 },
      { year: 2010, index: 78 },
      { year: 2015, index: 74 },
      { year: 2020, index: 70 },
      { year: 2024, index: 67 },
    ],
    stats: {
      totalSpecies: 300000,
      endemicSpecies: 30000,
      threatenedSpecies: 37500,
      extinctSpecies: 500,
    },
    color: '#2E5E3F',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 4. TROPICAL SAVANNA
  // =========================================================================
  {
    id: 'tropical-savanna',
    name: 'Tropical Savanna',
    description:
      'Tropical savannas are fire-maintained grassland-woodland mosaics that span the transition between closed tropical forest and open desert. Characterised by scattered trees, tall grasses, and pronounced wet-dry seasonality, savannas support some of the planet\'s most spectacular large mammal assemblages. The African savanna\'s Great Migration, the Brazilian Cerrado\'s extraordinary plant endemism, and the Australian tropical woodlands each represent unique evolutionary theatres.',
    climate: {
      temperatureRange: '20-35 °C year-round',
      precipitation: '500-1,500 mm annually; strong wet/dry seasons',
      seasonality: 'Distinct wet season (4-8 months) and dry season; fire is a key ecological driver',
    },
    area: '20.0 million km²',
    percentLand: 13.5,
    regions: [
      'Sub-Saharan Africa (Serengeti, Masai Mara, Kruger)',
      'Brazilian Cerrado',
      'Northern Australia (Top End, Cape York)',
      'Indian Deccan Plateau',
      'Colombian & Venezuelan Llanos',
    ],
    keySpeciesGroups: [
      'mammalia',
      'aves',
      'reptilia',
      'insecta',
      'angiosperms',
    ],
    biodiversityIndex: 62,
    threats: [
      {
        name: 'Agricultural Conversion',
        severity: 'critical',
        description:
          'The Brazilian Cerrado has lost over 50% of its native vegetation to soy and cattle, making it one of the fastest-disappearing biomes on Earth.',
      },
      {
        name: 'Poaching & Bushmeat Trade',
        severity: 'high',
        description:
          'Illegal hunting of elephants for ivory, rhinos for horn, and widespread bushmeat harvesting reduces keystone herbivore populations.',
      },
      {
        name: 'Fire Regime Alteration',
        severity: 'moderate',
        description:
          'Both fire suppression and excessive burning disrupt the disturbance regime that maintains savanna structure, leading to bush encroachment or grassland degradation.',
      },
      {
        name: 'Climate Change',
        severity: 'high',
        description:
          'Increasing temperatures and altered rainfall patterns are expanding arid zones at savanna margins and intensifying seasonal droughts.',
      },
    ],
    conservationBreakdown: {
      LC: 528000,
      NT: 80000,
      VU: 72000,
      EN: 48000,
      CR: 16000,
      DD: 48000,
      EX: 2000,
      NE: 6000,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 95 },
      { year: 1980, index: 90 },
      { year: 1985, index: 84 },
      { year: 1990, index: 79 },
      { year: 1995, index: 74 },
      { year: 2000, index: 69 },
      { year: 2005, index: 65 },
      { year: 2010, index: 61 },
      { year: 2015, index: 57 },
      { year: 2020, index: 54 },
      { year: 2024, index: 52 },
    ],
    stats: {
      totalSpecies: 800000,
      endemicSpecies: 200000,
      threatenedSpecies: 136000,
      extinctSpecies: 2000,
    },
    color: '#C4A747',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 5. TEMPERATE GRASSLAND
  // =========================================================================
  {
    id: 'temperate-grassland',
    name: 'Temperate Grassland',
    description:
      'Temperate grasslands, including the North American Great Plains, South American Pampas, Eurasian Steppe, and South African veld, are dominated by grasses and forbs with few or no trees. Their deep, fertile soils have made them the breadbasket of human civilisation -- and also the most converted biome on the planet. Less than 5% of the original North American tallgrass prairie remains, making intact grasslands among the rarest ecosystems on Earth.',
    climate: {
      temperatureRange: '-20 to 35 °C; continental extremes',
      precipitation: '250-750 mm annually; semi-arid',
      seasonality: 'Hot summers, cold winters; precipitation peaks in late spring/early summer',
    },
    area: '9.0 million km²',
    percentLand: 6.0,
    regions: [
      'Great Plains (United States, Canada)',
      'Pampas (Argentina, Uruguay)',
      'Eurasian Steppe (Ukraine, Kazakhstan, Mongolia)',
      'South African Highveld',
      'Murray-Darling grasslands (Australia)',
    ],
    keySpeciesGroups: [
      'mammalia',
      'aves',
      'insecta',
      'angiosperms',
      'reptilia',
    ],
    biodiversityIndex: 42,
    threats: [
      {
        name: 'Agricultural Conversion',
        severity: 'critical',
        description:
          'Ploughing of native grassland for cereal crops has eliminated over 70% of the world\'s temperate grasslands, making this the most converted biome globally.',
      },
      {
        name: 'Overgrazing',
        severity: 'high',
        description:
          'Excessive livestock grazing compacts soils, eliminates palatable species, and promotes erosion and desertification.',
      },
      {
        name: 'Invasive Species',
        severity: 'moderate',
        description:
          'Non-native grasses (e.g., cheatgrass, buffelgrass) and forbs outcompete native species and alter fire regimes.',
      },
      {
        name: 'Habitat Fragmentation',
        severity: 'high',
        description:
          'Fencing, roads, and conversion to cropland isolate remaining grassland patches, preventing wildlife migration and gene flow.',
      },
      {
        name: 'Climate Change',
        severity: 'moderate',
        description:
          'Increased drought frequency and heat waves stress already water-limited grassland communities.',
      },
    ],
    conservationBreakdown: {
      LC: 325000,
      NT: 52000,
      VU: 48000,
      EN: 32000,
      CR: 12000,
      DD: 25000,
      EX: 2500,
      NE: 3500,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 94 },
      { year: 1980, index: 87 },
      { year: 1985, index: 81 },
      { year: 1990, index: 75 },
      { year: 1995, index: 70 },
      { year: 2000, index: 65 },
      { year: 2005, index: 61 },
      { year: 2010, index: 57 },
      { year: 2015, index: 54 },
      { year: 2020, index: 51 },
      { year: 2024, index: 49 },
    ],
    stats: {
      totalSpecies: 500000,
      endemicSpecies: 75000,
      threatenedSpecies: 92000,
      extinctSpecies: 2500,
    },
    color: '#D4A843',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 6. DESERT
  // =========================================================================
  {
    id: 'desert',
    name: 'Desert',
    description:
      'Deserts encompass both hyper-arid hot deserts like the Sahara and cold deserts such as the Gobi and Antarctic interior. Defined by receiving less than 250 mm of precipitation per year, deserts cover roughly one-third of Earth\'s land surface. Despite their harsh appearance, deserts host highly specialised organisms: succulent plants with extraordinary water-storage adaptations, nocturnal mammals that never drink free water, and insects whose fog-harvesting exoskeletons have inspired engineering breakthroughs.',
    climate: {
      temperatureRange: '-25 to 55 °C (extreme diurnal and seasonal ranges)',
      precipitation: '<250 mm annually; some areas <25 mm',
      seasonality: 'Extreme diurnal temperature swings; rainfall sporadic and unpredictable',
    },
    area: '50.0 million km²',
    percentLand: 33.0,
    regions: [
      'Sahara (North Africa)',
      'Arabian Desert (Middle East)',
      'Gobi Desert (Mongolia, China)',
      'Sonoran & Mojave Deserts (United States, Mexico)',
      'Namib & Kalahari (Southern Africa)',
      'Australian Outback',
    ],
    keySpeciesGroups: [
      'reptilia',
      'insecta',
      'mammalia',
      'angiosperms',
      'arthropoda',
    ],
    biodiversityIndex: 18,
    threats: [
      {
        name: 'Desertification Expansion',
        severity: 'high',
        description:
          'Climate change and overgrazing are pushing desert boundaries into adjacent savanna and grassland zones, reducing productivity of marginal lands.',
      },
      {
        name: 'Solar & Wind Energy Development',
        severity: 'moderate',
        description:
          'Large-scale renewable energy installations in desert habitats can fragment tortoise corridors and displace ground-nesting birds.',
      },
      {
        name: 'Water Extraction',
        severity: 'high',
        description:
          'Pumping fossil aquifers for agriculture and cities lowers water tables, drying springs and oases that serve as critical refugia.',
      },
      {
        name: 'Off-Road Vehicle Recreation',
        severity: 'low',
        description:
          'Unregulated off-road driving crushes cryptobiotic soil crusts that take decades to reform and protects against erosion.',
      },
    ],
    conservationBreakdown: {
      LC: 140000,
      NT: 18000,
      VU: 15000,
      EN: 10000,
      CR: 4000,
      DD: 10000,
      EX: 800,
      NE: 2200,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 98 },
      { year: 1980, index: 96 },
      { year: 1985, index: 94 },
      { year: 1990, index: 92 },
      { year: 1995, index: 90 },
      { year: 2000, index: 88 },
      { year: 2005, index: 86 },
      { year: 2010, index: 84 },
      { year: 2015, index: 82 },
      { year: 2020, index: 80 },
      { year: 2024, index: 79 },
    ],
    stats: {
      totalSpecies: 200000,
      endemicSpecies: 40000,
      threatenedSpecies: 29000,
      extinctSpecies: 800,
    },
    color: '#E8C55A',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 7. TUNDRA
  // =========================================================================
  {
    id: 'tundra',
    name: 'Tundra',
    description:
      'The tundra biome exists above the treeline in the Arctic and on high mountain summits worldwide. Characterised by permafrost, extremely short growing seasons, and sparse vegetation of mosses, lichens, sedges, and dwarf shrubs, the tundra is the most climate-vulnerable biome on Earth. Arctic tundra is warming three to four times faster than the global average, triggering permafrost collapse, coastal erosion, and cascading changes to food webs centred on caribou, lemmings, and migratory shorebirds.',
    climate: {
      temperatureRange: '-40 to 12 °C; average annual temperature well below freezing',
      precipitation: '150-350 mm annually; mostly as snow',
      seasonality: 'Continuous darkness in winter, midnight sun in summer; growing season 6-10 weeks',
    },
    area: '8.0 million km²',
    percentLand: 5.5,
    regions: [
      'Canadian Arctic Archipelago & Nunavut',
      'North Slope of Alaska (United States)',
      'Siberian tundra (Russia)',
      'Svalbard & Greenland',
      'Alpine tundra (Himalayas, Andes, Rockies, Alps)',
    ],
    keySpeciesGroups: [
      'mammalia',
      'aves',
      'insecta',
      'fungi',
    ],
    biodiversityIndex: 12,
    threats: [
      {
        name: 'Climate Change & Arctic Amplification',
        severity: 'critical',
        description:
          'Arctic temperatures are rising 3-4 times faster than the global mean, thawing permafrost, destabilising infrastructure, and releasing stored greenhouse gases.',
      },
      {
        name: 'Permafrost Collapse',
        severity: 'critical',
        description:
          'Thermokarst formation drains lakes, causes land subsidence, and releases methane and CO2, creating a positive feedback loop that accelerates warming.',
      },
      {
        name: 'Shrubification',
        severity: 'high',
        description:
          'Warming allows shrubs and even trees to colonise previously open tundra, reducing habitat for ground-nesting birds and altering albedo feedback.',
      },
      {
        name: 'Resource Extraction',
        severity: 'moderate',
        description:
          'Oil and gas drilling, mining, and associated roads in the Arctic disturb nesting habitats and introduce pollution to pristine ecosystems.',
      },
    ],
    conservationBreakdown: {
      LC: 68000,
      NT: 9500,
      VU: 8500,
      EN: 5500,
      CR: 2000,
      DD: 5000,
      EX: 200,
      NE: 1300,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 98 },
      { year: 1980, index: 96 },
      { year: 1985, index: 94 },
      { year: 1990, index: 91 },
      { year: 1995, index: 87 },
      { year: 2000, index: 83 },
      { year: 2005, index: 78 },
      { year: 2010, index: 72 },
      { year: 2015, index: 66 },
      { year: 2020, index: 60 },
      { year: 2024, index: 56 },
    ],
    stats: {
      totalSpecies: 100000,
      endemicSpecies: 15000,
      threatenedSpecies: 16000,
      extinctSpecies: 200,
    },
    color: '#A3C4D9',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 8. MEDITERRANEAN
  // =========================================================================
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    description:
      'Mediterranean-climate ecosystems occur in just five disjunct regions worldwide and are recognised as global biodiversity hotspots. Defined by hot, dry summers and cool, wet winters, these landscapes harbour extraordinary plant diversity, with the Cape Floristic Region and southwestern Australia alone accounting for thousands of endemic species. Sclerophyll shrublands -- known as maquis, chaparral, fynbos, matorral, and kwongan -- are fire-adapted and floristically among the richest plant communities per unit area on Earth.',
    climate: {
      temperatureRange: '5-35 °C; mild wet winters, hot dry summers',
      precipitation: '300-900 mm annually; concentrated in winter months',
      seasonality: 'Strong summer drought (3-6 months); fire season aligns with dry period',
    },
    area: '3.1 million km²',
    percentLand: 2.0,
    regions: [
      'Mediterranean Basin (Southern Europe, North Africa, Levant)',
      'California chaparral & coastal sage (United States)',
      'Chilean matorral (Central Chile)',
      'Cape Floristic Region & fynbos (South Africa)',
      'Southwestern Australia (kwongan & mallee)',
    ],
    keySpeciesGroups: [
      'angiosperms',
      'insecta',
      'reptilia',
      'aves',
      'mammalia',
    ],
    biodiversityIndex: 72,
    threats: [
      {
        name: 'Wildfire Intensification',
        severity: 'critical',
        description:
          'Climate change is extending fire seasons and increasing fire severity, overwhelming the natural fire-adaptive capacity of Mediterranean vegetation.',
      },
      {
        name: 'Urbanisation & Development',
        severity: 'high',
        description:
          'Mediterranean climates attract dense human settlement; the wildland-urban interface is expanding, increasing ignition risk and habitat loss.',
      },
      {
        name: 'Invasive Species',
        severity: 'high',
        description:
          'Non-native grasses, pines, and acacias displace native flora, while invasive Argentine ants disrupt seed dispersal mutualisms.',
      },
      {
        name: 'Water Diversion',
        severity: 'moderate',
        description:
          'Agricultural irrigation and urban water demand draw down aquifers and dewater streams, stressing endemic aquatic species.',
      },
      {
        name: 'Climate Change',
        severity: 'high',
        description:
          'Projections indicate 10-30% rainfall declines across Mediterranean regions by 2100, potentially shifting some areas to desert climates.',
      },
    ],
    conservationBreakdown: {
      LC: 152000,
      NT: 25000,
      VU: 28000,
      EN: 19000,
      CR: 8000,
      DD: 14000,
      EX: 1500,
      NE: 2500,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 96 },
      { year: 1980, index: 92 },
      { year: 1985, index: 88 },
      { year: 1990, index: 84 },
      { year: 1995, index: 80 },
      { year: 2000, index: 76 },
      { year: 2005, index: 72 },
      { year: 2010, index: 68 },
      { year: 2015, index: 64 },
      { year: 2020, index: 60 },
      { year: 2024, index: 57 },
    ],
    stats: {
      totalSpecies: 250000,
      endemicSpecies: 100000,
      threatenedSpecies: 55000,
      extinctSpecies: 1500,
    },
    color: '#B87333',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 9. FRESHWATER
  // =========================================================================
  {
    id: 'freshwater',
    name: 'Freshwater',
    description:
      'Freshwater ecosystems -- rivers, lakes, streams, ponds, and groundwater systems -- cover less than 1% of Earth\'s surface yet support roughly 10% of all known species and one-third of all vertebrate species. These systems are the most threatened ecosystems per capita of species: freshwater megafauna have declined by 88% since 1970 according to the Living Planet Index. Free-flowing rivers are critical for migratory fish, nutrient cycling, and the 3 billion people who depend on inland fisheries for protein.',
    climate: {
      temperatureRange: '0-35 °C; highly variable by latitude and altitude',
      precipitation: 'Dependent on watershed; fed by rainfall, snowmelt, and groundwater',
      seasonality: 'Flow regimes range from perennial to highly seasonal; spring floods are ecologically critical',
    },
    area: '1.5 million km² (surface water)',
    percentLand: 0.8,
    regions: [
      'Amazon River Basin (South America)',
      'Congo River Basin (Central Africa)',
      'Mekong River (Southeast Asia)',
      'Great Lakes (North America)',
      'Lake Baikal (Russia)',
      'Ganges-Brahmaputra system (South Asia)',
    ],
    keySpeciesGroups: [
      'actinopterygii',
      'amphibia',
      'insecta',
      'mollusca',
      'angiosperms',
      'reptilia',
    ],
    biodiversityIndex: 55,
    threats: [
      {
        name: 'Dam Construction & Flow Alteration',
        severity: 'critical',
        description:
          'Over 60,000 large dams worldwide block fish migration, alter sediment transport, and fragment river connectivity. Only 37% of rivers longer than 1,000 km remain free-flowing.',
      },
      {
        name: 'Pollution',
        severity: 'critical',
        description:
          'Agricultural runoff (nitrogen, phosphorus), industrial effluent, pharmaceutical residues, and microplastics contaminate freshwater systems, causing eutrophication and dead zones.',
      },
      {
        name: 'Over-Extraction',
        severity: 'high',
        description:
          'Irrigation, industrial use, and urban demand are depleting aquifers and dewatering rivers, with the Aral Sea and Colorado River delta as cautionary examples.',
      },
      {
        name: 'Invasive Species',
        severity: 'high',
        description:
          'Zebra mussels, Asian carp, Nile perch, and water hyacinth devastate native freshwater communities and restructure food webs.',
      },
      {
        name: 'Climate Change',
        severity: 'high',
        description:
          'Altered precipitation, glacial retreat, and warming waters shift species ranges, reduce dissolved oxygen, and intensify drought-flood cycles.',
      },
    ],
    conservationBreakdown: {
      LC: 82000,
      NT: 15000,
      VU: 18000,
      EN: 14000,
      CR: 7500,
      DD: 10000,
      EX: 1500,
      NE: 2000,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 94 },
      { year: 1980, index: 87 },
      { year: 1985, index: 80 },
      { year: 1990, index: 73 },
      { year: 1995, index: 66 },
      { year: 2000, index: 60 },
      { year: 2005, index: 55 },
      { year: 2010, index: 50 },
      { year: 2015, index: 46 },
      { year: 2020, index: 42 },
      { year: 2024, index: 40 },
    ],
    stats: {
      totalSpecies: 150000,
      endemicSpecies: 60000,
      threatenedSpecies: 39500,
      extinctSpecies: 1500,
    },
    color: '#3A7EC8',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 10. MARINE PELAGIC
  // =========================================================================
  {
    id: 'marine-pelagic',
    name: 'Marine Pelagic',
    description:
      'The open ocean is Earth\'s largest biome by volume, encompassing the water column from the sunlit surface to the dark mesopelagic and bathypelagic zones. Pelagic ecosystems are driven by phytoplankton productivity, which generates roughly half of the planet\'s oxygen and forms the base of food webs supporting everything from copepods to blue whales. Despite its vastness, the open ocean faces cumulative impacts from overfishing, plastic pollution, ocean acidification, and climate-driven changes in circulation and stratification.',
    climate: {
      temperatureRange: '-2 to 30 °C (surface); 1-4 °C in the deep ocean',
      precipitation: 'N/A (marine environment)',
      seasonality: 'Seasonal mixing and stratification cycles; polar regions experience dramatic light/dark cycles',
    },
    area: '335 million km²',
    percentLand: 0,
    regions: [
      'North Atlantic (including Gulf Stream system)',
      'North Pacific (Kuroshio & California Current)',
      'Southern Ocean (Antarctic Circumpolar Current)',
      'Indian Ocean',
      'Equatorial Pacific upwelling zone',
      'Sargasso Sea',
    ],
    keySpeciesGroups: [
      'actinopterygii',
      'mammalia',
      'mollusca',
      'arthropoda',
      'cnidaria',
    ],
    biodiversityIndex: 38,
    threats: [
      {
        name: 'Overfishing & Bycatch',
        severity: 'critical',
        description:
          'Industrial fishing fleets have reduced large predatory fish biomass by 90% since 1950. Bycatch kills millions of sharks, seabirds, and marine mammals annually.',
      },
      {
        name: 'Plastic Pollution',
        severity: 'high',
        description:
          'An estimated 8-12 million tonnes of plastic enter the oceans each year, forming microplastics that enter food webs and accumulate in marine organisms.',
      },
      {
        name: 'Ocean Acidification',
        severity: 'high',
        description:
          'CO2 absorption has lowered surface ocean pH by 0.1 units since pre-industrial times, impairing shell formation in pteropods, foraminifera, and larval fish.',
      },
      {
        name: 'Ocean Warming & Deoxygenation',
        severity: 'critical',
        description:
          'Marine heat waves are increasing in frequency and duration, while oxygen minimum zones are expanding, compressing habitable space for pelagic species.',
      },
      {
        name: 'Deep-Sea Mining',
        severity: 'moderate',
        description:
          'Proposed mining of polymetallic nodules threatens poorly understood benthic and midwater communities with sediment plumes and habitat destruction.',
      },
    ],
    conservationBreakdown: {
      LC: 155000,
      NT: 22000,
      VU: 25000,
      EN: 15000,
      CR: 5000,
      DD: 22000,
      EX: 500,
      NE: 5500,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 96 },
      { year: 1980, index: 91 },
      { year: 1985, index: 86 },
      { year: 1990, index: 81 },
      { year: 1995, index: 76 },
      { year: 2000, index: 72 },
      { year: 2005, index: 68 },
      { year: 2010, index: 64 },
      { year: 2015, index: 61 },
      { year: 2020, index: 58 },
      { year: 2024, index: 56 },
    ],
    stats: {
      totalSpecies: 250000,
      endemicSpecies: 100000,
      threatenedSpecies: 45000,
      extinctSpecies: 500,
    },
    color: '#1A5276',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 11. CORAL REEF
  // =========================================================================
  {
    id: 'coral-reef',
    name: 'Coral Reef',
    description:
      'Coral reefs are the most biodiverse marine ecosystems on Earth, often called the "rainforests of the sea." Built by the calcium carbonate skeletons of colonial anthozoans and their symbiotic zooxanthellae algae, reefs occupy less than 0.1% of the ocean floor yet support roughly 25% of all marine species. They provide coastal protection, fisheries livelihoods for 500 million people, and generate over $375 billion annually in ecosystem services. Reefs are among the most climate-sensitive ecosystems: mass bleaching events now recur faster than reefs can recover.',
    climate: {
      temperatureRange: '23-29 °C; narrow thermal tolerance',
      precipitation: 'N/A (marine environment)',
      seasonality: 'Minimal temperature seasonality; bleaching triggered when temperatures exceed 1 °C above summer maximum for >4 weeks',
    },
    area: '0.28 million km²',
    percentLand: 0,
    regions: [
      'Coral Triangle (Indonesia, Philippines, Papua New Guinea)',
      'Great Barrier Reef (Australia)',
      'Mesoamerican Barrier Reef (Belize, Mexico, Honduras)',
      'Red Sea reefs (Egypt, Saudi Arabia)',
      'Western Indian Ocean (Maldives, Seychelles, Madagascar)',
      'Caribbean reefs (Florida Keys, Bahamas, Bonaire)',
    ],
    keySpeciesGroups: [
      'cnidaria',
      'actinopterygii',
      'mollusca',
      'echinodermata',
      'arthropoda',
    ],
    biodiversityIndex: 92,
    threats: [
      {
        name: 'Ocean Warming & Coral Bleaching',
        severity: 'critical',
        description:
          'Mass bleaching events in 2016, 2017, 2020, 2023, and 2024 have affected over 75% of the world\'s reefs. Repeated bleaching prevents recovery and leads to reef death.',
      },
      {
        name: 'Ocean Acidification',
        severity: 'critical',
        description:
          'Declining pH reduces the ability of corals to build skeletons, weakening reef structures and shifting community composition toward fleshy algae.',
      },
      {
        name: 'Overfishing & Destructive Fishing',
        severity: 'high',
        description:
          'Dynamite fishing, cyanide use, and overharvesting of herbivorous fish removes grazers that control macroalgal overgrowth on reefs.',
      },
      {
        name: 'Sedimentation & Nutrient Pollution',
        severity: 'high',
        description:
          'Agricultural and urban runoff smothers corals with sediment and fuels algal blooms that shade reef-building organisms.',
      },
      {
        name: 'Crown-of-Thorns Starfish Outbreaks',
        severity: 'moderate',
        description:
          'Nutrient enrichment triggers population explosions of the coral-eating starfish Acanthaster planci, which can devastate reef tracts in months.',
      },
    ],
    conservationBreakdown: {
      LC: 78000,
      NT: 16000,
      VU: 20000,
      EN: 16000,
      CR: 8000,
      DD: 9000,
      EX: 500,
      NE: 2500,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 96 },
      { year: 1980, index: 91 },
      { year: 1985, index: 86 },
      { year: 1990, index: 80 },
      { year: 1995, index: 73 },
      { year: 2000, index: 66 },
      { year: 2005, index: 60 },
      { year: 2010, index: 55 },
      { year: 2015, index: 48 },
      { year: 2020, index: 42 },
      { year: 2024, index: 38 },
    ],
    stats: {
      totalSpecies: 150000,
      endemicSpecies: 45000,
      threatenedSpecies: 44000,
      extinctSpecies: 500,
    },
    color: '#FF6B6B',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 12. DEEP SEA
  // =========================================================================
  {
    id: 'deep-sea',
    name: 'Deep Sea',
    description:
      'The deep sea -- defined as waters below 200 metres -- constitutes the largest habitat on Earth by volume, yet remains the least explored. Abyssal plains, mid-ocean ridges, hydrothermal vents, cold seeps, seamounts, and hadal trenches each host distinct communities adapted to perpetual darkness, crushing pressure, and near-freezing temperatures. Chemosynthetic ecosystems at hydrothermal vents support life independent of sunlight, challenging fundamental assumptions about the limits of biology. Scientists estimate that 80-95% of deep-sea species remain undescribed.',
    climate: {
      temperatureRange: '-1 to 4 °C (abyssal); up to 400 °C at vent orifices',
      precipitation: 'N/A (marine environment)',
      seasonality: 'Essentially aseasonal; abyssal food supply depends on surface productivity and seasonal "marine snow" flux',
    },
    area: '300 million km² (seafloor below 200m)',
    percentLand: 0,
    regions: [
      'Mid-Atlantic Ridge hydrothermal vent fields',
      'East Pacific Rise vents',
      'Clarion-Clipperton Zone abyssal plain (central Pacific)',
      'Mariana Trench & hadal trenches (western Pacific)',
      'Arctic deep basins',
      'Antarctic abyssal plains',
    ],
    keySpeciesGroups: [
      'arthropoda',
      'mollusca',
      'echinodermata',
      'cnidaria',
      'actinopterygii',
    ],
    biodiversityIndex: 22,
    threats: [
      {
        name: 'Deep-Sea Mining',
        severity: 'critical',
        description:
          'Proposed extraction of polymetallic nodules, seafloor massive sulphides, and cobalt crusts would destroy habitats that take centuries to millennia to develop.',
      },
      {
        name: 'Bottom Trawling',
        severity: 'high',
        description:
          'Deep-water bottom trawling on seamounts and continental slopes crushes ancient coral gardens and sponge fields, some over 4,000 years old.',
      },
      {
        name: 'Climate Change',
        severity: 'high',
        description:
          'Ocean warming is altering deep-water circulation, reducing oxygen supply to the abyss, and changing the flux of organic carbon from surface waters.',
      },
      {
        name: 'Pollution',
        severity: 'moderate',
        description:
          'Mercury, persistent organic pollutants, and microplastics have been detected in the deepest ocean trenches, accumulating in deep-sea food webs.',
      },
    ],
    conservationBreakdown: {
      LC: 18000,
      NT: 3500,
      VU: 4000,
      EN: 2500,
      CR: 800,
      DD: 19000,
      EX: 100,
      NE: 2100,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 99 },
      { year: 1980, index: 98 },
      { year: 1985, index: 97 },
      { year: 1990, index: 96 },
      { year: 1995, index: 94 },
      { year: 2000, index: 92 },
      { year: 2005, index: 90 },
      { year: 2010, index: 88 },
      { year: 2015, index: 86 },
      { year: 2020, index: 84 },
      { year: 2024, index: 82 },
    ],
    stats: {
      totalSpecies: 50000,
      endemicSpecies: 25000,
      threatenedSpecies: 7300,
      extinctSpecies: 100,
    },
    color: '#0D2137',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 13. MANGROVE
  // =========================================================================
  {
    id: 'mangrove',
    name: 'Mangrove',
    description:
      'Mangrove forests occupy the intertidal zone along tropical and subtropical coastlines, where salt-tolerant trees with aerial root systems create one of the most productive ecosystems on Earth. Mangroves serve as critical nursery habitat for commercially important fish and shrimp species, protect coastlines from storm surges and tsunamis, sequester carbon at rates 3-5 times greater than terrestrial forests, and filter sediment and pollutants. Despite their outsized ecological and economic value, mangroves have declined by 35% since 1980.',
    climate: {
      temperatureRange: '20-35 °C; frost-intolerant',
      precipitation: '1,000-3,000 mm annually; varies by region',
      seasonality: 'Tidal cycles dominate; seasonal variation in freshwater input and storm frequency',
    },
    area: '0.15 million km²',
    percentLand: 0.1,
    regions: [
      'Sundarbans (Bangladesh, India)',
      'Southeast Asian coasts (Indonesia, Myanmar, Thailand)',
      'West African coast (Nigeria, Cameroon, Guinea-Bissau)',
      'Northern Australian coast',
      'Florida Everglades & Caribbean (United States, Cuba)',
      'Pacific coast of Central America',
    ],
    keySpeciesGroups: [
      'actinopterygii',
      'aves',
      'reptilia',
      'arthropoda',
      'angiosperms',
    ],
    biodiversityIndex: 58,
    threats: [
      {
        name: 'Aquaculture Conversion',
        severity: 'critical',
        description:
          'Shrimp farming has been the leading cause of mangrove loss since the 1980s, particularly in Southeast Asia, with ponds often abandoned after 5-10 years.',
      },
      {
        name: 'Coastal Development',
        severity: 'high',
        description:
          'Tourism infrastructure, ports, and urban expansion clear mangroves and alter tidal hydrology essential for mangrove function.',
      },
      {
        name: 'Sea Level Rise',
        severity: 'high',
        description:
          'Rising seas may outpace mangrove vertical accretion rates in low-lying deltas, causing coastal squeeze where landward migration is blocked by development.',
      },
      {
        name: 'Pollution & Sedimentation',
        severity: 'moderate',
        description:
          'Oil spills, plastic waste, and excessive sediment from deforested watersheds smother aerial roots and reduce mangrove productivity.',
      },
      {
        name: 'Overharvesting',
        severity: 'moderate',
        description:
          'Mangrove wood is harvested for charcoal, construction, and firewood, often exceeding sustainable regeneration rates.',
      },
    ],
    conservationBreakdown: {
      LC: 46000,
      NT: 8500,
      VU: 9000,
      EN: 7000,
      CR: 3500,
      DD: 4500,
      EX: 400,
      NE: 1100,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 95 },
      { year: 1980, index: 89 },
      { year: 1985, index: 82 },
      { year: 1990, index: 75 },
      { year: 1995, index: 69 },
      { year: 2000, index: 64 },
      { year: 2005, index: 60 },
      { year: 2010, index: 58 },
      { year: 2015, index: 56 },
      { year: 2020, index: 55 },
      { year: 2024, index: 54 },
    ],
    stats: {
      totalSpecies: 80000,
      endemicSpecies: 12000,
      threatenedSpecies: 19500,
      extinctSpecies: 400,
    },
    color: '#4A7A4A',
    iconEmoji: undefined,
  },

  // =========================================================================
  // 14. WETLAND
  // =========================================================================
  {
    id: 'wetland',
    name: 'Wetland',
    description:
      'Wetlands -- including marshes, swamps, bogs, fens, peatlands, and floodplains -- are transitional ecosystems where water saturates or covers the soil for all or part of the year. Often dismissed as "wastelands," wetlands are now recognised as carbon storage champions: peatlands alone store twice as much carbon as all the world\'s forests combined in just 3% of the land surface. Wetlands also provide flood control, water purification, groundwater recharge, and critical habitat for migratory waterbirds. The Ramsar Convention protects over 2,400 Wetlands of International Importance.',
    climate: {
      temperatureRange: '-30 to 35 °C; highly variable by type and latitude',
      precipitation: '200-2,000+ mm annually; water table position is the defining factor',
      seasonality: 'Flooding pulses may be seasonal (floodplains) or permanent (bogs); freeze-thaw cycles important in northern peatlands',
    },
    area: '12.1 million km²',
    percentLand: 8.0,
    regions: [
      'Western Siberian Lowlands peatlands (Russia)',
      'Pantanal (Brazil, Paraguay, Bolivia)',
      'Okavango Delta (Botswana)',
      'Everglades (United States)',
      'Sudd (South Sudan)',
      'Hudson Bay Lowlands (Canada)',
    ],
    keySpeciesGroups: [
      'aves',
      'amphibia',
      'actinopterygii',
      'insecta',
      'angiosperms',
      'reptilia',
    ],
    biodiversityIndex: 50,
    threats: [
      {
        name: 'Drainage & Conversion',
        severity: 'critical',
        description:
          'An estimated 87% of the world\'s wetlands have been lost since 1700, drained for agriculture, peat extraction, and urban expansion at three times the rate of forest loss.',
      },
      {
        name: 'Peatland Degradation',
        severity: 'critical',
        description:
          'Drained and burned peatlands in Southeast Asia and Northern Europe release massive quantities of CO2, switching from carbon sinks to significant emission sources.',
      },
      {
        name: 'Pollution & Eutrophication',
        severity: 'high',
        description:
          'Agricultural fertiliser runoff and wastewater discharge cause algal blooms, oxygen depletion, and loss of submerged vegetation in wetland systems.',
      },
      {
        name: 'Climate Change',
        severity: 'high',
        description:
          'Altered precipitation patterns and increased evapotranspiration are drying wetlands in many regions, while permafrost thaw is transforming Arctic wetlands.',
      },
      {
        name: 'Invasive Species',
        severity: 'moderate',
        description:
          'Phragmites australis, water hyacinth, and nutria modify wetland structure, outcompete native species, and clog waterways.',
      },
    ],
    conservationBreakdown: {
      LC: 70000,
      NT: 12000,
      VU: 13000,
      EN: 10000,
      CR: 4500,
      DD: 7500,
      EX: 1000,
      NE: 2000,
    },
    trendData: [
      { year: 1970, index: 100 },
      { year: 1975, index: 94 },
      { year: 1980, index: 87 },
      { year: 1985, index: 81 },
      { year: 1990, index: 74 },
      { year: 1995, index: 68 },
      { year: 2000, index: 63 },
      { year: 2005, index: 58 },
      { year: 2010, index: 54 },
      { year: 2015, index: 51 },
      { year: 2020, index: 48 },
      { year: 2024, index: 46 },
    ],
    stats: {
      totalSpecies: 120000,
      endemicSpecies: 20000,
      threatenedSpecies: 27500,
      extinctSpecies: 1000,
    },
    color: '#5B8A72',
    iconEmoji: undefined,
  },
]

// ---------------------------------------------------------------------------
// Helper function
// ---------------------------------------------------------------------------

/**
 * Look up a biome by its unique string identifier.
 * Returns `undefined` if no biome matches the given id.
 */
export function getBiomeById(id: string): Biome | undefined {
  return biomes.find((b) => b.id === id)
}
