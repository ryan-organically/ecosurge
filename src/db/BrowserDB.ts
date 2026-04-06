/**
 * Browser Database - sql.js wrapper for client-side SQLite
 * Provides offline-capable species data querying
 *
 * sql.js is loaded dynamically at runtime from CDN, so we define
 * the types inline to avoid build-time dependency issues.
 */

// Type definitions for sql.js (loaded dynamically)
interface SqlJsDatabase {
  prepare(sql: string): SqlJsStatement
  exec(sql: string): unknown[]
  close(): void
}

interface SqlJsStatement {
  bind(params?: unknown[]): boolean
  step(): boolean
  getAsObject(): Record<string, unknown>
  free(): void
}

interface SqlJsStatic {
  Database: new (data?: ArrayLike<number>) => SqlJsDatabase
}

export interface SpeciesRow {
  id: string
  common_name: string
  scientific_name: string
  description: string | null
  habitat: string | null
  distribution: string | null
  conservation_status: string
  diet: string | null
  lifespan: string | null
  size: string | null
  discovered_by: string | null
  discovered_year: number | null
}

export interface TaxonomyRow {
  species_id: string
  domain: string
  kingdom: string
  phylum: string
  class: string
  order: string
  family: string
  genus: string
  species: string
}

export interface TaxonTreeRow {
  id: string
  name: string
  scientific_name: string
  rank: string
  description: string | null
  parent_id: string | null
  species_count: number
  image_url: string | null
}

export interface SearchResult {
  id: string
  common_name: string
  scientific_name: string
  rank: number
}

class BrowserDB {
  private db: SqlJsDatabase | null = null
  private initPromise: Promise<void> | null = null
  private SQL: SqlJsStatic | null = null

  /**
   * Initialize the database from a static SQLite file
   */
  async init(): Promise<void> {
    if (this.db) return
    if (this.initPromise) return this.initPromise

    this.initPromise = this._init()
    return this.initPromise
  }

  private async _init(): Promise<void> {
    try {
      // Load sql.js dynamically from CDN
      // @ts-expect-error - sql.js loaded dynamically
      const initSqlJs = (await import('https://sql.js.org/dist/sql-wasm.js')).default
      this.SQL = await initSqlJs({
        locateFile: (file: string) => `https://sql.js.org/dist/${file}`
      }) as SqlJsStatic

      // Check if server has a newer version than what we cached
      const serverVersion = await this.fetchManifestVersion()
      const cachedVersion = await this.getCachedVersion()

      if (cachedVersion && cachedVersion === serverVersion) {
        const cached = await this.loadFromCache()
        if (cached) {
          this.db = new this.SQL.Database(cached)
          return
        }
      }

      // Fetch fresh database from server
      const response = await fetch('/data/species.db')
      if (!response.ok) {
        throw new Error(`Failed to load database: ${response.status}`)
      }

      const arrayBuffer = await response.arrayBuffer()
      const uint8Array = new Uint8Array(arrayBuffer)

      this.db = new this.SQL!.Database(uint8Array)

      // Cache both the DB and its version
      await this.saveToCache(uint8Array)
      if (serverVersion) {
        await this.setCachedVersion(serverVersion)
      }
    } catch (error) {
      console.error('Failed to initialize database:', error)
      // Try cached data as offline fallback
      const cached = await this.loadFromCache()
      if (cached && this.SQL) {
        this.db = new this.SQL.Database(cached)
        return
      }
      if (this.SQL) {
        this.db = new this.SQL.Database()
      }
      throw error
    }
  }

  private async fetchManifestVersion(): Promise<string | null> {
    try {
      const res = await fetch('/data/db-manifest.json', { cache: 'no-cache' })
      if (!res.ok) return null
      const manifest = await res.json()
      return manifest.version || null
    } catch {
      return null
    }
  }

