import type { TaxonNode } from './types'

export const archaea: TaxonNode =
{
  id: 'archaea',
  name: 'Archaea',
  scientificName: 'Archaea',
  rank: 'domain',
  description: 'Single-celled organisms distinct from bacteria, often found in extreme environments',
  speciesCount: 500,
  children: [
    {
      id: 'euryarchaeota',
      name: 'Euryarchaeota',
      scientificName: 'Euryarchaeota',
      rank: 'phylum',
      description: 'Diverse phylum including methanogens, halophiles, and thermophiles',
      speciesCount: 300,
      children: [
        { id: 'methanobacteria', name: 'Methanobacteria', scientificName: 'Methanobacteria', rank: 'class', speciesCount: 80,
          children: [
            { id: 'methanobacteriales', name: 'Methanobacteriales', scientificName: 'Methanobacteriales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'methanobacteriaceae', name: 'Methanobacteriaceae', scientificName: 'Methanobacteriaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'methanobacterium', name: 'Methanobacterium', scientificName: 'Methanobacterium', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'methanobacterium-formicicum', name: 'Formate-using Methanogen', scientificName: 'Methanobacterium formicicum', rank: 'species' },
                        { id: 'methanobacterium-bryantii', name: 'Rumen Methanogen', scientificName: 'Methanobacterium bryantii', rank: 'species' }
                      ]
                    },
                    { id: 'methanothermobacter', name: 'Methanothermobacter', scientificName: 'Methanothermobacter', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'methanothermobacter-thermautotrophicus', name: 'Thermophilic Methanogen', scientificName: 'Methanothermobacter thermautotrophicus', rank: 'species' },
                        { id: 'methanothermobacter-marburgensis', name: 'Marburg Methanogen', scientificName: 'Methanothermobacter marburgensis', rank: 'species' }
                      ]
                    },
                    { id: 'methanobrevibacter', name: 'Methanobrevibacter', scientificName: 'Methanobrevibacter', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'methanobrevibacter-smithii', name: 'Human Gut Methanogen', scientificName: 'Methanobrevibacter smithii', rank: 'species' },
                        { id: 'methanobrevibacter-ruminantium', name: 'Cattle Rumen Methanogen', scientificName: 'Methanobrevibacter ruminantium', rank: 'species' }
                      ]
                    },
                    { id: 'methanosphaera', name: 'Methanosphaera', scientificName: 'Methanosphaera', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'methanosphaera-stadtmanae', name: 'Human Gut Coccoid Methanogen', scientificName: 'Methanosphaera stadtmanae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'methanomicrobia', name: 'Methanomicrobia', scientificName: 'Methanomicrobia', rank: 'class', speciesCount: 70,
          children: [
            { id: 'methanomicrobiales', name: 'Methanomicrobiales', scientificName: 'Methanomicrobiales', rank: 'order', speciesCount: 35,
              children: [
                { id: 'methanomicrobiaceae', name: 'Methanomicrobiaceae', scientificName: 'Methanomicrobiaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'methanomicrobium', name: 'Methanomicrobium', scientificName: 'Methanomicrobium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'methanomicrobium-mobile', name: 'Mobile Methanogen', scientificName: 'Methanomicrobium mobile', rank: 'species' }
                      ]
                    },
                    { id: 'methanoculleus', name: 'Methanoculleus', scientificName: 'Methanoculleus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'methanoculleus-marisnigri', name: 'Black Sea Methanogen', scientificName: 'Methanoculleus marisnigri', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'methanosarcinales', name: 'Methanosarcinales', scientificName: 'Methanosarcinales', rank: 'order', speciesCount: 35,
              children: [
                { id: 'methanosarcinaceae', name: 'Methanosarcinaceae', scientificName: 'Methanosarcinaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'methanosarcina', name: 'Methanosarcina', scientificName: 'Methanosarcina', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'methanosarcina-barkeri', name: 'Versatile Methanogen', scientificName: 'Methanosarcina barkeri', rank: 'species' },
                        { id: 'methanosarcina-acetivorans', name: 'Acetate-eating Methanogen', scientificName: 'Methanosarcina acetivorans', rank: 'species' },
                        { id: 'methanosarcina-mazei', name: 'Sewage Methanogen', scientificName: 'Methanosarcina mazei', rank: 'species' }
                      ]
                    },
                    { id: 'methanosaeta', name: 'Methanosaeta', scientificName: 'Methanosaeta', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'methanosaeta-concilii', name: 'Filamentous Methanogen', scientificName: 'Methanosaeta concilii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'methanotrichaceae', name: 'Methanotrichaceae', scientificName: 'Methanotrichaceae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'methanothrix', name: 'Methanothrix', scientificName: 'Methanothrix', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'methanothrix-soehngenii', name: 'Acetoclastic Methanogen', scientificName: 'Methanothrix soehngenii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'methanococci', name: 'Methanococci', scientificName: 'Methanococci', rank: 'class', speciesCount: 30,
          children: [
            { id: 'methanococcales', name: 'Methanococcales', scientificName: 'Methanococcales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'methanococcaceae', name: 'Methanococcaceae', scientificName: 'Methanococcaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'methanococcus', name: 'Methanococcus', scientificName: 'Methanococcus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'methanococcus-jannaschii', name: 'Deep-sea Methanogen', scientificName: 'Methanocaldococcus jannaschii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'halobacteria', name: 'Halobacteria', scientificName: 'Halobacteria', rank: 'class', speciesCount: 150,
          children: [
            { id: 'halobacteriales', name: 'Halobacteriales', scientificName: 'Halobacteriales', rank: 'order', speciesCount: 120,
              children: [
                { id: 'halobacteriaceae', name: 'Halobacteriaceae', scientificName: 'Halobacteriaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'halobacterium', name: 'Halobacterium', scientificName: 'Halobacterium', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'halobacterium-salinarum', name: 'Salt-loving Archaeon', scientificName: 'Halobacterium salinarum', rank: 'species' },
                        { id: 'halobacterium-noricense', name: 'Alpine Salt Archaeon', scientificName: 'Halobacterium noricense', rank: 'species' }
                      ]
                    },
                    { id: 'haloferax', name: 'Haloferax', scientificName: 'Haloferax', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'haloferax-volcanii', name: 'Dead Sea Archaeon', scientificName: 'Haloferax volcanii', rank: 'species' },
                        { id: 'haloferax-mediterranei', name: 'Mediterranean Halophile', scientificName: 'Haloferax mediterranei', rank: 'species' }
                      ]
                    },
                    { id: 'haloquadratum', name: 'Haloquadratum', scientificName: 'Haloquadratum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'haloquadratum-walsbyi', name: 'Square Archaeon', scientificName: 'Haloquadratum walsbyi', rank: 'species' }
                      ]
                    },
                    { id: 'halorubrum', name: 'Halorubrum', scientificName: 'Halorubrum', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'halorubrum-lacusprofundi', name: 'Deep Lake Halophile', scientificName: 'Halorubrum lacusprofundi', rank: 'species' },
                        { id: 'halorubrum-saccharovorum', name: 'Sugar-eating Halophile', scientificName: 'Halorubrum saccharovorum', rank: 'species' }
                      ]
                    },
                    { id: 'haloarcula', name: 'Haloarcula', scientificName: 'Haloarcula', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'haloarcula-marismortui', name: 'Dead Sea Haloarcula', scientificName: 'Haloarcula marismortui', rank: 'species' },
                        { id: 'haloarcula-hispanica', name: 'Spanish Salt Lake Halophile', scientificName: 'Haloarcula hispanica', rank: 'species' }
                      ]
                    },
                    { id: 'natronomonas', name: 'Natronomonas', scientificName: 'Natronomonas', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'natronomonas-pharaonis', name: 'Soda Lake Archaeon', scientificName: 'Natronomonas pharaonis', rank: 'species' }
                      ]
                    },
                    { id: 'halococcus', name: 'Halococcus', scientificName: 'Halococcus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'halococcus-morrhuae', name: 'Fish-salting Halophile', scientificName: 'Halococcus morrhuae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'haloferacales', name: 'Haloferacales', scientificName: 'Haloferacales', rank: 'order', speciesCount: 25,
              children: [
                { id: 'haloferacaceae', name: 'Haloferacaceae', scientificName: 'Haloferacaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'halogranum', name: 'Halogranum', scientificName: 'Halogranum', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'halogranum-salarium', name: 'Salt Mine Archaeon', scientificName: 'Halogranum salarium', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'thermoplasmata', name: 'Thermoplasmata', scientificName: 'Thermoplasmata', rank: 'class', speciesCount: 30,
          children: [
            { id: 'thermoplasmatales', name: 'Thermoplasmatales', scientificName: 'Thermoplasmatales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'thermoplasmataceae', name: 'Thermoplasmataceae', scientificName: 'Thermoplasmataceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'thermoplasma', name: 'Thermoplasma', scientificName: 'Thermoplasma', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'thermoplasma-acidophilum', name: 'Acid-loving Thermophile', scientificName: 'Thermoplasma acidophilum', rank: 'species' }
                      ]
                    },
                    { id: 'picrophilus', name: 'Picrophilus', scientificName: 'Picrophilus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'picrophilus-torridus', name: 'Most Acid-tolerant Organism', scientificName: 'Picrophilus torridus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'archaeoglobi', name: 'Archaeoglobi', scientificName: 'Archaeoglobi', rank: 'class', speciesCount: 10,
          children: [
            { id: 'archaeoglobales', name: 'Archaeoglobales', scientificName: 'Archaeoglobales', rank: 'order', speciesCount: 8,
              children: [
                { id: 'archaeoglobaceae', name: 'Archaeoglobaceae', scientificName: 'Archaeoglobaceae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'archaeoglobus', name: 'Archaeoglobus', scientificName: 'Archaeoglobus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'archaeoglobus-fulgidus', name: 'Sulfate-reducing Archaeon', scientificName: 'Archaeoglobus fulgidus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'methanopyri', name: 'Methanopyri', scientificName: 'Methanopyri', rank: 'class', speciesCount: 3,
          children: [
            { id: 'methanopyrales', name: 'Methanopyrales', scientificName: 'Methanopyrales', rank: 'order', speciesCount: 2,
              children: [
                { id: 'methanopyraceae', name: 'Methanopyraceae', scientificName: 'Methanopyraceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'methanopyrus', name: 'Methanopyrus', scientificName: 'Methanopyrus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'methanopyrus-kandleri', name: 'Hyperthermophilic Methanogen', scientificName: 'Methanopyrus kandleri', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'crenarchaeota',
      name: 'Crenarchaeota',
      scientificName: 'Thermoproteota',
      rank: 'phylum',
      description: 'Thermophilic and hyperthermophilic archaea found in hot springs and deep-sea vents',
      speciesCount: 150,
      children: [
        { id: 'thermoprotei', name: 'Thermoprotei', scientificName: 'Thermoprotei', rank: 'class', speciesCount: 100,
          children: [
            { id: 'sulfolobales', name: 'Sulfolobales', scientificName: 'Sulfolobales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'sulfolobaceae', name: 'Sulfolobaceae', scientificName: 'Sulfolobaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'sulfolobus', name: 'Sulfolobus', scientificName: 'Sulfolobus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'sulfolobus-acidocaldarius', name: 'Hot Spring Archaeon', scientificName: 'Sulfolobus acidocaldarius', rank: 'species' },
                        { id: 'sulfolobus-solfataricus', name: 'Solfatara Archaeon', scientificName: 'Saccharolobus solfataricus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'thermoproteales', name: 'Thermoproteales', scientificName: 'Thermoproteales', rank: 'order', speciesCount: 25,
              children: [
                { id: 'thermoproteaceae', name: 'Thermoproteaceae', scientificName: 'Thermoproteaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'thermoproteus', name: 'Thermoproteus', scientificName: 'Thermoproteus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'thermoproteus-tenax', name: 'Thermoproteus', scientificName: 'Thermoproteus tenax', rank: 'species' }
                      ]
                    },
                    { id: 'pyrobaculum', name: 'Pyrobaculum', scientificName: 'Pyrobaculum', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'pyrobaculum-islandicum', name: 'Icelandic Archaeon', scientificName: 'Pyrobaculum islandicum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'desulfurococcales', name: 'Desulfurococcales', scientificName: 'Desulfurococcales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'pyrodictiaceae', name: 'Pyrodictiaceae', scientificName: 'Pyrodictiaceae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'pyrolobus', name: 'Pyrolobus', scientificName: 'Pyrolobus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'pyrolobus-fumarii', name: 'Hyperthermophile (113°C)', scientificName: 'Pyrolobus fumarii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'thaumarchaeota',
      name: 'Thaumarchaeota',
      scientificName: 'Nitrososphaerota',
      rank: 'phylum',
      description: 'Ammonia-oxidizing archaea critical to global nitrogen cycling',
      speciesCount: 50,
      children: [
        { id: 'nitrososphaeria', name: 'Nitrososphaeria', scientificName: 'Nitrososphaeria', rank: 'class', speciesCount: 40,
          children: [
            { id: 'nitrososphaerales', name: 'Nitrososphaerales', scientificName: 'Nitrososphaerales', rank: 'order', speciesCount: 25,
              children: [
                { id: 'nitrososphaeraceae', name: 'Nitrososphaeraceae', scientificName: 'Nitrososphaeraceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'nitrososphaera', name: 'Nitrososphaera', scientificName: 'Nitrososphaera', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'nitrososphaera-viennensis', name: 'Soil Ammonia Oxidizer', scientificName: 'Nitrososphaera viennensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'nitrosopumilales', name: 'Nitrosopumilales', scientificName: 'Nitrosopumilales', rank: 'order', speciesCount: 15,
              children: [
                { id: 'nitrosopumilaceae', name: 'Nitrosopumilaceae', scientificName: 'Nitrosopumilaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'nitrosopumilus', name: 'Nitrosopumilus', scientificName: 'Nitrosopumilus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'nitrosopumilus-maritimus', name: 'Marine Ammonia Oxidizer', scientificName: 'Nitrosopumilus maritimus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'nanoarchaeota',
      name: 'Nanoarchaeota',
      scientificName: 'Nanoarchaeota',
      rank: 'phylum',
      description: 'Ultra-small parasitic archaea',
      speciesCount: 5,
      children: [
        { id: 'nanoarchaeia', name: 'Nanoarchaeia', scientificName: 'Nanoarchaeia', rank: 'class', speciesCount: 3,
          children: [
            { id: 'nanoarchaeales', name: 'Nanoarchaeales', scientificName: 'Nanoarchaeales', rank: 'order', speciesCount: 2,
              children: [
                { id: 'nanoarchaeaceae', name: 'Nanoarchaeaceae', scientificName: 'Nanoarchaeaceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'nanoarchaeum', name: 'Nanoarchaeum', scientificName: 'Nanoarchaeum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'nanoarchaeum-equitans', name: 'Nano Archaeon', scientificName: 'Nanoarchaeum equitans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'asgardarchaeota',
      name: 'Asgard Archaea',
      scientificName: 'Asgardarchaeota',
      rank: 'phylum',
      description: 'Closest prokaryotic relatives to eukaryotes, named after Norse mythology',
      speciesCount: 10,
      children: [
        { id: 'lokiarchaeia', name: 'Lokiarchaeia', scientificName: 'Lokiarchaeia', rank: 'class', speciesCount: 3,
          children: [
            { id: 'lokiarchaeales', name: 'Lokiarchaeales', scientificName: 'Lokiarchaeales', rank: 'order', speciesCount: 2,
              children: [
                { id: 'lokiarchaeaceae', name: 'Lokiarchaeaceae', scientificName: 'Lokiarchaeaceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'lokiarchaeum', name: 'Lokiarchaeum', scientificName: 'Candidatus Lokiarchaeum', rank: 'genus', speciesCount: 1 }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'thorarchaeia', name: 'Thorarchaeia', scientificName: 'Thorarchaeia', rank: 'class', speciesCount: 5,
          children: [
            { id: 'thorarchaeales', name: 'Thorarchaeales', scientificName: 'Thorarchaeales', rank: 'order', speciesCount: 3,
              children: [
                { id: 'thorarchaeaceae', name: 'Thorarchaeaceae', scientificName: 'Thorarchaeaceae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'thorarchaeum', name: 'Thorarchaeum', scientificName: 'Candidatus Thorarchaeum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'thorarchaeum-sp', name: 'Sediment Asgard Archaeon', scientificName: 'Candidatus Thorarchaeum sp.', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'odinarchaeia', name: 'Odinarchaeia', scientificName: 'Odinarchaeia', rank: 'class', speciesCount: 4,
          children: [
            { id: 'odinarchaeales', name: 'Odinarchaeales', scientificName: 'Odinarchaeales', rank: 'order', speciesCount: 2,
              children: [
                { id: 'odinarchaeaceae', name: 'Odinarchaeaceae', scientificName: 'Odinarchaeaceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'odinarchaeum', name: 'Odinarchaeum', scientificName: 'Candidatus Odinarchaeum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'odinarchaeum-yellowstonensis', name: 'Hot Spring Asgard Archaeon', scientificName: 'Candidatus Odinarchaeum yellowstonensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'heimdallarchaeia', name: 'Heimdallarchaeia', scientificName: 'Heimdallarchaeia', rank: 'class', speciesCount: 6,
          children: [
            { id: 'heimdallarchaeales', name: 'Heimdallarchaeales', scientificName: 'Heimdallarchaeales', rank: 'order', speciesCount: 4,
              children: [
                { id: 'heimdallarchaeaceae', name: 'Heimdallarchaeaceae', scientificName: 'Heimdallarchaeaceae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'heimdallarchaeum', name: 'Heimdallarchaeum', scientificName: 'Candidatus Heimdallarchaeum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'heimdallarchaeum-sp', name: 'Marine Sediment Asgard', scientificName: 'Candidatus Heimdallarchaeum sp.', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'helarchaeia', name: 'Helarchaeia', scientificName: 'Helarchaeia', rank: 'class', speciesCount: 3,
          children: [
            { id: 'helarchaeales', name: 'Helarchaeales', scientificName: 'Helarchaeales', rank: 'order', speciesCount: 2,
              children: [
                { id: 'helarchaeaceae', name: 'Helarchaeaceae', scientificName: 'Helarchaeaceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'helarchaeum', name: 'Helarchaeum', scientificName: 'Candidatus Helarchaeum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'helarchaeum-sp', name: 'Hydrothermal Asgard Archaeon', scientificName: 'Candidatus Helarchaeum sp.', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'korarchaeota',
      name: 'Korarchaeota',
      scientificName: 'Korarchaeota',
      rank: 'phylum',
      description: 'Deep-branching archaea found in hot springs, among the most ancient lineages',
      speciesCount: 10,
      children: [
        { id: 'korarchaeia', name: 'Korarchaeia', scientificName: 'Korarchaeia', rank: 'class', speciesCount: 8,
          children: [
            { id: 'korarchaeales', name: 'Korarchaeales', scientificName: 'Korarchaeales', rank: 'order', speciesCount: 5,
              children: [
                { id: 'korarchaeaceae', name: 'Korarchaeaceae', scientificName: 'Korarchaeaceae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'korarchaeum', name: 'Korarchaeum', scientificName: 'Candidatus Korarchaeum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'korarchaeum-cryptofilum', name: 'Cryptic Archaeon', scientificName: 'Candidatus Korarchaeum cryptofilum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'bathyarchaeota',
      name: 'Bathyarchaeota',
      scientificName: 'Bathyarchaeota',
      rank: 'phylum',
      description: 'Abundant deep subsurface archaea with diverse metabolic capabilities',
      speciesCount: 30,
      children: [
        { id: 'bathyarchaeia', name: 'Bathyarchaeia', scientificName: 'Bathyarchaeia', rank: 'class', speciesCount: 20,
          children: [
            { id: 'bathyarchaeales', name: 'Bathyarchaeales', scientificName: 'Bathyarchaeales', rank: 'order', speciesCount: 15,
              children: [
                { id: 'bathyarchaeaceae', name: 'Bathyarchaeaceae', scientificName: 'Bathyarchaeaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'bathyarchaeum', name: 'Bathyarchaeum', scientificName: 'Candidatus Bathyarchaeum', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'bathyarchaeum-sp', name: 'Deep Subsurface Archaeon', scientificName: 'Candidatus Bathyarchaeum sp.', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'woesearchaeota',
      name: 'Woesearchaeota',
      scientificName: 'Woesearchaeota',
      rank: 'phylum',
      description: 'Widespread small archaea named after Carl Woese, found in diverse habitats',
      speciesCount: 25,
      children: [
        { id: 'woesearchaeia', name: 'Woesearchaeia', scientificName: 'Woesearchaeia', rank: 'class', speciesCount: 18,
          children: [
            { id: 'woesearchaeales', name: 'Woesearchaeales', scientificName: 'Woesearchaeales', rank: 'order', speciesCount: 12,
              children: [
                { id: 'woesearchaeaceae', name: 'Woesearchaeaceae', scientificName: 'Woesearchaeaceae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'woesearchaeum', name: 'Woesearchaeum', scientificName: 'Candidatus Woesearchaeum', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'woesearchaeum-sp', name: 'Symbiotic Nano-archaeon', scientificName: 'Candidatus Woesearchaeum sp.', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'altiarchaeota',
      name: 'Altiarchaeota',
      scientificName: 'Altiarchaeota',
      rank: 'phylum',
      description: 'Archaea that form biofilms in subsurface environments',
      speciesCount: 15,
      children: [
        { id: 'altiarchaeia', name: 'Altiarchaeia', scientificName: 'Altiarchaeia', rank: 'class', speciesCount: 10,
          children: [
            { id: 'altiarchaeales', name: 'Altiarchaeales', scientificName: 'Altiarchaeales', rank: 'order', speciesCount: 7,
              children: [
                { id: 'altiarchaeaceae', name: 'Altiarchaeaceae', scientificName: 'Altiarchaeaceae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'altiarchaeum', name: 'Altiarchaeum', scientificName: 'Candidatus Altiarchaeum', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'altiarchaeum-hamiconexum', name: 'Grappling Hook Archaeon', scientificName: 'Candidatus Altiarchaeum hamiconexum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'micrarchaeota',
      name: 'Micrarchaeota',
      scientificName: 'Micrarchaeota',
      rank: 'phylum',
      description: 'Ultra-small archaea found in acidic environments',
      speciesCount: 20,
      children: [
        { id: 'micrarchaeia', name: 'Micrarchaeia', scientificName: 'Micrarchaeia', rank: 'class', speciesCount: 15,
          children: [
            { id: 'micrarchaeales', name: 'Micrarchaeales', scientificName: 'Micrarchaeales', rank: 'order', speciesCount: 10,
              children: [
                { id: 'micrarchaeaceae', name: 'Micrarchaeaceae', scientificName: 'Micrarchaeaceae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'micrarchaeum', name: 'Micrarchaeum', scientificName: 'Candidatus Micrarchaeum', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'micrarchaeum-acidiphilum', name: 'Acid-loving Microarchaeon', scientificName: 'Candidatus Micrarchaeum acidiphilum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'diapherotrites',
      name: 'Diapherotrites',
      scientificName: 'Diapherotrites',
      rank: 'phylum',
      description: 'Small archaea part of the DPANN superphylum',
      speciesCount: 15,
      children: [
        { id: 'diapherotritia', name: 'Diapherotritia', scientificName: 'Diapherotritia', rank: 'class', speciesCount: 10,
          children: [
            { id: 'diapherotritales', name: 'Diapherotritales', scientificName: 'Diapherotritales', rank: 'order', speciesCount: 6,
              children: [
                { id: 'diapherotritaceae', name: 'Diapherotritaceae', scientificName: 'Diapherotritaceae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'iainarchaeum', name: 'Iainarchaeum', scientificName: 'Candidatus Iainarchaeum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'iainarchaeum-andersonii', name: 'Anderson DPANN Archaeon', scientificName: 'Candidatus Iainarchaeum andersonii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
