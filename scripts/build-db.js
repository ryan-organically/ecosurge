#!/usr/bin/env node

/**
 * Build Database Script
 *
 * Generates the SQLite database file (species.db) from the taxonomy.ts data.
 * The database is used by sql.js in the browser for offline querying.
 *
 * Usage:
 *   npm run build:db
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import Database from 'better-sqlite3'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '..')

/**
 * Parse species data from taxonomy.ts and generated JSON files
 */
async function loadSpeciesData() {
  const species = []

  // Hardcoded species from taxonomy.ts
  const hardcodedSpecies = [
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
      description: 'The lion is a large cat of the genus Panthera native to Africa and India.',
      habitat: 'Savannas, grasslands, dense bush, and woodlands',
      distribution: 'Sub-Saharan Africa, with a small population in the Gir Forest of India',
      conservationStatus: 'VU',
      characteristics: ['Males have distinctive manes', 'Social cats that live in groups called prides', 'Apex predators', 'Can roar up to 8 km away'],
      diet: 'Carnivore - primarily large ungulates like zebras, wildebeest, and buffalo',
      lifespan: '10-14 years in the wild, up to 20 in captivity',
      size: 'Males: 1.7-2.5m body length, 150-250 kg',
      images: [],
      funFacts: ['Lions sleep up to 20 hours a day', "A lion's roar can be heard from 8 kilometers away", 'Female lions do 90% of the hunting']
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
      description: 'The blue whale is the largest animal known to have ever existed on Earth.',
      habitat: 'Open ocean, all major oceans',
      distribution: 'Found in all oceans except the Arctic',
      conservationStatus: 'EN',
      characteristics: ['Largest animal ever known to exist', 'Heart the size of a small car', 'Tongue weighs as much as an elephant', 'Filter feeders using baleen plates'],
      diet: 'Almost exclusively krill, consuming up to 4 tons per day',
      lifespan: '80-90 years',
      size: 'Up to 30 meters long, 170+ tonnes',
      images: [],
      funFacts: ["A blue whale's heart weighs about 400 pounds", 'Their calls are the loudest sounds made by any animal', 'Blue whale calves gain 200 pounds per day']
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
      description: 'The western honey bee is the most common species of honey bee worldwide.',
      habitat: 'Varied - forests, deserts, wetlands, and human settlements',
      distribution: 'Native to Europe, Africa, and Western Asia; introduced worldwide',
      conservationStatus: 'DD',
      characteristics: ['Highly social insects living in colonies', 'Complex communication through dance', 'Produce honey, beeswax, and propolis', 'Essential pollinators for many crops'],
      diet: 'Nectar and pollen from flowers',
      lifespan: 'Workers: 6 weeks, Queens: 3-5 years',
      size: 'Workers: 12-15mm, Queens: 18-20mm',
      images: [],
      funFacts: ['Bees must visit 2 million flowers to make 1 pound of honey', "A bee's wings beat 200 times per second", 'Honey bees can recognize human faces']
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
      description: 'The coast redwood is the tallest tree species on Earth.',
      habitat: 'Coastal fog belt, temperate rainforests',
      distribution: 'Narrow coastal strip from southern Oregon to central California',
      conservationStatus: 'EN',
      characteristics: ['Tallest trees on Earth', 'Bark up to 12 inches thick', 'Fire-resistant bark', 'Can sprout from roots and stumps'],
      lifespan: '1,200-2,200 years',
      size: 'Up to 115 meters tall, 9 meters diameter',
      images: [],
      funFacts: ['The tallest known redwood is named Hyperion at 380 feet', 'Redwoods can absorb water through their leaves from fog', 'A single redwood can contain 10,000+ gallons of water']
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
      description: 'The common octopus is a highly intelligent mollusk with eight arms.',
      habitat: 'Rocky coasts, coral reefs, seagrass beds',
      distribution: 'Temperate and tropical waters worldwide',
      conservationStatus: 'LC',
      characteristics: ['Eight arms with suction cups', 'Three hearts and blue blood', 'Can change color and texture instantly', 'Highly intelligent with problem-solving abilities'],
      diet: 'Crabs, crayfish, mollusks, and small fish',
      lifespan: '1-2 years',
      size: '30-90 cm arm span, up to 10 kg',
      images: [],
      funFacts: ['Octopuses have three hearts and blue blood', 'They can squeeze through any hole larger than their beak', 'Each arm has its own mini-brain and can act independently']
    }
  ]

  species.push(...hardcodedSpecies)

  // Load generated species
  const generatedDir = path.join(PROJECT_ROOT, 'src/data/generated')
  try {
    const indexPath = path.join(generatedDir, 'index.json')
    const indexContent = await fs.readFile(indexPath, 'utf-8')
    const index = JSON.parse(indexContent)

    for (const sp of index.species || []) {
      try {
        const speciesPath = path.join(generatedDir, `${sp.id}.json`)
        const speciesData = JSON.parse(await fs.readFile(speciesPath, 'utf-8'))
        species.push(speciesData)
      } catch {
        console.log(`Could not load generated species: ${sp.id}`)
      }
    }
  } catch {
    console.log('No generated species index found')
  }

  return species
}

