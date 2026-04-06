-- Species Archive Database Schema
-- SQLite database for browser-side querying via sql.js

-- Species table: core species data
CREATE TABLE IF NOT EXISTS species (
  id TEXT PRIMARY KEY,
  common_name TEXT NOT NULL,
  scientific_name TEXT NOT NULL,
  description TEXT,
  habitat TEXT,
  distribution TEXT,
  conservation_status TEXT NOT NULL,
  diet TEXT,
  lifespan TEXT,
  size TEXT,
  discovered_by TEXT,
  discovered_year INTEGER,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Taxonomy table: taxonomic classification for each species
CREATE TABLE IF NOT EXISTS taxonomy (
  species_id TEXT PRIMARY KEY REFERENCES species(id),
  domain TEXT NOT NULL,
  kingdom TEXT NOT NULL,
  phylum TEXT NOT NULL,
  class TEXT NOT NULL,
  "order" TEXT NOT NULL,
  family TEXT NOT NULL,
  genus TEXT NOT NULL,
  species TEXT NOT NULL
);

-- Characteristics table: species characteristics (one-to-many)
CREATE TABLE IF NOT EXISTS characteristics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species_id TEXT NOT NULL REFERENCES species(id),
  characteristic TEXT NOT NULL
);

-- Fun facts table (one-to-many)
CREATE TABLE IF NOT EXISTS fun_facts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species_id TEXT NOT NULL REFERENCES species(id),
  fact TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Images table: species image metadata
CREATE TABLE IF NOT EXISTS images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species_id TEXT NOT NULL REFERENCES species(id),
  url TEXT NOT NULL,
  source TEXT,
  license TEXT,
  attribution TEXT,
  is_primary INTEGER DEFAULT 0
);

-- Vernacular names table: common names in different languages
CREATE TABLE IF NOT EXISTS vernacular_names (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species_id TEXT NOT NULL REFERENCES species(id),
  name TEXT NOT NULL,
  language_code TEXT NOT NULL,
  country_code TEXT,
  is_preferred INTEGER DEFAULT 0
);

-- Taxon tree table: hierarchical taxonomy structure
CREATE TABLE IF NOT EXISTS taxon_tree (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  scientific_name TEXT NOT NULL,
  rank TEXT NOT NULL,
  description TEXT,
  parent_id TEXT REFERENCES taxon_tree(id),
  species_count INTEGER DEFAULT 0,
  image_url TEXT
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_species_scientific_name ON species(scientific_name);
CREATE INDEX IF NOT EXISTS idx_species_common_name ON species(common_name);
CREATE INDEX IF NOT EXISTS idx_species_conservation ON species(conservation_status);
CREATE INDEX IF NOT EXISTS idx_taxonomy_kingdom ON taxonomy(kingdom);
CREATE INDEX IF NOT EXISTS idx_taxonomy_family ON taxonomy(family);
CREATE INDEX IF NOT EXISTS idx_characteristics_species ON characteristics(species_id);
CREATE INDEX IF NOT EXISTS idx_fun_facts_species ON fun_facts(species_id);
CREATE INDEX IF NOT EXISTS idx_images_species ON images(species_id);
CREATE INDEX IF NOT EXISTS idx_vernacular_species ON vernacular_names(species_id);
CREATE INDEX IF NOT EXISTS idx_vernacular_lang ON vernacular_names(language_code);
CREATE INDEX IF NOT EXISTS idx_taxon_parent ON taxon_tree(parent_id);
CREATE INDEX IF NOT EXISTS idx_taxon_rank ON taxon_tree(rank);

-- Full-text search table for species
CREATE VIRTUAL TABLE IF NOT EXISTS species_fts USING fts5(
  id,
  common_name,
  scientific_name,
  description,
  habitat,
  content='species',
  content_rowid='rowid'
);

-- Triggers to keep FTS index in sync
CREATE TRIGGER IF NOT EXISTS species_ai AFTER INSERT ON species BEGIN
  INSERT INTO species_fts(rowid, id, common_name, scientific_name, description, habitat)
  VALUES (new.rowid, new.id, new.common_name, new.scientific_name, new.description, new.habitat);
END;

CREATE TRIGGER IF NOT EXISTS species_ad AFTER DELETE ON species BEGIN
  INSERT INTO species_fts(species_fts, rowid, id, common_name, scientific_name, description, habitat)
  VALUES('delete', old.rowid, old.id, old.common_name, old.scientific_name, old.description, old.habitat);
END;

CREATE TRIGGER IF NOT EXISTS species_au AFTER UPDATE ON species BEGIN
  INSERT INTO species_fts(species_fts, rowid, id, common_name, scientific_name, description, habitat)
  VALUES('delete', old.rowid, old.id, old.common_name, old.scientific_name, old.description, old.habitat);
  INSERT INTO species_fts(rowid, id, common_name, scientific_name, description, habitat)
  VALUES (new.rowid, new.id, new.common_name, new.scientific_name, new.description, new.habitat);
END;
