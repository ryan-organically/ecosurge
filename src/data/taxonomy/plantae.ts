import type { TaxonNode } from './types'

export const plantae: TaxonNode =
{
  id: 'plantae',
  name: 'Plants',
  scientificName: 'Plantae',
  rank: 'kingdom',
  description: 'Multicellular, photosynthetic organisms',
  speciesCount: 400000,
  children: [
    {
      id: 'angiosperms',
      name: 'Flowering Plants',
      scientificName: 'Magnoliophyta',
      rank: 'phylum',
      speciesCount: 300000,
      children: [
        {
          id: 'eudicots',
          name: 'Eudicots',
          scientificName: 'Eudicotyledoneae',
          rank: 'class',
          speciesCount: 200000,
          children: [
            { id: 'rosales', name: 'Roses & Allies', scientificName: 'Rosales', rank: 'order', speciesCount: 7700,
              children: [
                { id: 'rosaceae', name: 'Rose Family', scientificName: 'Rosaceae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'rosa', name: 'Roses', scientificName: 'Rosa', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'rosa-damascena', name: 'Damask Rose', scientificName: 'Rosa damascena', rank: 'species' },
                        { id: 'rosa-canina', name: 'Dog Rose', scientificName: 'Rosa canina', rank: 'species' }
                      ]
                    },
                    { id: 'malus', name: 'Apples', scientificName: 'Malus', rank: 'genus', speciesCount: 55,
                      children: [
                        { id: 'malus-domestica', name: 'Apple', scientificName: 'Malus domestica', rank: 'species' }
                      ]
                    },
                    { id: 'prunus', name: 'Stone Fruits', scientificName: 'Prunus', rank: 'genus', speciesCount: 430,
                      children: [
                        { id: 'prunus-persica', name: 'Peach', scientificName: 'Prunus persica', rank: 'species' },
                        { id: 'prunus-avium', name: 'Sweet Cherry', scientificName: 'Prunus avium', rank: 'species' },
                        { id: 'prunus-serrulata', name: 'Japanese Cherry', scientificName: 'Prunus serrulata', rank: 'species' }
                      ]
                    },
                    { id: 'fragaria', name: 'Strawberries', scientificName: 'Fragaria', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'fragaria-ananassa', name: 'Garden Strawberry', scientificName: 'Fragaria × ananassa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'moraceae', name: 'Mulberry Family', scientificName: 'Moraceae', rank: 'family', speciesCount: 1100,
                  children: [
                    { id: 'ficus', name: 'Figs', scientificName: 'Ficus', rank: 'genus', speciesCount: 850,
                      children: [
                        { id: 'ficus-carica', name: 'Common Fig', scientificName: 'Ficus carica', rank: 'species' },
                        { id: 'ficus-benghalensis', name: 'Banyan Tree', scientificName: 'Ficus benghalensis', rank: 'species' },
                        { id: 'ficus-religiosa', name: 'Sacred Fig', scientificName: 'Ficus religiosa', rank: 'species' },
                        { id: 'ficus-elastica', name: 'Rubber Plant', scientificName: 'Ficus elastica', rank: 'species' }
                      ]
                    },
                    { id: 'morus', name: 'Mulberries', scientificName: 'Morus', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'morus-alba', name: 'White Mulberry', scientificName: 'Morus alba', rank: 'species' },
                        { id: 'morus-nigra', name: 'Black Mulberry', scientificName: 'Morus nigra', rank: 'species' }
                      ]
                    },
                    { id: 'artocarpus', name: 'Breadfruits', scientificName: 'Artocarpus', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'artocarpus-altilis', name: 'Breadfruit', scientificName: 'Artocarpus altilis', rank: 'species' },
                        { id: 'artocarpus-heterophyllus', name: 'Jackfruit', scientificName: 'Artocarpus heterophyllus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ulmaceae', name: 'Elm Family', scientificName: 'Ulmaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'ulmus', name: 'Elms', scientificName: 'Ulmus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'ulmus-americana', name: 'American Elm', scientificName: 'Ulmus americana', rank: 'species' },
                        { id: 'ulmus-procera', name: 'English Elm', scientificName: 'Ulmus procera', rank: 'species' },
                        { id: 'ulmus-parvifolia', name: 'Chinese Elm', scientificName: 'Ulmus parvifolia', rank: 'species' }
                      ]
                    },
                    { id: 'zelkova', name: 'Zelkovas', scientificName: 'Zelkova', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'zelkova-serrata', name: 'Japanese Zelkova', scientificName: 'Zelkova serrata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cannabaceae', name: 'Hemp Family', scientificName: 'Cannabaceae', rank: 'family', speciesCount: 170,
                  children: [
                    { id: 'cannabis', name: 'Hemp', scientificName: 'Cannabis', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'cannabis-sativa', name: 'Hemp', scientificName: 'Cannabis sativa', rank: 'species' }
                      ]
                    },
                    { id: 'humulus', name: 'Hops', scientificName: 'Humulus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'humulus-lupulus', name: 'Common Hop', scientificName: 'Humulus lupulus', rank: 'species' }
                      ]
                    },
                    { id: 'celtis', name: 'Hackberries', scientificName: 'Celtis', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'celtis-occidentalis', name: 'Common Hackberry', scientificName: 'Celtis occidentalis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'malpighiales', name: 'Malpighiales', scientificName: 'Malpighiales', rank: 'order', speciesCount: 16000,
              children: [
                { id: 'euphorbiaceae', name: 'Spurge Family', scientificName: 'Euphorbiaceae', rank: 'family', speciesCount: 6000,
                  children: [
                    { id: 'euphorbia', name: 'Spurges', scientificName: 'Euphorbia', rank: 'genus', speciesCount: 2000,
                      children: [
                        { id: 'euphorbia-pulcherrima', name: 'Poinsettia', scientificName: 'Euphorbia pulcherrima', rank: 'species' },
                        { id: 'euphorbia-milii', name: 'Crown of Thorns', scientificName: 'Euphorbia milii', rank: 'species' },
                        { id: 'euphorbia-tirucalli', name: 'Pencil Cactus', scientificName: 'Euphorbia tirucalli', rank: 'species' },
                        { id: 'euphorbia-obesa', name: 'Baseball Plant', scientificName: 'Euphorbia obesa', rank: 'species' },
                        { id: 'euphorbia-peplus', name: 'Petty Spurge', scientificName: 'Euphorbia peplus', rank: 'species' },
                        { id: 'euphorbia-helioscopia', name: 'Sun Spurge', scientificName: 'Euphorbia helioscopia', rank: 'species' }
                      ]
                    },
                    { id: 'manihot', name: 'Cassava', scientificName: 'Manihot', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'manihot-esculenta', name: 'Cassava', scientificName: 'Manihot esculenta', rank: 'species' }
                      ]
                    },
                    { id: 'ricinus', name: 'Castor Bean', scientificName: 'Ricinus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ricinus-communis', name: 'Castor Bean', scientificName: 'Ricinus communis', rank: 'species' }
                      ]
                    },
                    { id: 'hevea', name: 'Rubber Trees', scientificName: 'Hevea', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'hevea-brasiliensis', name: 'Rubber Tree', scientificName: 'Hevea brasiliensis', rank: 'species' }
                      ]
                    },
                    { id: 'jatropha', name: 'Jatrophas', scientificName: 'Jatropha', rank: 'genus', speciesCount: 170,
                      children: [
                        { id: 'jatropha-curcas', name: 'Physic Nut', scientificName: 'Jatropha curcas', rank: 'species' }
                      ]
                    },
                    { id: 'croton', name: 'Crotons', scientificName: 'Croton', rank: 'genus', speciesCount: 1300,
                      children: [
                        { id: 'croton-lechleri', name: 'Dragon\'s Blood Tree', scientificName: 'Croton lechleri', rank: 'species' }
                      ]
                    },
                    { id: 'acalypha', name: 'Copperleafs', scientificName: 'Acalypha', rank: 'genus', speciesCount: 450,
                      children: [
                        { id: 'acalypha-hispida', name: 'Chenille Plant', scientificName: 'Acalypha hispida', rank: 'species' }
                      ]
                    },
                    { id: 'codiaeum', name: 'Crotons', scientificName: 'Codiaeum', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'codiaeum-variegatum', name: 'Garden Croton', scientificName: 'Codiaeum variegatum', rank: 'species' }
                      ]
                    },
                    { id: 'mercurialis', name: 'Mercury Plants', scientificName: 'Mercurialis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'mercurialis-perennis', name: 'Dog\'s Mercury', scientificName: 'Mercurialis perennis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'salicaceae', name: 'Willow Family', scientificName: 'Salicaceae', rank: 'family', speciesCount: 1200,
                  children: [
                    { id: 'salix', name: 'Willows', scientificName: 'Salix', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'salix-babylonica', name: 'Weeping Willow', scientificName: 'Salix babylonica', rank: 'species' },
                        { id: 'salix-alba', name: 'White Willow', scientificName: 'Salix alba', rank: 'species' },
                        { id: 'salix-caprea', name: 'Goat Willow', scientificName: 'Salix caprea', rank: 'species' }
                      ]
                    },
                    { id: 'populus', name: 'Poplars & Aspens', scientificName: 'Populus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'populus-tremula', name: 'European Aspen', scientificName: 'Populus tremula', rank: 'species' },
                        { id: 'populus-nigra', name: 'Black Poplar', scientificName: 'Populus nigra', rank: 'species' },
                        { id: 'populus-deltoides', name: 'Eastern Cottonwood', scientificName: 'Populus deltoides', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'linaceae', name: 'Flax Family', scientificName: 'Linaceae', rank: 'family', speciesCount: 250,
                  children: [
                    { id: 'linum', name: 'Flaxes', scientificName: 'Linum', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'linum-usitatissimum', name: 'Common Flax', scientificName: 'Linum usitatissimum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'passifloraceae', name: 'Passion Flower Family', scientificName: 'Passifloraceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'passiflora', name: 'Passion Flowers', scientificName: 'Passiflora', rank: 'genus', speciesCount: 550,
                      children: [
                        { id: 'passiflora-edulis', name: 'Passion Fruit', scientificName: 'Passiflora edulis', rank: 'species' },
                        { id: 'passiflora-incarnata', name: 'Maypop', scientificName: 'Passiflora incarnata', rank: 'species' },
                        { id: 'passiflora-caerulea', name: 'Blue Passion Flower', scientificName: 'Passiflora caerulea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'violaceae', name: 'Violet Family', scientificName: 'Violaceae', rank: 'family', speciesCount: 800,
                  children: [
                    { id: 'viola', name: 'Violets & Pansies', scientificName: 'Viola', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'viola-odorata', name: 'Sweet Violet', scientificName: 'Viola odorata', rank: 'species' },
                        { id: 'viola-tricolor', name: 'Wild Pansy', scientificName: 'Viola tricolor', rank: 'species' },
                        { id: 'viola-wittrockiana', name: 'Garden Pansy', scientificName: 'Viola × wittrockiana', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'clusiaceae', name: 'Mangosteen Family', scientificName: 'Clusiaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'garcinia', name: 'Mangosteens', scientificName: 'Garcinia', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'garcinia-mangostana', name: 'Mangosteen', scientificName: 'Garcinia mangostana', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hypericaceae', name: 'St. John\'s Wort Family', scientificName: 'Hypericaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'hypericum', name: 'St. John\'s Worts', scientificName: 'Hypericum', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'hypericum-perforatum', name: 'St. John\'s Wort', scientificName: 'Hypericum perforatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'erythroxylaceae', name: 'Coca Family', scientificName: 'Erythroxylaceae', rank: 'family', speciesCount: 240,
                  children: [
                    { id: 'erythroxylum', name: 'Coca Plants', scientificName: 'Erythroxylum', rank: 'genus', speciesCount: 230,
                      children: [
                        { id: 'erythroxylum-coca', name: 'Coca', scientificName: 'Erythroxylum coca', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'fabales', name: 'Legumes', scientificName: 'Fabales', rank: 'order', speciesCount: 20000,
              children: [
                { id: 'fabaceae', name: 'Bean Family', scientificName: 'Fabaceae', rank: 'family', speciesCount: 19000,
                  children: [
                    { id: 'acacia', name: 'Acacias', scientificName: 'Acacia', rank: 'genus', speciesCount: 1350,
                      children: [
                        { id: 'acacia-senegal', name: 'Gum Arabic Tree', scientificName: 'Acacia senegal', rank: 'species' },
                        { id: 'acacia-tortilis', name: 'Umbrella Thorn', scientificName: 'Acacia tortilis', rank: 'species' }
                      ]
                    },
                    { id: 'pisum', name: 'Peas', scientificName: 'Pisum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pisum-sativum', name: 'Garden Pea', scientificName: 'Pisum sativum', rank: 'species' }
                      ]
                    },
                    { id: 'glycine', name: 'Soybeans', scientificName: 'Glycine', rank: 'genus', speciesCount: 26,
                      children: [
                        { id: 'glycine-max', name: 'Soybean', scientificName: 'Glycine max', rank: 'species' }
                      ]
                    },
                    { id: 'arachis', name: 'Peanuts', scientificName: 'Arachis', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'arachis-hypogaea', name: 'Peanut', scientificName: 'Arachis hypogaea', rank: 'species' }
                      ]
                    },
                    { id: 'phaseolus', name: 'Beans', scientificName: 'Phaseolus', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'phaseolus-vulgaris', name: 'Common Bean', scientificName: 'Phaseolus vulgaris', rank: 'species' },
                        { id: 'phaseolus-lunatus', name: 'Lima Bean', scientificName: 'Phaseolus lunatus', rank: 'species' }
                      ]
                    },
                    { id: 'wisteria', name: 'Wisterias', scientificName: 'Wisteria', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'wisteria-sinensis', name: 'Chinese Wisteria', scientificName: 'Wisteria sinensis', rank: 'species' }
                      ]
                    },
                    { id: 'trifolium', name: 'Clovers', scientificName: 'Trifolium', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'trifolium-repens', name: 'White Clover', scientificName: 'Trifolium repens', rank: 'species' },
                        { id: 'trifolium-pratense', name: 'Red Clover', scientificName: 'Trifolium pratense', rank: 'species' }
                      ]
                    },
                    { id: 'medicago', name: 'Medicks', scientificName: 'Medicago', rank: 'genus', speciesCount: 87,
                      children: [
                        { id: 'medicago-sativa', name: 'Alfalfa', scientificName: 'Medicago sativa', rank: 'species' }
                      ]
                    },
                    { id: 'lupinus', name: 'Lupines', scientificName: 'Lupinus', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'lupinus-polyphyllus', name: 'Large-leaved Lupine', scientificName: 'Lupinus polyphyllus', rank: 'species' },
                        { id: 'lupinus-albus', name: 'White Lupine', scientificName: 'Lupinus albus', rank: 'species' }
                      ]
                    },
                    { id: 'lens', name: 'Lentils', scientificName: 'Lens', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'lens-culinaris', name: 'Lentil', scientificName: 'Lens culinaris', rank: 'species' }
                      ]
                    },
                    { id: 'cicer', name: 'Chickpeas', scientificName: 'Cicer', rank: 'genus', speciesCount: 44,
                      children: [
                        { id: 'cicer-arietinum', name: 'Chickpea', scientificName: 'Cicer arietinum', rank: 'species' }
                      ]
                    },
                    { id: 'vicia', name: 'Vetches', scientificName: 'Vicia', rank: 'genus', speciesCount: 140,
                      children: [
                        { id: 'vicia-faba', name: 'Broad Bean', scientificName: 'Vicia faba', rank: 'species' }
                      ]
                    },
                    { id: 'mimosa', name: 'Mimosas', scientificName: 'Mimosa', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'mimosa-pudica', name: 'Sensitive Plant', scientificName: 'Mimosa pudica', rank: 'species' }
                      ]
                    },
                    { id: 'robinia', name: 'Locusts', scientificName: 'Robinia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'robinia-pseudoacacia', name: 'Black Locust', scientificName: 'Robinia pseudoacacia', rank: 'species' }
                      ]
                    },
                    { id: 'tamarindus', name: 'Tamarind', scientificName: 'Tamarindus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'tamarindus-indica', name: 'Tamarind', scientificName: 'Tamarindus indica', rank: 'species' }
                      ]
                    },
                    { id: 'cercis', name: 'Redbuds', scientificName: 'Cercis', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'cercis-canadensis', name: 'Eastern Redbud', scientificName: 'Cercis canadensis', rank: 'species' },
                        { id: 'cercis-siliquastrum', name: 'Judas Tree', scientificName: 'Cercis siliquastrum', rank: 'species' }
                      ]
                    },
                    { id: 'cassia', name: 'Cassias', scientificName: 'Cassia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'cassia-fistula', name: 'Golden Shower Tree', scientificName: 'Cassia fistula', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'asterales', name: 'Daisies & Sunflowers', scientificName: 'Asterales', rank: 'order', speciesCount: 26000,
              children: [
                { id: 'asteraceae', name: 'Daisy Family', scientificName: 'Asteraceae', rank: 'family', speciesCount: 25000,
                  children: [
                    { id: 'helianthus', name: 'Sunflowers', scientificName: 'Helianthus', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'helianthus-annuus', name: 'Common Sunflower', scientificName: 'Helianthus annuus', rank: 'species' },
                        { id: 'helianthus-tuberosus', name: 'Jerusalem Artichoke', scientificName: 'Helianthus tuberosus', rank: 'species' },
                        { id: 'helianthus-maximiliani', name: 'Maximilian Sunflower', scientificName: 'Helianthus maximiliani', rank: 'species' }
                      ]
                    },
                    { id: 'taraxacum', name: 'Dandelions', scientificName: 'Taraxacum', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'taraxacum-officinale', name: 'Common Dandelion', scientificName: 'Taraxacum officinale', rank: 'species' },
                        { id: 'taraxacum-erythrospermum', name: 'Red-seeded Dandelion', scientificName: 'Taraxacum erythrospermum', rank: 'species' }
                      ]
                    },
                    { id: 'chrysanthemum', name: 'Chrysanthemums', scientificName: 'Chrysanthemum', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'chrysanthemum-morifolium', name: 'Florist\'s Chrysanthemum', scientificName: 'Chrysanthemum × morifolium', rank: 'species' },
                        { id: 'chrysanthemum-indicum', name: 'Indian Chrysanthemum', scientificName: 'Chrysanthemum indicum', rank: 'species' }
                      ]
                    },
                    { id: 'lactuca', name: 'Lettuces', scientificName: 'Lactuca', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'lactuca-sativa', name: 'Garden Lettuce', scientificName: 'Lactuca sativa', rank: 'species' },
                        { id: 'lactuca-serriola', name: 'Prickly Lettuce', scientificName: 'Lactuca serriola', rank: 'species' }
                      ]
                    },
                    { id: 'artemisia', name: 'Wormwoods', scientificName: 'Artemisia', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'artemisia-absinthium', name: 'Wormwood', scientificName: 'Artemisia absinthium', rank: 'species' },
                        { id: 'artemisia-dracunculus', name: 'Tarragon', scientificName: 'Artemisia dracunculus', rank: 'species' },
                        { id: 'artemisia-annua', name: 'Sweet Wormwood', scientificName: 'Artemisia annua', rank: 'species' },
                        { id: 'artemisia-vulgaris', name: 'Mugwort', scientificName: 'Artemisia vulgaris', rank: 'species' }
                      ]
                    },
                    { id: 'dahlia', name: 'Dahlias', scientificName: 'Dahlia', rank: 'genus', speciesCount: 42,
                      children: [
                        { id: 'dahlia-pinnata', name: 'Garden Dahlia', scientificName: 'Dahlia pinnata', rank: 'species' },
                        { id: 'dahlia-coccinea', name: 'Red Dahlia', scientificName: 'Dahlia coccinea', rank: 'species' }
                      ]
                    },
                    { id: 'cirsium', name: 'Thistles', scientificName: 'Cirsium', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'cirsium-vulgare', name: 'Spear Thistle', scientificName: 'Cirsium vulgare', rank: 'species' },
                        { id: 'cirsium-arvense', name: 'Creeping Thistle', scientificName: 'Cirsium arvense', rank: 'species' },
                        { id: 'cirsium-oleraceum', name: 'Cabbage Thistle', scientificName: 'Cirsium oleraceum', rank: 'species' }
                      ]
                    },
                    { id: 'cynara', name: 'Artichokes', scientificName: 'Cynara', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'cynara-cardunculus', name: 'Cardoon', scientificName: 'Cynara cardunculus', rank: 'species' },
                        { id: 'cynara-scolymus', name: 'Globe Artichoke', scientificName: 'Cynara scolymus', rank: 'species' }
                      ]
                    },
                    { id: 'matricaria', name: 'Chamomiles', scientificName: 'Matricaria', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'matricaria-chamomilla', name: 'German Chamomile', scientificName: 'Matricaria chamomilla', rank: 'species' },
                        { id: 'matricaria-discoidea', name: 'Pineapple Weed', scientificName: 'Matricaria discoidea', rank: 'species' }
                      ]
                    },
                    { id: 'chamaemelum', name: 'True Chamomile', scientificName: 'Chamaemelum', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'chamaemelum-nobile', name: 'Roman Chamomile', scientificName: 'Chamaemelum nobile', rank: 'species' }
                      ]
                    },
                    { id: 'echinacea', name: 'Coneflowers', scientificName: 'Echinacea', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'echinacea-purpurea', name: 'Purple Coneflower', scientificName: 'Echinacea purpurea', rank: 'species' },
                        { id: 'echinacea-angustifolia', name: 'Narrow-leaf Coneflower', scientificName: 'Echinacea angustifolia', rank: 'species' },
                        { id: 'echinacea-pallida', name: 'Pale Purple Coneflower', scientificName: 'Echinacea pallida', rank: 'species' }
                      ]
                    },
                    { id: 'tagetes', name: 'Marigolds', scientificName: 'Tagetes', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'tagetes-erecta', name: 'African Marigold', scientificName: 'Tagetes erecta', rank: 'species' },
                        { id: 'tagetes-patula', name: 'French Marigold', scientificName: 'Tagetes patula', rank: 'species' },
                        { id: 'tagetes-lucida', name: 'Mexican Tarragon', scientificName: 'Tagetes lucida', rank: 'species' }
                      ]
                    },
                    { id: 'calendula', name: 'Pot Marigolds', scientificName: 'Calendula', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'calendula-officinalis', name: 'Pot Marigold', scientificName: 'Calendula officinalis', rank: 'species' }
                      ]
                    },
                    { id: 'aster', name: 'Asters', scientificName: 'Aster', rank: 'genus', speciesCount: 180,
                      children: [
                        { id: 'aster-amellus', name: 'European Michaelmas Daisy', scientificName: 'Aster amellus', rank: 'species' },
                        { id: 'aster-alpinus', name: 'Alpine Aster', scientificName: 'Aster alpinus', rank: 'species' }
                      ]
                    },
                    { id: 'symphyotrichum', name: 'American Asters', scientificName: 'Symphyotrichum', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'symphyotrichum-novae-angliae', name: 'New England Aster', scientificName: 'Symphyotrichum novae-angliae', rank: 'species' },
                        { id: 'symphyotrichum-novi-belgii', name: 'New York Aster', scientificName: 'Symphyotrichum novi-belgii', rank: 'species' }
                      ]
                    },
                    { id: 'gerbera', name: 'Gerberas', scientificName: 'Gerbera', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'gerbera-jamesonii', name: 'Barberton Daisy', scientificName: 'Gerbera jamesonii', rank: 'species' }
                      ]
                    },
                    { id: 'bellis', name: 'Daisies', scientificName: 'Bellis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'bellis-perennis', name: 'Common Daisy', scientificName: 'Bellis perennis', rank: 'species' }
                      ]
                    },
                    { id: 'zinnia', name: 'Zinnias', scientificName: 'Zinnia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'zinnia-elegans', name: 'Common Zinnia', scientificName: 'Zinnia elegans', rank: 'species' },
                        { id: 'zinnia-haageana', name: 'Mexican Zinnia', scientificName: 'Zinnia haageana', rank: 'species' }
                      ]
                    },
                    { id: 'rudbeckia', name: 'Black-eyed Susans', scientificName: 'Rudbeckia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'rudbeckia-hirta', name: 'Black-eyed Susan', scientificName: 'Rudbeckia hirta', rank: 'species' },
                        { id: 'rudbeckia-laciniata', name: 'Cutleaf Coneflower', scientificName: 'Rudbeckia laciniata', rank: 'species' }
                      ]
                    },
                    { id: 'centaurea', name: 'Knapweeds', scientificName: 'Centaurea', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'centaurea-cyanus', name: 'Cornflower', scientificName: 'Centaurea cyanus', rank: 'species' },
                        { id: 'centaurea-montana', name: 'Mountain Cornflower', scientificName: 'Centaurea montana', rank: 'species' }
                      ]
                    },
                    { id: 'cichorium', name: 'Chicories', scientificName: 'Cichorium', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'cichorium-intybus', name: 'Chicory', scientificName: 'Cichorium intybus', rank: 'species' },
                        { id: 'cichorium-endivia', name: 'Endive', scientificName: 'Cichorium endivia', rank: 'species' }
                      ]
                    },
                    { id: 'achillea', name: 'Yarrows', scientificName: 'Achillea', rank: 'genus', speciesCount: 115,
                      children: [
                        { id: 'achillea-millefolium', name: 'Common Yarrow', scientificName: 'Achillea millefolium', rank: 'species' },
                        { id: 'achillea-ptarmica', name: 'Sneezewort', scientificName: 'Achillea ptarmica', rank: 'species' }
                      ]
                    },
                    { id: 'tanacetum', name: 'Tansies', scientificName: 'Tanacetum', rank: 'genus', speciesCount: 160,
                      children: [
                        { id: 'tanacetum-vulgare', name: 'Common Tansy', scientificName: 'Tanacetum vulgare', rank: 'species' },
                        { id: 'tanacetum-parthenium', name: 'Feverfew', scientificName: 'Tanacetum parthenium', rank: 'species' }
                      ]
                    },
                    { id: 'senecio', name: 'Ragworts', scientificName: 'Senecio', rank: 'genus', speciesCount: 1250,
                      children: [
                        { id: 'senecio-vulgaris', name: 'Groundsel', scientificName: 'Senecio vulgaris', rank: 'species' },
                        { id: 'senecio-jacobaea', name: 'Ragwort', scientificName: 'Senecio jacobaea', rank: 'species' }
                      ]
                    },
                    { id: 'solidago', name: 'Goldenrods', scientificName: 'Solidago', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'solidago-canadensis', name: 'Canada Goldenrod', scientificName: 'Solidago canadensis', rank: 'species' },
                        { id: 'solidago-virgaurea', name: 'European Goldenrod', scientificName: 'Solidago virgaurea', rank: 'species' }
                      ]
                    },
                    { id: 'tussilago', name: 'Coltsfoot', scientificName: 'Tussilago', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'tussilago-farfara', name: 'Coltsfoot', scientificName: 'Tussilago farfara', rank: 'species' }
                      ]
                    },
                    { id: 'petasites', name: 'Butterburs', scientificName: 'Petasites', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'petasites-hybridus', name: 'Butterbur', scientificName: 'Petasites hybridus', rank: 'species' }
                      ]
                    },
                    { id: 'carthamus', name: 'Safflowers', scientificName: 'Carthamus', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'carthamus-tinctorius', name: 'Safflower', scientificName: 'Carthamus tinctorius', rank: 'species' }
                      ]
                    },
                    { id: 'stevia', name: 'Sweetleafs', scientificName: 'Stevia', rank: 'genus', speciesCount: 240,
                      children: [
                        { id: 'stevia-rebaudiana', name: 'Stevia', scientificName: 'Stevia rebaudiana', rank: 'species' }
                      ]
                    },
                    { id: 'cosmos', name: 'Cosmos', scientificName: 'Cosmos', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'cosmos-bipinnatus', name: 'Garden Cosmos', scientificName: 'Cosmos bipinnatus', rank: 'species' },
                        { id: 'cosmos-sulphureus', name: 'Sulphur Cosmos', scientificName: 'Cosmos sulphureus', rank: 'species' }
                      ]
                    },
                    { id: 'coreopsis', name: 'Tickseeds', scientificName: 'Coreopsis', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'coreopsis-lanceolata', name: 'Lanceleaf Coreopsis', scientificName: 'Coreopsis lanceolata', rank: 'species' },
                        { id: 'coreopsis-tinctoria', name: 'Golden Tickseed', scientificName: 'Coreopsis tinctoria', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'brassicales', name: 'Mustards', scientificName: 'Brassicales', rank: 'order', speciesCount: 4500,
              children: [
                { id: 'brassicaceae', name: 'Mustard Family', scientificName: 'Brassicaceae', rank: 'family', speciesCount: 3700,
                  children: [
                    { id: 'brassica', name: 'Cabbages & Mustards', scientificName: 'Brassica', rank: 'genus', speciesCount: 37,
                      children: [
                        { id: 'brassica-oleracea', name: 'Cabbage', scientificName: 'Brassica oleracea', rank: 'species' },
                        { id: 'brassica-oleracea-capitata', name: 'Head Cabbage', scientificName: 'Brassica oleracea var. capitata', rank: 'species' },
                        { id: 'brassica-oleracea-italica', name: 'Broccoli', scientificName: 'Brassica oleracea var. italica', rank: 'species' },
                        { id: 'brassica-oleracea-botrytis', name: 'Cauliflower', scientificName: 'Brassica oleracea var. botrytis', rank: 'species' },
                        { id: 'brassica-oleracea-gemmifera', name: 'Brussels Sprouts', scientificName: 'Brassica oleracea var. gemmifera', rank: 'species' },
                        { id: 'brassica-oleracea-acephala', name: 'Kale', scientificName: 'Brassica oleracea var. acephala', rank: 'species' },
                        { id: 'brassica-oleracea-gongylodes', name: 'Kohlrabi', scientificName: 'Brassica oleracea var. gongylodes', rank: 'species' },
                        { id: 'brassica-rapa', name: 'Turnip', scientificName: 'Brassica rapa', rank: 'species' },
                        { id: 'brassica-rapa-chinensis', name: 'Bok Choy', scientificName: 'Brassica rapa var. chinensis', rank: 'species' },
                        { id: 'brassica-napus', name: 'Rapeseed', scientificName: 'Brassica napus', rank: 'species' },
                        { id: 'brassica-juncea', name: 'Brown Mustard', scientificName: 'Brassica juncea', rank: 'species' },
                        { id: 'brassica-nigra', name: 'Black Mustard', scientificName: 'Brassica nigra', rank: 'species' }
                      ]
                    },
                    { id: 'arabidopsis', name: 'Thale Cress', scientificName: 'Arabidopsis', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'arabidopsis-thaliana', name: 'Thale Cress', scientificName: 'Arabidopsis thaliana', rank: 'species' }
                      ]
                    },
                    { id: 'raphanus', name: 'Radishes', scientificName: 'Raphanus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'raphanus-sativus', name: 'Radish', scientificName: 'Raphanus sativus', rank: 'species' },
                        { id: 'raphanus-sativus-longipinnatus', name: 'Daikon', scientificName: 'Raphanus sativus var. longipinnatus', rank: 'species' }
                      ]
                    },
                    { id: 'eutrema', name: 'Wasabi', scientificName: 'Eutrema', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'eutrema-japonicum', name: 'Wasabi', scientificName: 'Eutrema japonicum', rank: 'species' }
                      ]
                    },
                    { id: 'armoracia', name: 'Horseradish', scientificName: 'Armoracia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'armoracia-rusticana', name: 'Horseradish', scientificName: 'Armoracia rusticana', rank: 'species' }
                      ]
                    },
                    { id: 'sinapis', name: 'White Mustards', scientificName: 'Sinapis', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'sinapis-alba', name: 'White Mustard', scientificName: 'Sinapis alba', rank: 'species' }
                      ]
                    },
                    { id: 'eruca', name: 'Rockets', scientificName: 'Eruca', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'eruca-vesicaria', name: 'Arugula', scientificName: 'Eruca vesicaria', rank: 'species' }
                      ]
                    },
                    { id: 'nasturtium', name: 'Watercress', scientificName: 'Nasturtium', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'nasturtium-officinale', name: 'Watercress', scientificName: 'Nasturtium officinale', rank: 'species' }
                      ]
                    },
                    { id: 'lepidium', name: 'Pepperworts', scientificName: 'Lepidium', rank: 'genus', speciesCount: 230,
                      children: [
                        { id: 'lepidium-sativum', name: 'Garden Cress', scientificName: 'Lepidium sativum', rank: 'species' },
                        { id: 'lepidium-meyenii', name: 'Maca', scientificName: 'Lepidium meyenii', rank: 'species' }
                      ]
                    },
                    { id: 'crambe', name: 'Sea Kales', scientificName: 'Crambe', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'crambe-maritima', name: 'Sea Kale', scientificName: 'Crambe maritima', rank: 'species' }
                      ]
                    },
                    { id: 'matthiola', name: 'Stocks', scientificName: 'Matthiola', rank: 'genus', speciesCount: 48,
                      children: [
                        { id: 'matthiola-incana', name: 'Common Stock', scientificName: 'Matthiola incana', rank: 'species' }
                      ]
                    },
                    { id: 'alyssum', name: 'Madworts', scientificName: 'Alyssum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'alyssum-montanum', name: 'Mountain Alyssum', scientificName: 'Alyssum montanum', rank: 'species' }
                      ]
                    },
                    { id: 'lobularia', name: 'Sweet Alyssum', scientificName: 'Lobularia', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'lobularia-maritima', name: 'Sweet Alyssum', scientificName: 'Lobularia maritima', rank: 'species' }
                      ]
                    },
                    { id: 'hesperis', name: 'Dames Rockets', scientificName: 'Hesperis', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'hesperis-matronalis', name: 'Dame\'s Rocket', scientificName: 'Hesperis matronalis', rank: 'species' }
                      ]
                    },
                    { id: 'lunaria', name: 'Honesty', scientificName: 'Lunaria', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'lunaria-annua', name: 'Annual Honesty', scientificName: 'Lunaria annua', rank: 'species' }
                      ]
                    },
                    { id: 'iberis', name: 'Candytufts', scientificName: 'Iberis', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'iberis-sempervirens', name: 'Evergreen Candytuft', scientificName: 'Iberis sempervirens', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'solanales', name: 'Nightshades', scientificName: 'Solanales', rank: 'order', speciesCount: 4600,
              children: [
                { id: 'solanaceae', name: 'Nightshade Family', scientificName: 'Solanaceae', rank: 'family', speciesCount: 2700,
                  children: [
                    { id: 'solanum', name: 'Nightshades', scientificName: 'Solanum', rank: 'genus', speciesCount: 1500,
                      children: [
                        { id: 'solanum-lycopersicum', name: 'Tomato', scientificName: 'Solanum lycopersicum', rank: 'species' },
                        { id: 'solanum-tuberosum', name: 'Potato', scientificName: 'Solanum tuberosum', rank: 'species' },
                        { id: 'solanum-melongena', name: 'Eggplant', scientificName: 'Solanum melongena', rank: 'species' },
                        { id: 'solanum-nigrum', name: 'Black Nightshade', scientificName: 'Solanum nigrum', rank: 'species' },
                        { id: 'solanum-dulcamara', name: 'Bittersweet Nightshade', scientificName: 'Solanum dulcamara', rank: 'species' }
                      ]
                    },
                    { id: 'capsicum', name: 'Peppers', scientificName: 'Capsicum', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'capsicum-annuum', name: 'Bell Pepper', scientificName: 'Capsicum annuum', rank: 'species' },
                        { id: 'capsicum-chinense', name: 'Habanero', scientificName: 'Capsicum chinense', rank: 'species' },
                        { id: 'capsicum-frutescens', name: 'Tabasco Pepper', scientificName: 'Capsicum frutescens', rank: 'species' },
                        { id: 'capsicum-baccatum', name: 'Aji Pepper', scientificName: 'Capsicum baccatum', rank: 'species' },
                        { id: 'capsicum-pubescens', name: 'Rocoto Pepper', scientificName: 'Capsicum pubescens', rank: 'species' }
                      ]
                    },
                    { id: 'nicotiana', name: 'Tobacco', scientificName: 'Nicotiana', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'nicotiana-tabacum', name: 'Tobacco', scientificName: 'Nicotiana tabacum', rank: 'species' },
                        { id: 'nicotiana-rustica', name: 'Aztec Tobacco', scientificName: 'Nicotiana rustica', rank: 'species' },
                        { id: 'nicotiana-alata', name: 'Jasmine Tobacco', scientificName: 'Nicotiana alata', rank: 'species' },
                        { id: 'nicotiana-sylvestris', name: 'Woodland Tobacco', scientificName: 'Nicotiana sylvestris', rank: 'species' }
                      ]
                    },
                    { id: 'atropa', name: 'Deadly Nightshade', scientificName: 'Atropa', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'atropa-belladonna', name: 'Deadly Nightshade', scientificName: 'Atropa belladonna', rank: 'species' }
                      ]
                    },
                    { id: 'petunia', name: 'Petunias', scientificName: 'Petunia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'petunia-hybrida', name: 'Garden Petunia', scientificName: 'Petunia × hybrida', rank: 'species' },
                        { id: 'petunia-axillaris', name: 'White Petunia', scientificName: 'Petunia axillaris', rank: 'species' },
                        { id: 'petunia-integrifolia', name: 'Violet Petunia', scientificName: 'Petunia integrifolia', rank: 'species' }
                      ]
                    },
                    { id: 'datura', name: 'Thornapples', scientificName: 'Datura', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'datura-stramonium', name: 'Jimsonweed', scientificName: 'Datura stramonium', rank: 'species' },
                        { id: 'datura-innoxia', name: 'Moonflower', scientificName: 'Datura innoxia', rank: 'species' },
                        { id: 'datura-metel', name: 'Devil\'s Trumpet', scientificName: 'Datura metel', rank: 'species' }
                      ]
                    },
                    { id: 'brugmansia', name: 'Angel\'s Trumpets', scientificName: 'Brugmansia', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'brugmansia-suaveolens', name: 'White Angel\'s Trumpet', scientificName: 'Brugmansia suaveolens', rank: 'species' },
                        { id: 'brugmansia-arborea', name: 'Tree Datura', scientificName: 'Brugmansia arborea', rank: 'species' }
                      ]
                    },
                    { id: 'physalis', name: 'Groundcherries', scientificName: 'Physalis', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'physalis-peruviana', name: 'Cape Gooseberry', scientificName: 'Physalis peruviana', rank: 'species' },
                        { id: 'physalis-philadelphica', name: 'Tomatillo', scientificName: 'Physalis philadelphica', rank: 'species' },
                        { id: 'physalis-alkekengi', name: 'Chinese Lantern', scientificName: 'Physalis alkekengi', rank: 'species' }
                      ]
                    },
                    { id: 'lycium', name: 'Wolfberries', scientificName: 'Lycium', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'lycium-barbarum', name: 'Goji Berry', scientificName: 'Lycium barbarum', rank: 'species' },
                        { id: 'lycium-chinense', name: 'Chinese Wolfberry', scientificName: 'Lycium chinense', rank: 'species' }
                      ]
                    },
                    { id: 'cestrum', name: 'Jessamines', scientificName: 'Cestrum', rank: 'genus', speciesCount: 175,
                      children: [
                        { id: 'cestrum-nocturnum', name: 'Night-blooming Jessamine', scientificName: 'Cestrum nocturnum', rank: 'species' }
                      ]
                    },
                    { id: 'hyoscyamus', name: 'Henbanes', scientificName: 'Hyoscyamus', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'hyoscyamus-niger', name: 'Black Henbane', scientificName: 'Hyoscyamus niger', rank: 'species' }
                      ]
                    },
                    { id: 'mandragora', name: 'Mandrakes', scientificName: 'Mandragora', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'mandragora-officinarum', name: 'Mandrake', scientificName: 'Mandragora officinarum', rank: 'species' }
                      ]
                    },
                    { id: 'withania', name: 'Withanias', scientificName: 'Withania', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'withania-somnifera', name: 'Ashwagandha', scientificName: 'Withania somnifera', rank: 'species' }
                      ]
                    },
                    { id: 'calibrachoa', name: 'Million Bells', scientificName: 'Calibrachoa', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'calibrachoa-parviflora', name: 'Seaside Petunia', scientificName: 'Calibrachoa parviflora', rank: 'species' }
                      ]
                    },
                    { id: 'schizanthus', name: 'Butterfly Flowers', scientificName: 'Schizanthus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'schizanthus-pinnatus', name: 'Poor Man\'s Orchid', scientificName: 'Schizanthus pinnatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'convolvulaceae', name: 'Morning Glory Family', scientificName: 'Convolvulaceae', rank: 'family', speciesCount: 1800,
                  children: [
                    { id: 'ipomoea', name: 'Morning Glories', scientificName: 'Ipomoea', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'ipomoea-batatas', name: 'Sweet Potato', scientificName: 'Ipomoea batatas', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'lamiales', name: 'Mints & Allies', scientificName: 'Lamiales', rank: 'order', speciesCount: 23000,
              children: [
                { id: 'lamiaceae', name: 'Mint Family', scientificName: 'Lamiaceae', rank: 'family', speciesCount: 7200,
                  children: [
                    { id: 'mentha', name: 'Mints', scientificName: 'Mentha', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'mentha-piperita', name: 'Peppermint', scientificName: 'Mentha × piperita', rank: 'species' },
                        { id: 'mentha-spicata', name: 'Spearmint', scientificName: 'Mentha spicata', rank: 'species' }
                      ]
                    },
                    { id: 'lavandula', name: 'Lavenders', scientificName: 'Lavandula', rank: 'genus', speciesCount: 47,
                      children: [
                        { id: 'lavandula-angustifolia', name: 'English Lavender', scientificName: 'Lavandula angustifolia', rank: 'species' },
                        { id: 'lavandula-stoechas', name: 'French Lavender', scientificName: 'Lavandula stoechas', rank: 'species' }
                      ]
                    },
                    { id: 'salvia', name: 'Sages', scientificName: 'Salvia', rank: 'genus', speciesCount: 900,
                      children: [
                        { id: 'salvia-officinalis', name: 'Common Sage', scientificName: 'Salvia officinalis', rank: 'species' },
                        { id: 'salvia-rosmarinus', name: 'Rosemary', scientificName: 'Salvia rosmarinus', rank: 'species' },
                        { id: 'salvia-hispanica', name: 'Chia', scientificName: 'Salvia hispanica', rank: 'species' }
                      ]
                    },
                    { id: 'ocimum', name: 'Basils', scientificName: 'Ocimum', rank: 'genus', speciesCount: 65,
                      children: [
                        { id: 'ocimum-basilicum', name: 'Sweet Basil', scientificName: 'Ocimum basilicum', rank: 'species' },
                        { id: 'ocimum-tenuiflorum', name: 'Holy Basil', scientificName: 'Ocimum tenuiflorum', rank: 'species' }
                      ]
                    },
                    { id: 'thymus', name: 'Thymes', scientificName: 'Thymus', rank: 'genus', speciesCount: 350,
                      children: [
                        { id: 'thymus-vulgaris', name: 'Common Thyme', scientificName: 'Thymus vulgaris', rank: 'species' },
                        { id: 'thymus-serpyllum', name: 'Wild Thyme', scientificName: 'Thymus serpyllum', rank: 'species' }
                      ]
                    },
                    { id: 'origanum', name: 'Oreganos', scientificName: 'Origanum', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'origanum-vulgare', name: 'Oregano', scientificName: 'Origanum vulgare', rank: 'species' },
                        { id: 'origanum-majorana', name: 'Marjoram', scientificName: 'Origanum majorana', rank: 'species' }
                      ]
                    },
                    { id: 'melissa', name: 'Balms', scientificName: 'Melissa', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'melissa-officinalis', name: 'Lemon Balm', scientificName: 'Melissa officinalis', rank: 'species' }
                      ]
                    },
                    { id: 'nepeta', name: 'Catmints', scientificName: 'Nepeta', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'nepeta-cataria', name: 'Catnip', scientificName: 'Nepeta cataria', rank: 'species' }
                      ]
                    },
                    { id: 'hyssopus', name: 'Hyssops', scientificName: 'Hyssopus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'hyssopus-officinalis', name: 'Hyssop', scientificName: 'Hyssopus officinalis', rank: 'species' }
                      ]
                    },
                    { id: 'lamium', name: 'Dead-nettles', scientificName: 'Lamium', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'lamium-album', name: 'White Dead-nettle', scientificName: 'Lamium album', rank: 'species' }
                      ]
                    },
                    { id: 'stachys', name: 'Hedgenettles', scientificName: 'Stachys', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'stachys-byzantina', name: 'Lamb\'s Ear', scientificName: 'Stachys byzantina', rank: 'species' }
                      ]
                    },
                    { id: 'prunella', name: 'Self-heals', scientificName: 'Prunella', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'prunella-vulgaris', name: 'Common Self-heal', scientificName: 'Prunella vulgaris', rank: 'species' }
                      ]
                    },
                    { id: 'monarda', name: 'Bee Balms', scientificName: 'Monarda', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'monarda-didyma', name: 'Scarlet Bee Balm', scientificName: 'Monarda didyma', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'oleaceae', name: 'Olive Family', scientificName: 'Oleaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'olea', name: 'Olives', scientificName: 'Olea', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'olea-europaea', name: 'Olive', scientificName: 'Olea europaea', rank: 'species' }
                      ]
                    },
                    { id: 'jasminum', name: 'Jasmines', scientificName: 'Jasminum', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'jasminum-officinale', name: 'Common Jasmine', scientificName: 'Jasminum officinale', rank: 'species' },
                        { id: 'jasminum-sambac', name: 'Arabian Jasmine', scientificName: 'Jasminum sambac', rank: 'species' }
                      ]
                    },
                    { id: 'fraxinus', name: 'Ashes', scientificName: 'Fraxinus', rank: 'genus', speciesCount: 65,
                      children: [
                        { id: 'fraxinus-excelsior', name: 'European Ash', scientificName: 'Fraxinus excelsior', rank: 'species' },
                        { id: 'fraxinus-americana', name: 'White Ash', scientificName: 'Fraxinus americana', rank: 'species' },
                        { id: 'fraxinus-pennsylvanica', name: 'Green Ash', scientificName: 'Fraxinus pennsylvanica', rank: 'species' }
                      ]
                    },
                    { id: 'syringa', name: 'Lilacs', scientificName: 'Syringa', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'syringa-vulgaris', name: 'Common Lilac', scientificName: 'Syringa vulgaris', rank: 'species' }
                      ]
                    },
                    { id: 'ligustrum', name: 'Privets', scientificName: 'Ligustrum', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'ligustrum-vulgare', name: 'Common Privet', scientificName: 'Ligustrum vulgare', rank: 'species' },
                        { id: 'ligustrum-japonicum', name: 'Japanese Privet', scientificName: 'Ligustrum japonicum', rank: 'species' }
                      ]
                    },
                    { id: 'forsythia', name: 'Forsythias', scientificName: 'Forsythia', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'forsythia-suspensa', name: 'Weeping Forsythia', scientificName: 'Forsythia suspensa', rank: 'species' }
                      ]
                    },
                    { id: 'osmanthus', name: 'Sweet Olives', scientificName: 'Osmanthus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'osmanthus-fragrans', name: 'Sweet Osmanthus', scientificName: 'Osmanthus fragrans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'caryophyllales', name: 'Carnations & Allies', scientificName: 'Caryophyllales', rank: 'order', speciesCount: 12000,
              children: [
                { id: 'cactaceae', name: 'Cacti', scientificName: 'Cactaceae', rank: 'family', speciesCount: 1750,
                  children: [
                    { id: 'carnegiea', name: 'Saguaro', scientificName: 'Carnegiea', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'carnegiea-gigantea', name: 'Saguaro Cactus', scientificName: 'Carnegiea gigantea', rank: 'species' }
                      ]
                    },
                    { id: 'opuntia', name: 'Prickly Pears', scientificName: 'Opuntia', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'opuntia-ficus-indica', name: 'Barbary Fig', scientificName: 'Opuntia ficus-indica', rank: 'species' },
                        { id: 'opuntia-humifusa', name: 'Eastern Prickly Pear', scientificName: 'Opuntia humifusa', rank: 'species' }
                      ]
                    },
                    { id: 'echinocactus', name: 'Barrel Cacti', scientificName: 'Echinocactus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'echinocactus-grusonii', name: 'Golden Barrel Cactus', scientificName: 'Echinocactus grusonii', rank: 'species' }
                      ]
                    },
                    { id: 'ferocactus', name: 'Fishhook Cacti', scientificName: 'Ferocactus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'ferocactus-wislizeni', name: 'Fishhook Barrel Cactus', scientificName: 'Ferocactus wislizeni', rank: 'species' }
                      ]
                    },
                    { id: 'mammillaria', name: 'Pincushion Cacti', scientificName: 'Mammillaria', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'mammillaria-plumosa', name: 'Feather Cactus', scientificName: 'Mammillaria plumosa', rank: 'species' },
                        { id: 'mammillaria-elongata', name: 'Ladyfinger Cactus', scientificName: 'Mammillaria elongata', rank: 'species' }
                      ]
                    },
                    { id: 'echinopsis', name: 'Sea Urchin Cacti', scientificName: 'Echinopsis', rank: 'genus', speciesCount: 128,
                      children: [
                        { id: 'echinopsis-pachanoi', name: 'San Pedro Cactus', scientificName: 'Echinopsis pachanoi', rank: 'species' }
                      ]
                    },
                    { id: 'gymnocalycium', name: 'Chin Cacti', scientificName: 'Gymnocalycium', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'gymnocalycium-mihanovichii', name: 'Moon Cactus', scientificName: 'Gymnocalycium mihanovichii', rank: 'species' }
                      ]
                    },
                    { id: 'cereus', name: 'Column Cacti', scientificName: 'Cereus', rank: 'genus', speciesCount: 33,
                      children: [
                        { id: 'cereus-peruvianus', name: 'Peruvian Apple Cactus', scientificName: 'Cereus repandus', rank: 'species' }
                      ]
                    },
                    { id: 'epiphyllum', name: 'Orchid Cacti', scientificName: 'Epiphyllum', rank: 'genus', speciesCount: 19,
                      children: [
                        { id: 'epiphyllum-oxypetalum', name: 'Queen of the Night', scientificName: 'Epiphyllum oxypetalum', rank: 'species' }
                      ]
                    },
                    { id: 'schlumbergera', name: 'Christmas Cacti', scientificName: 'Schlumbergera', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'schlumbergera-truncata', name: 'Thanksgiving Cactus', scientificName: 'Schlumbergera truncata', rank: 'species' }
                      ]
                    },
                    { id: 'rhipsalis', name: 'Mistletoe Cacti', scientificName: 'Rhipsalis', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'rhipsalis-baccifera', name: 'Mistletoe Cactus', scientificName: 'Rhipsalis baccifera', rank: 'species' }
                      ]
                    },
                    { id: 'hylocereus', name: 'Night-blooming Cacti', scientificName: 'Hylocereus', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'hylocereus-undatus', name: 'Dragon Fruit', scientificName: 'Hylocereus undatus', rank: 'species' }
                      ]
                    },
                    { id: 'pereskia', name: 'Leafy Cacti', scientificName: 'Pereskia', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'pereskia-aculeata', name: 'Barbados Gooseberry', scientificName: 'Pereskia aculeata', rank: 'species' }
                      ]
                    },
                    { id: 'lophophora', name: 'Peyote', scientificName: 'Lophophora', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'lophophora-williamsii', name: 'Peyote', scientificName: 'Lophophora williamsii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'droseraceae', name: 'Sundews', scientificName: 'Droseraceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'dionaea', name: 'Venus Flytraps', scientificName: 'Dionaea', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'dionaea-muscipula', name: 'Venus Flytrap', scientificName: 'Dionaea muscipula', rank: 'species' }
                      ]
                    },
                    { id: 'drosera', name: 'Sundews', scientificName: 'Drosera', rank: 'genus', speciesCount: 194,
                      children: [
                        { id: 'drosera-rotundifolia', name: 'Round-leaved Sundew', scientificName: 'Drosera rotundifolia', rank: 'species' },
                        { id: 'drosera-capensis', name: 'Cape Sundew', scientificName: 'Drosera capensis', rank: 'species' },
                        { id: 'drosera-binata', name: 'Forked Sundew', scientificName: 'Drosera binata', rank: 'species' },
                        { id: 'drosera-intermedia', name: 'Oblong-leaved Sundew', scientificName: 'Drosera intermedia', rank: 'species' },
                        { id: 'drosera-adelae', name: 'Lance-leaved Sundew', scientificName: 'Drosera adelae', rank: 'species' }
                      ]
                    },
                    { id: 'aldrovanda', name: 'Waterwheel', scientificName: 'Aldrovanda', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'aldrovanda-vesiculosa', name: 'Waterwheel Plant', scientificName: 'Aldrovanda vesiculosa', rank: 'species' }
                      ]
                    },
                    { id: 'drosophyllum', name: 'Portuguese Sundew', scientificName: 'Drosophyllum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'drosophyllum-lusitanicum', name: 'Portuguese Sundew', scientificName: 'Drosophyllum lusitanicum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nepenthaceae', name: 'Pitcher Plants', scientificName: 'Nepenthaceae', rank: 'family', speciesCount: 170,
                  children: [
                    { id: 'nepenthes', name: 'Tropical Pitcher Plants', scientificName: 'Nepenthes', rank: 'genus', speciesCount: 170,
                      children: [
                        { id: 'nepenthes-rajah', name: 'Giant Pitcher Plant', scientificName: 'Nepenthes rajah', rank: 'species' },
                        { id: 'nepenthes-alata', name: 'Winged Pitcher Plant', scientificName: 'Nepenthes alata', rank: 'species' },
                        { id: 'nepenthes-ventricosa', name: 'Porcelain Pitcher Plant', scientificName: 'Nepenthes ventricosa', rank: 'species' },
                        { id: 'nepenthes-rafflesiana', name: 'Raffles Pitcher Plant', scientificName: 'Nepenthes rafflesiana', rank: 'species' },
                        { id: 'nepenthes-ampullaria', name: 'Flask Pitcher Plant', scientificName: 'Nepenthes ampullaria', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sarraceniaceae', name: 'American Pitcher Plants', scientificName: 'Sarraceniaceae', rank: 'family', speciesCount: 33,
                  children: [
                    { id: 'sarracenia', name: 'North American Pitcher Plants', scientificName: 'Sarracenia', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'sarracenia-purpurea', name: 'Purple Pitcher Plant', scientificName: 'Sarracenia purpurea', rank: 'species' },
                        { id: 'sarracenia-flava', name: 'Yellow Pitcher Plant', scientificName: 'Sarracenia flava', rank: 'species' },
                        { id: 'sarracenia-leucophylla', name: 'White-topped Pitcher Plant', scientificName: 'Sarracenia leucophylla', rank: 'species' },
                        { id: 'sarracenia-minor', name: 'Hooded Pitcher Plant', scientificName: 'Sarracenia minor', rank: 'species' }
                      ]
                    },
                    { id: 'darlingtonia', name: 'Cobra Lilies', scientificName: 'Darlingtonia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'darlingtonia-californica', name: 'California Pitcher Plant', scientificName: 'Darlingtonia californica', rank: 'species' }
                      ]
                    },
                    { id: 'heliamphora', name: 'Sun Pitchers', scientificName: 'Heliamphora', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'heliamphora-nutans', name: 'Nodding Marsh Pitcher', scientificName: 'Heliamphora nutans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lentibulariaceae', name: 'Bladderworts & Butterworts', scientificName: 'Lentibulariaceae', rank: 'family', speciesCount: 360,
                  children: [
                    { id: 'utricularia', name: 'Bladderworts', scientificName: 'Utricularia', rank: 'genus', speciesCount: 230,
                      children: [
                        { id: 'utricularia-vulgaris', name: 'Common Bladderwort', scientificName: 'Utricularia vulgaris', rank: 'species' },
                        { id: 'utricularia-gibba', name: 'Humped Bladderwort', scientificName: 'Utricularia gibba', rank: 'species' },
                        { id: 'utricularia-sandersonii', name: 'Angry Bunny Bladderwort', scientificName: 'Utricularia sandersonii', rank: 'species' }
                      ]
                    },
                    { id: 'pinguicula', name: 'Butterworts', scientificName: 'Pinguicula', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'pinguicula-vulgaris', name: 'Common Butterwort', scientificName: 'Pinguicula vulgaris', rank: 'species' },
                        { id: 'pinguicula-moranensis', name: 'Mexican Butterwort', scientificName: 'Pinguicula moranensis', rank: 'species' },
                        { id: 'pinguicula-grandiflora', name: 'Large-flowered Butterwort', scientificName: 'Pinguicula grandiflora', rank: 'species' }
                      ]
                    },
                    { id: 'genlisea', name: 'Corkscrew Plants', scientificName: 'Genlisea', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'genlisea-hispidula', name: 'Hispid Corkscrew Plant', scientificName: 'Genlisea hispidula', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'amaranthaceae', name: 'Amaranth Family', scientificName: 'Amaranthaceae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'spinacia', name: 'Spinach', scientificName: 'Spinacia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'spinacia-oleracea', name: 'Spinach', scientificName: 'Spinacia oleracea', rank: 'species' }
                      ]
                    },
                    { id: 'beta', name: 'Beets', scientificName: 'Beta', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'beta-vulgaris', name: 'Beetroot', scientificName: 'Beta vulgaris', rank: 'species' },
                        { id: 'beta-vulgaris-cicla', name: 'Swiss Chard', scientificName: 'Beta vulgaris var. cicla', rank: 'species' },
                        { id: 'beta-vulgaris-crassa', name: 'Sugar Beet', scientificName: 'Beta vulgaris var. crassa', rank: 'species' }
                      ]
                    },
                    { id: 'chenopodium', name: 'Goosefoots', scientificName: 'Chenopodium', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'chenopodium-quinoa', name: 'Quinoa', scientificName: 'Chenopodium quinoa', rank: 'species' },
                        { id: 'chenopodium-album', name: 'Lamb\'s Quarters', scientificName: 'Chenopodium album', rank: 'species' }
                      ]
                    },
                    { id: 'amaranthus', name: 'Amaranths', scientificName: 'Amaranthus', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'amaranthus-caudatus', name: 'Love-lies-bleeding', scientificName: 'Amaranthus caudatus', rank: 'species' },
                        { id: 'amaranthus-cruentus', name: 'Purple Amaranth', scientificName: 'Amaranthus cruentus', rank: 'species' },
                        { id: 'amaranthus-hypochondriacus', name: 'Prince\'s Feather', scientificName: 'Amaranthus hypochondriacus', rank: 'species' },
                        { id: 'amaranthus-tricolor', name: 'Joseph\'s Coat', scientificName: 'Amaranthus tricolor', rank: 'species' }
                      ]
                    },
                    { id: 'atriplex', name: 'Saltbushes', scientificName: 'Atriplex', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'atriplex-hortensis', name: 'Garden Orache', scientificName: 'Atriplex hortensis', rank: 'species' }
                      ]
                    },
                    { id: 'celosia', name: 'Cockscombs', scientificName: 'Celosia', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'celosia-argentea', name: 'Plumed Cockscomb', scientificName: 'Celosia argentea', rank: 'species' }
                      ]
                    },
                    { id: 'gomphrena', name: 'Globe Amaranths', scientificName: 'Gomphrena', rank: 'genus', speciesCount: 120,
                      children: [
                        { id: 'gomphrena-globosa', name: 'Globe Amaranth', scientificName: 'Gomphrena globosa', rank: 'species' }
                      ]
                    },
                    { id: 'iresine', name: 'Bloodleafs', scientificName: 'Iresine', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'iresine-herbstii', name: 'Bloodleaf', scientificName: 'Iresine herbstii', rank: 'species' }
                      ]
                    },
                    { id: 'salsola', name: 'Tumbleweed', scientificName: 'Salsola', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'salsola-tragus', name: 'Russian Thistle', scientificName: 'Salsola tragus', rank: 'species' }
                      ]
                    },
                    { id: 'salicornia', name: 'Glassworts', scientificName: 'Salicornia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'salicornia-europaea', name: 'Common Glasswort', scientificName: 'Salicornia europaea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'caryophyllaceae', name: 'Pink Family', scientificName: 'Caryophyllaceae', rank: 'family', speciesCount: 2600,
                  children: [
                    { id: 'dianthus', name: 'Carnations', scientificName: 'Dianthus', rank: 'genus', speciesCount: 340,
                      children: [
                        { id: 'dianthus-caryophyllus', name: 'Carnation', scientificName: 'Dianthus caryophyllus', rank: 'species' },
                        { id: 'dianthus-barbatus', name: 'Sweet William', scientificName: 'Dianthus barbatus', rank: 'species' },
                        { id: 'dianthus-chinensis', name: 'China Pink', scientificName: 'Dianthus chinensis', rank: 'species' },
                        { id: 'dianthus-deltoides', name: 'Maiden Pink', scientificName: 'Dianthus deltoides', rank: 'species' }
                      ]
                    },
                    { id: 'silene', name: 'Catchflies', scientificName: 'Silene', rank: 'genus', speciesCount: 700,
                      children: [
                        { id: 'silene-vulgaris', name: 'Bladder Campion', scientificName: 'Silene vulgaris', rank: 'species' },
                        { id: 'silene-latifolia', name: 'White Campion', scientificName: 'Silene latifolia', rank: 'species' }
                      ]
                    },
                    { id: 'gypsophila', name: 'Baby\'s Breath', scientificName: 'Gypsophila', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'gypsophila-paniculata', name: 'Baby\'s Breath', scientificName: 'Gypsophila paniculata', rank: 'species' }
                      ]
                    },
                    { id: 'stellaria', name: 'Chickweeds', scientificName: 'Stellaria', rank: 'genus', speciesCount: 120,
                      children: [
                        { id: 'stellaria-media', name: 'Common Chickweed', scientificName: 'Stellaria media', rank: 'species' }
                      ]
                    },
                    { id: 'cerastium', name: 'Mouse-ears', scientificName: 'Cerastium', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'cerastium-tomentosum', name: 'Snow-in-summer', scientificName: 'Cerastium tomentosum', rank: 'species' }
                      ]
                    },
                    { id: 'lychnis', name: 'Campions', scientificName: 'Lychnis', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'lychnis-coronaria', name: 'Rose Campion', scientificName: 'Lychnis coronaria', rank: 'species' }
                      ]
                    },
                    { id: 'saponaria', name: 'Soapworts', scientificName: 'Saponaria', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'saponaria-officinalis', name: 'Common Soapwort', scientificName: 'Saponaria officinalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'polygonaceae', name: 'Buckwheat Family', scientificName: 'Polygonaceae', rank: 'family', speciesCount: 1200,
                  children: [
                    { id: 'fagopyrum', name: 'Buckwheats', scientificName: 'Fagopyrum', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'fagopyrum-esculentum', name: 'Common Buckwheat', scientificName: 'Fagopyrum esculentum', rank: 'species' }
                      ]
                    },
                    { id: 'rheum', name: 'Rhubarbs', scientificName: 'Rheum', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'rheum-rhabarbarum', name: 'Garden Rhubarb', scientificName: 'Rheum rhabarbarum', rank: 'species' }
                      ]
                    },
                    { id: 'rumex', name: 'Docks & Sorrels', scientificName: 'Rumex', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'rumex-acetosa', name: 'Common Sorrel', scientificName: 'Rumex acetosa', rank: 'species' },
                        { id: 'rumex-acetosella', name: 'Sheep\'s Sorrel', scientificName: 'Rumex acetosella', rank: 'species' }
                      ]
                    },
                    { id: 'polygonum', name: 'Knotweeds', scientificName: 'Polygonum', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'polygonum-aviculare', name: 'Common Knotgrass', scientificName: 'Polygonum aviculare', rank: 'species' }
                      ]
                    },
                    { id: 'reynoutria', name: 'Japanese Knotweed', scientificName: 'Reynoutria', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'reynoutria-japonica', name: 'Japanese Knotweed', scientificName: 'Reynoutria japonica', rank: 'species' }
                      ]
                    },
                    { id: 'persicaria', name: 'Smartweeds', scientificName: 'Persicaria', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'persicaria-bistorta', name: 'Bistort', scientificName: 'Persicaria bistorta', rank: 'species' }
                      ]
                    },
                    { id: 'eriogonum', name: 'Wild Buckwheats', scientificName: 'Eriogonum', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'eriogonum-fasciculatum', name: 'California Buckwheat', scientificName: 'Eriogonum fasciculatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'aizoaceae', name: 'Ice Plant Family', scientificName: 'Aizoaceae', rank: 'family', speciesCount: 2000,
                  children: [
                    { id: 'lithops', name: 'Living Stones', scientificName: 'Lithops', rank: 'genus', speciesCount: 37,
                      children: [
                        { id: 'lithops-aucampiae', name: 'Aucamp\'s Living Stone', scientificName: 'Lithops aucampiae', rank: 'species' }
                      ]
                    },
                    { id: 'carpobrotus', name: 'Ice Plants', scientificName: 'Carpobrotus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'carpobrotus-edulis', name: 'Hottentot Fig', scientificName: 'Carpobrotus edulis', rank: 'species' }
                      ]
                    },
                    { id: 'mesembryanthemum', name: 'Mesembs', scientificName: 'Mesembryanthemum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'mesembryanthemum-crystallinum', name: 'Crystalline Ice Plant', scientificName: 'Mesembryanthemum crystallinum', rank: 'species' }
                      ]
                    },
                    { id: 'conophytum', name: 'Button Plants', scientificName: 'Conophytum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'conophytum-bilobum', name: 'Living Pebbles', scientificName: 'Conophytum bilobum', rank: 'species' }
                      ]
                    },
                    { id: 'fenestraria', name: 'Baby Toes', scientificName: 'Fenestraria', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'fenestraria-rhopalophylla', name: 'Baby Toes', scientificName: 'Fenestraria rhopalophylla', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'ranunculales', name: 'Buttercups & Allies', scientificName: 'Ranunculales', rank: 'order', speciesCount: 4500,
              children: [
                { id: 'ranunculaceae', name: 'Buttercup Family', scientificName: 'Ranunculaceae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'ranunculus', name: 'Buttercups', scientificName: 'Ranunculus', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'ranunculus-acris', name: 'Meadow Buttercup', scientificName: 'Ranunculus acris', rank: 'species' },
                        { id: 'ranunculus-repens', name: 'Creeping Buttercup', scientificName: 'Ranunculus repens', rank: 'species' }
                      ]
                    },
                    { id: 'aconitum', name: 'Monkshoods', scientificName: 'Aconitum', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'aconitum-napellus', name: 'Monkshood', scientificName: 'Aconitum napellus', rank: 'species' }
                      ]
                    },
                    { id: 'delphinium', name: 'Delphiniums', scientificName: 'Delphinium', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'delphinium-elatum', name: 'Alpine Delphinium', scientificName: 'Delphinium elatum', rank: 'species' },
                        { id: 'delphinium-staphisagria', name: 'Stavesacre', scientificName: 'Delphinium staphisagria', rank: 'species' }
                      ]
                    },
                    { id: 'aquilegia', name: 'Columbines', scientificName: 'Aquilegia', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'aquilegia-vulgaris', name: 'European Columbine', scientificName: 'Aquilegia vulgaris', rank: 'species' },
                        { id: 'aquilegia-caerulea', name: 'Colorado Blue Columbine', scientificName: 'Aquilegia caerulea', rank: 'species' }
                      ]
                    },
                    { id: 'anemone', name: 'Anemones', scientificName: 'Anemone', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'anemone-nemorosa', name: 'Wood Anemone', scientificName: 'Anemone nemorosa', rank: 'species' },
                        { id: 'anemone-coronaria', name: 'Poppy Anemone', scientificName: 'Anemone coronaria', rank: 'species' }
                      ]
                    },
                    { id: 'clematis', name: 'Clematis', scientificName: 'Clematis', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'clematis-vitalba', name: 'Old Man\'s Beard', scientificName: 'Clematis vitalba', rank: 'species' },
                        { id: 'clematis-montana', name: 'Himalayan Clematis', scientificName: 'Clematis montana', rank: 'species' }
                      ]
                    },
                    { id: 'helleborus', name: 'Hellebores', scientificName: 'Helleborus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'helleborus-niger', name: 'Christmas Rose', scientificName: 'Helleborus niger', rank: 'species' },
                        { id: 'helleborus-orientalis', name: 'Lenten Rose', scientificName: 'Helleborus orientalis', rank: 'species' }
                      ]
                    },
                    { id: 'nigella', name: 'Love-in-a-mist', scientificName: 'Nigella', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'nigella-damascena', name: 'Love-in-a-mist', scientificName: 'Nigella damascena', rank: 'species' },
                        { id: 'nigella-sativa', name: 'Black Cumin', scientificName: 'Nigella sativa', rank: 'species' }
                      ]
                    },
                    { id: 'paeonia', name: 'Peonies', scientificName: 'Paeonia', rank: 'genus', speciesCount: 33,
                      children: [
                        { id: 'paeonia-officinalis', name: 'Common Peony', scientificName: 'Paeonia officinalis', rank: 'species' },
                        { id: 'paeonia-lactiflora', name: 'Chinese Peony', scientificName: 'Paeonia lactiflora', rank: 'species' },
                        { id: 'paeonia-suffruticosa', name: 'Tree Peony', scientificName: 'Paeonia suffruticosa', rank: 'species' }
                      ]
                    },
                    { id: 'actaea', name: 'Baneberries', scientificName: 'Actaea', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'actaea-racemosa', name: 'Black Cohosh', scientificName: 'Actaea racemosa', rank: 'species' }
                      ]
                    },
                    { id: 'caltha', name: 'Marsh Marigolds', scientificName: 'Caltha', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'caltha-palustris', name: 'Marsh Marigold', scientificName: 'Caltha palustris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'papaveraceae', name: 'Poppy Family', scientificName: 'Papaveraceae', rank: 'family', speciesCount: 800,
                  children: [
                    { id: 'papaver', name: 'Poppies', scientificName: 'Papaver', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'papaver-somniferum', name: 'Opium Poppy', scientificName: 'Papaver somniferum', rank: 'species' },
                        { id: 'papaver-rhoeas', name: 'Common Poppy', scientificName: 'Papaver rhoeas', rank: 'species' },
                        { id: 'papaver-orientale', name: 'Oriental Poppy', scientificName: 'Papaver orientale', rank: 'species' }
                      ]
                    },
                    { id: 'eschscholzia', name: 'California Poppies', scientificName: 'Eschscholzia', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'eschscholzia-californica', name: 'California Poppy', scientificName: 'Eschscholzia californica', rank: 'species' }
                      ]
                    },
                    { id: 'meconopsis', name: 'Blue Poppies', scientificName: 'Meconopsis', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'meconopsis-betonicifolia', name: 'Himalayan Blue Poppy', scientificName: 'Meconopsis betonicifolia', rank: 'species' }
                      ]
                    },
                    { id: 'chelidonium', name: 'Greater Celandine', scientificName: 'Chelidonium', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'chelidonium-majus', name: 'Greater Celandine', scientificName: 'Chelidonium majus', rank: 'species' }
                      ]
                    },
                    { id: 'sanguinaria', name: 'Bloodroots', scientificName: 'Sanguinaria', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sanguinaria-canadensis', name: 'Bloodroot', scientificName: 'Sanguinaria canadensis', rank: 'species' }
                      ]
                    },
                    { id: 'corydalis', name: 'Fumitories', scientificName: 'Corydalis', rank: 'genus', speciesCount: 470,
                      children: [
                        { id: 'corydalis-solida', name: 'Bird-in-a-bush', scientificName: 'Corydalis solida', rank: 'species' }
                      ]
                    },
                    { id: 'dicentra', name: 'Bleeding Hearts', scientificName: 'Dicentra', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'dicentra-spectabilis', name: 'Bleeding Heart', scientificName: 'Dicentra spectabilis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'vitales', name: 'Grapes', scientificName: 'Vitales', rank: 'order', speciesCount: 1000,
              children: [
                { id: 'vitaceae', name: 'Grape Family', scientificName: 'Vitaceae', rank: 'family', speciesCount: 850,
                  children: [
                    { id: 'vitis', name: 'Grapevines', scientificName: 'Vitis', rank: 'genus', speciesCount: 79,
                      children: [
                        { id: 'vitis-vinifera', name: 'Common Grape Vine', scientificName: 'Vitis vinifera', rank: 'species' },
                        { id: 'vitis-labrusca', name: 'Fox Grape', scientificName: 'Vitis labrusca', rank: 'species' },
                        { id: 'vitis-riparia', name: 'Riverbank Grape', scientificName: 'Vitis riparia', rank: 'species' },
                        { id: 'vitis-rotundifolia', name: 'Muscadine', scientificName: 'Vitis rotundifolia', rank: 'species' }
                      ]
                    },
                    { id: 'parthenocissus', name: 'Virginia Creepers', scientificName: 'Parthenocissus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'parthenocissus-quinquefolia', name: 'Virginia Creeper', scientificName: 'Parthenocissus quinquefolia', rank: 'species' },
                        { id: 'parthenocissus-tricuspidata', name: 'Boston Ivy', scientificName: 'Parthenocissus tricuspidata', rank: 'species' }
                      ]
                    },
                    { id: 'ampelopsis', name: 'Ampelopsis', scientificName: 'Ampelopsis', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'ampelopsis-brevipedunculata', name: 'Porcelain Berry', scientificName: 'Ampelopsis brevipedunculata', rank: 'species' }
                      ]
                    },
                    { id: 'cissus', name: 'Cissus', scientificName: 'Cissus', rank: 'genus', speciesCount: 350,
                      children: [
                        { id: 'cissus-rhombifolia', name: 'Grape Ivy', scientificName: 'Cissus rhombifolia', rank: 'species' },
                        { id: 'cissus-quadrangularis', name: 'Veldt Grape', scientificName: 'Cissus quadrangularis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'sapindales', name: 'Maples & Citrus', scientificName: 'Sapindales', rank: 'order', speciesCount: 6000,
              children: [
                { id: 'rutaceae', name: 'Citrus Family', scientificName: 'Rutaceae', rank: 'family', speciesCount: 1600,
                  children: [
                    { id: 'citrus', name: 'Citrus', scientificName: 'Citrus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'citrus-sinensis', name: 'Sweet Orange', scientificName: 'Citrus × sinensis', rank: 'species' },
                        { id: 'citrus-limon', name: 'Lemon', scientificName: 'Citrus limon', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sapindaceae', name: 'Maple Family', scientificName: 'Sapindaceae', rank: 'family', speciesCount: 1600,
                  children: [
                    { id: 'acer', name: 'Maples', scientificName: 'Acer', rank: 'genus', speciesCount: 128,
                      children: [
                        { id: 'acer-saccharum', name: 'Sugar Maple', scientificName: 'Acer saccharum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'fagales', name: 'Oaks & Beeches', scientificName: 'Fagales', rank: 'order', speciesCount: 1900,
              children: [
                { id: 'fagaceae', name: 'Beech Family', scientificName: 'Fagaceae', rank: 'family', speciesCount: 900,
                  children: [
                    { id: 'quercus', name: 'Oaks', scientificName: 'Quercus', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'quercus-robur', name: 'English Oak', scientificName: 'Quercus robur', rank: 'species' },
                        { id: 'quercus-alba', name: 'White Oak', scientificName: 'Quercus alba', rank: 'species' }
                      ]
                    },
                    { id: 'fagus', name: 'Beeches', scientificName: 'Fagus', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'fagus-sylvatica', name: 'European Beech', scientificName: 'Fagus sylvatica', rank: 'species' }
                      ]
                    },
                    { id: 'castanea', name: 'Chestnuts', scientificName: 'Castanea', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'castanea-sativa', name: 'Sweet Chestnut', scientificName: 'Castanea sativa', rank: 'species' },
                        { id: 'castanea-dentata', name: 'American Chestnut', scientificName: 'Castanea dentata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'betulaceae', name: 'Birch Family', scientificName: 'Betulaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'betula', name: 'Birches', scientificName: 'Betula', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'betula-pendula', name: 'Silver Birch', scientificName: 'Betula pendula', rank: 'species' },
                        { id: 'betula-papyrifera', name: 'Paper Birch', scientificName: 'Betula papyrifera', rank: 'species' }
                      ]
                    },
                    { id: 'alnus', name: 'Alders', scientificName: 'Alnus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'alnus-glutinosa', name: 'Common Alder', scientificName: 'Alnus glutinosa', rank: 'species' },
                        { id: 'alnus-rubra', name: 'Red Alder', scientificName: 'Alnus rubra', rank: 'species' }
                      ]
                    },
                    { id: 'corylus', name: 'Hazels', scientificName: 'Corylus', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'corylus-avellana', name: 'Common Hazel', scientificName: 'Corylus avellana', rank: 'species' },
                        { id: 'corylus-maxima', name: 'Filbert', scientificName: 'Corylus maxima', rank: 'species' }
                      ]
                    },
                    { id: 'carpinus', name: 'Hornbeams', scientificName: 'Carpinus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'carpinus-betulus', name: 'European Hornbeam', scientificName: 'Carpinus betulus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'juglandaceae', name: 'Walnut Family', scientificName: 'Juglandaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'juglans', name: 'Walnuts', scientificName: 'Juglans', rank: 'genus', speciesCount: 21,
                      children: [
                        { id: 'juglans-regia', name: 'English Walnut', scientificName: 'Juglans regia', rank: 'species' },
                        { id: 'juglans-nigra', name: 'Black Walnut', scientificName: 'Juglans nigra', rank: 'species' }
                      ]
                    },
                    { id: 'carya', name: 'Hickories', scientificName: 'Carya', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'carya-illinoinensis', name: 'Pecan', scientificName: 'Carya illinoinensis', rank: 'species' },
                        { id: 'carya-ovata', name: 'Shagbark Hickory', scientificName: 'Carya ovata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'apiales', name: 'Carrots & Ivies', scientificName: 'Apiales', rank: 'order', speciesCount: 5500,
              children: [
                { id: 'apiaceae', name: 'Carrot Family', scientificName: 'Apiaceae', rank: 'family', speciesCount: 3700,
                  children: [
                    { id: 'daucus', name: 'Carrots', scientificName: 'Daucus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'daucus-carota', name: 'Wild Carrot', scientificName: 'Daucus carota', rank: 'species' },
                        { id: 'daucus-carota-sativus', name: 'Carrot', scientificName: 'Daucus carota subsp. sativus', rank: 'species' }
                      ]
                    },
                    { id: 'apium', name: 'Celeries', scientificName: 'Apium', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'apium-graveolens', name: 'Celery', scientificName: 'Apium graveolens', rank: 'species' },
                        { id: 'apium-graveolens-rapaceum', name: 'Celeriac', scientificName: 'Apium graveolens var. rapaceum', rank: 'species' }
                      ]
                    },
                    { id: 'petroselinum', name: 'Parsleys', scientificName: 'Petroselinum', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'petroselinum-crispum', name: 'Parsley', scientificName: 'Petroselinum crispum', rank: 'species' }
                      ]
                    },
                    { id: 'anethum', name: 'Dill', scientificName: 'Anethum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'anethum-graveolens', name: 'Dill', scientificName: 'Anethum graveolens', rank: 'species' }
                      ]
                    },
                    { id: 'foeniculum', name: 'Fennel', scientificName: 'Foeniculum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'foeniculum-vulgare', name: 'Fennel', scientificName: 'Foeniculum vulgare', rank: 'species' }
                      ]
                    },
                    { id: 'cuminum', name: 'Cumin', scientificName: 'Cuminum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'cuminum-cyminum', name: 'Cumin', scientificName: 'Cuminum cyminum', rank: 'species' }
                      ]
                    },
                    { id: 'coriandrum', name: 'Coriander', scientificName: 'Coriandrum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'coriandrum-sativum', name: 'Coriander', scientificName: 'Coriandrum sativum', rank: 'species' }
                      ]
                    },
                    { id: 'carum', name: 'Caraway', scientificName: 'Carum', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'carum-carvi', name: 'Caraway', scientificName: 'Carum carvi', rank: 'species' }
                      ]
                    },
                    { id: 'pimpinella', name: 'Anise', scientificName: 'Pimpinella', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'pimpinella-anisum', name: 'Anise', scientificName: 'Pimpinella anisum', rank: 'species' }
                      ]
                    },
                    { id: 'pastinaca', name: 'Parsnips', scientificName: 'Pastinaca', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'pastinaca-sativa', name: 'Parsnip', scientificName: 'Pastinaca sativa', rank: 'species' }
                      ]
                    },
                    { id: 'anthriscus', name: 'Chervils', scientificName: 'Anthriscus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'anthriscus-cerefolium', name: 'Chervil', scientificName: 'Anthriscus cerefolium', rank: 'species' }
                      ]
                    },
                    { id: 'levisticum', name: 'Lovage', scientificName: 'Levisticum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'levisticum-officinale', name: 'Lovage', scientificName: 'Levisticum officinale', rank: 'species' }
                      ]
                    },
                    { id: 'conium', name: 'Hemlock', scientificName: 'Conium', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'conium-maculatum', name: 'Poison Hemlock', scientificName: 'Conium maculatum', rank: 'species' }
                      ]
                    },
                    { id: 'angelica', name: 'Angelicas', scientificName: 'Angelica', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'angelica-archangelica', name: 'Garden Angelica', scientificName: 'Angelica archangelica', rank: 'species' },
                        { id: 'angelica-sinensis', name: 'Dong Quai', scientificName: 'Angelica sinensis', rank: 'species' }
                      ]
                    },
                    { id: 'eryngium', name: 'Sea Hollies', scientificName: 'Eryngium', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'eryngium-maritimum', name: 'Sea Holly', scientificName: 'Eryngium maritimum', rank: 'species' },
                        { id: 'eryngium-foetidum', name: 'Culantro', scientificName: 'Eryngium foetidum', rank: 'species' }
                      ]
                    },
                    { id: 'heracleum', name: 'Hogweeds', scientificName: 'Heracleum', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'heracleum-mantegazzianum', name: 'Giant Hogweed', scientificName: 'Heracleum mantegazzianum', rank: 'species' }
                      ]
                    },
                    { id: 'aegopodium', name: 'Ground Elder', scientificName: 'Aegopodium', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'aegopodium-podagraria', name: 'Ground Elder', scientificName: 'Aegopodium podagraria', rank: 'species' }
                      ]
                    },
                    { id: 'cicuta', name: 'Water Hemlocks', scientificName: 'Cicuta', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'cicuta-virosa', name: 'Water Hemlock', scientificName: 'Cicuta virosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'araliaceae', name: 'Ginseng Family', scientificName: 'Araliaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'hedera', name: 'Ivies', scientificName: 'Hedera', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'hedera-helix', name: 'English Ivy', scientificName: 'Hedera helix', rank: 'species' },
                        { id: 'hedera-colchica', name: 'Persian Ivy', scientificName: 'Hedera colchica', rank: 'species' }
                      ]
                    },
                    { id: 'panax', name: 'Ginsengs', scientificName: 'Panax', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'panax-ginseng', name: 'Asian Ginseng', scientificName: 'Panax ginseng', rank: 'species' },
                        { id: 'panax-quinquefolius', name: 'American Ginseng', scientificName: 'Panax quinquefolius', rank: 'species' }
                      ]
                    },
                    { id: 'schefflera', name: 'Umbrella Trees', scientificName: 'Schefflera', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'schefflera-arboricola', name: 'Dwarf Umbrella Tree', scientificName: 'Schefflera arboricola', rank: 'species' }
                      ]
                    },
                    { id: 'fatsia', name: 'Fatsia', scientificName: 'Fatsia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'fatsia-japonica', name: 'Japanese Aralia', scientificName: 'Fatsia japonica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'cucurbitales', name: 'Gourds & Cucumbers', scientificName: 'Cucurbitales', rank: 'order', speciesCount: 2600,
              children: [
                { id: 'cucurbitaceae', name: 'Gourd Family', scientificName: 'Cucurbitaceae', rank: 'family', speciesCount: 965,
                  children: [
                    { id: 'cucumis', name: 'Cucumbers & Melons', scientificName: 'Cucumis', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'cucumis-sativus', name: 'Cucumber', scientificName: 'Cucumis sativus', rank: 'species' },
                        { id: 'cucumis-melo', name: 'Melon', scientificName: 'Cucumis melo', rank: 'species' },
                        { id: 'cucumis-melo-cantalupo', name: 'Cantaloupe', scientificName: 'Cucumis melo var. cantalupo', rank: 'species' },
                        { id: 'cucumis-melo-reticulatus', name: 'Muskmelon', scientificName: 'Cucumis melo var. reticulatus', rank: 'species' }
                      ]
                    },
                    { id: 'cucurbita', name: 'Squashes & Pumpkins', scientificName: 'Cucurbita', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'cucurbita-pepo', name: 'Pumpkin', scientificName: 'Cucurbita pepo', rank: 'species' },
                        { id: 'cucurbita-pepo-ovifera', name: 'Summer Squash', scientificName: 'Cucurbita pepo var. ovifera', rank: 'species' },
                        { id: 'cucurbita-maxima', name: 'Winter Squash', scientificName: 'Cucurbita maxima', rank: 'species' },
                        { id: 'cucurbita-moschata', name: 'Butternut Squash', scientificName: 'Cucurbita moschata', rank: 'species' },
                        { id: 'cucurbita-argyrosperma', name: 'Cushaw Squash', scientificName: 'Cucurbita argyrosperma', rank: 'species' }
                      ]
                    },
                    { id: 'citrullus', name: 'Watermelons', scientificName: 'Citrullus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'citrullus-lanatus', name: 'Watermelon', scientificName: 'Citrullus lanatus', rank: 'species' }
                      ]
                    },
                    { id: 'lagenaria', name: 'Bottle Gourds', scientificName: 'Lagenaria', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'lagenaria-siceraria', name: 'Bottle Gourd', scientificName: 'Lagenaria siceraria', rank: 'species' }
                      ]
                    },
                    { id: 'luffa', name: 'Luffas', scientificName: 'Luffa', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'luffa-aegyptiaca', name: 'Loofah', scientificName: 'Luffa aegyptiaca', rank: 'species' },
                        { id: 'luffa-acutangula', name: 'Ridged Gourd', scientificName: 'Luffa acutangula', rank: 'species' }
                      ]
                    },
                    { id: 'momordica', name: 'Bitter Melons', scientificName: 'Momordica', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'momordica-charantia', name: 'Bitter Melon', scientificName: 'Momordica charantia', rank: 'species' }
                      ]
                    },
                    { id: 'sechium', name: 'Chayotes', scientificName: 'Sechium', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'sechium-edule', name: 'Chayote', scientificName: 'Sechium edule', rank: 'species' }
                      ]
                    },
                    { id: 'benincasa', name: 'Wax Gourds', scientificName: 'Benincasa', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'benincasa-hispida', name: 'Winter Melon', scientificName: 'Benincasa hispida', rank: 'species' }
                      ]
                    },
                    { id: 'trichosanthes', name: 'Snake Gourds', scientificName: 'Trichosanthes', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'trichosanthes-cucumerina', name: 'Snake Gourd', scientificName: 'Trichosanthes cucumerina', rank: 'species' }
                      ]
                    },
                    { id: 'bryonia', name: 'Bryonies', scientificName: 'Bryonia', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'bryonia-dioica', name: 'White Bryony', scientificName: 'Bryonia dioica', rank: 'species' }
                      ]
                    },
                    { id: 'ecballium', name: 'Squirting Cucumbers', scientificName: 'Ecballium', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ecballium-elaterium', name: 'Squirting Cucumber', scientificName: 'Ecballium elaterium', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'begoniaceae', name: 'Begonia Family', scientificName: 'Begoniaceae', rank: 'family', speciesCount: 1800,
                  children: [
                    { id: 'begonia', name: 'Begonias', scientificName: 'Begonia', rank: 'genus', speciesCount: 1800,
                      children: [
                        { id: 'begonia-semperflorens', name: 'Wax Begonia', scientificName: 'Begonia semperflorens', rank: 'species' },
                        { id: 'begonia-rex', name: 'Rex Begonia', scientificName: 'Begonia rex', rank: 'species' },
                        { id: 'begonia-tuberosa', name: 'Tuberous Begonia', scientificName: 'Begonia × tuberhybrida', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'laurales', name: 'Laurels & Allies', scientificName: 'Laurales', rank: 'order', speciesCount: 2800,
              children: [
                { id: 'lauraceae', name: 'Laurel Family', scientificName: 'Lauraceae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'persea', name: 'Avocados', scientificName: 'Persea', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'persea-americana', name: 'Avocado', scientificName: 'Persea americana', rank: 'species' }
                      ]
                    },
                    { id: 'cinnamomum', name: 'Cinnamons & Camphor', scientificName: 'Cinnamomum', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'cinnamomum-verum', name: 'Ceylon Cinnamon', scientificName: 'Cinnamomum verum', rank: 'species' },
                        { id: 'cinnamomum-cassia', name: 'Chinese Cinnamon', scientificName: 'Cinnamomum cassia', rank: 'species' },
                        { id: 'cinnamomum-camphora', name: 'Camphor Tree', scientificName: 'Cinnamomum camphora', rank: 'species' }
                      ]
                    },
                    { id: 'laurus', name: 'Bay Laurels', scientificName: 'Laurus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'laurus-nobilis', name: 'Bay Laurel', scientificName: 'Laurus nobilis', rank: 'species' }
                      ]
                    },
                    { id: 'sassafras', name: 'Sassafras', scientificName: 'Sassafras', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'sassafras-albidum', name: 'Sassafras', scientificName: 'Sassafras albidum', rank: 'species' }
                      ]
                    },
                    { id: 'umbellularia', name: 'California Laurel', scientificName: 'Umbellularia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'umbellularia-californica', name: 'California Bay Laurel', scientificName: 'Umbellularia californica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'nymphaeales', name: 'Water Lilies', scientificName: 'Nymphaeales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'nymphaeaceae', name: 'Water Lily Family', scientificName: 'Nymphaeaceae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'nymphaea', name: 'Water Lilies', scientificName: 'Nymphaea', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'nymphaea-alba', name: 'White Water Lily', scientificName: 'Nymphaea alba', rank: 'species' },
                        { id: 'nymphaea-odorata', name: 'American White Water Lily', scientificName: 'Nymphaea odorata', rank: 'species' },
                        { id: 'nymphaea-caerulea', name: 'Blue Lotus', scientificName: 'Nymphaea caerulea', rank: 'species' },
                        { id: 'nymphaea-lotus', name: 'Egyptian White Lotus', scientificName: 'Nymphaea lotus', rank: 'species' }
                      ]
                    },
                    { id: 'nuphar', name: 'Pond Lilies', scientificName: 'Nuphar', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'nuphar-lutea', name: 'Yellow Pond Lily', scientificName: 'Nuphar lutea', rank: 'species' },
                        { id: 'nuphar-advena', name: 'Spatterdock', scientificName: 'Nuphar advena', rank: 'species' }
                      ]
                    },
                    { id: 'victoria', name: 'Giant Water Lilies', scientificName: 'Victoria', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'victoria-amazonica', name: 'Amazon Water Lily', scientificName: 'Victoria amazonica', rank: 'species' },
                        { id: 'victoria-cruziana', name: 'Santa Cruz Water Lily', scientificName: 'Victoria cruziana', rank: 'species' }
                      ]
                    },
                    { id: 'euryale', name: 'Prickly Water Lilies', scientificName: 'Euryale', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'euryale-ferox', name: 'Prickly Water Lily', scientificName: 'Euryale ferox', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cabombaceae', name: 'Fanwort Family', scientificName: 'Cabombaceae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'cabomba', name: 'Fanworts', scientificName: 'Cabomba', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'cabomba-caroliniana', name: 'Carolina Fanwort', scientificName: 'Cabomba caroliniana', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'proteales', name: 'Proteas & Lotuses', scientificName: 'Proteales', rank: 'order', speciesCount: 1700,
              children: [
                { id: 'nelumbonaceae', name: 'Lotus Family', scientificName: 'Nelumbonaceae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'nelumbo', name: 'Lotuses', scientificName: 'Nelumbo', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'nelumbo-nucifera', name: 'Sacred Lotus', scientificName: 'Nelumbo nucifera', rank: 'species' },
                        { id: 'nelumbo-lutea', name: 'American Lotus', scientificName: 'Nelumbo lutea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'proteaceae', name: 'Protea Family', scientificName: 'Proteaceae', rank: 'family', speciesCount: 1600,
                  children: [
                    { id: 'protea', name: 'Proteas', scientificName: 'Protea', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'protea-cynaroides', name: 'King Protea', scientificName: 'Protea cynaroides', rank: 'species' }
                      ]
                    },
                    { id: 'banksia', name: 'Banksias', scientificName: 'Banksia', rank: 'genus', speciesCount: 173,
                      children: [
                        { id: 'banksia-serrata', name: 'Saw Banksia', scientificName: 'Banksia serrata', rank: 'species' }
                      ]
                    },
                    { id: 'grevillea', name: 'Grevilleas', scientificName: 'Grevillea', rank: 'genus', speciesCount: 360,
                      children: [
                        { id: 'grevillea-robusta', name: 'Silky Oak', scientificName: 'Grevillea robusta', rank: 'species' }
                      ]
                    },
                    { id: 'macadamia', name: 'Macadamias', scientificName: 'Macadamia', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'macadamia-integrifolia', name: 'Macadamia Nut', scientificName: 'Macadamia integrifolia', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'monocots',
          name: 'Monocots',
          scientificName: 'Liliopsida',
          rank: 'class',
          speciesCount: 70000,
          children: [
            { id: 'poales', name: 'Grasses', scientificName: 'Poales', rank: 'order', speciesCount: 19000,
              children: [
                { id: 'poaceae', name: 'Grass Family', scientificName: 'Poaceae', rank: 'family', speciesCount: 12000,
                  children: [
                    { id: 'oryza', name: 'Rice', scientificName: 'Oryza', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'oryza-sativa', name: 'Asian Rice', scientificName: 'Oryza sativa', rank: 'species' },
                        { id: 'oryza-glaberrima', name: 'African Rice', scientificName: 'Oryza glaberrima', rank: 'species' },
                        { id: 'oryza-rufipogon', name: 'Wild Rice', scientificName: 'Oryza rufipogon', rank: 'species' }
                      ]
                    },
                    { id: 'triticum', name: 'Wheat', scientificName: 'Triticum', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'triticum-aestivum', name: 'Common Wheat', scientificName: 'Triticum aestivum', rank: 'species' },
                        { id: 'triticum-durum', name: 'Durum Wheat', scientificName: 'Triticum durum', rank: 'species' },
                        { id: 'triticum-spelta', name: 'Spelt', scientificName: 'Triticum spelta', rank: 'species' },
                        { id: 'triticum-monococcum', name: 'Einkorn', scientificName: 'Triticum monococcum', rank: 'species' }
                      ]
                    },
                    { id: 'zea', name: 'Corn', scientificName: 'Zea', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'zea-mays', name: 'Maize', scientificName: 'Zea mays', rank: 'species' }
                      ]
                    },
                    { id: 'bambusa', name: 'Bamboos', scientificName: 'Bambusa', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'bambusa-vulgaris', name: 'Common Bamboo', scientificName: 'Bambusa vulgaris', rank: 'species' },
                        { id: 'bambusa-oldhamii', name: 'Giant Timber Bamboo', scientificName: 'Bambusa oldhamii', rank: 'species' }
                      ]
                    },
                    { id: 'phyllostachys', name: 'Running Bamboos', scientificName: 'Phyllostachys', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'phyllostachys-edulis', name: 'Moso Bamboo', scientificName: 'Phyllostachys edulis', rank: 'species' },
                        { id: 'phyllostachys-aurea', name: 'Golden Bamboo', scientificName: 'Phyllostachys aurea', rank: 'species' },
                        { id: 'phyllostachys-nigra', name: 'Black Bamboo', scientificName: 'Phyllostachys nigra', rank: 'species' }
                      ]
                    },
                    { id: 'dendrocalamus', name: 'Giant Bamboos', scientificName: 'Dendrocalamus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'dendrocalamus-giganteus', name: 'Giant Bamboo', scientificName: 'Dendrocalamus giganteus', rank: 'species' }
                      ]
                    },
                    { id: 'saccharum', name: 'Sugarcane', scientificName: 'Saccharum', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'saccharum-officinarum', name: 'Sugarcane', scientificName: 'Saccharum officinarum', rank: 'species' }
                      ]
                    },
                    { id: 'hordeum', name: 'Barley', scientificName: 'Hordeum', rank: 'genus', speciesCount: 32,
                      children: [
                        { id: 'hordeum-vulgare', name: 'Barley', scientificName: 'Hordeum vulgare', rank: 'species' }
                      ]
                    },
                    { id: 'avena', name: 'Oats', scientificName: 'Avena', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'avena-sativa', name: 'Oat', scientificName: 'Avena sativa', rank: 'species' }
                      ]
                    },
                    { id: 'secale', name: 'Rye', scientificName: 'Secale', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'secale-cereale', name: 'Rye', scientificName: 'Secale cereale', rank: 'species' }
                      ]
                    },
                    { id: 'sorghum', name: 'Sorghums', scientificName: 'Sorghum', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'sorghum-bicolor', name: 'Sorghum', scientificName: 'Sorghum bicolor', rank: 'species' }
                      ]
                    },
                    { id: 'panicum', name: 'Panic Grasses', scientificName: 'Panicum', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'panicum-miliaceum', name: 'Proso Millet', scientificName: 'Panicum miliaceum', rank: 'species' },
                        { id: 'panicum-virgatum', name: 'Switchgrass', scientificName: 'Panicum virgatum', rank: 'species' }
                      ]
                    },
                    { id: 'setaria', name: 'Foxtail Millets', scientificName: 'Setaria', rank: 'genus', speciesCount: 125,
                      children: [
                        { id: 'setaria-italica', name: 'Foxtail Millet', scientificName: 'Setaria italica', rank: 'species' }
                      ]
                    },
                    { id: 'pennisetum', name: 'Pearl Millets', scientificName: 'Pennisetum', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'pennisetum-glaucum', name: 'Pearl Millet', scientificName: 'Pennisetum glaucum', rank: 'species' }
                      ]
                    },
                    { id: 'eleusine', name: 'Goose Grasses', scientificName: 'Eleusine', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'eleusine-coracana', name: 'Finger Millet', scientificName: 'Eleusine coracana', rank: 'species' }
                      ]
                    },
                    { id: 'poa', name: 'Meadow Grasses', scientificName: 'Poa', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'poa-pratensis', name: 'Kentucky Bluegrass', scientificName: 'Poa pratensis', rank: 'species' },
                        { id: 'poa-annua', name: 'Annual Bluegrass', scientificName: 'Poa annua', rank: 'species' }
                      ]
                    },
                    { id: 'festuca', name: 'Fescues', scientificName: 'Festuca', rank: 'genus', speciesCount: 450,
                      children: [
                        { id: 'festuca-arundinacea', name: 'Tall Fescue', scientificName: 'Festuca arundinacea', rank: 'species' },
                        { id: 'festuca-rubra', name: 'Red Fescue', scientificName: 'Festuca rubra', rank: 'species' }
                      ]
                    },
                    { id: 'lolium', name: 'Ryegrasses', scientificName: 'Lolium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'lolium-perenne', name: 'Perennial Ryegrass', scientificName: 'Lolium perenne', rank: 'species' },
                        { id: 'lolium-multiflorum', name: 'Italian Ryegrass', scientificName: 'Lolium multiflorum', rank: 'species' }
                      ]
                    },
                    { id: 'agrostis', name: 'Bentgrasses', scientificName: 'Agrostis', rank: 'genus', speciesCount: 220,
                      children: [
                        { id: 'agrostis-stolonifera', name: 'Creeping Bentgrass', scientificName: 'Agrostis stolonifera', rank: 'species' }
                      ]
                    },
                    { id: 'cynodon', name: 'Bermuda Grasses', scientificName: 'Cynodon', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'cynodon-dactylon', name: 'Bermuda Grass', scientificName: 'Cynodon dactylon', rank: 'species' }
                      ]
                    },
                    { id: 'zoysia', name: 'Zoysia Grasses', scientificName: 'Zoysia', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'zoysia-japonica', name: 'Japanese Lawn Grass', scientificName: 'Zoysia japonica', rank: 'species' }
                      ]
                    },
                    { id: 'miscanthus', name: 'Silvergrasses', scientificName: 'Miscanthus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'miscanthus-sinensis', name: 'Chinese Silver Grass', scientificName: 'Miscanthus sinensis', rank: 'species' },
                        { id: 'miscanthus-giganteus', name: 'Giant Miscanthus', scientificName: 'Miscanthus × giganteus', rank: 'species' }
                      ]
                    },
                    { id: 'cortaderia', name: 'Pampas Grasses', scientificName: 'Cortaderia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'cortaderia-selloana', name: 'Pampas Grass', scientificName: 'Cortaderia selloana', rank: 'species' }
                      ]
                    },
                    { id: 'arundo', name: 'Giant Reeds', scientificName: 'Arundo', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'arundo-donax', name: 'Giant Reed', scientificName: 'Arundo donax', rank: 'species' }
                      ]
                    },
                    { id: 'phragmites', name: 'Common Reeds', scientificName: 'Phragmites', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'phragmites-australis', name: 'Common Reed', scientificName: 'Phragmites australis', rank: 'species' }
                      ]
                    },
                    { id: 'echinochloa', name: 'Barnyard Grasses', scientificName: 'Echinochloa', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'echinochloa-esculenta', name: 'Japanese Millet', scientificName: 'Echinochloa esculenta', rank: 'species' }
                      ]
                    },
                    { id: 'digitaria', name: 'Crabgrasses', scientificName: 'Digitaria', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'digitaria-exilis', name: 'Fonio', scientificName: 'Digitaria exilis', rank: 'species' }
                      ]
                    },
                    { id: 'teff', name: 'Teff', scientificName: 'Eragrostis', rank: 'genus', speciesCount: 350,
                      children: [
                        { id: 'eragrostis-tef', name: 'Teff', scientificName: 'Eragrostis tef', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'musaceae', name: 'Banana Family', scientificName: 'Musaceae', rank: 'family', speciesCount: 75,
                  children: [
                    { id: 'musa', name: 'Bananas', scientificName: 'Musa', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'musa-acuminata', name: 'Banana', scientificName: 'Musa acuminata', rank: 'species' },
                        { id: 'musa-balbisiana', name: 'Plantain', scientificName: 'Musa balbisiana', rank: 'species' },
                        { id: 'musa-textilis', name: 'Abaca', scientificName: 'Musa textilis', rank: 'species' }
                      ]
                    },
                    { id: 'ensete', name: 'Ensete', scientificName: 'Ensete', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'ensete-ventricosum', name: 'Ethiopian Banana', scientificName: 'Ensete ventricosum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bromeliaceae', name: 'Bromeliad Family', scientificName: 'Bromeliaceae', rank: 'family', speciesCount: 3500,
                  children: [
                    { id: 'ananas', name: 'Pineapples', scientificName: 'Ananas', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'ananas-comosus', name: 'Pineapple', scientificName: 'Ananas comosus', rank: 'species' }
                      ]
                    },
                    { id: 'tillandsia', name: 'Air Plants', scientificName: 'Tillandsia', rank: 'genus', speciesCount: 650,
                      children: [
                        { id: 'tillandsia-usneoides', name: 'Spanish Moss', scientificName: 'Tillandsia usneoides', rank: 'species' },
                        { id: 'tillandsia-ionantha', name: 'Sky Plant', scientificName: 'Tillandsia ionantha', rank: 'species' }
                      ]
                    },
                    { id: 'guzmania', name: 'Guzmanias', scientificName: 'Guzmania', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'guzmania-lingulata', name: 'Scarlet Star', scientificName: 'Guzmania lingulata', rank: 'species' }
                      ]
                    },
                    { id: 'vriesea', name: 'Vrieseas', scientificName: 'Vriesea', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'vriesea-splendens', name: 'Flaming Sword', scientificName: 'Vriesea splendens', rank: 'species' }
                      ]
                    },
                    { id: 'aechmea', name: 'Urns', scientificName: 'Aechmea', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'aechmea-fasciata', name: 'Silver Vase', scientificName: 'Aechmea fasciata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cyperaceae', name: 'Sedge Family', scientificName: 'Cyperaceae', rank: 'family', speciesCount: 5500,
                  children: [
                    { id: 'cyperus', name: 'Flat Sedges', scientificName: 'Cyperus', rank: 'genus', speciesCount: 700,
                      children: [
                        { id: 'cyperus-papyrus', name: 'Papyrus', scientificName: 'Cyperus papyrus', rank: 'species' },
                        { id: 'cyperus-esculentus', name: 'Tiger Nut', scientificName: 'Cyperus esculentus', rank: 'species' }
                      ]
                    },
                    { id: 'carex', name: 'True Sedges', scientificName: 'Carex', rank: 'genus', speciesCount: 2000,
                      children: [
                        { id: 'carex-pendula', name: 'Pendulous Sedge', scientificName: 'Carex pendula', rank: 'species' }
                      ]
                    },
                    { id: 'scirpus', name: 'Bulrushes', scientificName: 'Scirpus', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'scirpus-lacustris', name: 'Common Club-rush', scientificName: 'Scirpus lacustris', rank: 'species' }
                      ]
                    },
                    { id: 'eleocharis', name: 'Spikerushes', scientificName: 'Eleocharis', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'eleocharis-dulcis', name: 'Water Chestnut', scientificName: 'Eleocharis dulcis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'asparagales', name: 'Asparagus & Orchids', scientificName: 'Asparagales', rank: 'order', speciesCount: 26000,
              children: [
                { id: 'orchidaceae', name: 'Orchid Family', scientificName: 'Orchidaceae', rank: 'family', speciesCount: 25000,
                  children: [
                    { id: 'phalaenopsis', name: 'Moth Orchids', scientificName: 'Phalaenopsis', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'phalaenopsis-amabilis', name: 'Moon Orchid', scientificName: 'Phalaenopsis amabilis', rank: 'species' },
                        { id: 'phalaenopsis-aphrodite', name: 'Aphrodite\'s Moth Orchid', scientificName: 'Phalaenopsis aphrodite', rank: 'species' }
                      ]
                    },
                    { id: 'vanilla', name: 'Vanilla Orchids', scientificName: 'Vanilla', rank: 'genus', speciesCount: 110,
                      children: [
                        { id: 'vanilla-planifolia', name: 'Vanilla', scientificName: 'Vanilla planifolia', rank: 'species' },
                        { id: 'vanilla-tahitensis', name: 'Tahitian Vanilla', scientificName: 'Vanilla tahitensis', rank: 'species' }
                      ]
                    },
                    { id: 'cattleya', name: 'Cattleya Orchids', scientificName: 'Cattleya', rank: 'genus', speciesCount: 120,
                      children: [
                        { id: 'cattleya-labiata', name: 'Crimson Cattleya', scientificName: 'Cattleya labiata', rank: 'species' },
                        { id: 'cattleya-mossiae', name: 'Easter Orchid', scientificName: 'Cattleya mossiae', rank: 'species' }
                      ]
                    },
                    { id: 'dendrobium', name: 'Dendrobium Orchids', scientificName: 'Dendrobium', rank: 'genus', speciesCount: 1800,
                      children: [
                        { id: 'dendrobium-nobile', name: 'Noble Dendrobium', scientificName: 'Dendrobium nobile', rank: 'species' },
                        { id: 'dendrobium-phalaenopsis', name: 'Cooktown Orchid', scientificName: 'Dendrobium phalaenopsis', rank: 'species' }
                      ]
                    },
                    { id: 'oncidium', name: 'Dancing Lady Orchids', scientificName: 'Oncidium', rank: 'genus', speciesCount: 330,
                      children: [
                        { id: 'oncidium-flexuosum', name: 'Dancing Lady', scientificName: 'Oncidium flexuosum', rank: 'species' },
                        { id: 'oncidium-sphacelatum', name: 'Golden Shower Orchid', scientificName: 'Oncidium sphacelatum', rank: 'species' }
                      ]
                    },
                    { id: 'cymbidium', name: 'Boat Orchids', scientificName: 'Cymbidium', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'cymbidium-goeringii', name: 'Noble Orchid', scientificName: 'Cymbidium goeringii', rank: 'species' },
                        { id: 'cymbidium-sinense', name: 'Chinese Cymbidium', scientificName: 'Cymbidium sinense', rank: 'species' }
                      ]
                    },
                    { id: 'paphiopedilum', name: 'Slipper Orchids', scientificName: 'Paphiopedilum', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'paphiopedilum-rothschildianum', name: 'Rothschild\'s Slipper Orchid', scientificName: 'Paphiopedilum rothschildianum', rank: 'species' },
                        { id: 'paphiopedilum-insigne', name: 'Lady Slipper', scientificName: 'Paphiopedilum insigne', rank: 'species' }
                      ]
                    },
                    { id: 'vanda', name: 'Vanda Orchids', scientificName: 'Vanda', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'vanda-coerulea', name: 'Blue Vanda', scientificName: 'Vanda coerulea', rank: 'species' },
                        { id: 'vanda-sanderiana', name: 'Waling-waling', scientificName: 'Vanda sanderiana', rank: 'species' }
                      ]
                    },
                    { id: 'epidendrum', name: 'Crucifix Orchids', scientificName: 'Epidendrum', rank: 'genus', speciesCount: 1500,
                      children: [
                        { id: 'epidendrum-radicans', name: 'Fire Star Orchid', scientificName: 'Epidendrum radicans', rank: 'species' }
                      ]
                    },
                    { id: 'bulbophyllum', name: 'Bulbophyllums', scientificName: 'Bulbophyllum', rank: 'genus', speciesCount: 2000,
                      children: [
                        { id: 'bulbophyllum-lobbii', name: 'Lobb\'s Bulbophyllum', scientificName: 'Bulbophyllum lobbii', rank: 'species' }
                      ]
                    },
                    { id: 'ophrys', name: 'Bee Orchids', scientificName: 'Ophrys', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'ophrys-apifera', name: 'Bee Orchid', scientificName: 'Ophrys apifera', rank: 'species' },
                        { id: 'ophrys-insectifera', name: 'Fly Orchid', scientificName: 'Ophrys insectifera', rank: 'species' }
                      ]
                    },
                    { id: 'orchis', name: 'Orchis', scientificName: 'Orchis', rank: 'genus', speciesCount: 21,
                      children: [
                        { id: 'orchis-mascula', name: 'Early Purple Orchid', scientificName: 'Orchis mascula', rank: 'species' }
                      ]
                    },
                    { id: 'cypripedium', name: 'Lady\'s Slippers', scientificName: 'Cypripedium', rank: 'genus', speciesCount: 58,
                      children: [
                        { id: 'cypripedium-calceolus', name: 'Lady\'s Slipper Orchid', scientificName: 'Cypripedium calceolus', rank: 'species' },
                        { id: 'cypripedium-reginae', name: 'Showy Lady\'s Slipper', scientificName: 'Cypripedium reginae', rank: 'species' }
                      ]
                    },
                    { id: 'masdevallia', name: 'Kite Orchids', scientificName: 'Masdevallia', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'masdevallia-veitchiana', name: 'King of the Masdevallias', scientificName: 'Masdevallia veitchiana', rank: 'species' }
                      ]
                    },
                    { id: 'miltonia', name: 'Pansy Orchids', scientificName: 'Miltonia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'miltonia-spectabilis', name: 'Spectacular Pansy Orchid', scientificName: 'Miltonia spectabilis', rank: 'species' }
                      ]
                    },
                    { id: 'coelogyne', name: 'Coelogynes', scientificName: 'Coelogyne', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'coelogyne-cristata', name: 'Crested Coelogyne', scientificName: 'Coelogyne cristata', rank: 'species' }
                      ]
                    },
                    { id: 'brassavola', name: 'Lady of the Night Orchids', scientificName: 'Brassavola', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'brassavola-nodosa', name: 'Lady of the Night', scientificName: 'Brassavola nodosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'amaryllidaceae', name: 'Amaryllis Family', scientificName: 'Amaryllidaceae', rank: 'family', speciesCount: 1600,
                  children: [
                    { id: 'allium', name: 'Onions & Garlic', scientificName: 'Allium', rank: 'genus', speciesCount: 800,
                      children: [
                        { id: 'allium-cepa', name: 'Onion', scientificName: 'Allium cepa', rank: 'species' },
                        { id: 'allium-sativum', name: 'Garlic', scientificName: 'Allium sativum', rank: 'species' },
                        { id: 'allium-porrum', name: 'Leek', scientificName: 'Allium porrum', rank: 'species' },
                        { id: 'allium-schoenoprasum', name: 'Chives', scientificName: 'Allium schoenoprasum', rank: 'species' },
                        { id: 'allium-fistulosum', name: 'Welsh Onion', scientificName: 'Allium fistulosum', rank: 'species' },
                        { id: 'allium-tuberosum', name: 'Garlic Chives', scientificName: 'Allium tuberosum', rank: 'species' },
                        { id: 'allium-ursinum', name: 'Wild Garlic', scientificName: 'Allium ursinum', rank: 'species' },
                        { id: 'allium-giganteum', name: 'Giant Onion', scientificName: 'Allium giganteum', rank: 'species' }
                      ]
                    },
                    { id: 'narcissus', name: 'Daffodils', scientificName: 'Narcissus', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'narcissus-pseudonarcissus', name: 'Wild Daffodil', scientificName: 'Narcissus pseudonarcissus', rank: 'species' },
                        { id: 'narcissus-poeticus', name: 'Poet\'s Narcissus', scientificName: 'Narcissus poeticus', rank: 'species' },
                        { id: 'narcissus-tazetta', name: 'Paperwhite', scientificName: 'Narcissus tazetta', rank: 'species' },
                        { id: 'narcissus-jonquilla', name: 'Jonquil', scientificName: 'Narcissus jonquilla', rank: 'species' }
                      ]
                    },
                    { id: 'amaryllis', name: 'Amaryllis', scientificName: 'Amaryllis', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'amaryllis-belladonna', name: 'Belladonna Lily', scientificName: 'Amaryllis belladonna', rank: 'species' }
                      ]
                    },
                    { id: 'hippeastrum', name: 'Hippeastrums', scientificName: 'Hippeastrum', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'hippeastrum-vittatum', name: 'Barbados Lily', scientificName: 'Hippeastrum vittatum', rank: 'species' }
                      ]
                    },
                    { id: 'galanthus', name: 'Snowdrops', scientificName: 'Galanthus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'galanthus-nivalis', name: 'Common Snowdrop', scientificName: 'Galanthus nivalis', rank: 'species' }
                      ]
                    },
                    { id: 'leucojum', name: 'Snowflakes', scientificName: 'Leucojum', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'leucojum-vernum', name: 'Spring Snowflake', scientificName: 'Leucojum vernum', rank: 'species' }
                      ]
                    },
                    { id: 'agapanthus', name: 'African Lilies', scientificName: 'Agapanthus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'agapanthus-africanus', name: 'African Lily', scientificName: 'Agapanthus africanus', rank: 'species' },
                        { id: 'agapanthus-praecox', name: 'Common Agapanthus', scientificName: 'Agapanthus praecox', rank: 'species' }
                      ]
                    },
                    { id: 'crinum', name: 'Crinums', scientificName: 'Crinum', rank: 'genus', speciesCount: 180,
                      children: [
                        { id: 'crinum-asiaticum', name: 'Poison Bulb', scientificName: 'Crinum asiaticum', rank: 'species' }
                      ]
                    },
                    { id: 'nerine', name: 'Nerines', scientificName: 'Nerine', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'nerine-bowdenii', name: 'Bowden Lily', scientificName: 'Nerine bowdenii', rank: 'species' }
                      ]
                    },
                    { id: 'clivia', name: 'Bush Lilies', scientificName: 'Clivia', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'clivia-miniata', name: 'Natal Lily', scientificName: 'Clivia miniata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'asparagaceae', name: 'Asparagus Family', scientificName: 'Asparagaceae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'asparagus', name: 'Asparagus', scientificName: 'Asparagus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'asparagus-officinalis', name: 'Garden Asparagus', scientificName: 'Asparagus officinalis', rank: 'species' },
                        { id: 'asparagus-setaceus', name: 'Asparagus Fern', scientificName: 'Asparagus setaceus', rank: 'species' },
                        { id: 'asparagus-densiflorus', name: 'Foxtail Fern', scientificName: 'Asparagus densiflorus', rank: 'species' }
                      ]
                    },
                    { id: 'agave', name: 'Agaves', scientificName: 'Agave', rank: 'genus', speciesCount: 270,
                      children: [
                        { id: 'agave-americana', name: 'Century Plant', scientificName: 'Agave americana', rank: 'species' },
                        { id: 'agave-tequilana', name: 'Blue Agave', scientificName: 'Agave tequilana', rank: 'species' },
                        { id: 'agave-sisalana', name: 'Sisal', scientificName: 'Agave sisalana', rank: 'species' },
                        { id: 'agave-attenuata', name: 'Foxtail Agave', scientificName: 'Agave attenuata', rank: 'species' }
                      ]
                    },
                    { id: 'yucca', name: 'Yuccas', scientificName: 'Yucca', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'yucca-filamentosa', name: 'Adam\'s Needle', scientificName: 'Yucca filamentosa', rank: 'species' },
                        { id: 'yucca-elephantipes', name: 'Spineless Yucca', scientificName: 'Yucca elephantipes', rank: 'species' },
                        { id: 'yucca-brevifolia', name: 'Joshua Tree', scientificName: 'Yucca brevifolia', rank: 'species' },
                        { id: 'yucca-aloifolia', name: 'Spanish Bayonet', scientificName: 'Yucca aloifolia', rank: 'species' }
                      ]
                    },
                    { id: 'hosta', name: 'Hostas', scientificName: 'Hosta', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'hosta-sieboldiana', name: 'Siebold\'s Plantain Lily', scientificName: 'Hosta sieboldiana', rank: 'species' },
                        { id: 'hosta-plantaginea', name: 'Fragrant Plantain Lily', scientificName: 'Hosta plantaginea', rank: 'species' }
                      ]
                    },
                    { id: 'hyacinthus', name: 'Hyacinths', scientificName: 'Hyacinthus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'hyacinthus-orientalis', name: 'Common Hyacinth', scientificName: 'Hyacinthus orientalis', rank: 'species' }
                      ]
                    },
                    { id: 'muscari', name: 'Grape Hyacinths', scientificName: 'Muscari', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'muscari-armeniacum', name: 'Armenian Grape Hyacinth', scientificName: 'Muscari armeniacum', rank: 'species' }
                      ]
                    },
                    { id: 'convallaria', name: 'Lily of the Valley', scientificName: 'Convallaria', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'convallaria-majalis', name: 'Lily of the Valley', scientificName: 'Convallaria majalis', rank: 'species' }
                      ]
                    },
                    { id: 'scilla', name: 'Squills', scientificName: 'Scilla', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'scilla-siberica', name: 'Siberian Squill', scientificName: 'Scilla siberica', rank: 'species' }
                      ]
                    },
                    { id: 'dracaena', name: 'Dragon Trees', scientificName: 'Dracaena', rank: 'genus', speciesCount: 120,
                      children: [
                        { id: 'dracaena-draco', name: 'Dragon Tree', scientificName: 'Dracaena draco', rank: 'species' },
                        { id: 'dracaena-marginata', name: 'Madagascar Dragon Tree', scientificName: 'Dracaena marginata', rank: 'species' },
                        { id: 'dracaena-fragrans', name: 'Corn Plant', scientificName: 'Dracaena fragrans', rank: 'species' },
                        { id: 'dracaena-trifasciata', name: 'Snake Plant', scientificName: 'Dracaena trifasciata', rank: 'species' }
                      ]
                    },
                    { id: 'cordyline', name: 'Cabbage Trees', scientificName: 'Cordyline', rank: 'genus', speciesCount: 26,
                      children: [
                        { id: 'cordyline-australis', name: 'Cabbage Tree', scientificName: 'Cordyline australis', rank: 'species' },
                        { id: 'cordyline-fruticosa', name: 'Ti Plant', scientificName: 'Cordyline fruticosa', rank: 'species' }
                      ]
                    },
                    { id: 'ruscus', name: 'Butcher\'s Brooms', scientificName: 'Ruscus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'ruscus-aculeatus', name: 'Butcher\'s Broom', scientificName: 'Ruscus aculeatus', rank: 'species' }
                      ]
                    },
                    { id: 'polygonatum', name: 'Solomon\'s Seals', scientificName: 'Polygonatum', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'polygonatum-multiflorum', name: 'Solomon\'s Seal', scientificName: 'Polygonatum multiflorum', rank: 'species' }
                      ]
                    },
                    { id: 'ornithogalum', name: 'Star of Bethlehem', scientificName: 'Ornithogalum', rank: 'genus', speciesCount: 180,
                      children: [
                        { id: 'ornithogalum-umbellatum', name: 'Star of Bethlehem', scientificName: 'Ornithogalum umbellatum', rank: 'species' }
                      ]
                    },
                    { id: 'chlorophytum', name: 'Spider Plants', scientificName: 'Chlorophytum', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'chlorophytum-comosum', name: 'Spider Plant', scientificName: 'Chlorophytum comosum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'iridaceae', name: 'Iris Family', scientificName: 'Iridaceae', rank: 'family', speciesCount: 2200,
                  children: [
                    { id: 'iris', name: 'Irises', scientificName: 'Iris', rank: 'genus', speciesCount: 310,
                      children: [
                        { id: 'iris-germanica', name: 'German Iris', scientificName: 'Iris germanica', rank: 'species' },
                        { id: 'iris-pseudacorus', name: 'Yellow Flag Iris', scientificName: 'Iris pseudacorus', rank: 'species' },
                        { id: 'iris-sibirica', name: 'Siberian Iris', scientificName: 'Iris sibirica', rank: 'species' },
                        { id: 'iris-ensata', name: 'Japanese Iris', scientificName: 'Iris ensata', rank: 'species' },
                        { id: 'iris-versicolor', name: 'Blue Flag Iris', scientificName: 'Iris versicolor', rank: 'species' }
                      ]
                    },
                    { id: 'crocus', name: 'Crocuses', scientificName: 'Crocus', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'crocus-sativus', name: 'Saffron Crocus', scientificName: 'Crocus sativus', rank: 'species' },
                        { id: 'crocus-vernus', name: 'Spring Crocus', scientificName: 'Crocus vernus', rank: 'species' },
                        { id: 'crocus-chrysanthus', name: 'Golden Crocus', scientificName: 'Crocus chrysanthus', rank: 'species' }
                      ]
                    },
                    { id: 'gladiolus', name: 'Gladioli', scientificName: 'Gladiolus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'gladiolus-communis', name: 'Common Gladiolus', scientificName: 'Gladiolus communis', rank: 'species' },
                        { id: 'gladiolus-murielae', name: 'Abyssinian Gladiolus', scientificName: 'Gladiolus murielae', rank: 'species' }
                      ]
                    },
                    { id: 'freesia', name: 'Freesias', scientificName: 'Freesia', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'freesia-refracta', name: 'Freesia', scientificName: 'Freesia refracta', rank: 'species' }
                      ]
                    },
                    { id: 'crocosmia', name: 'Crocosmias', scientificName: 'Crocosmia', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'crocosmia-crocosmiiflora', name: 'Montbretia', scientificName: 'Crocosmia × crocosmiiflora', rank: 'species' }
                      ]
                    },
                    { id: 'ixia', name: 'Corn Lilies', scientificName: 'Ixia', rank: 'genus', speciesCount: 66,
                      children: [
                        { id: 'ixia-maculata', name: 'Spotted Ixia', scientificName: 'Ixia maculata', rank: 'species' }
                      ]
                    },
                    { id: 'sisyrinchium', name: 'Blue-eyed Grasses', scientificName: 'Sisyrinchium', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'sisyrinchium-angustifolium', name: 'Narrow-leaved Blue-eyed Grass', scientificName: 'Sisyrinchium angustifolium', rank: 'species' }
                      ]
                    },
                    { id: 'dietes', name: 'Wild Irises', scientificName: 'Dietes', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'dietes-grandiflora', name: 'Large Wild Iris', scientificName: 'Dietes grandiflora', rank: 'species' }
                      ]
                    },
                    { id: 'tigridia', name: 'Tiger Flowers', scientificName: 'Tigridia', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'tigridia-pavonia', name: 'Peacock Flower', scientificName: 'Tigridia pavonia', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'xanthorrhoeaceae', name: 'Grasstree Family', scientificName: 'Xanthorrhoeaceae', rank: 'family', speciesCount: 900,
                  children: [
                    { id: 'aloe', name: 'Aloes', scientificName: 'Aloe', rank: 'genus', speciesCount: 550,
                      children: [
                        { id: 'aloe-vera', name: 'Aloe Vera', scientificName: 'Aloe vera', rank: 'species' },
                        { id: 'aloe-arborescens', name: 'Candelabra Aloe', scientificName: 'Aloe arborescens', rank: 'species' },
                        { id: 'aloe-ferox', name: 'Cape Aloe', scientificName: 'Aloe ferox', rank: 'species' }
                      ]
                    },
                    { id: 'haworthia', name: 'Haworthias', scientificName: 'Haworthia', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'haworthia-fasciata', name: 'Zebra Haworthia', scientificName: 'Haworthia fasciata', rank: 'species' }
                      ]
                    },
                    { id: 'gasteria', name: 'Gasterias', scientificName: 'Gasteria', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'gasteria-carinata', name: 'Ox Tongue', scientificName: 'Gasteria carinata', rank: 'species' }
                      ]
                    },
                    { id: 'kniphofia', name: 'Red Hot Pokers', scientificName: 'Kniphofia', rank: 'genus', speciesCount: 73,
                      children: [
                        { id: 'kniphofia-uvaria', name: 'Red Hot Poker', scientificName: 'Kniphofia uvaria', rank: 'species' }
                      ]
                    },
                    { id: 'xanthorrhoea', name: 'Grasstrees', scientificName: 'Xanthorrhoea', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'xanthorrhoea-australis', name: 'Austral Grasstree', scientificName: 'Xanthorrhoea australis', rank: 'species' }
                      ]
                    },
                    { id: 'hemerocallis', name: 'Daylilies', scientificName: 'Hemerocallis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'hemerocallis-fulva', name: 'Tawny Daylily', scientificName: 'Hemerocallis fulva', rank: 'species' },
                        { id: 'hemerocallis-lilioasphodelus', name: 'Yellow Daylily', scientificName: 'Hemerocallis lilioasphodelus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'liliales', name: 'Lilies', scientificName: 'Liliales', rank: 'order', speciesCount: 1500,
              children: [
                { id: 'liliaceae', name: 'Lily Family', scientificName: 'Liliaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'lilium', name: 'True Lilies', scientificName: 'Lilium', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'lilium-candidum', name: 'Madonna Lily', scientificName: 'Lilium candidum', rank: 'species' },
                        { id: 'lilium-longiflorum', name: 'Easter Lily', scientificName: 'Lilium longiflorum', rank: 'species' },
                        { id: 'lilium-regale', name: 'Regal Lily', scientificName: 'Lilium regale', rank: 'species' },
                        { id: 'lilium-auratum', name: 'Golden-rayed Lily', scientificName: 'Lilium auratum', rank: 'species' },
                        { id: 'lilium-tigrinum', name: 'Tiger Lily', scientificName: 'Lilium tigrinum', rank: 'species' }
                      ]
                    },
                    { id: 'tulipa', name: 'Tulips', scientificName: 'Tulipa', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'tulipa-gesneriana', name: 'Garden Tulip', scientificName: 'Tulipa gesneriana', rank: 'species' },
                        { id: 'tulipa-sylvestris', name: 'Wild Tulip', scientificName: 'Tulipa sylvestris', rank: 'species' },
                        { id: 'tulipa-kaufmanniana', name: 'Water Lily Tulip', scientificName: 'Tulipa kaufmanniana', rank: 'species' }
                      ]
                    },
                    { id: 'fritillaria', name: 'Fritillaries', scientificName: 'Fritillaria', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'fritillaria-imperialis', name: 'Crown Imperial', scientificName: 'Fritillaria imperialis', rank: 'species' },
                        { id: 'fritillaria-meleagris', name: 'Snake\'s Head Fritillary', scientificName: 'Fritillaria meleagris', rank: 'species' }
                      ]
                    },
                    { id: 'erythronium', name: 'Fawn Lilies', scientificName: 'Erythronium', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'erythronium-dens-canis', name: 'Dog\'s Tooth Violet', scientificName: 'Erythronium dens-canis', rank: 'species' }
                      ]
                    },
                    { id: 'gagea', name: 'Gageas', scientificName: 'Gagea', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'gagea-lutea', name: 'Yellow Star of Bethlehem', scientificName: 'Gagea lutea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'colchicaceae', name: 'Autumn Crocus Family', scientificName: 'Colchicaceae', rank: 'family', speciesCount: 245,
                  children: [
                    { id: 'colchicum', name: 'Autumn Crocuses', scientificName: 'Colchicum', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'colchicum-autumnale', name: 'Meadow Saffron', scientificName: 'Colchicum autumnale', rank: 'species' }
                      ]
                    },
                    { id: 'gloriosa', name: 'Flame Lilies', scientificName: 'Gloriosa', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'gloriosa-superba', name: 'Flame Lily', scientificName: 'Gloriosa superba', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'smilacaceae', name: 'Greenbrier Family', scientificName: 'Smilacaceae', rank: 'family', speciesCount: 315,
                  children: [
                    { id: 'smilax', name: 'Greenbriers', scientificName: 'Smilax', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'smilax-aspera', name: 'Rough Bindweed', scientificName: 'Smilax aspera', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'arecales', name: 'Palms', scientificName: 'Arecales', rank: 'order', speciesCount: 2600,
              children: [
                { id: 'arecaceae', name: 'Palm Family', scientificName: 'Arecaceae', rank: 'family', speciesCount: 2600,
                  children: [
                    { id: 'cocos', name: 'Coconut Palms', scientificName: 'Cocos', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'cocos-nucifera', name: 'Coconut Palm', scientificName: 'Cocos nucifera', rank: 'species' }
                      ]
                    },
                    { id: 'elaeis', name: 'Oil Palms', scientificName: 'Elaeis', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'elaeis-guineensis', name: 'African Oil Palm', scientificName: 'Elaeis guineensis', rank: 'species' }
                      ]
                    },
                    { id: 'phoenix', name: 'Date Palms', scientificName: 'Phoenix', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'phoenix-dactylifera', name: 'Date Palm', scientificName: 'Phoenix dactylifera', rank: 'species' },
                        { id: 'phoenix-canariensis', name: 'Canary Island Date Palm', scientificName: 'Phoenix canariensis', rank: 'species' },
                        { id: 'phoenix-roebelenii', name: 'Pygmy Date Palm', scientificName: 'Phoenix roebelenii', rank: 'species' }
                      ]
                    },
                    { id: 'roystonea', name: 'Royal Palms', scientificName: 'Roystonea', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'roystonea-regia', name: 'Cuban Royal Palm', scientificName: 'Roystonea regia', rank: 'species' }
                      ]
                    },
                    { id: 'washingtonia', name: 'Fan Palms', scientificName: 'Washingtonia', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'washingtonia-filifera', name: 'California Fan Palm', scientificName: 'Washingtonia filifera', rank: 'species' },
                        { id: 'washingtonia-robusta', name: 'Mexican Fan Palm', scientificName: 'Washingtonia robusta', rank: 'species' }
                      ]
                    },
                    { id: 'chamaerops', name: 'Mediterranean Fan Palms', scientificName: 'Chamaerops', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'chamaerops-humilis', name: 'European Fan Palm', scientificName: 'Chamaerops humilis', rank: 'species' }
                      ]
                    },
                    { id: 'trachycarpus', name: 'Windmill Palms', scientificName: 'Trachycarpus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'trachycarpus-fortunei', name: 'Windmill Palm', scientificName: 'Trachycarpus fortunei', rank: 'species' }
                      ]
                    },
                    { id: 'sabal', name: 'Palmetto Palms', scientificName: 'Sabal', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'sabal-palmetto', name: 'Cabbage Palm', scientificName: 'Sabal palmetto', rank: 'species' }
                      ]
                    },
                    { id: 'areca', name: 'Betel Palms', scientificName: 'Areca', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'areca-catechu', name: 'Betel Palm', scientificName: 'Areca catechu', rank: 'species' }
                      ]
                    },
                    { id: 'dypsis', name: 'Dypsis Palms', scientificName: 'Dypsis', rank: 'genus', speciesCount: 140,
                      children: [
                        { id: 'dypsis-lutescens', name: 'Areca Palm', scientificName: 'Dypsis lutescens', rank: 'species' }
                      ]
                    },
                    { id: 'caryota', name: 'Fishtail Palms', scientificName: 'Caryota', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'caryota-urens', name: 'Fishtail Palm', scientificName: 'Caryota urens', rank: 'species' }
                      ]
                    },
                    { id: 'livistona', name: 'Livistona Palms', scientificName: 'Livistona', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'livistona-chinensis', name: 'Chinese Fan Palm', scientificName: 'Livistona chinensis', rank: 'species' }
                      ]
                    },
                    { id: 'howea', name: 'Kentia Palms', scientificName: 'Howea', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'howea-forsteriana', name: 'Kentia Palm', scientificName: 'Howea forsteriana', rank: 'species' }
                      ]
                    },
                    { id: 'rhapis', name: 'Lady Palms', scientificName: 'Rhapis', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'rhapis-excelsa', name: 'Broadleaf Lady Palm', scientificName: 'Rhapis excelsa', rank: 'species' }
                      ]
                    },
                    { id: 'attalea', name: 'Attalea Palms', scientificName: 'Attalea', rank: 'genus', speciesCount: 67,
                      children: [
                        { id: 'attalea-speciosa', name: 'Babassu Palm', scientificName: 'Attalea speciosa', rank: 'species' }
                      ]
                    },
                    { id: 'borassus', name: 'Palmyra Palms', scientificName: 'Borassus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'borassus-flabellifer', name: 'Toddy Palm', scientificName: 'Borassus flabellifer', rank: 'species' }
                      ]
                    },
                    { id: 'mauritia', name: 'Moriche Palms', scientificName: 'Mauritia', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'mauritia-flexuosa', name: 'Moriche Palm', scientificName: 'Mauritia flexuosa', rank: 'species' }
                      ]
                    },
                    { id: 'euterpe', name: 'Acai Palms', scientificName: 'Euterpe', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'euterpe-oleracea', name: 'Acai Palm', scientificName: 'Euterpe oleracea', rank: 'species' }
                      ]
                    },
                    { id: 'bactris', name: 'Peach Palms', scientificName: 'Bactris', rank: 'genus', speciesCount: 240,
                      children: [
                        { id: 'bactris-gasipaes', name: 'Peach Palm', scientificName: 'Bactris gasipaes', rank: 'species' }
                      ]
                    },
                    { id: 'salacca', name: 'Snake Fruit Palms', scientificName: 'Salacca', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'salacca-zalacca', name: 'Salak Palm', scientificName: 'Salacca zalacca', rank: 'species' }
                      ]
                    },
                    { id: 'metroxylon', name: 'Sago Palms', scientificName: 'Metroxylon', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'metroxylon-sagu', name: 'True Sago Palm', scientificName: 'Metroxylon sagu', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'zingiberales', name: 'Gingers', scientificName: 'Zingiberales', rank: 'order', speciesCount: 2600,
              children: [
                { id: 'zingiberaceae', name: 'Ginger Family', scientificName: 'Zingiberaceae', rank: 'family', speciesCount: 1600,
                  children: [
                    { id: 'zingiber', name: 'Gingers', scientificName: 'Zingiber', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'zingiber-officinale', name: 'Ginger', scientificName: 'Zingiber officinale', rank: 'species' },
                        { id: 'zingiber-zerumbet', name: 'Shampoo Ginger', scientificName: 'Zingiber zerumbet', rank: 'species' }
                      ]
                    },
                    { id: 'curcuma', name: 'Turmeric', scientificName: 'Curcuma', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'curcuma-longa', name: 'Turmeric', scientificName: 'Curcuma longa', rank: 'species' },
                        { id: 'curcuma-zedoaria', name: 'White Turmeric', scientificName: 'Curcuma zedoaria', rank: 'species' }
                      ]
                    },
                    { id: 'elettaria', name: 'Cardamom', scientificName: 'Elettaria', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'elettaria-cardamomum', name: 'Green Cardamom', scientificName: 'Elettaria cardamomum', rank: 'species' }
                      ]
                    },
                    { id: 'amomum', name: 'Black Cardamom', scientificName: 'Amomum', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'amomum-subulatum', name: 'Black Cardamom', scientificName: 'Amomum subulatum', rank: 'species' }
                      ]
                    },
                    { id: 'alpinia', name: 'Galangals', scientificName: 'Alpinia', rank: 'genus', speciesCount: 230,
                      children: [
                        { id: 'alpinia-galanga', name: 'Galangal', scientificName: 'Alpinia galanga', rank: 'species' },
                        { id: 'alpinia-purpurata', name: 'Red Ginger', scientificName: 'Alpinia purpurata', rank: 'species' }
                      ]
                    },
                    { id: 'kaempferia', name: 'Peacock Gingers', scientificName: 'Kaempferia', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'kaempferia-galanga', name: 'Aromatic Ginger', scientificName: 'Kaempferia galanga', rank: 'species' }
                      ]
                    },
                    { id: 'hedychium', name: 'Ginger Lilies', scientificName: 'Hedychium', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'hedychium-coronarium', name: 'White Ginger Lily', scientificName: 'Hedychium coronarium', rank: 'species' },
                        { id: 'hedychium-gardnerianum', name: 'Kahili Ginger', scientificName: 'Hedychium gardnerianum', rank: 'species' }
                      ]
                    },
                    { id: 'aframomum', name: 'Grains of Paradise', scientificName: 'Aframomum', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'aframomum-melegueta', name: 'Grains of Paradise', scientificName: 'Aframomum melegueta', rank: 'species' }
                      ]
                    },
                    { id: 'etlingera', name: 'Torch Gingers', scientificName: 'Etlingera', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'etlingera-elatior', name: 'Torch Ginger', scientificName: 'Etlingera elatior', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'strelitziaceae', name: 'Bird of Paradise Family', scientificName: 'Strelitziaceae', rank: 'family', speciesCount: 7,
                  children: [
                    { id: 'strelitzia', name: 'Bird of Paradise', scientificName: 'Strelitzia', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'strelitzia-reginae', name: 'Bird of Paradise', scientificName: 'Strelitzia reginae', rank: 'species' },
                        { id: 'strelitzia-nicolai', name: 'Giant White Bird of Paradise', scientificName: 'Strelitzia nicolai', rank: 'species' }
                      ]
                    },
                    { id: 'ravenala', name: 'Traveller\'s Palms', scientificName: 'Ravenala', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ravenala-madagascariensis', name: 'Traveller\'s Palm', scientificName: 'Ravenala madagascariensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'heliconiaceae', name: 'Heliconia Family', scientificName: 'Heliconiaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'heliconia', name: 'Heliconias', scientificName: 'Heliconia', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'heliconia-rostrata', name: 'Lobster Claw', scientificName: 'Heliconia rostrata', rank: 'species' },
                        { id: 'heliconia-bihai', name: 'Red Palulu', scientificName: 'Heliconia bihai', rank: 'species' },
                        { id: 'heliconia-psittacorum', name: 'Parrot\'s Beak', scientificName: 'Heliconia psittacorum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cannaceae', name: 'Canna Family', scientificName: 'Cannaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'canna', name: 'Cannas', scientificName: 'Canna', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'canna-indica', name: 'Indian Shot', scientificName: 'Canna indica', rank: 'species' },
                        { id: 'canna-generalis', name: 'Garden Canna', scientificName: 'Canna × generalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'marantaceae', name: 'Prayer Plant Family', scientificName: 'Marantaceae', rank: 'family', speciesCount: 530,
                  children: [
                    { id: 'maranta', name: 'Prayer Plants', scientificName: 'Maranta', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'maranta-leuconeura', name: 'Prayer Plant', scientificName: 'Maranta leuconeura', rank: 'species' },
                        { id: 'maranta-arundinacea', name: 'Arrowroot', scientificName: 'Maranta arundinacea', rank: 'species' }
                      ]
                    },
                    { id: 'calathea', name: 'Calatheas', scientificName: 'Calathea', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'calathea-ornata', name: 'Pinstripe Calathea', scientificName: 'Calathea ornata', rank: 'species' },
                        { id: 'calathea-zebrina', name: 'Zebra Plant', scientificName: 'Calathea zebrina', rank: 'species' }
                      ]
                    },
                    { id: 'stromanthe', name: 'Stromanthes', scientificName: 'Stromanthe', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'stromanthe-sanguinea', name: 'Stromanthe', scientificName: 'Stromanthe sanguinea', rank: 'species' }
                      ]
                    },
                    { id: 'ctenanthe', name: 'Never-never Plants', scientificName: 'Ctenanthe', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'ctenanthe-burle-marxii', name: 'Fishbone Prayer Plant', scientificName: 'Ctenanthe burle-marxii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'costaceae', name: 'Costus Family', scientificName: 'Costaceae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'costus', name: 'Spiral Gingers', scientificName: 'Costus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'costus-speciosus', name: 'Crape Ginger', scientificName: 'Costus speciosus', rank: 'species' },
                        { id: 'costus-woodsonii', name: 'Red Button Ginger', scientificName: 'Costus woodsonii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'alismatales', name: 'Water Plantains', scientificName: 'Alismatales', rank: 'order', speciesCount: 4500,
              children: [
                { id: 'araceae', name: 'Arum Family', scientificName: 'Araceae', rank: 'family', speciesCount: 3700,
                  children: [
                    { id: 'philodendron', name: 'Philodendrons', scientificName: 'Philodendron', rank: 'genus', speciesCount: 489,
                      children: [
                        { id: 'philodendron-scandens', name: 'Heartleaf Philodendron', scientificName: 'Philodendron scandens', rank: 'species' },
                        { id: 'philodendron-bipinnatifidum', name: 'Split-leaf Philodendron', scientificName: 'Philodendron bipinnatifidum', rank: 'species' }
                      ]
                    },
                    { id: 'monstera', name: 'Monsteras', scientificName: 'Monstera', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'monstera-deliciosa', name: 'Swiss Cheese Plant', scientificName: 'Monstera deliciosa', rank: 'species' },
                        { id: 'monstera-adansonii', name: 'Adanson\'s Monstera', scientificName: 'Monstera adansonii', rank: 'species' }
                      ]
                    },
                    { id: 'alocasia', name: 'Elephant Ears', scientificName: 'Alocasia', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'alocasia-macrorrhizos', name: 'Giant Taro', scientificName: 'Alocasia macrorrhizos', rank: 'species' },
                        { id: 'alocasia-amazonica', name: 'Amazonian Elephant Ear', scientificName: 'Alocasia amazonica', rank: 'species' }
                      ]
                    },
                    { id: 'colocasia', name: 'Taro', scientificName: 'Colocasia', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'colocasia-esculenta', name: 'Taro', scientificName: 'Colocasia esculenta', rank: 'species' }
                      ]
                    },
                    { id: 'anthurium', name: 'Anthuriums', scientificName: 'Anthurium', rank: 'genus', speciesCount: 1000,
                      children: [
                        { id: 'anthurium-andraeanum', name: 'Flamingo Flower', scientificName: 'Anthurium andraeanum', rank: 'species' }
                      ]
                    },
                    { id: 'spathiphyllum', name: 'Peace Lilies', scientificName: 'Spathiphyllum', rank: 'genus', speciesCount: 47,
                      children: [
                        { id: 'spathiphyllum-wallisii', name: 'Peace Lily', scientificName: 'Spathiphyllum wallisii', rank: 'species' }
                      ]
                    },
                    { id: 'zantedeschia', name: 'Calla Lilies', scientificName: 'Zantedeschia', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'zantedeschia-aethiopica', name: 'White Calla Lily', scientificName: 'Zantedeschia aethiopica', rank: 'species' }
                      ]
                    },
                    { id: 'dieffenbachia', name: 'Dumb Canes', scientificName: 'Dieffenbachia', rank: 'genus', speciesCount: 56,
                      children: [
                        { id: 'dieffenbachia-seguine', name: 'Dumb Cane', scientificName: 'Dieffenbachia seguine', rank: 'species' }
                      ]
                    },
                    { id: 'caladium', name: 'Caladiums', scientificName: 'Caladium', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'caladium-bicolor', name: 'Heart of Jesus', scientificName: 'Caladium bicolor', rank: 'species' }
                      ]
                    },
                    { id: 'aglaonema', name: 'Chinese Evergreens', scientificName: 'Aglaonema', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'aglaonema-commutatum', name: 'Chinese Evergreen', scientificName: 'Aglaonema commutatum', rank: 'species' }
                      ]
                    },
                    { id: 'epipremnum', name: 'Pothos', scientificName: 'Epipremnum', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'epipremnum-aureum', name: 'Golden Pothos', scientificName: 'Epipremnum aureum', rank: 'species' }
                      ]
                    },
                    { id: 'xanthosoma', name: 'Elephant Ears', scientificName: 'Xanthosoma', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'xanthosoma-sagittifolium', name: 'Arrowleaf Elephant Ear', scientificName: 'Xanthosoma sagittifolium', rank: 'species' }
                      ]
                    },
                    { id: 'amorphophallus', name: 'Corpse Flowers', scientificName: 'Amorphophallus', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'amorphophallus-titanum', name: 'Titan Arum', scientificName: 'Amorphophallus titanum', rank: 'species' },
                        { id: 'amorphophallus-konjac', name: 'Konjac', scientificName: 'Amorphophallus konjac', rank: 'species' }
                      ]
                    },
                    { id: 'arum', name: 'Arums', scientificName: 'Arum', rank: 'genus', speciesCount: 32,
                      children: [
                        { id: 'arum-maculatum', name: 'Lords-and-Ladies', scientificName: 'Arum maculatum', rank: 'species' }
                      ]
                    },
                    { id: 'symplocarpus', name: 'Skunk Cabbages', scientificName: 'Symplocarpus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'symplocarpus-foetidus', name: 'Eastern Skunk Cabbage', scientificName: 'Symplocarpus foetidus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hydrocharitaceae', name: 'Tape Grass Family', scientificName: 'Hydrocharitaceae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'elodea', name: 'Waterweeds', scientificName: 'Elodea', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'elodea-canadensis', name: 'Canadian Waterweed', scientificName: 'Elodea canadensis', rank: 'species' }
                      ]
                    },
                    { id: 'vallisneria', name: 'Tape Grasses', scientificName: 'Vallisneria', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'vallisneria-spiralis', name: 'Eelgrass', scientificName: 'Vallisneria spiralis', rank: 'species' }
                      ]
                    },
                    { id: 'egeria', name: 'Egeria', scientificName: 'Egeria', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'egeria-densa', name: 'Brazilian Waterweed', scientificName: 'Egeria densa', rank: 'species' }
                      ]
                    },
                    { id: 'hydrilla', name: 'Hydrilla', scientificName: 'Hydrilla', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'hydrilla-verticillata', name: 'Hydrilla', scientificName: 'Hydrilla verticillata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'potamogetonaceae', name: 'Pondweed Family', scientificName: 'Potamogetonaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'potamogeton', name: 'Pondweeds', scientificName: 'Potamogeton', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'potamogeton-natans', name: 'Floating Pondweed', scientificName: 'Potamogeton natans', rank: 'species' },
                        { id: 'potamogeton-crispus', name: 'Curly Pondweed', scientificName: 'Potamogeton crispus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'araceae-lemnaceae', name: 'Duckweed Subfamily', scientificName: 'Lemnoideae', rank: 'family', speciesCount: 37,
                  children: [
                    { id: 'lemna', name: 'Duckweeds', scientificName: 'Lemna', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'lemna-minor', name: 'Common Duckweed', scientificName: 'Lemna minor', rank: 'species' },
                        { id: 'lemna-gibba', name: 'Fat Duckweed', scientificName: 'Lemna gibba', rank: 'species' }
                      ]
                    },
                    { id: 'spirodela', name: 'Greater Duckweeds', scientificName: 'Spirodela', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'spirodela-polyrhiza', name: 'Greater Duckweed', scientificName: 'Spirodela polyrhiza', rank: 'species' }
                      ]
                    },
                    { id: 'wolffia', name: 'Watermeal', scientificName: 'Wolffia', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'wolffia-globosa', name: 'Asian Watermeal', scientificName: 'Wolffia globosa', rank: 'species' },
                        { id: 'wolffia-arrhiza', name: 'Spotless Watermeal', scientificName: 'Wolffia arrhiza', rank: 'species' }
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
      id: 'gymnosperms',
      name: 'Conifers & Allies',
      scientificName: 'Gymnospermae',
      rank: 'phylum',
      speciesCount: 1000,
      children: [
        { id: 'pinopsida', name: 'Conifers', scientificName: 'Pinopsida', rank: 'class', speciesCount: 630,
          children: [
            { id: 'pinales', name: 'Pines', scientificName: 'Pinales', rank: 'order', speciesCount: 630,
              children: [
                { id: 'pinaceae', name: 'Pine Family', scientificName: 'Pinaceae', rank: 'family', speciesCount: 230,
                  children: [
                    { id: 'pinus', name: 'Pines', scientificName: 'Pinus', rank: 'genus', speciesCount: 126,
                      children: [
                        { id: 'pinus-sylvestris', name: 'Scots Pine', scientificName: 'Pinus sylvestris', rank: 'species' },
                        { id: 'pinus-ponderosa', name: 'Ponderosa Pine', scientificName: 'Pinus ponderosa', rank: 'species' },
                        { id: 'pinus-longaeva', name: 'Bristlecone Pine', scientificName: 'Pinus longaeva', rank: 'species' }
                      ]
                    },
                    { id: 'picea', name: 'Spruces', scientificName: 'Picea', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'picea-abies', name: 'Norway Spruce', scientificName: 'Picea abies', rank: 'species' }
                      ]
                    },
                    { id: 'abies', name: 'Firs', scientificName: 'Abies', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'abies-alba', name: 'European Silver Fir', scientificName: 'Abies alba', rank: 'species' }
                      ]
                    },
                    { id: 'cedrus', name: 'Cedars', scientificName: 'Cedrus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'cedrus-libani', name: 'Cedar of Lebanon', scientificName: 'Cedrus libani', rank: 'species' }
                      ]
                    },
                    { id: 'larix', name: 'Larches', scientificName: 'Larix', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'larix-decidua', name: 'European Larch', scientificName: 'Larix decidua', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cupressaceae', name: 'Cypress Family', scientificName: 'Cupressaceae', rank: 'family', speciesCount: 140,
                  children: [
                    { id: 'sequoia', name: 'Redwoods', scientificName: 'Sequoia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sequoia-sempervirens', name: 'Coast Redwood', scientificName: 'Sequoia sempervirens', rank: 'species' }
                      ]
                    },
                    { id: 'sequoiadendron', name: 'Giant Sequoias', scientificName: 'Sequoiadendron', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sequoiadendron-giganteum', name: 'Giant Sequoia', scientificName: 'Sequoiadendron giganteum', rank: 'species' }
                      ]
                    },
                    { id: 'metasequoia', name: 'Dawn Redwoods', scientificName: 'Metasequoia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'metasequoia-glyptostroboides', name: 'Dawn Redwood', scientificName: 'Metasequoia glyptostroboides', rank: 'species' }
                      ]
                    },
                    { id: 'cupressus', name: 'Cypresses', scientificName: 'Cupressus', rank: 'genus', speciesCount: 25 },
                    { id: 'juniperus', name: 'Junipers', scientificName: 'Juniperus', rank: 'genus', speciesCount: 70 },
                    { id: 'thuja', name: 'Arborvitae', scientificName: 'Thuja', rank: 'genus', speciesCount: 5 },
                    { id: 'taxodium', name: 'Bald Cypresses', scientificName: 'Taxodium', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'taxodium-distichum', name: 'Bald Cypress', scientificName: 'Taxodium distichum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'taxaceae', name: 'Yew Family', scientificName: 'Taxaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'taxus', name: 'Yews', scientificName: 'Taxus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'taxus-baccata', name: 'English Yew', scientificName: 'Taxus baccata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'araucariaceae', name: 'Araucaria Family', scientificName: 'Araucariaceae', rank: 'family', speciesCount: 41,
                  children: [
                    { id: 'araucaria', name: 'Araucarias', scientificName: 'Araucaria', rank: 'genus', speciesCount: 19,
                      children: [
                        { id: 'araucaria-araucana', name: 'Monkey Puzzle Tree', scientificName: 'Araucaria araucana', rank: 'species' }
                      ]
                    },
                    { id: 'wollemia', name: 'Wollemi Pines', scientificName: 'Wollemia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'wollemia-nobilis', name: 'Wollemi Pine', scientificName: 'Wollemia nobilis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'cycadopsida', name: 'Cycads', scientificName: 'Cycadopsida', rank: 'class', speciesCount: 300,
          children: [
            { id: 'cycadales', name: 'Cycads', scientificName: 'Cycadales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'cycadaceae', name: 'Cycad Family', scientificName: 'Cycadaceae', rank: 'family', speciesCount: 108,
                  children: [
                    { id: 'cycas', name: 'Cycads', scientificName: 'Cycas', rank: 'genus', speciesCount: 108,
                      children: [
                        { id: 'cycas-revoluta', name: 'Sago Palm', scientificName: 'Cycas revoluta', rank: 'species' },
                        { id: 'cycas-circinalis', name: 'Queen Sago', scientificName: 'Cycas circinalis', rank: 'species' },
                        { id: 'cycas-rumphii', name: 'Queen Cycad', scientificName: 'Cycas rumphii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'zamiaceae', name: 'Zamia Family', scientificName: 'Zamiaceae', rank: 'family', speciesCount: 190,
                  children: [
                    { id: 'zamia', name: 'Zamias', scientificName: 'Zamia', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'zamia-furfuracea', name: 'Cardboard Palm', scientificName: 'Zamia furfuracea', rank: 'species' },
                        { id: 'zamia-integrifolia', name: 'Coontie', scientificName: 'Zamia integrifolia', rank: 'species' }
                      ]
                    },
                    { id: 'encephalartos', name: 'Bread Trees', scientificName: 'Encephalartos', rank: 'genus', speciesCount: 68,
                      children: [
                        { id: 'encephalartos-woodii', name: 'Wood\'s Cycad', scientificName: 'Encephalartos woodii', rank: 'species' },
                        { id: 'encephalartos-longifolius', name: 'Breadtree', scientificName: 'Encephalartos longifolius', rank: 'species' }
                      ]
                    },
                    { id: 'macrozamia', name: 'Macrozamias', scientificName: 'Macrozamia', rank: 'genus', speciesCount: 41,
                      children: [
                        { id: 'macrozamia-riedlei', name: 'Western Australian Zamia', scientificName: 'Macrozamia riedlei', rank: 'species' }
                      ]
                    },
                    { id: 'dioon', name: 'Dioons', scientificName: 'Dioon', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'dioon-edule', name: 'Chestnut Dioon', scientificName: 'Dioon edule', rank: 'species' },
                        { id: 'dioon-spinulosum', name: 'Giant Dioon', scientificName: 'Dioon spinulosum', rank: 'species' }
                      ]
                    },
                    { id: 'ceratozamia', name: 'Horncones', scientificName: 'Ceratozamia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'ceratozamia-mexicana', name: 'Mexican Horncone', scientificName: 'Ceratozamia mexicana', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'stangeriaceae', name: 'Stangeria Family', scientificName: 'Stangeriaceae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'stangeria', name: 'Stangerias', scientificName: 'Stangeria', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'stangeria-eriopus', name: 'Natal Grass Cycad', scientificName: 'Stangeria eriopus', rank: 'species' }
                      ]
                    },
                    { id: 'bowenia', name: 'Bowenias', scientificName: 'Bowenia', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'bowenia-spectabilis', name: 'Byfield Fern', scientificName: 'Bowenia spectabilis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'ginkgopsida', name: 'Ginkgo', scientificName: 'Ginkgopsida', rank: 'class', speciesCount: 1,
          children: [
            { id: 'ginkgoales', name: 'Ginkgos', scientificName: 'Ginkgoales', rank: 'order', speciesCount: 1,
              children: [
                { id: 'ginkgoaceae', name: 'Ginkgo Family', scientificName: 'Ginkgoaceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'ginkgo', name: 'Ginkgo', scientificName: 'Ginkgo', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ginkgo-biloba', name: 'Ginkgo', scientificName: 'Ginkgo biloba', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'gnetopsida', name: 'Gnetophytes', scientificName: 'Gnetopsida', rank: 'class', speciesCount: 90,
          children: [
            { id: 'gnetales', name: 'Gnetales', scientificName: 'Gnetales', rank: 'order', speciesCount: 35,
              children: [
                { id: 'gnetaceae', name: 'Gnetum Family', scientificName: 'Gnetaceae', rank: 'family', speciesCount: 35,
                  children: [
                    { id: 'gnetum', name: 'Gnetums', scientificName: 'Gnetum', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'gnetum-gnemon', name: 'Joint Fir', scientificName: 'Gnetum gnemon', rank: 'species' },
                        { id: 'gnetum-africanum', name: 'African Jointfir', scientificName: 'Gnetum africanum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'ephedrales', name: 'Mormon Teas', scientificName: 'Ephedrales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'ephedraceae', name: 'Ephedra Family', scientificName: 'Ephedraceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'ephedra', name: 'Mormon Teas', scientificName: 'Ephedra', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'ephedra-sinica', name: 'Chinese Ephedra', scientificName: 'Ephedra sinica', rank: 'species' },
                        { id: 'ephedra-viridis', name: 'Green Mormon Tea', scientificName: 'Ephedra viridis', rank: 'species' },
                        { id: 'ephedra-nevadensis', name: 'Nevada Mormon Tea', scientificName: 'Ephedra nevadensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'welwitschiales', name: 'Welwitschiales', scientificName: 'Welwitschiales', rank: 'order', speciesCount: 1,
              children: [
                { id: 'welwitschiaceae', name: 'Welwitschia Family', scientificName: 'Welwitschiaceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'welwitschia', name: 'Welwitschia', scientificName: 'Welwitschia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'welwitschia-mirabilis', name: 'Welwitschia', scientificName: 'Welwitschia mirabilis', rank: 'species' }
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
      id: 'pteridophytes',
      name: 'Ferns & Horsetails',
      scientificName: 'Pteridophyta',
      rank: 'phylum',
      speciesCount: 12000,
      children: [
        { id: 'polypodiopsida', name: 'Ferns', scientificName: 'Polypodiopsida', rank: 'class', speciesCount: 10500,
          children: [
            { id: 'polypodiales', name: 'Polypod Ferns', scientificName: 'Polypodiales', rank: 'order', speciesCount: 8000,
              children: [
                { id: 'dryopteridaceae', name: 'Wood Ferns', scientificName: 'Dryopteridaceae', rank: 'family', speciesCount: 1700,
                  children: [
                    { id: 'dryopteris', name: 'Wood Ferns', scientificName: 'Dryopteris', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'dryopteris-filix-mas', name: 'Male Fern', scientificName: 'Dryopteris filix-mas', rank: 'species' },
                        { id: 'dryopteris-marginalis', name: 'Marginal Wood Fern', scientificName: 'Dryopteris marginalis', rank: 'species' }
                      ]
                    },
                    { id: 'polystichum', name: 'Holly Ferns', scientificName: 'Polystichum', rank: 'genus', speciesCount: 260,
                      children: [
                        { id: 'polystichum-acrostichoides', name: 'Christmas Fern', scientificName: 'Polystichum acrostichoides', rank: 'species' },
                        { id: 'polystichum-munitum', name: 'Western Sword Fern', scientificName: 'Polystichum munitum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'polypodiaceae', name: 'Polypody Ferns', scientificName: 'Polypodiaceae', rank: 'family', speciesCount: 1650,
                  children: [
                    { id: 'polypodium', name: 'Polypodies', scientificName: 'Polypodium', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'polypodium-vulgare', name: 'Common Polypody', scientificName: 'Polypodium vulgare', rank: 'species' }
                      ]
                    },
                    { id: 'platycerium', name: 'Staghorn Ferns', scientificName: 'Platycerium', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'platycerium-bifurcatum', name: 'Elkhorn Fern', scientificName: 'Platycerium bifurcatum', rank: 'species' },
                        { id: 'platycerium-superbum', name: 'Staghorn Fern', scientificName: 'Platycerium superbum', rank: 'species' }
                      ]
                    },
                    { id: 'davallia', name: 'Rabbit\'s Foot Ferns', scientificName: 'Davallia', rank: 'genus', speciesCount: 65,
                      children: [
                        { id: 'davallia-fejeensis', name: 'Rabbit\'s Foot Fern', scientificName: 'Davallia fejeensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pteridaceae', name: 'Maidenhair Ferns', scientificName: 'Pteridaceae', rank: 'family', speciesCount: 1150,
                  children: [
                    { id: 'adiantum', name: 'Maidenhair Ferns', scientificName: 'Adiantum', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'adiantum-capillus-veneris', name: 'Southern Maidenhair Fern', scientificName: 'Adiantum capillus-veneris', rank: 'species' },
                        { id: 'adiantum-pedatum', name: 'Northern Maidenhair Fern', scientificName: 'Adiantum pedatum', rank: 'species' },
                        { id: 'adiantum-raddianum', name: 'Delta Maidenhair', scientificName: 'Adiantum raddianum', rank: 'species' }
                      ]
                    },
                    { id: 'pteris', name: 'Brake Ferns', scientificName: 'Pteris', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'pteris-vittata', name: 'Chinese Ladder Brake', scientificName: 'Pteris vittata', rank: 'species' },
                        { id: 'pteris-cretica', name: 'Cretan Brake', scientificName: 'Pteris cretica', rank: 'species' }
                      ]
                    },
                    { id: 'cheilanthes', name: 'Lip Ferns', scientificName: 'Cheilanthes', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'cheilanthes-lanosa', name: 'Hairy Lip Fern', scientificName: 'Cheilanthes lanosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'aspleniaceae', name: 'Spleenworts', scientificName: 'Aspleniaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'asplenium', name: 'Spleenworts', scientificName: 'Asplenium', rank: 'genus', speciesCount: 700,
                      children: [
                        { id: 'asplenium-nidus', name: 'Bird\'s Nest Fern', scientificName: 'Asplenium nidus', rank: 'species' },
                        { id: 'asplenium-scolopendrium', name: 'Hart\'s Tongue Fern', scientificName: 'Asplenium scolopendrium', rank: 'species' },
                        { id: 'asplenium-trichomanes', name: 'Maidenhair Spleenwort', scientificName: 'Asplenium trichomanes', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'blechnaceae', name: 'Chain Ferns', scientificName: 'Blechnaceae', rank: 'family', speciesCount: 250,
                  children: [
                    { id: 'blechnum', name: 'Hard Ferns', scientificName: 'Blechnum', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'blechnum-spicant', name: 'Hard Fern', scientificName: 'Blechnum spicant', rank: 'species' }
                      ]
                    },
                    { id: 'woodwardia', name: 'Chain Ferns', scientificName: 'Woodwardia', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'woodwardia-fimbriata', name: 'Giant Chain Fern', scientificName: 'Woodwardia fimbriata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'athyriaceae', name: 'Lady Ferns', scientificName: 'Athyriaceae', rank: 'family', speciesCount: 650,
                  children: [
                    { id: 'athyrium', name: 'Lady Ferns', scientificName: 'Athyrium', rank: 'genus', speciesCount: 230,
                      children: [
                        { id: 'athyrium-filix-femina', name: 'Lady Fern', scientificName: 'Athyrium filix-femina', rank: 'species' },
                        { id: 'athyrium-niponicum', name: 'Japanese Painted Fern', scientificName: 'Athyrium niponicum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'thelypteridaceae', name: 'Marsh Ferns', scientificName: 'Thelypteridaceae', rank: 'family', speciesCount: 950,
                  children: [
                    { id: 'thelypteris', name: 'Marsh Ferns', scientificName: 'Thelypteris', rank: 'genus', speciesCount: 900,
                      children: [
                        { id: 'thelypteris-palustris', name: 'Marsh Fern', scientificName: 'Thelypteris palustris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nephrolepidaceae', name: 'Sword Ferns', scientificName: 'Nephrolepidaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'nephrolepis', name: 'Sword Ferns', scientificName: 'Nephrolepis', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'nephrolepis-exaltata', name: 'Boston Fern', scientificName: 'Nephrolepis exaltata', rank: 'species' },
                        { id: 'nephrolepis-cordifolia', name: 'Tuberous Sword Fern', scientificName: 'Nephrolepis cordifolia', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'cyatheales', name: 'Tree Ferns', scientificName: 'Cyatheales', rank: 'order', speciesCount: 700,
              children: [
                { id: 'cyatheaceae', name: 'Scaly Tree Ferns', scientificName: 'Cyatheaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'cyathea', name: 'Tree Ferns', scientificName: 'Cyathea', rank: 'genus', speciesCount: 470,
                      children: [
                        { id: 'cyathea-cooperi', name: 'Australian Tree Fern', scientificName: 'Cyathea cooperi', rank: 'species' },
                        { id: 'cyathea-medullaris', name: 'Black Tree Fern', scientificName: 'Cyathea medullaris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dicksoniaceae', name: 'Dicksonia Tree Ferns', scientificName: 'Dicksoniaceae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'dicksonia', name: 'Dicksonias', scientificName: 'Dicksonia', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'dicksonia-antarctica', name: 'Soft Tree Fern', scientificName: 'Dicksonia antarctica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'osmundales', name: 'Royal Ferns', scientificName: 'Osmundales', rank: 'order', speciesCount: 25,
              children: [
                { id: 'osmundaceae', name: 'Royal Fern Family', scientificName: 'Osmundaceae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'osmunda', name: 'Royal Ferns', scientificName: 'Osmunda', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'osmunda-regalis', name: 'Royal Fern', scientificName: 'Osmunda regalis', rank: 'species' },
                        { id: 'osmunda-cinnamomea', name: 'Cinnamon Fern', scientificName: 'Osmundastrum cinnamomeum', rank: 'species' }
                      ]
                    },
                    { id: 'todea', name: 'Todeas', scientificName: 'Todea', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'todea-barbara', name: 'King Fern', scientificName: 'Todea barbara', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'salviniales', name: 'Floating Ferns', scientificName: 'Salviniales', rank: 'order', speciesCount: 80,
              children: [
                { id: 'salviniaceae', name: 'Floating Fern Family', scientificName: 'Salviniaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'salvinia', name: 'Water Spangles', scientificName: 'Salvinia', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'salvinia-molesta', name: 'Giant Salvinia', scientificName: 'Salvinia molesta', rank: 'species' },
                        { id: 'salvinia-natans', name: 'Floating Fern', scientificName: 'Salvinia natans', rank: 'species' }
                      ]
                    },
                    { id: 'azolla', name: 'Mosquito Ferns', scientificName: 'Azolla', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'azolla-filiculoides', name: 'Pacific Mosquito Fern', scientificName: 'Azolla filiculoides', rank: 'species' },
                        { id: 'azolla-pinnata', name: 'Feathered Mosquito Fern', scientificName: 'Azolla pinnata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'marsileaceae', name: 'Water Clover Family', scientificName: 'Marsileaceae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'marsilea', name: 'Water Clovers', scientificName: 'Marsilea', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'marsilea-quadrifolia', name: 'European Water Clover', scientificName: 'Marsilea quadrifolia', rank: 'species' },
                        { id: 'marsilea-drummondii', name: 'Nardoo', scientificName: 'Marsilea drummondii', rank: 'species' }
                      ]
                    },
                    { id: 'pilularia', name: 'Pillworts', scientificName: 'Pilularia', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'pilularia-globulifera', name: 'Pillwort', scientificName: 'Pilularia globulifera', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'gleicheniales', name: 'Forked Ferns', scientificName: 'Gleicheniales', rank: 'order', speciesCount: 165,
              children: [
                { id: 'gleicheniaceae', name: 'Forking Fern Family', scientificName: 'Gleicheniaceae', rank: 'family', speciesCount: 160,
                  children: [
                    { id: 'gleichenia', name: 'Forking Ferns', scientificName: 'Gleichenia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'gleichenia-microphylla', name: 'Scrambling Coral Fern', scientificName: 'Gleichenia microphylla', rank: 'species' }
                      ]
                    },
                    { id: 'dicranopteris', name: 'False Staghorn Ferns', scientificName: 'Dicranopteris', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'dicranopteris-linearis', name: 'Old World Forked Fern', scientificName: 'Dicranopteris linearis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'schizaeales', name: 'Climbing Ferns', scientificName: 'Schizaeales', rank: 'order', speciesCount: 190,
              children: [
                { id: 'lygodiaceae', name: 'Climbing Fern Family', scientificName: 'Lygodiaceae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'lygodium', name: 'Climbing Ferns', scientificName: 'Lygodium', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'lygodium-japonicum', name: 'Japanese Climbing Fern', scientificName: 'Lygodium japonicum', rank: 'species' },
                        { id: 'lygodium-microphyllum', name: 'Old World Climbing Fern', scientificName: 'Lygodium microphyllum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'equisetopsida', name: 'Horsetails', scientificName: 'Equisetopsida', rank: 'class', speciesCount: 20,
          children: [
            { id: 'equisetales', name: 'Horsetails', scientificName: 'Equisetales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'equisetaceae', name: 'Horsetail Family', scientificName: 'Equisetaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'equisetum', name: 'Horsetails', scientificName: 'Equisetum', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'equisetum-arvense', name: 'Field Horsetail', scientificName: 'Equisetum arvense', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'lycopodiopsida', name: 'Clubmosses', scientificName: 'Lycopodiopsida', rank: 'class', speciesCount: 1300,
          children: [
            { id: 'lycopodiales', name: 'Clubmosses', scientificName: 'Lycopodiales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'lycopodiaceae', name: 'Clubmoss Family', scientificName: 'Lycopodiaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'lycopodium', name: 'Ground Pines', scientificName: 'Lycopodium', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'lycopodium-clavatum', name: 'Running Clubmoss', scientificName: 'Lycopodium clavatum', rank: 'species' },
                        { id: 'lycopodium-annotinum', name: 'Stiff Clubmoss', scientificName: 'Lycopodium annotinum', rank: 'species' }
                      ]
                    },
                    { id: 'huperzia', name: 'Firmosses', scientificName: 'Huperzia', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'huperzia-lucidula', name: 'Shining Firmoss', scientificName: 'Huperzia lucidula', rank: 'species' },
                        { id: 'huperzia-serrata', name: 'Toothed Clubmoss', scientificName: 'Huperzia serrata', rank: 'species' }
                      ]
                    },
                    { id: 'diphasiastrum', name: 'Running Pines', scientificName: 'Diphasiastrum', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'diphasiastrum-complanatum', name: 'Ground Cedar', scientificName: 'Diphasiastrum complanatum', rank: 'species' }
                      ]
                    },
                    { id: 'lycopodiella', name: 'Bog Clubmosses', scientificName: 'Lycopodiella', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'lycopodiella-inundata', name: 'Marsh Clubmoss', scientificName: 'Lycopodiella inundata', rank: 'species' }
                      ]
                    },
                    { id: 'phylloglossum', name: 'Pygmy Clubmosses', scientificName: 'Phylloglossum', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'phylloglossum-drummondii', name: 'Pygmy Clubmoss', scientificName: 'Phylloglossum drummondii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'selaginellales', name: 'Spike Mosses', scientificName: 'Selaginellales', rank: 'order', speciesCount: 700,
              children: [
                { id: 'selaginellaceae', name: 'Spike Moss Family', scientificName: 'Selaginellaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'selaginella', name: 'Spike Mosses', scientificName: 'Selaginella', rank: 'genus', speciesCount: 700,
                      children: [
                        { id: 'selaginella-lepidophylla', name: 'Resurrection Plant', scientificName: 'Selaginella lepidophylla', rank: 'species' },
                        { id: 'selaginella-kraussiana', name: 'Krauss\'s Spikemoss', scientificName: 'Selaginella kraussiana', rank: 'species' },
                        { id: 'selaginella-martensii', name: 'Marten\'s Spikemoss', scientificName: 'Selaginella martensii', rank: 'species' },
                        { id: 'selaginella-uncinata', name: 'Peacock Spikemoss', scientificName: 'Selaginella uncinata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'isoetales', name: 'Quillworts', scientificName: 'Isoetales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'isoetaceae', name: 'Quillwort Family', scientificName: 'Isoetaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'isoetes', name: 'Quillworts', scientificName: 'Isoetes', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'isoetes-lacustris', name: 'Lake Quillwort', scientificName: 'Isoetes lacustris', rank: 'species' },
                        { id: 'isoetes-melanopoda', name: 'Blackfoot Quillwort', scientificName: 'Isoetes melanopoda', rank: 'species' },
                        { id: 'isoetes-echinospora', name: 'Spiny-spored Quillwort', scientificName: 'Isoetes echinospora', rank: 'species' }
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
      id: 'bryophytes',
      name: 'Mosses & Liverworts',
      scientificName: 'Bryophyta',
      rank: 'phylum',
      speciesCount: 20000,
      children: [
        { id: 'bryopsida', name: 'True Mosses', scientificName: 'Bryopsida', rank: 'class', speciesCount: 12000,
          children: [
            { id: 'sphagnales', name: 'Peat Mosses', scientificName: 'Sphagnales', rank: 'order', speciesCount: 380,
              children: [
                { id: 'sphagnaceae', name: 'Peat Moss Family', scientificName: 'Sphagnaceae', rank: 'family', speciesCount: 380,
                  children: [
                    { id: 'sphagnum', name: 'Peat Mosses', scientificName: 'Sphagnum', rank: 'genus', speciesCount: 380,
                      children: [
                        { id: 'sphagnum-palustre', name: 'Common Peat Moss', scientificName: 'Sphagnum palustre', rank: 'species' },
                        { id: 'sphagnum-magellanicum', name: 'Magellan\'s Peatmoss', scientificName: 'Sphagnum magellanicum', rank: 'species' },
                        { id: 'sphagnum-cuspidatum', name: 'Feathery Bog Moss', scientificName: 'Sphagnum cuspidatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'polytrichales', name: 'Hair-cap Mosses', scientificName: 'Polytrichales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'polytrichaceae', name: 'Hair-cap Moss Family', scientificName: 'Polytrichaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'polytrichum', name: 'Haircaps', scientificName: 'Polytrichum', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'polytrichum-commune', name: 'Common Haircap Moss', scientificName: 'Polytrichum commune', rank: 'species' },
                        { id: 'polytrichum-juniperinum', name: 'Juniper Haircap Moss', scientificName: 'Polytrichum juniperinum', rank: 'species' }
                      ]
                    },
                    { id: 'atrichum', name: 'Crane Mosses', scientificName: 'Atrichum', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'atrichum-undulatum', name: 'Common Smoothcap', scientificName: 'Atrichum undulatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'hypnales', name: 'Feather Mosses', scientificName: 'Hypnales', rank: 'order', speciesCount: 4500,
              children: [
                { id: 'hypnaceae', name: 'Hypnum Mosses', scientificName: 'Hypnaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'hypnum', name: 'Feather Mosses', scientificName: 'Hypnum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'hypnum-cupressiforme', name: 'Cypress-leaved Plait Moss', scientificName: 'Hypnum cupressiforme', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'brachytheciaceae', name: 'Silk Mosses', scientificName: 'Brachytheciaceae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'brachythecium', name: 'Silk Mosses', scientificName: 'Brachythecium', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'brachythecium-rutabulum', name: 'Rough-stalked Feather Moss', scientificName: 'Brachythecium rutabulum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'thuidiaceae', name: 'Fern Mosses', scientificName: 'Thuidiaceae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'thuidium', name: 'Fern Mosses', scientificName: 'Thuidium', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'thuidium-delicatulum', name: 'Delicate Fern Moss', scientificName: 'Thuidium delicatulum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'bryales', name: 'Thread Mosses', scientificName: 'Bryales', rank: 'order', speciesCount: 1000,
              children: [
                { id: 'bryaceae', name: 'Thread Moss Family', scientificName: 'Bryaceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'bryum', name: 'Thread Mosses', scientificName: 'Bryum', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'bryum-argenteum', name: 'Silver Moss', scientificName: 'Bryum argenteum', rank: 'species' },
                        { id: 'bryum-capillare', name: 'Capillary Thread Moss', scientificName: 'Bryum capillare', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mniaceae', name: 'Star Mosses', scientificName: 'Mniaceae', rank: 'family', speciesCount: 75,
                  children: [
                    { id: 'mnium', name: 'Star Mosses', scientificName: 'Mnium', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'mnium-hornum', name: 'Swan\'s-neck Thyme Moss', scientificName: 'Mnium hornum', rank: 'species' }
                      ]
                    },
                    { id: 'plagiomnium', name: 'Fan Mosses', scientificName: 'Plagiomnium', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'plagiomnium-cuspidatum', name: 'Woodsy Thyme Moss', scientificName: 'Plagiomnium cuspidatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'dicranales', name: 'Fork Mosses', scientificName: 'Dicranales', rank: 'order', speciesCount: 1800,
              children: [
                { id: 'dicranaceae', name: 'Fork Moss Family', scientificName: 'Dicranaceae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'dicranum', name: 'Fork Mosses', scientificName: 'Dicranum', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'dicranum-scoparium', name: 'Broom Fork Moss', scientificName: 'Dicranum scoparium', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leucobryaceae', name: 'White Mosses', scientificName: 'Leucobryaceae', rank: 'family', speciesCount: 130,
                  children: [
                    { id: 'leucobryum', name: 'Pincushion Mosses', scientificName: 'Leucobryum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'leucobryum-glaucum', name: 'White Cushion Moss', scientificName: 'Leucobryum glaucum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'orthotrichales', name: 'Bristle Mosses', scientificName: 'Orthotrichales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'orthotrichaceae', name: 'Bristle Moss Family', scientificName: 'Orthotrichaceae', rank: 'family', speciesCount: 450,
                  children: [
                    { id: 'orthotrichum', name: 'Bristle Mosses', scientificName: 'Orthotrichum', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'orthotrichum-affine', name: 'Wood Bristle Moss', scientificName: 'Orthotrichum affine', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'grimmiales', name: 'Rock Mosses', scientificName: 'Grimmiales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'grimmiaceae', name: 'Rock Moss Family', scientificName: 'Grimmiaceae', rank: 'family', speciesCount: 350,
                  children: [
                    { id: 'grimmia', name: 'Rock Mosses', scientificName: 'Grimmia', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'grimmia-pulvinata', name: 'Grey-cushioned Grimmia', scientificName: 'Grimmia pulvinata', rank: 'species' }
                      ]
                    },
                    { id: 'racomitrium', name: 'Fringe Mosses', scientificName: 'Racomitrium', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'racomitrium-lanuginosum', name: 'Woolly Fringe Moss', scientificName: 'Racomitrium lanuginosum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'funariales', name: 'Cord Mosses', scientificName: 'Funariales', rank: 'order', speciesCount: 300,
              children: [
                { id: 'funariaceae', name: 'Cord Moss Family', scientificName: 'Funariaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'funaria', name: 'Cord Mosses', scientificName: 'Funaria', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'funaria-hygrometrica', name: 'Bonfire Moss', scientificName: 'Funaria hygrometrica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'marchantiopsida', name: 'Liverworts', scientificName: 'Marchantiopsida', rank: 'class', speciesCount: 6000,
          children: [
            { id: 'marchantiales', name: 'Complex Liverworts', scientificName: 'Marchantiales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'marchantiaceae', name: 'Marchantia Family', scientificName: 'Marchantiaceae', rank: 'family', speciesCount: 65,
                  children: [
                    { id: 'marchantia', name: 'Marchantias', scientificName: 'Marchantia', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'marchantia-polymorpha', name: 'Common Liverwort', scientificName: 'Marchantia polymorpha', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'conocephalaceae', name: 'Snakewort Family', scientificName: 'Conocephalaceae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'conocephalum', name: 'Snakeworts', scientificName: 'Conocephalum', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'conocephalum-conicum', name: 'Great Scented Liverwort', scientificName: 'Conocephalum conicum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lunulariaceae', name: 'Lunularia Family', scientificName: 'Lunulariaceae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'lunularia', name: 'Crescent Cup Liverworts', scientificName: 'Lunularia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'lunularia-cruciata', name: 'Crescent-cup Liverwort', scientificName: 'Lunularia cruciata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ricciaceae', name: 'Crystalwort Family', scientificName: 'Ricciaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'riccia', name: 'Crystalworts', scientificName: 'Riccia', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'riccia-fluitans', name: 'Floating Crystalwort', scientificName: 'Riccia fluitans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'jungermanniales', name: 'Leafy Liverworts', scientificName: 'Jungermanniales', rank: 'order', speciesCount: 4500,
              children: [
                { id: 'porellaceae', name: 'Scale Moss Family', scientificName: 'Porellaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'porella', name: 'Scale Mosses', scientificName: 'Porella', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'porella-platyphylla', name: 'Wall Scalewort', scientificName: 'Porella platyphylla', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'radulaceae', name: 'Radula Family', scientificName: 'Radulaceae', rank: 'family', speciesCount: 250,
                  children: [
                    { id: 'radula', name: 'Radulas', scientificName: 'Radula', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'radula-complanata', name: 'Flat Radula', scientificName: 'Radula complanata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'frullaniaceae', name: 'Scalewort Family', scientificName: 'Frullaniaceae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'frullania', name: 'Earworts', scientificName: 'Frullania', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'frullania-dilatata', name: 'Dilated Scalewort', scientificName: 'Frullania dilatata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lejeuneaceae', name: 'Lejeunea Family', scientificName: 'Lejeuneaceae', rank: 'family', speciesCount: 1800,
                  children: [
                    { id: 'lejeunea', name: 'Lejeuneas', scientificName: 'Lejeunea', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'lejeunea-cavifolia', name: 'Micheli\'s Least Pouncewort', scientificName: 'Lejeunea cavifolia', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'plagiochilaceae', name: 'Plagiochila Family', scientificName: 'Plagiochilaceae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'plagiochila', name: 'Plagiochila', scientificName: 'Plagiochila', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'plagiochila-asplenioides', name: 'Greater Featherwort', scientificName: 'Plagiochila asplenioides', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'metzgeriales', name: 'Simple Thalloid Liverworts', scientificName: 'Metzgeriales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'metzgeriaceae', name: 'Metzgeria Family', scientificName: 'Metzgeriaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'metzgeria', name: 'Veilworts', scientificName: 'Metzgeria', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'metzgeria-furcata', name: 'Forked Veilwort', scientificName: 'Metzgeria furcata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pelliaceae', name: 'Pellia Family', scientificName: 'Pelliaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'pellia', name: 'Pellias', scientificName: 'Pellia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'pellia-epiphylla', name: 'Overleaf Pellia', scientificName: 'Pellia epiphylla', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'anthocerotopsida', name: 'Hornworts', scientificName: 'Anthocerotopsida', rank: 'class', speciesCount: 300,
          children: [
            { id: 'anthocerotales', name: 'Hornworts', scientificName: 'Anthocerotales', rank: 'order', speciesCount: 200,
              children: [
                { id: 'anthocerotaceae', name: 'Hornwort Family', scientificName: 'Anthocerotaceae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'anthoceros', name: 'Hornworts', scientificName: 'Anthoceros', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'anthoceros-punctatus', name: 'Dotted Hornwort', scientificName: 'Anthoceros punctatus', rank: 'species' },
                        { id: 'anthoceros-agrestis', name: 'Field Hornwort', scientificName: 'Anthoceros agrestis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'notothyladaceae', name: 'Notothylas Family', scientificName: 'Notothyladaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'notothylas', name: 'Notothylas', scientificName: 'Notothylas', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'notothylas-orbicularis', name: 'Orbicular Hornwort', scientificName: 'Notothylas orbicularis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'dendrocerotales', name: 'Hanging Hornworts', scientificName: 'Dendrocerotales', rank: 'order', speciesCount: 100,
              children: [
                { id: 'dendrocerotaceae', name: 'Tree Hornwort Family', scientificName: 'Dendrocerotaceae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'dendroceros', name: 'Tree Hornworts', scientificName: 'Dendroceros', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'dendroceros-crispus', name: 'Crisped Hornwort', scientificName: 'Dendroceros crispus', rank: 'species' }
                      ]
                    },
                    { id: 'megaceros', name: 'Giant Hornworts', scientificName: 'Megaceros', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'megaceros-flagellaris', name: 'Whip Hornwort', scientificName: 'Megaceros flagellaris', rank: 'species' }
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
      id: 'charophytes',
      name: 'Stoneworts & Allies',
      scientificName: 'Charophyta',
      rank: 'phylum',
      description: 'Closest relatives of land plants',
      speciesCount: 4500,
      children: [
        { id: 'charophyceae', name: 'Stoneworts', scientificName: 'Charophyceae', rank: 'class', speciesCount: 400,
          children: [
            { id: 'charales', name: 'Stoneworts', scientificName: 'Charales', rank: 'order', speciesCount: 400,
              children: [
                { id: 'characeae', name: 'Stonewort Family', scientificName: 'Characeae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'chara', name: 'Stoneworts', scientificName: 'Chara', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'chara-vulgaris', name: 'Common Stonewort', scientificName: 'Chara vulgaris', rank: 'species' },
                        { id: 'chara-hispida', name: 'Bristly Stonewort', scientificName: 'Chara hispida', rank: 'species' },
                        { id: 'chara-contraria', name: 'Opposite Stonewort', scientificName: 'Chara contraria', rank: 'species' }
                      ]
                    },
                    { id: 'nitella', name: 'Brittleworts', scientificName: 'Nitella', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'nitella-flexilis', name: 'Smooth Stonewort', scientificName: 'Nitella flexilis', rank: 'species' },
                        { id: 'nitella-opaca', name: 'Dark Stonewort', scientificName: 'Nitella opaca', rank: 'species' }
                      ]
                    },
                    { id: 'nitellopsis', name: 'Starry Stoneworts', scientificName: 'Nitellopsis', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'nitellopsis-obtusa', name: 'Starry Stonewort', scientificName: 'Nitellopsis obtusa', rank: 'species' }
                      ]
                    },
                    { id: 'tolypella', name: 'Tassel Stoneworts', scientificName: 'Tolypella', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'tolypella-intricata', name: 'Tassel Stonewort', scientificName: 'Tolypella intricata', rank: 'species' }
                      ]
                    },
                    { id: 'lamprothamnium', name: 'Foxtail Stoneworts', scientificName: 'Lamprothamnium', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'lamprothamnium-papulosum', name: 'Foxtail Stonewort', scientificName: 'Lamprothamnium papulosum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'coleochaetophyceae', name: 'Coleochaetes', scientificName: 'Coleochaetophyceae', rank: 'class', speciesCount: 20,
          children: [
            { id: 'coleochaetales', name: 'Coleochaetes', scientificName: 'Coleochaetales', rank: 'order', speciesCount: 20,
              children: [
                { id: 'coleochaetaceae', name: 'Coleochaete Family', scientificName: 'Coleochaetaceae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'coleochaete', name: 'Coleochaetes', scientificName: 'Coleochaete', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'coleochaete-orbicularis', name: 'Disc Coleochaete', scientificName: 'Coleochaete orbicularis', rank: 'species' },
                        { id: 'coleochaete-scutata', name: 'Shield Coleochaete', scientificName: 'Coleochaete scutata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'zygnematophyceae', name: 'Conjugating Green Algae', scientificName: 'Zygnematophyceae', rank: 'class', speciesCount: 4000,
          children: [
            { id: 'zygnematales', name: 'Filamentous Conjugating Algae', scientificName: 'Zygnematales', rank: 'order', speciesCount: 600,
              children: [
                { id: 'zygnemataceae', name: 'Zygnema Family', scientificName: 'Zygnemataceae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'spirogyra', name: 'Water Silk', scientificName: 'Spirogyra', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'spirogyra-pratensis', name: 'Field Spirogyra', scientificName: 'Spirogyra pratensis', rank: 'species' }
                      ]
                    },
                    { id: 'zygnema', name: 'Star Algae', scientificName: 'Zygnema', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'zygnema-circumcarinatum', name: 'Keeled Star Alga', scientificName: 'Zygnema circumcarinatum', rank: 'species' }
                      ]
                    },
                    { id: 'mougeotia', name: 'Ribbon Algae', scientificName: 'Mougeotia', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'mougeotia-scalaris', name: 'Ladder Ribbon Alga', scientificName: 'Mougeotia scalaris', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'desmidiales', name: 'Desmids', scientificName: 'Desmidiales', rank: 'order', speciesCount: 3400,
              children: [
                { id: 'desmidiaceae', name: 'Desmid Family', scientificName: 'Desmidiaceae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'micrasterias', name: 'Micrasterias', scientificName: 'Micrasterias', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'micrasterias-rotata', name: 'Rotating Micrasterias', scientificName: 'Micrasterias rotata', rank: 'species' }
                      ]
                    },
                    { id: 'staurastrum', name: 'Star Desmids', scientificName: 'Staurastrum', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'staurastrum-punctulatum', name: 'Dotted Staurastrum', scientificName: 'Staurastrum punctulatum', rank: 'species' }
                      ]
                    },
                    { id: 'cosmarium', name: 'Cosmarium Desmids', scientificName: 'Cosmarium', rank: 'genus', speciesCount: 1000,
                      children: [
                        { id: 'cosmarium-botrytis', name: 'Grape Cosmarium', scientificName: 'Cosmarium botrytis', rank: 'species' }
                      ]
                    },
                    { id: 'closterium', name: 'Crescent Desmids', scientificName: 'Closterium', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'closterium-lunula', name: 'Moon Closterium', scientificName: 'Closterium lunula', rank: 'species' }
                      ]
                    },
                    { id: 'euastrum', name: 'Beautiful Desmids', scientificName: 'Euastrum', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'euastrum-oblongum', name: 'Oblong Euastrum', scientificName: 'Euastrum oblongum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'closteriaceae', name: 'Closterium Family', scientificName: 'Closteriaceae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'penium', name: 'Penium Desmids', scientificName: 'Penium', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'penium-margaritaceum', name: 'Pearl Penium', scientificName: 'Penium margaritaceum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'klebsormidiophyceae', name: 'Klebsormidiales', scientificName: 'Klebsormidiophyceae', rank: 'class', speciesCount: 50,
          children: [
            { id: 'klebsormidiales', name: 'Klebsormidiales', scientificName: 'Klebsormidiales', rank: 'order', speciesCount: 50,
              children: [
                { id: 'klebsormidiaceae', name: 'Klebsormidium Family', scientificName: 'Klebsormidiaceae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'klebsormidium', name: 'Klebsormidium', scientificName: 'Klebsormidium', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'klebsormidium-flaccidum', name: 'Flaccid Klebsormidium', scientificName: 'Klebsormidium flaccidum', rank: 'species' }
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