/**
 * Build the taxon tree from taxonomy.ts structure
 */
function buildTaxonTree() {
  // Simplified tree structure for database
  return [
    { id: 'bacteria', name: 'Bacteria', scientificName: 'Bacteria', rank: 'domain', parentId: null, speciesCount: 10000 },
    { id: 'archaea', name: 'Archaea', scientificName: 'Archaea', rank: 'domain', parentId: null, speciesCount: 500 },
    { id: 'eukaryota', name: 'Eukaryota', scientificName: 'Eukaryota', rank: 'domain', parentId: null, speciesCount: 8700000 },

    // Eukaryota kingdoms
    { id: 'animalia', name: 'Animals', scientificName: 'Animalia', rank: 'kingdom', parentId: 'eukaryota', speciesCount: 1500000 },
    { id: 'plantae', name: 'Plants', scientificName: 'Plantae', rank: 'kingdom', parentId: 'eukaryota', speciesCount: 400000 },
    { id: 'fungi', name: 'Fungi', scientificName: 'Fungi', rank: 'kingdom', parentId: 'eukaryota', speciesCount: 150000 },
    { id: 'protista', name: 'Protists', scientificName: 'Protista', rank: 'kingdom', parentId: 'eukaryota', speciesCount: 200000 },

    // Animalia phyla
    { id: 'chordata', name: 'Chordates', scientificName: 'Chordata', rank: 'phylum', parentId: 'animalia', speciesCount: 70000 },
    { id: 'arthropoda', name: 'Arthropods', scientificName: 'Arthropoda', rank: 'phylum', parentId: 'animalia', speciesCount: 1200000 },
    { id: 'mollusca', name: 'Mollusks', scientificName: 'Mollusca', rank: 'phylum', parentId: 'animalia', speciesCount: 85000 },

    // Chordata classes
    { id: 'mammalia', name: 'Mammals', scientificName: 'Mammalia', rank: 'class', parentId: 'chordata', speciesCount: 6400 },
    { id: 'aves', name: 'Birds', scientificName: 'Aves', rank: 'class', parentId: 'chordata', speciesCount: 10000 },
    { id: 'reptilia', name: 'Reptiles', scientificName: 'Reptilia', rank: 'class', parentId: 'chordata', speciesCount: 10000 },
    { id: 'amphibia', name: 'Amphibians', scientificName: 'Amphibia', rank: 'class', parentId: 'chordata', speciesCount: 8000 },

    // Mammalia orders
    { id: 'carnivora', name: 'Carnivores', scientificName: 'Carnivora', rank: 'order', parentId: 'mammalia', speciesCount: 280 },
    { id: 'primates', name: 'Primates', scientificName: 'Primates', rank: 'order', parentId: 'mammalia', speciesCount: 500 },
    { id: 'cetacea', name: 'Whales & Dolphins', scientificName: 'Cetacea', rank: 'order', parentId: 'mammalia', speciesCount: 90 },

    // Carnivora families
    { id: 'felidae', name: 'Cats', scientificName: 'Felidae', rank: 'family', parentId: 'carnivora', speciesCount: 37 },
    { id: 'canidae', name: 'Dogs', scientificName: 'Canidae', rank: 'family', parentId: 'carnivora', speciesCount: 35 },
    { id: 'ursidae', name: 'Bears', scientificName: 'Ursidae', rank: 'family', parentId: 'carnivora', speciesCount: 8 },

    // Felidae genera
    { id: 'panthera', name: 'Big Cats', scientificName: 'Panthera', rank: 'genus', parentId: 'felidae', speciesCount: 5 },
    { id: 'felis', name: 'Small Cats', scientificName: 'Felis', rank: 'genus', parentId: 'felidae', speciesCount: 6 },

    // Arthropoda classes
    { id: 'insecta', name: 'Insects', scientificName: 'Insecta', rank: 'class', parentId: 'arthropoda', speciesCount: 1000000 },
    { id: 'crustacea', name: 'Crustaceans', scientificName: 'Crustacea', rank: 'class', parentId: 'arthropoda', speciesCount: 70000 },

    // Insecta orders
    { id: 'hymenoptera', name: 'Ants, Bees & Wasps', scientificName: 'Hymenoptera', rank: 'order', parentId: 'insecta', speciesCount: 150000 },
    { id: 'lepidoptera', name: 'Butterflies & Moths', scientificName: 'Lepidoptera', rank: 'order', parentId: 'insecta', speciesCount: 180000 },
    { id: 'coleoptera', name: 'Beetles', scientificName: 'Coleoptera', rank: 'order', parentId: 'insecta', speciesCount: 400000 },

    // Mollusca classes
    { id: 'cephalopoda', name: 'Octopuses & Squid', scientificName: 'Cephalopoda', rank: 'class', parentId: 'mollusca', speciesCount: 800 },

    // Plantae phyla
    { id: 'angiosperms', name: 'Flowering Plants', scientificName: 'Magnoliophyta', rank: 'phylum', parentId: 'plantae', speciesCount: 300000 },
    { id: 'gymnosperms', name: 'Conifers & Allies', scientificName: 'Gymnospermae', rank: 'phylum', parentId: 'plantae', speciesCount: 1000 },
  ]
}

