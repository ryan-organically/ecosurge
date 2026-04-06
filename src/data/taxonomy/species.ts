import type { Species } from './types'

export const sampleSpecies: Species[] = [
  {
    id: 'panthera-leo',
    commonName: 'African Lion',
    scientificName: 'Panthera leo',
    taxonomy: {
      domain: 'Eukaryota',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Carnivora',
      family: 'Felidae',
      genus: 'Panthera',
      species: 'P. leo'
    },
    description: 'The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail.',
    habitat: 'Savannas, grasslands, dense bush, and woodlands',
    distribution: 'Sub-Saharan Africa, with a small population in the Gir Forest of India',
    conservationStatus: 'VU',
    characteristics: [
      'Males have distinctive manes',
      'Social cats that live in groups called prides',
      'Apex predators',
      'Can roar up to 8 km away'
    ],
    diet: 'Carnivore - primarily large ungulates like zebras, wildebeest, and buffalo',
    lifespan: '10-14 years in the wild, up to 20 in captivity',
    size: 'Males: 1.7-2.5m body length, 150-250 kg',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1280px-Lion_waiting_in_Namibia.jpg'],
    funFacts: [
      'Lions sleep up to 20 hours a day',
      'A lion\'s roar can be heard from 8 kilometers away',
      'Female lions do 90% of the hunting'
    ]
  },
  {
    id: 'balaenoptera-musculus',
    commonName: 'Blue Whale',
    scientificName: 'Balaenoptera musculus',
    taxonomy: {
      domain: 'Eukaryota',
      kingdom: 'Animalia',
      phylum: 'Chordata',
      class: 'Mammalia',
      order: 'Cetacea',
      family: 'Balaenopteridae',
      genus: 'Balaenoptera',
      species: 'B. musculus'
    },
    description: 'The blue whale is the largest animal known to have ever existed on Earth. These magnificent marine mammals can reach lengths of up to 100 feet and weigh as much as 200 tons.',
    habitat: 'Open ocean, all major oceans',
    distribution: 'Found in all oceans except the Arctic',
    conservationStatus: 'EN',
    characteristics: [
      'Largest animal ever known to exist',
      'Heart the size of a small car',
      'Tongue weighs as much as an elephant',
      'Filter feeders using baleen plates'
    ],
    diet: 'Almost exclusively krill, consuming up to 4 tons per day',
    lifespan: '80-90 years',
    size: 'Up to 30 meters long, 170+ tonnes',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/1280px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg'],
    funFacts: [
      'A blue whale\'s heart weighs about 400 pounds',
      'Their calls are the loudest sounds made by any animal',
      'Blue whale calves gain 200 pounds per day'
    ]
  },
  {
    id: 'apis-mellifera',
    commonName: 'Western Honey Bee',
    scientificName: 'Apis mellifera',
    taxonomy: {
      domain: 'Eukaryota',
      kingdom: 'Animalia',
      phylum: 'Arthropoda',
      class: 'Insecta',
      order: 'Hymenoptera',
      family: 'Apidae',
      genus: 'Apis',
      species: 'A. mellifera'
    },
    description: 'The western honey bee is the most common species of honey bee worldwide. Known for their role in pollination and honey production, they are essential to global food systems.',
    habitat: 'Varied - forests, deserts, wetlands, and human settlements',
    distribution: 'Native to Europe, Africa, and Western Asia; introduced worldwide',
    conservationStatus: 'DD',
    characteristics: [
      'Highly social insects living in colonies',
      'Complex communication through dance',
      'Produce honey, beeswax, and propolis',
      'Essential pollinators for many crops'
    ],
    diet: 'Nectar and pollen from flowers',
    lifespan: 'Workers: 6 weeks, Queens: 3-5 years',
    size: 'Workers: 12-15mm, Queens: 18-20mm',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Apis_mellifera_Western_honey_bee.jpg/1280px-Apis_mellifera_Western_honey_bee.jpg'],
    funFacts: [
      'Bees must visit 2 million flowers to make 1 pound of honey',
      'A bee\'s wings beat 200 times per second',
      'Honey bees can recognize human faces'
    ]
  },
  {
    id: 'sequoia-sempervirens',
    commonName: 'Coast Redwood',
    scientificName: 'Sequoia sempervirens',
    taxonomy: {
      domain: 'Eukaryota',
      kingdom: 'Plantae',
      phylum: 'Gymnospermae',
      class: 'Pinopsida',
      order: 'Pinales',
      family: 'Cupressaceae',
      genus: 'Sequoia',
      species: 'S. sempervirens'
    },
    description: 'The coast redwood is the tallest tree species on Earth, reaching heights over 350 feet. These ancient giants can live for over 2,000 years and are icons of the Pacific Coast.',
    habitat: 'Coastal fog belt, temperate rainforests',
    distribution: 'Narrow coastal strip from southern Oregon to central California',
    conservationStatus: 'EN',
    characteristics: [
      'Tallest trees on Earth',
      'Bark up to 12 inches thick',
      'Fire-resistant bark',
      'Can sprout from roots and stumps'
    ],
    lifespan: '1,200-2,200 years',
    size: 'Up to 115 meters tall, 9 meters diameter',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sequoia_sempervirens_Big_Basin_Redwoods_State_Park_4.jpg/800px-Sequoia_sempervirens_Big_Basin_Redwoods_State_Park_4.jpg'],
    funFacts: [
      'The tallest known redwood is named Hyperion at 380 feet',
      'Redwoods can absorb water through their leaves from fog',
      'A single redwood can contain 10,000+ gallons of water'
    ]
  },
  {
    id: 'octopus-vulgaris',
    commonName: 'Common Octopus',
    scientificName: 'Octopus vulgaris',
    taxonomy: {
      domain: 'Eukaryota',
      kingdom: 'Animalia',
      phylum: 'Mollusca',
      class: 'Cephalopoda',
      order: 'Octopoda',
      family: 'Octopodidae',
      genus: 'Octopus',
      species: 'O. vulgaris'
    },
    description: 'The common octopus is a highly intelligent mollusk with eight arms, three hearts, and blue blood. Known for problem-solving abilities and remarkable camouflage skills.',
    habitat: 'Rocky coasts, coral reefs, seagrass beds',
    distribution: 'Temperate and tropical waters worldwide',
    conservationStatus: 'LC',
    characteristics: [
      'Eight arms with suction cups',
      'Three hearts and blue blood',
      'Can change color and texture instantly',
      'Highly intelligent with problem-solving abilities'
    ],
    diet: 'Crabs, crayfish, mollusks, and small fish',
    lifespan: '1-2 years',
    size: '30-90 cm arm span, up to 10 kg',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus_vulgaris_02.JPG/1280px-Octopus_vulgaris_02.JPG'],
    funFacts: [
      'Octopuses have three hearts and blue blood',
      'They can squeeze through any hole larger than their beak',
      'Each arm has its own mini-brain and can act independently'
    ]
  }
]