  private async getCachedVersion(): Promise<string | null> {
    return new Promise((resolve) => {
      try {
        const request = indexedDB.open('species-archive-db', 1)
        request.onerror = () => resolve(null)
        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains('database')) {
            db.createObjectStore('database')
          }
        }
        request.onsuccess = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          const tx = db.transaction('database', 'readonly')
          const store = tx.objectStore('database')
          const getRequest = store.get('db-version')
          getRequest.onsuccess = () => resolve(getRequest.result || null)
          getRequest.onerror = () => resolve(null)
        }
      } catch {
        resolve(null)
      }
    })
  }

  private async setCachedVersion(version: string): Promise<void> {
    return new Promise((resolve) => {
      try {
        const request = indexedDB.open('species-archive-db', 1)
        request.onsuccess = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          const tx = db.transaction('database', 'readwrite')
          const store = tx.objectStore('database')
          store.put(version, 'db-version')
          tx.oncomplete = () => resolve()
          tx.onerror = () => resolve()
        }
        request.onerror = () => resolve()
      } catch {
        resolve()
      }
    })
  }

  /**
   * Load database from IndexedDB cache
   */
  private async loadFromCache(): Promise<Uint8Array | null> {
    return new Promise((resolve) => {
      try {
        const request = indexedDB.open('species-archive-db', 1)

        request.onerror = () => resolve(null)

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains('database')) {
            db.createObjectStore('database')
          }
        }

        request.onsuccess = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          const tx = db.transaction('database', 'readonly')
          const store = tx.objectStore('database')
          const getRequest = store.get('species.db')

          getRequest.onsuccess = () => {
            resolve(getRequest.result || null)
          }
          getRequest.onerror = () => resolve(null)
        }
      } catch {
        resolve(null)
      }
    })
  }

  /**
   * Save database to IndexedDB cache
   */
  private async saveToCache(data: Uint8Array): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const request = indexedDB.open('species-archive-db', 1)

        request.onerror = () => reject(new Error('Failed to open IndexedDB'))

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains('database')) {
            db.createObjectStore('database')
          }
        }

        request.onsuccess = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          const tx = db.transaction('database', 'readwrite')
          const store = tx.objectStore('database')
          store.put(data, 'species.db')

          tx.oncomplete = () => resolve()
          tx.onerror = () => reject(new Error('Failed to save to cache'))
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Execute a SQL query and return results
   */
  private exec<T>(sql: string, params: unknown[] = []): T[] {
    if (!this.db) {
      throw new Error('Database not initialized')
    }

    const stmt = this.db.prepare(sql)
    stmt.bind(params)

    const results: T[] = []
    while (stmt.step()) {
      results.push(stmt.getAsObject() as T)
    }
    stmt.free()

    return results
  }

  /**
   * Get all species
   */
  async getAllSpecies(): Promise<SpeciesRow[]> {
    await this.init()
    return this.exec<SpeciesRow>('SELECT * FROM species ORDER BY common_name')
  }

  /**
   * Get a single species by ID
   */
  async getSpecies(id: string): Promise<SpeciesRow | null> {
    await this.init()
    const results = this.exec<SpeciesRow>(
      'SELECT * FROM species WHERE id = ?',
      [id]
    )
    return results[0] || null
  }

  /**
   * Get taxonomy for a species
   */
  async getTaxonomy(speciesId: string): Promise<TaxonomyRow | null> {
    await this.init()
    const results = this.exec<TaxonomyRow>(
      'SELECT * FROM taxonomy WHERE species_id = ?',
      [speciesId]
    )
    return results[0] || null
  }

  /**
   * Get characteristics for a species
   */
  async getCharacteristics(speciesId: string): Promise<string[]> {
    await this.init()
    const results = this.exec<{ characteristic: string }>(
      'SELECT characteristic FROM characteristics WHERE species_id = ?',
      [speciesId]
    )
    return results.map(r => r.characteristic)
  }

  /**
   * Get fun facts for a species
   */
  async getFunFacts(speciesId: string): Promise<string[]> {
    await this.init()
    const results = this.exec<{ fact: string }>(
      'SELECT fact FROM fun_facts WHERE species_id = ? ORDER BY sort_order',
      [speciesId]
    )
    return results.map(r => r.fact)
  }

  /**
   * Get images for a species
   */
  async getImages(speciesId: string): Promise<string[]> {
    await this.init()
    const results = this.exec<{ url: string }>(
      'SELECT url FROM images WHERE species_id = ? ORDER BY is_primary DESC',
      [speciesId]
    )
    return results.map(r => r.url)
  }

  /**
   * Search species by name (full-text search)
   */
  async searchSpecies(query: string, limit: number = 20): Promise<SearchResult[]> {
    await this.init()

    // Use FTS5 for full-text search
    const results = this.exec<SearchResult>(
      `SELECT id, common_name, scientific_name, rank
       FROM species_fts
       WHERE species_fts MATCH ?
       ORDER BY rank
       LIMIT ?`,
      [query + '*', limit]
    )

    return results
  }

  /**
   * Get species by conservation status
   */
  async getByConservationStatus(status: string): Promise<SpeciesRow[]> {
    await this.init()
    return this.exec<SpeciesRow>(
      'SELECT * FROM species WHERE conservation_status = ? ORDER BY common_name',
      [status]
    )
  }

  /**
   * Get species by taxonomic group
   */
  async getByTaxonomy(
    field: keyof TaxonomyRow,
    value: string
  ): Promise<SpeciesRow[]> {
    await this.init()

    const allowedFields = ['domain', 'kingdom', 'phylum', 'class', 'order', 'family', 'genus']
    if (!allowedFields.includes(field)) {
      throw new Error(`Invalid taxonomy field: ${field}`)
    }

    return this.exec<SpeciesRow>(
      `SELECT s.* FROM species s
       JOIN taxonomy t ON s.id = t.species_id
       WHERE t.${field} = ?
       ORDER BY s.common_name`,
      [value]
    )
  }

  /**
   * Get taxon tree nodes
   */
  async getTaxonTree(parentId: string | null = null): Promise<TaxonTreeRow[]> {
    await this.init()

    if (parentId === null) {
      return this.exec<TaxonTreeRow>(
        'SELECT * FROM taxon_tree WHERE parent_id IS NULL ORDER BY name'
      )
    }

    return this.exec<TaxonTreeRow>(
      'SELECT * FROM taxon_tree WHERE parent_id = ? ORDER BY name',
      [parentId]
    )
  }

  /**
   * Get a single taxon by ID
   */
  async getTaxon(id: string): Promise<TaxonTreeRow | null> {
    await this.init()
    const results = this.exec<TaxonTreeRow>(
      'SELECT * FROM taxon_tree WHERE id = ?',
      [id]
    )
    return results[0] || null
  }

  /**
   * Get vernacular name in a specific language
   */
  async getVernacularName(
    speciesId: string,
    languageCode: string
  ): Promise<string | null> {
    await this.init()
    const results = this.exec<{ name: string }>(
      `SELECT name FROM vernacular_names
       WHERE species_id = ? AND language_code = ?
       ORDER BY is_preferred DESC
       LIMIT 1`,
      [speciesId, languageCode]
    )
    return results[0]?.name || null
  }

  /**
   * Get database statistics
   */
  async getStats(): Promise<{
    totalSpecies: number
    byConservationStatus: Record<string, number>
    byKingdom: Record<string, number>
  }> {
    await this.init()

    const total = this.exec<{ count: number }>(
      'SELECT COUNT(*) as count FROM species'
    )[0]?.count || 0

    const byStatus = this.exec<{ status: string; count: number }>(
      `SELECT conservation_status as status, COUNT(*) as count
       FROM species GROUP BY conservation_status`
    )

    const byKingdom = this.exec<{ kingdom: string; count: number }>(
      `SELECT kingdom, COUNT(*) as count
       FROM taxonomy GROUP BY kingdom`
    )

    return {
      totalSpecies: total,
      byConservationStatus: Object.fromEntries(
        byStatus.map(r => [r.status, r.count])
      ),
      byKingdom: Object.fromEntries(
        byKingdom.map(r => [r.kingdom, r.count])
      )
    }
  }

  /**
   * Check if database is ready
   */
  isReady(): boolean {
    return this.db !== null
  }

  /**
   * Close database connection
   */
  close(): void {
    if (this.db) {
      this.db.close()
      this.db = null
    }
  }
}

// Singleton instance
export const browserDB = new BrowserDB()