async function main() {
  console.log('🗃️  Building Species Database')
  console.log('==============================')

  // Load schema
  const schemaPath = path.join(PROJECT_ROOT, 'src/db/schema.sql')
  const schema = await fs.readFile(schemaPath, 'utf-8')

  // Create output directory
  const outputDir = path.join(PROJECT_ROOT, 'public/data')
  await fs.mkdir(outputDir, { recursive: true })

  const dbPath = path.join(outputDir, 'species.db')

  // Remove existing database
  try {
    await fs.unlink(dbPath)
  } catch { }

  // Create database
  const db = new Database(dbPath)
  console.log('✓ Created database')

  // Execute schema
  db.exec(schema)
  console.log('✓ Applied schema')

  // Load species data
  const species = await loadSpeciesData()
  console.log(`✓ Loaded ${species.length} species`)

  // Insert species
  const insertSpecies = db.prepare(`
    INSERT INTO species (id, common_name, scientific_name, description, habitat, distribution, conservation_status, diet, lifespan, size, discovered_by, discovered_year)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const insertTaxonomy = db.prepare(`
    INSERT INTO taxonomy (species_id, domain, kingdom, phylum, class, "order", family, genus, species)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const insertCharacteristic = db.prepare(`
    INSERT INTO characteristics (species_id, characteristic)
    VALUES (?, ?)
  `)

  const insertFunFact = db.prepare(`
    INSERT INTO fun_facts (species_id, fact, sort_order)
    VALUES (?, ?, ?)
  `)

  const insertMany = db.transaction((speciesList) => {
    for (const sp of speciesList) {
      insertSpecies.run(
        sp.id,
        sp.commonName,
        sp.scientificName,
        sp.description,
        sp.habitat,
        sp.distribution,
        sp.conservationStatus,
        sp.diet || null,
        sp.lifespan || null,
        sp.size || null,
        sp.discoveredBy || null,
        sp.discoveredYear || null
      )

      insertTaxonomy.run(
        sp.id,
        sp.taxonomy.domain,
        sp.taxonomy.kingdom,
        sp.taxonomy.phylum,
        sp.taxonomy.class,
        sp.taxonomy.order,
        sp.taxonomy.family,
        sp.taxonomy.genus,
        sp.taxonomy.species
      )

      for (const char of sp.characteristics || []) {
        insertCharacteristic.run(sp.id, char)
      }

      for (let i = 0; i < (sp.funFacts || []).length; i++) {
        insertFunFact.run(sp.id, sp.funFacts[i], i)
      }
    }
  })

  insertMany(species)
  console.log('✓ Inserted species data')

  // Insert taxon tree
  const taxonTree = buildTaxonTree()
  const insertTaxon = db.prepare(`
    INSERT INTO taxon_tree (id, name, scientific_name, rank, parent_id, species_count)
    VALUES (?, ?, ?, ?, ?, ?)
  `)

  for (const taxon of taxonTree) {
    insertTaxon.run(
      taxon.id,
      taxon.name,
      taxon.scientificName,
      taxon.rank,
      taxon.parentId,
      taxon.speciesCount
    )
  }
  console.log('✓ Inserted taxon tree')

  // Get database size
  const stats = await fs.stat(dbPath)
  const sizeKB = (stats.size / 1024).toFixed(1)

  db.close()

  // Generate manifest with content hash so clients know when to re-download
  const { createHash } = await import('crypto')
  const dbBuffer = await fs.readFile(dbPath)
  const hash = createHash('sha256').update(dbBuffer).digest('hex').slice(0, 12)
  const manifest = {
    version: hash,
    size: stats.size,
    built: new Date().toISOString(),
  }
  const manifestPath = path.join(PROJECT_ROOT, 'public/data/db-manifest.json')
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2))

  console.log('')
  console.log(`Database: ${dbPath} (${sizeKB} KB)`)
  console.log(`Manifest: ${manifestPath} (version: ${hash})`)
  console.log('')
  console.log('✓ Build complete')
}

main().catch(console.error)
