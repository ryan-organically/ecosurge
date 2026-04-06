import type { TaxonNode } from './types'

export const bacteria: TaxonNode =
{
  id: 'bacteria',
  name: 'Bacteria',
  scientificName: 'Bacteria',
  rank: 'domain',
  description: 'Single-celled prokaryotic organisms without a nucleus',
  speciesCount: 30000,
  children: [
    {
      id: 'proteobacteria',
      name: 'Proteobacteria',
      scientificName: 'Pseudomonadota',
      rank: 'phylum',
      speciesCount: 2000,
      children: [
        {
          id: 'alphaproteobacteria',
          name: 'Alphaproteobacteria',
          scientificName: 'Alphaproteobacteria',
          rank: 'class',
          speciesCount: 500,
          children: [
            { id: 'rhizobiales', name: 'Rhizobiales', scientificName: 'Rhizobiales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'rhizobiaceae', name: 'Rhizobiaceae', scientificName: 'Rhizobiaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'rhizobium', name: 'Rhizobium', scientificName: 'Rhizobium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'rhizobium-leguminosarum', name: 'Rhizobium', scientificName: 'Rhizobium leguminosarum', rank: 'species' }
                      ]
                    },
                    { id: 'agrobacterium', name: 'Agrobacterium', scientificName: 'Agrobacterium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'agrobacterium-tumefaciens', name: 'Crown Gall Bacterium', scientificName: 'Agrobacterium tumefaciens', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'rickettsiales', name: 'Rickettsiales', scientificName: 'Rickettsiales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'rickettsiaceae', name: 'Rickettsiaceae', scientificName: 'Rickettsiaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'rickettsia', name: 'Rickettsia', scientificName: 'Rickettsia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'rickettsia-prowazekii', name: 'Epidemic Typhus Rickettsia', scientificName: 'Rickettsia prowazekii', rank: 'species' },
                        { id: 'rickettsia-rickettsii', name: 'Rocky Mountain Spotted Fever', scientificName: 'Rickettsia rickettsii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'rhodospirillales', name: 'Rhodospirillales', scientificName: 'Rhodospirillales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'acetobacteraceae', name: 'Acetobacteraceae', scientificName: 'Acetobacteraceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'acetobacter', name: 'Vinegar Bacteria', scientificName: 'Acetobacter', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'acetobacter-aceti', name: 'Vinegar Bacterium', scientificName: 'Acetobacter aceti', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'betaproteobacteria',
          name: 'Betaproteobacteria',
          scientificName: 'Betaproteobacteria',
          rank: 'class',
          speciesCount: 400,
          children: [
            { id: 'burkholderiales', name: 'Burkholderiales', scientificName: 'Burkholderiales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'burkholderiaceae', name: 'Burkholderiaceae', scientificName: 'Burkholderiaceae', rank: 'family', speciesCount: 60 },
                { id: 'comamonadaceae', name: 'Comamonadaceae', scientificName: 'Comamonadaceae', rank: 'family', speciesCount: 50 }
              ]
            },
            { id: 'neisseriales', name: 'Neisseriales', scientificName: 'Neisseriales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'neisseriaceae', name: 'Neisseriaceae', scientificName: 'Neisseriaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'neisseria', name: 'Neisseria', scientificName: 'Neisseria', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'neisseria-meningitidis', name: 'Meningococcus', scientificName: 'Neisseria meningitidis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'nitrosomonadales', name: 'Nitrosomonadales', scientificName: 'Nitrosomonadales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'nitrosomonadaceae', name: 'Nitrosomonadaceae', scientificName: 'Nitrosomonadaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'nitrosomonas', name: 'Nitrosomonas', scientificName: 'Nitrosomonas', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'nitrosomonas-europaea', name: 'Ammonia-oxidizing Bacterium', scientificName: 'Nitrosomonas europaea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'gammaproteobacteria',
          name: 'Gammaproteobacteria',
          scientificName: 'Gammaproteobacteria',
          rank: 'class',
          speciesCount: 800,
          children: [
            {
              id: 'enterobacterales',
              name: 'Enterobacterales',
              scientificName: 'Enterobacterales',
              rank: 'order',
              speciesCount: 300,
              children: [
                { id: 'enterobacteriaceae', name: 'Enterobacteriaceae', scientificName: 'Enterobacteriaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'escherichia', name: 'Escherichia', scientificName: 'Escherichia', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'escherichia-coli', name: 'E. coli', scientificName: 'Escherichia coli', rank: 'species' }
                      ]
                    },
                    { id: 'salmonella', name: 'Salmonella', scientificName: 'Salmonella', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'salmonella-enterica', name: 'Salmonella', scientificName: 'Salmonella enterica', rank: 'species' },
                        { id: 'salmonella-bongori', name: 'Salmonella bongori', scientificName: 'Salmonella bongori', rank: 'species' }
                      ]
                    },
                    { id: 'klebsiella', name: 'Klebsiella', scientificName: 'Klebsiella', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'klebsiella-pneumoniae', name: 'Klebsiella pneumoniae', scientificName: 'Klebsiella pneumoniae', rank: 'species' }
                      ]
                    },
                    { id: 'shigella', name: 'Shigella', scientificName: 'Shigella', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'shigella-dysenteriae', name: 'Shigella', scientificName: 'Shigella dysenteriae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'yersiniaceae', name: 'Yersiniaceae', scientificName: 'Yersiniaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'yersinia', name: 'Yersinia', scientificName: 'Yersinia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'yersinia-pestis', name: 'Plague Bacterium', scientificName: 'Yersinia pestis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'erwiniaceae', name: 'Erwiniaceae', scientificName: 'Erwiniaceae', rank: 'family', speciesCount: 50 }
              ]
            },
            { id: 'pseudomonadales', name: 'Pseudomonadales', scientificName: 'Pseudomonadales', rank: 'order', speciesCount: 150,
              children: [
                { id: 'pseudomonadaceae', name: 'Pseudomonadaceae', scientificName: 'Pseudomonadaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'pseudomonas', name: 'Pseudomonas', scientificName: 'Pseudomonas', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'pseudomonas-aeruginosa', name: 'Pseudomonas aeruginosa', scientificName: 'Pseudomonas aeruginosa', rank: 'species' },
                        { id: 'pseudomonas-fluorescens', name: 'Fluorescent Pseudomonas', scientificName: 'Pseudomonas fluorescens', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'moraxellaceae', name: 'Moraxellaceae', scientificName: 'Moraxellaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'acinetobacter', name: 'Acinetobacter', scientificName: 'Acinetobacter', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'acinetobacter-baumannii', name: 'Acinetobacter baumannii', scientificName: 'Acinetobacter baumannii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'vibrionales', name: 'Vibrionales', scientificName: 'Vibrionales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'vibrionaceae', name: 'Vibrionaceae', scientificName: 'Vibrionaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'vibrio', name: 'Vibrio', scientificName: 'Vibrio', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'vibrio-cholerae', name: 'Cholera Bacterium', scientificName: 'Vibrio cholerae', rank: 'species' },
                        { id: 'vibrio-vulnificus', name: 'Vibrio vulnificus', scientificName: 'Vibrio vulnificus', rank: 'species' }
                      ]
                    },
                    { id: 'aliivibrio', name: 'Aliivibrio', scientificName: 'Aliivibrio', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'aliivibrio-fischeri', name: 'Bioluminescent Bacterium', scientificName: 'Aliivibrio fischeri', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'legionellales', name: 'Legionellales', scientificName: 'Legionellales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'legionellaceae', name: 'Legionellaceae', scientificName: 'Legionellaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'legionella', name: 'Legionella', scientificName: 'Legionella', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'legionella-pneumophila', name: "Legionnaires' Disease Bacterium", scientificName: 'Legionella pneumophila', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'thiotrichales', name: 'Thiotrichales', scientificName: 'Thiotrichales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'thiotrichaceae', name: 'Thiotrichaceae', scientificName: 'Thiotrichaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'thiomargarita', name: 'Thiomargarita', scientificName: 'Thiomargarita', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'thiomargarita-magnifica', name: 'Largest Known Bacterium', scientificName: 'Thiomargarita magnifica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'deltaproteobacteria',
          name: 'Deltaproteobacteria',
          scientificName: 'Deltaproteobacteria',
          rank: 'class',
          speciesCount: 200,
          children: [
            { id: 'myxococcales', name: 'Myxococcales', scientificName: 'Myxococcales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'myxococcaceae', name: 'Myxococcaceae', scientificName: 'Myxococcaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'myxococcus', name: 'Myxococcus', scientificName: 'Myxococcus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'myxococcus-xanthus', name: 'Social Bacterium', scientificName: 'Myxococcus xanthus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'desulfovibrionales', name: 'Desulfovibrionales', scientificName: 'Desulfovibrionales', rank: 'order', speciesCount: 40 },
            { id: 'bdellovibrionales', name: 'Bdellovibrionales', scientificName: 'Bdellovibrionales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'bdellovibrionaceae', name: 'Bdellovibrionaceae', scientificName: 'Bdellovibrionaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'bdellovibrio', name: 'Predatory Bacterium', scientificName: 'Bdellovibrio', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'bdellovibrio-bacteriovorus', name: 'Predatory Bacterium', scientificName: 'Bdellovibrio bacteriovorus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'epsilonproteobacteria',
          name: 'Epsilonproteobacteria',
          scientificName: 'Epsilonproteobacteria',
          rank: 'class',
          speciesCount: 100,
          children: [
            { id: 'campylobacterales', name: 'Campylobacterales', scientificName: 'Campylobacterales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'campylobacteraceae', name: 'Campylobacteraceae', scientificName: 'Campylobacteraceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'campylobacter', name: 'Campylobacter', scientificName: 'Campylobacter', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'campylobacter-jejuni', name: 'Campylobacter', scientificName: 'Campylobacter jejuni', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'helicobacteraceae', name: 'Helicobacteraceae', scientificName: 'Helicobacteraceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'helicobacter', name: 'Helicobacter', scientificName: 'Helicobacter', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'helicobacter-pylori', name: 'Stomach Ulcer Bacterium', scientificName: 'Helicobacter pylori', rank: 'species' }
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
      id: 'cyanobacteria',
      name: 'Blue-green Algae',
      scientificName: 'Cyanobacteriota',
      rank: 'phylum',
      description: 'Photosynthetic bacteria that produce oxygen, responsible for the Great Oxidation Event',
      speciesCount: 2000,
      children: [
        { id: 'cyanophyceae', name: 'Cyanophyceae', scientificName: 'Cyanophyceae', rank: 'class', speciesCount: 1500,
          children: [
            { id: 'nostocales', name: 'Nostocales', scientificName: 'Nostocales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'nostocaceae', name: 'Nostocaceae', scientificName: 'Nostocaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'nostoc', name: 'Nostoc', scientificName: 'Nostoc', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'nostoc-commune', name: 'Star Jelly', scientificName: 'Nostoc commune', rank: 'species' }
                      ]
                    },
                    { id: 'anabaena', name: 'Anabaena', scientificName: 'Anabaena', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'anabaena-circinalis', name: 'Anabaena', scientificName: 'Anabaena circinalis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'oscillatoriales', name: 'Oscillatoriales', scientificName: 'Oscillatoriales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'oscillatoriaceae', name: 'Oscillatoriaceae', scientificName: 'Oscillatoriaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'oscillatoria', name: 'Oscillatoria', scientificName: 'Oscillatoria', rank: 'genus', speciesCount: 30 },
                    { id: 'arthrospira', name: 'Spirulina', scientificName: 'Arthrospira', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'arthrospira-platensis', name: 'Spirulina', scientificName: 'Arthrospira platensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'chroococcales', name: 'Chroococcales', scientificName: 'Chroococcales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'microcystaceae', name: 'Microcystaceae', scientificName: 'Microcystaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'microcystis', name: 'Microcystis', scientificName: 'Microcystis', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'microcystis-aeruginosa', name: 'Toxic Blue-green Alga', scientificName: 'Microcystis aeruginosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'synechococcaceae', name: 'Synechococcaceae', scientificName: 'Synechococcaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'synechococcus', name: 'Synechococcus', scientificName: 'Synechococcus', rank: 'genus', speciesCount: 15 },
                    { id: 'prochlorococcus', name: 'Prochlorococcus', scientificName: 'Prochlorococcus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'prochlorococcus-marinus', name: 'Most Abundant Photosynthesizer', scientificName: 'Prochlorococcus marinus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'gloeobacteria', name: 'Gloeobacteria', scientificName: 'Gloeobacteria', rank: 'class', speciesCount: 5 }
      ]
    },
    {
      id: 'firmicutes',
      name: 'Firmicutes',
      scientificName: 'Bacillota',
      rank: 'phylum',
      description: 'Gram-positive bacteria with low GC content, many important pathogens and probiotics',
      speciesCount: 2500,
      children: [
        { id: 'bacilli', name: 'Bacilli', scientificName: 'Bacilli', rank: 'class', speciesCount: 1500,
          children: [
            { id: 'bacillales', name: 'Bacillales', scientificName: 'Bacillales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'bacillaceae', name: 'Bacillaceae', scientificName: 'Bacillaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'bacillus', name: 'Bacillus', scientificName: 'Bacillus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'bacillus-subtilis', name: 'Hay Bacillus', scientificName: 'Bacillus subtilis', rank: 'species' },
                        { id: 'bacillus-anthracis', name: 'Anthrax Bacillus', scientificName: 'Bacillus anthracis', rank: 'species' },
                        { id: 'bacillus-cereus', name: 'Bacillus cereus', scientificName: 'Bacillus cereus', rank: 'species' },
                        { id: 'bacillus-thuringiensis', name: 'Bt Insecticide Bacterium', scientificName: 'Bacillus thuringiensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'staphylococcaceae', name: 'Staphylococcaceae', scientificName: 'Staphylococcaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'staphylococcus', name: 'Staphylococcus', scientificName: 'Staphylococcus', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'staphylococcus-aureus', name: 'Golden Staph', scientificName: 'Staphylococcus aureus', rank: 'species' },
                        { id: 'staphylococcus-epidermidis', name: 'Skin Staph', scientificName: 'Staphylococcus epidermidis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'listeriaceae', name: 'Listeriaceae', scientificName: 'Listeriaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'listeria', name: 'Listeria', scientificName: 'Listeria', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'listeria-monocytogenes', name: 'Listeria', scientificName: 'Listeria monocytogenes', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'lactobacillales', name: 'Lactobacillales', scientificName: 'Lactobacillales', rank: 'order', speciesCount: 700,
              children: [
                { id: 'streptococcaceae', name: 'Streptococcaceae', scientificName: 'Streptococcaceae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'streptococcus', name: 'Streptococcus', scientificName: 'Streptococcus', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'streptococcus-pyogenes', name: 'Group A Strep', scientificName: 'Streptococcus pyogenes', rank: 'species' },
                        { id: 'streptococcus-pneumoniae', name: 'Pneumococcus', scientificName: 'Streptococcus pneumoniae', rank: 'species' },
                        { id: 'streptococcus-thermophilus', name: 'Yogurt Bacterium', scientificName: 'Streptococcus thermophilus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lactobacillaceae', name: 'Lactobacillaceae', scientificName: 'Lactobacillaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'lactobacillus', name: 'Lactobacillus', scientificName: 'Lactobacillus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'lactobacillus-acidophilus', name: 'Probiotic Lactobacillus', scientificName: 'Lactobacillus acidophilus', rank: 'species' },
                        { id: 'lactobacillus-rhamnosus', name: 'Gut Probiotic', scientificName: 'Lactobacillus rhamnosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'enterococcaceae', name: 'Enterococcaceae', scientificName: 'Enterococcaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'enterococcus', name: 'Enterococcus', scientificName: 'Enterococcus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'enterococcus-faecalis', name: 'Enterococcus faecalis', scientificName: 'Enterococcus faecalis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'clostridia', name: 'Clostridia', scientificName: 'Clostridia', rank: 'class', speciesCount: 800,
          children: [
            { id: 'clostridiales', name: 'Eubacteriales', scientificName: 'Eubacteriales', rank: 'order', speciesCount: 500,
              children: [
                { id: 'clostridiaceae', name: 'Clostridiaceae', scientificName: 'Clostridiaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'clostridium', name: 'Clostridium', scientificName: 'Clostridium', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'clostridium-botulinum', name: 'Botulism Bacterium', scientificName: 'Clostridium botulinum', rank: 'species' },
                        { id: 'clostridium-tetani', name: 'Tetanus Bacterium', scientificName: 'Clostridium tetani', rank: 'species' },
                        { id: 'clostridium-difficile', name: 'C. diff', scientificName: 'Clostridioides difficile', rank: 'species' },
                        { id: 'clostridium-perfringens', name: 'Gas Gangrene Bacterium', scientificName: 'Clostridium perfringens', rank: 'species' }
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
      id: 'actinobacteria',
      name: 'Actinobacteria',
      scientificName: 'Actinomycetota',
      rank: 'phylum',
      description: 'Gram-positive bacteria with high GC content, major antibiotic producers',
      speciesCount: 3000,
      children: [
        { id: 'actinomycetia', name: 'Actinomycetes', scientificName: 'Actinomycetia', rank: 'class', speciesCount: 2000,
          children: [
            { id: 'mycobacteriales', name: 'Mycobacteriales', scientificName: 'Mycobacteriales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'mycobacteriaceae', name: 'Mycobacteriaceae', scientificName: 'Mycobacteriaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'mycobacterium', name: 'Mycobacterium', scientificName: 'Mycobacterium', rank: 'genus', speciesCount: 190,
                      children: [
                        { id: 'mycobacterium-tuberculosis', name: 'Tuberculosis Bacterium', scientificName: 'Mycobacterium tuberculosis', rank: 'species' },
                        { id: 'mycobacterium-leprae', name: 'Leprosy Bacterium', scientificName: 'Mycobacterium leprae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'corynebacteriaceae', name: 'Corynebacteriaceae', scientificName: 'Corynebacteriaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'corynebacterium', name: 'Corynebacterium', scientificName: 'Corynebacterium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'corynebacterium-diphtheriae', name: 'Diphtheria Bacterium', scientificName: 'Corynebacterium diphtheriae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'streptomycetales', name: 'Streptomycetales', scientificName: 'Streptomycetales', rank: 'order', speciesCount: 800,
              children: [
                { id: 'streptomycetaceae', name: 'Streptomycetaceae', scientificName: 'Streptomycetaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'streptomyces', name: 'Streptomyces', scientificName: 'Streptomyces', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'streptomyces-griseus', name: 'Streptomycin Producer', scientificName: 'Streptomyces griseus', rank: 'species' },
                        { id: 'streptomyces-coelicolor', name: 'Model Streptomyces', scientificName: 'Streptomyces coelicolor', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'bifidobacteriales', name: 'Bifidobacteriales', scientificName: 'Bifidobacteriales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'bifidobacteriaceae', name: 'Bifidobacteriaceae', scientificName: 'Bifidobacteriaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'bifidobacterium', name: 'Bifidobacterium', scientificName: 'Bifidobacterium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'bifidobacterium-longum', name: 'Gut Probiotic', scientificName: 'Bifidobacterium longum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'propionibacteriales', name: 'Propionibacteriales', scientificName: 'Propionibacteriales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'propionibacteriaceae', name: 'Propionibacteriaceae', scientificName: 'Propionibacteriaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'cutibacterium', name: 'Cutibacterium', scientificName: 'Cutibacterium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'cutibacterium-acnes', name: 'Acne Bacterium', scientificName: 'Cutibacterium acnes', rank: 'species' }
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
      id: 'bacteroidetes',
      name: 'Bacteroidetes',
      scientificName: 'Bacteroidota',
      rank: 'phylum',
      description: 'Major gut bacteria, important in digestion',
      speciesCount: 1500,
      children: [
        { id: 'bacteroidia', name: 'Bacteroidia', scientificName: 'Bacteroidia', rank: 'class', speciesCount: 800,
          children: [
            { id: 'bacteroidales', name: 'Bacteroidales', scientificName: 'Bacteroidales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'bacteroidaceae', name: 'Bacteroidaceae', scientificName: 'Bacteroidaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'bacteroides', name: 'Bacteroides', scientificName: 'Bacteroides', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'bacteroides-fragilis', name: 'Common Gut Bacterium', scientificName: 'Bacteroides fragilis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'prevotellaceae', name: 'Prevotellaceae', scientificName: 'Prevotellaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'prevotella', name: 'Prevotella', scientificName: 'Prevotella', rank: 'genus', speciesCount: 40 }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'flavobacteriia', name: 'Flavobacteria', scientificName: 'Flavobacteriia', rank: 'class', speciesCount: 400,
          children: [
            { id: 'flavobacteriales', name: 'Flavobacteriales', scientificName: 'Flavobacteriales', rank: 'order', speciesCount: 300 }
          ]
        }
      ]
    },
    {
      id: 'spirochaetes',
      name: 'Spirochaetes',
      scientificName: 'Spirochaetota',
      rank: 'phylum',
      description: 'Spiral-shaped bacteria, some cause serious diseases',
      speciesCount: 200,
      children: [
        { id: 'spirochaetia', name: 'Spirochaetia', scientificName: 'Spirochaetia', rank: 'class', speciesCount: 150,
          children: [
            { id: 'spirochaetales', name: 'Spirochaetales', scientificName: 'Spirochaetales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'treponemataceae', name: 'Treponemataceae', scientificName: 'Treponemataceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'treponema', name: 'Treponema', scientificName: 'Treponema', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'treponema-pallidum', name: 'Syphilis Spirochete', scientificName: 'Treponema pallidum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'borreliaceae', name: 'Borreliaceae', scientificName: 'Borreliaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'borrelia', name: 'Borrelia', scientificName: 'Borrelia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'borrelia-burgdorferi', name: 'Lyme Disease Spirochete', scientificName: 'Borrelia burgdorferi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leptospiraceae', name: 'Leptospiraceae', scientificName: 'Leptospiraceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'leptospira', name: 'Leptospira', scientificName: 'Leptospira', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'leptospira-interrogans', name: 'Leptospirosis Spirochete', scientificName: 'Leptospira interrogans', rank: 'species' }
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
      id: 'chlamydiae',
      name: 'Chlamydiae',
      scientificName: 'Chlamydiota',
      rank: 'phylum',
      description: 'Obligate intracellular parasites',
      speciesCount: 100,
      children: [
        { id: 'chlamydiia', name: 'Chlamydiia', scientificName: 'Chlamydiia', rank: 'class', speciesCount: 80,
          children: [
            { id: 'chlamydiales', name: 'Chlamydiales', scientificName: 'Chlamydiales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'chlamydiaceae', name: 'Chlamydiaceae', scientificName: 'Chlamydiaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'chlamydia', name: 'Chlamydia', scientificName: 'Chlamydia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'chlamydia-trachomatis', name: 'Chlamydia', scientificName: 'Chlamydia trachomatis', rank: 'species' }
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
      id: 'deinococcota',
      name: 'Deinococcota',
      scientificName: 'Deinococcota',
      rank: 'phylum',
      description: 'Extremely radiation-resistant bacteria',
      speciesCount: 100,
      children: [
        { id: 'deinococci', name: 'Deinococci', scientificName: 'Deinococci', rank: 'class', speciesCount: 60,
          children: [
            { id: 'deinococcales', name: 'Deinococcales', scientificName: 'Deinococcales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'deinococcaceae', name: 'Deinococcaceae', scientificName: 'Deinococcaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'deinococcus', name: 'Deinococcus', scientificName: 'Deinococcus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'deinococcus-radiodurans', name: 'Radiation-resistant Bacterium', scientificName: 'Deinococcus radiodurans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'thermales', name: 'Thermales', scientificName: 'Thermales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'thermaceae', name: 'Thermaceae', scientificName: 'Thermaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'thermus', name: 'Thermus', scientificName: 'Thermus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'thermus-aquaticus', name: 'Taq Polymerase Source', scientificName: 'Thermus aquaticus', rank: 'species' }
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
      id: 'verrucomicrobiota',
      name: 'Verrucomicrobiota',
      scientificName: 'Verrucomicrobiota',
      rank: 'phylum',
      description: 'Bacteria with compartmentalized cells, important in soil and gut microbiomes',
      speciesCount: 300,
      children: [
        { id: 'verrucomicrobiae', name: 'Verrucomicrobiae', scientificName: 'Verrucomicrobiae', rank: 'class', speciesCount: 150,
          children: [
            { id: 'verrucomicrobiales', name: 'Verrucomicrobiales', scientificName: 'Verrucomicrobiales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'verrucomicrobiaceae', name: 'Verrucomicrobiaceae', scientificName: 'Verrucomicrobiaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'verrucomicrobium', name: 'Verrucomicrobium', scientificName: 'Verrucomicrobium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'verrucomicrobium-spinosum', name: 'Warty Bacterium', scientificName: 'Verrucomicrobium spinosum', rank: 'species' }
                      ]
                    },
                    { id: 'akkermansia', name: 'Akkermansia', scientificName: 'Akkermansia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'akkermansia-muciniphila', name: 'Mucin-degrading Gut Bacterium', scientificName: 'Akkermansia muciniphila', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rubritaleaceae', name: 'Rubritaleaceae', scientificName: 'Rubritaleaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'rubritalea', name: 'Rubritalea', scientificName: 'Rubritalea', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'rubritalea-marina', name: 'Marine Verrucomicrobium', scientificName: 'Rubritalea marina', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'opitutae', name: 'Opitutae', scientificName: 'Opitutae', rank: 'class', speciesCount: 50,
          children: [
            { id: 'opitutales', name: 'Opitutales', scientificName: 'Opitutales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'opitutaceae', name: 'Opitutaceae', scientificName: 'Opitutaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'opitutus', name: 'Opitutus', scientificName: 'Opitutus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'opitutus-terrae', name: 'Rice Paddy Bacterium', scientificName: 'Opitutus terrae', rank: 'species' }
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
      id: 'acidobacteriota',
      name: 'Acidobacteriota',
      scientificName: 'Acidobacteriota',
      rank: 'phylum',
      description: 'Abundant soil bacteria important for carbon cycling and plant health',
      speciesCount: 400,
      children: [
        { id: 'acidobacteriia', name: 'Acidobacteriia', scientificName: 'Acidobacteriia', rank: 'class', speciesCount: 200,
          children: [
            { id: 'acidobacteriales', name: 'Acidobacteriales', scientificName: 'Acidobacteriales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'acidobacteriaceae', name: 'Acidobacteriaceae', scientificName: 'Acidobacteriaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'acidobacterium', name: 'Acidobacterium', scientificName: 'Acidobacterium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'acidobacterium-capsulatum', name: 'Acidophilic Soil Bacterium', scientificName: 'Acidobacterium capsulatum', rank: 'species' }
                      ]
                    },
                    { id: 'terriglobus', name: 'Terriglobus', scientificName: 'Terriglobus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'terriglobus-roseus', name: 'Pink Soil Bacterium', scientificName: 'Terriglobus roseus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'blastocatellia', name: 'Blastocatellia', scientificName: 'Blastocatellia', rank: 'class', speciesCount: 80,
          children: [
            { id: 'blastocatellales', name: 'Blastocatellales', scientificName: 'Blastocatellales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'blastocatellaceae', name: 'Blastocatellaceae', scientificName: 'Blastocatellaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'blastocatella', name: 'Blastocatella', scientificName: 'Blastocatella', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'blastocatella-fastidiosa', name: 'Fastidious Soil Bacterium', scientificName: 'Blastocatella fastidiosa', rank: 'species' }
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
      id: 'planctomycetota',
      name: 'Planctomycetota',
      scientificName: 'Planctomycetota',
      rank: 'phylum',
      description: 'Bacteria with unusual cell structure including compartmentalized cells',
      speciesCount: 250,
      children: [
        { id: 'planctomycetia', name: 'Planctomycetia', scientificName: 'Planctomycetia', rank: 'class', speciesCount: 150,
          children: [
            { id: 'planctomycetales', name: 'Planctomycetales', scientificName: 'Planctomycetales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'planctomycetaceae', name: 'Planctomycetaceae', scientificName: 'Planctomycetaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'planctomyces', name: 'Planctomyces', scientificName: 'Planctomyces', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'planctomyces-limnophilus', name: 'Freshwater Planctomycete', scientificName: 'Planctomyces limnophilus', rank: 'species' }
                      ]
                    },
                    { id: 'gemmata', name: 'Gemmata', scientificName: 'Gemmata', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'gemmata-obscuriglobus', name: 'Nucleoid-containing Bacterium', scientificName: 'Gemmata obscuriglobus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'pirellulales', name: 'Pirellulales', scientificName: 'Pirellulales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'pirellulaceae', name: 'Pirellulaceae', scientificName: 'Pirellulaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'pirellula', name: 'Pirellula', scientificName: 'Pirellula', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'pirellula-staleyi', name: 'Marine Planctomycete', scientificName: 'Pirellula staleyi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'phycisphaerae', name: 'Phycisphaerae', scientificName: 'Phycisphaerae', rank: 'class', speciesCount: 50,
          children: [
            { id: 'phycisphaerales', name: 'Phycisphaerales', scientificName: 'Phycisphaerales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'phycisphaeraceae', name: 'Phycisphaeraceae', scientificName: 'Phycisphaeraceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'phycisphaera', name: 'Phycisphaera', scientificName: 'Phycisphaera', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'phycisphaera-mikurensis', name: 'Algae-associated Bacterium', scientificName: 'Phycisphaera mikurensis', rank: 'species' }
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
      id: 'chloroflexi',
      name: 'Chloroflexi',
      scientificName: 'Chloroflexota',
      rank: 'phylum',
      description: 'Green non-sulfur bacteria, includes phototrophs and diverse metabolisms',
      speciesCount: 300,
      children: [
        { id: 'chloroflexia', name: 'Chloroflexia', scientificName: 'Chloroflexia', rank: 'class', speciesCount: 100,
          children: [
            { id: 'chloroflexales', name: 'Chloroflexales', scientificName: 'Chloroflexales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'chloroflexaceae', name: 'Chloroflexaceae', scientificName: 'Chloroflexaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'chloroflexus', name: 'Chloroflexus', scientificName: 'Chloroflexus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'chloroflexus-aurantiacus', name: 'Orange Filamentous Bacterium', scientificName: 'Chloroflexus aurantiacus', rank: 'species' }
                      ]
                    },
                    { id: 'roseiflexus', name: 'Roseiflexus', scientificName: 'Roseiflexus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'roseiflexus-castenholzii', name: 'Hot Spring Phototroph', scientificName: 'Roseiflexus castenholzii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'dehalococcoidia', name: 'Dehalococcoidia', scientificName: 'Dehalococcoidia', rank: 'class', speciesCount: 40,
          children: [
            { id: 'dehalococcoidales', name: 'Dehalococcoidales', scientificName: 'Dehalococcoidales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'dehalococcoidaceae', name: 'Dehalococcoidaceae', scientificName: 'Dehalococcoidaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'dehalococcoides', name: 'Dehalococcoides', scientificName: 'Dehalococcoides', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'dehalococcoides-mccartyi', name: 'Chlorinated Solvent Degrader', scientificName: 'Dehalococcoides mccartyi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'anaerolineae', name: 'Anaerolineae', scientificName: 'Anaerolineae', rank: 'class', speciesCount: 60,
          children: [
            { id: 'anaerolineales', name: 'Anaerolineales', scientificName: 'Anaerolineales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'anaerolineaceae', name: 'Anaerolineaceae', scientificName: 'Anaerolineaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'anaerolinea', name: 'Anaerolinea', scientificName: 'Anaerolinea', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'anaerolinea-thermophila', name: 'Thermophilic Anaerobe', scientificName: 'Anaerolinea thermophila', rank: 'species' }
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
      id: 'nitrospirae',
      name: 'Nitrospirae',
      scientificName: 'Nitrospirota',
      rank: 'phylum',
      description: 'Nitrite-oxidizing bacteria critical for nitrogen cycling',
      speciesCount: 100,
      children: [
        { id: 'nitrospira-class', name: 'Nitrospira', scientificName: 'Nitrospira', rank: 'class', speciesCount: 60,
          children: [
            { id: 'nitrospirales', name: 'Nitrospirales', scientificName: 'Nitrospirales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'nitrospiraceae', name: 'Nitrospiraceae', scientificName: 'Nitrospiraceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'nitrospira', name: 'Nitrospira', scientificName: 'Nitrospira', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'nitrospira-moscoviensis', name: 'Nitrite Oxidizer', scientificName: 'Nitrospira moscoviensis', rank: 'species' },
                        { id: 'nitrospira-inopinata', name: 'Comammox Bacterium', scientificName: 'Nitrospira inopinata', rank: 'species' }
                      ]
                    },
                    { id: 'leptospirillum', name: 'Leptospirillum', scientificName: 'Leptospirillum', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'leptospirillum-ferrooxidans', name: 'Iron-oxidizing Bacterium', scientificName: 'Leptospirillum ferrooxidans', rank: 'species' }
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
      id: 'fusobacteriota',
      name: 'Fusobacteriota',
      scientificName: 'Fusobacteriota',
      rank: 'phylum',
      description: 'Anaerobic bacteria found in oral cavity and gut, some associated with disease',
      speciesCount: 150,
      children: [
        { id: 'fusobacteriia', name: 'Fusobacteriia', scientificName: 'Fusobacteriia', rank: 'class', speciesCount: 100,
          children: [
            { id: 'fusobacteriales', name: 'Fusobacteriales', scientificName: 'Fusobacteriales', rank: 'order', speciesCount: 70,
              children: [
                { id: 'fusobacteriaceae', name: 'Fusobacteriaceae', scientificName: 'Fusobacteriaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'fusobacterium', name: 'Fusobacterium', scientificName: 'Fusobacterium', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'fusobacterium-nucleatum', name: 'Oral Fusobacterium', scientificName: 'Fusobacterium nucleatum', rank: 'species' },
                        { id: 'fusobacterium-necrophorum', name: 'Lemierre Syndrome Bacterium', scientificName: 'Fusobacterium necrophorum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leptotrichiaceae', name: 'Leptotrichiaceae', scientificName: 'Leptotrichiaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'leptotrichia', name: 'Leptotrichia', scientificName: 'Leptotrichia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'leptotrichia-buccalis', name: 'Oral Leptotrichia', scientificName: 'Leptotrichia buccalis', rank: 'species' }
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
      id: 'deferribacteres',
      name: 'Deferribacteres',
      scientificName: 'Deferribacterota',
      rank: 'phylum',
      description: 'Anaerobic bacteria capable of using various electron acceptors',
      speciesCount: 50,
      children: [
        { id: 'deferribacteres-class', name: 'Deferribacteres', scientificName: 'Deferribacteres', rank: 'class', speciesCount: 35,
          children: [
            { id: 'deferribacterales', name: 'Deferribacterales', scientificName: 'Deferribacterales', rank: 'order', speciesCount: 25,
              children: [
                { id: 'deferribacteraceae', name: 'Deferribacteraceae', scientificName: 'Deferribacteraceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'deferribacter', name: 'Deferribacter', scientificName: 'Deferribacter', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'deferribacter-thermophilus', name: 'Thermophilic Anaerobe', scientificName: 'Deferribacter thermophilus', rank: 'species' }
                      ]
                    },
                    { id: 'geovibrio', name: 'Geovibrio', scientificName: 'Geovibrio', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'geovibrio-ferrireducens', name: 'Iron-reducing Bacterium', scientificName: 'Geovibrio ferrireducens', rank: 'species' }
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
      id: 'aquificae',
      name: 'Aquificae',
      scientificName: 'Aquificota',
      rank: 'phylum',
      description: 'Thermophilic bacteria that oxidize hydrogen, found in hot springs',
      speciesCount: 80,
      children: [
        { id: 'aquificae-class', name: 'Aquificae', scientificName: 'Aquificae', rank: 'class', speciesCount: 60,
          children: [
            { id: 'aquificales', name: 'Aquificales', scientificName: 'Aquificales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'aquificaceae', name: 'Aquificaceae', scientificName: 'Aquificaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'aquifex', name: 'Aquifex', scientificName: 'Aquifex', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'aquifex-aeolicus', name: 'Hot Spring Hydrogen Oxidizer', scientificName: 'Aquifex aeolicus', rank: 'species' }
                      ]
                    },
                    { id: 'hydrogenobacter', name: 'Hydrogenobacter', scientificName: 'Hydrogenobacter', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'hydrogenobacter-thermophilus', name: 'Thermophilic Hydrogen Bacterium', scientificName: 'Hydrogenobacter thermophilus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hydrogenothermaceae', name: 'Hydrogenothermaceae', scientificName: 'Hydrogenothermaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'persephonella', name: 'Persephonella', scientificName: 'Persephonella', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'persephonella-marina', name: 'Deep-sea Vent Bacterium', scientificName: 'Persephonella marina', rank: 'species' }
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
      id: 'thermotogae',
      name: 'Thermotogae',
      scientificName: 'Thermotogota',
      rank: 'phylum',
      description: 'Hyperthermophilic bacteria with distinctive outer sheath (toga)',
      speciesCount: 100,
      children: [
        { id: 'thermotogae-class', name: 'Thermotogae', scientificName: 'Thermotogae', rank: 'class', speciesCount: 70,
          children: [
            { id: 'thermotogales', name: 'Thermotogales', scientificName: 'Thermotogales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'thermotogaceae', name: 'Thermotogaceae', scientificName: 'Thermotogaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'thermotoga', name: 'Thermotoga', scientificName: 'Thermotoga', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'thermotoga-maritima', name: 'Marine Hyperthermophile', scientificName: 'Thermotoga maritima', rank: 'species' },
                        { id: 'thermotoga-neapolitana', name: 'Hydrogen-producing Thermophile', scientificName: 'Thermotoga neapolitana', rank: 'species' }
                      ]
                    },
                    { id: 'fervidobacterium', name: 'Fervidobacterium', scientificName: 'Fervidobacterium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'fervidobacterium-nodosum', name: 'Hot Spring Fermentor', scientificName: 'Fervidobacterium nodosum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'petrotogaceae', name: 'Petrotogaceae', scientificName: 'Petrotogaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'petrotoga', name: 'Petrotoga', scientificName: 'Petrotoga', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'petrotoga-mobilis', name: 'Oil Reservoir Bacterium', scientificName: 'Petrotoga mobilis', rank: 'species' }
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
      id: 'synergistota',
      name: 'Synergistota',
      scientificName: 'Synergistota',
      rank: 'phylum',
      description: 'Anaerobic bacteria that degrade amino acids, found in gut and oral cavity',
      speciesCount: 80,
      children: [
        { id: 'synergistia', name: 'Synergistia', scientificName: 'Synergistia', rank: 'class', speciesCount: 50,
          children: [
            { id: 'synergistales', name: 'Synergistales', scientificName: 'Synergistales', rank: 'order', speciesCount: 35,
              children: [
                { id: 'synergistaceae', name: 'Synergistaceae', scientificName: 'Synergistaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'synergistes', name: 'Synergistes', scientificName: 'Synergistes', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'synergistes-jonesii', name: 'Rumen Amino Acid Degrader', scientificName: 'Synergistes jonesii', rank: 'species' }
                      ]
                    },
                    { id: 'aminobacterium', name: 'Aminobacterium', scientificName: 'Aminobacterium', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'aminobacterium-colombiense', name: 'Anaerobic Amino Acid Fermenter', scientificName: 'Aminobacterium colombiense', rank: 'species' }
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
      id: 'tenericutes',
      name: 'Tenericutes',
      scientificName: 'Mycoplasmatota',
      rank: 'phylum',
      description: 'Cell wall-less bacteria, includes important pathogens',
      speciesCount: 200,
      children: [
        { id: 'mollicutes', name: 'Mollicutes', scientificName: 'Mollicutes', rank: 'class', speciesCount: 180,
          children: [
            { id: 'mycoplasmatales', name: 'Mycoplasmatales', scientificName: 'Mycoplasmatales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'mycoplasmataceae', name: 'Mycoplasmataceae', scientificName: 'Mycoplasmataceae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'mycoplasma', name: 'Mycoplasma', scientificName: 'Mycoplasma', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'mycoplasma-pneumoniae', name: 'Walking Pneumonia Bacterium', scientificName: 'Mycoplasma pneumoniae', rank: 'species' },
                        { id: 'mycoplasma-genitalium', name: 'Smallest Free-living Organism', scientificName: 'Mycoplasma genitalium', rank: 'species' },
                        { id: 'mycoplasma-mycoides', name: 'Cattle Pleuropneumonia Agent', scientificName: 'Mycoplasma mycoides', rank: 'species' }
                      ]
                    },
                    { id: 'ureaplasma', name: 'Ureaplasma', scientificName: 'Ureaplasma', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'ureaplasma-urealyticum', name: 'Urinary Tract Mycoplasma', scientificName: 'Ureaplasma urealyticum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'entomoplasmatales', name: 'Entomoplasmatales', scientificName: 'Entomoplasmatales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'spiroplasmataceae', name: 'Spiroplasmataceae', scientificName: 'Spiroplasmataceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'spiroplasma', name: 'Spiroplasma', scientificName: 'Spiroplasma', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'spiroplasma-citri', name: 'Citrus Stubborn Disease Agent', scientificName: 'Spiroplasma citri', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'acholeplasmatales', name: 'Acholeplasmatales', scientificName: 'Acholeplasmatales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'acholeplasmataceae', name: 'Acholeplasmataceae', scientificName: 'Acholeplasmataceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'phytoplasma', name: 'Phytoplasma', scientificName: 'Candidatus Phytoplasma', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'phytoplasma-asteris', name: 'Aster Yellows Phytoplasma', scientificName: 'Candidatus Phytoplasma asteris', rank: 'species' }
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
      id: 'chlorobi',
      name: 'Chlorobi',
      scientificName: 'Chlorobiota',
      rank: 'phylum',
      description: 'Green sulfur bacteria, obligate anaerobic phototrophs',
      speciesCount: 100,
      children: [
        { id: 'chlorobia', name: 'Chlorobia', scientificName: 'Chlorobia', rank: 'class', speciesCount: 70,
          children: [
            { id: 'chlorobiales', name: 'Chlorobiales', scientificName: 'Chlorobiales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'chlorobiaceae', name: 'Chlorobiaceae', scientificName: 'Chlorobiaceae', rank: 'family', speciesCount: 35,
                  children: [
                    { id: 'chlorobium', name: 'Chlorobium', scientificName: 'Chlorobium', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'chlorobium-tepidum', name: 'Green Sulfur Bacterium', scientificName: 'Chlorobaculum tepidum', rank: 'species' },
                        { id: 'chlorobium-limicola', name: 'Mud Green Sulfur Bacterium', scientificName: 'Chlorobium limicola', rank: 'species' }
                      ]
                    },
                    { id: 'prosthecochloris', name: 'Prosthecochloris', scientificName: 'Prosthecochloris', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'prosthecochloris-aestuarii', name: 'Estuarine Green Sulfur Bacterium', scientificName: 'Prosthecochloris aestuarii', rank: 'species' }
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
