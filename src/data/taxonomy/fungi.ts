import type { TaxonNode } from './types'

export const fungi: TaxonNode =
{
  id: 'fungi',
  name: 'Fungi',
  scientificName: 'Fungi',
  rank: 'kingdom',
  description: 'Heterotrophic organisms that absorb nutrients',
  speciesCount: 150000,
  children: [
    {
      id: 'basidiomycota',
      name: 'Club Fungi',
      scientificName: 'Basidiomycota',
      rank: 'phylum',
      description: 'Mushrooms, puffballs, and shelf fungi',
      speciesCount: 30000,
      children: [
        { id: 'agaricomycetes', name: 'Mushrooms', scientificName: 'Agaricomycetes', rank: 'class', speciesCount: 20000,
          children: [
            { id: 'agaricales', name: 'Gilled Mushrooms', scientificName: 'Agaricales', rank: 'order', speciesCount: 13000,
              children: [
                { id: 'agaricaceae', name: 'Field Mushrooms', scientificName: 'Agaricaceae', rank: 'family', speciesCount: 1300,
                  children: [
                    { id: 'agaricus', name: 'Agaricus', scientificName: 'Agaricus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'agaricus-bisporus', name: 'Common Mushroom', scientificName: 'Agaricus bisporus', rank: 'species' },
                        { id: 'agaricus-campestris', name: 'Field Mushroom', scientificName: 'Agaricus campestris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'amanitaceae', name: 'Amanitas', scientificName: 'Amanitaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'amanita', name: 'Amanitas', scientificName: 'Amanita', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'amanita-muscaria', name: 'Fly Agaric', scientificName: 'Amanita muscaria', rank: 'species' },
                        { id: 'amanita-phalloides', name: 'Death Cap', scientificName: 'Amanita phalloides', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pleurotaceae', name: 'Oyster Mushrooms', scientificName: 'Pleurotaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'pleurotus', name: 'Oyster Mushrooms', scientificName: 'Pleurotus', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'pleurotus-ostreatus', name: 'Oyster Mushroom', scientificName: 'Pleurotus ostreatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'strophariaceae', name: 'Strophariaceae', scientificName: 'Strophariaceae', rank: 'family', speciesCount: 1200,
                  children: [
                    { id: 'psilocybe', name: 'Psilocybe', scientificName: 'Psilocybe', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'psilocybe-cubensis', name: 'Golden Teacher Mushroom', scientificName: 'Psilocybe cubensis', rank: 'species' },
                        { id: 'psilocybe-semilanceata', name: 'Liberty Cap', scientificName: 'Psilocybe semilanceata', rank: 'species' }
                      ]
                    },
                    { id: 'stropharia', name: 'Stropharia', scientificName: 'Stropharia', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'stropharia-rugosoannulata', name: 'Wine Cap', scientificName: 'Stropharia rugosoannulata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'omphalotaceae', name: 'Omphalotaceae', scientificName: 'Omphalotaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'lentinula', name: 'Shiitake Genus', scientificName: 'Lentinula', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'lentinula-edodes', name: 'Shiitake', scientificName: 'Lentinula edodes', rank: 'species' }
                      ]
                    },
                    { id: 'omphalotus', name: 'Jack-o-lanterns', scientificName: 'Omphalotus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'omphalotus-olearius', name: "Jack-o'-lantern Mushroom", scientificName: 'Omphalotus olearius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tricholomataceae', name: 'Tricholomataceae', scientificName: 'Tricholomataceae', rank: 'family', speciesCount: 800,
                  children: [
                    { id: 'armillaria', name: 'Honey Mushrooms', scientificName: 'Armillaria', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'armillaria-ostoyae', name: 'Humongous Fungus', scientificName: 'Armillaria ostoyae', rank: 'species' }
                      ]
                    },
                    { id: 'flammulina', name: 'Enoki Genus', scientificName: 'Flammulina', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'flammulina-velutipes', name: 'Enoki Mushroom', scientificName: 'Flammulina velutipes', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cortinariaceae', name: 'Cortinariaceae', scientificName: 'Cortinariaceae', rank: 'family', speciesCount: 2000,
                  children: [
                    { id: 'cortinarius', name: 'Webcaps', scientificName: 'Cortinarius', rank: 'genus', speciesCount: 2000 }
                  ]
                },
                { id: 'lycoperdaceae', name: 'Puffballs', scientificName: 'Lycoperdaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'calvatia', name: 'Giant Puffballs', scientificName: 'Calvatia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'calvatia-gigantea', name: 'Giant Puffball', scientificName: 'Calvatia gigantea', rank: 'species' }
                      ]
                    },
                    { id: 'lycoperdon', name: 'Puffballs', scientificName: 'Lycoperdon', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'lycoperdon-perlatum', name: 'Common Puffball', scientificName: 'Lycoperdon perlatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'coprinaceae', name: 'Ink Caps', scientificName: 'Psathyrellaceae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'coprinopsis', name: 'Ink Caps', scientificName: 'Coprinopsis', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'coprinopsis-atramentaria', name: 'Common Ink Cap', scientificName: 'Coprinopsis atramentaria', rank: 'species' }
                      ]
                    },
                    { id: 'coprinus', name: 'Shaggy Manes', scientificName: 'Coprinus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'coprinus-comatus', name: 'Shaggy Mane', scientificName: 'Coprinus comatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'boletales', name: 'Boletes', scientificName: 'Boletales', rank: 'order', speciesCount: 1300,
              children: [
                { id: 'boletaceae', name: 'Boletes', scientificName: 'Boletaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'boletus', name: 'Boletes', scientificName: 'Boletus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'boletus-edulis', name: 'Porcini', scientificName: 'Boletus edulis', rank: 'species' },
                        { id: 'boletus-badius', name: 'Bay Bolete', scientificName: 'Imleria badia', rank: 'species' }
                      ]
                    },
                    { id: 'leccinum', name: 'Scaber Stalks', scientificName: 'Leccinum', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'leccinum-scabrum', name: 'Brown Birch Bolete', scientificName: 'Leccinum scabrum', rank: 'species' },
                        { id: 'leccinum-aurantiacum', name: 'Orange Birch Bolete', scientificName: 'Leccinum aurantiacum', rank: 'species' }
                      ]
                    },
                    { id: 'tylopilus', name: 'Bitter Boletes', scientificName: 'Tylopilus', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'tylopilus-felleus', name: 'Bitter Bolete', scientificName: 'Tylopilus felleus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sclerodermataceae', name: 'Earthballs', scientificName: 'Sclerodermataceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'scleroderma', name: 'Earthballs', scientificName: 'Scleroderma', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'scleroderma-citrinum', name: 'Common Earthball', scientificName: 'Scleroderma citrinum', rank: 'species' },
                        { id: 'scleroderma-verrucosum', name: 'Scaly Earthball', scientificName: 'Scleroderma verrucosum', rank: 'species' }
                      ]
                    },
                    { id: 'pisolithus', name: 'Dyeballs', scientificName: 'Pisolithus', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'pisolithus-arhizus', name: 'Dyeball', scientificName: 'Pisolithus arhizus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'suillaceae', name: 'Slippery Jacks', scientificName: 'Suillaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'suillus', name: 'Slippery Jacks', scientificName: 'Suillus', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'suillus-luteus', name: 'Slippery Jack', scientificName: 'Suillus luteus', rank: 'species' },
                        { id: 'suillus-grevillei', name: 'Larch Bolete', scientificName: 'Suillus grevillei', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'cantharellales', name: 'Chanterelles', scientificName: 'Cantharellales', rank: 'order', speciesCount: 500,
              children: [
                { id: 'cantharellaceae', name: 'Chanterelles', scientificName: 'Cantharellaceae', rank: 'family', speciesCount: 90,
                  children: [
                    { id: 'cantharellus', name: 'Chanterelles', scientificName: 'Cantharellus', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'cantharellus-cibarius', name: 'Golden Chanterelle', scientificName: 'Cantharellus cibarius', rank: 'species' },
                        { id: 'cantharellus-cinnabarinus', name: 'Cinnabar Chanterelle', scientificName: 'Cantharellus cinnabarinus', rank: 'species' }
                      ]
                    },
                    { id: 'craterellus', name: 'Black Trumpets', scientificName: 'Craterellus', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'craterellus-cornucopioides', name: 'Black Trumpet', scientificName: 'Craterellus cornucopioides', rank: 'species' },
                        { id: 'craterellus-tubaeformis', name: 'Yellowfoot', scientificName: 'Craterellus tubaeformis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hydnaceae', name: 'Tooth Fungi', scientificName: 'Hydnaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'hydnum', name: 'Hedgehog Mushrooms', scientificName: 'Hydnum', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'hydnum-repandum', name: 'Sweet Tooth', scientificName: 'Hydnum repandum', rank: 'species' },
                        { id: 'hydnum-umbilicatum', name: 'Depressed Hedgehog', scientificName: 'Hydnum umbilicatum', rank: 'species' }
                      ]
                    },
                    { id: 'sistotrema', name: 'Sistotrema', scientificName: 'Sistotrema', rank: 'genus', speciesCount: 30 }
                  ]
                }
              ]
            },
            { id: 'polyporales', name: 'Bracket Fungi', scientificName: 'Polyporales', rank: 'order', speciesCount: 1800,
              children: [
                { id: 'polyporaceae', name: 'Polypores', scientificName: 'Polyporaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'trametes', name: 'Turkey Tails', scientificName: 'Trametes', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'trametes-versicolor', name: 'Turkey Tail', scientificName: 'Trametes versicolor', rank: 'species' }
                      ]
                    },
                    { id: 'laetiporus', name: 'Chicken of the Woods', scientificName: 'Laetiporus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'laetiporus-sulphureus', name: 'Chicken of the Woods', scientificName: 'Laetiporus sulphureus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ganodermataceae', name: 'Ganodermataceae', scientificName: 'Ganodermataceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'ganoderma', name: 'Reishi', scientificName: 'Ganoderma', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'ganoderma-lucidum', name: 'Reishi / Lingzhi', scientificName: 'Ganoderma lucidum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'fomitopsidaceae', name: 'Fomitopsidaceae', scientificName: 'Fomitopsidaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'fomitopsis', name: 'Red-belted Polypore', scientificName: 'Fomitopsis', rank: 'genus', speciesCount: 30 },
                    { id: 'fomes', name: 'Hoof Fungus', scientificName: 'Fomes', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'fomes-fomentarius', name: 'Tinder Fungus', scientificName: 'Fomes fomentarius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'meripilaceae', name: 'Meripilaceae', scientificName: 'Meripilaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'grifola', name: 'Hen of the Woods', scientificName: 'Grifola', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'grifola-frondosa', name: 'Maitake / Hen of the Woods', scientificName: 'Grifola frondosa', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'russulales', name: 'Russulas & Milk Caps', scientificName: 'Russulales', rank: 'order', speciesCount: 2000,
              children: [
                { id: 'russulaceae', name: 'Russulaceae', scientificName: 'Russulaceae', rank: 'family', speciesCount: 1800,
                  children: [
                    { id: 'russula', name: 'Brittlegills', scientificName: 'Russula', rank: 'genus', speciesCount: 750,
                      children: [
                        { id: 'russula-emetica', name: 'The Sickener', scientificName: 'Russula emetica', rank: 'species' }
                      ]
                    },
                    { id: 'lactarius', name: 'Milk Caps', scientificName: 'Lactarius', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'lactarius-deliciosus', name: 'Saffron Milk Cap', scientificName: 'Lactarius deliciosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hericiaceae', name: 'Tooth Fungi', scientificName: 'Hericiaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'hericium', name: "Lion's Mane Genus", scientificName: 'Hericium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'hericium-erinaceus', name: "Lion's Mane Mushroom", scientificName: 'Hericium erinaceus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'phallales', name: 'Stinkhorns', scientificName: 'Phallales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'phallaceae', name: 'Stinkhorns', scientificName: 'Phallaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'phallus', name: 'Stinkhorns', scientificName: 'Phallus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'phallus-impudicus', name: 'Common Stinkhorn', scientificName: 'Phallus impudicus', rank: 'species' }
                      ]
                    },
                    { id: 'clathrus', name: 'Lattice Fungi', scientificName: 'Clathrus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'clathrus-ruber', name: 'Lattice Stinkhorn', scientificName: 'Clathrus ruber', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'geastrales', name: 'Earthstars', scientificName: 'Geastrales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'geastraceae', name: 'Earthstars', scientificName: 'Geastraceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'geastrum', name: 'Earthstars', scientificName: 'Geastrum', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'geastrum-triplex', name: 'Collared Earthstar', scientificName: 'Geastrum triplex', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'gomphales', name: 'Coral & Club Fungi', scientificName: 'Gomphales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'clavariadelphaceae', name: 'Club Fungi', scientificName: 'Clavariadelphaceae', rank: 'family', speciesCount: 40 },
                { id: 'gomphaceae', name: 'Pig Ears', scientificName: 'Gomphaceae', rank: 'family', speciesCount: 100 }
              ]
            },
            { id: 'hymenochaetales', name: 'Hymenochaetales', scientificName: 'Hymenochaetales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'hymenochaetaceae', name: 'Hymenochaetaceae', scientificName: 'Hymenochaetaceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'inonotus', name: 'Chaga Genus', scientificName: 'Inonotus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'inonotus-obliquus', name: 'Chaga Mushroom', scientificName: 'Inonotus obliquus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'ustilaginomycetes', name: 'Smuts', scientificName: 'Ustilaginomycetes', rank: 'class', speciesCount: 1500,
          children: [
            { id: 'ustilaginales', name: 'Ustilaginales', scientificName: 'Ustilaginales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'ustilaginaceae', name: 'Ustilaginaceae', scientificName: 'Ustilaginaceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'ustilago', name: 'Ustilago', scientificName: 'Ustilago', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'ustilago-maydis', name: 'Corn Smut', scientificName: 'Ustilago maydis', rank: 'species' },
                        { id: 'ustilago-nuda', name: 'Loose Smut of Barley', scientificName: 'Ustilago nuda', rank: 'species' },
                        { id: 'ustilago-tritici', name: 'Loose Smut of Wheat', scientificName: 'Ustilago tritici', rank: 'species' }
                      ]
                    },
                    { id: 'sporisorium', name: 'Sporisorium', scientificName: 'Sporisorium', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'sporisorium-scitamineum', name: 'Sugarcane Smut', scientificName: 'Sporisorium scitamineum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tilletiaceae', name: 'Bunt Fungi', scientificName: 'Tilletiaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'tilletia', name: 'Bunt Fungi', scientificName: 'Tilletia', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'tilletia-caries', name: 'Common Bunt', scientificName: 'Tilletia caries', rank: 'species' },
                        { id: 'tilletia-controversa', name: 'Dwarf Bunt', scientificName: 'Tilletia controversa', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'urocystidales', name: 'Urocystidales', scientificName: 'Urocystidales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'urocystidaceae', name: 'Urocystidaceae', scientificName: 'Urocystidaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'urocystis', name: 'Urocystis', scientificName: 'Urocystis', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'urocystis-cepulae', name: 'Onion Smut', scientificName: 'Urocystis cepulae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'exobasidiomycetes', name: 'Exobasidiomycetes', scientificName: 'Exobasidiomycetes', rank: 'class', speciesCount: 100,
          children: [
            { id: 'exobasidiales', name: 'Exobasidiales', scientificName: 'Exobasidiales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'exobasidiaceae', name: 'Exobasidiaceae', scientificName: 'Exobasidiaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'exobasidium', name: 'Gall Makers', scientificName: 'Exobasidium', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'exobasidium-vaccinii', name: 'Blueberry Gall', scientificName: 'Exobasidium vaccinii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'tremellomycetes', name: 'Jelly Fungi', scientificName: 'Tremellomycetes', rank: 'class', speciesCount: 400,
          children: [
            { id: 'tremellales', name: 'Tremellales', scientificName: 'Tremellales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'tremellaceae', name: 'Tremellaceae', scientificName: 'Tremellaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'tremella', name: 'Jelly Fungi', scientificName: 'Tremella', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'tremella-fuciformis', name: 'Snow Fungus', scientificName: 'Tremella fuciformis', rank: 'species' },
                        { id: 'tremella-mesenterica', name: "Witch's Butter", scientificName: 'Tremella mesenterica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cryptococcaceae', name: 'Cryptococcaceae', scientificName: 'Cryptococcaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'cryptococcus', name: 'Cryptococcus', scientificName: 'Cryptococcus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'cryptococcus-neoformans', name: 'Cryptococcus', scientificName: 'Cryptococcus neoformans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'pucciniomycetes', name: 'Rusts', scientificName: 'Pucciniomycetes', rank: 'class', speciesCount: 8000,
          children: [
            { id: 'pucciniales', name: 'Pucciniales', scientificName: 'Pucciniales', rank: 'order', speciesCount: 7000,
              children: [
                { id: 'pucciniaceae', name: 'Pucciniaceae', scientificName: 'Pucciniaceae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'puccinia', name: 'Puccinia', scientificName: 'Puccinia', rank: 'genus', speciesCount: 2000,
                      children: [
                        { id: 'puccinia-graminis', name: 'Wheat Stem Rust', scientificName: 'Puccinia graminis', rank: 'species' },
                        { id: 'puccinia-striiformis', name: 'Stripe Rust', scientificName: 'Puccinia striiformis', rank: 'species' },
                        { id: 'puccinia-triticina', name: 'Leaf Rust', scientificName: 'Puccinia triticina', rank: 'species' },
                        { id: 'puccinia-coronata', name: 'Crown Rust', scientificName: 'Puccinia coronata', rank: 'species' }
                      ]
                    },
                    { id: 'uromyces', name: 'Uromyces', scientificName: 'Uromyces', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'uromyces-appendiculatus', name: 'Bean Rust', scientificName: 'Uromyces appendiculatus', rank: 'species' },
                        { id: 'uromyces-viciae-fabae', name: 'Broad Bean Rust', scientificName: 'Uromyces viciae-fabae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'melampsoraceae', name: 'Melampsoraceae', scientificName: 'Melampsoraceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'melampsora', name: 'Melampsora', scientificName: 'Melampsora', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'melampsora-lini', name: 'Flax Rust', scientificName: 'Melampsora lini', rank: 'species' },
                        { id: 'melampsora-larici-populina', name: 'Poplar Rust', scientificName: 'Melampsora larici-populina', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phragmidiaceae', name: 'Rose Rusts', scientificName: 'Phragmidiaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'phragmidium', name: 'Rose Rusts', scientificName: 'Phragmidium', rank: 'genus', speciesCount: 65,
                      children: [
                        { id: 'phragmidium-violaceum', name: 'Bramble Rust', scientificName: 'Phragmidium violaceum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cronartiaceae', name: 'Blister Rusts', scientificName: 'Cronartiaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'cronartium', name: 'Blister Rusts', scientificName: 'Cronartium', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'cronartium-ribicola', name: 'White Pine Blister Rust', scientificName: 'Cronartium ribicola', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'coleosporiaceae', name: 'Coleosporiaceae', scientificName: 'Coleosporiaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'coleosporium', name: 'Coleosporium', scientificName: 'Coleosporium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'coleosporium-tussilaginis', name: 'Coltsfoot Rust', scientificName: 'Coleosporium tussilaginis', rank: 'species' }
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
      id: 'ascomycota',
      name: 'Sac Fungi',
      scientificName: 'Ascomycota',
      rank: 'phylum',
      description: 'Largest fungal phylum - yeasts, morels, truffles, and most lichens',
      speciesCount: 64000,
      children: [
        { id: 'saccharomycetes', name: 'Yeasts', scientificName: 'Saccharomycetes', rank: 'class', speciesCount: 1000,
          children: [
            { id: 'saccharomycetales', name: 'Saccharomycetales', scientificName: 'Saccharomycetales', rank: 'order', speciesCount: 700,
              children: [
                { id: 'saccharomycetaceae', name: 'Saccharomycetaceae', scientificName: 'Saccharomycetaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'saccharomyces', name: 'Saccharomyces', scientificName: 'Saccharomyces', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'saccharomyces-cerevisiae', name: "Baker's/Brewer's Yeast", scientificName: 'Saccharomyces cerevisiae', rank: 'species' },
                        { id: 'saccharomyces-pastorianus', name: 'Lager Yeast', scientificName: 'Saccharomyces pastorianus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'debaryomycetaceae', name: 'Debaryomycetaceae', scientificName: 'Debaryomycetaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'candida', name: 'Candida', scientificName: 'Candida', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'candida-albicans', name: 'Candida Yeast', scientificName: 'Candida albicans', rank: 'species' },
                        { id: 'candida-auris', name: 'Drug-resistant Candida', scientificName: 'Candida auris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pichiaceae', name: 'Pichiaceae', scientificName: 'Pichiaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'komagataella', name: 'Pichia', scientificName: 'Komagataella', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'komagataella-phaffii', name: 'Pichia pastoris', scientificName: 'Komagataella phaffii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'schizosaccharomycetaceae', name: 'Fission Yeasts', scientificName: 'Schizosaccharomycetaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'schizosaccharomyces', name: 'Fission Yeast', scientificName: 'Schizosaccharomyces', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'schizosaccharomyces-pombe', name: 'Fission Yeast', scientificName: 'Schizosaccharomyces pombe', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dipodascaceae', name: 'Dipodascaceae', scientificName: 'Dipodascaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'galactomyces', name: 'Galactomyces', scientificName: 'Galactomyces', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'galactomyces-candidum', name: 'Dairy Yeast', scientificName: 'Galactomyces candidum', rank: 'species' }
                      ]
                    },
                    { id: 'yarrowia', name: 'Yarrowia', scientificName: 'Yarrowia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'yarrowia-lipolytica', name: 'Industrial Yeast', scientificName: 'Yarrowia lipolytica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lipomycetaceae', name: 'Lipomycetaceae', scientificName: 'Lipomycetaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'lipomyces', name: 'Fat Yeasts', scientificName: 'Lipomyces', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'lipomyces-starkeyi', name: 'Oleaginous Yeast', scientificName: 'Lipomyces starkeyi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'wickerhamomycetaceae', name: 'Wickerhamomycetaceae', scientificName: 'Wickerhamomycetaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'wickerhamomyces', name: 'Wickerhamomyces', scientificName: 'Wickerhamomyces', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'wickerhamomyces-anomalus', name: 'Killer Yeast', scientificName: 'Wickerhamomyces anomalus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'laboulbeniomycetes', name: 'Insect Parasites', scientificName: 'Laboulbeniomycetes', rank: 'class', speciesCount: 2200,
          description: 'Obligate parasites of arthropods, highly host-specific',
          children: [
            { id: 'laboulbeniales', name: 'Laboulbeniales', scientificName: 'Laboulbeniales', rank: 'order', speciesCount: 2100,
              children: [
                { id: 'laboulbeniaceae', name: 'Laboulbeniaceae', scientificName: 'Laboulbeniaceae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'laboulbenia', name: 'Laboulbenia', scientificName: 'Laboulbenia', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'laboulbenia-flagellata', name: 'Ground Beetle Parasite', scientificName: 'Laboulbenia flagellata', rank: 'species' }
                      ]
                    },
                    { id: 'rickia', name: 'Rickia', scientificName: 'Rickia', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'rickia-wasmannii', name: 'Ant Parasite', scientificName: 'Rickia wasmannii', rank: 'species' }
                      ]
                    },
                    { id: 'stigmatomyces', name: 'Stigmatomyces', scientificName: 'Stigmatomyces', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'stigmatomyces-baeri', name: 'Fly Parasite', scientificName: 'Stigmatomyces baeri', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ceratomycetaceae', name: 'Ceratomycetaceae', scientificName: 'Ceratomycetaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'hesperomyces', name: 'Hesperomyces', scientificName: 'Hesperomyces', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'hesperomyces-virescens', name: 'Ladybird Parasite', scientificName: 'Hesperomyces virescens', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'pyxidiophorales', name: 'Pyxidiophorales', scientificName: 'Pyxidiophorales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'pyxidiophoraceae', name: 'Pyxidiophoraceae', scientificName: 'Pyxidiophoraceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'pyxidiophora', name: 'Pyxidiophora', scientificName: 'Pyxidiophora', rank: 'genus', speciesCount: 15 }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'pezizomycetes', name: 'Cup Fungi', scientificName: 'Pezizomycetes', rank: 'class', speciesCount: 5000,
          children: [
            { id: 'pezizales', name: 'Pezizales', scientificName: 'Pezizales', rank: 'order', speciesCount: 4000,
              children: [
                { id: 'tuberaceae', name: 'Truffles', scientificName: 'Tuberaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'tuber', name: 'True Truffles', scientificName: 'Tuber', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'tuber-melanosporum', name: 'Black Truffle', scientificName: 'Tuber melanosporum', rank: 'species' },
                        { id: 'tuber-magnatum', name: 'White Truffle', scientificName: 'Tuber magnatum', rank: 'species' },
                        { id: 'tuber-aestivum', name: 'Summer Truffle', scientificName: 'Tuber aestivum', rank: 'species' },
                        { id: 'tuber-borchii', name: 'Bianchetto Truffle', scientificName: 'Tuber borchii', rank: 'species' },
                        { id: 'tuber-indicum', name: 'Chinese Black Truffle', scientificName: 'Tuber indicum', rank: 'species' },
                        { id: 'tuber-oregonense', name: 'Oregon White Truffle', scientificName: 'Tuber oregonense', rank: 'species' }
                      ]
                    },
                    { id: 'choiromyces', name: 'Choiromyces', scientificName: 'Choiromyces', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'choiromyces-meandriformis', name: 'Marzipan Truffle', scientificName: 'Choiromyces meandriformis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'terfeziaceae', name: 'Desert Truffles', scientificName: 'Terfeziaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'terfezia', name: 'Desert Truffles', scientificName: 'Terfezia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'terfezia-claveryi', name: 'Kalahari Truffle', scientificName: 'Terfezia claveryi', rank: 'species' },
                        { id: 'terfezia-arenaria', name: 'Sandy Desert Truffle', scientificName: 'Terfezia arenaria', rank: 'species' }
                      ]
                    },
                    { id: 'tirmania', name: 'Tirmania', scientificName: 'Tirmania', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'tirmania-nivea', name: 'White Desert Truffle', scientificName: 'Tirmania nivea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'morchellaceae', name: 'Morels', scientificName: 'Morchellaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'morchella', name: 'Morels', scientificName: 'Morchella', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'morchella-esculenta', name: 'Common Morel', scientificName: 'Morchella esculenta', rank: 'species' },
                        { id: 'morchella-elata', name: 'Black Morel', scientificName: 'Morchella elata', rank: 'species' }
                      ]
                    },
                    { id: 'verpa', name: 'False Morels', scientificName: 'Verpa', rank: 'genus', speciesCount: 5 }
                  ]
                },
                { id: 'pezizaceae', name: 'Cup Fungi', scientificName: 'Pezizaceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'peziza', name: 'Cup Fungi', scientificName: 'Peziza', rank: 'genus', speciesCount: 100 }
                  ]
                },
                { id: 'helvellaceae', name: 'False Morels', scientificName: 'Helvellaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'gyromitra', name: 'Brain Mushrooms', scientificName: 'Gyromitra', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'gyromitra-esculenta', name: 'Brain Mushroom', scientificName: 'Gyromitra esculenta', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sarcoscyphaceae', name: 'Sarcoscyphaceae', scientificName: 'Sarcoscyphaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'sarcoscypha', name: 'Scarlet Cups', scientificName: 'Sarcoscypha', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'sarcoscypha-coccinea', name: 'Scarlet Elf Cup', scientificName: 'Sarcoscypha coccinea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'eurotiomycetes', name: 'Eurotiomycetes', scientificName: 'Eurotiomycetes', rank: 'class', speciesCount: 3500,
          children: [
            { id: 'eurotiales', name: 'Eurotiales', scientificName: 'Eurotiales', rank: 'order', speciesCount: 2000,
              children: [
                { id: 'aspergillaceae', name: 'Aspergillaceae', scientificName: 'Aspergillaceae', rank: 'family', speciesCount: 1000,
                  children: [
                    { id: 'penicillium', name: 'Penicillium', scientificName: 'Penicillium', rank: 'genus', speciesCount: 350,
                      children: [
                        { id: 'penicillium-chrysogenum', name: 'Penicillin Mold', scientificName: 'Penicillium chrysogenum', rank: 'species' },
                        { id: 'penicillium-roqueforti', name: 'Blue Cheese Mold', scientificName: 'Penicillium roqueforti', rank: 'species' },
                        { id: 'penicillium-camemberti', name: 'Camembert Mold', scientificName: 'Penicillium camemberti', rank: 'species' }
                      ]
                    },
                    { id: 'aspergillus', name: 'Aspergillus', scientificName: 'Aspergillus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'aspergillus-niger', name: 'Black Mold', scientificName: 'Aspergillus niger', rank: 'species' },
                        { id: 'aspergillus-fumigatus', name: 'Aspergillus', scientificName: 'Aspergillus fumigatus', rank: 'species' },
                        { id: 'aspergillus-oryzae', name: 'Koji Mold', scientificName: 'Aspergillus oryzae', rank: 'species' },
                        { id: 'aspergillus-flavus', name: 'Aflatoxin Mold', scientificName: 'Aspergillus flavus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'onygenales', name: 'Onygenales', scientificName: 'Onygenales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'arthrodermataceae', name: 'Dermatophytes', scientificName: 'Arthrodermataceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'trichophyton', name: 'Ringworm Fungi', scientificName: 'Trichophyton', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'trichophyton-rubrum', name: "Athlete's Foot Fungus", scientificName: 'Trichophyton rubrum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ajellomycetaceae', name: 'Ajellomycetaceae', scientificName: 'Ajellomycetaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'histoplasma', name: 'Histoplasma', scientificName: 'Histoplasma', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'histoplasma-capsulatum', name: 'Histoplasmosis Fungus', scientificName: 'Histoplasma capsulatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'sordariomycetes', name: 'Sordariomycetes', scientificName: 'Sordariomycetes', rank: 'class', speciesCount: 10000,
          children: [
            { id: 'hypocreales', name: 'Hypocreales', scientificName: 'Hypocreales', rank: 'order', speciesCount: 3000,
              children: [
                { id: 'clavicipitaceae', name: 'Clavicipitaceae', scientificName: 'Clavicipitaceae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'claviceps', name: 'Ergot Fungi', scientificName: 'Claviceps', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'claviceps-purpurea', name: 'Ergot', scientificName: 'Claviceps purpurea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ophiocordycipitaceae', name: 'Zombie Fungi', scientificName: 'Ophiocordycipitaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'ophiocordyceps', name: 'Zombie Ant Fungi', scientificName: 'Ophiocordyceps', rank: 'genus', speciesCount: 140,
                      children: [
                        { id: 'ophiocordyceps-unilateralis', name: 'Zombie Ant Fungus', scientificName: 'Ophiocordyceps unilateralis', rank: 'species' },
                        { id: 'ophiocordyceps-sinensis', name: 'Caterpillar Fungus', scientificName: 'Ophiocordyceps sinensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nectriaceae', name: 'Nectriaceae', scientificName: 'Nectriaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'fusarium', name: 'Fusarium', scientificName: 'Fusarium', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'fusarium-oxysporum', name: 'Panama Disease Fungus', scientificName: 'Fusarium oxysporum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hypocreaceae', name: 'Hypocreaceae', scientificName: 'Hypocreaceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'trichoderma', name: 'Trichoderma', scientificName: 'Trichoderma', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'trichoderma-reesei', name: 'Industrial Cellulase Producer', scientificName: 'Trichoderma reesei', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'xylariales', name: 'Xylariales', scientificName: 'Xylariales', rank: 'order', speciesCount: 2000,
              children: [
                { id: 'xylariaceae', name: 'Xylariaceae', scientificName: 'Xylariaceae', rank: 'family', speciesCount: 800,
                  children: [
                    { id: 'xylaria', name: 'Dead Man\'s Fingers', scientificName: 'Xylaria', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'xylaria-polymorpha', name: "Dead Man's Fingers", scientificName: 'Xylaria polymorpha', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'sordariales', name: 'Sordariales', scientificName: 'Sordariales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'sordariaceae', name: 'Sordariaceae', scientificName: 'Sordariaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'neurospora', name: 'Neurospora', scientificName: 'Neurospora', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'neurospora-crassa', name: 'Red Bread Mold', scientificName: 'Neurospora crassa', rank: 'species' }
                      ]
                    },
                    { id: 'sordaria', name: 'Sordaria', scientificName: 'Sordaria', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'sordaria-fimicola', name: 'Dung Fungus', scientificName: 'Sordaria fimicola', rank: 'species' }
                      ]
                    },
                    { id: 'podospora', name: 'Podospora', scientificName: 'Podospora', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'podospora-anserina', name: 'Model Organism Fungus', scientificName: 'Podospora anserina', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chaetomiaceae', name: 'Chaetomiaceae', scientificName: 'Chaetomiaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'chaetomium', name: 'Chaetomium', scientificName: 'Chaetomium', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'chaetomium-globosum', name: 'Paper Mold', scientificName: 'Chaetomium globosum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'glomerellales', name: 'Glomerellales', scientificName: 'Glomerellales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'glomerellaceae', name: 'Glomerellaceae', scientificName: 'Glomerellaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'colletotrichum', name: 'Anthracnose Fungi', scientificName: 'Colletotrichum', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'colletotrichum-gloeosporioides', name: 'Tropical Anthracnose', scientificName: 'Colletotrichum gloeosporioides', rank: 'species' },
                        { id: 'colletotrichum-acutatum', name: 'Strawberry Anthracnose', scientificName: 'Colletotrichum acutatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'magnaporthales', name: 'Magnaporthales', scientificName: 'Magnaporthales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'magnaporthaceae', name: 'Magnaporthaceae', scientificName: 'Magnaporthaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'magnaporthe', name: 'Rice Blast Fungi', scientificName: 'Magnaporthe', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'magnaporthe-oryzae', name: 'Rice Blast Fungus', scientificName: 'Magnaporthe oryzae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'lecanoromycetes', name: 'Lichen Fungi', scientificName: 'Lecanoromycetes', rank: 'class', speciesCount: 14000,
          children: [
            { id: 'lecanorales', name: 'Lecanorales', scientificName: 'Lecanorales', rank: 'order', speciesCount: 5000,
              children: [
                { id: 'parmeliaceae', name: 'Shield Lichens', scientificName: 'Parmeliaceae', rank: 'family', speciesCount: 2700,
                  children: [
                    { id: 'usnea', name: 'Beard Lichens', scientificName: 'Usnea', rank: 'genus', speciesCount: 350,
                      children: [
                        { id: 'usnea-longissima', name: 'Methuselah\'s Beard', scientificName: 'Usnea longissima', rank: 'species' },
                        { id: 'usnea-barbata', name: 'Bearded Lichen', scientificName: 'Usnea barbata', rank: 'species' }
                      ]
                    },
                    { id: 'parmelia', name: 'Shield Lichens', scientificName: 'Parmelia', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'parmelia-sulcata', name: 'Hammered Shield Lichen', scientificName: 'Parmelia sulcata', rank: 'species' }
                      ]
                    },
                    { id: 'xanthoparmelia', name: 'Rock Lichens', scientificName: 'Xanthoparmelia', rank: 'genus', speciesCount: 800,
                      children: [
                        { id: 'xanthoparmelia-conspersa', name: 'Peppered Rock Shield', scientificName: 'Xanthoparmelia conspersa', rank: 'species' }
                      ]
                    },
                    { id: 'hypogymnia', name: 'Tube Lichens', scientificName: 'Hypogymnia', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'hypogymnia-physodes', name: 'Tube Lichen', scientificName: 'Hypogymnia physodes', rank: 'species' }
                      ]
                    },
                    { id: 'evernia', name: 'Evernia', scientificName: 'Evernia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'evernia-prunastri', name: 'Oakmoss', scientificName: 'Evernia prunastri', rank: 'species' }
                      ]
                    },
                    { id: 'cetraria', name: 'Iceland Moss', scientificName: 'Cetraria', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'cetraria-islandica', name: 'Iceland Moss', scientificName: 'Cetraria islandica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cladoniaceae', name: 'Cup Lichens', scientificName: 'Cladoniaceae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'cladonia', name: 'Reindeer Lichens', scientificName: 'Cladonia', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'cladonia-rangiferina', name: 'Reindeer Lichen', scientificName: 'Cladonia rangiferina', rank: 'species' },
                        { id: 'cladonia-stellaris', name: 'Star Reindeer Lichen', scientificName: 'Cladonia stellaris', rank: 'species' },
                        { id: 'cladonia-pyxidata', name: 'Pebbled Pixie Cup', scientificName: 'Cladonia pyxidata', rank: 'species' },
                        { id: 'cladonia-cristatella', name: 'British Soldiers', scientificName: 'Cladonia cristatella', rank: 'species' },
                        { id: 'cladonia-macilenta', name: 'Lipstick Cladonia', scientificName: 'Cladonia macilenta', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ramalinaceae', name: 'Ramalinaceae', scientificName: 'Ramalinaceae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'ramalina', name: 'Strap Lichens', scientificName: 'Ramalina', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'ramalina-farinacea', name: 'Cartilage Lichen', scientificName: 'Ramalina farinacea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lecanoraceae', name: 'Lecanoraceae', scientificName: 'Lecanoraceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'lecanora', name: 'Rim Lichens', scientificName: 'Lecanora', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'lecanora-muralis', name: 'Wall Rim Lichen', scientificName: 'Lecanora muralis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'peltigerales', name: 'Peltigerales', scientificName: 'Peltigerales', rank: 'order', speciesCount: 1200,
              children: [
                { id: 'lobariaceae', name: 'Lung Lichens', scientificName: 'Lobariaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'lobaria', name: 'Lobaria', scientificName: 'Lobaria', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'lobaria-pulmonaria', name: 'Tree Lungwort', scientificName: 'Lobaria pulmonaria', rank: 'species' },
                        { id: 'lobaria-scrobiculata', name: 'Textured Lungwort', scientificName: 'Lobaria scrobiculata', rank: 'species' }
                      ]
                    },
                    { id: 'sticta', name: 'Spotted Lichens', scientificName: 'Sticta', rank: 'genus', speciesCount: 120,
                      children: [
                        { id: 'sticta-sylvatica', name: 'Lesser Speckled Shield', scientificName: 'Sticta sylvatica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'peltigeraceae', name: 'Felt Lichens', scientificName: 'Peltigeraceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'peltigera', name: 'Dog Lichens', scientificName: 'Peltigera', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'peltigera-canina', name: 'Dog Lichen', scientificName: 'Peltigera canina', rank: 'species' },
                        { id: 'peltigera-aphthosa', name: 'Freckle Pelt Lichen', scientificName: 'Peltigera aphthosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'collemataceae', name: 'Jelly Lichens', scientificName: 'Collemataceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'collema', name: 'Jelly Lichens', scientificName: 'Collema', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'collema-nigrescens', name: 'Blistered Jelly Lichen', scientificName: 'Collema nigrescens', rank: 'species' }
                      ]
                    },
                    { id: 'leptogium', name: 'Skin Lichens', scientificName: 'Leptogium', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'leptogium-cyanescens', name: 'Blue Skin Lichen', scientificName: 'Leptogium cyanescens', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'teloschistales', name: 'Teloschistales', scientificName: 'Teloschistales', rank: 'order', speciesCount: 1000,
              children: [
                { id: 'teloschistaceae', name: 'Sunburst Lichens', scientificName: 'Teloschistaceae', rank: 'family', speciesCount: 800,
                  children: [
                    { id: 'xanthoria', name: 'Sunburst Lichens', scientificName: 'Xanthoria', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'xanthoria-parietina', name: 'Common Orange Lichen', scientificName: 'Xanthoria parietina', rank: 'species' }
                      ]
                    },
                    { id: 'caloplaca', name: 'Firedot Lichens', scientificName: 'Caloplaca', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'caloplaca-marina', name: 'Orange Sea Lichen', scientificName: 'Caloplaca marina', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'pertusariales', name: 'Pertusariales', scientificName: 'Pertusariales', rank: 'order', speciesCount: 800,
              children: [
                { id: 'pertusariaceae', name: 'Wart Lichens', scientificName: 'Pertusariaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'pertusaria', name: 'Wart Lichens', scientificName: 'Pertusaria', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'pertusaria-amara', name: 'Bitter Wart Lichen', scientificName: 'Pertusaria amara', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'dothideomycetes', name: 'Dothideomycetes', scientificName: 'Dothideomycetes', rank: 'class', speciesCount: 19000,
          children: [
            { id: 'capnodiales', name: 'Sooty Molds', scientificName: 'Capnodiales', rank: 'order', speciesCount: 3000,
              children: [
                { id: 'mycosphaerellaceae', name: 'Mycosphaerellaceae', scientificName: 'Mycosphaerellaceae', rank: 'family', speciesCount: 1500 }
              ]
            },
            { id: 'pleosporales', name: 'Pleosporales', scientificName: 'Pleosporales', rank: 'order', speciesCount: 5000,
              children: [
                { id: 'pleosporaceae', name: 'Pleosporaceae', scientificName: 'Pleosporaceae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'alternaria', name: 'Alternaria', scientificName: 'Alternaria', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'alternaria-alternata', name: 'Common Leaf Spot Fungus', scientificName: 'Alternaria alternata', rank: 'species' }
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
      id: 'zygomycota',
      name: 'Zygote Fungi',
      scientificName: 'Zygomycota',
      rank: 'phylum',
      description: 'Bread molds and related fungi that reproduce via zygospores',
      speciesCount: 1000,
      children: [
        { id: 'mucoromycetes', name: 'Mucoromycetes', scientificName: 'Mucoromycetes', rank: 'class', speciesCount: 400,
          children: [
            { id: 'mucorales', name: 'Mucorales', scientificName: 'Mucorales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'mucoraceae', name: 'Mucoraceae', scientificName: 'Mucoraceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'rhizopus', name: 'Bread Molds', scientificName: 'Rhizopus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'rhizopus-stolonifer', name: 'Black Bread Mold', scientificName: 'Rhizopus stolonifer', rank: 'species' },
                        { id: 'rhizopus-oryzae', name: 'Tempeh Mold', scientificName: 'Rhizopus oryzae', rank: 'species' },
                        { id: 'rhizopus-microsporus', name: 'Tempe Rhizopus', scientificName: 'Rhizopus microsporus', rank: 'species' }
                      ]
                    },
                    { id: 'mucor', name: 'Pin Molds', scientificName: 'Mucor', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'mucor-mucedo', name: 'Common Pin Mold', scientificName: 'Mucor mucedo', rank: 'species' },
                        { id: 'mucor-racemosus', name: 'Grape Cluster Mold', scientificName: 'Mucor racemosus', rank: 'species' },
                        { id: 'mucor-circinelloides', name: 'Pathogenic Mucor', scientificName: 'Mucor circinelloides', rank: 'species' }
                      ]
                    },
                    { id: 'actinomucor', name: 'Sufu Mold', scientificName: 'Actinomucor', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'actinomucor-elegans', name: 'Fermented Tofu Mold', scientificName: 'Actinomucor elegans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cunninghamellaceae', name: 'Cunninghamellaceae', scientificName: 'Cunninghamellaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'cunninghamella', name: 'Cunninghamella', scientificName: 'Cunninghamella', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'cunninghamella-bertholletiae', name: 'Mucormycosis Agent', scientificName: 'Cunninghamella bertholletiae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lichtheimiaceae', name: 'Lichtheimiaceae', scientificName: 'Lichtheimiaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'lichtheimia', name: 'Lichtheimia', scientificName: 'Lichtheimia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'lichtheimia-corymbifera', name: 'Opportunistic Mucor', scientificName: 'Lichtheimia corymbifera', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'thamnidiaceae', name: 'Thamnidiaceae', scientificName: 'Thamnidiaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'thamnidium', name: 'Thamnidium', scientificName: 'Thamnidium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'thamnidium-elegans', name: 'Meat Aging Mold', scientificName: 'Thamnidium elegans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phycomycetaceae', name: 'Phycomycetaceae', scientificName: 'Phycomycetaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'phycomyces', name: 'Phycomyces', scientificName: 'Phycomyces', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'phycomyces-blakesleeanus', name: 'Light-sensing Fungus', scientificName: 'Phycomyces blakesleeanus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'mortierellales', name: 'Mortierellales', scientificName: 'Mortierellales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'mortierellaceae', name: 'Mortierellaceae', scientificName: 'Mortierellaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'mortierella', name: 'Soil Molds', scientificName: 'Mortierella', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'mortierella-alpina', name: 'Arachidonic Acid Producer', scientificName: 'Mortierella alpina', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'entomophthoromycetes', name: 'Insect Destroyers', scientificName: 'Entomophthoromycetes', rank: 'class', speciesCount: 200,
          children: [
            { id: 'entomophthorales', name: 'Entomophthorales', scientificName: 'Entomophthorales', rank: 'order', speciesCount: 150,
              children: [
                { id: 'entomophthoraceae', name: 'Entomophthoraceae', scientificName: 'Entomophthoraceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'entomophthora', name: 'Fly Killers', scientificName: 'Entomophthora', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'entomophthora-muscae', name: 'Fly-killing Fungus', scientificName: 'Entomophthora muscae', rank: 'species' },
                        { id: 'entomophthora-culicis', name: 'Mosquito Killer', scientificName: 'Entomophthora culicis', rank: 'species' }
                      ]
                    },
                    { id: 'pandora', name: 'Aphid Killers', scientificName: 'Pandora', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'pandora-neoaphidis', name: 'Aphid Pathogen', scientificName: 'Pandora neoaphidis', rank: 'species' }
                      ]
                    },
                    { id: 'erynia', name: 'Erynia', scientificName: 'Erynia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'erynia-conica', name: 'Fly Pathogen', scientificName: 'Erynia conica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ancylistaceae', name: 'Ancylistaceae', scientificName: 'Ancylistaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'conidiobolus', name: 'Conidiobolus', scientificName: 'Conidiobolus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'conidiobolus-coronatus', name: 'Human Pathogen', scientificName: 'Conidiobolus coronatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'basidiobolaceae', name: 'Basidiobolaceae', scientificName: 'Basidiobolaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'basidiobolus', name: 'Basidiobolus', scientificName: 'Basidiobolus', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'basidiobolus-ranarum', name: 'Frog Gut Fungus', scientificName: 'Basidiobolus ranarum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'kickxellomycetes', name: 'Kickxellomycetes', scientificName: 'Kickxellomycetes', rank: 'class', speciesCount: 150,
          children: [
            { id: 'kickxellales', name: 'Kickxellales', scientificName: 'Kickxellales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'kickxellaceae', name: 'Kickxellaceae', scientificName: 'Kickxellaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'kickxella', name: 'Kickxella', scientificName: 'Kickxella', rank: 'genus', speciesCount: 10 }
                  ]
                }
              ]
            },
            { id: 'dimargaritales', name: 'Dimargaritales', scientificName: 'Dimargaritales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'dimargaritaceae', name: 'Dimargaritaceae', scientificName: 'Dimargaritaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'dimargaris', name: 'Mycoparasites', scientificName: 'Dimargaris', rank: 'genus', speciesCount: 15 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'chytridiomycota',
      name: 'Chytrids',
      scientificName: 'Chytridiomycota',
      rank: 'phylum',
      description: 'Aquatic fungi with flagellated spores, includes devastating amphibian pathogen',
      speciesCount: 1000,
      children: [
        { id: 'chytridiomycetes', name: 'Chytridiomycetes', scientificName: 'Chytridiomycetes', rank: 'class', speciesCount: 700,
          children: [
            { id: 'rhizophydiales', name: 'Rhizophydiales', scientificName: 'Rhizophydiales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'rhizophydiaceae', name: 'Rhizophydiaceae', scientificName: 'Rhizophydiaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'rhizophydium', name: 'Rhizophydium', scientificName: 'Rhizophydium', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'rhizophydium-sphaerotheca', name: 'Algal Parasite', scientificName: 'Rhizophydium sphaerotheca', rank: 'species' }
                      ]
                    },
                    { id: 'batrachochytrium', name: 'Amphibian Killers', scientificName: 'Batrachochytrium', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'batrachochytrium-dendrobatidis', name: 'Chytrid Fungus (Bd)', scientificName: 'Batrachochytrium dendrobatidis', rank: 'species' },
                        { id: 'batrachochytrium-salamandrivorans', name: 'Salamander Chytrid (Bsal)', scientificName: 'Batrachochytrium salamandrivorans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'alphamycetaceae', name: 'Alphamycetaceae', scientificName: 'Alphamycetaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'alphamyces', name: 'Alphamyces', scientificName: 'Alphamyces', rank: 'genus', speciesCount: 10 }
                  ]
                }
              ]
            },
            { id: 'chytridiales', name: 'Chytridiales', scientificName: 'Chytridiales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'chytridiaceae', name: 'Chytridiaceae', scientificName: 'Chytridiaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'chytridium', name: 'Chytridium', scientificName: 'Chytridium', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'chytridium-confervae', name: 'Algae Chytrid', scientificName: 'Chytridium confervae', rank: 'species' }
                      ]
                    },
                    { id: 'podochytrium', name: 'Podochytrium', scientificName: 'Podochytrium', rank: 'genus', speciesCount: 15 }
                  ]
                },
                { id: 'synchytriaceae', name: 'Synchytriaceae', scientificName: 'Synchytriaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'synchytrium', name: 'Wart Fungi', scientificName: 'Synchytrium', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'synchytrium-endobioticum', name: 'Potato Wart Disease', scientificName: 'Synchytrium endobioticum', rank: 'species' },
                        { id: 'synchytrium-mercurialis', name: 'Dog\'s Mercury Wart', scientificName: 'Synchytrium mercurialis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'spizellomycetales', name: 'Spizellomycetales', scientificName: 'Spizellomycetales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'spizellomycetaceae', name: 'Spizellomycetaceae', scientificName: 'Spizellomycetaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'spizellomyces', name: 'Spizellomyces', scientificName: 'Spizellomyces', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'spizellomyces-punctatus', name: 'Soil Chytrid', scientificName: 'Spizellomyces punctatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'lobulomycetales', name: 'Lobulomycetales', scientificName: 'Lobulomycetales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'lobulomycetaceae', name: 'Lobulomycetaceae', scientificName: 'Lobulomycetaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'lobulomyces', name: 'Lobulomyces', scientificName: 'Lobulomyces', rank: 'genus', speciesCount: 10 }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'monoblepharidomycetes', name: 'Monoblepharidomycetes', scientificName: 'Monoblepharidomycetes', rank: 'class', speciesCount: 50,
          children: [
            { id: 'monoblepharidales', name: 'Monoblepharidales', scientificName: 'Monoblepharidales', rank: 'order', speciesCount: 40,
              children: [
                { id: 'monoblepharidaceae', name: 'Monoblepharidaceae', scientificName: 'Monoblepharidaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'monoblepharella', name: 'Monoblepharella', scientificName: 'Monoblepharella', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'monoblepharella-taylori', name: 'Freshwater Chytrid', scientificName: 'Monoblepharella taylori', rank: 'species' }
                      ]
                    },
                    { id: 'gonapodya', name: 'Gonapodya', scientificName: 'Gonapodya', rank: 'genus', speciesCount: 10 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'microsporidia',
      name: 'Microsporidia',
      scientificName: 'Microsporidia',
      rank: 'phylum',
      description: 'Obligate intracellular parasites, once classified as protists',
      speciesCount: 1500,
      children: [
        { id: 'microsporea', name: 'Microsporea', scientificName: 'Microsporea', rank: 'class', speciesCount: 1200,
          children: [
            { id: 'microsporida', name: 'Microsporida', scientificName: 'Microsporida', rank: 'order', speciesCount: 800,
              children: [
                { id: 'nosematidae', name: 'Nosematidae', scientificName: 'Nosematidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'nosema', name: 'Nosema', scientificName: 'Nosema', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'nosema-ceranae', name: 'Honeybee Nosema', scientificName: 'Nosema ceranae', rank: 'species' },
                        { id: 'nosema-apis', name: 'European Honeybee Nosema', scientificName: 'Nosema apis', rank: 'species' },
                        { id: 'nosema-bombycis', name: 'Silkworm Nosema', scientificName: 'Nosema bombycis', rank: 'species' }
                      ]
                    },
                    { id: 'vairimorpha', name: 'Vairimorpha', scientificName: 'Vairimorpha', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'vairimorpha-necatrix', name: 'Caterpillar Pathogen', scientificName: 'Vairimorpha necatrix', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'encephalitozoonidae', name: 'Encephalitozoonidae', scientificName: 'Encephalitozoonidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'encephalitozoon', name: 'Encephalitozoon', scientificName: 'Encephalitozoon', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'encephalitozoon-cuniculi', name: 'Rabbit Parasite', scientificName: 'Encephalitozoon cuniculi', rank: 'species' },
                        { id: 'encephalitozoon-intestinalis', name: 'Human Intestinal Parasite', scientificName: 'Encephalitozoon intestinalis', rank: 'species' },
                        { id: 'encephalitozoon-hellem', name: 'Bird & Human Parasite', scientificName: 'Encephalitozoon hellem', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'enterocytozoonidae', name: 'Enterocytozoonidae', scientificName: 'Enterocytozoonidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'enterocytozoon', name: 'Enterocytozoon', scientificName: 'Enterocytozoon', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'enterocytozoon-bieneusi', name: 'AIDS-related Parasite', scientificName: 'Enterocytozoon bieneusi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'unikaryonidae', name: 'Unikaryonidae', scientificName: 'Unikaryonidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'unikaryon', name: 'Unikaryon', scientificName: 'Unikaryon', rank: 'genus', speciesCount: 15 }
                  ]
                },
                { id: 'tubulinosematidae', name: 'Tubulinosematidae', scientificName: 'Tubulinosematidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'tubulinosema', name: 'Tubulinosema', scientificName: 'Tubulinosema', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'tubulinosema-acridophagus', name: 'Grasshopper Pathogen', scientificName: 'Tubulinosema acridophagus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'glugeidae', name: 'Glugeidae', scientificName: 'Glugeidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'glugea', name: 'Fish Parasites', scientificName: 'Glugea', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'glugea-anomala', name: 'Stickleback Microsporidian', scientificName: 'Glugea anomala', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'thelohaniidae', name: 'Thelohaniidae', scientificName: 'Thelohaniidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'thelohania', name: 'Crustacean Parasites', scientificName: 'Thelohania', rank: 'genus', speciesCount: 40 }
                  ]
                },
                { id: 'pleistophoridae', name: 'Pleistophoridae', scientificName: 'Pleistophoridae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'pleistophora', name: 'Muscle Parasites', scientificName: 'Pleistophora', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'pleistophora-typicalis', name: 'Zebrafish Parasite', scientificName: 'Pleistophora typicalis', rank: 'species' }
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
      id: 'glomeromycota',
      name: 'Arbuscular Mycorrhizal Fungi',
      scientificName: 'Glomeromycota',
      rank: 'phylum',
      description: 'Symbiotic fungi forming arbuscular mycorrhizae with most land plants',
      speciesCount: 300,
      children: [
        { id: 'glomeromycetes', name: 'Glomeromycetes', scientificName: 'Glomeromycetes', rank: 'class', speciesCount: 280,
          children: [
            { id: 'glomerales', name: 'Glomerales', scientificName: 'Glomerales', rank: 'order', speciesCount: 150,
              children: [
                { id: 'glomeraceae', name: 'Glomeraceae', scientificName: 'Glomeraceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'glomus', name: 'Glomus', scientificName: 'Glomus', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'glomus-mosseae', name: 'Common AM Fungus', scientificName: 'Funneliformis mosseae', rank: 'species' },
                        { id: 'glomus-intraradices', name: 'Root Colonizer', scientificName: 'Rhizophagus irregularis', rank: 'species' },
                        { id: 'glomus-fasciculatum', name: 'AM Symbiont', scientificName: 'Glomus fasciculatum', rank: 'species' }
                      ]
                    },
                    { id: 'funneliformis', name: 'Funnel-forming AM', scientificName: 'Funneliformis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'funneliformis-mosseae', name: 'Common Mycorrhiza', scientificName: 'Funneliformis mosseae', rank: 'species' }
                      ]
                    },
                    { id: 'rhizophagus', name: 'Root-eating AM', scientificName: 'Rhizophagus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'rhizophagus-irregularis', name: 'Model AM Fungus', scientificName: 'Rhizophagus irregularis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'claroideoglomeraceae', name: 'Claroideoglomeraceae', scientificName: 'Claroideoglomeraceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'claroideoglomus', name: 'Claroideoglomus', scientificName: 'Claroideoglomus', rank: 'genus', speciesCount: 20 }
                  ]
                }
              ]
            },
            { id: 'diversisporales', name: 'Diversisporales', scientificName: 'Diversisporales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'gigasporaceae', name: 'Giant-spored AM', scientificName: 'Gigasporaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'gigaspora', name: 'Giant Spores', scientificName: 'Gigaspora', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'gigaspora-margarita', name: 'Pearl Spore AM', scientificName: 'Gigaspora margarita', rank: 'species' },
                        { id: 'gigaspora-rosea', name: 'Rose-colored Spore AM', scientificName: 'Gigaspora rosea', rank: 'species' }
                      ]
                    },
                    { id: 'scutellospora', name: 'Shield Spores', scientificName: 'Scutellospora', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'scutellospora-calospora', name: 'Beautiful Spore AM', scientificName: 'Scutellospora calospora', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'acaulosporaceae', name: 'Acaulosporaceae', scientificName: 'Acaulosporaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'acaulospora', name: 'Stemless Spores', scientificName: 'Acaulospora', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'acaulospora-laevis', name: 'Smooth AM', scientificName: 'Acaulospora laevis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'diversisporaceae', name: 'Diversisporaceae', scientificName: 'Diversisporaceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'diversispora', name: 'Diversispora', scientificName: 'Diversispora', rank: 'genus', speciesCount: 10 }
                  ]
                }
              ]
            },
            { id: 'archaeosporales', name: 'Archaeosporales', scientificName: 'Archaeosporales', rank: 'order', speciesCount: 30,
              children: [
                { id: 'archaeosporaceae', name: 'Archaeosporaceae', scientificName: 'Archaeosporaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'archaeospora', name: 'Ancient AM', scientificName: 'Archaeospora', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'archaeospora-trappei', name: 'Trapp\'s AM', scientificName: 'Archaeospora trappei', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'geosiphonaceae', name: 'Geosiphonaceae', scientificName: 'Geosiphonaceae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'geosiphon', name: 'Cyanobacteria Symbiont', scientificName: 'Geosiphon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'geosiphon-pyriformis', name: 'Nostoc Symbiont', scientificName: 'Geosiphon pyriformis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'paraglomerales', name: 'Paraglomerales', scientificName: 'Paraglomerales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'paraglomeraceae', name: 'Paraglomeraceae', scientificName: 'Paraglomeraceae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'paraglomus', name: 'Paraglomus', scientificName: 'Paraglomus', rank: 'genus', speciesCount: 10 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'neocallimastigomycota',
      name: 'Anaerobic Gut Fungi',
      scientificName: 'Neocallimastigomycota',
      rank: 'phylum',
      description: 'Anaerobic fungi found in digestive systems of herbivores, unique among fungi in lacking mitochondria',
      speciesCount: 50,
      children: [
        { id: 'neocallimastigomycetes', name: 'Neocallimastigomycetes', scientificName: 'Neocallimastigomycetes', rank: 'class', speciesCount: 50,
          children: [
            { id: 'neocallimastigales', name: 'Neocallimastigales', scientificName: 'Neocallimastigales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'neocallimastigaceae', name: 'Neocallimastigaceae', scientificName: 'Neocallimastigaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'neocallimastix', name: 'Rumen Fungi', scientificName: 'Neocallimastix', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'neocallimastix-frontalis', name: 'Cow Rumen Fungus', scientificName: 'Neocallimastix frontalis', rank: 'species' },
                        { id: 'neocallimastix-patriciarum', name: 'Sheep Rumen Fungus', scientificName: 'Neocallimastix patriciarum', rank: 'species' }
                      ]
                    },
                    { id: 'piromyces', name: 'Fire Fungi', scientificName: 'Piromyces', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'piromyces-communis', name: 'Common Gut Fungus', scientificName: 'Piromyces communis', rank: 'species' },
                        { id: 'piromyces-rhizinflatus', name: 'Root-swelling Gut Fungus', scientificName: 'Piromyces rhizinflatus', rank: 'species' }
                      ]
                    },
                    { id: 'anaeromyces', name: 'Anaerobic Fungi', scientificName: 'Anaeromyces', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'anaeromyces-mucronatus', name: 'Pointed Gut Fungus', scientificName: 'Anaeromyces mucronatus', rank: 'species' }
                      ]
                    },
                    { id: 'orpinomyces', name: 'Orpin\'s Fungi', scientificName: 'Orpinomyces', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'orpinomyces-bovis', name: 'Cattle Gut Fungus', scientificName: 'Orpinomyces bovis', rank: 'species' }
                      ]
                    },
                    { id: 'caecomyces', name: 'Cecum Fungi', scientificName: 'Caecomyces', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'caecomyces-equi', name: 'Horse Gut Fungus', scientificName: 'Caecomyces equi', rank: 'species' }
                      ]
                    },
                    { id: 'cyllamyces', name: 'Cyllamyces', scientificName: 'Cyllamyces', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'cyllamyces-aberensis', name: 'Buffalo Gut Fungus', scientificName: 'Cyllamyces aberensis', rank: 'species' }
                      ]
                    },
                    { id: 'buwchfawromyces', name: 'Buwchfawromyces', scientificName: 'Buwchfawromyces', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'buwchfawromyces-eastonii', name: 'Goat Gut Fungus', scientificName: 'Buwchfawromyces eastonii', rank: 'species' }
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
      id: 'blastocladiomycota',
      name: 'Blastoclads',
      scientificName: 'Blastocladiomycota',
      rank: 'phylum',
      description: 'Aquatic fungi with alternation of generations and unique reproductive structures',
      speciesCount: 200,
      children: [
        { id: 'blastocladiomycetes', name: 'Blastocladiomycetes', scientificName: 'Blastocladiomycetes', rank: 'class', speciesCount: 200,
          children: [
            { id: 'blastocladiales', name: 'Blastocladiales', scientificName: 'Blastocladiales', rank: 'order', speciesCount: 180,
              children: [
                { id: 'blastocladiaceae', name: 'Blastocladiaceae', scientificName: 'Blastocladiaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'blastocladia', name: 'Blastocladia', scientificName: 'Blastocladia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'blastocladia-pringsheimii', name: 'Pringsheim\'s Blastoclad', scientificName: 'Blastocladia pringsheimii', rank: 'species' }
                      ]
                    },
                    { id: 'blastocladiella', name: 'Blastocladiella', scientificName: 'Blastocladiella', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'blastocladiella-emersonii', name: 'Model Blastoclad', scientificName: 'Blastocladiella emersonii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'catenariaceae', name: 'Catenariaceae', scientificName: 'Catenariaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'catenaria', name: 'Chain Fungi', scientificName: 'Catenaria', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'catenaria-anguillulae', name: 'Nematode Parasite', scientificName: 'Catenaria anguillulae', rank: 'species' }
                      ]
                    },
                    { id: 'catenophlyctis', name: 'Catenophlyctis', scientificName: 'Catenophlyctis', rank: 'genus', speciesCount: 5 }
                  ]
                },
                { id: 'coelomomycetaceae', name: 'Coelomomycetaceae', scientificName: 'Coelomomycetaceae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'coelomomyces', name: 'Mosquito Parasites', scientificName: 'Coelomomyces', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'coelomomyces-stegomyiae', name: 'Aedes Mosquito Parasite', scientificName: 'Coelomomyces stegomyiae', rank: 'species' },
                        { id: 'coelomomyces-psorophorae', name: 'Mosquito Biocontrol Agent', scientificName: 'Coelomomyces psorophorae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'physodermataceae', name: 'Physodermataceae', scientificName: 'Physodermataceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'physoderma', name: 'Plant Parasites', scientificName: 'Physoderma', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'physoderma-maydis', name: 'Corn Brown Spot', scientificName: 'Physoderma maydis', rank: 'species' }
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
      id: 'cryptomycota',
      name: 'Hidden Fungi',
      scientificName: 'Cryptomycota',
      rank: 'phylum',
      description: 'Recently discovered microscopic fungal lineage, many uncultured environmental sequences',
      speciesCount: 100,
      children: [
        { id: 'rozellomycetes', name: 'Rozellomycetes', scientificName: 'Rozellomycetes', rank: 'class', speciesCount: 80,
          children: [
            { id: 'rozellales', name: 'Rozellales', scientificName: 'Rozellales', rank: 'order', speciesCount: 60,
              children: [
                { id: 'rozellaceae', name: 'Rozellaceae', scientificName: 'Rozellaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'rozella', name: 'Chytrid Parasites', scientificName: 'Rozella', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'rozella-allomycis', name: 'Allomyces Parasite', scientificName: 'Rozella allomycis', rank: 'species' },
                        { id: 'rozella-polyphagi', name: 'Polyphagus Parasite', scientificName: 'Rozella polyphagi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'paramicrosporidiumclass', name: 'Paramicrosporidium Class', scientificName: 'incertae sedis', rank: 'class', speciesCount: 20,
          children: [
            { id: 'paramicrosporidiales', name: 'Paramicrosporidiales', scientificName: 'Paramicrosporidiales', rank: 'order', speciesCount: 15,
              children: [
                { id: 'paramicrosporidiaceae', name: 'Paramicrosporidiaceae', scientificName: 'Paramicrosporidiaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'paramicrosporidium', name: 'Amoeba Parasites', scientificName: 'Paramicrosporidium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'paramicrosporidium-saccamoebae', name: 'Amoeba Infector', scientificName: 'Paramicrosporidium saccamoebae', rank: 'species' }
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
      id: 'aphelidiomycota',
      name: 'Aphelids',
      scientificName: 'Aphelidiomycota',
      rank: 'phylum',
      description: 'Intracellular parasites of algae, recently recognized as early-diverging fungi',
      speciesCount: 30,
      children: [
        { id: 'aphelidiomycetes', name: 'Aphelidiomycetes', scientificName: 'Aphelidiomycetes', rank: 'class', speciesCount: 30,
          children: [
            { id: 'aphelidiales', name: 'Aphelidiales', scientificName: 'Aphelidiales', rank: 'order', speciesCount: 25,
              children: [
                { id: 'aphelidiaceae', name: 'Aphelidiaceae', scientificName: 'Aphelidiaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'aphelidium', name: 'Algal Parasites', scientificName: 'Aphelidium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'aphelidium-tribonematis', name: 'Yellow-green Algae Parasite', scientificName: 'Aphelidium tribonematis', rank: 'species' }
                      ]
                    },
                    { id: 'amoeboaphelidium', name: 'Amoeboid Parasites', scientificName: 'Amoeboaphelidium', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'amoeboaphelidium-protococcarum', name: 'Green Algae Parasite', scientificName: 'Amoeboaphelidium protococcarum', rank: 'species' }
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
