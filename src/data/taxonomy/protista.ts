import type { TaxonNode } from './types'

export const protista: TaxonNode =
{
  id: 'protista',
  name: 'Protists',
  scientificName: 'Protista',
  rank: 'kingdom',
  description: 'Diverse eukaryotes that are not animals, plants, or fungi',
  speciesCount: 200000,
  children: [
    {
      id: 'amoebozoa',
      name: 'Amoebas',
      scientificName: 'Amoebozoa',
      rank: 'phylum',
      description: 'Shape-shifting single-celled organisms that move using pseudopods',
      speciesCount: 2400,
      children: [
        { id: 'tubulinea', name: 'Tubulinea', scientificName: 'Tubulinea', rank: 'class', speciesCount: 300,
          children: [
            { id: 'euamoebida', name: 'True Amoebas', scientificName: 'Euamoebida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'amoebidae', name: 'Amoebidae', scientificName: 'Amoebidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'amoeba', name: 'Amoeba', scientificName: 'Amoeba', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'amoeba-proteus', name: 'Common Amoeba', scientificName: 'Amoeba proteus', rank: 'species' },
                        { id: 'amoeba-dubia', name: 'Dubious Amoeba', scientificName: 'Amoeba dubia', rank: 'species' }
                      ]
                    },
                    { id: 'chaos', name: 'Giant Amoebas', scientificName: 'Chaos', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'chaos-carolinensis', name: 'Giant Amoeba', scientificName: 'Chaos carolinensis', rank: 'species' },
                        { id: 'chaos-nobile', name: 'Noble Giant Amoeba', scientificName: 'Chaos nobile', rank: 'species' }
                      ]
                    },
                    { id: 'polychaos', name: 'Polychaos', scientificName: 'Polychaos', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'polychaos-dubium', name: 'Giant Polychaos', scientificName: 'Polychaos dubium', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hartmannellidae', name: 'Hartmannellidae', scientificName: 'Hartmannellidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'hartmannella', name: 'Hartmannella', scientificName: 'Hartmannella', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'hartmannella-vermiformis', name: 'Vermiform Amoeba', scientificName: 'Hartmannella vermiformis', rank: 'species' }
                      ]
                    },
                    { id: 'vermamoeba', name: 'Vermamoeba', scientificName: 'Vermamoeba', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'vermamoeba-vermiformis', name: 'Worm-like Amoeba', scientificName: 'Vermamoeba vermiformis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'leptomyxida', name: 'Leptomyxida', scientificName: 'Leptomyxida', rank: 'order', speciesCount: 50,
              children: [
                { id: 'leptomyxidae', name: 'Leptomyxidae', scientificName: 'Leptomyxidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'leptomyxa', name: 'Leptomyxa', scientificName: 'Leptomyxa', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'leptomyxa-reticulata', name: 'Reticulate Amoeba', scientificName: 'Leptomyxa reticulata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'arcellinida', name: 'Testate Amoebas', scientificName: 'Arcellinida', rank: 'order', speciesCount: 150,
              children: [
                { id: 'arcellidae', name: 'Arcellidae', scientificName: 'Arcellidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'arcella', name: 'Arcella', scientificName: 'Arcella', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'arcella-vulgaris', name: 'Common Arcella', scientificName: 'Arcella vulgaris', rank: 'species' },
                        { id: 'arcella-dentata', name: 'Toothed Arcella', scientificName: 'Arcella dentata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'centropyxidae', name: 'Centropyxidae', scientificName: 'Centropyxidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'centropyxis', name: 'Centropyxis', scientificName: 'Centropyxis', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'centropyxis-aculeata', name: 'Spiny Testate Amoeba', scientificName: 'Centropyxis aculeata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'difflugiidae', name: 'Difflugiidae', scientificName: 'Difflugiidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'difflugia', name: 'Difflugia', scientificName: 'Difflugia', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'difflugia-corona', name: 'Crown Difflugia', scientificName: 'Difflugia corona', rank: 'species' },
                        { id: 'difflugia-oblonga', name: 'Oblong Difflugia', scientificName: 'Difflugia oblonga', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'flabellinea', name: 'Flabellinea', scientificName: 'Flabellinea', rank: 'class', speciesCount: 200,
          children: [
            { id: 'vannellida', name: 'Vannellida', scientificName: 'Vannellida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'vannellidae', name: 'Vannellidae', scientificName: 'Vannellidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'vannella', name: 'Fan-shaped Amoebas', scientificName: 'Vannella', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'vannella-simplex', name: 'Simple Fan Amoeba', scientificName: 'Vannella simplex', rank: 'species' },
                        { id: 'vannella-platypodia', name: 'Flat-footed Amoeba', scientificName: 'Vannella platypodia', rank: 'species' }
                      ]
                    },
                    { id: 'platyamoeba', name: 'Platyamoeba', scientificName: 'Platyamoeba', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'platyamoeba-placida', name: 'Placid Flat Amoeba', scientificName: 'Platyamoeba placida', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'dactylopodida', name: 'Dactylopodida', scientificName: 'Dactylopodida', rank: 'order', speciesCount: 50,
              children: [
                { id: 'paramoebidae', name: 'Paramoebidae', scientificName: 'Paramoebidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'paramoeba', name: 'Paramoeba', scientificName: 'Paramoeba', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'paramoeba-perurans', name: 'Amoebic Gill Disease Agent', scientificName: 'Paramoeba perurans', rank: 'species' }
                      ]
                    },
                    { id: 'neoparamoeba', name: 'Neoparamoeba', scientificName: 'Neoparamoeba', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'neoparamoeba-pemaquidensis', name: 'Marine Paramoeba', scientificName: 'Neoparamoeba pemaquidensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'discosea', name: 'Discosea', scientificName: 'Discosea', rank: 'class', speciesCount: 400,
          children: [
            { id: 'centramoebida', name: 'Centramoebida', scientificName: 'Centramoebida', rank: 'order', speciesCount: 50,
              children: [
                { id: 'acanthamoebidae', name: 'Acanthamoebidae', scientificName: 'Acanthamoebidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'acanthamoeba', name: 'Acanthamoeba', scientificName: 'Acanthamoeba', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'acanthamoeba-castellanii', name: 'Free-living Amoeba', scientificName: 'Acanthamoeba castellanii', rank: 'species' },
                        { id: 'acanthamoeba-polyphaga', name: 'Polyphagous Acanthamoeba', scientificName: 'Acanthamoeba polyphaga', rank: 'species' },
                        { id: 'acanthamoeba-keratitis', name: 'Keratitis Amoeba', scientificName: 'Acanthamoeba keratitis', rank: 'species' }
                      ]
                    },
                    { id: 'balamuthia', name: 'Balamuthia', scientificName: 'Balamuthia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'balamuthia-mandrillaris', name: 'Brain-eating Amoeba', scientificName: 'Balamuthia mandrillaris', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'thecamoebida', name: 'Thecamoebida', scientificName: 'Thecamoebida', rank: 'order', speciesCount: 80,
              children: [
                { id: 'thecamoebidae', name: 'Thecamoebidae', scientificName: 'Thecamoebidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'thecamoeba', name: 'Thecamoeba', scientificName: 'Thecamoeba', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'thecamoeba-quadrilineata', name: 'Four-lined Amoeba', scientificName: 'Thecamoeba quadrilineata', rank: 'species' }
                      ]
                    },
                    { id: 'sappinia', name: 'Sappinia', scientificName: 'Sappinia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'sappinia-diploidea', name: 'Diploid Sappinia', scientificName: 'Sappinia diploidea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'dermamoebida', name: 'Dermamoebida', scientificName: 'Dermamoebida', rank: 'order', speciesCount: 40,
              children: [
                { id: 'mayorellidae', name: 'Mayorellidae', scientificName: 'Mayorellidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'mayorella', name: 'Mayorella', scientificName: 'Mayorella', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'mayorella-vespertilioides', name: 'Bat-wing Amoeba', scientificName: 'Mayorella vespertilioides', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'mycetozoa', name: 'Slime Molds', scientificName: 'Mycetozoa', rank: 'class', speciesCount: 1000,
          children: [
            { id: 'dictyosteliida', name: 'Cellular Slime Molds', scientificName: 'Dictyosteliida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'dictyosteliidae', name: 'Dictyosteliidae', scientificName: 'Dictyosteliidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'dictyostelium', name: 'Social Amoebas', scientificName: 'Dictyostelium', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'dictyostelium-discoideum', name: 'Social Amoeba', scientificName: 'Dictyostelium discoideum', rank: 'species' },
                        { id: 'dictyostelium-purpureum', name: 'Purple Social Amoeba', scientificName: 'Dictyostelium purpureum', rank: 'species' },
                        { id: 'dictyostelium-mucoroides', name: 'Mucor-like Dictyostelium', scientificName: 'Dictyostelium mucoroides', rank: 'species' }
                      ]
                    },
                    { id: 'polysphondylium', name: 'Polysphondylium', scientificName: 'Polysphondylium', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'polysphondylium-pallidum', name: 'Pale Slime Mold', scientificName: 'Polysphondylium pallidum', rank: 'species' },
                        { id: 'polysphondylium-violaceum', name: 'Violet Slime Mold', scientificName: 'Polysphondylium violaceum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'acytosteliidae', name: 'Acytosteliidae', scientificName: 'Acytosteliidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'acytostelium', name: 'Acytostelium', scientificName: 'Acytostelium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'acytostelium-leptosomum', name: 'Slender Slime Mold', scientificName: 'Acytostelium leptosomum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'physarida', name: 'Plasmodial Slime Molds', scientificName: 'Physarida', rank: 'order', speciesCount: 300,
              children: [
                { id: 'physaraceae', name: 'Physaraceae', scientificName: 'Physaraceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'physarum', name: 'Physarum', scientificName: 'Physarum', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'physarum-polycephalum', name: 'Many-headed Slime Mold', scientificName: 'Physarum polycephalum', rank: 'species' },
                        { id: 'physarum-viride', name: 'Green Slime Mold', scientificName: 'Physarum viride', rank: 'species' },
                        { id: 'physarum-leucopus', name: 'White-footed Slime Mold', scientificName: 'Physarum leucopus', rank: 'species' }
                      ]
                    },
                    { id: 'fuligo', name: 'Fuligo', scientificName: 'Fuligo', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'fuligo-septica', name: "Dog's Vomit Slime Mold", scientificName: 'Fuligo septica', rank: 'species' },
                        { id: 'fuligo-candida', name: 'White Fuligo', scientificName: 'Fuligo candida', rank: 'species' }
                      ]
                    },
                    { id: 'badhamia', name: 'Badhamia', scientificName: 'Badhamia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'badhamia-utricularis', name: 'Grape Slime Mold', scientificName: 'Badhamia utricularis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'didymiaceae', name: 'Didymiaceae', scientificName: 'Didymiaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'didymium', name: 'Didymium', scientificName: 'Didymium', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'didymium-iridis', name: 'Iridescent Slime Mold', scientificName: 'Didymium iridis', rank: 'species' },
                        { id: 'didymium-squamulosum', name: 'Scaly Slime Mold', scientificName: 'Didymium squamulosum', rank: 'species' }
                      ]
                    },
                    { id: 'mucilago', name: 'Mucilago', scientificName: 'Mucilago', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'mucilago-crustacea', name: 'Crusty Slime Mold', scientificName: 'Mucilago crustacea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'stemonitida', name: 'Stemonitida', scientificName: 'Stemonitida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'stemonitidaceae', name: 'Stemonitidaceae', scientificName: 'Stemonitidaceae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'stemonitis', name: 'Stemonitis', scientificName: 'Stemonitis', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'stemonitis-fusca', name: 'Chocolate Tube Slime', scientificName: 'Stemonitis fusca', rank: 'species' },
                        { id: 'stemonitis-axifera', name: 'Brown Tube Slime', scientificName: 'Stemonitis axifera', rank: 'species' }
                      ]
                    },
                    { id: 'comatricha', name: 'Comatricha', scientificName: 'Comatricha', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'comatricha-nigra', name: 'Black Slime Mold', scientificName: 'Comatricha nigra', rank: 'species' }
                      ]
                    },
                    { id: 'lamproderma', name: 'Lamproderma', scientificName: 'Lamproderma', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'lamproderma-scintillans', name: 'Sparkling Slime Mold', scientificName: 'Lamproderma scintillans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'liceida', name: 'Liceida', scientificName: 'Liceida', rank: 'order', speciesCount: 150,
              children: [
                { id: 'reticulariaceae', name: 'Reticulariaceae', scientificName: 'Reticulariaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'lycogala', name: 'Wolf Milk', scientificName: 'Lycogala', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'lycogala-epidendrum', name: "Wolf's Milk Slime", scientificName: 'Lycogala epidendrum', rank: 'species' }
                      ]
                    },
                    { id: 'tubifera', name: 'Tubifera', scientificName: 'Tubifera', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'tubifera-ferruginosa', name: 'Red Raspberry Slime', scientificName: 'Tubifera ferruginosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cribrariaceae', name: 'Cribrariaceae', scientificName: 'Cribrariaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'cribraria', name: 'Cribraria', scientificName: 'Cribraria', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'cribraria-cancellata', name: 'Lattice Slime Mold', scientificName: 'Cribraria cancellata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'trichiales', name: 'Trichiales', scientificName: 'Trichiales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'trichiaceae', name: 'Trichiaceae', scientificName: 'Trichiaceae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'trichia', name: 'Trichia', scientificName: 'Trichia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'trichia-varia', name: 'Variable Trichia', scientificName: 'Trichia varia', rank: 'species' },
                        { id: 'trichia-decipiens', name: 'Deceptive Trichia', scientificName: 'Trichia decipiens', rank: 'species' }
                      ]
                    },
                    { id: 'arcyria', name: 'Arcyria', scientificName: 'Arcyria', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'arcyria-denudata', name: 'Carnival Candy Slime', scientificName: 'Arcyria denudata', rank: 'species' },
                        { id: 'arcyria-cinerea', name: 'Gray Arcyria', scientificName: 'Arcyria cinerea', rank: 'species' }
                      ]
                    },
                    { id: 'hemitrichia', name: 'Hemitrichia', scientificName: 'Hemitrichia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'hemitrichia-serpula', name: 'Pretzel Slime Mold', scientificName: 'Hemitrichia serpula', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'archamoebae', name: 'Archamoebae', scientificName: 'Archamoebae', rank: 'class', speciesCount: 100,
          children: [
            { id: 'pelobiontida', name: 'Pelobiontida', scientificName: 'Pelobiontida', rank: 'order', speciesCount: 30,
              children: [
                { id: 'entamoebidae', name: 'Entamoebidae', scientificName: 'Entamoebidae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'entamoeba', name: 'Entamoeba', scientificName: 'Entamoeba', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'entamoeba-histolytica', name: 'Dysentery Amoeba', scientificName: 'Entamoeba histolytica', rank: 'species' }
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
      id: 'chromista',
      name: 'Chromists',
      scientificName: 'Chromista',
      rank: 'phylum',
      description: 'Diatoms, kelp, brown algae, and water molds - ecologically crucial organisms',
      speciesCount: 25000,
      children: [
        { id: 'bacillariophyceae', name: 'Diatoms', scientificName: 'Bacillariophyceae', rank: 'class', speciesCount: 12000,
          children: [
            { id: 'pennales', name: 'Pennate Diatoms', scientificName: 'Pennales', rank: 'order', speciesCount: 7000,
              children: [
                { id: 'naviculaceae', name: 'Naviculaceae', scientificName: 'Naviculaceae', rank: 'family', speciesCount: 2000,
                  children: [
                    { id: 'navicula', name: 'Boat Diatoms', scientificName: 'Navicula', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'navicula-radiosa', name: 'Radiate Navicula', scientificName: 'Navicula radiosa', rank: 'species' },
                        { id: 'navicula-tripunctata', name: 'Three-spotted Diatom', scientificName: 'Navicula tripunctata', rank: 'species' }
                      ]
                    },
                    { id: 'pinnularia', name: 'Pinnularia', scientificName: 'Pinnularia', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'pinnularia-viridis', name: 'Green Pinnularia', scientificName: 'Pinnularia viridis', rank: 'species' }
                      ]
                    },
                    { id: 'gyrosigma', name: 'Gyrosigma', scientificName: 'Gyrosigma', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'gyrosigma-acuminatum', name: 'Pointed Gyrosigma', scientificName: 'Gyrosigma acuminatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bacillariaceae', name: 'Bacillariaceae', scientificName: 'Bacillariaceae', rank: 'family', speciesCount: 800,
                  children: [
                    { id: 'nitzschia', name: 'Nitzschia', scientificName: 'Nitzschia', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'nitzschia-palea', name: 'Pollution-tolerant Diatom', scientificName: 'Nitzschia palea', rank: 'species' },
                        { id: 'nitzschia-pungens', name: 'Domoic Acid Diatom', scientificName: 'Nitzschia pungens', rank: 'species' }
                      ]
                    },
                    { id: 'pseudo-nitzschia', name: 'Pseudo-nitzschia', scientificName: 'Pseudo-nitzschia', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'pseudo-nitzschia-australis', name: 'Toxic Pennate Diatom', scientificName: 'Pseudo-nitzschia australis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'fragilariaceae', name: 'Fragilariaceae', scientificName: 'Fragilariaceae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'fragilaria', name: 'Fragilaria', scientificName: 'Fragilaria', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'fragilaria-crotonensis', name: 'Chain Diatom', scientificName: 'Fragilaria crotonensis', rank: 'species' }
                      ]
                    },
                    { id: 'asterionella', name: 'Star Diatoms', scientificName: 'Asterionella', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'asterionella-formosa', name: 'Star Diatom', scientificName: 'Asterionella formosa', rank: 'species' }
                      ]
                    },
                    { id: 'tabellaria', name: 'Tabellaria', scientificName: 'Tabellaria', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'tabellaria-flocculosa', name: 'Zigzag Diatom', scientificName: 'Tabellaria flocculosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'surirellaceae', name: 'Surirellaceae', scientificName: 'Surirellaceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'surirella', name: 'Surirella', scientificName: 'Surirella', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'surirella-ovalis', name: 'Oval Surirella', scientificName: 'Surirella ovalis', rank: 'species' }
                      ]
                    },
                    { id: 'cymatopleura', name: 'Cymatopleura', scientificName: 'Cymatopleura', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'cymatopleura-solea', name: 'Sole Diatom', scientificName: 'Cymatopleura solea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'centrales', name: 'Centric Diatoms', scientificName: 'Centrales', rank: 'order', speciesCount: 5000,
              children: [
                { id: 'thalassiosiraceae', name: 'Thalassiosiraceae', scientificName: 'Thalassiosiraceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'thalassiosira', name: 'Thalassiosira', scientificName: 'Thalassiosira', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'thalassiosira-pseudonana', name: 'Model Diatom', scientificName: 'Thalassiosira pseudonana', rank: 'species' },
                        { id: 'thalassiosira-weissflogii', name: 'Large Centric Diatom', scientificName: 'Thalassiosira weissflogii', rank: 'species' }
                      ]
                    },
                    { id: 'skeletonema', name: 'Skeletonema', scientificName: 'Skeletonema', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'skeletonema-costatum', name: 'Chain-forming Diatom', scientificName: 'Skeletonema costatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'coscinodiscaceae', name: 'Coscinodiscaceae', scientificName: 'Coscinodiscaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'coscinodiscus', name: 'Coscinodiscus', scientificName: 'Coscinodiscus', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'coscinodiscus-radiatus', name: 'Radiate Disc Diatom', scientificName: 'Coscinodiscus radiatus', rank: 'species' },
                        { id: 'coscinodiscus-wailesii', name: 'Giant Diatom', scientificName: 'Coscinodiscus wailesii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'melosiraceae', name: 'Melosiraceae', scientificName: 'Melosiraceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'melosira', name: 'Melosira', scientificName: 'Melosira', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'melosira-varians', name: 'Variable Melosira', scientificName: 'Melosira varians', rank: 'species' }
                      ]
                    },
                    { id: 'aulacoseira', name: 'Aulacoseira', scientificName: 'Aulacoseira', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'aulacoseira-granulata', name: 'Granular Chain Diatom', scientificName: 'Aulacoseira granulata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chaetoceraceae', name: 'Chaetoceraceae', scientificName: 'Chaetoceraceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'chaetoceros', name: 'Chaetoceros', scientificName: 'Chaetoceros', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'chaetoceros-debilis', name: 'Weak Chaetoceros', scientificName: 'Chaetoceros debilis', rank: 'species' },
                        { id: 'chaetoceros-socialis', name: 'Colonial Chaetoceros', scientificName: 'Chaetoceros socialis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'xanthophyceae', name: 'Yellow-green Algae', scientificName: 'Xanthophyceae', rank: 'class', speciesCount: 600,
          children: [
            { id: 'vaucheriales', name: 'Vaucheriales', scientificName: 'Vaucheriales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'vaucheriaceae', name: 'Vaucheriaceae', scientificName: 'Vaucheriaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'vaucheria', name: 'Vaucheria', scientificName: 'Vaucheria', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'vaucheria-sessilis', name: 'Common Vaucheria', scientificName: 'Vaucheria sessilis', rank: 'species' },
                        { id: 'vaucheria-litorea', name: 'Shore Vaucheria', scientificName: 'Vaucheria litorea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'tribonematales', name: 'Tribonematales', scientificName: 'Tribonematales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'tribonemataceae', name: 'Tribonemataceae', scientificName: 'Tribonemataceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'tribonema', name: 'Tribonema', scientificName: 'Tribonema', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'tribonema-aequale', name: 'Common Tribonema', scientificName: 'Tribonema aequale', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'botrydiales', name: 'Botrydiales', scientificName: 'Botrydiales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'botrydiaceae', name: 'Botrydiaceae', scientificName: 'Botrydiaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'botrydium', name: 'Botrydium', scientificName: 'Botrydium', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'botrydium-granulatum', name: 'Granular Botrydium', scientificName: 'Botrydium granulatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'phaeophyceae', name: 'Brown Algae', scientificName: 'Phaeophyceae', rank: 'class', speciesCount: 2000,
          children: [
            { id: 'laminariales', name: 'Kelp', scientificName: 'Laminariales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'laminariaceae', name: 'Kelp', scientificName: 'Laminariaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'macrocystis', name: 'Giant Kelp', scientificName: 'Macrocystis', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'macrocystis-pyrifera', name: 'Giant Kelp', scientificName: 'Macrocystis pyrifera', rank: 'species' }
                      ]
                    },
                    { id: 'laminaria', name: 'Kelp', scientificName: 'Laminaria', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'laminaria-digitata', name: 'Oarweed', scientificName: 'Laminaria digitata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'fucales', name: 'Rockweeds', scientificName: 'Fucales', rank: 'order', speciesCount: 500,
              children: [
                { id: 'fucaceae', name: 'Fucaceae', scientificName: 'Fucaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'fucus', name: 'Bladderwrack', scientificName: 'Fucus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'fucus-vesiculosus', name: 'Bladderwrack', scientificName: 'Fucus vesiculosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sargassaceae', name: 'Sargassaceae', scientificName: 'Sargassaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'sargassum', name: 'Sargassum', scientificName: 'Sargassum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'sargassum-natans', name: 'Sargasso Weed', scientificName: 'Sargassum natans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'chrysophyceae', name: 'Golden Algae', scientificName: 'Chrysophyceae', rank: 'class', speciesCount: 1000 },
        { id: 'oomycetes', name: 'Water Molds', scientificName: 'Oomycetes', rank: 'class', speciesCount: 1500,
          children: [
            { id: 'peronosporales', name: 'Downy Mildews', scientificName: 'Peronosporales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'peronosporaceae', name: 'Peronosporaceae', scientificName: 'Peronosporaceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'phytophthora', name: 'Plant Destroyers', scientificName: 'Phytophthora', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'phytophthora-infestans', name: 'Potato Blight', scientificName: 'Phytophthora infestans', rank: 'species' },
                        { id: 'phytophthora-ramorum', name: 'Sudden Oak Death', scientificName: 'Phytophthora ramorum', rank: 'species' },
                        { id: 'phytophthora-cinnamomi', name: 'Cinnamon Root Rot', scientificName: 'Phytophthora cinnamomi', rank: 'species' },
                        { id: 'phytophthora-capsici', name: 'Pepper Blight', scientificName: 'Phytophthora capsici', rank: 'species' },
                        { id: 'phytophthora-sojae', name: 'Soybean Root Rot', scientificName: 'Phytophthora sojae', rank: 'species' },
                        { id: 'phytophthora-palmivora', name: 'Coconut Bud Rot', scientificName: 'Phytophthora palmivora', rank: 'species' }
                      ]
                    },
                    { id: 'plasmopara', name: 'Downy Mildew', scientificName: 'Plasmopara', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'plasmopara-viticola', name: 'Grape Downy Mildew', scientificName: 'Plasmopara viticola', rank: 'species' },
                        { id: 'plasmopara-halstedii', name: 'Sunflower Downy Mildew', scientificName: 'Plasmopara halstedii', rank: 'species' }
                      ]
                    },
                    { id: 'peronospora', name: 'Peronospora', scientificName: 'Peronospora', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'peronospora-destructor', name: 'Onion Downy Mildew', scientificName: 'Peronospora destructor', rank: 'species' },
                        { id: 'peronospora-parasitica', name: 'Crucifer Downy Mildew', scientificName: 'Peronospora parasitica', rank: 'species' }
                      ]
                    },
                    { id: 'bremia', name: 'Bremia', scientificName: 'Bremia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'bremia-lactucae', name: 'Lettuce Downy Mildew', scientificName: 'Bremia lactucae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pythiaceae', name: 'Pythiaceae', scientificName: 'Pythiaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'pythium', name: 'Pythium', scientificName: 'Pythium', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'pythium-ultimum', name: 'Damping-off Pathogen', scientificName: 'Pythium ultimum', rank: 'species' },
                        { id: 'pythium-insidiosum', name: 'Swamp Cancer', scientificName: 'Pythium insidiosum', rank: 'species' },
                        { id: 'pythium-aphanidermatum', name: 'Root Rot Pathogen', scientificName: 'Pythium aphanidermatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'albuginaceae', name: 'White Rusts', scientificName: 'Albuginaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'albugo', name: 'White Rust', scientificName: 'Albugo', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'albugo-candida', name: 'White Rust of Crucifers', scientificName: 'Albugo candida', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'saprolegniales', name: 'Saprolegniales', scientificName: 'Saprolegniales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'saprolegniaceae', name: 'Saprolegniaceae', scientificName: 'Saprolegniaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'saprolegnia', name: 'Fish Molds', scientificName: 'Saprolegnia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'saprolegnia-parasitica', name: 'Fish Mold', scientificName: 'Saprolegnia parasitica', rank: 'species' },
                        { id: 'saprolegnia-ferax', name: 'Vigorous Saprolegnia', scientificName: 'Saprolegnia ferax', rank: 'species' }
                      ]
                    },
                    { id: 'achlya', name: 'Achlya', scientificName: 'Achlya', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'achlya-bisexualis', name: 'Bisexual Achlya', scientificName: 'Achlya bisexualis', rank: 'species' }
                      ]
                    },
                    { id: 'aphanomyces', name: 'Aphanomyces', scientificName: 'Aphanomyces', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'aphanomyces-astaci', name: 'Crayfish Plague', scientificName: 'Aphanomyces astaci', rank: 'species' },
                        { id: 'aphanomyces-euteiches', name: 'Pea Root Rot', scientificName: 'Aphanomyces euteiches', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leptolegniaceae', name: 'Leptolegniaceae', scientificName: 'Leptolegniaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'leptolegnia', name: 'Leptolegnia', scientificName: 'Leptolegnia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'leptolegnia-caudata', name: 'Tailed Leptolegnia', scientificName: 'Leptolegnia caudata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'leptomitales', name: 'Leptomitales', scientificName: 'Leptomitales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'leptomitaceae', name: 'Leptomitaceae', scientificName: 'Leptomitaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'leptomitus', name: 'Leptomitus', scientificName: 'Leptomitus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'leptomitus-lacteus', name: 'Sewage Fungus', scientificName: 'Leptomitus lacteus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'dinophyceae', name: 'Dinoflagellates', scientificName: 'Dinophyceae', rank: 'class', speciesCount: 2500,
          children: [
            { id: 'gonyaulacales', name: 'Gonyaulacales', scientificName: 'Gonyaulacales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'ceratiaceae', name: 'Ceratiaceae', scientificName: 'Ceratiaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'ceratium', name: 'Horn Dinoflagellates', scientificName: 'Ceratium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'ceratium-hirundinella', name: 'Swallow Dinoflagellate', scientificName: 'Ceratium hirundinella', rank: 'species' },
                        { id: 'ceratium-fusus', name: 'Spindle Dinoflagellate', scientificName: 'Ceratium fusus', rank: 'species' },
                        { id: 'ceratium-tripos', name: 'Tripod Dinoflagellate', scientificName: 'Ceratium tripos', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lingulodiniaceae', name: 'Lingulodiniaceae', scientificName: 'Lingulodiniaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'lingulodinium', name: 'Lingulodinium', scientificName: 'Lingulodinium', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'lingulodinium-polyedra', name: 'Bioluminescent Dinoflagellate', scientificName: 'Lingulodinium polyedra', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'gonyaulacaceae', name: 'Gonyaulacaceae', scientificName: 'Gonyaulacaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'gonyaulax', name: 'Gonyaulax', scientificName: 'Gonyaulax', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'gonyaulax-polygramma', name: 'Multi-lined Dinoflagellate', scientificName: 'Gonyaulax polygramma', rank: 'species' }
                      ]
                    },
                    { id: 'alexandrium', name: 'Alexandrium', scientificName: 'Alexandrium', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'alexandrium-catenella', name: 'PSP Dinoflagellate', scientificName: 'Alexandrium catenella', rank: 'species' },
                        { id: 'alexandrium-tamarense', name: 'Toxic Alexandrium', scientificName: 'Alexandrium tamarense', rank: 'species' },
                        { id: 'alexandrium-fundyense', name: 'Fundy Dinoflagellate', scientificName: 'Alexandrium fundyense', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pyrocystaceae', name: 'Pyrocystaceae', scientificName: 'Pyrocystaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'pyrocystis', name: 'Fire Spheres', scientificName: 'Pyrocystis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'pyrocystis-lunula', name: 'Crescent Bioluminescent', scientificName: 'Pyrocystis lunula', rank: 'species' },
                        { id: 'pyrocystis-fusiformis', name: 'Spindle Fire Sphere', scientificName: 'Pyrocystis fusiformis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'peridiniales', name: 'Peridiniales', scientificName: 'Peridiniales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'symbiodiniaceae', name: 'Coral Symbionts', scientificName: 'Symbiodiniaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'symbiodinium', name: 'Zooxanthellae', scientificName: 'Symbiodinium', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'symbiodinium-microadriaticum', name: 'Coral Symbiont', scientificName: 'Symbiodinium microadriaticum', rank: 'species' }
                      ]
                    },
                    { id: 'cladocopium', name: 'Cladocopium', scientificName: 'Cladocopium', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'cladocopium-goreaui', name: 'Reef Zooxanthella', scientificName: 'Cladocopium goreaui', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'peridiniaceae', name: 'Peridiniaceae', scientificName: 'Peridiniaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'peridinium', name: 'Peridinium', scientificName: 'Peridinium', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'peridinium-cinctum', name: 'Girdled Peridinium', scientificName: 'Peridinium cinctum', rank: 'species' },
                        { id: 'peridinium-gatunense', name: 'Lake Peridinium', scientificName: 'Peridinium gatunense', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'heterocapsaceae', name: 'Heterocapsaceae', scientificName: 'Heterocapsaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'heterocapsa', name: 'Heterocapsa', scientificName: 'Heterocapsa', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'heterocapsa-triquetra', name: 'Triangular Dinoflagellate', scientificName: 'Heterocapsa triquetra', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'gymnodiniales', name: 'Gymnodiniales', scientificName: 'Gymnodiniales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'gymnodiniaceae', name: 'Gymnodiniaceae', scientificName: 'Gymnodiniaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'karenia', name: 'Red Tide Dinoflagellates', scientificName: 'Karenia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'karenia-brevis', name: 'Red Tide Dinoflagellate', scientificName: 'Karenia brevis', rank: 'species' },
                        { id: 'karenia-mikimotoi', name: 'Mikimoto Red Tide', scientificName: 'Karenia mikimotoi', rank: 'species' }
                      ]
                    },
                    { id: 'noctiluca', name: 'Sea Sparkle', scientificName: 'Noctiluca', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'noctiluca-scintillans', name: 'Sea Sparkle', scientificName: 'Noctiluca scintillans', rank: 'species' }
                      ]
                    },
                    { id: 'gymnodinium', name: 'Gymnodinium', scientificName: 'Gymnodinium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'gymnodinium-catenatum', name: 'Chain Gymnodinium', scientificName: 'Gymnodinium catenatum', rank: 'species' }
                      ]
                    },
                    { id: 'akashiwo', name: 'Akashiwo', scientificName: 'Akashiwo', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'akashiwo-sanguinea', name: 'Blood Tide', scientificName: 'Akashiwo sanguinea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'polykrikaceae', name: 'Polykrikaceae', scientificName: 'Polykrikaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'polykrikos', name: 'Polykrikos', scientificName: 'Polykrikos', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'polykrikos-kofoidii', name: 'Colonial Dinoflagellate', scientificName: 'Polykrikos kofoidii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'prorocentrales', name: 'Prorocentrales', scientificName: 'Prorocentrales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'prorocentraceae', name: 'Prorocentraceae', scientificName: 'Prorocentraceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'prorocentrum', name: 'Prorocentrum', scientificName: 'Prorocentrum', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'prorocentrum-lima', name: 'DSP Dinoflagellate', scientificName: 'Prorocentrum lima', rank: 'species' },
                        { id: 'prorocentrum-micans', name: 'Sparkling Prorocentrum', scientificName: 'Prorocentrum micans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'dinophysiales', name: 'Dinophysiales', scientificName: 'Dinophysiales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'dinophysiaceae', name: 'Dinophysiaceae', scientificName: 'Dinophysiaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'dinophysis', name: 'Dinophysis', scientificName: 'Dinophysis', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'dinophysis-acuminata', name: 'Pointed Dinophysis', scientificName: 'Dinophysis acuminata', rank: 'species' },
                        { id: 'dinophysis-fortii', name: 'DSP Producer', scientificName: 'Dinophysis fortii', rank: 'species' }
                      ]
                    },
                    { id: 'phalacroma', name: 'Phalacroma', scientificName: 'Phalacroma', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'phalacroma-rotundatum', name: 'Round Phalacroma', scientificName: 'Phalacroma rotundatum', rank: 'species' }
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
      id: 'ciliophora',
      name: 'Ciliates',
      scientificName: 'Ciliophora',
      rank: 'phylum',
      description: 'Complex single-celled organisms covered in hair-like cilia',
      speciesCount: 8000,
      children: [
        { id: 'oligohymenophorea', name: 'Oligohymenophorea', scientificName: 'Oligohymenophorea', rank: 'class', speciesCount: 3000,
          children: [
            { id: 'peniculida', name: 'Peniculida', scientificName: 'Peniculida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'parameciidae', name: 'Parameciidae', scientificName: 'Parameciidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'paramecium', name: 'Slipper Animals', scientificName: 'Paramecium', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'paramecium-caudatum', name: 'Slipper Animalcule', scientificName: 'Paramecium caudatum', rank: 'species' },
                        { id: 'paramecium-aurelia', name: 'Paramecium', scientificName: 'Paramecium aurelia', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'hymenostomatida', name: 'Hymenostomatida', scientificName: 'Hymenostomatida', rank: 'order', speciesCount: 600,
              children: [
                { id: 'tetrahymenidae', name: 'Tetrahymenidae', scientificName: 'Tetrahymenidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'tetrahymena', name: 'Tetrahymena', scientificName: 'Tetrahymena', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'tetrahymena-thermophila', name: 'Model Ciliate', scientificName: 'Tetrahymena thermophila', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'sessilida', name: 'Peritrichs', scientificName: 'Sessilida', rank: 'order', speciesCount: 800,
              children: [
                { id: 'vorticellidae', name: 'Vorticellidae', scientificName: 'Vorticellidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'vorticella', name: 'Bell Animals', scientificName: 'Vorticella', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'vorticella-convallaria', name: 'Bell Animalcule', scientificName: 'Vorticella convallaria', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'spirotrichea', name: 'Spirotrichea', scientificName: 'Spirotrichea', rank: 'class', speciesCount: 2000,
          children: [
            { id: 'heterotrichida', name: 'Heterotrichida', scientificName: 'Heterotrichida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'stentoridae', name: 'Stentoridae', scientificName: 'Stentoridae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'stentor', name: 'Trumpet Animals', scientificName: 'Stentor', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'stentor-coeruleus', name: 'Blue Trumpet Animalcule', scientificName: 'Stentor coeruleus', rank: 'species' },
                        { id: 'stentor-polymorphus', name: 'Green Stentor', scientificName: 'Stentor polymorphus', rank: 'species' },
                        { id: 'stentor-roeseli', name: 'Roesel Stentor', scientificName: 'Stentor roeseli', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'blepharismidae', name: 'Blepharismidae', scientificName: 'Blepharismidae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'blepharisma', name: 'Pink Ciliates', scientificName: 'Blepharisma', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'blepharisma-japonicum', name: 'Pink Ciliate', scientificName: 'Blepharisma japonicum', rank: 'species' },
                        { id: 'blepharisma-americanum', name: 'American Pink Ciliate', scientificName: 'Blepharisma americanum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'spirostomidae', name: 'Spirostomidae', scientificName: 'Spirostomidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'spirostomum', name: 'Spirostomum', scientificName: 'Spirostomum', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'spirostomum-ambiguum', name: 'Giant Ciliate', scientificName: 'Spirostomum ambiguum', rank: 'species' },
                        { id: 'spirostomum-minus', name: 'Small Spirostomum', scientificName: 'Spirostomum minus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'euplotida', name: 'Euplotida', scientificName: 'Euplotida', rank: 'order', speciesCount: 300,
              children: [
                { id: 'euplotidae', name: 'Euplotidae', scientificName: 'Euplotidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'euplotes', name: 'Euplotes', scientificName: 'Euplotes', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'euplotes-eurystomus', name: 'Wide-mouthed Euplotes', scientificName: 'Euplotes eurystomus', rank: 'species' },
                        { id: 'euplotes-patella', name: 'Kneecap Ciliate', scientificName: 'Euplotes patella', rank: 'species' },
                        { id: 'euplotes-aediculatus', name: 'Temple Euplotes', scientificName: 'Euplotes aediculatus', rank: 'species' }
                      ]
                    },
                    { id: 'diophrys', name: 'Diophrys', scientificName: 'Diophrys', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'diophrys-scutum', name: 'Shield Ciliate', scientificName: 'Diophrys scutum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'aspidiscidae', name: 'Aspidiscidae', scientificName: 'Aspidiscidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'aspidisca', name: 'Aspidisca', scientificName: 'Aspidisca', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'aspidisca-costata', name: 'Ribbed Aspidisca', scientificName: 'Aspidisca costata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'oligotrichida', name: 'Tintinnids', scientificName: 'Oligotrichida', rank: 'order', speciesCount: 500,
              children: [
                { id: 'tintinnidae', name: 'Tintinnidae', scientificName: 'Tintinnidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'tintinnidium', name: 'Tintinnidium', scientificName: 'Tintinnidium', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'tintinnidium-fluviatile', name: 'Freshwater Tintinnid', scientificName: 'Tintinnidium fluviatile', rank: 'species' }
                      ]
                    },
                    { id: 'tintinnopsis', name: 'Tintinnopsis', scientificName: 'Tintinnopsis', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'tintinnopsis-beroidea', name: 'Marine Tintinnid', scientificName: 'Tintinnopsis beroidea', rank: 'species' }
                      ]
                    },
                    { id: 'favella', name: 'Favella', scientificName: 'Favella', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'favella-ehrenbergii', name: 'Ehrenberg Favella', scientificName: 'Favella ehrenbergii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'strombidiidae', name: 'Strombidiidae', scientificName: 'Strombidiidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'strombidium', name: 'Strombidium', scientificName: 'Strombidium', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'strombidium-sulcatum', name: 'Grooved Strombidium', scientificName: 'Strombidium sulcatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'hypotrichida', name: 'Hypotrichida', scientificName: 'Hypotrichida', rank: 'order', speciesCount: 400,
              children: [
                { id: 'oxytrichidae', name: 'Oxytrichidae', scientificName: 'Oxytrichidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'oxytricha', name: 'Oxytricha', scientificName: 'Oxytricha', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'oxytricha-fallax', name: 'Fallax Oxytricha', scientificName: 'Oxytricha fallax', rank: 'species' },
                        { id: 'oxytricha-trifallax', name: 'Model Hypotrich', scientificName: 'Oxytricha trifallax', rank: 'species' }
                      ]
                    },
                    { id: 'stylonychia', name: 'Stylonychia', scientificName: 'Stylonychia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'stylonychia-mytilus', name: 'Mussel Stylonychia', scientificName: 'Stylonychia mytilus', rank: 'species' },
                        { id: 'stylonychia-lemnae', name: 'Duckweed Stylonychia', scientificName: 'Stylonychia lemnae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'urostylidae', name: 'Urostylidae', scientificName: 'Urostylidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'urostyla', name: 'Urostyla', scientificName: 'Urostyla', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'urostyla-grandis', name: 'Grand Urostyla', scientificName: 'Urostyla grandis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'stichotrichida', name: 'Stichotrichida', scientificName: 'Stichotrichida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'amphisiellidae', name: 'Amphisiellidae', scientificName: 'Amphisiellidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'amphisiella', name: 'Amphisiella', scientificName: 'Amphisiella', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'amphisiella-milnei', name: 'Milne Amphisiella', scientificName: 'Amphisiella milnei', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'karyorelictea', name: 'Karyorelictea', scientificName: 'Karyorelictea', rank: 'class', speciesCount: 150,
          children: [
            { id: 'protostomatida', name: 'Protostomatida', scientificName: 'Protostomatida', rank: 'order', speciesCount: 50,
              children: [
                { id: 'trachelocercidae', name: 'Trachelocercidae', scientificName: 'Trachelocercidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'trachelocerca', name: 'Trachelocerca', scientificName: 'Trachelocerca', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'trachelocerca-phoenicopterus', name: 'Flamingo Ciliate', scientificName: 'Trachelocerca phoenicopterus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'loxodida', name: 'Loxodida', scientificName: 'Loxodida', rank: 'order', speciesCount: 60,
              children: [
                { id: 'loxodidae', name: 'Loxodidae', scientificName: 'Loxodidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'loxodes', name: 'Loxodes', scientificName: 'Loxodes', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'loxodes-magnus', name: 'Large Loxodes', scientificName: 'Loxodes magnus', rank: 'species' },
                        { id: 'loxodes-striatus', name: 'Striped Loxodes', scientificName: 'Loxodes striatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'colpodea', name: 'Colpodea', scientificName: 'Colpodea', rank: 'class', speciesCount: 200,
          children: [
            { id: 'colpodida', name: 'Colpodida', scientificName: 'Colpodida', rank: 'order', speciesCount: 150,
              children: [
                { id: 'colpodidae', name: 'Colpodidae', scientificName: 'Colpodidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'colpoda', name: 'Colpoda', scientificName: 'Colpoda', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'colpoda-cucullus', name: 'Hooded Colpoda', scientificName: 'Colpoda cucullus', rank: 'species' },
                        { id: 'colpoda-steinii', name: 'Stein Colpoda', scientificName: 'Colpoda steinii', rank: 'species' },
                        { id: 'colpoda-inflata', name: 'Inflated Colpoda', scientificName: 'Colpoda inflata', rank: 'species' }
                      ]
                    },
                    { id: 'tillina', name: 'Tillina', scientificName: 'Tillina', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'tillina-magna', name: 'Large Tillina', scientificName: 'Tillina magna', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'grossglockneriidae', name: 'Grossglockneriidae', scientificName: 'Grossglockneriidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'pseudoplatyophrya', name: 'Pseudoplatyophrya', scientificName: 'Pseudoplatyophrya', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'pseudoplatyophrya-nana', name: 'Dwarf Pseudoplatyophrya', scientificName: 'Pseudoplatyophrya nana', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'bursariomorphida', name: 'Bursariomorphida', scientificName: 'Bursariomorphida', rank: 'order', speciesCount: 30,
              children: [
                { id: 'bursariidae', name: 'Bursariidae', scientificName: 'Bursariidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'bursaria', name: 'Bursaria', scientificName: 'Bursaria', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'bursaria-truncatella', name: 'Truncate Bursaria', scientificName: 'Bursaria truncatella', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'litostomatea', name: 'Litostomatea', scientificName: 'Litostomatea', rank: 'class', speciesCount: 1000,
          children: [
            { id: 'haptorida', name: 'Haptorida', scientificName: 'Haptorida', rank: 'order', speciesCount: 400,
              children: [
                { id: 'didiniidae', name: 'Didiniidae', scientificName: 'Didiniidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'didinium', name: 'Didinium', scientificName: 'Didinium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'didinium-nasutum', name: 'Paramecium Hunter', scientificName: 'Didinium nasutum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dileptidae', name: 'Dileptidae', scientificName: 'Dileptidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'lacrymaria', name: 'Teardrop Ciliates', scientificName: 'Lacrymaria', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'lacrymaria-olor', name: 'Swan-necked Ciliate', scientificName: 'Lacrymaria olor', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'trichostomatida', name: 'Trichostomatida', scientificName: 'Trichostomatida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'balantidiidae', name: 'Balantidiidae', scientificName: 'Balantidiidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'balantidium', name: 'Balantidium', scientificName: 'Balantidium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'balantidium-coli', name: 'Ciliate Parasite', scientificName: 'Balantidium coli', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'phyllopharyngea', name: 'Suctorians', scientificName: 'Phyllopharyngea', rank: 'class', speciesCount: 500 }
      ]
    },
    {
      id: 'apicomplexa',
      name: 'Apicomplexans',
      scientificName: 'Apicomplexa',
      rank: 'phylum',
      description: 'Obligate parasites with apical complex, including malaria and toxoplasmosis agents',
      speciesCount: 6000,
      children: [
        { id: 'aconoidasida', name: 'Aconoidasida', scientificName: 'Aconoidasida', rank: 'class', speciesCount: 3000,
          children: [
            { id: 'haemosporida', name: 'Blood Parasites', scientificName: 'Haemosporida', rank: 'order', speciesCount: 500,
              children: [
                { id: 'plasmodiidae', name: 'Malaria Parasites', scientificName: 'Plasmodiidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'plasmodium', name: 'Malaria Parasites', scientificName: 'Plasmodium', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'plasmodium-falciparum', name: 'Malignant Malaria Parasite', scientificName: 'Plasmodium falciparum', rank: 'species' },
                        { id: 'plasmodium-vivax', name: 'Benign Malaria Parasite', scientificName: 'Plasmodium vivax', rank: 'species' },
                        { id: 'plasmodium-malariae', name: 'Quartan Malaria', scientificName: 'Plasmodium malariae', rank: 'species' },
                        { id: 'plasmodium-ovale', name: 'Ovale Malaria', scientificName: 'Plasmodium ovale', rank: 'species' },
                        { id: 'plasmodium-knowlesi', name: 'Monkey Malaria', scientificName: 'Plasmodium knowlesi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'piroplasmorida', name: 'Piroplasmorida', scientificName: 'Piroplasmorida', rank: 'order', speciesCount: 300,
              children: [
                { id: 'babesiidae', name: 'Babesiidae', scientificName: 'Babesiidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'babesia', name: 'Babesia', scientificName: 'Babesia', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'babesia-microti', name: 'Babesiosis Parasite', scientificName: 'Babesia microti', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'conoidasida', name: 'Conoidasida', scientificName: 'Conoidasida', rank: 'class', speciesCount: 2500,
          children: [
            { id: 'eucoccidiorida', name: 'Eucoccidiorida', scientificName: 'Eucoccidiorida', rank: 'order', speciesCount: 2000,
              children: [
                { id: 'sarcocystidae', name: 'Sarcocystidae', scientificName: 'Sarcocystidae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'toxoplasma', name: 'Toxoplasma', scientificName: 'Toxoplasma', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'toxoplasma-gondii', name: 'Toxoplasmosis Parasite', scientificName: 'Toxoplasma gondii', rank: 'species' }
                      ]
                    },
                    { id: 'sarcocystis', name: 'Sarcocystis', scientificName: 'Sarcocystis', rank: 'genus', speciesCount: 200 }
                  ]
                },
                { id: 'cryptosporidiidae', name: 'Cryptosporidiidae', scientificName: 'Cryptosporidiidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'cryptosporidium', name: 'Cryptosporidium', scientificName: 'Cryptosporidium', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'cryptosporidium-parvum', name: 'Cryptosporidiosis Parasite', scientificName: 'Cryptosporidium parvum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'eimeriidae', name: 'Eimeriidae', scientificName: 'Eimeriidae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'eimeria', name: 'Coccidians', scientificName: 'Eimeria', rank: 'genus', speciesCount: 1000,
                      children: [
                        { id: 'eimeria-tenella', name: 'Chicken Coccidiosis', scientificName: 'Eimeria tenella', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'gregarinasina', name: 'Gregarines', scientificName: 'Gregarinasina', rank: 'class', speciesCount: 500,
          children: [
            { id: 'eugregarinorida', name: 'Eugregarinorida', scientificName: 'Eugregarinorida', rank: 'order', speciesCount: 350,
              children: [
                { id: 'gregarinidae', name: 'Gregarinidae', scientificName: 'Gregarinidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'gregarina', name: 'Gregarina', scientificName: 'Gregarina', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'gregarina-blattarum', name: 'Cockroach Gregarine', scientificName: 'Gregarina blattarum', rank: 'species' },
                        { id: 'gregarina-polymorpha', name: 'Polymorphic Gregarine', scientificName: 'Gregarina polymorpha', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lecudinidae', name: 'Lecudinidae', scientificName: 'Lecudinidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'lecudina', name: 'Lecudina', scientificName: 'Lecudina', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'lecudina-pellucida', name: 'Clear Gregarine', scientificName: 'Lecudina pellucida', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'monocystidae', name: 'Monocystidae', scientificName: 'Monocystidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'monocystis', name: 'Monocystis', scientificName: 'Monocystis', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'monocystis-lumbrici', name: 'Earthworm Gregarine', scientificName: 'Monocystis lumbrici', rank: 'species' },
                        { id: 'monocystis-agilis', name: 'Agile Monocystis', scientificName: 'Monocystis agilis', rank: 'species' }
                      ]
                    },
                    { id: 'nematocystis', name: 'Nematocystis', scientificName: 'Nematocystis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'nematocystis-magna', name: 'Large Nematocystis', scientificName: 'Nematocystis magna', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'neogregarinorida', name: 'Neogregarinorida', scientificName: 'Neogregarinorida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'ophryocystidae', name: 'Ophryocystidae', scientificName: 'Ophryocystidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'ophryocystis', name: 'Ophryocystis', scientificName: 'Ophryocystis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'ophryocystis-elektroscirrha', name: 'Monarch Parasite', scientificName: 'Ophryocystis elektroscirrha', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mattesiidae', name: 'Mattesiidae', scientificName: 'Mattesiidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'mattesia', name: 'Mattesia', scientificName: 'Mattesia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'mattesia-dispora', name: 'Two-spored Mattesia', scientificName: 'Mattesia dispora', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'archigregarinorida', name: 'Archigregarinorida', scientificName: 'Archigregarinorida', rank: 'order', speciesCount: 50,
              children: [
                { id: 'selenidiidae', name: 'Selenidiidae', scientificName: 'Selenidiidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'selenidium', name: 'Selenidium', scientificName: 'Selenidium', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'selenidium-serpulae', name: 'Worm Gregarine', scientificName: 'Selenidium serpulae', rank: 'species' }
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
      id: 'euglenozoa',
      name: 'Euglenids & Kinetoplastids',
      scientificName: 'Euglenozoa',
      rank: 'phylum',
      description: 'Flagellated protists including photosynthetic euglenids and parasitic trypanosomes',
      speciesCount: 2000,
      children: [
        { id: 'euglenida', name: 'Euglenids', scientificName: 'Euglenida', rank: 'class', speciesCount: 1000,
          children: [
            { id: 'euglenales', name: 'Euglenales', scientificName: 'Euglenales', rank: 'order', speciesCount: 500,
              children: [
                { id: 'euglenaceae', name: 'Euglenaceae', scientificName: 'Euglenaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'euglena', name: 'Euglena', scientificName: 'Euglena', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'euglena-gracilis', name: 'Green Euglena', scientificName: 'Euglena gracilis', rank: 'species' },
                        { id: 'euglena-viridis', name: 'Common Euglena', scientificName: 'Euglena viridis', rank: 'species' },
                        { id: 'euglena-sanguinea', name: 'Blood-red Euglena', scientificName: 'Euglena sanguinea', rank: 'species' },
                        { id: 'euglena-mutabilis', name: 'Acid-tolerant Euglena', scientificName: 'Euglena mutabilis', rank: 'species' }
                      ]
                    },
                    { id: 'phacus', name: 'Leaf Euglenids', scientificName: 'Phacus', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'phacus-pleuronectes', name: 'Flatfish Phacus', scientificName: 'Phacus pleuronectes', rank: 'species' },
                        { id: 'phacus-longicauda', name: 'Long-tailed Phacus', scientificName: 'Phacus longicauda', rank: 'species' }
                      ]
                    },
                    { id: 'lepocinclis', name: 'Lepocinclis', scientificName: 'Lepocinclis', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'lepocinclis-ovum', name: 'Egg Lepocinclis', scientificName: 'Lepocinclis ovum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phacaceae', name: 'Phacaceae', scientificName: 'Phacaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'trachelomonas', name: 'Trachelomonas', scientificName: 'Trachelomonas', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'trachelomonas-hispida', name: 'Spiny Trachelomonas', scientificName: 'Trachelomonas hispida', rank: 'species' },
                        { id: 'trachelomonas-volvocina', name: 'Volvox-like Trachelomonas', scientificName: 'Trachelomonas volvocina', rank: 'species' }
                      ]
                    },
                    { id: 'strombomonas', name: 'Strombomonas', scientificName: 'Strombomonas', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'strombomonas-acuminata', name: 'Pointed Strombomonas', scientificName: 'Strombomonas acuminata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'eutreptiales', name: 'Eutreptiales', scientificName: 'Eutreptiales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'eutreptiaceae', name: 'Eutreptiaceae', scientificName: 'Eutreptiaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'eutreptiella', name: 'Eutreptiella', scientificName: 'Eutreptiella', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'eutreptiella-gymnastica', name: 'Gymnastic Euglenid', scientificName: 'Eutreptiella gymnastica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'heteronematales', name: 'Heteronematales', scientificName: 'Heteronematales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'peranemaceae', name: 'Peranemaceae', scientificName: 'Peranemaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'peranema', name: 'Peranema', scientificName: 'Peranema', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'peranema-trichophorum', name: 'Hair-bearing Peranema', scientificName: 'Peranema trichophorum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'diplonemea', name: 'Diplonemea', scientificName: 'Diplonemea', rank: 'class', speciesCount: 200,
          children: [
            { id: 'diplonemida', name: 'Diplonemida', scientificName: 'Diplonemida', rank: 'order', speciesCount: 150,
              children: [
                { id: 'diplonemidae', name: 'Diplonemidae', scientificName: 'Diplonemidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'diplonema', name: 'Diplonema', scientificName: 'Diplonema', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'diplonema-papillatum', name: 'Nippled Diplonema', scientificName: 'Diplonema papillatum', rank: 'species' },
                        { id: 'diplonema-ambulator', name: 'Walking Diplonema', scientificName: 'Diplonema ambulator', rank: 'species' }
                      ]
                    },
                    { id: 'rhynchopus', name: 'Rhynchopus', scientificName: 'Rhynchopus', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'rhynchopus-euleeides', name: 'Good-form Rhynchopus', scientificName: 'Rhynchopus euleeides', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hemistasiidae', name: 'Hemistasiidae', scientificName: 'Hemistasiidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'hemistasia', name: 'Hemistasia', scientificName: 'Hemistasia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'hemistasia-phaeocysticola', name: 'Phaeocystis Parasite', scientificName: 'Hemistasia phaeocysticola', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'kinetoplastida', name: 'Kinetoplastids', scientificName: 'Kinetoplastida', rank: 'class', speciesCount: 800,
          children: [
            { id: 'trypanosomatida', name: 'Trypanosomatida', scientificName: 'Trypanosomatida', rank: 'order', speciesCount: 600,
              children: [
                { id: 'trypanosomatidae', name: 'Trypanosomatidae', scientificName: 'Trypanosomatidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'trypanosoma', name: 'Trypanosomes', scientificName: 'Trypanosoma', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'trypanosoma-brucei', name: 'Sleeping Sickness Parasite', scientificName: 'Trypanosoma brucei', rank: 'species' },
                        { id: 'trypanosoma-cruzi', name: 'Chagas Disease Parasite', scientificName: 'Trypanosoma cruzi', rank: 'species' },
                        { id: 'trypanosoma-congolense', name: 'Nagana Parasite', scientificName: 'Trypanosoma congolense', rank: 'species' },
                        { id: 'trypanosoma-vivax', name: 'Cattle Trypanosoma', scientificName: 'Trypanosoma vivax', rank: 'species' },
                        { id: 'trypanosoma-evansi', name: 'Surra Parasite', scientificName: 'Trypanosoma evansi', rank: 'species' },
                        { id: 'trypanosoma-equiperdum', name: 'Dourine Parasite', scientificName: 'Trypanosoma equiperdum', rank: 'species' }
                      ]
                    },
                    { id: 'leishmania', name: 'Leishmania', scientificName: 'Leishmania', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'leishmania-donovani', name: 'Visceral Leishmaniasis Parasite', scientificName: 'Leishmania donovani', rank: 'species' },
                        { id: 'leishmania-major', name: 'Cutaneous Leishmaniasis', scientificName: 'Leishmania major', rank: 'species' },
                        { id: 'leishmania-tropica', name: 'Oriental Sore Parasite', scientificName: 'Leishmania tropica', rank: 'species' },
                        { id: 'leishmania-braziliensis', name: 'Mucocutaneous Leishmaniasis', scientificName: 'Leishmania braziliensis', rank: 'species' },
                        { id: 'leishmania-infantum', name: 'Infantile Leishmaniasis', scientificName: 'Leishmania infantum', rank: 'species' }
                      ]
                    },
                    { id: 'phytomonas', name: 'Phytomonas', scientificName: 'Phytomonas', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'phytomonas-serpens', name: 'Tomato Phytomonas', scientificName: 'Phytomonas serpens', rank: 'species' }
                      ]
                    },
                    { id: 'crithidia', name: 'Crithidia', scientificName: 'Crithidia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'crithidia-fasciculata', name: 'Mosquito Trypanosomatid', scientificName: 'Crithidia fasciculata', rank: 'species' }
                      ]
                    },
                    { id: 'leptomonas', name: 'Leptomonas', scientificName: 'Leptomonas', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'leptomonas-pyrrhocoris', name: 'Bug Leptomonas', scientificName: 'Leptomonas pyrrhocoris', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'bodonida', name: 'Bodonida', scientificName: 'Bodonida', rank: 'order', speciesCount: 150,
              children: [
                { id: 'bodonidae', name: 'Bodonidae', scientificName: 'Bodonidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'bodo', name: 'Bodo', scientificName: 'Bodo', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'bodo-saltans', name: 'Jumping Bodo', scientificName: 'Bodo saltans', rank: 'species' },
                        { id: 'bodo-caudatus', name: 'Tailed Bodo', scientificName: 'Bodo caudatus', rank: 'species' }
                      ]
                    },
                    { id: 'neobodo', name: 'Neobodo', scientificName: 'Neobodo', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'neobodo-designis', name: 'Common Neobodo', scientificName: 'Neobodo designis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cryptobiidae', name: 'Cryptobiidae', scientificName: 'Cryptobiidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'cryptobia', name: 'Cryptobia', scientificName: 'Cryptobia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'cryptobia-salmositica', name: 'Salmon Cryptobia', scientificName: 'Cryptobia salmositica', rank: 'species' }
                      ]
                    },
                    { id: 'trypanoplasma', name: 'Trypanoplasma', scientificName: 'Trypanoplasma', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'trypanoplasma-borreli', name: 'Fish Blood Parasite', scientificName: 'Trypanoplasma borreli', rank: 'species' }
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
      id: 'foraminifera',
      name: 'Foraminiferans',
      scientificName: 'Foraminifera',
      rank: 'phylum',
      description: 'Shell-building protists crucial to marine sediments and paleoclimate research',
      speciesCount: 10000,
      children: [
        { id: 'globothalamea', name: 'Globothalamea', scientificName: 'Globothalamea', rank: 'class', speciesCount: 5000,
          children: [
            { id: 'rotaliida', name: 'Rotaliida', scientificName: 'Rotaliida', rank: 'order', speciesCount: 3000,
              children: [
                { id: 'globigerinidae', name: 'Globigerinidae', scientificName: 'Globigerinidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'globigerina', name: 'Globe Forams', scientificName: 'Globigerina', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'globigerina-bulloides', name: 'Common Planktonic Foram', scientificName: 'Globigerina bulloides', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nummulitidae', name: 'Nummulites', scientificName: 'Nummulitidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'nummulites', name: 'Coin Stones', scientificName: 'Nummulites', rank: 'genus', speciesCount: 50 }
                  ]
                },
                { id: 'amphisteginidae', name: 'Amphisteginidae', scientificName: 'Amphisteginidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'amphistegina', name: 'Reef Forams', scientificName: 'Amphistegina', rank: 'genus', speciesCount: 15 }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'tubothalamea', name: 'Tubothalamea', scientificName: 'Tubothalamea', rank: 'class', speciesCount: 2000,
          children: [
            { id: 'miliolida', name: 'Miliolida', scientificName: 'Miliolida', rank: 'order', speciesCount: 1200,
              children: [
                { id: 'miliolidae', name: 'Miliolidae', scientificName: 'Miliolidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'quinqueloculina', name: 'Quinqueloculina', scientificName: 'Quinqueloculina', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'quinqueloculina-seminulum', name: 'Common Milio', scientificName: 'Quinqueloculina seminulum', rank: 'species' }
                      ]
                    },
                    { id: 'triloculina', name: 'Triloculina', scientificName: 'Triloculina', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'triloculina-trigonula', name: 'Triangular Milio', scientificName: 'Triloculina trigonula', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'spiroloculinidae', name: 'Spiroloculinidae', scientificName: 'Spiroloculinidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'spiroloculina', name: 'Spiroloculina', scientificName: 'Spiroloculina', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'spiroloculina-depressa', name: 'Flat Spiroloculina', scientificName: 'Spiroloculina depressa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hauerinidae', name: 'Hauerinidae', scientificName: 'Hauerinidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'cycloforina', name: 'Cycloforina', scientificName: 'Cycloforina', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'cycloforina-contorta', name: 'Twisted Cycloforina', scientificName: 'Cycloforina contorta', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'monothalamea', name: 'Monothalamea', scientificName: 'Monothalamea', rank: 'class', speciesCount: 1000,
          children: [
            { id: 'allogromiida', name: 'Allogromiida', scientificName: 'Allogromiida', rank: 'order', speciesCount: 500,
              children: [
                { id: 'xenophyophoridae', name: 'Giant Forams', scientificName: 'Xenophyophoridae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'syringammina', name: 'Syringammina', scientificName: 'Syringammina', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'syringammina-fragilissima', name: 'Giant Deep-sea Foram', scientificName: 'Syringammina fragilissima', rank: 'species' }
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
      id: 'rhodophyta',
      name: 'Red Algae',
      scientificName: 'Rhodophyta',
      rank: 'phylum',
      description: 'Photosynthetic protists, many are important seaweeds',
      speciesCount: 7000,
      children: [
        { id: 'cyanidiophyceae', name: 'Cyanidiophyceae', scientificName: 'Cyanidiophyceae', rank: 'class', speciesCount: 50,
          children: [
            { id: 'cyanidiales', name: 'Cyanidiales', scientificName: 'Cyanidiales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'cyanidiaceae', name: 'Cyanidiaceae', scientificName: 'Cyanidiaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'cyanidium', name: 'Cyanidium', scientificName: 'Cyanidium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'cyanidium-caldarium', name: 'Hot Spring Red Alga', scientificName: 'Cyanidium caldarium', rank: 'species' }
                      ]
                    },
                    { id: 'cyanidioschyzon', name: 'Cyanidioschyzon', scientificName: 'Cyanidioschyzon', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'cyanidioschyzon-merolae', name: 'Model Extremophile Alga', scientificName: 'Cyanidioschyzon merolae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'galdieriaceae', name: 'Galdieriaceae', scientificName: 'Galdieriaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'galdieria', name: 'Galdieria', scientificName: 'Galdieria', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'galdieria-sulphuraria', name: 'Sulfur Spring Alga', scientificName: 'Galdieria sulphuraria', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'florideophyceae', name: 'Florideophyceae', scientificName: 'Florideophyceae', rank: 'class', speciesCount: 6000,
          children: [
            { id: 'gigartinales', name: 'Gigartinales', scientificName: 'Gigartinales', rank: 'order', speciesCount: 500,
              children: [
                { id: 'gigartinaceae', name: 'Gigartinaceae', scientificName: 'Gigartinaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'chondrus', name: 'Irish Moss', scientificName: 'Chondrus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'chondrus-crispus', name: 'Irish Moss', scientificName: 'Chondrus crispus', rank: 'species' }
                      ]
                    },
                    { id: 'gigartina', name: 'Gigartina', scientificName: 'Gigartina', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'gigartina-skottsbergii', name: 'Carrageen Alga', scientificName: 'Gigartina skottsbergii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phyllophoraceae', name: 'Phyllophoraceae', scientificName: 'Phyllophoraceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'mastocarpus', name: 'Mastocarpus', scientificName: 'Mastocarpus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'mastocarpus-stellatus', name: 'False Irish Moss', scientificName: 'Mastocarpus stellatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'gracilariales', name: 'Gracilariales', scientificName: 'Gracilariales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'gracilariaceae', name: 'Gracilariaceae', scientificName: 'Gracilariaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'gracilaria', name: 'Agar Seaweed', scientificName: 'Gracilaria', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'gracilaria-vermiculophylla', name: 'Agar Weed', scientificName: 'Gracilaria vermiculophylla', rank: 'species' },
                        { id: 'gracilaria-gracilis', name: 'Slender Gracilaria', scientificName: 'Gracilaria gracilis', rank: 'species' }
                      ]
                    },
                    { id: 'gracilariopsis', name: 'Gracilariopsis', scientificName: 'Gracilariopsis', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'gracilariopsis-lemaneiformis', name: 'Asian Agar Seaweed', scientificName: 'Gracilariopsis lemaneiformis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'bangiales', name: 'Bangiales', scientificName: 'Bangiales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'bangiaceae', name: 'Bangiaceae', scientificName: 'Bangiaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'pyropia', name: 'Nori', scientificName: 'Pyropia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'pyropia-yezoensis', name: 'Nori Seaweed', scientificName: 'Pyropia yezoensis', rank: 'species' },
                        { id: 'pyropia-tenera', name: 'Asakusa Nori', scientificName: 'Pyropia tenera', rank: 'species' }
                      ]
                    },
                    { id: 'porphyra', name: 'Porphyra', scientificName: 'Porphyra', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'porphyra-umbilicalis', name: 'Laver', scientificName: 'Porphyra umbilicalis', rank: 'species' },
                        { id: 'porphyra-purpurea', name: 'Purple Laver', scientificName: 'Porphyra purpurea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'corallinales', name: 'Coralline Algae', scientificName: 'Corallinales', rank: 'order', speciesCount: 700,
              children: [
                { id: 'corallinaceae', name: 'Corallinaceae', scientificName: 'Corallinaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'lithothamnion', name: 'Maerl', scientificName: 'Lithothamnion', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'lithothamnion-glaciale', name: 'Arctic Maerl', scientificName: 'Lithothamnion glaciale', rank: 'species' }
                      ]
                    },
                    { id: 'corallina', name: 'Corallina', scientificName: 'Corallina', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'corallina-officinalis', name: 'Common Coral Weed', scientificName: 'Corallina officinalis', rank: 'species' }
                      ]
                    },
                    { id: 'lithophyllum', name: 'Lithophyllum', scientificName: 'Lithophyllum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'lithophyllum-incrustans', name: 'Encrusting Coralline', scientificName: 'Lithophyllum incrustans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'ceramiales', name: 'Ceramiales', scientificName: 'Ceramiales', rank: 'order', speciesCount: 1500,
              children: [
                { id: 'ceramiaceae', name: 'Ceramiaceae', scientificName: 'Ceramiaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'ceramium', name: 'Ceramium', scientificName: 'Ceramium', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'ceramium-rubrum', name: 'Red Ceramium', scientificName: 'Ceramium rubrum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhodomelaceae', name: 'Rhodomelaceae', scientificName: 'Rhodomelaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'polysiphonia', name: 'Polysiphonia', scientificName: 'Polysiphonia', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'polysiphonia-lanosa', name: 'Rockweed Epiphyte', scientificName: 'Polysiphonia lanosa', rank: 'species' }
                      ]
                    },
                    { id: 'laurencia', name: 'Laurencia', scientificName: 'Laurencia', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'laurencia-obtusa', name: 'Blunt Laurencia', scientificName: 'Laurencia obtusa', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'gelidiales', name: 'Gelidiales', scientificName: 'Gelidiales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'gelidiaceae', name: 'Gelidiaceae', scientificName: 'Gelidiaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'gelidium', name: 'Gelidium', scientificName: 'Gelidium', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'gelidium-amansii', name: 'Agar-agar Seaweed', scientificName: 'Gelidium amansii', rank: 'species' },
                        { id: 'gelidium-corneum', name: 'Horned Gelidium', scientificName: 'Gelidium corneum', rank: 'species' }
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
      id: 'chlorophyta',
      name: 'Green Algae',
      scientificName: 'Chlorophyta',
      rank: 'phylum',
      description: 'Photosynthetic protists closely related to land plants',
      speciesCount: 8000,
      children: [
        { id: 'prasinophyceae', name: 'Prasinophyceae', scientificName: 'Prasinophyceae', rank: 'class', speciesCount: 500,
          children: [
            { id: 'pyramimonadales', name: 'Pyramimonadales', scientificName: 'Pyramimonadales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'pyramimonadaceae', name: 'Pyramimonadaceae', scientificName: 'Pyramimonadaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'pyramimonas', name: 'Pyramimonas', scientificName: 'Pyramimonas', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'pyramimonas-parkeae', name: 'Park Pyramimonas', scientificName: 'Pyramimonas parkeae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'mamiellales', name: 'Mamiellales', scientificName: 'Mamiellales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'mamiellaceae', name: 'Mamiellaceae', scientificName: 'Mamiellaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'ostreococcus', name: 'Ostreococcus', scientificName: 'Ostreococcus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'ostreococcus-tauri', name: 'Smallest Eukaryote', scientificName: 'Ostreococcus tauri', rank: 'species' }
                      ]
                    },
                    { id: 'micromonas', name: 'Micromonas', scientificName: 'Micromonas', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'micromonas-pusilla', name: 'Tiny Micromonas', scientificName: 'Micromonas pusilla', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bathycoccaceae', name: 'Bathycoccaceae', scientificName: 'Bathycoccaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'bathycoccus', name: 'Bathycoccus', scientificName: 'Bathycoccus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'bathycoccus-prasinos', name: 'Deep-water Picoplankton', scientificName: 'Bathycoccus prasinos', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'chlorodendrales', name: 'Chlorodendrales', scientificName: 'Chlorodendrales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'chlorodendraceae', name: 'Chlorodendraceae', scientificName: 'Chlorodendraceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'tetraselmis', name: 'Tetraselmis', scientificName: 'Tetraselmis', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'tetraselmis-suecica', name: 'Swedish Tetraselmis', scientificName: 'Tetraselmis suecica', rank: 'species' },
                        { id: 'tetraselmis-chuii', name: 'Aquaculture Feed Alga', scientificName: 'Tetraselmis chuii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'chlorophyceae', name: 'Chlorophyceae', scientificName: 'Chlorophyceae', rank: 'class', speciesCount: 3500,
          children: [
            { id: 'volvocales', name: 'Volvocales', scientificName: 'Volvocales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'chlamydomonadaceae', name: 'Chlamydomonadaceae', scientificName: 'Chlamydomonadaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'chlamydomonas', name: 'Chlamydomonas', scientificName: 'Chlamydomonas', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'chlamydomonas-reinhardtii', name: 'Model Green Alga', scientificName: 'Chlamydomonas reinhardtii', rank: 'species' },
                        { id: 'chlamydomonas-nivalis', name: 'Watermelon Snow Alga', scientificName: 'Chlamydomonas nivalis', rank: 'species' },
                        { id: 'chlamydomonas-moewusii', name: 'Moewus Chlamydomonas', scientificName: 'Chlamydomonas moewusii', rank: 'species' }
                      ]
                    },
                    { id: 'dunaliella', name: 'Dunaliella', scientificName: 'Dunaliella', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'dunaliella-salina', name: 'Salt Pond Alga', scientificName: 'Dunaliella salina', rank: 'species' },
                        { id: 'dunaliella-tertiolecta', name: 'Marine Dunaliella', scientificName: 'Dunaliella tertiolecta', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'volvocaceae', name: 'Volvocaceae', scientificName: 'Volvocaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'volvox', name: 'Globe Algae', scientificName: 'Volvox', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'volvox-carteri', name: 'Colony Alga', scientificName: 'Volvox carteri', rank: 'species' },
                        { id: 'volvox-aureus', name: 'Golden Volvox', scientificName: 'Volvox aureus', rank: 'species' },
                        { id: 'volvox-globator', name: 'Sphere Volvox', scientificName: 'Volvox globator', rank: 'species' }
                      ]
                    },
                    { id: 'gonium', name: 'Gonium', scientificName: 'Gonium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'gonium-pectorale', name: 'Flat Colony Alga', scientificName: 'Gonium pectorale', rank: 'species' }
                      ]
                    },
                    { id: 'pandorina', name: 'Pandorina', scientificName: 'Pandorina', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'pandorina-morum', name: 'Mulberry Alga', scientificName: 'Pandorina morum', rank: 'species' }
                      ]
                    },
                    { id: 'eudorina', name: 'Eudorina', scientificName: 'Eudorina', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'eudorina-elegans', name: 'Elegant Eudorina', scientificName: 'Eudorina elegans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'sphaeropleales', name: 'Sphaeropleales', scientificName: 'Sphaeropleales', rank: 'order', speciesCount: 800,
              children: [
                { id: 'haematococcaceae', name: 'Haematococcaceae', scientificName: 'Haematococcaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'haematococcus', name: 'Blood Rain Alga', scientificName: 'Haematococcus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'haematococcus-pluvialis', name: 'Astaxanthin Alga', scientificName: 'Haematococcus pluvialis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scenedesmaceae', name: 'Scenedesmaceae', scientificName: 'Scenedesmaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'scenedesmus', name: 'Scenedesmus', scientificName: 'Scenedesmus', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'scenedesmus-obliquus', name: 'Oblique Scenedesmus', scientificName: 'Scenedesmus obliquus', rank: 'species' },
                        { id: 'scenedesmus-quadricauda', name: 'Four-tailed Scenedesmus', scientificName: 'Scenedesmus quadricauda', rank: 'species' }
                      ]
                    },
                    { id: 'desmodesmus', name: 'Desmodesmus', scientificName: 'Desmodesmus', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'desmodesmus-armatus', name: 'Armed Desmodesmus', scientificName: 'Desmodesmus armatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hydrodictyaceae', name: 'Hydrodictyaceae', scientificName: 'Hydrodictyaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'hydrodictyon', name: 'Water Net', scientificName: 'Hydrodictyon', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'hydrodictyon-reticulatum', name: 'Water Net', scientificName: 'Hydrodictyon reticulatum', rank: 'species' }
                      ]
                    },
                    { id: 'pediastrum', name: 'Pediastrum', scientificName: 'Pediastrum', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'pediastrum-duplex', name: 'Double Pediastrum', scientificName: 'Pediastrum duplex', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'oedogoniales', name: 'Oedogoniales', scientificName: 'Oedogoniales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'oedogoniaceae', name: 'Oedogoniaceae', scientificName: 'Oedogoniaceae', rank: 'family', speciesCount: 350,
                  children: [
                    { id: 'oedogonium', name: 'Oedogonium', scientificName: 'Oedogonium', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'oedogonium-cardiacum', name: 'Heart-shaped Oedogonium', scientificName: 'Oedogonium cardiacum', rank: 'species' }
                      ]
                    },
                    { id: 'bulbochaete', name: 'Bulbochaete', scientificName: 'Bulbochaete', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'bulbochaete-mirabilis', name: 'Wonderful Bulbochaete', scientificName: 'Bulbochaete mirabilis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'ulvophyceae', name: 'Sea Lettuce Class', scientificName: 'Ulvophyceae', rank: 'class', speciesCount: 2000,
          children: [
            { id: 'ulvales', name: 'Ulvales', scientificName: 'Ulvales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'ulvaceae', name: 'Sea Lettuce', scientificName: 'Ulvaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'ulva', name: 'Sea Lettuce', scientificName: 'Ulva', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'ulva-lactuca', name: 'Sea Lettuce', scientificName: 'Ulva lactuca', rank: 'species' },
                        { id: 'ulva-intestinalis', name: 'Gut Weed', scientificName: 'Ulva intestinalis', rank: 'species' },
                        { id: 'ulva-linza', name: 'Slender Sea Lettuce', scientificName: 'Ulva linza', rank: 'species' }
                      ]
                    },
                    { id: 'enteromorpha', name: 'Enteromorpha', scientificName: 'Enteromorpha', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'enteromorpha-compressa', name: 'Flat Enteromorpha', scientificName: 'Enteromorpha compressa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'monostromataceae', name: 'Monostromataceae', scientificName: 'Monostromataceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'monostroma', name: 'Monostroma', scientificName: 'Monostroma', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'monostroma-grevillei', name: 'Greville Monostroma', scientificName: 'Monostroma grevillei', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'caulerpales', name: 'Caulerpales', scientificName: 'Caulerpales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'caulerpaceae', name: 'Caulerpaceae', scientificName: 'Caulerpaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'caulerpa', name: 'Killer Alga', scientificName: 'Caulerpa', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'caulerpa-taxifolia', name: 'Killer Alga', scientificName: 'Caulerpa taxifolia', rank: 'species' },
                        { id: 'caulerpa-prolifera', name: 'Green Blade', scientificName: 'Caulerpa prolifera', rank: 'species' },
                        { id: 'caulerpa-racemosa', name: 'Sea Grapes', scientificName: 'Caulerpa racemosa', rank: 'species' },
                        { id: 'caulerpa-lentillifera', name: 'Green Caviar', scientificName: 'Caulerpa lentillifera', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'halimedaceae', name: 'Halimedaceae', scientificName: 'Halimedaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'halimeda', name: 'Halimeda', scientificName: 'Halimeda', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'halimeda-tuna', name: 'Tuna Halimeda', scientificName: 'Halimeda tuna', rank: 'species' },
                        { id: 'halimeda-opuntia', name: 'Cactus Halimeda', scientificName: 'Halimeda opuntia', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'codiaceae', name: 'Codiaceae', scientificName: 'Codiaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'codium', name: 'Velvet Fingers', scientificName: 'Codium', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'codium-fragile', name: 'Dead Man Fingers', scientificName: 'Codium fragile', rank: 'species' },
                        { id: 'codium-tomentosum', name: 'Hairy Codium', scientificName: 'Codium tomentosum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'cladophorales', name: 'Cladophorales', scientificName: 'Cladophorales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'cladophoraceae', name: 'Cladophoraceae', scientificName: 'Cladophoraceae', rank: 'family', speciesCount: 250,
                  children: [
                    { id: 'cladophora', name: 'Blanket Weed', scientificName: 'Cladophora', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'cladophora-glomerata', name: 'Common Blanket Weed', scientificName: 'Cladophora glomerata', rank: 'species' },
                        { id: 'cladophora-rupestris', name: 'Rock Cladophora', scientificName: 'Cladophora rupestris', rank: 'species' }
                      ]
                    },
                    { id: 'aegagropila', name: 'Aegagropila', scientificName: 'Aegagropila', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'aegagropila-linnaei', name: 'Marimo Ball', scientificName: 'Aegagropila linnaei', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'trebouxiophyceae', name: 'Trebouxiophyceae', scientificName: 'Trebouxiophyceae', rank: 'class', speciesCount: 500,
          children: [
            { id: 'chlorellales', name: 'Chlorellales', scientificName: 'Chlorellales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'chlorellaceae', name: 'Chlorellaceae', scientificName: 'Chlorellaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'chlorella', name: 'Chlorella', scientificName: 'Chlorella', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'chlorella-vulgaris', name: 'Chlorella', scientificName: 'Chlorella vulgaris', rank: 'species' },
                        { id: 'chlorella-pyrenoidosa', name: 'Pyrenoid Chlorella', scientificName: 'Chlorella pyrenoidosa', rank: 'species' },
                        { id: 'chlorella-sorokiniana', name: 'Sorokin Chlorella', scientificName: 'Chlorella sorokiniana', rank: 'species' }
                      ]
                    },
                    { id: 'auxenochlorella', name: 'Auxenochlorella', scientificName: 'Auxenochlorella', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'auxenochlorella-protothecoides', name: 'Heterotrophic Chlorella', scientificName: 'Auxenochlorella protothecoides', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'oocystaceae', name: 'Oocystaceae', scientificName: 'Oocystaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'oocystis', name: 'Oocystis', scientificName: 'Oocystis', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'oocystis-lacustris', name: 'Lake Oocystis', scientificName: 'Oocystis lacustris', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'trebouxiales', name: 'Trebouxiales', scientificName: 'Trebouxiales', rank: 'order', speciesCount: 150,
              children: [
                { id: 'trebouxiaceae', name: 'Trebouxiaceae', scientificName: 'Trebouxiaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'trebouxia', name: 'Lichen Algae', scientificName: 'Trebouxia', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'trebouxia-decolorans', name: 'Lichen Photobiont', scientificName: 'Trebouxia decolorans', rank: 'species' }
                      ]
                    },
                    { id: 'asterochloris', name: 'Asterochloris', scientificName: 'Asterochloris', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'asterochloris-glomerata', name: 'Clustered Lichen Alga', scientificName: 'Asterochloris glomerata', rank: 'species' }
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
      id: 'radiolaria',
      name: 'Radiolarians',
      scientificName: 'Radiolaria',
      rank: 'phylum',
      description: 'Marine plankton with intricate silica or strontium sulfate skeletons',
      speciesCount: 8000,
      children: [
        { id: 'polycystinea', name: 'Polycystinea', scientificName: 'Polycystinea', rank: 'class', speciesCount: 4000,
          children: [
            { id: 'spumellaria', name: 'Spumellaria', scientificName: 'Spumellaria', rank: 'order', speciesCount: 2000,
              children: [
                { id: 'actinommidae', name: 'Actinommidae', scientificName: 'Actinommidae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'actinomma', name: 'Actinomma', scientificName: 'Actinomma', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'actinomma-antarcticum', name: 'Antarctic Radiolarian', scientificName: 'Actinomma antarcticum', rank: 'species' }
                      ]
                    },
                    { id: 'cenosphaera', name: 'Cenosphaera', scientificName: 'Cenosphaera', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'cenosphaera-cristata', name: 'Crested Radiolarian', scientificName: 'Cenosphaera cristata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'spongodiscidae', name: 'Spongodiscidae', scientificName: 'Spongodiscidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'spongodiscus', name: 'Spongodiscus', scientificName: 'Spongodiscus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'spongodiscus-resurgens', name: 'Risen Sponge-disc', scientificName: 'Spongodiscus resurgens', rank: 'species' }
                      ]
                    },
                    { id: 'dictyocoryne', name: 'Dictyocoryne', scientificName: 'Dictyocoryne', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'dictyocoryne-truncatum', name: 'Truncated Net-club', scientificName: 'Dictyocoryne truncatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'collosphaeridae', name: 'Collosphaeridae', scientificName: 'Collosphaeridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'collosphaera', name: 'Collosphaera', scientificName: 'Collosphaera', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'collosphaera-huxleyi', name: 'Huxley Colonial Radiolarian', scientificName: 'Collosphaera huxleyi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'nassellaria', name: 'Nassellaria', scientificName: 'Nassellaria', rank: 'order', speciesCount: 1500,
              children: [
                { id: 'pterocorythidae', name: 'Pterocorythidae', scientificName: 'Pterocorythidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'pterocorys', name: 'Pterocorys', scientificName: 'Pterocorys', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'pterocorys-hertwigii', name: 'Hertwig Winged-helmet', scientificName: 'Pterocorys hertwigii', rank: 'species' }
                      ]
                    },
                    { id: 'lamprocyrtis', name: 'Lamprocyrtis', scientificName: 'Lamprocyrtis', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'lamprocyrtis-nigriniae', name: 'Black Lamp-basket', scientificName: 'Lamprocyrtis nigriniae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'theoperidae', name: 'Theoperidae', scientificName: 'Theoperidae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'cycladophora', name: 'Cycladophora', scientificName: 'Cycladophora', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'cycladophora-davisiana', name: 'Davis Cycladophora', scientificName: 'Cycladophora davisiana', rank: 'species' }
                      ]
                    },
                    { id: 'eucyrtidium', name: 'Eucyrtidium', scientificName: 'Eucyrtidium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'eucyrtidium-acuminatum', name: 'Pointed True-basket', scientificName: 'Eucyrtidium acuminatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'plagiacanthidae', name: 'Plagiacanthidae', scientificName: 'Plagiacanthidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'lithomelissa', name: 'Lithomelissa', scientificName: 'Lithomelissa', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'lithomelissa-thoracites', name: 'Stone-bee Radiolarian', scientificName: 'Lithomelissa thoracites', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'acantharea', name: 'Acantharea', scientificName: 'Acantharea', rank: 'class', speciesCount: 800,
          children: [
            { id: 'arthracanthida', name: 'Arthracanthida', scientificName: 'Arthracanthida', rank: 'order', speciesCount: 300,
              children: [
                { id: 'acanthometridae', name: 'Acanthometridae', scientificName: 'Acanthometridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'acanthometra', name: 'Acanthometra', scientificName: 'Acanthometra', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'acanthometra-pellucida', name: 'Clear Acanthometra', scientificName: 'Acanthometra pellucida', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lithopteridae', name: 'Lithopteridae', scientificName: 'Lithopteridae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'lithoptera', name: 'Lithoptera', scientificName: 'Lithoptera', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'lithoptera-mulleri', name: 'Muller Stone-wing', scientificName: 'Lithoptera mulleri', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'symphyacanthida', name: 'Symphyacanthida', scientificName: 'Symphyacanthida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'astrolophidae', name: 'Astrolophidae', scientificName: 'Astrolophidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'stauracantha', name: 'Stauracantha', scientificName: 'Stauracantha', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'stauracantha-quadrifurca', name: 'Four-forked Cross-spine', scientificName: 'Stauracantha quadrifurca', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'chaunacanthida', name: 'Chaunacanthida', scientificName: 'Chaunacanthida', rank: 'order', speciesCount: 150,
              children: [
                { id: 'gigartaconidae', name: 'Gigartaconidae', scientificName: 'Gigartaconidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'gigartacon', name: 'Gigartacon', scientificName: 'Gigartacon', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'gigartacon-fragilis', name: 'Fragile Gigartacon', scientificName: 'Gigartacon fragilis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'phaeodarea', name: 'Phaeodarea', scientificName: 'Phaeodarea', rank: 'class', speciesCount: 500,
          children: [
            { id: 'phaeocystida', name: 'Phaeocystida', scientificName: 'Phaeocystida', rank: 'order', speciesCount: 150,
              children: [
                { id: 'aulacanthidae', name: 'Aulacanthidae', scientificName: 'Aulacanthidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'aulacantha', name: 'Aulacantha', scientificName: 'Aulacantha', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'aulacantha-scolymantha', name: 'Thistle Radiolarian', scientificName: 'Aulacantha scolymantha', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'phaeosphaerida', name: 'Phaeosphaerida', scientificName: 'Phaeosphaerida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'sagosphaeridae', name: 'Sagosphaeridae', scientificName: 'Sagosphaeridae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'sagosphaera', name: 'Sagosphaera', scientificName: 'Sagosphaera', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'sagosphaera-trigonilla', name: 'Triangular Sagosphaera', scientificName: 'Sagosphaera trigonilla', rank: 'species' }
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
      id: 'cercozoa',
      name: 'Cercozoans',
      scientificName: 'Cercozoa',
      rank: 'phylum',
      description: 'Diverse amoeboid and flagellated protists including chlorarachniophytes',
      speciesCount: 5000,
      children: [
        { id: 'chlorarachniophyceae', name: 'Chlorarachniophytes', scientificName: 'Chlorarachniophyceae', rank: 'class', speciesCount: 50,
          children: [
            { id: 'chlorarachniales', name: 'Chlorarachniales', scientificName: 'Chlorarachniales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'chlorarachniaceae', name: 'Chlorarachniaceae', scientificName: 'Chlorarachniaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'chlorarachnion', name: 'Chlorarachnion', scientificName: 'Chlorarachnion', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'chlorarachnion-reptans', name: 'Crawling Green Spider', scientificName: 'Chlorarachnion reptans', rank: 'species' }
                      ]
                    },
                    { id: 'bigelowiella', name: 'Bigelowiella', scientificName: 'Bigelowiella', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'bigelowiella-natans', name: 'Swimming Bigelowiella', scientificName: 'Bigelowiella natans', rank: 'species' }
                      ]
                    },
                    { id: 'lotharella', name: 'Lotharella', scientificName: 'Lotharella', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'lotharella-globosa', name: 'Globe Lotharella', scientificName: 'Lotharella globosa', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'granofilosea', name: 'Granofilosea', scientificName: 'Granofilosea', rank: 'class', speciesCount: 200,
          children: [
            { id: 'desmothoracida', name: 'Desmothoracida', scientificName: 'Desmothoracida', rank: 'order', speciesCount: 60,
              children: [
                { id: 'clathrulinidae', name: 'Clathrulinidae', scientificName: 'Clathrulinidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'clathrulina', name: 'Clathrulina', scientificName: 'Clathrulina', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'clathrulina-elegans', name: 'Elegant Lattice Heliozoan', scientificName: 'Clathrulina elegans', rank: 'species' }
                      ]
                    },
                    { id: 'hedriocystis', name: 'Hedriocystis', scientificName: 'Hedriocystis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'hedriocystis-reticulata', name: 'Netted Heliozoan', scientificName: 'Hedriocystis reticulata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'imbricatea', name: 'Imbricatea', scientificName: 'Imbricatea', rank: 'class', speciesCount: 500,
          children: [
            { id: 'euglyphida', name: 'Euglyphids', scientificName: 'Euglyphida', rank: 'order', speciesCount: 400,
              children: [
                { id: 'euglyphidae', name: 'Euglyphidae', scientificName: 'Euglyphidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'euglypha', name: 'Euglypha', scientificName: 'Euglypha', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'euglypha-rotunda', name: 'Round Euglypha', scientificName: 'Euglypha rotunda', rank: 'species' },
                        { id: 'euglypha-tuberculata', name: 'Tuberculate Euglypha', scientificName: 'Euglypha tuberculata', rank: 'species' },
                        { id: 'euglypha-acanthophora', name: 'Spine-bearing Euglypha', scientificName: 'Euglypha acanthophora', rank: 'species' }
                      ]
                    },
                    { id: 'scutiglypha', name: 'Scutiglypha', scientificName: 'Scutiglypha', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'scutiglypha-cabrolae', name: 'Cabrola Scutiglypha', scientificName: 'Scutiglypha cabrolae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'trinematidae', name: 'Trinematidae', scientificName: 'Trinematidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'trinema', name: 'Trinema', scientificName: 'Trinema', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'trinema-enchelys', name: 'Eel-like Trinema', scientificName: 'Trinema enchelys', rank: 'species' },
                        { id: 'trinema-lineare', name: 'Linear Trinema', scientificName: 'Trinema lineare', rank: 'species' }
                      ]
                    },
                    { id: 'corythion', name: 'Corythion', scientificName: 'Corythion', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'corythion-dubium', name: 'Doubtful Corythion', scientificName: 'Corythion dubium', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'assulinidae', name: 'Assulinidae', scientificName: 'Assulinidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'assulina', name: 'Assulina', scientificName: 'Assulina', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'assulina-muscorum', name: 'Moss Assulina', scientificName: 'Assulina muscorum', rank: 'species' },
                        { id: 'assulina-seminulum', name: 'Little-seed Assulina', scientificName: 'Assulina seminulum', rank: 'species' }
                      ]
                    },
                    { id: 'valkanovia', name: 'Valkanovia', scientificName: 'Valkanovia', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'valkanovia-elegans', name: 'Elegant Valkanovia', scientificName: 'Valkanovia elegans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'thaumatomonadida', name: 'Thaumatomonadida', scientificName: 'Thaumatomonadida', rank: 'order', speciesCount: 60,
              children: [
                { id: 'thaumatomonadidae', name: 'Thaumatomonadidae', scientificName: 'Thaumatomonadidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'thaumatomonas', name: 'Thaumatomonas', scientificName: 'Thaumatomonas', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'thaumatomonas-coloniensis', name: 'Colonial Thaumatomonas', scientificName: 'Thaumatomonas coloniensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'thecofilosea', name: 'Thecofilosea', scientificName: 'Thecofilosea', rank: 'class', speciesCount: 300,
          children: [
            { id: 'cryomonadida', name: 'Cryomonadida', scientificName: 'Cryomonadida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'rhizaspididae', name: 'Rhizaspididae', scientificName: 'Rhizaspididae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'rhizaspis', name: 'Rhizaspis', scientificName: 'Rhizaspis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'rhizaspis-bonariensis', name: 'Buenos Aires Rhizaspis', scientificName: 'Rhizaspis bonariensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'protaspidae', name: 'Protaspidae', scientificName: 'Protaspidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'protaspa', name: 'Protaspa', scientificName: 'Protaspa', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'protaspa-simplex', name: 'Simple Protaspa', scientificName: 'Protaspa simplex', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'tectofilosida', name: 'Tectofilosida', scientificName: 'Tectofilosida', rank: 'order', speciesCount: 80,
              children: [
                { id: 'chlamydophryidae', name: 'Chlamydophryidae', scientificName: 'Chlamydophryidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'chlamydophrys', name: 'Chlamydophrys', scientificName: 'Chlamydophrys', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'chlamydophrys-stercorea', name: 'Dung Chlamydophrys', scientificName: 'Chlamydophrys stercorea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'filosa-sarcomonadea', name: 'Sarcomonadea', scientificName: 'Sarcomonadea', rank: 'class', speciesCount: 400,
          children: [
            { id: 'cercomonadida', name: 'Cercomonadida', scientificName: 'Cercomonadida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'cercomonadidae', name: 'Cercomonadidae', scientificName: 'Cercomonadidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'cercomonas', name: 'Cercomonas', scientificName: 'Cercomonas', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'cercomonas-longicauda', name: 'Long-tailed Cercomonas', scientificName: 'Cercomonas longicauda', rank: 'species' }
                      ]
                    },
                    { id: 'eocercomonas', name: 'Eocercomonas', scientificName: 'Eocercomonas', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'eocercomonas-ramosa', name: 'Branching Eocercomonas', scientificName: 'Eocercomonas ramosa', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'glissomonadida', name: 'Glissomonadida', scientificName: 'Glissomonadida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'sandonidae', name: 'Sandonidae', scientificName: 'Sandonidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'sandona', name: 'Sandona', scientificName: 'Sandona', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'sandona-ubiquita', name: 'Ubiquitous Sandona', scientificName: 'Sandona ubiquita', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'allapsidae', name: 'Allapsidae', scientificName: 'Allapsidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'allantion', name: 'Allantion', scientificName: 'Allantion', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'allantion-tachyploon', name: 'Fast Allantion', scientificName: 'Allantion tachyploon', rank: 'species' }
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
      id: 'haptophyta',
      name: 'Haptophytes',
      scientificName: 'Haptophyta',
      rank: 'phylum',
      description: 'Algae with haptonema, including coccolithophores critical for global carbon cycle',
      speciesCount: 500,
      children: [
        { id: 'coccolithophyceae', name: 'Coccolithophores', scientificName: 'Coccolithophyceae', rank: 'class', speciesCount: 300,
          children: [
            { id: 'isochrysidales', name: 'Isochrysidales', scientificName: 'Isochrysidales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'noelaerhabdaceae', name: 'Noelaerhabdaceae', scientificName: 'Noelaerhabdaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'emiliania', name: 'Emiliania', scientificName: 'Emiliania', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'emiliania-huxleyi', name: 'Common Coccolithophore', scientificName: 'Emiliania huxleyi', rank: 'species' }
                      ]
                    },
                    { id: 'gephyrocapsa', name: 'Gephyrocapsa', scientificName: 'Gephyrocapsa', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'gephyrocapsa-oceanica', name: 'Ocean Gephyrocapsa', scientificName: 'Gephyrocapsa oceanica', rank: 'species' }
                      ]
                    },
                    { id: 'reticulofenestra', name: 'Reticulofenestra', scientificName: 'Reticulofenestra', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'reticulofenestra-parvula', name: 'Small Net-window', scientificName: 'Reticulofenestra parvula', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'isochrysidaceae', name: 'Isochrysidaceae', scientificName: 'Isochrysidaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'isochrysis', name: 'Isochrysis', scientificName: 'Isochrysis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'isochrysis-galbana', name: 'Aquaculture Haptophyte', scientificName: 'Isochrysis galbana', rank: 'species' }
                      ]
                    },
                    { id: 'tisochrysis', name: 'Tisochrysis', scientificName: 'Tisochrysis', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'tisochrysis-lutea', name: 'Golden Tisochrysis', scientificName: 'Tisochrysis lutea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'coccolithales', name: 'Coccolithales', scientificName: 'Coccolithales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'coccolithaceae', name: 'Coccolithaceae', scientificName: 'Coccolithaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'coccolithus', name: 'Coccolithus', scientificName: 'Coccolithus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'coccolithus-pelagicus', name: 'Pelagic Coccolithophore', scientificName: 'Coccolithus pelagicus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'calcidiscaceae', name: 'Calcidiscaceae', scientificName: 'Calcidiscaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'calcidiscus', name: 'Calcidiscus', scientificName: 'Calcidiscus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'calcidiscus-leptoporus', name: 'Slender Calcidiscus', scientificName: 'Calcidiscus leptoporus', rank: 'species' }
                      ]
                    },
                    { id: 'umbilicosphaera', name: 'Umbilicosphaera', scientificName: 'Umbilicosphaera', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'umbilicosphaera-sibogae', name: 'Siboga Umbilicosphaera', scientificName: 'Umbilicosphaera sibogae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'syracosphaerales', name: 'Syracosphaerales', scientificName: 'Syracosphaerales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'syracosphaeraceae', name: 'Syracosphaeraceae', scientificName: 'Syracosphaeraceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'syracosphaera', name: 'Syracosphaera', scientificName: 'Syracosphaera', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'syracosphaera-pulchra', name: 'Beautiful Syracosphaera', scientificName: 'Syracosphaera pulchra', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhabdosphaeraceae', name: 'Rhabdosphaeraceae', scientificName: 'Rhabdosphaeraceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'rhabdosphaera', name: 'Rhabdosphaera', scientificName: 'Rhabdosphaera', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'rhabdosphaera-clavigera', name: 'Club-bearing Rhabdosphaera', scientificName: 'Rhabdosphaera clavigera', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'zygodiscales', name: 'Zygodiscales', scientificName: 'Zygodiscales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'pontosphaeraceae', name: 'Pontosphaeraceae', scientificName: 'Pontosphaeraceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'pontosphaera', name: 'Pontosphaera', scientificName: 'Pontosphaera', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'pontosphaera-multipora', name: 'Multi-pored Pontosphaera', scientificName: 'Pontosphaera multipora', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'prymnesiophyceae', name: 'Prymnesiophyceae', scientificName: 'Prymnesiophyceae', rank: 'class', speciesCount: 150,
          children: [
            { id: 'prymnesiales', name: 'Prymnesiales', scientificName: 'Prymnesiales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'prymnesiaceae', name: 'Prymnesiaceae', scientificName: 'Prymnesiaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'prymnesium', name: 'Prymnesium', scientificName: 'Prymnesium', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'prymnesium-parvum', name: 'Golden Alga', scientificName: 'Prymnesium parvum', rank: 'species' },
                        { id: 'prymnesium-polylepis', name: 'Many-scaled Prymnesium', scientificName: 'Prymnesium polylepis', rank: 'species' }
                      ]
                    },
                    { id: 'chrysochromulina', name: 'Chrysochromulina', scientificName: 'Chrysochromulina', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'chrysochromulina-leadbeateri', name: 'Leadbeater Chrysochromulina', scientificName: 'Chrysochromulina leadbeateri', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'phaeocystales', name: 'Phaeocystales', scientificName: 'Phaeocystales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'phaeocystaceae', name: 'Phaeocystaceae', scientificName: 'Phaeocystaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'phaeocystis', name: 'Phaeocystis', scientificName: 'Phaeocystis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'phaeocystis-globosa', name: 'Globe Phaeocystis', scientificName: 'Phaeocystis globosa', rank: 'species' },
                        { id: 'phaeocystis-pouchetii', name: 'Pouchet Phaeocystis', scientificName: 'Phaeocystis pouchetii', rank: 'species' },
                        { id: 'phaeocystis-antarctica', name: 'Antarctic Phaeocystis', scientificName: 'Phaeocystis antarctica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'pavlovales', name: 'Pavlovales', scientificName: 'Pavlovales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'pavlovaceae', name: 'Pavlovaceae', scientificName: 'Pavlovaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'pavlova', name: 'Pavlova', scientificName: 'Pavlova', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'pavlova-lutheri', name: 'Luther Pavlova', scientificName: 'Pavlova lutheri', rank: 'species' }
                      ]
                    },
                    { id: 'diacronema', name: 'Diacronema', scientificName: 'Diacronema', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'diacronema-vlkianum', name: 'Vlk Diacronema', scientificName: 'Diacronema vlkianum', rank: 'species' }
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
