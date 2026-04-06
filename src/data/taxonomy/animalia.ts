import type { TaxonNode } from './types'

export const animalia: TaxonNode =
{
  id: 'animalia',
  name: 'Animals',
  scientificName: 'Animalia',
  rank: 'kingdom',
  description: 'Multicellular, heterotrophic organisms',
  speciesCount: 1500000,
  children: [
    // PHYLUM: CHORDATA
    {
      id: 'chordata',
      name: 'Chordates',
      scientificName: 'Chordata',
      rank: 'phylum',
      description: 'Animals with a notochord',
      speciesCount: 70000,
      children: [
        // CLASS: MAMMALIA
        {
          id: 'mammalia',
          name: 'Mammals',
          scientificName: 'Mammalia',
          rank: 'class',
          description: 'Warm-blooded vertebrates with hair and mammary glands',
          speciesCount: 6400,
          children: [
            // Order: Carnivora
            {
              id: 'carnivora',
              name: 'Carnivores',
              scientificName: 'Carnivora',
              rank: 'order',
              speciesCount: 280,
              children: [
                {
                  id: 'felidae',
                  name: 'Cats',
                  scientificName: 'Felidae',
                  rank: 'family',
                  speciesCount: 37,
                  children: [
                    { id: 'panthera', name: 'Big Cats', scientificName: 'Panthera', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'panthera-leo', name: 'Lion', scientificName: 'Panthera leo', rank: 'species' },
                        { id: 'panthera-tigris', name: 'Tiger', scientificName: 'Panthera tigris', rank: 'species' },
                        { id: 'panthera-pardus', name: 'Leopard', scientificName: 'Panthera pardus', rank: 'species' },
                        { id: 'panthera-onca', name: 'Jaguar', scientificName: 'Panthera onca', rank: 'species' },
                        { id: 'panthera-uncia', name: 'Snow Leopard', scientificName: 'Panthera uncia', rank: 'species' }
                      ]
                    },
                    { id: 'felis', name: 'Small Cats', scientificName: 'Felis', rank: 'genus', speciesCount: 6 },
                    { id: 'acinonyx', name: 'Cheetah', scientificName: 'Acinonyx', rank: 'genus', speciesCount: 1 },
                    { id: 'puma', name: 'Cougars', scientificName: 'Puma', rank: 'genus', speciesCount: 1 },
                    { id: 'lynx', name: 'Lynxes', scientificName: 'Lynx', rank: 'genus', speciesCount: 4 }
                  ]
                },
                {
                  id: 'canidae',
                  name: 'Dogs',
                  scientificName: 'Canidae',
                  rank: 'family',
                  speciesCount: 35,
                  children: [
                    { id: 'canis', name: 'Wolves & Dogs', scientificName: 'Canis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'canis-lupus', name: 'Gray Wolf', scientificName: 'Canis lupus', rank: 'species' },
                        { id: 'canis-familiaris', name: 'Domestic Dog', scientificName: 'Canis familiaris', rank: 'species' },
                        { id: 'canis-latrans', name: 'Coyote', scientificName: 'Canis latrans', rank: 'species' },
                        { id: 'canis-aureus', name: 'Golden Jackal', scientificName: 'Canis aureus', rank: 'species' }
                      ]
                    },
                    { id: 'vulpes', name: 'True Foxes', scientificName: 'Vulpes', rank: 'genus', speciesCount: 12 },
                    { id: 'lycaon', name: 'African Wild Dog', scientificName: 'Lycaon', rank: 'genus', speciesCount: 1 }
                  ]
                },
                {
                  id: 'ursidae',
                  name: 'Bears',
                  scientificName: 'Ursidae',
                  rank: 'family',
                  speciesCount: 8,
                  children: [
                    { id: 'ursus', name: 'Bears', scientificName: 'Ursus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'ursus-arctos', name: 'Brown Bear', scientificName: 'Ursus arctos', rank: 'species' },
                        { id: 'ursus-americanus', name: 'American Black Bear', scientificName: 'Ursus americanus', rank: 'species' },
                        { id: 'ursus-maritimus', name: 'Polar Bear', scientificName: 'Ursus maritimus', rank: 'species' },
                        { id: 'ursus-thibetanus', name: 'Asian Black Bear', scientificName: 'Ursus thibetanus', rank: 'species' }
                      ]
                    },
                    { id: 'ailuropoda', name: 'Giant Panda', scientificName: 'Ailuropoda', rank: 'genus', speciesCount: 1 }
                  ]
                },
                {
                  id: 'mustelidae',
                  name: 'Weasels & Otters',
                  scientificName: 'Mustelidae',
                  rank: 'family',
                  speciesCount: 56,
                  children: [
                    { id: 'mustela', name: 'Weasels', scientificName: 'Mustela', rank: 'genus', speciesCount: 17 },
                    { id: 'lutra', name: 'Otters', scientificName: 'Lutra', rank: 'genus', speciesCount: 3 },
                    { id: 'meles', name: 'Badgers', scientificName: 'Meles', rank: 'genus', speciesCount: 3 }
                  ]
                },
                {
                  id: 'hyaenidae',
                  name: 'Hyenas',
                  scientificName: 'Hyaenidae',
                  rank: 'family',
                  speciesCount: 4
                },
                {
                  id: 'procyonidae',
                  name: 'Raccoons',
                  scientificName: 'Procyonidae',
                  rank: 'family',
                  speciesCount: 12
                }
              ]
            },
            // Order: Primates
            {
              id: 'primates',
              name: 'Primates',
              scientificName: 'Primates',
              rank: 'order',
              speciesCount: 500,
              children: [
                {
                  id: 'hominidae',
                  name: 'Great Apes',
                  scientificName: 'Hominidae',
                  rank: 'family',
                  speciesCount: 8,
                  children: [
                    { id: 'homo', name: 'Humans', scientificName: 'Homo', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'homo-sapiens', name: 'Human', scientificName: 'Homo sapiens', rank: 'species' }
                      ]
                    },
                    { id: 'pan', name: 'Chimpanzees', scientificName: 'Pan', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pan-troglodytes', name: 'Common Chimpanzee', scientificName: 'Pan troglodytes', rank: 'species' },
                        { id: 'pan-paniscus', name: 'Bonobo', scientificName: 'Pan paniscus', rank: 'species' }
                      ]
                    },
                    { id: 'gorilla', name: 'Gorillas', scientificName: 'Gorilla', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'gorilla-gorilla', name: 'Western Gorilla', scientificName: 'Gorilla gorilla', rank: 'species' },
                        { id: 'gorilla-beringei', name: 'Eastern Gorilla', scientificName: 'Gorilla beringei', rank: 'species' }
                      ]
                    },
                    { id: 'pongo', name: 'Orangutans', scientificName: 'Pongo', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'pongo-pygmaeus', name: 'Bornean Orangutan', scientificName: 'Pongo pygmaeus', rank: 'species' },
                        { id: 'pongo-abelii', name: 'Sumatran Orangutan', scientificName: 'Pongo abelii', rank: 'species' },
                        { id: 'pongo-tapanuliensis', name: 'Tapanuli Orangutan', scientificName: 'Pongo tapanuliensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                {
                  id: 'cercopithecidae',
                  name: 'Old World Monkeys',
                  scientificName: 'Cercopithecidae',
                  rank: 'family',
                  speciesCount: 138,
                  children: [
                    { id: 'macaca', name: 'Macaques', scientificName: 'Macaca', rank: 'genus', speciesCount: 23 },
                    { id: 'papio', name: 'Baboons', scientificName: 'Papio', rank: 'genus', speciesCount: 6 }
                  ]
                },
                {
                  id: 'cebidae',
                  name: 'New World Monkeys',
                  scientificName: 'Cebidae',
                  rank: 'family',
                  speciesCount: 56
                },
                {
                  id: 'lemuridae',
                  name: 'Lemurs',
                  scientificName: 'Lemuridae',
                  rank: 'family',
                  speciesCount: 21
                }
              ]
            },
            // Order: Cetacea
            {
              id: 'cetacea',
              name: 'Whales & Dolphins',
              scientificName: 'Cetacea',
              rank: 'order',
              speciesCount: 90,
              children: [
                {
                  id: 'delphinidae',
                  name: 'Dolphins',
                  scientificName: 'Delphinidae',
                  rank: 'family',
                  speciesCount: 37,
                  children: [
                    { id: 'tursiops', name: 'Bottlenose Dolphins', scientificName: 'Tursiops', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'tursiops-truncatus', name: 'Common Bottlenose Dolphin', scientificName: 'Tursiops truncatus', rank: 'species' },
                        { id: 'tursiops-aduncus', name: 'Indo-Pacific Bottlenose Dolphin', scientificName: 'Tursiops aduncus', rank: 'species' }
                      ]
                    },
                    { id: 'orcinus', name: 'Killer Whales', scientificName: 'Orcinus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'orcinus-orca', name: 'Orca', scientificName: 'Orcinus orca', rank: 'species' }
                      ]
                    },
                    { id: 'delphinus', name: 'Common Dolphins', scientificName: 'Delphinus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'delphinus-delphis', name: 'Short-beaked Common Dolphin', scientificName: 'Delphinus delphis', rank: 'species' }
                      ]
                    }
                  ]
                },
                {
                  id: 'balaenopteridae',
                  name: 'Rorquals',
                  scientificName: 'Balaenopteridae',
                  rank: 'family',
                  speciesCount: 9,
                  children: [
                    { id: 'balaenoptera', name: 'Rorqual Whales', scientificName: 'Balaenoptera', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'balaenoptera-musculus', name: 'Blue Whale', scientificName: 'Balaenoptera musculus', rank: 'species' },
                        { id: 'balaenoptera-physalus', name: 'Fin Whale', scientificName: 'Balaenoptera physalus', rank: 'species' },
                        { id: 'balaenoptera-borealis', name: 'Sei Whale', scientificName: 'Balaenoptera borealis', rank: 'species' },
                        { id: 'balaenoptera-acutorostrata', name: 'Minke Whale', scientificName: 'Balaenoptera acutorostrata', rank: 'species' },
                        { id: 'balaenoptera-brydei', name: 'Bryde\'s Whale', scientificName: 'Balaenoptera brydei', rank: 'species' }
                      ]
                    },
                    { id: 'megaptera', name: 'Humpback Whale', scientificName: 'Megaptera', rank: 'genus', speciesCount: 1 }
                  ]
                },
                {
                  id: 'physeteridae',
                  name: 'Sperm Whales',
                  scientificName: 'Physeteridae',
                  rank: 'family',
                  speciesCount: 3
                },
                {
                  id: 'phocoenidae',
                  name: 'Porpoises',
                  scientificName: 'Phocoenidae',
                  rank: 'family',
                  speciesCount: 7
                }
              ]
            },
            // Order: Rodentia
            {
              id: 'rodentia',
              name: 'Rodents',
              scientificName: 'Rodentia',
              rank: 'order',
              speciesCount: 2277,
              children: [
                { id: 'muridae', name: 'Mice & Rats', scientificName: 'Muridae', rank: 'family', speciesCount: 700 },
                { id: 'sciuridae', name: 'Squirrels', scientificName: 'Sciuridae', rank: 'family', speciesCount: 285 },
                { id: 'castoridae', name: 'Beavers', scientificName: 'Castoridae', rank: 'family', speciesCount: 2 },
                { id: 'caviidae', name: 'Guinea Pigs', scientificName: 'Caviidae', rank: 'family', speciesCount: 18 }
              ]
            },
            // Order: Chiroptera
            {
              id: 'chiroptera',
              name: 'Bats',
              scientificName: 'Chiroptera',
              rank: 'order',
              speciesCount: 1400,
              children: [
                { id: 'pteropodidae', name: 'Fruit Bats', scientificName: 'Pteropodidae', rank: 'family', speciesCount: 197,
                  children: [
                    { id: 'pteropus', name: 'Flying Foxes', scientificName: 'Pteropus', rank: 'genus', speciesCount: 65,
                      children: [
                        { id: 'pteropus-vampyrus', name: 'Large Flying Fox', scientificName: 'Pteropus vampyrus', rank: 'species' },
                        { id: 'pteropus-giganteus', name: 'Indian Flying Fox', scientificName: 'Pteropus giganteus', rank: 'species' }
                      ]
                    },
                    { id: 'acerodon', name: 'Golden-crowned Bats', scientificName: 'Acerodon', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'acerodon-jubatus', name: 'Giant Golden-crowned Flying Fox', scientificName: 'Acerodon jubatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'vespertilionidae', name: 'Evening Bats', scientificName: 'Vespertilionidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'myotis', name: 'Mouse-eared Bats', scientificName: 'Myotis', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'myotis-lucifugus', name: 'Little Brown Bat', scientificName: 'Myotis lucifugus', rank: 'species' }
                      ]
                    },
                    { id: 'pipistrellus', name: 'Pipistrelles', scientificName: 'Pipistrellus', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'pipistrellus-pipistrellus', name: 'Common Pipistrelle', scientificName: 'Pipistrellus pipistrellus', rank: 'species' }
                      ]
                    },
                    { id: 'eptesicus', name: 'House Bats', scientificName: 'Eptesicus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'eptesicus-fuscus', name: 'Big Brown Bat', scientificName: 'Eptesicus fuscus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phyllostomidae', name: 'Leaf-nosed Bats', scientificName: 'Phyllostomidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'desmodus', name: 'Vampire Bats', scientificName: 'Desmodus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'desmodus-rotundus', name: 'Common Vampire Bat', scientificName: 'Desmodus rotundus', rank: 'species' }
                      ]
                    },
                    { id: 'artibeus', name: 'Fruit-eating Bats', scientificName: 'Artibeus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'artibeus-jamaicensis', name: 'Jamaican Fruit Bat', scientificName: 'Artibeus jamaicensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhinolophidae', name: 'Horseshoe Bats', scientificName: 'Rhinolophidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'rhinolophus', name: 'Horseshoe Bats', scientificName: 'Rhinolophus', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'rhinolophus-ferrumequinum', name: 'Greater Horseshoe Bat', scientificName: 'Rhinolophus ferrumequinum', rank: 'species' },
                        { id: 'rhinolophus-sinicus', name: 'Chinese Rufous Horseshoe Bat', scientificName: 'Rhinolophus sinicus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hipposideridae', name: 'Old World Leaf-nosed Bats', scientificName: 'Hipposideridae', rank: 'family', speciesCount: 90,
                  children: [
                    { id: 'hipposideros', name: 'Roundleaf Bats', scientificName: 'Hipposideros', rank: 'genus', speciesCount: 70 }
                  ]
                },
                { id: 'molossidae', name: 'Free-tailed Bats', scientificName: 'Molossidae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'tadarida', name: 'Free-tailed Bats', scientificName: 'Tadarida', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'tadarida-brasiliensis', name: 'Mexican Free-tailed Bat', scientificName: 'Tadarida brasiliensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Proboscidea
            {
              id: 'proboscidea',
              name: 'Elephants',
              scientificName: 'Proboscidea',
              rank: 'order',
              speciesCount: 3,
              children: [
                {
                  id: 'elephantidae',
                  name: 'Elephants',
                  scientificName: 'Elephantidae',
                  rank: 'family',
                  speciesCount: 3,
                  children: [
                    { id: 'loxodonta', name: 'African Elephants', scientificName: 'Loxodonta', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'loxodonta-africana', name: 'African Bush Elephant', scientificName: 'Loxodonta africana', rank: 'species' },
                        { id: 'loxodonta-cyclotis', name: 'African Forest Elephant', scientificName: 'Loxodonta cyclotis', rank: 'species' }
                      ]
                    },
                    { id: 'elephas', name: 'Asian Elephant', scientificName: 'Elephas', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'elephas-maximus', name: 'Asian Elephant', scientificName: 'Elephas maximus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Artiodactyla
            {
              id: 'artiodactyla',
              name: 'Even-toed Ungulates',
              scientificName: 'Artiodactyla',
              rank: 'order',
              speciesCount: 220,
              children: [
                { id: 'bovidae', name: 'Cattle & Antelopes', scientificName: 'Bovidae', rank: 'family', speciesCount: 143,
                  children: [
                    { id: 'bos', name: 'Cattle', scientificName: 'Bos', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'bos-taurus', name: 'Domestic Cattle', scientificName: 'Bos taurus', rank: 'species' },
                        { id: 'bos-indicus', name: 'Zebu', scientificName: 'Bos indicus', rank: 'species' },
                        { id: 'bos-grunniens', name: 'Yak', scientificName: 'Bos grunniens', rank: 'species' }
                      ]
                    },
                    { id: 'bison', name: 'Bison', scientificName: 'Bison', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'bison-bison', name: 'American Bison', scientificName: 'Bison bison', rank: 'species' },
                        { id: 'bison-bonasus', name: 'European Bison', scientificName: 'Bison bonasus', rank: 'species' }
                      ]
                    },
                    { id: 'bubalus', name: 'Buffalo', scientificName: 'Bubalus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'bubalus-bubalis', name: 'Water Buffalo', scientificName: 'Bubalus bubalis', rank: 'species' }
                      ]
                    },
                    { id: 'syncerus', name: 'African Buffalo', scientificName: 'Syncerus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'syncerus-caffer', name: 'African Buffalo', scientificName: 'Syncerus caffer', rank: 'species' }
                      ]
                    },
                    { id: 'capra', name: 'Goats', scientificName: 'Capra', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'capra-aegagrus', name: 'Wild Goat', scientificName: 'Capra aegagrus', rank: 'species' },
                        { id: 'capra-hircus', name: 'Domestic Goat', scientificName: 'Capra hircus', rank: 'species' },
                        { id: 'capra-ibex', name: 'Alpine Ibex', scientificName: 'Capra ibex', rank: 'species' }
                      ]
                    },
                    { id: 'ovis', name: 'Sheep', scientificName: 'Ovis', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'ovis-aries', name: 'Domestic Sheep', scientificName: 'Ovis aries', rank: 'species' },
                        { id: 'ovis-canadensis', name: 'Bighorn Sheep', scientificName: 'Ovis canadensis', rank: 'species' },
                        { id: 'ovis-ammon', name: 'Argali', scientificName: 'Ovis ammon', rank: 'species' }
                      ]
                    },
                    { id: 'oryx', name: 'Oryx', scientificName: 'Oryx', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'oryx-gazella', name: 'Gemsbok', scientificName: 'Oryx gazella', rank: 'species' },
                        { id: 'oryx-leucoryx', name: 'Arabian Oryx', scientificName: 'Oryx leucoryx', rank: 'species' }
                      ]
                    },
                    { id: 'hippotragus', name: 'Horse Antelopes', scientificName: 'Hippotragus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'hippotragus-niger', name: 'Sable Antelope', scientificName: 'Hippotragus niger', rank: 'species' },
                        { id: 'hippotragus-equinus', name: 'Roan Antelope', scientificName: 'Hippotragus equinus', rank: 'species' }
                      ]
                    },
                    { id: 'connochaetes', name: 'Wildebeest', scientificName: 'Connochaetes', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'connochaetes-taurinus', name: 'Blue Wildebeest', scientificName: 'Connochaetes taurinus', rank: 'species' },
                        { id: 'connochaetes-gnou', name: 'Black Wildebeest', scientificName: 'Connochaetes gnou', rank: 'species' }
                      ]
                    },
                    { id: 'gazella', name: 'Gazelles', scientificName: 'Gazella', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'gazella-gazella', name: 'Mountain Gazelle', scientificName: 'Gazella gazella', rank: 'species' },
                        { id: 'gazella-dorcas', name: 'Dorcas Gazelle', scientificName: 'Gazella dorcas', rank: 'species' }
                      ]
                    },
                    { id: 'antilocapra', name: 'Pronghorn', scientificName: 'Antilocapra', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'antilocapra-americana', name: 'Pronghorn', scientificName: 'Antilocapra americana', rank: 'species' }
                      ]
                    },
                    { id: 'rupicapra', name: 'Chamois', scientificName: 'Rupicapra', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'rupicapra-rupicapra', name: 'Chamois', scientificName: 'Rupicapra rupicapra', rank: 'species' }
                      ]
                    },
                    { id: 'ovibos', name: 'Muskox', scientificName: 'Ovibos', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ovibos-moschatus', name: 'Muskox', scientificName: 'Ovibos moschatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cervidae', name: 'Deer', scientificName: 'Cervidae', rank: 'family', speciesCount: 55,
                  children: [
                    { id: 'cervus', name: 'True Deer', scientificName: 'Cervus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'cervus-elaphus', name: 'Red Deer', scientificName: 'Cervus elaphus', rank: 'species' },
                        { id: 'cervus-canadensis', name: 'Elk', scientificName: 'Cervus canadensis', rank: 'species' },
                        { id: 'cervus-nippon', name: 'Sika Deer', scientificName: 'Cervus nippon', rank: 'species' }
                      ]
                    },
                    { id: 'dama', name: 'Fallow Deer', scientificName: 'Dama', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'dama-dama', name: 'Fallow Deer', scientificName: 'Dama dama', rank: 'species' }
                      ]
                    },
                    { id: 'odocoileus', name: 'American Deer', scientificName: 'Odocoileus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'odocoileus-virginianus', name: 'White-tailed Deer', scientificName: 'Odocoileus virginianus', rank: 'species' },
                        { id: 'odocoileus-hemionus', name: 'Mule Deer', scientificName: 'Odocoileus hemionus', rank: 'species' }
                      ]
                    },
                    { id: 'alces', name: 'Moose', scientificName: 'Alces', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'alces-alces', name: 'Moose', scientificName: 'Alces alces', rank: 'species' }
                      ]
                    },
                    { id: 'rangifer', name: 'Reindeer', scientificName: 'Rangifer', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'rangifer-tarandus', name: 'Reindeer/Caribou', scientificName: 'Rangifer tarandus', rank: 'species' }
                      ]
                    },
                    { id: 'capreolus', name: 'Roe Deer', scientificName: 'Capreolus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'capreolus-capreolus', name: 'European Roe Deer', scientificName: 'Capreolus capreolus', rank: 'species' }
                      ]
                    },
                    { id: 'muntiacus', name: 'Muntjacs', scientificName: 'Muntiacus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'muntiacus-reevesi', name: 'Reeves\'s Muntjac', scientificName: 'Muntiacus reevesi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'suidae', name: 'Pigs', scientificName: 'Suidae', rank: 'family', speciesCount: 18,
                  children: [
                    { id: 'sus', name: 'Pigs', scientificName: 'Sus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'sus-scrofa', name: 'Wild Boar', scientificName: 'Sus scrofa', rank: 'species' },
                        { id: 'sus-domesticus', name: 'Domestic Pig', scientificName: 'Sus domesticus', rank: 'species' },
                        { id: 'sus-barbatus', name: 'Bearded Pig', scientificName: 'Sus barbatus', rank: 'species' }
                      ]
                    },
                    { id: 'phacochoerus', name: 'Warthogs', scientificName: 'Phacochoerus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'phacochoerus-africanus', name: 'Common Warthog', scientificName: 'Phacochoerus africanus', rank: 'species' }
                      ]
                    },
                    { id: 'potamochoerus', name: 'Bush Pigs', scientificName: 'Potamochoerus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'potamochoerus-porcus', name: 'Red River Hog', scientificName: 'Potamochoerus porcus', rank: 'species' }
                      ]
                    },
                    { id: 'babyrousa', name: 'Babirusas', scientificName: 'Babyrousa', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'babyrousa-celebensis', name: 'North Sulawesi Babirusa', scientificName: 'Babyrousa celebensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tayassuidae', name: 'Peccaries', scientificName: 'Tayassuidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'pecari', name: 'Peccaries', scientificName: 'Pecari', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'pecari-tajacu', name: 'Collared Peccary', scientificName: 'Pecari tajacu', rank: 'species' }
                      ]
                    },
                    { id: 'tayassu', name: 'White-lipped Peccary', scientificName: 'Tayassu', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'tayassu-pecari', name: 'White-lipped Peccary', scientificName: 'Tayassu pecari', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'giraffidae', name: 'Giraffes', scientificName: 'Giraffidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'giraffa', name: 'Giraffes', scientificName: 'Giraffa', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'giraffa-camelopardalis', name: 'Giraffe', scientificName: 'Giraffa camelopardalis', rank: 'species' }
                      ]
                    },
                    { id: 'okapia', name: 'Okapi', scientificName: 'Okapia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'okapia-johnstoni', name: 'Okapi', scientificName: 'Okapia johnstoni', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hippopotamidae', name: 'Hippos', scientificName: 'Hippopotamidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'hippopotamus', name: 'Hippopotamus', scientificName: 'Hippopotamus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'hippopotamus-amphibius', name: 'Common Hippopotamus', scientificName: 'Hippopotamus amphibius', rank: 'species' }
                      ]
                    },
                    { id: 'choeropsis', name: 'Pygmy Hippo', scientificName: 'Choeropsis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'choeropsis-liberiensis', name: 'Pygmy Hippopotamus', scientificName: 'Choeropsis liberiensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'camelidae', name: 'Camels & Llamas', scientificName: 'Camelidae', rank: 'family', speciesCount: 7,
                  children: [
                    { id: 'camelus', name: 'Camels', scientificName: 'Camelus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'camelus-dromedarius', name: 'Dromedary', scientificName: 'Camelus dromedarius', rank: 'species' },
                        { id: 'camelus-bactrianus', name: 'Bactrian Camel', scientificName: 'Camelus bactrianus', rank: 'species' }
                      ]
                    },
                    { id: 'lama', name: 'Llamas', scientificName: 'Lama', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'lama-glama', name: 'Llama', scientificName: 'Lama glama', rank: 'species' },
                        { id: 'lama-guanicoe', name: 'Guanaco', scientificName: 'Lama guanicoe', rank: 'species' }
                      ]
                    },
                    { id: 'vicugna', name: 'Vicuñas', scientificName: 'Vicugna', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'vicugna-vicugna', name: 'Vicuña', scientificName: 'Vicugna vicugna', rank: 'species' },
                        { id: 'vicugna-pacos', name: 'Alpaca', scientificName: 'Vicugna pacos', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tragulidae', name: 'Mouse-deer', scientificName: 'Tragulidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'tragulus', name: 'Mouse-deer', scientificName: 'Tragulus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'tragulus-kanchil', name: 'Lesser Mouse-deer', scientificName: 'Tragulus kanchil', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'moschidae', name: 'Musk Deer', scientificName: 'Moschidae', rank: 'family', speciesCount: 7,
                  children: [
                    { id: 'moschus', name: 'Musk Deer', scientificName: 'Moschus', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'moschus-moschiferus', name: 'Siberian Musk Deer', scientificName: 'Moschus moschiferus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Perissodactyla
            {
              id: 'perissodactyla',
              name: 'Odd-toed Ungulates',
              scientificName: 'Perissodactyla',
              rank: 'order',
              speciesCount: 17,
              children: [
                { id: 'equidae', name: 'Horses', scientificName: 'Equidae', rank: 'family', speciesCount: 9,
                  children: [
                    { id: 'equus', name: 'Horses & Zebras', scientificName: 'Equus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'equus-caballus', name: 'Domestic Horse', scientificName: 'Equus caballus', rank: 'species' },
                        { id: 'equus-ferus', name: 'Wild Horse', scientificName: 'Equus ferus', rank: 'species' },
                        { id: 'equus-africanus', name: 'African Wild Ass', scientificName: 'Equus africanus', rank: 'species' },
                        { id: 'equus-asinus', name: 'Donkey', scientificName: 'Equus asinus', rank: 'species' },
                        { id: 'equus-quagga', name: 'Plains Zebra', scientificName: 'Equus quagga', rank: 'species' },
                        { id: 'equus-grevyi', name: 'Grévy\'s Zebra', scientificName: 'Equus grevyi', rank: 'species' },
                        { id: 'equus-zebra', name: 'Mountain Zebra', scientificName: 'Equus zebra', rank: 'species' },
                        { id: 'equus-hemionus', name: 'Onager', scientificName: 'Equus hemionus', rank: 'species' },
                        { id: 'equus-kiang', name: 'Kiang', scientificName: 'Equus kiang', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhinocerotidae', name: 'Rhinoceroses', scientificName: 'Rhinocerotidae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'rhinoceros', name: 'Asian Rhinos', scientificName: 'Rhinoceros', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'rhinoceros-unicornis', name: 'Indian Rhinoceros', scientificName: 'Rhinoceros unicornis', rank: 'species' },
                        { id: 'rhinoceros-sondaicus', name: 'Javan Rhinoceros', scientificName: 'Rhinoceros sondaicus', rank: 'species' }
                      ]
                    },
                    { id: 'dicerorhinus', name: 'Sumatran Rhino', scientificName: 'Dicerorhinus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'dicerorhinus-sumatrensis', name: 'Sumatran Rhinoceros', scientificName: 'Dicerorhinus sumatrensis', rank: 'species' }
                      ]
                    },
                    { id: 'ceratotherium', name: 'White Rhino', scientificName: 'Ceratotherium', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ceratotherium-simum', name: 'White Rhinoceros', scientificName: 'Ceratotherium simum', rank: 'species' }
                      ]
                    },
                    { id: 'diceros', name: 'Black Rhino', scientificName: 'Diceros', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'diceros-bicornis', name: 'Black Rhinoceros', scientificName: 'Diceros bicornis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tapiridae', name: 'Tapirs', scientificName: 'Tapiridae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'tapirus', name: 'Tapirs', scientificName: 'Tapirus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'tapirus-indicus', name: 'Malayan Tapir', scientificName: 'Tapirus indicus', rank: 'species' },
                        { id: 'tapirus-terrestris', name: 'South American Tapir', scientificName: 'Tapirus terrestris', rank: 'species' },
                        { id: 'tapirus-pinchaque', name: 'Mountain Tapir', scientificName: 'Tapirus pinchaque', rank: 'species' },
                        { id: 'tapirus-bairdii', name: 'Baird\'s Tapir', scientificName: 'Tapirus bairdii', rank: 'species' },
                        { id: 'tapirus-kabomani', name: 'Kabomani Tapir', scientificName: 'Tapirus kabomani', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Lagomorpha
            {
              id: 'lagomorpha',
              name: 'Rabbits & Hares',
              scientificName: 'Lagomorpha',
              rank: 'order',
              speciesCount: 92,
              children: [
                { id: 'leporidae', name: 'Rabbits & Hares', scientificName: 'Leporidae', rank: 'family', speciesCount: 62 },
                { id: 'ochotonidae', name: 'Pikas', scientificName: 'Ochotonidae', rank: 'family', speciesCount: 30 }
              ]
            },
            // Order: Monotremata
            {
              id: 'monotremata',
              name: 'Monotremes',
              scientificName: 'Monotremata',
              rank: 'order',
              description: 'Egg-laying mammals',
              speciesCount: 5,
              children: [
                { id: 'ornithorhynchidae', name: 'Platypus', scientificName: 'Ornithorhynchidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'ornithorhynchus', name: 'Platypus', scientificName: 'Ornithorhynchus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ornithorhynchus-anatinus', name: 'Platypus', scientificName: 'Ornithorhynchus anatinus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tachyglossidae', name: 'Echidnas', scientificName: 'Tachyglossidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'tachyglossus', name: 'Short-beaked Echidna', scientificName: 'Tachyglossus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'tachyglossus-aculeatus', name: 'Short-beaked Echidna', scientificName: 'Tachyglossus aculeatus', rank: 'species' }
                      ]
                    },
                    { id: 'zaglossus', name: 'Long-beaked Echidnas', scientificName: 'Zaglossus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'zaglossus-bruijnii', name: 'Western Long-beaked Echidna', scientificName: 'Zaglossus bruijnii', rank: 'species' },
                        { id: 'zaglossus-bartoni', name: 'Eastern Long-beaked Echidna', scientificName: 'Zaglossus bartoni', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Diprotodontia (Marsupials - largest order)
            {
              id: 'diprotodontia',
              name: 'Diprotodonts',
              scientificName: 'Diprotodontia',
              rank: 'order',
              description: 'Largest order of marsupials including kangaroos, koalas, and wombats',
              speciesCount: 155,
              children: [
                { id: 'macropodidae', name: 'Kangaroos & Wallabies', scientificName: 'Macropodidae', rank: 'family', speciesCount: 65,
                  children: [
                    { id: 'macropus', name: 'Kangaroos', scientificName: 'Macropus', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'macropus-rufus', name: 'Red Kangaroo', scientificName: 'Macropus rufus', rank: 'species' },
                        { id: 'macropus-giganteus', name: 'Eastern Grey Kangaroo', scientificName: 'Macropus giganteus', rank: 'species' },
                        { id: 'macropus-fuliginosus', name: 'Western Grey Kangaroo', scientificName: 'Macropus fuliginosus', rank: 'species' },
                        { id: 'macropus-antilopinus', name: 'Antilopine Kangaroo', scientificName: 'Macropus antilopinus', rank: 'species' }
                      ]
                    },
                    { id: 'wallabia', name: 'Swamp Wallaby', scientificName: 'Wallabia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'wallabia-bicolor', name: 'Swamp Wallaby', scientificName: 'Wallabia bicolor', rank: 'species' }
                      ]
                    },
                    { id: 'dendrolagus', name: 'Tree-kangaroos', scientificName: 'Dendrolagus', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'dendrolagus-ursinus', name: 'Vogelkop Tree-kangaroo', scientificName: 'Dendrolagus ursinus', rank: 'species' }
                      ]
                    },
                    { id: 'setonix', name: 'Quokka', scientificName: 'Setonix', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'setonix-brachyurus', name: 'Quokka', scientificName: 'Setonix brachyurus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phalangeridae', name: 'Possums & Cuscuses', scientificName: 'Phalangeridae', rank: 'family', speciesCount: 27,
                  children: [
                    { id: 'trichosurus', name: 'Brushtail Possums', scientificName: 'Trichosurus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'trichosurus-vulpecula', name: 'Common Brushtail Possum', scientificName: 'Trichosurus vulpecula', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phascolarctidae', name: 'Koalas', scientificName: 'Phascolarctidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'phascolarctos', name: 'Koala', scientificName: 'Phascolarctos', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'phascolarctos-cinereus', name: 'Koala', scientificName: 'Phascolarctos cinereus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'vombatidae', name: 'Wombats', scientificName: 'Vombatidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'vombatus', name: 'Common Wombat', scientificName: 'Vombatus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'vombatus-ursinus', name: 'Common Wombat', scientificName: 'Vombatus ursinus', rank: 'species' }
                      ]
                    },
                    { id: 'lasiorhinus', name: 'Hairy-nosed Wombats', scientificName: 'Lasiorhinus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'lasiorhinus-latifrons', name: 'Southern Hairy-nosed Wombat', scientificName: 'Lasiorhinus latifrons', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'petauridae', name: 'Gliders & Striped Possums', scientificName: 'Petauridae', rank: 'family', speciesCount: 11,
                  children: [
                    { id: 'petaurus', name: 'Gliders', scientificName: 'Petaurus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'petaurus-breviceps', name: 'Sugar Glider', scientificName: 'Petaurus breviceps', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Dasyuromorphia (Carnivorous marsupials)
            {
              id: 'dasyuromorphia',
              name: 'Carnivorous Marsupials',
              scientificName: 'Dasyuromorphia',
              rank: 'order',
              speciesCount: 75,
              children: [
                { id: 'dasyuridae', name: 'Quolls & Dunnarts', scientificName: 'Dasyuridae', rank: 'family', speciesCount: 75,
                  children: [
                    { id: 'dasyurus', name: 'Quolls', scientificName: 'Dasyurus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'dasyurus-maculatus', name: 'Tiger Quoll', scientificName: 'Dasyurus maculatus', rank: 'species' },
                        { id: 'dasyurus-viverrinus', name: 'Eastern Quoll', scientificName: 'Dasyurus viverrinus', rank: 'species' }
                      ]
                    },
                    { id: 'sarcophilus', name: 'Tasmanian Devil', scientificName: 'Sarcophilus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sarcophilus-harrisii', name: 'Tasmanian Devil', scientificName: 'Sarcophilus harrisii', rank: 'species' }
                      ]
                    },
                    { id: 'antechinus', name: 'Antechinuses', scientificName: 'Antechinus', rank: 'genus', speciesCount: 15 },
                    { id: 'sminthopsis', name: 'Dunnarts', scientificName: 'Sminthopsis', rank: 'genus', speciesCount: 21 }
                  ]
                }
              ]
            },
            // Order: Peramelemorphia (Bandicoots)
            {
              id: 'peramelemorphia',
              name: 'Bandicoots & Bilbies',
              scientificName: 'Peramelemorphia',
              rank: 'order',
              speciesCount: 22,
              children: [
                { id: 'peramelidae', name: 'Bandicoots', scientificName: 'Peramelidae', rank: 'family', speciesCount: 19,
                  children: [
                    { id: 'perameles', name: 'Long-nosed Bandicoots', scientificName: 'Perameles', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'perameles-nasuta', name: 'Long-nosed Bandicoot', scientificName: 'Perameles nasuta', rank: 'species' }
                      ]
                    },
                    { id: 'isoodon', name: 'Short-nosed Bandicoots', scientificName: 'Isoodon', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'isoodon-obesulus', name: 'Southern Brown Bandicoot', scientificName: 'Isoodon obesulus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'thylacomyidae', name: 'Bilbies', scientificName: 'Thylacomyidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'macrotis', name: 'Bilbies', scientificName: 'Macrotis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'macrotis-lagotis', name: 'Greater Bilby', scientificName: 'Macrotis lagotis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Didelphimorphia (American Opossums)
            {
              id: 'didelphimorphia',
              name: 'American Opossums',
              scientificName: 'Didelphimorphia',
              rank: 'order',
              speciesCount: 126,
              children: [
                { id: 'didelphidae', name: 'Opossums', scientificName: 'Didelphidae', rank: 'family', speciesCount: 126,
                  children: [
                    { id: 'didelphis', name: 'Large Opossums', scientificName: 'Didelphis', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'didelphis-virginiana', name: 'Virginia Opossum', scientificName: 'Didelphis virginiana', rank: 'species' },
                        { id: 'didelphis-marsupialis', name: 'Common Opossum', scientificName: 'Didelphis marsupialis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Xenarthra (Sloths, Anteaters, Armadillos)
            {
              id: 'xenarthra',
              name: 'Xenarthrans',
              scientificName: 'Xenarthra',
              rank: 'order',
              description: 'Sloths, anteaters, and armadillos',
              speciesCount: 31,
              children: [
                { id: 'bradypodidae', name: 'Three-toed Sloths', scientificName: 'Bradypodidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'bradypus', name: 'Three-toed Sloths', scientificName: 'Bradypus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'bradypus-variegatus', name: 'Brown-throated Sloth', scientificName: 'Bradypus variegatus', rank: 'species' },
                        { id: 'bradypus-tridactylus', name: 'Pale-throated Sloth', scientificName: 'Bradypus tridactylus', rank: 'species' },
                        { id: 'bradypus-pygmaeus', name: 'Pygmy Three-toed Sloth', scientificName: 'Bradypus pygmaeus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'megalonychidae', name: 'Two-toed Sloths', scientificName: 'Megalonychidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'choloepus', name: 'Two-toed Sloths', scientificName: 'Choloepus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'choloepus-hoffmanni', name: 'Hoffmann\'s Two-toed Sloth', scientificName: 'Choloepus hoffmanni', rank: 'species' },
                        { id: 'choloepus-didactylus', name: 'Linnaeus\'s Two-toed Sloth', scientificName: 'Choloepus didactylus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'myrmecophagidae', name: 'Anteaters', scientificName: 'Myrmecophagidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'myrmecophaga', name: 'Giant Anteater', scientificName: 'Myrmecophaga', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'myrmecophaga-tridactyla', name: 'Giant Anteater', scientificName: 'Myrmecophaga tridactyla', rank: 'species' }
                      ]
                    },
                    { id: 'tamandua', name: 'Tamanduas', scientificName: 'Tamandua', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'tamandua-tetradactyla', name: 'Southern Tamandua', scientificName: 'Tamandua tetradactyla', rank: 'species' }
                      ]
                    },
                    { id: 'cyclopes', name: 'Silky Anteater', scientificName: 'Cyclopes', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'cyclopes-didactylus', name: 'Silky Anteater', scientificName: 'Cyclopes didactylus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dasypodidae', name: 'Armadillos', scientificName: 'Dasypodidae', rank: 'family', speciesCount: 21,
                  children: [
                    { id: 'dasypus', name: 'Long-nosed Armadillos', scientificName: 'Dasypus', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'dasypus-novemcinctus', name: 'Nine-banded Armadillo', scientificName: 'Dasypus novemcinctus', rank: 'species' }
                      ]
                    },
                    { id: 'tolypeutes', name: 'Three-banded Armadillos', scientificName: 'Tolypeutes', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'tolypeutes-tricinctus', name: 'Brazilian Three-banded Armadillo', scientificName: 'Tolypeutes tricinctus', rank: 'species' }
                      ]
                    },
                    { id: 'priodontes', name: 'Giant Armadillo', scientificName: 'Priodontes', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'priodontes-maximus', name: 'Giant Armadillo', scientificName: 'Priodontes maximus', rank: 'species' }
                      ]
                    },
                    { id: 'chlamyphorus', name: 'Pink Fairy Armadillo', scientificName: 'Chlamyphorus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'chlamyphorus-truncatus', name: 'Pink Fairy Armadillo', scientificName: 'Chlamyphorus truncatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Eulipotyphla (Hedgehogs, Shrews, Moles)
            {
              id: 'eulipotyphla',
              name: 'Hedgehogs, Shrews & Moles',
              scientificName: 'Eulipotyphla',
              rank: 'order',
              speciesCount: 450,
              children: [
                { id: 'erinaceidae', name: 'Hedgehogs & Moonrats', scientificName: 'Erinaceidae', rank: 'family', speciesCount: 24,
                  children: [
                    { id: 'erinaceus', name: 'Eurasian Hedgehogs', scientificName: 'Erinaceus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'erinaceus-europaeus', name: 'European Hedgehog', scientificName: 'Erinaceus europaeus', rank: 'species' }
                      ]
                    },
                    { id: 'atelerix', name: 'African Hedgehogs', scientificName: 'Atelerix', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'atelerix-albiventris', name: 'African Pygmy Hedgehog', scientificName: 'Atelerix albiventris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'soricidae', name: 'Shrews', scientificName: 'Soricidae', rank: 'family', speciesCount: 385,
                  children: [
                    { id: 'sorex', name: 'Long-tailed Shrews', scientificName: 'Sorex', rank: 'genus', speciesCount: 80 },
                    { id: 'crocidura', name: 'White-toothed Shrews', scientificName: 'Crocidura', rank: 'genus', speciesCount: 180 },
                    { id: 'suncus', name: 'Musk Shrews', scientificName: 'Suncus', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'suncus-etruscus', name: 'Etruscan Shrew', scientificName: 'Suncus etruscus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'talpidae', name: 'Moles', scientificName: 'Talpidae', rank: 'family', speciesCount: 42,
                  children: [
                    { id: 'talpa', name: 'Eurasian Moles', scientificName: 'Talpa', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'talpa-europaea', name: 'European Mole', scientificName: 'Talpa europaea', rank: 'species' }
                      ]
                    },
                    { id: 'scalopus', name: 'Eastern Mole', scientificName: 'Scalopus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'scalopus-aquaticus', name: 'Eastern Mole', scientificName: 'Scalopus aquaticus', rank: 'species' }
                      ]
                    },
                    { id: 'condylura', name: 'Star-nosed Mole', scientificName: 'Condylura', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'condylura-cristata', name: 'Star-nosed Mole', scientificName: 'Condylura cristata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'solenodontidae', name: 'Solenodons', scientificName: 'Solenodontidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'solenodon', name: 'Solenodons', scientificName: 'Solenodon', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'solenodon-paradoxus', name: 'Hispaniolan Solenodon', scientificName: 'Solenodon paradoxus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Pholidota (Pangolins)
            {
              id: 'pholidota',
              name: 'Pangolins',
              scientificName: 'Pholidota',
              rank: 'order',
              description: 'Scaly anteaters, the world\'s most trafficked mammals',
              speciesCount: 8,
              children: [
                { id: 'manidae', name: 'Pangolins', scientificName: 'Manidae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'manis', name: 'Asian Pangolins', scientificName: 'Manis', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'manis-javanica', name: 'Sunda Pangolin', scientificName: 'Manis javanica', rank: 'species' },
                        { id: 'manis-pentadactyla', name: 'Chinese Pangolin', scientificName: 'Manis pentadactyla', rank: 'species' },
                        { id: 'manis-crassicaudata', name: 'Indian Pangolin', scientificName: 'Manis crassicaudata', rank: 'species' },
                        { id: 'manis-culionensis', name: 'Philippine Pangolin', scientificName: 'Manis culionensis', rank: 'species' }
                      ]
                    },
                    { id: 'smutsia', name: 'African Ground Pangolins', scientificName: 'Smutsia', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'smutsia-temminckii', name: 'Ground Pangolin', scientificName: 'Smutsia temminckii', rank: 'species' },
                        { id: 'smutsia-gigantea', name: 'Giant Ground Pangolin', scientificName: 'Smutsia gigantea', rank: 'species' }
                      ]
                    },
                    { id: 'phataginus', name: 'African Tree Pangolins', scientificName: 'Phataginus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'phataginus-tricuspis', name: 'White-bellied Pangolin', scientificName: 'Phataginus tricuspis', rank: 'species' },
                        { id: 'phataginus-tetradactyla', name: 'Black-bellied Pangolin', scientificName: 'Phataginus tetradactyla', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Sirenia (Manatees & Dugongs)
            {
              id: 'sirenia',
              name: 'Sea Cows',
              scientificName: 'Sirenia',
              rank: 'order',
              description: 'Manatees and dugongs - fully aquatic herbivorous mammals',
              speciesCount: 4,
              children: [
                { id: 'trichechidae', name: 'Manatees', scientificName: 'Trichechidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'trichechus', name: 'Manatees', scientificName: 'Trichechus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'trichechus-manatus', name: 'West Indian Manatee', scientificName: 'Trichechus manatus', rank: 'species' },
                        { id: 'trichechus-senegalensis', name: 'African Manatee', scientificName: 'Trichechus senegalensis', rank: 'species' },
                        { id: 'trichechus-inunguis', name: 'Amazonian Manatee', scientificName: 'Trichechus inunguis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dugongidae', name: 'Dugongs', scientificName: 'Dugongidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'dugong', name: 'Dugong', scientificName: 'Dugong', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'dugong-dugon', name: 'Dugong', scientificName: 'Dugong dugon', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Hyracoidea (Hyraxes)
            {
              id: 'hyracoidea',
              name: 'Hyraxes',
              scientificName: 'Hyracoidea',
              rank: 'order',
              description: 'Small herbivorous mammals closely related to elephants',
              speciesCount: 5,
              children: [
                { id: 'procaviidae', name: 'Hyraxes', scientificName: 'Procaviidae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'procavia', name: 'Rock Hyraxes', scientificName: 'Procavia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'procavia-capensis', name: 'Rock Hyrax', scientificName: 'Procavia capensis', rank: 'species' }
                      ]
                    },
                    { id: 'dendrohyrax', name: 'Tree Hyraxes', scientificName: 'Dendrohyrax', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'dendrohyrax-arboreus', name: 'Southern Tree Hyrax', scientificName: 'Dendrohyrax arboreus', rank: 'species' }
                      ]
                    },
                    { id: 'heterohyrax', name: 'Yellow-spotted Hyrax', scientificName: 'Heterohyrax', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'heterohyrax-brucei', name: 'Yellow-spotted Rock Hyrax', scientificName: 'Heterohyrax brucei', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Tubulidentata (Aardvark)
            {
              id: 'tubulidentata',
              name: 'Aardvarks',
              scientificName: 'Tubulidentata',
              rank: 'order',
              description: 'The only living species in this order',
              speciesCount: 1,
              children: [
                { id: 'orycteropodidae', name: 'Aardvark', scientificName: 'Orycteropodidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'orycteropus', name: 'Aardvark', scientificName: 'Orycteropus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'orycteropus-afer', name: 'Aardvark', scientificName: 'Orycteropus afer', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Scandentia (Treeshrews)
            {
              id: 'scandentia',
              name: 'Treeshrews',
              scientificName: 'Scandentia',
              rank: 'order',
              speciesCount: 20,
              children: [
                { id: 'tupaiidae', name: 'Treeshrews', scientificName: 'Tupaiidae', rank: 'family', speciesCount: 19,
                  children: [
                    { id: 'tupaia', name: 'Common Treeshrews', scientificName: 'Tupaia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'tupaia-glis', name: 'Common Treeshrew', scientificName: 'Tupaia glis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Dermoptera (Colugos)
            {
              id: 'dermoptera',
              name: 'Colugos',
              scientificName: 'Dermoptera',
              rank: 'order',
              description: 'Gliding mammals, also called flying lemurs',
              speciesCount: 2,
              children: [
                { id: 'cynocephalidae', name: 'Colugos', scientificName: 'Cynocephalidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'galeopterus', name: 'Sunda Colugo', scientificName: 'Galeopterus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'galeopterus-variegatus', name: 'Sunda Flying Lemur', scientificName: 'Galeopterus variegatus', rank: 'species' }
                      ]
                    },
                    { id: 'cynocephalus', name: 'Philippine Colugo', scientificName: 'Cynocephalus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'cynocephalus-volans', name: 'Philippine Flying Lemur', scientificName: 'Cynocephalus volans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // CLASS: AVES
        {
          id: 'aves',
          name: 'Birds',
          scientificName: 'Aves',
          rank: 'class',
          description: 'Warm-blooded vertebrates with feathers and wings',
          speciesCount: 10000,
          children: [
            {
              id: 'passeriformes',
              name: 'Perching Birds',
              scientificName: 'Passeriformes',
              rank: 'order',
              speciesCount: 6000,
              children: [
                { id: 'corvidae', name: 'Crows & Ravens', scientificName: 'Corvidae', rank: 'family', speciesCount: 133,
                  children: [
                    { id: 'corvus', name: 'Crows & Ravens', scientificName: 'Corvus', rank: 'genus', speciesCount: 46,
                      children: [
                        { id: 'corvus-corax', name: 'Common Raven', scientificName: 'Corvus corax', rank: 'species' },
                        { id: 'corvus-brachyrhynchos', name: 'American Crow', scientificName: 'Corvus brachyrhynchos', rank: 'species' },
                        { id: 'corvus-corone', name: 'Carrion Crow', scientificName: 'Corvus corone', rank: 'species' }
                      ]
                    },
                    { id: 'pica', name: 'Magpies', scientificName: 'Pica', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'pica-pica', name: 'Eurasian Magpie', scientificName: 'Pica pica', rank: 'species' }
                      ]
                    },
                    { id: 'cyanocitta', name: 'Jays', scientificName: 'Cyanocitta', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'cyanocitta-cristata', name: 'Blue Jay', scientificName: 'Cyanocitta cristata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'fringillidae', name: 'Finches', scientificName: 'Fringillidae', rank: 'family', speciesCount: 228 },
                { id: 'turdidae', name: 'Thrushes', scientificName: 'Turdidae', rank: 'family', speciesCount: 175 },
                { id: 'paridae', name: 'Tits', scientificName: 'Paridae', rank: 'family', speciesCount: 64 }
              ]
            },
            {
              id: 'accipitriformes',
              name: 'Birds of Prey',
              scientificName: 'Accipitriformes',
              rank: 'order',
              speciesCount: 250,
              children: [
                { id: 'accipitridae', name: 'Hawks & Eagles', scientificName: 'Accipitridae', rank: 'family', speciesCount: 240,
                  children: [
                    { id: 'aquila', name: 'True Eagles', scientificName: 'Aquila', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'aquila-chrysaetos', name: 'Golden Eagle', scientificName: 'Aquila chrysaetos', rank: 'species' },
                        { id: 'aquila-audax', name: 'Wedge-tailed Eagle', scientificName: 'Aquila audax', rank: 'species' }
                      ]
                    },
                    { id: 'haliaeetus', name: 'Sea Eagles', scientificName: 'Haliaeetus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'haliaeetus-leucocephalus', name: 'Bald Eagle', scientificName: 'Haliaeetus leucocephalus', rank: 'species' },
                        { id: 'haliaeetus-albicilla', name: 'White-tailed Eagle', scientificName: 'Haliaeetus albicilla', rank: 'species' }
                      ]
                    },
                    { id: 'accipiter', name: 'Hawks', scientificName: 'Accipiter', rank: 'genus', speciesCount: 51,
                      children: [
                        { id: 'accipiter-gentilis', name: 'Northern Goshawk', scientificName: 'Accipiter gentilis', rank: 'species' },
                        { id: 'accipiter-nisus', name: 'Eurasian Sparrowhawk', scientificName: 'Accipiter nisus', rank: 'species' }
                      ]
                    },
                    { id: 'buteo', name: 'Buzzards', scientificName: 'Buteo', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'buteo-jamaicensis', name: 'Red-tailed Hawk', scientificName: 'Buteo jamaicensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cathartidae', name: 'New World Vultures', scientificName: 'Cathartidae', rank: 'family', speciesCount: 7 }
              ]
            },
            {
              id: 'falconiformes',
              name: 'Falcons',
              scientificName: 'Falconiformes',
              rank: 'order',
              speciesCount: 66,
              children: [
                { id: 'falconidae', name: 'Falcons & Caracaras', scientificName: 'Falconidae', rank: 'family', speciesCount: 66,
                  children: [
                    { id: 'falco', name: 'Falcons', scientificName: 'Falco', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'falco-peregrinus', name: 'Peregrine Falcon', scientificName: 'Falco peregrinus', rank: 'species' },
                        { id: 'falco-rusticolus', name: 'Gyrfalcon', scientificName: 'Falco rusticolus', rank: 'species' },
                        { id: 'falco-tinnunculus', name: 'Common Kestrel', scientificName: 'Falco tinnunculus', rank: 'species' },
                        { id: 'falco-sparverius', name: 'American Kestrel', scientificName: 'Falco sparverius', rank: 'species' },
                        { id: 'falco-columbarius', name: 'Merlin', scientificName: 'Falco columbarius', rank: 'species' }
                      ]
                    },
                    { id: 'caracara', name: 'Caracaras', scientificName: 'Caracara', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'caracara-plancus', name: 'Crested Caracara', scientificName: 'Caracara plancus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'strigiformes',
              name: 'Owls',
              scientificName: 'Strigiformes',
              rank: 'order',
              speciesCount: 200,
              children: [
                { id: 'strigidae', name: 'True Owls', scientificName: 'Strigidae', rank: 'family', speciesCount: 190,
                  children: [
                    { id: 'bubo', name: 'Eagle-Owls', scientificName: 'Bubo', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'bubo-bubo', name: 'Eurasian Eagle-Owl', scientificName: 'Bubo bubo', rank: 'species' },
                        { id: 'bubo-virginianus', name: 'Great Horned Owl', scientificName: 'Bubo virginianus', rank: 'species' },
                        { id: 'bubo-scandiacus', name: 'Snowy Owl', scientificName: 'Bubo scandiacus', rank: 'species' }
                      ]
                    },
                    { id: 'strix', name: 'Wood Owls', scientificName: 'Strix', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'strix-aluco', name: 'Tawny Owl', scientificName: 'Strix aluco', rank: 'species' },
                        { id: 'strix-nebulosa', name: 'Great Grey Owl', scientificName: 'Strix nebulosa', rank: 'species' },
                        { id: 'strix-varia', name: 'Barred Owl', scientificName: 'Strix varia', rank: 'species' }
                      ]
                    },
                    { id: 'athene', name: 'Little Owls', scientificName: 'Athene', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'athene-noctua', name: 'Little Owl', scientificName: 'Athene noctua', rank: 'species' },
                        { id: 'athene-cunicularia', name: 'Burrowing Owl', scientificName: 'Athene cunicularia', rank: 'species' }
                      ]
                    },
                    { id: 'asio', name: 'Eared Owls', scientificName: 'Asio', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'asio-otus', name: 'Long-eared Owl', scientificName: 'Asio otus', rank: 'species' },
                        { id: 'asio-flammeus', name: 'Short-eared Owl', scientificName: 'Asio flammeus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tytonidae', name: 'Barn Owls', scientificName: 'Tytonidae', rank: 'family', speciesCount: 16,
                  children: [
                    { id: 'tyto', name: 'Barn Owls', scientificName: 'Tyto', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'tyto-alba', name: 'Barn Owl', scientificName: 'Tyto alba', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'psittaciformes',
              name: 'Parrots',
              scientificName: 'Psittaciformes',
              rank: 'order',
              speciesCount: 400,
              children: [
                { id: 'psittacidae', name: 'True Parrots', scientificName: 'Psittacidae', rank: 'family', speciesCount: 350,
                  children: [
                    { id: 'ara', name: 'Macaws', scientificName: 'Ara', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'ara-macao', name: 'Scarlet Macaw', scientificName: 'Ara macao', rank: 'species' },
                        { id: 'ara-ararauna', name: 'Blue-and-yellow Macaw', scientificName: 'Ara ararauna', rank: 'species' },
                        { id: 'ara-chloropterus', name: 'Red-and-green Macaw', scientificName: 'Ara chloropterus', rank: 'species' }
                      ]
                    },
                    { id: 'amazona', name: 'Amazon Parrots', scientificName: 'Amazona', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'amazona-aestiva', name: 'Turquoise-fronted Amazon', scientificName: 'Amazona aestiva', rank: 'species' }
                      ]
                    },
                    { id: 'psittacus', name: 'Grey Parrots', scientificName: 'Psittacus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'psittacus-erithacus', name: 'Grey Parrot', scientificName: 'Psittacus erithacus', rank: 'species' }
                      ]
                    },
                    { id: 'melopsittacus', name: 'Budgerigar', scientificName: 'Melopsittacus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'melopsittacus-undulatus', name: 'Budgerigar', scientificName: 'Melopsittacus undulatus', rank: 'species' }
                      ]
                    },
                    { id: 'strigops', name: 'Kākāpō', scientificName: 'Strigops', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'strigops-habroptila', name: 'Kākāpō', scientificName: 'Strigops habroptila', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cacatuidae', name: 'Cockatoos', scientificName: 'Cacatuidae', rank: 'family', speciesCount: 21,
                  children: [
                    { id: 'cacatua', name: 'White Cockatoos', scientificName: 'Cacatua', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'cacatua-galerita', name: 'Sulphur-crested Cockatoo', scientificName: 'Cacatua galerita', rank: 'species' },
                        { id: 'cacatua-alba', name: 'White Cockatoo', scientificName: 'Cacatua alba', rank: 'species' }
                      ]
                    },
                    { id: 'nymphicus', name: 'Cockatiel', scientificName: 'Nymphicus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'nymphicus-hollandicus', name: 'Cockatiel', scientificName: 'Nymphicus hollandicus', rank: 'species' }
                      ]
                    },
                    { id: 'calyptorhynchus', name: 'Black Cockatoos', scientificName: 'Calyptorhynchus', rank: 'genus', speciesCount: 5 }
                  ]
                }
              ]
            },
            {
              id: 'anseriformes',
              name: 'Waterfowl',
              scientificName: 'Anseriformes',
              rank: 'order',
              speciesCount: 180,
              children: [
                { id: 'anatidae', name: 'Ducks, Geese & Swans', scientificName: 'Anatidae', rank: 'family', speciesCount: 174,
                  children: [
                    { id: 'cygnus', name: 'Swans', scientificName: 'Cygnus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'cygnus-olor', name: 'Mute Swan', scientificName: 'Cygnus olor', rank: 'species' },
                        { id: 'cygnus-atratus', name: 'Black Swan', scientificName: 'Cygnus atratus', rank: 'species' },
                        { id: 'cygnus-buccinator', name: 'Trumpeter Swan', scientificName: 'Cygnus buccinator', rank: 'species' }
                      ]
                    },
                    { id: 'anser', name: 'Grey Geese', scientificName: 'Anser', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'anser-anser', name: 'Greylag Goose', scientificName: 'Anser anser', rank: 'species' },
                        { id: 'anser-caerulescens', name: 'Snow Goose', scientificName: 'Anser caerulescens', rank: 'species' }
                      ]
                    },
                    { id: 'branta', name: 'Black Geese', scientificName: 'Branta', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'branta-canadensis', name: 'Canada Goose', scientificName: 'Branta canadensis', rank: 'species' },
                        { id: 'branta-sandvicensis', name: 'Hawaiian Goose (Nēnē)', scientificName: 'Branta sandvicensis', rank: 'species' }
                      ]
                    },
                    { id: 'anas', name: 'Dabbling Ducks', scientificName: 'Anas', rank: 'genus', speciesCount: 31,
                      children: [
                        { id: 'anas-platyrhynchos', name: 'Mallard', scientificName: 'Anas platyrhynchos', rank: 'species' },
                        { id: 'anas-crecca', name: 'Eurasian Teal', scientificName: 'Anas crecca', rank: 'species' }
                      ]
                    },
                    { id: 'aythya', name: 'Diving Ducks', scientificName: 'Aythya', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'aythya-valisineria', name: 'Canvasback', scientificName: 'Aythya valisineria', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'galliformes',
              name: 'Game Birds',
              scientificName: 'Galliformes',
              rank: 'order',
              speciesCount: 290,
              children: [
                { id: 'phasianidae', name: 'Pheasants & Partridges', scientificName: 'Phasianidae', rank: 'family', speciesCount: 185,
                  children: [
                    { id: 'phasianus', name: 'Pheasants', scientificName: 'Phasianus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'phasianus-colchicus', name: 'Common Pheasant', scientificName: 'Phasianus colchicus', rank: 'species' }
                      ]
                    },
                    { id: 'gallus', name: 'Junglefowl', scientificName: 'Gallus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'gallus-gallus', name: 'Red Junglefowl', scientificName: 'Gallus gallus', rank: 'species' },
                        { id: 'gallus-domesticus', name: 'Chicken', scientificName: 'Gallus gallus domesticus', rank: 'species' }
                      ]
                    },
                    { id: 'pavo', name: 'Peafowl', scientificName: 'Pavo', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pavo-cristatus', name: 'Indian Peafowl', scientificName: 'Pavo cristatus', rank: 'species' },
                        { id: 'pavo-muticus', name: 'Green Peafowl', scientificName: 'Pavo muticus', rank: 'species' }
                      ]
                    },
                    { id: 'meleagris', name: 'Turkeys', scientificName: 'Meleagris', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'meleagris-gallopavo', name: 'Wild Turkey', scientificName: 'Meleagris gallopavo', rank: 'species' }
                      ]
                    },
                    { id: 'coturnix', name: 'Old World Quail', scientificName: 'Coturnix', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'coturnix-coturnix', name: 'Common Quail', scientificName: 'Coturnix coturnix', rank: 'species' }
                      ]
                    },
                    { id: 'perdix', name: 'Partridges', scientificName: 'Perdix', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'perdix-perdix', name: 'Grey Partridge', scientificName: 'Perdix perdix', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'numididae', name: 'Guineafowl', scientificName: 'Numididae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'numida', name: 'Helmeted Guineafowl', scientificName: 'Numida', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'numida-meleagris', name: 'Helmeted Guineafowl', scientificName: 'Numida meleagris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'odontophoridae', name: 'New World Quail', scientificName: 'Odontophoridae', rank: 'family', speciesCount: 34,
                  children: [
                    { id: 'callipepla', name: 'Crested Quail', scientificName: 'Callipepla', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'callipepla-californica', name: 'California Quail', scientificName: 'Callipepla californica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'columbiformes',
              name: 'Pigeons & Doves',
              scientificName: 'Columbiformes',
              rank: 'order',
              speciesCount: 350,
              children: [
                { id: 'columbidae', name: 'Pigeons & Doves', scientificName: 'Columbidae', rank: 'family', speciesCount: 344,
                  children: [
                    { id: 'columba', name: 'Pigeons', scientificName: 'Columba', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'columba-livia', name: 'Rock Dove', scientificName: 'Columba livia', rank: 'species' },
                        { id: 'columba-palumbus', name: 'Common Wood Pigeon', scientificName: 'Columba palumbus', rank: 'species' }
                      ]
                    },
                    { id: 'streptopelia', name: 'Turtle Doves', scientificName: 'Streptopelia', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'streptopelia-decaocto', name: 'Eurasian Collared-Dove', scientificName: 'Streptopelia decaocto', rank: 'species' }
                      ]
                    },
                    { id: 'goura', name: 'Crowned Pigeons', scientificName: 'Goura', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'goura-victoria', name: 'Victoria Crowned Pigeon', scientificName: 'Goura victoria', rank: 'species' }
                      ]
                    },
                    { id: 'zenaida', name: 'American Doves', scientificName: 'Zenaida', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'zenaida-macroura', name: 'Mourning Dove', scientificName: 'Zenaida macroura', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Struthioniformes (Ostriches & Ratites)
            {
              id: 'struthioniformes',
              name: 'Ostriches',
              scientificName: 'Struthioniformes',
              rank: 'order',
              speciesCount: 2,
              children: [
                { id: 'struthionidae', name: 'Ostriches', scientificName: 'Struthionidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'struthio', name: 'Ostriches', scientificName: 'Struthio', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'struthio-camelus', name: 'Common Ostrich', scientificName: 'Struthio camelus', rank: 'species' },
                        { id: 'struthio-molybdophanes', name: 'Somali Ostrich', scientificName: 'Struthio molybdophanes', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Casuariiformes
            {
              id: 'casuariiformes',
              name: 'Cassowaries & Emus',
              scientificName: 'Casuariiformes',
              rank: 'order',
              speciesCount: 4,
              children: [
                { id: 'casuariidae', name: 'Cassowaries', scientificName: 'Casuariidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'casuarius', name: 'Cassowaries', scientificName: 'Casuarius', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'casuarius-casuarius', name: 'Southern Cassowary', scientificName: 'Casuarius casuarius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dromaiidae', name: 'Emus', scientificName: 'Dromaiidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'dromaius', name: 'Emu', scientificName: 'Dromaius', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'dromaius-novaehollandiae', name: 'Emu', scientificName: 'Dromaius novaehollandiae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Apterygiformes
            {
              id: 'apterygiformes',
              name: 'Kiwis',
              scientificName: 'Apterygiformes',
              rank: 'order',
              speciesCount: 5,
              children: [
                { id: 'apterygidae', name: 'Kiwis', scientificName: 'Apterygidae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'apteryx', name: 'Kiwis', scientificName: 'Apteryx', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'apteryx-mantelli', name: 'North Island Brown Kiwi', scientificName: 'Apteryx mantelli', rank: 'species' },
                        { id: 'apteryx-australis', name: 'Southern Brown Kiwi', scientificName: 'Apteryx australis', rank: 'species' },
                        { id: 'apteryx-haastii', name: 'Great Spotted Kiwi', scientificName: 'Apteryx haastii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Rheiformes
            {
              id: 'rheiformes',
              name: 'Rheas',
              scientificName: 'Rheiformes',
              rank: 'order',
              speciesCount: 2,
              children: [
                { id: 'rheidae', name: 'Rheas', scientificName: 'Rheidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'rhea', name: 'Rheas', scientificName: 'Rhea', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'rhea-americana', name: 'Greater Rhea', scientificName: 'Rhea americana', rank: 'species' },
                        { id: 'rhea-pennata', name: 'Lesser Rhea', scientificName: 'Rhea pennata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Phoenicopteriformes
            {
              id: 'phoenicopteriformes',
              name: 'Flamingos',
              scientificName: 'Phoenicopteriformes',
              rank: 'order',
              speciesCount: 6,
              children: [
                { id: 'phoenicopteridae', name: 'Flamingos', scientificName: 'Phoenicopteridae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'phoenicopterus', name: 'Flamingos', scientificName: 'Phoenicopterus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'phoenicopterus-roseus', name: 'Greater Flamingo', scientificName: 'Phoenicopterus roseus', rank: 'species' },
                        { id: 'phoenicopterus-ruber', name: 'American Flamingo', scientificName: 'Phoenicopterus ruber', rank: 'species' },
                        { id: 'phoenicopterus-chilensis', name: 'Chilean Flamingo', scientificName: 'Phoenicopterus chilensis', rank: 'species' }
                      ]
                    },
                    { id: 'phoeniconaias', name: 'Lesser Flamingo', scientificName: 'Phoeniconaias', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'phoeniconaias-minor', name: 'Lesser Flamingo', scientificName: 'Phoeniconaias minor', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Pelecaniformes
            {
              id: 'pelecaniformes',
              name: 'Pelicans & Herons',
              scientificName: 'Pelecaniformes',
              rank: 'order',
              speciesCount: 118,
              children: [
                { id: 'pelecanidae', name: 'Pelicans', scientificName: 'Pelecanidae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'pelecanus', name: 'Pelicans', scientificName: 'Pelecanus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'pelecanus-onocrotalus', name: 'Great White Pelican', scientificName: 'Pelecanus onocrotalus', rank: 'species' },
                        { id: 'pelecanus-occidentalis', name: 'Brown Pelican', scientificName: 'Pelecanus occidentalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ardeidae', name: 'Herons & Egrets', scientificName: 'Ardeidae', rank: 'family', speciesCount: 64,
                  children: [
                    { id: 'ardea', name: 'Great Herons', scientificName: 'Ardea', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'ardea-cinerea', name: 'Grey Heron', scientificName: 'Ardea cinerea', rank: 'species' },
                        { id: 'ardea-herodias', name: 'Great Blue Heron', scientificName: 'Ardea herodias', rank: 'species' },
                        { id: 'ardea-alba', name: 'Great Egret', scientificName: 'Ardea alba', rank: 'species' }
                      ]
                    },
                    { id: 'egretta', name: 'Egrets', scientificName: 'Egretta', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'egretta-garzetta', name: 'Little Egret', scientificName: 'Egretta garzetta', rank: 'species' },
                        { id: 'egretta-thula', name: 'Snowy Egret', scientificName: 'Egretta thula', rank: 'species' }
                      ]
                    },
                    { id: 'nycticorax', name: 'Night Herons', scientificName: 'Nycticorax', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'nycticorax-nycticorax', name: 'Black-crowned Night Heron', scientificName: 'Nycticorax nycticorax', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'threskiornithidae', name: 'Ibises & Spoonbills', scientificName: 'Threskiornithidae', rank: 'family', speciesCount: 36,
                  children: [
                    { id: 'platalea', name: 'Spoonbills', scientificName: 'Platalea', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'platalea-ajaja', name: 'Roseate Spoonbill', scientificName: 'Platalea ajaja', rank: 'species' }
                      ]
                    },
                    { id: 'eudocimus', name: 'American Ibises', scientificName: 'Eudocimus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'eudocimus-ruber', name: 'Scarlet Ibis', scientificName: 'Eudocimus ruber', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Ciconiiformes
            {
              id: 'ciconiiformes',
              name: 'Storks',
              scientificName: 'Ciconiiformes',
              rank: 'order',
              speciesCount: 19,
              children: [
                { id: 'ciconiidae', name: 'Storks', scientificName: 'Ciconiidae', rank: 'family', speciesCount: 19,
                  children: [
                    { id: 'ciconia', name: 'True Storks', scientificName: 'Ciconia', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'ciconia-ciconia', name: 'White Stork', scientificName: 'Ciconia ciconia', rank: 'species' },
                        { id: 'ciconia-nigra', name: 'Black Stork', scientificName: 'Ciconia nigra', rank: 'species' }
                      ]
                    },
                    { id: 'mycteria', name: 'Wood Storks', scientificName: 'Mycteria', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'mycteria-americana', name: 'Wood Stork', scientificName: 'Mycteria americana', rank: 'species' }
                      ]
                    },
                    { id: 'leptoptilos', name: 'Marabou Storks', scientificName: 'Leptoptilos', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'leptoptilos-crumeniferus', name: 'Marabou Stork', scientificName: 'Leptoptilos crumeniferus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Gruiformes
            {
              id: 'gruiformes',
              name: 'Cranes & Rails',
              scientificName: 'Gruiformes',
              rank: 'order',
              speciesCount: 189,
              children: [
                { id: 'gruidae', name: 'Cranes', scientificName: 'Gruidae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'grus', name: 'Cranes', scientificName: 'Grus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'grus-grus', name: 'Common Crane', scientificName: 'Grus grus', rank: 'species' },
                        { id: 'grus-japonensis', name: 'Red-crowned Crane', scientificName: 'Grus japonensis', rank: 'species' },
                        { id: 'grus-americana', name: 'Whooping Crane', scientificName: 'Grus americana', rank: 'species' }
                      ]
                    },
                    { id: 'antigone', name: 'Sarus Cranes', scientificName: 'Antigone', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'antigone-antigone', name: 'Sarus Crane', scientificName: 'Antigone antigone', rank: 'species' }
                      ]
                    },
                    { id: 'balearica', name: 'Crowned Cranes', scientificName: 'Balearica', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'balearica-regulorum', name: 'Grey Crowned Crane', scientificName: 'Balearica regulorum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rallidae', name: 'Rails & Coots', scientificName: 'Rallidae', rank: 'family', speciesCount: 145,
                  children: [
                    { id: 'fulica', name: 'Coots', scientificName: 'Fulica', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'fulica-atra', name: 'Eurasian Coot', scientificName: 'Fulica atra', rank: 'species' },
                        { id: 'fulica-americana', name: 'American Coot', scientificName: 'Fulica americana', rank: 'species' }
                      ]
                    },
                    { id: 'gallinula', name: 'Moorhens', scientificName: 'Gallinula', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'gallinula-chloropus', name: 'Common Moorhen', scientificName: 'Gallinula chloropus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Charadriiformes
            {
              id: 'charadriiformes',
              name: 'Shorebirds & Gulls',
              scientificName: 'Charadriiformes',
              rank: 'order',
              speciesCount: 390,
              children: [
                { id: 'laridae', name: 'Gulls & Terns', scientificName: 'Laridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'larus', name: 'Gulls', scientificName: 'Larus', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'larus-argentatus', name: 'European Herring Gull', scientificName: 'Larus argentatus', rank: 'species' },
                        { id: 'larus-marinus', name: 'Great Black-backed Gull', scientificName: 'Larus marinus', rank: 'species' }
                      ]
                    },
                    { id: 'sterna', name: 'Terns', scientificName: 'Sterna', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'sterna-hirundo', name: 'Common Tern', scientificName: 'Sterna hirundo', rank: 'species' },
                        { id: 'sterna-paradisaea', name: 'Arctic Tern', scientificName: 'Sterna paradisaea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scolopacidae', name: 'Sandpipers', scientificName: 'Scolopacidae', rank: 'family', speciesCount: 98,
                  children: [
                    { id: 'calidris', name: 'Stints & Sandpipers', scientificName: 'Calidris', rank: 'genus', speciesCount: 24 },
                    { id: 'numenius', name: 'Curlews', scientificName: 'Numenius', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'numenius-arquata', name: 'Eurasian Curlew', scientificName: 'Numenius arquata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'charadriidae', name: 'Plovers', scientificName: 'Charadriidae', rank: 'family', speciesCount: 68,
                  children: [
                    { id: 'charadrius', name: 'Plovers', scientificName: 'Charadrius', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'charadrius-hiaticula', name: 'Common Ringed Plover', scientificName: 'Charadrius hiaticula', rank: 'species' }
                      ]
                    },
                    { id: 'vanellus', name: 'Lapwings', scientificName: 'Vanellus', rank: 'genus', speciesCount: 24,
                      children: [
                        { id: 'vanellus-vanellus', name: 'Northern Lapwing', scientificName: 'Vanellus vanellus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'alcidae', name: 'Auks', scientificName: 'Alcidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'fratercula', name: 'Puffins', scientificName: 'Fratercula', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'fratercula-arctica', name: 'Atlantic Puffin', scientificName: 'Fratercula arctica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Apodiformes
            {
              id: 'apodiformes',
              name: 'Swifts & Hummingbirds',
              scientificName: 'Apodiformes',
              rank: 'order',
              speciesCount: 450,
              children: [
                { id: 'trochilidae', name: 'Hummingbirds', scientificName: 'Trochilidae', rank: 'family', speciesCount: 360,
                  children: [
                    { id: 'archilochus', name: 'Bee Hummingbirds', scientificName: 'Archilochus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'archilochus-colubris', name: 'Ruby-throated Hummingbird', scientificName: 'Archilochus colubris', rank: 'species' }
                      ]
                    },
                    { id: 'mellisuga', name: 'Smallest Birds', scientificName: 'Mellisuga', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'mellisuga-helenae', name: 'Bee Hummingbird', scientificName: 'Mellisuga helenae', rank: 'species' }
                      ]
                    },
                    { id: 'patagona', name: 'Giant Hummingbird', scientificName: 'Patagona', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'patagona-gigas', name: 'Giant Hummingbird', scientificName: 'Patagona gigas', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'apodidae', name: 'Swifts', scientificName: 'Apodidae', rank: 'family', speciesCount: 90,
                  children: [
                    { id: 'apus', name: 'Common Swifts', scientificName: 'Apus', rank: 'genus', speciesCount: 19,
                      children: [
                        { id: 'apus-apus', name: 'Common Swift', scientificName: 'Apus apus', rank: 'species' }
                      ]
                    },
                    { id: 'chaetura', name: 'Spine-tailed Swifts', scientificName: 'Chaetura', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'chaetura-pelagica', name: 'Chimney Swift', scientificName: 'Chaetura pelagica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Coraciiformes
            {
              id: 'coraciiformes',
              name: 'Kingfishers & Allies',
              scientificName: 'Coraciiformes',
              rank: 'order',
              speciesCount: 178,
              children: [
                { id: 'alcedinidae', name: 'Kingfishers', scientificName: 'Alcedinidae', rank: 'family', speciesCount: 114,
                  children: [
                    { id: 'alcedo', name: 'River Kingfishers', scientificName: 'Alcedo', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'alcedo-atthis', name: 'Common Kingfisher', scientificName: 'Alcedo atthis', rank: 'species' }
                      ]
                    },
                    { id: 'megaceryle', name: 'Giant Kingfishers', scientificName: 'Megaceryle', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'megaceryle-alcyon', name: 'Belted Kingfisher', scientificName: 'Megaceryle alcyon', rank: 'species' }
                      ]
                    },
                    { id: 'dacelo', name: 'Kookaburras', scientificName: 'Dacelo', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'dacelo-novaeguineae', name: 'Laughing Kookaburra', scientificName: 'Dacelo novaeguineae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'meropidae', name: 'Bee-eaters', scientificName: 'Meropidae', rank: 'family', speciesCount: 27,
                  children: [
                    { id: 'merops', name: 'Bee-eaters', scientificName: 'Merops', rank: 'genus', speciesCount: 24,
                      children: [
                        { id: 'merops-apiaster', name: 'European Bee-eater', scientificName: 'Merops apiaster', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'coraciidae', name: 'Rollers', scientificName: 'Coraciidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'coracias', name: 'Rollers', scientificName: 'Coracias', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'coracias-garrulus', name: 'European Roller', scientificName: 'Coracias garrulus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Piciformes
            {
              id: 'piciformes',
              name: 'Woodpeckers & Toucans',
              scientificName: 'Piciformes',
              rank: 'order',
              speciesCount: 440,
              children: [
                { id: 'picidae', name: 'Woodpeckers', scientificName: 'Picidae', rank: 'family', speciesCount: 240,
                  children: [
                    { id: 'dryocopus', name: 'Large Woodpeckers', scientificName: 'Dryocopus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'dryocopus-pileatus', name: 'Pileated Woodpecker', scientificName: 'Dryocopus pileatus', rank: 'species' },
                        { id: 'dryocopus-martius', name: 'Black Woodpecker', scientificName: 'Dryocopus martius', rank: 'species' }
                      ]
                    },
                    { id: 'dendrocopos', name: 'Spotted Woodpeckers', scientificName: 'Dendrocopos', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'dendrocopos-major', name: 'Great Spotted Woodpecker', scientificName: 'Dendrocopos major', rank: 'species' }
                      ]
                    },
                    { id: 'melanerpes', name: 'American Woodpeckers', scientificName: 'Melanerpes', rank: 'genus', speciesCount: 24,
                      children: [
                        { id: 'melanerpes-erythrocephalus', name: 'Red-headed Woodpecker', scientificName: 'Melanerpes erythrocephalus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ramphastidae', name: 'Toucans', scientificName: 'Ramphastidae', rank: 'family', speciesCount: 45,
                  children: [
                    { id: 'ramphastos', name: 'Toucans', scientificName: 'Ramphastos', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'ramphastos-toco', name: 'Toco Toucan', scientificName: 'Ramphastos toco', rank: 'species' },
                        { id: 'ramphastos-sulfuratus', name: 'Keel-billed Toucan', scientificName: 'Ramphastos sulfuratus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Bucerotiformes
            {
              id: 'bucerotiformes',
              name: 'Hornbills & Hoopoes',
              scientificName: 'Bucerotiformes',
              rank: 'order',
              speciesCount: 74,
              children: [
                { id: 'bucerotidae', name: 'Hornbills', scientificName: 'Bucerotidae', rank: 'family', speciesCount: 62,
                  children: [
                    { id: 'buceros', name: 'Great Hornbills', scientificName: 'Buceros', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'buceros-rhinoceros', name: 'Rhinoceros Hornbill', scientificName: 'Buceros rhinoceros', rank: 'species' },
                        { id: 'buceros-bicornis', name: 'Great Hornbill', scientificName: 'Buceros bicornis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'upupidae', name: 'Hoopoes', scientificName: 'Upupidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'upupa', name: 'Hoopoes', scientificName: 'Upupa', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'upupa-epops', name: 'Eurasian Hoopoe', scientificName: 'Upupa epops', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Procellariiformes
            {
              id: 'procellariiformes',
              name: 'Albatrosses & Petrels',
              scientificName: 'Procellariiformes',
              rank: 'order',
              speciesCount: 147,
              children: [
                { id: 'diomedeidae', name: 'Albatrosses', scientificName: 'Diomedeidae', rank: 'family', speciesCount: 22,
                  children: [
                    { id: 'diomedea', name: 'Great Albatrosses', scientificName: 'Diomedea', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'diomedea-exulans', name: 'Wandering Albatross', scientificName: 'Diomedea exulans', rank: 'species' },
                        { id: 'diomedea-epomophora', name: 'Royal Albatross', scientificName: 'Diomedea epomophora', rank: 'species' }
                      ]
                    },
                    { id: 'thalassarche', name: 'Mollymawks', scientificName: 'Thalassarche', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'thalassarche-melanophris', name: 'Black-browed Albatross', scientificName: 'Thalassarche melanophris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'procellariidae', name: 'Shearwaters & Petrels', scientificName: 'Procellariidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'puffinus', name: 'Shearwaters', scientificName: 'Puffinus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'puffinus-puffinus', name: 'Manx Shearwater', scientificName: 'Puffinus puffinus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // Order: Cuculiformes
            {
              id: 'cuculiformes',
              name: 'Cuckoos',
              scientificName: 'Cuculiformes',
              rank: 'order',
              speciesCount: 150,
              children: [
                { id: 'cuculidae', name: 'Cuckoos', scientificName: 'Cuculidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'cuculus', name: 'True Cuckoos', scientificName: 'Cuculus', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'cuculus-canorus', name: 'Common Cuckoo', scientificName: 'Cuculus canorus', rank: 'species' }
                      ]
                    },
                    { id: 'geococcyx', name: 'Roadrunners', scientificName: 'Geococcyx', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'geococcyx-californianus', name: 'Greater Roadrunner', scientificName: 'Geococcyx californianus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'sphenisciformes',
              name: 'Penguins',
              scientificName: 'Sphenisciformes',
              rank: 'order',
              speciesCount: 18,
              children: [
                { id: 'spheniscidae', name: 'Penguins', scientificName: 'Spheniscidae', rank: 'family', speciesCount: 18,
                  children: [
                    { id: 'aptenodytes', name: 'Great Penguins', scientificName: 'Aptenodytes', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'aptenodytes-forsteri', name: 'Emperor Penguin', scientificName: 'Aptenodytes forsteri', rank: 'species' },
                        { id: 'aptenodytes-patagonicus', name: 'King Penguin', scientificName: 'Aptenodytes patagonicus', rank: 'species' }
                      ]
                    },
                    { id: 'pygoscelis', name: 'Brush-tailed Penguins', scientificName: 'Pygoscelis', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'pygoscelis-adeliae', name: 'Adélie Penguin', scientificName: 'Pygoscelis adeliae', rank: 'species' },
                        { id: 'pygoscelis-papua', name: 'Gentoo Penguin', scientificName: 'Pygoscelis papua', rank: 'species' }
                      ]
                    },
                    { id: 'spheniscus', name: 'Banded Penguins', scientificName: 'Spheniscus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'spheniscus-demersus', name: 'African Penguin', scientificName: 'Spheniscus demersus', rank: 'species' },
                        { id: 'spheniscus-humboldti', name: 'Humboldt Penguin', scientificName: 'Spheniscus humboldti', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // CLASS: REPTILIA
        {
          id: 'reptilia',
          name: 'Reptiles',
          scientificName: 'Reptilia',
          rank: 'class',
          description: 'Cold-blooded vertebrates with scales',
          speciesCount: 11000,
          children: [
            // ORDER: SQUAMATA
            {
              id: 'squamata',
              name: 'Lizards & Snakes',
              scientificName: 'Squamata',
              rank: 'order',
              speciesCount: 10000,
              children: [
                // Suborder Serpentes (Snakes)
                { id: 'colubridae', name: 'Colubrids', scientificName: 'Colubridae', rank: 'family', speciesCount: 1800,
                  children: [
                    { id: 'pantherophis', name: 'Rat Snakes', scientificName: 'Pantherophis', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'pantherophis-guttatus', name: 'Corn Snake', scientificName: 'Pantherophis guttatus', rank: 'species' },
                        { id: 'pantherophis-obsoletus', name: 'Black Rat Snake', scientificName: 'Pantherophis obsoletus', rank: 'species' },
                        { id: 'pantherophis-alleghaniensis', name: 'Eastern Rat Snake', scientificName: 'Pantherophis alleghaniensis', rank: 'species' }
                      ]
                    },
                    { id: 'thamnophis', name: 'Garter Snakes', scientificName: 'Thamnophis', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'thamnophis-sirtalis', name: 'Common Garter Snake', scientificName: 'Thamnophis sirtalis', rank: 'species' },
                        { id: 'thamnophis-elegans', name: 'Western Terrestrial Garter Snake', scientificName: 'Thamnophis elegans', rank: 'species' }
                      ]
                    },
                    { id: 'lampropeltis', name: 'Kingsnakes', scientificName: 'Lampropeltis', rank: 'genus', speciesCount: 26,
                      children: [
                        { id: 'lampropeltis-getula', name: 'Eastern Kingsnake', scientificName: 'Lampropeltis getula', rank: 'species' },
                        { id: 'lampropeltis-triangulum', name: 'Milk Snake', scientificName: 'Lampropeltis triangulum', rank: 'species' },
                        { id: 'lampropeltis-californiae', name: 'California Kingsnake', scientificName: 'Lampropeltis californiae', rank: 'species' }
                      ]
                    },
                    { id: 'natrix', name: 'Grass Snakes', scientificName: 'Natrix', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'natrix-natrix', name: 'Grass Snake', scientificName: 'Natrix natrix', rank: 'species' }
                      ]
                    },
                    { id: 'nerodia', name: 'Water Snakes', scientificName: 'Nerodia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'nerodia-sipedon', name: 'Northern Water Snake', scientificName: 'Nerodia sipedon', rank: 'species' }
                      ]
                    },
                    { id: 'pituophis', name: 'Pine Snakes', scientificName: 'Pituophis', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'pituophis-catenifer', name: 'Gopher Snake', scientificName: 'Pituophis catenifer', rank: 'species' },
                        { id: 'pituophis-melanoleucus', name: 'Pine Snake', scientificName: 'Pituophis melanoleucus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'viperidae', name: 'Vipers', scientificName: 'Viperidae', rank: 'family', speciesCount: 330,
                  children: [
                    { id: 'crotalus', name: 'Rattlesnakes', scientificName: 'Crotalus', rank: 'genus', speciesCount: 36,
                      children: [
                        { id: 'crotalus-atrox', name: 'Western Diamondback Rattlesnake', scientificName: 'Crotalus atrox', rank: 'species' },
                        { id: 'crotalus-adamanteus', name: 'Eastern Diamondback Rattlesnake', scientificName: 'Crotalus adamanteus', rank: 'species' },
                        { id: 'crotalus-horridus', name: 'Timber Rattlesnake', scientificName: 'Crotalus horridus', rank: 'species' },
                        { id: 'crotalus-cerastes', name: 'Sidewinder', scientificName: 'Crotalus cerastes', rank: 'species' }
                      ]
                    },
                    { id: 'vipera', name: 'Old World Vipers', scientificName: 'Vipera', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'vipera-berus', name: 'Common European Adder', scientificName: 'Vipera berus', rank: 'species' },
                        { id: 'vipera-aspis', name: 'Asp Viper', scientificName: 'Vipera aspis', rank: 'species' }
                      ]
                    },
                    { id: 'bothrops', name: 'Lanceheads', scientificName: 'Bothrops', rank: 'genus', speciesCount: 48,
                      children: [
                        { id: 'bothrops-atrox', name: 'Common Lancehead', scientificName: 'Bothrops atrox', rank: 'species' },
                        { id: 'bothrops-jararaca', name: 'Jararaca', scientificName: 'Bothrops jararaca', rank: 'species' }
                      ]
                    },
                    { id: 'bitis', name: 'African Adders', scientificName: 'Bitis', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'bitis-gabonica', name: 'Gaboon Viper', scientificName: 'Bitis gabonica', rank: 'species' },
                        { id: 'bitis-arietans', name: 'Puff Adder', scientificName: 'Bitis arietans', rank: 'species' }
                      ]
                    },
                    { id: 'agkistrodon', name: 'Moccasins', scientificName: 'Agkistrodon', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'agkistrodon-contortrix', name: 'Copperhead', scientificName: 'Agkistrodon contortrix', rank: 'species' },
                        { id: 'agkistrodon-piscivorus', name: 'Cottonmouth', scientificName: 'Agkistrodon piscivorus', rank: 'species' }
                      ]
                    },
                    { id: 'daboia', name: 'Russell\'s Vipers', scientificName: 'Daboia', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'daboia-russelii', name: 'Russell\'s Viper', scientificName: 'Daboia russelii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'elapidae', name: 'Elapids', scientificName: 'Elapidae', rank: 'family', speciesCount: 360,
                  children: [
                    { id: 'naja', name: 'Cobras', scientificName: 'Naja', rank: 'genus', speciesCount: 38,
                      children: [
                        { id: 'naja-naja', name: 'Indian Cobra', scientificName: 'Naja naja', rank: 'species' },
                        { id: 'naja-haje', name: 'Egyptian Cobra', scientificName: 'Naja haje', rank: 'species' },
                        { id: 'naja-nigricollis', name: 'Black-necked Spitting Cobra', scientificName: 'Naja nigricollis', rank: 'species' }
                      ]
                    },
                    { id: 'ophiophagus', name: 'King Cobras', scientificName: 'Ophiophagus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ophiophagus-hannah', name: 'King Cobra', scientificName: 'Ophiophagus hannah', rank: 'species' }
                      ]
                    },
                    { id: 'dendroaspis', name: 'Mambas', scientificName: 'Dendroaspis', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'dendroaspis-polylepis', name: 'Black Mamba', scientificName: 'Dendroaspis polylepis', rank: 'species' },
                        { id: 'dendroaspis-angusticeps', name: 'Eastern Green Mamba', scientificName: 'Dendroaspis angusticeps', rank: 'species' }
                      ]
                    },
                    { id: 'micrurus', name: 'Coral Snakes', scientificName: 'Micrurus', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'micrurus-fulvius', name: 'Eastern Coral Snake', scientificName: 'Micrurus fulvius', rank: 'species' }
                      ]
                    },
                    { id: 'bungarus', name: 'Kraits', scientificName: 'Bungarus', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'bungarus-caeruleus', name: 'Common Krait', scientificName: 'Bungarus caeruleus', rank: 'species' },
                        { id: 'bungarus-fasciatus', name: 'Banded Krait', scientificName: 'Bungarus fasciatus', rank: 'species' }
                      ]
                    },
                    { id: 'oxyuranus', name: 'Taipans', scientificName: 'Oxyuranus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'oxyuranus-scutellatus', name: 'Coastal Taipan', scientificName: 'Oxyuranus scutellatus', rank: 'species' },
                        { id: 'oxyuranus-microlepidotus', name: 'Inland Taipan', scientificName: 'Oxyuranus microlepidotus', rank: 'species' }
                      ]
                    },
                    { id: 'notechis', name: 'Tiger Snakes', scientificName: 'Notechis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'notechis-scutatus', name: 'Tiger Snake', scientificName: 'Notechis scutatus', rank: 'species' }
                      ]
                    },
                    { id: 'laticauda', name: 'Sea Kraits', scientificName: 'Laticauda', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'laticauda-colubrina', name: 'Banded Sea Krait', scientificName: 'Laticauda colubrina', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pythonidae', name: 'Pythons', scientificName: 'Pythonidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'python-genus', name: 'Pythons', scientificName: 'Python', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'python-reticulatus', name: 'Reticulated Python', scientificName: 'Malayopython reticulatus', rank: 'species' },
                        { id: 'python-molurus', name: 'Indian Python', scientificName: 'Python molurus', rank: 'species' },
                        { id: 'python-bivittatus', name: 'Burmese Python', scientificName: 'Python bivittatus', rank: 'species' },
                        { id: 'python-regius', name: 'Ball Python', scientificName: 'Python regius', rank: 'species' },
                        { id: 'python-sebae', name: 'African Rock Python', scientificName: 'Python sebae', rank: 'species' }
                      ]
                    },
                    { id: 'morelia', name: 'Tree Pythons', scientificName: 'Morelia', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'morelia-viridis', name: 'Green Tree Python', scientificName: 'Morelia viridis', rank: 'species' },
                        { id: 'morelia-spilota', name: 'Carpet Python', scientificName: 'Morelia spilota', rank: 'species' }
                      ]
                    },
                    { id: 'antaresia', name: 'Children\'s Pythons', scientificName: 'Antaresia', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'antaresia-childreni', name: 'Children\'s Python', scientificName: 'Antaresia childreni', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'boidae', name: 'Boas', scientificName: 'Boidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'boa', name: 'True Boas', scientificName: 'Boa', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'boa-constrictor', name: 'Boa Constrictor', scientificName: 'Boa constrictor', rank: 'species' }
                      ]
                    },
                    { id: 'eunectes', name: 'Anacondas', scientificName: 'Eunectes', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'eunectes-murinus', name: 'Green Anaconda', scientificName: 'Eunectes murinus', rank: 'species' },
                        { id: 'eunectes-notaeus', name: 'Yellow Anaconda', scientificName: 'Eunectes notaeus', rank: 'species' }
                      ]
                    },
                    { id: 'corallus', name: 'Tree Boas', scientificName: 'Corallus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'corallus-caninus', name: 'Emerald Tree Boa', scientificName: 'Corallus caninus', rank: 'species' }
                      ]
                    }
                  ]
                },
                // Suborder Lacertilia (Lizards)
                { id: 'gekkonidae', name: 'Geckos', scientificName: 'Gekkonidae', rank: 'family', speciesCount: 950,
                  children: [
                    { id: 'gekko', name: 'True Geckos', scientificName: 'Gekko', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'gekko-gecko', name: 'Tokay Gecko', scientificName: 'Gekko gecko', rank: 'species' }
                      ]
                    },
                    { id: 'eublepharis', name: 'Leopard Geckos', scientificName: 'Eublepharis', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'eublepharis-macularius', name: 'Leopard Gecko', scientificName: 'Eublepharis macularius', rank: 'species' }
                      ]
                    },
                    { id: 'correlophus', name: 'Crested Geckos', scientificName: 'Correlophus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'correlophus-ciliatus', name: 'Crested Gecko', scientificName: 'Correlophus ciliatus', rank: 'species' }
                      ]
                    },
                    { id: 'phelsuma', name: 'Day Geckos', scientificName: 'Phelsuma', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'phelsuma-madagascariensis', name: 'Madagascar Day Gecko', scientificName: 'Phelsuma madagascariensis', rank: 'species' }
                      ]
                    },
                    { id: 'rhacodactylus', name: 'Giant Geckos', scientificName: 'Rhacodactylus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'rhacodactylus-leachianus', name: 'New Caledonian Giant Gecko', scientificName: 'Rhacodactylus leachianus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'iguanidae', name: 'Iguanas', scientificName: 'Iguanidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'iguana', name: 'Green Iguanas', scientificName: 'Iguana', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'iguana-iguana', name: 'Green Iguana', scientificName: 'Iguana iguana', rank: 'species' }
                      ]
                    },
                    { id: 'amblyrhynchus', name: 'Marine Iguanas', scientificName: 'Amblyrhynchus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'amblyrhynchus-cristatus', name: 'Marine Iguana', scientificName: 'Amblyrhynchus cristatus', rank: 'species' }
                      ]
                    },
                    { id: 'cyclura', name: 'Rock Iguanas', scientificName: 'Cyclura', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'cyclura-cornuta', name: 'Rhinoceros Iguana', scientificName: 'Cyclura cornuta', rank: 'species' }
                      ]
                    },
                    { id: 'conolophus', name: 'Galápagos Land Iguanas', scientificName: 'Conolophus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'conolophus-subcristatus', name: 'Galápagos Land Iguana', scientificName: 'Conolophus subcristatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'agamidae', name: 'Agamids', scientificName: 'Agamidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'pogona', name: 'Bearded Dragons', scientificName: 'Pogona', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'pogona-vitticeps', name: 'Central Bearded Dragon', scientificName: 'Pogona vitticeps', rank: 'species' }
                      ]
                    },
                    { id: 'chlamydosaurus', name: 'Frilled Lizards', scientificName: 'Chlamydosaurus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'chlamydosaurus-kingii', name: 'Frilled-neck Lizard', scientificName: 'Chlamydosaurus kingii', rank: 'species' }
                      ]
                    },
                    { id: 'draco', name: 'Flying Lizards', scientificName: 'Draco', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'draco-volans', name: 'Common Flying Dragon', scientificName: 'Draco volans', rank: 'species' }
                      ]
                    },
                    { id: 'moloch', name: 'Thorny Devils', scientificName: 'Moloch', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'moloch-horridus', name: 'Thorny Devil', scientificName: 'Moloch horridus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'varanidae', name: 'Monitor Lizards', scientificName: 'Varanidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'varanus', name: 'Monitors', scientificName: 'Varanus', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'varanus-komodoensis', name: 'Komodo Dragon', scientificName: 'Varanus komodoensis', rank: 'species' },
                        { id: 'varanus-salvator', name: 'Water Monitor', scientificName: 'Varanus salvator', rank: 'species' },
                        { id: 'varanus-varius', name: 'Lace Monitor', scientificName: 'Varanus varius', rank: 'species' },
                        { id: 'varanus-niloticus', name: 'Nile Monitor', scientificName: 'Varanus niloticus', rank: 'species' },
                        { id: 'varanus-exanthematicus', name: 'Savannah Monitor', scientificName: 'Varanus exanthematicus', rank: 'species' },
                        { id: 'varanus-giganteus', name: 'Perentie', scientificName: 'Varanus giganteus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chamaeleonidae', name: 'Chameleons', scientificName: 'Chamaeleonidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'chamaeleo', name: 'Common Chameleons', scientificName: 'Chamaeleo', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'chamaeleo-calyptratus', name: 'Veiled Chameleon', scientificName: 'Chamaeleo calyptratus', rank: 'species' },
                        { id: 'chamaeleo-chamaeleon', name: 'Common Chameleon', scientificName: 'Chamaeleo chamaeleon', rank: 'species' }
                      ]
                    },
                    { id: 'furcifer', name: 'Malagasy Chameleons', scientificName: 'Furcifer', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'furcifer-pardalis', name: 'Panther Chameleon', scientificName: 'Furcifer pardalis', rank: 'species' },
                        { id: 'furcifer-oustaleti', name: 'Oustalet\'s Chameleon', scientificName: 'Furcifer oustaleti', rank: 'species' }
                      ]
                    },
                    { id: 'brookesia', name: 'Leaf Chameleons', scientificName: 'Brookesia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'brookesia-micra', name: 'Nosy Hara Leaf Chameleon', scientificName: 'Brookesia micra', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scincidae', name: 'Skinks', scientificName: 'Scincidae', rank: 'family', speciesCount: 1600,
                  children: [
                    { id: 'tiliqua', name: 'Blue-tongued Skinks', scientificName: 'Tiliqua', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'tiliqua-scincoides', name: 'Eastern Blue-tongued Skink', scientificName: 'Tiliqua scincoides', rank: 'species' }
                      ]
                    },
                    { id: 'eumeces', name: 'Skinks', scientificName: 'Plestiodon', rank: 'genus', speciesCount: 43,
                      children: [
                        { id: 'plestiodon-fasciatus', name: 'Five-lined Skink', scientificName: 'Plestiodon fasciatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lacertidae', name: 'Wall Lizards', scientificName: 'Lacertidae', rank: 'family', speciesCount: 320,
                  children: [
                    { id: 'lacerta', name: 'Green Lizards', scientificName: 'Lacerta', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'lacerta-agilis', name: 'Sand Lizard', scientificName: 'Lacerta agilis', rank: 'species' },
                        { id: 'lacerta-viridis', name: 'European Green Lizard', scientificName: 'Lacerta viridis', rank: 'species' }
                      ]
                    },
                    { id: 'podarcis', name: 'Wall Lizards', scientificName: 'Podarcis', rank: 'genus', speciesCount: 24,
                      children: [
                        { id: 'podarcis-muralis', name: 'Common Wall Lizard', scientificName: 'Podarcis muralis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'teiidae', name: 'Tegus & Whiptails', scientificName: 'Teiidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'salvator', name: 'Tegus', scientificName: 'Salvator', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'salvator-merianae', name: 'Argentine Black and White Tegu', scientificName: 'Salvator merianae', rank: 'species' }
                      ]
                    },
                    { id: 'aspidoscelis', name: 'Whiptail Lizards', scientificName: 'Aspidoscelis', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'aspidoscelis-sexlineatus', name: 'Six-lined Racerunner', scientificName: 'Aspidoscelis sexlineatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'helodermatidae', name: 'Venomous Lizards', scientificName: 'Helodermatidae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'heloderma', name: 'Gila Monsters', scientificName: 'Heloderma', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'heloderma-suspectum', name: 'Gila Monster', scientificName: 'Heloderma suspectum', rank: 'species' },
                        { id: 'heloderma-horridum', name: 'Mexican Beaded Lizard', scientificName: 'Heloderma horridum', rank: 'species' }
                      ]
                    }
                  ]
                },
                // Additional lizard families
                { id: 'anguidae', name: 'Glass Lizards', scientificName: 'Anguidae', rank: 'family', speciesCount: 75,
                  children: [
                    { id: 'ophisaurus', name: 'Glass Lizards', scientificName: 'Ophisaurus', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'ophisaurus-ventralis', name: 'Eastern Glass Lizard', scientificName: 'Ophisaurus ventralis', rank: 'species' },
                        { id: 'ophisaurus-attenuatus', name: 'Slender Glass Lizard', scientificName: 'Ophisaurus attenuatus', rank: 'species' }
                      ]
                    },
                    { id: 'anguis', name: 'Slowworms', scientificName: 'Anguis', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'anguis-fragilis', name: 'Slowworm', scientificName: 'Anguis fragilis', rank: 'species' }
                      ]
                    },
                    { id: 'pseudopus', name: 'Sheltopusiks', scientificName: 'Pseudopus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pseudopus-apodus', name: 'Sheltopusik', scientificName: 'Pseudopus apodus', rank: 'species' }
                      ]
                    },
                    { id: 'elgaria', name: 'Alligator Lizards', scientificName: 'Elgaria', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'elgaria-multicarinata', name: 'Southern Alligator Lizard', scientificName: 'Elgaria multicarinata', rank: 'species' },
                        { id: 'elgaria-coerulea', name: 'Northern Alligator Lizard', scientificName: 'Elgaria coerulea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'amphisbaenidae', name: 'Worm Lizards', scientificName: 'Amphisbaenidae', rank: 'family', speciesCount: 180,
                  children: [
                    { id: 'amphisbaena', name: 'Worm Lizards', scientificName: 'Amphisbaena', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'amphisbaena-alba', name: 'White Worm Lizard', scientificName: 'Amphisbaena alba', rank: 'species' },
                        { id: 'amphisbaena-fuliginosa', name: 'Speckled Worm Lizard', scientificName: 'Amphisbaena fuliginosa', rank: 'species' }
                      ]
                    },
                    { id: 'blanus', name: 'Mediterranean Worm Lizards', scientificName: 'Blanus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'blanus-cinereus', name: 'Iberian Worm Lizard', scientificName: 'Blanus cinereus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bipedidae', name: 'Two-legged Worm Lizards', scientificName: 'Bipedidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'bipes', name: 'Ajolotes', scientificName: 'Bipes', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'bipes-biporus', name: 'Five-toed Worm Lizard', scientificName: 'Bipes biporus', rank: 'species' },
                        { id: 'bipes-canaliculatus', name: 'Four-toed Worm Lizard', scientificName: 'Bipes canaliculatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phrynosomatidae', name: 'North American Spiny Lizards', scientificName: 'Phrynosomatidae', rank: 'family', speciesCount: 140,
                  children: [
                    { id: 'phrynosoma', name: 'Horned Lizards', scientificName: 'Phrynosoma', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'phrynosoma-cornutum', name: 'Texas Horned Lizard', scientificName: 'Phrynosoma cornutum', rank: 'species' },
                        { id: 'phrynosoma-platyrhinos', name: 'Desert Horned Lizard', scientificName: 'Phrynosoma platyrhinos', rank: 'species' },
                        { id: 'phrynosoma-solare', name: 'Regal Horned Lizard', scientificName: 'Phrynosoma solare', rank: 'species' }
                      ]
                    },
                    { id: 'sceloporus', name: 'Spiny Lizards', scientificName: 'Sceloporus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'sceloporus-undulatus', name: 'Eastern Fence Lizard', scientificName: 'Sceloporus undulatus', rank: 'species' },
                        { id: 'sceloporus-occidentalis', name: 'Western Fence Lizard', scientificName: 'Sceloporus occidentalis', rank: 'species' },
                        { id: 'sceloporus-magister', name: 'Desert Spiny Lizard', scientificName: 'Sceloporus magister', rank: 'species' }
                      ]
                    },
                    { id: 'uma', name: 'Fringe-toed Lizards', scientificName: 'Uma', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'uma-notata', name: 'Colorado Desert Fringe-toed Lizard', scientificName: 'Uma notata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cordylidae', name: 'Girdled Lizards', scientificName: 'Cordylidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'cordylus', name: 'Girdled Lizards', scientificName: 'Cordylus', rank: 'genus', speciesCount: 21,
                      children: [
                        { id: 'cordylus-cataphractus', name: 'Armadillo Girdled Lizard', scientificName: 'Ouroborus cataphractus', rank: 'species' }
                      ]
                    },
                    { id: 'smaug', name: 'Dragon Lizards', scientificName: 'Smaug', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'smaug-giganteus', name: 'Giant Girdled Lizard', scientificName: 'Smaug giganteus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'xantusiidae', name: 'Night Lizards', scientificName: 'Xantusiidae', rank: 'family', speciesCount: 35,
                  children: [
                    { id: 'xantusia', name: 'Night Lizards', scientificName: 'Xantusia', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'xantusia-vigilis', name: 'Desert Night Lizard', scientificName: 'Xantusia vigilis', rank: 'species' },
                        { id: 'xantusia-riversiana', name: 'Island Night Lizard', scientificName: 'Xantusia riversiana', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'xenosauridae', name: 'Knob-scaled Lizards', scientificName: 'Xenosauridae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'xenosaurus', name: 'Knob-scaled Lizards', scientificName: 'Xenosaurus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'xenosaurus-grandis', name: 'Knob-scaled Lizard', scientificName: 'Xenosaurus grandis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'diplodactylidae', name: 'Australasian Geckos', scientificName: 'Diplodactylidae', rank: 'family', speciesCount: 140,
                  children: [
                    { id: 'nephrurus', name: 'Knob-tailed Geckos', scientificName: 'Nephrurus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'nephrurus-levis', name: 'Smooth Knob-tailed Gecko', scientificName: 'Nephrurus levis', rank: 'species' }
                      ]
                    },
                    { id: 'oedura', name: 'Velvet Geckos', scientificName: 'Oedura', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'oedura-marmorata', name: 'Marbled Velvet Gecko', scientificName: 'Oedura marmorata', rank: 'species' }
                      ]
                    }
                  ]
                },
                // Additional snake families
                { id: 'lamprophiidae', name: 'Lamprophiids', scientificName: 'Lamprophiidae', rank: 'family', speciesCount: 320,
                  children: [
                    { id: 'boaedon', name: 'African House Snakes', scientificName: 'Boaedon', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'boaedon-fuliginosus', name: 'African House Snake', scientificName: 'Boaedon fuliginosus', rank: 'species' }
                      ]
                    },
                    { id: 'psammophis', name: 'Sand Snakes', scientificName: 'Psammophis', rank: 'genus', speciesCount: 34,
                      children: [
                        { id: 'psammophis-sibilans', name: 'Hissing Sand Snake', scientificName: 'Psammophis sibilans', rank: 'species' }
                      ]
                    },
                    { id: 'atractaspis', name: 'Mole Vipers', scientificName: 'Atractaspis', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'atractaspis-bibronii', name: 'Bibron\'s Stiletto Snake', scientificName: 'Atractaspis bibronii', rank: 'species' }
                      ]
                    },
                    { id: 'malpolon', name: 'Montpellier Snakes', scientificName: 'Malpolon', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'malpolon-monspessulanus', name: 'Montpellier Snake', scientificName: 'Malpolon monspessulanus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dipsadidae', name: 'Rear-fanged Snakes', scientificName: 'Dipsadidae', rank: 'family', speciesCount: 750,
                  children: [
                    { id: 'heterodon', name: 'Hognose Snakes', scientificName: 'Heterodon', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'heterodon-nasicus', name: 'Western Hognose Snake', scientificName: 'Heterodon nasicus', rank: 'species' },
                        { id: 'heterodon-platirhinos', name: 'Eastern Hognose Snake', scientificName: 'Heterodon platirhinos', rank: 'species' }
                      ]
                    },
                    { id: 'diadophis', name: 'Ring-necked Snakes', scientificName: 'Diadophis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'diadophis-punctatus', name: 'Ring-necked Snake', scientificName: 'Diadophis punctatus', rank: 'species' }
                      ]
                    },
                    { id: 'storeria', name: 'Brown Snakes', scientificName: 'Storeria', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'storeria-dekayi', name: 'DeKay\'s Brown Snake', scientificName: 'Storeria dekayi', rank: 'species' }
                      ]
                    },
                    { id: 'leptodeira', name: 'Cat-eyed Snakes', scientificName: 'Leptodeira', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'leptodeira-septentrionalis', name: 'Northern Cat-eyed Snake', scientificName: 'Leptodeira septentrionalis', rank: 'species' }
                      ]
                    },
                    { id: 'imantodes', name: 'Blunt-headed Tree Snakes', scientificName: 'Imantodes', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'imantodes-cenchoa', name: 'Common Blunt-headed Tree Snake', scientificName: 'Imantodes cenchoa', rank: 'species' }
                      ]
                    },
                    { id: 'philodryas', name: 'Green Racers', scientificName: 'Philodryas', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'philodryas-olfersii', name: 'Lichtenstein\'s Green Racer', scientificName: 'Philodryas olfersii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'natricidae', name: 'Water Snakes', scientificName: 'Natricidae', rank: 'family', speciesCount: 250,
                  children: [
                    { id: 'thamnophis-natricidae', name: 'Garter Snakes', scientificName: 'Thamnophis', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'thamnophis-marcianus', name: 'Checkered Garter Snake', scientificName: 'Thamnophis marcianus', rank: 'species' },
                        { id: 'thamnophis-radix', name: 'Plains Garter Snake', scientificName: 'Thamnophis radix', rank: 'species' }
                      ]
                    },
                    { id: 'regina', name: 'Crayfish Snakes', scientificName: 'Regina', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'regina-septemvittata', name: 'Queen Snake', scientificName: 'Regina septemvittata', rank: 'species' }
                      ]
                    },
                    { id: 'rhabdophis', name: 'Keelback Snakes', scientificName: 'Rhabdophis', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'rhabdophis-tigrinus', name: 'Tiger Keelback', scientificName: 'Rhabdophis tigrinus', rank: 'species' }
                      ]
                    },
                    { id: 'afronatrix', name: 'African Water Snakes', scientificName: 'Afronatrix', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'afronatrix-anoscopus', name: 'African Brown Water Snake', scientificName: 'Afronatrix anoscopus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'homalopsidae', name: 'Mud Snakes', scientificName: 'Homalopsidae', rank: 'family', speciesCount: 55,
                  children: [
                    { id: 'homalopsis', name: 'Masked Water Snakes', scientificName: 'Homalopsis', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'homalopsis-buccata', name: 'Puff-faced Water Snake', scientificName: 'Homalopsis buccata', rank: 'species' }
                      ]
                    },
                    { id: 'cerberus', name: 'Dog-faced Water Snakes', scientificName: 'Cerberus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'cerberus-rynchops', name: 'Bockadam', scientificName: 'Cerberus rynchops', rank: 'species' }
                      ]
                    },
                    { id: 'enhydris', name: 'Rainbow Water Snakes', scientificName: 'Enhydris', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'enhydris-enhydris', name: 'Rainbow Water Snake', scientificName: 'Enhydris enhydris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'acrochordidae', name: 'File Snakes', scientificName: 'Acrochordidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'acrochordus', name: 'File Snakes', scientificName: 'Acrochordus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'acrochordus-javanicus', name: 'Javan File Snake', scientificName: 'Acrochordus javanicus', rank: 'species' },
                        { id: 'acrochordus-granulatus', name: 'Little File Snake', scientificName: 'Acrochordus granulatus', rank: 'species' },
                        { id: 'acrochordus-arafurae', name: 'Arafura File Snake', scientificName: 'Acrochordus arafurae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'uropeltidae', name: 'Shield-tail Snakes', scientificName: 'Uropeltidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'uropeltis', name: 'Shield-tails', scientificName: 'Uropeltis', rank: 'genus', speciesCount: 26,
                      children: [
                        { id: 'uropeltis-ocellata', name: 'Ocellated Shield-tail', scientificName: 'Uropeltis ocellata', rank: 'species' }
                      ]
                    },
                    { id: 'rhinophis', name: 'Rough-nosed Shield-tails', scientificName: 'Rhinophis', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'rhinophis-oxyrhynchus', name: 'Schneider\'s Shieldtail', scientificName: 'Rhinophis oxyrhynchus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'loxocemidae', name: 'Mexican Burrowing Pythons', scientificName: 'Loxocemidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'loxocemus', name: 'Mexican Burrowing Pythons', scientificName: 'Loxocemus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'loxocemus-bicolor', name: 'Mexican Burrowing Python', scientificName: 'Loxocemus bicolor', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tropidophiidae', name: 'Dwarf Boas', scientificName: 'Tropidophiidae', rank: 'family', speciesCount: 34,
                  children: [
                    { id: 'tropidophis', name: 'Dwarf Boas', scientificName: 'Tropidophis', rank: 'genus', speciesCount: 32,
                      children: [
                        { id: 'tropidophis-melanurus', name: 'Cuban Dwarf Boa', scientificName: 'Tropidophis melanurus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'xenopeltidae', name: 'Sunbeam Snakes', scientificName: 'Xenopeltidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'xenopeltis', name: 'Sunbeam Snakes', scientificName: 'Xenopeltis', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'xenopeltis-unicolor', name: 'Sunbeam Snake', scientificName: 'Xenopeltis unicolor', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cylindrophiidae', name: 'Asian Pipe Snakes', scientificName: 'Cylindrophiidae', rank: 'family', speciesCount: 14,
                  children: [
                    { id: 'cylindrophis', name: 'Asian Pipe Snakes', scientificName: 'Cylindrophis', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'cylindrophis-ruffus', name: 'Red-tailed Pipe Snake', scientificName: 'Cylindrophis ruffus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'anomalepididae', name: 'Primitive Blind Snakes', scientificName: 'Anomalepididae', rank: 'family', speciesCount: 18,
                  children: [
                    { id: 'liotyphlops', name: 'Worm Snakes', scientificName: 'Liotyphlops', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'liotyphlops-albirostris', name: 'White-snouted Worm Snake', scientificName: 'Liotyphlops albirostris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'typhlopidae', name: 'Blind Snakes', scientificName: 'Typhlopidae', rank: 'family', speciesCount: 260,
                  children: [
                    { id: 'indotyphlops', name: 'Brahminy Blind Snakes', scientificName: 'Indotyphlops', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'indotyphlops-braminus', name: 'Brahminy Blind Snake', scientificName: 'Indotyphlops braminus', rank: 'species' }
                      ]
                    },
                    { id: 'typhlops', name: 'Typical Blind Snakes', scientificName: 'Typhlops', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'typhlops-lumbricalis', name: 'Cuban Blind Snake', scientificName: 'Typhlops lumbricalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leptotyphlopidae', name: 'Thread Snakes', scientificName: 'Leptotyphlopidae', rank: 'family', speciesCount: 140,
                  children: [
                    { id: 'leptotyphlops', name: 'Thread Snakes', scientificName: 'Leptotyphlops', rank: 'genus', speciesCount: 86,
                      children: [
                        { id: 'leptotyphlops-dulcis', name: 'Texas Blind Snake', scientificName: 'Rena dulcis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: TESTUDINES
            {
              id: 'testudines',
              name: 'Turtles & Tortoises',
              scientificName: 'Testudines',
              rank: 'order',
              speciesCount: 360,
              children: [
                { id: 'testudinidae', name: 'Tortoises', scientificName: 'Testudinidae', rank: 'family', speciesCount: 55,
                  children: [
                    { id: 'aldabrachelys', name: 'Aldabra Tortoises', scientificName: 'Aldabrachelys', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'aldabrachelys-gigantea', name: 'Aldabra Giant Tortoise', scientificName: 'Aldabrachelys gigantea', rank: 'species' }
                      ]
                    },
                    { id: 'chelonoidis', name: 'South American Tortoises', scientificName: 'Chelonoidis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'chelonoidis-niger', name: 'Galápagos Giant Tortoise', scientificName: 'Chelonoidis niger', rank: 'species' },
                        { id: 'chelonoidis-carbonarius', name: 'Red-footed Tortoise', scientificName: 'Chelonoidis carbonarius', rank: 'species' }
                      ]
                    },
                    { id: 'testudo', name: 'Mediterranean Tortoises', scientificName: 'Testudo', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'testudo-hermanni', name: 'Hermann\'s Tortoise', scientificName: 'Testudo hermanni', rank: 'species' },
                        { id: 'testudo-graeca', name: 'Greek Tortoise', scientificName: 'Testudo graeca', rank: 'species' },
                        { id: 'testudo-horsfieldii', name: 'Russian Tortoise', scientificName: 'Testudo horsfieldii', rank: 'species' }
                      ]
                    },
                    { id: 'gopherus', name: 'Gopher Tortoises', scientificName: 'Gopherus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'gopherus-polyphemus', name: 'Gopher Tortoise', scientificName: 'Gopherus polyphemus', rank: 'species' },
                        { id: 'gopherus-agassizii', name: 'Desert Tortoise', scientificName: 'Gopherus agassizii', rank: 'species' }
                      ]
                    },
                    { id: 'geochelone', name: 'Star Tortoises', scientificName: 'Geochelone', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'geochelone-elegans', name: 'Indian Star Tortoise', scientificName: 'Geochelone elegans', rank: 'species' },
                        { id: 'geochelone-sulcata', name: 'African Spurred Tortoise', scientificName: 'Centrochelys sulcata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cheloniidae', name: 'Sea Turtles', scientificName: 'Cheloniidae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'chelonia', name: 'Green Turtles', scientificName: 'Chelonia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'chelonia-mydas', name: 'Green Sea Turtle', scientificName: 'Chelonia mydas', rank: 'species' }
                      ]
                    },
                    { id: 'caretta', name: 'Loggerhead Turtles', scientificName: 'Caretta', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'caretta-caretta', name: 'Loggerhead Sea Turtle', scientificName: 'Caretta caretta', rank: 'species' }
                      ]
                    },
                    { id: 'eretmochelys', name: 'Hawksbill Turtles', scientificName: 'Eretmochelys', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'eretmochelys-imbricata', name: 'Hawksbill Sea Turtle', scientificName: 'Eretmochelys imbricata', rank: 'species' }
                      ]
                    },
                    { id: 'lepidochelys', name: 'Ridley Sea Turtles', scientificName: 'Lepidochelys', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'lepidochelys-olivacea', name: 'Olive Ridley Sea Turtle', scientificName: 'Lepidochelys olivacea', rank: 'species' },
                        { id: 'lepidochelys-kempii', name: 'Kemp\'s Ridley Sea Turtle', scientificName: 'Lepidochelys kempii', rank: 'species' }
                      ]
                    },
                    { id: 'natator', name: 'Flatback Turtles', scientificName: 'Natator', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'natator-depressus', name: 'Flatback Sea Turtle', scientificName: 'Natator depressus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dermochelyidae', name: 'Leatherback Turtles', scientificName: 'Dermochelyidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'dermochelys', name: 'Leatherbacks', scientificName: 'Dermochelys', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'dermochelys-coriacea', name: 'Leatherback Sea Turtle', scientificName: 'Dermochelys coriacea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'emydidae', name: 'Pond Turtles', scientificName: 'Emydidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'trachemys', name: 'Slider Turtles', scientificName: 'Trachemys', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'trachemys-scripta', name: 'Pond Slider', scientificName: 'Trachemys scripta', rank: 'species' }
                      ]
                    },
                    { id: 'chrysemys', name: 'Painted Turtles', scientificName: 'Chrysemys', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'chrysemys-picta', name: 'Painted Turtle', scientificName: 'Chrysemys picta', rank: 'species' }
                      ]
                    },
                    { id: 'terrapene', name: 'Box Turtles', scientificName: 'Terrapene', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'terrapene-carolina', name: 'Eastern Box Turtle', scientificName: 'Terrapene carolina', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chelydridae', name: 'Snapping Turtles', scientificName: 'Chelydridae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'chelydra', name: 'Snapping Turtles', scientificName: 'Chelydra', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'chelydra-serpentina', name: 'Common Snapping Turtle', scientificName: 'Chelydra serpentina', rank: 'species' }
                      ]
                    },
                    { id: 'macrochelys', name: 'Alligator Snapping Turtles', scientificName: 'Macrochelys', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'macrochelys-temminckii', name: 'Alligator Snapping Turtle', scientificName: 'Macrochelys temminckii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'trionychidae', name: 'Softshell Turtles', scientificName: 'Trionychidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'apalone', name: 'North American Softshells', scientificName: 'Apalone', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'apalone-spinifera', name: 'Spiny Softshell Turtle', scientificName: 'Apalone spinifera', rank: 'species' },
                        { id: 'apalone-ferox', name: 'Florida Softshell Turtle', scientificName: 'Apalone ferox', rank: 'species' },
                        { id: 'apalone-mutica', name: 'Smooth Softshell Turtle', scientificName: 'Apalone mutica', rank: 'species' }
                      ]
                    },
                    { id: 'pelodiscus', name: 'Chinese Softshells', scientificName: 'Pelodiscus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'pelodiscus-sinensis', name: 'Chinese Softshell Turtle', scientificName: 'Pelodiscus sinensis', rank: 'species' }
                      ]
                    },
                    { id: 'chitra', name: 'Narrow-headed Softshells', scientificName: 'Chitra', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'chitra-indica', name: 'Indian Narrow-headed Softshell Turtle', scientificName: 'Chitra indica', rank: 'species' }
                      ]
                    },
                    { id: 'rafetus', name: 'Giant Softshells', scientificName: 'Rafetus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'rafetus-swinhoei', name: 'Yangtze Giant Softshell Turtle', scientificName: 'Rafetus swinhoei', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'kinosternidae', name: 'Mud & Musk Turtles', scientificName: 'Kinosternidae', rank: 'family', speciesCount: 27,
                  children: [
                    { id: 'kinosternon', name: 'Mud Turtles', scientificName: 'Kinosternon', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'kinosternon-subrubrum', name: 'Eastern Mud Turtle', scientificName: 'Kinosternon subrubrum', rank: 'species' },
                        { id: 'kinosternon-flavescens', name: 'Yellow Mud Turtle', scientificName: 'Kinosternon flavescens', rank: 'species' },
                        { id: 'kinosternon-baurii', name: 'Striped Mud Turtle', scientificName: 'Kinosternon baurii', rank: 'species' }
                      ]
                    },
                    { id: 'sternotherus', name: 'Musk Turtles', scientificName: 'Sternotherus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'sternotherus-odoratus', name: 'Common Musk Turtle', scientificName: 'Sternotherus odoratus', rank: 'species' },
                        { id: 'sternotherus-carinatus', name: 'Razorback Musk Turtle', scientificName: 'Sternotherus carinatus', rank: 'species' }
                      ]
                    },
                    { id: 'claudius', name: 'Narrow-bridged Musk Turtles', scientificName: 'Claudius', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'claudius-angustatus', name: 'Narrow-bridged Musk Turtle', scientificName: 'Claudius angustatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'podocnemididae', name: 'Madagascan Big-headed & American Side-necked Turtles', scientificName: 'Podocnemididae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'podocnemis', name: 'South American River Turtles', scientificName: 'Podocnemis', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'podocnemis-expansa', name: 'Giant South American River Turtle', scientificName: 'Podocnemis expansa', rank: 'species' },
                        { id: 'podocnemis-unifilis', name: 'Yellow-spotted River Turtle', scientificName: 'Podocnemis unifilis', rank: 'species' }
                      ]
                    },
                    { id: 'erymnochelys', name: 'Madagascan Big-headed Turtles', scientificName: 'Erymnochelys', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'erymnochelys-madagascariensis', name: 'Madagascan Big-headed Turtle', scientificName: 'Erymnochelys madagascariensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chelidae', name: 'Austro-American Side-necked Turtles', scientificName: 'Chelidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'chelus', name: 'Mata Mata Turtles', scientificName: 'Chelus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'chelus-fimbriata', name: 'Mata Mata', scientificName: 'Chelus fimbriata', rank: 'species' }
                      ]
                    },
                    { id: 'phrynops', name: 'Toad-headed Turtles', scientificName: 'Phrynops', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'phrynops-geoffroanus', name: 'Geoffroy\'s Side-necked Turtle', scientificName: 'Phrynops geoffroanus', rank: 'species' }
                      ]
                    },
                    { id: 'chelodina', name: 'Snake-necked Turtles', scientificName: 'Chelodina', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'chelodina-longicollis', name: 'Eastern Long-necked Turtle', scientificName: 'Chelodina longicollis', rank: 'species' },
                        { id: 'chelodina-oblonga', name: 'Oblong Turtle', scientificName: 'Chelodina oblonga', rank: 'species' }
                      ]
                    },
                    { id: 'elseya', name: 'Australian Snapping Turtles', scientificName: 'Elseya', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'elseya-dentata', name: 'Northern Snapping Turtle', scientificName: 'Elseya dentata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pelomedusidae', name: 'African Side-necked Turtles', scientificName: 'Pelomedusidae', rank: 'family', speciesCount: 18,
                  children: [
                    { id: 'pelomedusa', name: 'Helmeted Turtles', scientificName: 'Pelomedusa', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'pelomedusa-subrufa', name: 'African Helmeted Turtle', scientificName: 'Pelomedusa subrufa', rank: 'species' }
                      ]
                    },
                    { id: 'pelusios', name: 'African Mud Turtles', scientificName: 'Pelusios', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'pelusios-castaneus', name: 'West African Mud Turtle', scientificName: 'Pelusios castaneus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'geoemydidae', name: 'Asian River & Box Turtles', scientificName: 'Geoemydidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'cuora', name: 'Asian Box Turtles', scientificName: 'Cuora', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'cuora-amboinensis', name: 'Amboina Box Turtle', scientificName: 'Cuora amboinensis', rank: 'species' },
                        { id: 'cuora-flavomarginata', name: 'Yellow-margined Box Turtle', scientificName: 'Cuora flavomarginata', rank: 'species' }
                      ]
                    },
                    { id: 'mauremys', name: 'Mediterranean Pond Turtles', scientificName: 'Mauremys', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'mauremys-reevesii', name: 'Reeves\' Turtle', scientificName: 'Mauremys reevesii', rank: 'species' },
                        { id: 'mauremys-sinensis', name: 'Chinese Stripe-necked Turtle', scientificName: 'Mauremys sinensis', rank: 'species' }
                      ]
                    },
                    { id: 'batagur', name: 'River Terrapins', scientificName: 'Batagur', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'batagur-baska', name: 'Northern River Terrapin', scientificName: 'Batagur baska', rank: 'species' }
                      ]
                    },
                    { id: 'heosemys', name: 'Asian Leaf Turtles', scientificName: 'Heosemys', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'heosemys-spinosa', name: 'Spiny Turtle', scientificName: 'Heosemys spinosa', rank: 'species' }
                      ]
                    },
                    { id: 'callagur', name: 'Painted Terrapins', scientificName: 'Callagur', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'callagur-borneoensis', name: 'Painted Terrapin', scientificName: 'Callagur borneoensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'platysternidae', name: 'Big-headed Turtles', scientificName: 'Platysternidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'platysternon', name: 'Big-headed Turtles', scientificName: 'Platysternon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'platysternon-megacephalum', name: 'Big-headed Turtle', scientificName: 'Platysternon megacephalum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'carettochelyidae', name: 'Pig-nosed Turtles', scientificName: 'Carettochelyidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'carettochelys', name: 'Pig-nosed Turtles', scientificName: 'Carettochelys', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'carettochelys-insculpta', name: 'Pig-nosed Turtle', scientificName: 'Carettochelys insculpta', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CROCODILIA
            {
              id: 'crocodilia',
              name: 'Crocodilians',
              scientificName: 'Crocodilia',
              rank: 'order',
              speciesCount: 27,
              children: [
                { id: 'crocodylidae', name: 'Crocodiles', scientificName: 'Crocodylidae', rank: 'family', speciesCount: 14,
                  children: [
                    { id: 'crocodylus', name: 'True Crocodiles', scientificName: 'Crocodylus', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'crocodylus-niloticus', name: 'Nile Crocodile', scientificName: 'Crocodylus niloticus', rank: 'species' },
                        { id: 'crocodylus-porosus', name: 'Saltwater Crocodile', scientificName: 'Crocodylus porosus', rank: 'species' },
                        { id: 'crocodylus-acutus', name: 'American Crocodile', scientificName: 'Crocodylus acutus', rank: 'species' },
                        { id: 'crocodylus-palustris', name: 'Mugger Crocodile', scientificName: 'Crocodylus palustris', rank: 'species' },
                        { id: 'crocodylus-siamensis', name: 'Siamese Crocodile', scientificName: 'Crocodylus siamensis', rank: 'species' },
                        { id: 'crocodylus-intermedius', name: 'Orinoco Crocodile', scientificName: 'Crocodylus intermedius', rank: 'species' },
                        { id: 'crocodylus-mindorensis', name: 'Philippine Crocodile', scientificName: 'Crocodylus mindorensis', rank: 'species' },
                        { id: 'crocodylus-moreletii', name: 'Morelet\'s Crocodile', scientificName: 'Crocodylus moreletii', rank: 'species' },
                        { id: 'crocodylus-rhombifer', name: 'Cuban Crocodile', scientificName: 'Crocodylus rhombifer', rank: 'species' }
                      ]
                    },
                    { id: 'tomistoma', name: 'False Gharials', scientificName: 'Tomistoma', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'tomistoma-schlegelii', name: 'False Gharial', scientificName: 'Tomistoma schlegelii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'alligatoridae', name: 'Alligators & Caimans', scientificName: 'Alligatoridae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'alligator', name: 'Alligators', scientificName: 'Alligator', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'alligator-mississippiensis', name: 'American Alligator', scientificName: 'Alligator mississippiensis', rank: 'species' },
                        { id: 'alligator-sinensis', name: 'Chinese Alligator', scientificName: 'Alligator sinensis', rank: 'species' }
                      ]
                    },
                    { id: 'caiman', name: 'Caimans', scientificName: 'Caiman', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'caiman-crocodilus', name: 'Spectacled Caiman', scientificName: 'Caiman crocodilus', rank: 'species' },
                        { id: 'caiman-yacare', name: 'Yacaré Caiman', scientificName: 'Caiman yacare', rank: 'species' },
                        { id: 'caiman-latirostris', name: 'Broad-snouted Caiman', scientificName: 'Caiman latirostris', rank: 'species' }
                      ]
                    },
                    { id: 'melanosuchus', name: 'Black Caimans', scientificName: 'Melanosuchus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'melanosuchus-niger', name: 'Black Caiman', scientificName: 'Melanosuchus niger', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'gavialidae', name: 'Gharials', scientificName: 'Gavialidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'gavialis', name: 'Gharials', scientificName: 'Gavialis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'gavialis-gangeticus', name: 'Gharial', scientificName: 'Gavialis gangeticus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: RHYNCHOCEPHALIA
            {
              id: 'rhynchocephalia',
              name: 'Tuatara',
              scientificName: 'Rhynchocephalia',
              rank: 'order',
              speciesCount: 1,
              children: [
                { id: 'sphenodontidae', name: 'Tuataras', scientificName: 'Sphenodontidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'sphenodon', name: 'Tuataras', scientificName: 'Sphenodon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sphenodon-punctatus', name: 'Tuatara', scientificName: 'Sphenodon punctatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // CLASS: AMPHIBIA
        {
          id: 'amphibia',
          name: 'Amphibians',
          scientificName: 'Amphibia',
          rank: 'class',
          description: 'Cold-blooded vertebrates that live both in water and on land',
          speciesCount: 8000,
          children: [
            // ORDER: ANURA (Frogs & Toads)
            {
              id: 'anura',
              name: 'Frogs & Toads',
              scientificName: 'Anura',
              rank: 'order',
              speciesCount: 7000,
              children: [
                { id: 'bufonidae', name: 'True Toads', scientificName: 'Bufonidae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'bufo', name: 'Eurasian Toads', scientificName: 'Bufo', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'bufo-bufo', name: 'Common Toad', scientificName: 'Bufo bufo', rank: 'species' }
                      ]
                    },
                    { id: 'anaxyrus', name: 'North American Toads', scientificName: 'Anaxyrus', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'anaxyrus-americanus', name: 'American Toad', scientificName: 'Anaxyrus americanus', rank: 'species' },
                        { id: 'anaxyrus-fowleri', name: 'Fowler\'s Toad', scientificName: 'Anaxyrus fowleri', rank: 'species' }
                      ]
                    },
                    { id: 'rhinella', name: 'Cane Toads', scientificName: 'Rhinella', rank: 'genus', speciesCount: 92,
                      children: [
                        { id: 'rhinella-marina', name: 'Cane Toad', scientificName: 'Rhinella marina', rank: 'species' }
                      ]
                    },
                    { id: 'atelopus', name: 'Harlequin Toads', scientificName: 'Atelopus', rank: 'genus', speciesCount: 96,
                      children: [
                        { id: 'atelopus-zeteki', name: 'Panamanian Golden Frog', scientificName: 'Atelopus zeteki', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ranidae', name: 'True Frogs', scientificName: 'Ranidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'rana', name: 'Brown Frogs', scientificName: 'Rana', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'rana-temporaria', name: 'Common Frog', scientificName: 'Rana temporaria', rank: 'species' }
                      ]
                    },
                    { id: 'lithobates', name: 'American Water Frogs', scientificName: 'Lithobates', rank: 'genus', speciesCount: 55,
                      children: [
                        { id: 'lithobates-catesbeianus', name: 'American Bullfrog', scientificName: 'Lithobates catesbeianus', rank: 'species' },
                        { id: 'lithobates-pipiens', name: 'Northern Leopard Frog', scientificName: 'Lithobates pipiens', rank: 'species' },
                        { id: 'lithobates-sylvaticus', name: 'Wood Frog', scientificName: 'Lithobates sylvaticus', rank: 'species' }
                      ]
                    },
                    { id: 'pelophylax', name: 'Water Frogs', scientificName: 'Pelophylax', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'pelophylax-ridibundus', name: 'Marsh Frog', scientificName: 'Pelophylax ridibundus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dendrobatidae', name: 'Poison Dart Frogs', scientificName: 'Dendrobatidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'dendrobates', name: 'Poison Frogs', scientificName: 'Dendrobates', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'dendrobates-tinctorius', name: 'Dyeing Dart Frog', scientificName: 'Dendrobates tinctorius', rank: 'species' },
                        { id: 'dendrobates-leucomelas', name: 'Yellow-banded Poison Dart Frog', scientificName: 'Dendrobates leucomelas', rank: 'species' },
                        { id: 'dendrobates-auratus', name: 'Green and Black Poison Dart Frog', scientificName: 'Dendrobates auratus', rank: 'species' },
                        { id: 'dendrobates-azureus', name: 'Blue Poison Dart Frog', scientificName: 'Dendrobates tinctorius azureus', rank: 'species' }
                      ]
                    },
                    { id: 'phyllobates', name: 'Golden Poison Frogs', scientificName: 'Phyllobates', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'phyllobates-terribilis', name: 'Golden Poison Frog', scientificName: 'Phyllobates terribilis', rank: 'species' },
                        { id: 'phyllobates-bicolor', name: 'Black-legged Poison Frog', scientificName: 'Phyllobates bicolor', rank: 'species' },
                        { id: 'phyllobates-aurotaenia', name: 'Kokoe Poison Frog', scientificName: 'Phyllobates aurotaenia', rank: 'species' }
                      ]
                    },
                    { id: 'oophaga', name: 'Strawberry Poison Frogs', scientificName: 'Oophaga', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'oophaga-pumilio', name: 'Strawberry Poison-dart Frog', scientificName: 'Oophaga pumilio', rank: 'species' },
                        { id: 'oophaga-granulifera', name: 'Granular Poison Frog', scientificName: 'Oophaga granulifera', rank: 'species' }
                      ]
                    },
                    { id: 'ranitomeya', name: 'Thumbnail Poison Frogs', scientificName: 'Ranitomeya', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'ranitomeya-imitator', name: 'Mimic Poison Frog', scientificName: 'Ranitomeya imitator', rank: 'species' },
                        { id: 'ranitomeya-variabilis', name: 'Splash-back Poison Frog', scientificName: 'Ranitomeya variabilis', rank: 'species' }
                      ]
                    },
                    { id: 'epipedobates', name: 'Phantasmal Frogs', scientificName: 'Epipedobates', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'epipedobates-tricolor', name: 'Phantasmal Poison Frog', scientificName: 'Epipedobates tricolor', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hylidae', name: 'Tree Frogs', scientificName: 'Hylidae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'hyla', name: 'Holarctic Tree Frogs', scientificName: 'Hyla', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'hyla-arborea', name: 'European Tree Frog', scientificName: 'Hyla arborea', rank: 'species' }
                      ]
                    },
                    { id: 'dryophytes', name: 'North American Tree Frogs', scientificName: 'Dryophytes', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'dryophytes-versicolor', name: 'Gray Tree Frog', scientificName: 'Dryophytes versicolor', rank: 'species' },
                        { id: 'dryophytes-cinereus', name: 'Green Tree Frog', scientificName: 'Dryophytes cinereus', rank: 'species' }
                      ]
                    },
                    { id: 'agalychnis', name: 'Leaf Frogs', scientificName: 'Agalychnis', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'agalychnis-callidryas', name: 'Red-eyed Tree Frog', scientificName: 'Agalychnis callidryas', rank: 'species' },
                        { id: 'agalychnis-moreletii', name: 'Morelet\'s Tree Frog', scientificName: 'Agalychnis moreletii', rank: 'species' }
                      ]
                    },
                    { id: 'litoria', name: 'Australasian Tree Frogs', scientificName: 'Litoria', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'litoria-caerulea', name: 'White\'s Tree Frog', scientificName: 'Litoria caerulea', rank: 'species' }
                      ]
                    },
                    { id: 'phyllomedusa', name: 'Monkey Frogs', scientificName: 'Phyllomedusa', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'phyllomedusa-bicolor', name: 'Giant Monkey Frog', scientificName: 'Phyllomedusa bicolor', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pipidae', name: 'Tongueless Frogs', scientificName: 'Pipidae', rank: 'family', speciesCount: 41,
                  children: [
                    { id: 'xenopus', name: 'Clawed Frogs', scientificName: 'Xenopus', rank: 'genus', speciesCount: 29,
                      children: [
                        { id: 'xenopus-laevis', name: 'African Clawed Frog', scientificName: 'Xenopus laevis', rank: 'species' }
                      ]
                    },
                    { id: 'pipa', name: 'Surinam Toads', scientificName: 'Pipa', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'pipa-pipa', name: 'Surinam Toad', scientificName: 'Pipa pipa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'microhylidae', name: 'Narrow-mouthed Frogs', scientificName: 'Microhylidae', rank: 'family', speciesCount: 690,
                  children: [
                    { id: 'gastrophryne', name: 'Narrow-mouthed Toads', scientificName: 'Gastrophryne', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'gastrophryne-carolinensis', name: 'Eastern Narrow-mouthed Toad', scientificName: 'Gastrophryne carolinensis', rank: 'species' }
                      ]
                    },
                    { id: 'dyscophus', name: 'Tomato Frogs', scientificName: 'Dyscophus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'dyscophus-antongilii', name: 'Tomato Frog', scientificName: 'Dyscophus antongilii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ceratophryidae', name: 'Horned Frogs', scientificName: 'Ceratophryidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'ceratophrys', name: 'Pacman Frogs', scientificName: 'Ceratophrys', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'ceratophrys-ornata', name: 'Argentine Horned Frog', scientificName: 'Ceratophrys ornata', rank: 'species' },
                        { id: 'ceratophrys-cranwelli', name: 'Cranwell\'s Horned Frog', scientificName: 'Ceratophrys cranwelli', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhacophoridae', name: 'Shrub Frogs', scientificName: 'Rhacophoridae', rank: 'family', speciesCount: 430,
                  children: [
                    { id: 'rhacophorus', name: 'Flying Frogs', scientificName: 'Rhacophorus', rank: 'genus', speciesCount: 93,
                      children: [
                        { id: 'rhacophorus-nigropalmatus', name: 'Wallace\'s Flying Frog', scientificName: 'Rhacophorus nigropalmatus', rank: 'species' },
                        { id: 'rhacophorus-reinwardtii', name: 'Reinwardt\'s Flying Frog', scientificName: 'Rhacophorus reinwardtii', rank: 'species' }
                      ]
                    },
                    { id: 'polypedates', name: 'Whipping Frogs', scientificName: 'Polypedates', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'polypedates-leucomystax', name: 'Common Tree Frog', scientificName: 'Polypedates leucomystax', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mantellidae', name: 'Malagasy Frogs', scientificName: 'Mantellidae', rank: 'family', speciesCount: 230,
                  children: [
                    { id: 'mantella', name: 'Mantella Frogs', scientificName: 'Mantella', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'mantella-aurantiaca', name: 'Golden Mantella', scientificName: 'Mantella aurantiaca', rank: 'species' },
                        { id: 'mantella-baroni', name: 'Baron\'s Mantella', scientificName: 'Mantella baroni', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bombinatoridae', name: 'Fire-bellied Toads', scientificName: 'Bombinatoridae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'bombina', name: 'Fire-bellied Toads', scientificName: 'Bombina', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'bombina-orientalis', name: 'Oriental Fire-bellied Toad', scientificName: 'Bombina orientalis', rank: 'species' },
                        { id: 'bombina-bombina', name: 'Fire-bellied Toad', scientificName: 'Bombina bombina', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leptodactylidae', name: 'Southern Frogs', scientificName: 'Leptodactylidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'leptodactylus', name: 'Foam-nest Frogs', scientificName: 'Leptodactylus', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'leptodactylus-pentadactylus', name: 'Smoky Jungle Frog', scientificName: 'Leptodactylus pentadactylus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'myobatrachidae', name: 'Australian Ground Frogs', scientificName: 'Myobatrachidae', rank: 'family', speciesCount: 130,
                  children: [
                    { id: 'pseudophryne', name: 'Brood Frogs', scientificName: 'Pseudophryne', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'pseudophryne-corroboree', name: 'Southern Corroboree Frog', scientificName: 'Pseudophryne corroboree', rank: 'species' },
                        { id: 'pseudophryne-pengilleyi', name: 'Northern Corroboree Frog', scientificName: 'Pseudophryne pengilleyi', rank: 'species' }
                      ]
                    },
                    { id: 'limnodynastes', name: 'Australian Swamp Frogs', scientificName: 'Limnodynastes', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'limnodynastes-peronii', name: 'Striped Marsh Frog', scientificName: 'Limnodynastes peronii', rank: 'species' },
                        { id: 'limnodynastes-dumerilii', name: 'Eastern Banjo Frog', scientificName: 'Limnodynastes dumerilii', rank: 'species' }
                      ]
                    },
                    { id: 'uperoleia', name: 'Toadlets', scientificName: 'Uperoleia', rank: 'genus', speciesCount: 27,
                      children: [
                        { id: 'uperoleia-laevigata', name: 'Smooth Toadlet', scientificName: 'Uperoleia laevigata', rank: 'species' }
                      ]
                    },
                    { id: 'crinia', name: 'Froglets', scientificName: 'Crinia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'crinia-signifera', name: 'Common Eastern Froglet', scientificName: 'Crinia signifera', rank: 'species' }
                      ]
                    }
                  ]
                },
                // Additional frog families
                { id: 'hyperoliidae', name: 'African Reed Frogs', scientificName: 'Hyperoliidae', rank: 'family', speciesCount: 220,
                  children: [
                    { id: 'hyperolius', name: 'Reed Frogs', scientificName: 'Hyperolius', rank: 'genus', speciesCount: 140,
                      children: [
                        { id: 'hyperolius-viridiflavus', name: 'Common Reed Frog', scientificName: 'Hyperolius viridiflavus', rank: 'species' },
                        { id: 'hyperolius-marmoratus', name: 'Painted Reed Frog', scientificName: 'Hyperolius marmoratus', rank: 'species' },
                        { id: 'hyperolius-pusillus', name: 'Water Lily Frog', scientificName: 'Hyperolius pusillus', rank: 'species' }
                      ]
                    },
                    { id: 'afrixalus', name: 'Spiny Reed Frogs', scientificName: 'Afrixalus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'afrixalus-fornasini', name: 'Greater Leaf-folding Frog', scientificName: 'Afrixalus fornasini', rank: 'species' }
                      ]
                    },
                    { id: 'kassina', name: 'Running Frogs', scientificName: 'Kassina', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'kassina-senegalensis', name: 'Senegal Running Frog', scientificName: 'Kassina senegalensis', rank: 'species' }
                      ]
                    },
                    { id: 'leptopelis', name: 'Tree Frogs', scientificName: 'Leptopelis', rank: 'genus', speciesCount: 53,
                      children: [
                        { id: 'leptopelis-vermiculatus', name: 'Big-eyed Tree Frog', scientificName: 'Leptopelis vermiculatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'centrolenidae', name: 'Glass Frogs', scientificName: 'Centrolenidae', rank: 'family', speciesCount: 160,
                  children: [
                    { id: 'centrolene', name: 'Giant Glass Frogs', scientificName: 'Centrolene', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'centrolene-geckoidea', name: 'Pacific Giant Glass Frog', scientificName: 'Centrolene geckoidea', rank: 'species' }
                      ]
                    },
                    { id: 'hyalinobatrachium', name: 'Glass Frogs', scientificName: 'Hyalinobatrachium', rank: 'genus', speciesCount: 32,
                      children: [
                        { id: 'hyalinobatrachium-fleischmanni', name: 'Fleischmann\'s Glass Frog', scientificName: 'Hyalinobatrachium fleischmanni', rank: 'species' },
                        { id: 'hyalinobatrachium-valerioi', name: 'Reticulated Glass Frog', scientificName: 'Hyalinobatrachium valerioi', rank: 'species' }
                      ]
                    },
                    { id: 'cochranella', name: 'Cochran Frogs', scientificName: 'Cochranella', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'cochranella-granulosa', name: 'Granular Glass Frog', scientificName: 'Cochranella granulosa', rank: 'species' }
                      ]
                    },
                    { id: 'nymphargus', name: 'Stream Glass Frogs', scientificName: 'Nymphargus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'nymphargus-griffithsi', name: 'Griffith\'s Glass Frog', scientificName: 'Nymphargus griffithsi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phyllomedusidae', name: 'Monkey Tree Frogs', scientificName: 'Phyllomedusidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'phyllomedusa-family', name: 'Leaf Frogs', scientificName: 'Phyllomedusa', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'phyllomedusa-bicolor-family', name: 'Giant Monkey Frog', scientificName: 'Phyllomedusa bicolor', rank: 'species' },
                        { id: 'phyllomedusa-sauvagii', name: 'Waxy Monkey Tree Frog', scientificName: 'Phyllomedusa sauvagii', rank: 'species' },
                        { id: 'phyllomedusa-tomopterna', name: 'Tiger-striped Leaf Frog', scientificName: 'Phyllomedusa tomopterna', rank: 'species' }
                      ]
                    },
                    { id: 'agalychnis-family', name: 'Leaf Frogs', scientificName: 'Agalychnis', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'agalychnis-lemur', name: 'Lemur Leaf Frog', scientificName: 'Agalychnis lemur', rank: 'species' },
                        { id: 'agalychnis-spurrelli', name: 'Gliding Leaf Frog', scientificName: 'Agalychnis spurrelli', rank: 'species' }
                      ]
                    },
                    { id: 'cruziohyla', name: 'Splendid Leaf Frogs', scientificName: 'Cruziohyla', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'cruziohyla-calcarifer', name: 'Splendid Leaf Frog', scientificName: 'Cruziohyla calcarifer', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'aromobatidae', name: 'Cryptic Poison Frogs', scientificName: 'Aromobatidae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'aromobates', name: 'Skunk Frogs', scientificName: 'Aromobates', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'aromobates-nocturnus', name: 'Nocturnal Skunk Frog', scientificName: 'Aromobates nocturnus', rank: 'species' }
                      ]
                    },
                    { id: 'anomaloglossus', name: 'Rocket Frogs', scientificName: 'Anomaloglossus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'anomaloglossus-beebei', name: 'Beebe\'s Rocket Frog', scientificName: 'Anomaloglossus beebei', rank: 'species' }
                      ]
                    },
                    { id: 'allobates', name: 'Leaf-litter Frogs', scientificName: 'Allobates', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'allobates-femoralis', name: 'Brilliant-thighed Poison Frog', scientificName: 'Allobates femoralis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'megophryidae', name: 'Asian Horned Toads', scientificName: 'Megophryidae', rank: 'family', speciesCount: 280,
                  children: [
                    { id: 'megophrys', name: 'Horned Frogs', scientificName: 'Megophrys', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'megophrys-nasuta', name: 'Malayan Horned Frog', scientificName: 'Megophrys nasuta', rank: 'species' },
                        { id: 'megophrys-montana', name: 'Asian Horned Frog', scientificName: 'Megophrys montana', rank: 'species' }
                      ]
                    },
                    { id: 'leptobrachium', name: 'Spadefoot Toads', scientificName: 'Leptobrachium', rank: 'genus', speciesCount: 36,
                      children: [
                        { id: 'leptobrachium-hasseltii', name: 'Hasselt\'s Litter Frog', scientificName: 'Leptobrachium hasseltii', rank: 'species' }
                      ]
                    },
                    { id: 'ophryophryne', name: 'Mountain Toads', scientificName: 'Ophryophryne', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'ophryophryne-microstoma', name: 'Small-mouthed Toad', scientificName: 'Ophryophryne microstoma', rank: 'species' }
                      ]
                    },
                    { id: 'xenophrys', name: 'Asian Horned Toads', scientificName: 'Xenophrys', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'xenophrys-major', name: 'Giant Asian Horned Toad', scientificName: 'Xenophrys major', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'brevicipitidae', name: 'Rain Frogs', scientificName: 'Brevicipitidae', rank: 'family', speciesCount: 36,
                  children: [
                    { id: 'breviceps', name: 'Rain Frogs', scientificName: 'Breviceps', rank: 'genus', speciesCount: 21,
                      children: [
                        { id: 'breviceps-adspersus', name: 'Common Rain Frog', scientificName: 'Breviceps adspersus', rank: 'species' },
                        { id: 'breviceps-macrops', name: 'Desert Rain Frog', scientificName: 'Breviceps macrops', rank: 'species' },
                        { id: 'breviceps-gibbosus', name: 'Cape Rain Frog', scientificName: 'Breviceps gibbosus', rank: 'species' }
                      ]
                    },
                    { id: 'callulina', name: 'Warty Frogs', scientificName: 'Callulina', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'callulina-kreffti', name: 'Krefft\'s Warty Frog', scientificName: 'Callulina kreffti', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hemisotidae', name: 'Shovel-nosed Frogs', scientificName: 'Hemisotidae', rank: 'family', speciesCount: 9,
                  children: [
                    { id: 'hemisus', name: 'Shovel-nosed Frogs', scientificName: 'Hemisus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'hemisus-marmoratus', name: 'Marbled Snout-burrower', scientificName: 'Hemisus marmoratus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'arthroleptidae', name: 'Squeaker Frogs', scientificName: 'Arthroleptidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'arthroleptis', name: 'Squeakers', scientificName: 'Arthroleptis', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'arthroleptis-stenodactylus', name: 'Common Squeaker', scientificName: 'Arthroleptis stenodactylus', rank: 'species' }
                      ]
                    },
                    { id: 'cardioglossa', name: 'Long-fingered Frogs', scientificName: 'Cardioglossa', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'cardioglossa-leucomystax', name: 'White-lipped Bright-eyed Frog', scientificName: 'Cardioglossa leucomystax', rank: 'species' }
                      ]
                    },
                    { id: 'astylosternus', name: 'Night Frogs', scientificName: 'Astylosternus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'astylosternus-diadematus', name: 'Crown Bullfrog', scientificName: 'Astylosternus diadematus', rank: 'species' }
                      ]
                    },
                    { id: 'trichobatrachus', name: 'Hairy Frogs', scientificName: 'Trichobatrachus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'trichobatrachus-robustus', name: 'Hairy Frog', scientificName: 'Trichobatrachus robustus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phrynobatrachidae', name: 'Puddle Frogs', scientificName: 'Phrynobatrachidae', rank: 'family', speciesCount: 90,
                  children: [
                    { id: 'phrynobatrachus', name: 'Puddle Frogs', scientificName: 'Phrynobatrachus', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'phrynobatrachus-natalensis', name: 'Natal Puddle Frog', scientificName: 'Phrynobatrachus natalensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'petropedetidae', name: 'African Torrent Frogs', scientificName: 'Petropedetidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'petropedetes', name: 'Torrent Frogs', scientificName: 'Petropedetes', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'petropedetes-cameronensis', name: 'Cameroon Torrent Frog', scientificName: 'Petropedetes cameronensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pyxicephalidae', name: 'African Bullfrogs', scientificName: 'Pyxicephalidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'pyxicephalus', name: 'African Bullfrogs', scientificName: 'Pyxicephalus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'pyxicephalus-adspersus', name: 'African Bullfrog', scientificName: 'Pyxicephalus adspersus', rank: 'species' },
                        { id: 'pyxicephalus-edulis', name: 'Edible Bullfrog', scientificName: 'Pyxicephalus edulis', rank: 'species' }
                      ]
                    },
                    { id: 'amietia', name: 'Stream Frogs', scientificName: 'Amietia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'amietia-angolensis', name: 'Common River Frog', scientificName: 'Amietia angolensis', rank: 'species' }
                      ]
                    },
                    { id: 'tomopterna', name: 'Sand Frogs', scientificName: 'Tomopterna', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'tomopterna-cryptotis', name: 'Tremelo Sand Frog', scientificName: 'Tomopterna cryptotis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dicroglossidae', name: 'Fork-tongued Frogs', scientificName: 'Dicroglossidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'hoplobatrachus', name: 'Tiger Frogs', scientificName: 'Hoplobatrachus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'hoplobatrachus-tigerinus', name: 'Indian Bullfrog', scientificName: 'Hoplobatrachus tigerinus', rank: 'species' }
                      ]
                    },
                    { id: 'fejervarya', name: 'Cricket Frogs', scientificName: 'Fejervarya', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'fejervarya-limnocharis', name: 'Asian Grass Frog', scientificName: 'Fejervarya limnocharis', rank: 'species' }
                      ]
                    },
                    { id: 'limnonectes', name: 'Fanged Frogs', scientificName: 'Limnonectes', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'limnonectes-kuhlii', name: 'Kuhl\'s Creek Frog', scientificName: 'Limnonectes kuhlii', rank: 'species' },
                        { id: 'limnonectes-macrodon', name: 'Giant Asian River Frog', scientificName: 'Limnonectes macrodon', rank: 'species' }
                      ]
                    },
                    { id: 'nanorana', name: 'Paa Frogs', scientificName: 'Nanorana', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'nanorana-parkeri', name: 'High Himalaya Frog', scientificName: 'Nanorana parkeri', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scaphiopodidae', name: 'North American Spadefoots', scientificName: 'Scaphiopodidae', rank: 'family', speciesCount: 7,
                  children: [
                    { id: 'scaphiopus', name: 'Eastern Spadefoots', scientificName: 'Scaphiopus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'scaphiopus-holbrookii', name: 'Eastern Spadefoot', scientificName: 'Scaphiopus holbrookii', rank: 'species' }
                      ]
                    },
                    { id: 'spea', name: 'Western Spadefoots', scientificName: 'Spea', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'spea-hammondii', name: 'Western Spadefoot', scientificName: 'Spea hammondii', rank: 'species' },
                        { id: 'spea-bombifrons', name: 'Plains Spadefoot', scientificName: 'Spea bombifrons', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pelobatidae', name: 'European Spadefoots', scientificName: 'Pelobatidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'pelobates', name: 'Spadefoot Toads', scientificName: 'Pelobates', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'pelobates-fuscus', name: 'Common Spadefoot', scientificName: 'Pelobates fuscus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'megophryidae-2', name: 'Litter Frogs', scientificName: 'Megophryidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'borneophrys', name: 'Borneo Horned Frogs', scientificName: 'Borneophrys', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'borneophrys-edwardinae', name: 'Borneo Horned Frog', scientificName: 'Borneophrys edwardinae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'telmatobiidae', name: 'Water Frogs', scientificName: 'Telmatobiidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'telmatobius', name: 'Andean Water Frogs', scientificName: 'Telmatobius', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'telmatobius-culeus', name: 'Lake Titicaca Frog', scientificName: 'Telmatobius culeus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'calyptocephalellidae', name: 'Chilean Helmeted Frogs', scientificName: 'Calyptocephalellidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'calyptocephalella', name: 'Helmeted Frogs', scientificName: 'Calyptocephalella', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'calyptocephalella-gayi', name: 'Chilean Helmeted Bullfrog', scientificName: 'Calyptocephalella gayi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhinodermatidae', name: 'Darwin\'s Frogs', scientificName: 'Rhinodermatidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'rhinoderma', name: 'Darwin\'s Frogs', scientificName: 'Rhinoderma', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'rhinoderma-darwinii', name: 'Darwin\'s Frog', scientificName: 'Rhinoderma darwinii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'alytidae', name: 'Midwife Toads & Painted Frogs', scientificName: 'Alytidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'alytes', name: 'Midwife Toads', scientificName: 'Alytes', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'alytes-obstetricans', name: 'Common Midwife Toad', scientificName: 'Alytes obstetricans', rank: 'species' }
                      ]
                    },
                    { id: 'discoglossus', name: 'Painted Frogs', scientificName: 'Discoglossus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'discoglossus-pictus', name: 'Painted Frog', scientificName: 'Discoglossus pictus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ascaphidae', name: 'Tailed Frogs', scientificName: 'Ascaphidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'ascaphus', name: 'Tailed Frogs', scientificName: 'Ascaphus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'ascaphus-truei', name: 'Coastal Tailed Frog', scientificName: 'Ascaphus truei', rank: 'species' },
                        { id: 'ascaphus-montanus', name: 'Rocky Mountain Tailed Frog', scientificName: 'Ascaphus montanus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leiopelmatidae', name: 'New Zealand Primitive Frogs', scientificName: 'Leiopelmatidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'leiopelma', name: 'New Zealand Frogs', scientificName: 'Leiopelma', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'leiopelma-archeyi', name: 'Archey\'s Frog', scientificName: 'Leiopelma archeyi', rank: 'species' },
                        { id: 'leiopelma-hochstetteri', name: 'Hochstetter\'s Frog', scientificName: 'Leiopelma hochstetteri', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sooglossidae', name: 'Seychelles Frogs', scientificName: 'Sooglossidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'sooglossus', name: 'Seychelles Frogs', scientificName: 'Sooglossus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'sooglossus-sechellensis', name: 'Seychelles Frog', scientificName: 'Sooglossus sechellensis', rank: 'species' }
                      ]
                    },
                    { id: 'sechellophryne', name: 'Gardiner\'s Frogs', scientificName: 'Sechellophryne', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sechellophryne-gardineri', name: 'Gardiner\'s Seychelles Frog', scientificName: 'Sechellophryne gardineri', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nasikabatrachidae', name: 'Indian Purple Frogs', scientificName: 'Nasikabatrachidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'nasikabatrachus', name: 'Purple Frogs', scientificName: 'Nasikabatrachus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'nasikabatrachus-sahyadrensis', name: 'Indian Purple Frog', scientificName: 'Nasikabatrachus sahyadrensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CAUDATA (Salamanders)
            {
              id: 'caudata',
              name: 'Salamanders',
              scientificName: 'Caudata',
              rank: 'order',
              speciesCount: 700,
              children: [
                { id: 'salamandridae', name: 'Newts & True Salamanders', scientificName: 'Salamandridae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'salamandra', name: 'Fire Salamanders', scientificName: 'Salamandra', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'salamandra-salamandra', name: 'Fire Salamander', scientificName: 'Salamandra salamandra', rank: 'species' },
                        { id: 'salamandra-atra', name: 'Alpine Salamander', scientificName: 'Salamandra atra', rank: 'species' }
                      ]
                    },
                    { id: 'triturus', name: 'Crested Newts', scientificName: 'Triturus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'triturus-cristatus', name: 'Great Crested Newt', scientificName: 'Triturus cristatus', rank: 'species' },
                        { id: 'triturus-marmoratus', name: 'Marbled Newt', scientificName: 'Triturus marmoratus', rank: 'species' }
                      ]
                    },
                    { id: 'notophthalmus', name: 'Eastern Newts', scientificName: 'Notophthalmus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'notophthalmus-viridescens', name: 'Eastern Newt', scientificName: 'Notophthalmus viridescens', rank: 'species' }
                      ]
                    },
                    { id: 'taricha', name: 'Pacific Newts', scientificName: 'Taricha', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'taricha-torosa', name: 'California Newt', scientificName: 'Taricha torosa', rank: 'species' },
                        { id: 'taricha-granulosa', name: 'Rough-skinned Newt', scientificName: 'Taricha granulosa', rank: 'species' }
                      ]
                    },
                    { id: 'cynops', name: 'Fire Belly Newts', scientificName: 'Cynops', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'cynops-pyrrhogaster', name: 'Japanese Fire Belly Newt', scientificName: 'Cynops pyrrhogaster', rank: 'species' }
                      ]
                    },
                    { id: 'tylototriton', name: 'Knobby Newts', scientificName: 'Tylototriton', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'tylototriton-verrucosus', name: 'Himalayan Newt', scientificName: 'Tylototriton verrucosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ambystomatidae', name: 'Mole Salamanders', scientificName: 'Ambystomatidae', rank: 'family', speciesCount: 32,
                  children: [
                    { id: 'ambystoma', name: 'Mole Salamanders', scientificName: 'Ambystoma', rank: 'genus', speciesCount: 32,
                      children: [
                        { id: 'ambystoma-mexicanum', name: 'Axolotl', scientificName: 'Ambystoma mexicanum', rank: 'species' },
                        { id: 'ambystoma-tigrinum', name: 'Tiger Salamander', scientificName: 'Ambystoma tigrinum', rank: 'species' },
                        { id: 'ambystoma-maculatum', name: 'Spotted Salamander', scientificName: 'Ambystoma maculatum', rank: 'species' },
                        { id: 'ambystoma-opacum', name: 'Marbled Salamander', scientificName: 'Ambystoma opacum', rank: 'species' },
                        { id: 'ambystoma-jeffersonianum', name: 'Jefferson Salamander', scientificName: 'Ambystoma jeffersonianum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'plethodontidae', name: 'Lungless Salamanders', scientificName: 'Plethodontidae', rank: 'family', speciesCount: 470,
                  children: [
                    { id: 'plethodon', name: 'Woodland Salamanders', scientificName: 'Plethodon', rank: 'genus', speciesCount: 55,
                      children: [
                        { id: 'plethodon-cinereus', name: 'Red-backed Salamander', scientificName: 'Plethodon cinereus', rank: 'species' },
                        { id: 'plethodon-glutinosus', name: 'Northern Slimy Salamander', scientificName: 'Plethodon glutinosus', rank: 'species' },
                        { id: 'plethodon-jordani', name: 'Red-cheeked Salamander', scientificName: 'Plethodon jordani', rank: 'species' },
                        { id: 'plethodon-yonahlossee', name: 'Yonahlossee Salamander', scientificName: 'Plethodon yonahlossee', rank: 'species' },
                        { id: 'plethodon-wehrlei', name: 'Wehrle\'s Salamander', scientificName: 'Plethodon wehrlei', rank: 'species' }
                      ]
                    },
                    { id: 'desmognathus', name: 'Dusky Salamanders', scientificName: 'Desmognathus', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'desmognathus-fuscus', name: 'Northern Dusky Salamander', scientificName: 'Desmognathus fuscus', rank: 'species' },
                        { id: 'desmognathus-ochrophaeus', name: 'Allegheny Mountain Dusky Salamander', scientificName: 'Desmognathus ochrophaeus', rank: 'species' },
                        { id: 'desmognathus-quadramaculatus', name: 'Black-bellied Salamander', scientificName: 'Desmognathus quadramaculatus', rank: 'species' }
                      ]
                    },
                    { id: 'eurycea', name: 'Brook Salamanders', scientificName: 'Eurycea', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'eurycea-lucifuga', name: 'Cave Salamander', scientificName: 'Eurycea lucifuga', rank: 'species' },
                        { id: 'eurycea-bislineata', name: 'Northern Two-lined Salamander', scientificName: 'Eurycea bislineata', rank: 'species' },
                        { id: 'eurycea-rathbuni', name: 'Texas Blind Salamander', scientificName: 'Eurycea rathbuni', rank: 'species' },
                        { id: 'eurycea-sosorum', name: 'Barton Springs Salamander', scientificName: 'Eurycea sosorum', rank: 'species' }
                      ]
                    },
                    { id: 'bolitoglossa', name: 'Mushroom-tongue Salamanders', scientificName: 'Bolitoglossa', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'bolitoglossa-dofleini', name: 'Giant Palm Salamander', scientificName: 'Bolitoglossa dofleini', rank: 'species' },
                        { id: 'bolitoglossa-mexicana', name: 'Mexican Mushroomtongue Salamander', scientificName: 'Bolitoglossa mexicana', rank: 'species' },
                        { id: 'bolitoglossa-platydactyla', name: 'Broadfoot Mushroomtongue Salamander', scientificName: 'Bolitoglossa platydactyla', rank: 'species' }
                      ]
                    },
                    { id: 'gyrinophilus', name: 'Spring Salamanders', scientificName: 'Gyrinophilus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'gyrinophilus-porphyriticus', name: 'Northern Spring Salamander', scientificName: 'Gyrinophilus porphyriticus', rank: 'species' },
                        { id: 'gyrinophilus-palleucus', name: 'Tennessee Cave Salamander', scientificName: 'Gyrinophilus palleucus', rank: 'species' }
                      ]
                    },
                    { id: 'pseudotriton', name: 'Red & Mud Salamanders', scientificName: 'Pseudotriton', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pseudotriton-ruber', name: 'Red Salamander', scientificName: 'Pseudotriton ruber', rank: 'species' },
                        { id: 'pseudotriton-montanus', name: 'Mud Salamander', scientificName: 'Pseudotriton montanus', rank: 'species' }
                      ]
                    },
                    { id: 'aneides', name: 'Climbing Salamanders', scientificName: 'Aneides', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'aneides-lugubris', name: 'Arboreal Salamander', scientificName: 'Aneides lugubris', rank: 'species' },
                        { id: 'aneides-aeneus', name: 'Green Salamander', scientificName: 'Aneides aeneus', rank: 'species' }
                      ]
                    },
                    { id: 'batrachoseps', name: 'Slender Salamanders', scientificName: 'Batrachoseps', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'batrachoseps-attenuatus', name: 'California Slender Salamander', scientificName: 'Batrachoseps attenuatus', rank: 'species' },
                        { id: 'batrachoseps-nigriventris', name: 'Black-bellied Slender Salamander', scientificName: 'Batrachoseps nigriventris', rank: 'species' }
                      ]
                    },
                    { id: 'ensatina', name: 'Ensatinas', scientificName: 'Ensatina', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ensatina-eschscholtzii', name: 'Ensatina', scientificName: 'Ensatina eschscholtzii', rank: 'species' }
                      ]
                    },
                    { id: 'oedipina', name: 'Worm Salamanders', scientificName: 'Oedipina', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'oedipina-uniformis', name: 'Common Worm Salamander', scientificName: 'Oedipina uniformis', rank: 'species' }
                      ]
                    },
                    { id: 'thorius', name: 'Minute Salamanders', scientificName: 'Thorius', rank: 'genus', speciesCount: 29,
                      children: [
                        { id: 'thorius-arboreus', name: 'Arboreal Minute Salamander', scientificName: 'Thorius arboreus', rank: 'species' }
                      ]
                    },
                    { id: 'chiropterotriton', name: 'Flat-footed Salamanders', scientificName: 'Chiropterotriton', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'chiropterotriton-chiropterus', name: 'Common Flat-footed Salamander', scientificName: 'Chiropterotriton chiropterus', rank: 'species' }
                      ]
                    },
                    { id: 'speleomantes', name: 'European Cave Salamanders', scientificName: 'Speleomantes', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'speleomantes-italicus', name: 'Italian Cave Salamander', scientificName: 'Speleomantes italicus', rank: 'species' },
                        { id: 'speleomantes-strinatii', name: 'Strinati\'s Cave Salamander', scientificName: 'Speleomantes strinatii', rank: 'species' }
                      ]
                    },
                    { id: 'hydromantes', name: 'Web-toed Salamanders', scientificName: 'Hydromantes', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'hydromantes-platycephalus', name: 'Mount Lyell Salamander', scientificName: 'Hydromantes platycephalus', rank: 'species' },
                        { id: 'hydromantes-shastae', name: 'Shasta Salamander', scientificName: 'Hydromantes shastae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cryptobranchidae', name: 'Giant Salamanders', scientificName: 'Cryptobranchidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'andrias', name: 'Asian Giant Salamanders', scientificName: 'Andrias', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'andrias-japonicus', name: 'Japanese Giant Salamander', scientificName: 'Andrias japonicus', rank: 'species' },
                        { id: 'andrias-davidianus', name: 'Chinese Giant Salamander', scientificName: 'Andrias davidianus', rank: 'species' }
                      ]
                    },
                    { id: 'cryptobranchus', name: 'Hellbenders', scientificName: 'Cryptobranchus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'cryptobranchus-alleganiensis', name: 'Hellbender', scientificName: 'Cryptobranchus alleganiensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sirenidae', name: 'Sirens', scientificName: 'Sirenidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'siren', name: 'Greater Sirens', scientificName: 'Siren', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'siren-lacertina', name: 'Greater Siren', scientificName: 'Siren lacertina', rank: 'species' },
                        { id: 'siren-intermedia', name: 'Lesser Siren', scientificName: 'Siren intermedia', rank: 'species' }
                      ]
                    },
                    { id: 'pseudobranchus', name: 'Dwarf Sirens', scientificName: 'Pseudobranchus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pseudobranchus-striatus', name: 'Northern Dwarf Siren', scientificName: 'Pseudobranchus striatus', rank: 'species' },
                        { id: 'pseudobranchus-axanthus', name: 'Southern Dwarf Siren', scientificName: 'Pseudobranchus axanthus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'proteidae', name: 'Mudpuppies & Olms', scientificName: 'Proteidae', rank: 'family', speciesCount: 9,
                  children: [
                    { id: 'necturus', name: 'Mudpuppies', scientificName: 'Necturus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'necturus-maculosus', name: 'Common Mudpuppy', scientificName: 'Necturus maculosus', rank: 'species' },
                        { id: 'necturus-alabamensis', name: 'Black Warrior Waterdog', scientificName: 'Necturus alabamensis', rank: 'species' },
                        { id: 'necturus-beyeri', name: 'Gulf Coast Waterdog', scientificName: 'Necturus beyeri', rank: 'species' },
                        { id: 'necturus-lewisi', name: 'Neuse River Waterdog', scientificName: 'Necturus lewisi', rank: 'species' }
                      ]
                    },
                    { id: 'proteus', name: 'Olms', scientificName: 'Proteus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'proteus-anguinus', name: 'Olm', scientificName: 'Proteus anguinus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'amphiumidae', name: 'Amphiumas', scientificName: 'Amphiumidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'amphiuma', name: 'Amphiumas', scientificName: 'Amphiuma', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'amphiuma-means', name: 'Two-toed Amphiuma', scientificName: 'Amphiuma means', rank: 'species' },
                        { id: 'amphiuma-tridactylum', name: 'Three-toed Amphiuma', scientificName: 'Amphiuma tridactylum', rank: 'species' },
                        { id: 'amphiuma-pholeter', name: 'One-toed Amphiuma', scientificName: 'Amphiuma pholeter', rank: 'species' }
                      ]
                    }
                  ]
                },
                // Additional salamander families
                { id: 'hynobiidae', name: 'Asian Salamanders', scientificName: 'Hynobiidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'hynobius', name: 'Asian Salamanders', scientificName: 'Hynobius', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'hynobius-nebulosus', name: 'Clouded Salamander', scientificName: 'Hynobius nebulosus', rank: 'species' },
                        { id: 'hynobius-retardatus', name: 'Hokkaido Salamander', scientificName: 'Hynobius retardatus', rank: 'species' }
                      ]
                    },
                    { id: 'onychodactylus', name: 'Clawed Salamanders', scientificName: 'Onychodactylus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'onychodactylus-japonicus', name: 'Japanese Clawed Salamander', scientificName: 'Onychodactylus japonicus', rank: 'species' }
                      ]
                    },
                    { id: 'batrachuperus', name: 'Stream Salamanders', scientificName: 'Batrachuperus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'batrachuperus-pinchonii', name: 'Western Chinese Mountain Salamander', scientificName: 'Batrachuperus pinchonii', rank: 'species' }
                      ]
                    },
                    { id: 'ranodon', name: 'Mountain Salamanders', scientificName: 'Ranodon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ranodon-sibiricus', name: 'Siberian Salamander', scientificName: 'Ranodon sibiricus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhyacotritonidae', name: 'Torrent Salamanders', scientificName: 'Rhyacotritonidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'rhyacotriton', name: 'Torrent Salamanders', scientificName: 'Rhyacotriton', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'rhyacotriton-cascadae', name: 'Cascade Torrent Salamander', scientificName: 'Rhyacotriton cascadae', rank: 'species' },
                        { id: 'rhyacotriton-olympicus', name: 'Olympic Torrent Salamander', scientificName: 'Rhyacotriton olympicus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dicamptodontidae', name: 'Pacific Giant Salamanders', scientificName: 'Dicamptodontidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'dicamptodon', name: 'Pacific Giant Salamanders', scientificName: 'Dicamptodon', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'dicamptodon-ensatus', name: 'California Giant Salamander', scientificName: 'Dicamptodon ensatus', rank: 'species' },
                        { id: 'dicamptodon-tenebrosus', name: 'Coastal Giant Salamander', scientificName: 'Dicamptodon tenebrosus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: GYMNOPHIONA (Caecilians)
            {
              id: 'gymnophiona',
              name: 'Caecilians',
              scientificName: 'Gymnophiona',
              rank: 'order',
              speciesCount: 200,
              children: [
                { id: 'caeciliidae', name: 'Common Caecilians', scientificName: 'Caeciliidae', rank: 'family', speciesCount: 42,
                  children: [
                    { id: 'caecilia', name: 'Caecilians', scientificName: 'Caecilia', rank: 'genus', speciesCount: 34,
                      children: [
                        { id: 'caecilia-tentaculata', name: 'Linné\'s Caecilian', scientificName: 'Caecilia tentaculata', rank: 'species' },
                        { id: 'caecilia-nigricans', name: 'Black Caecilian', scientificName: 'Caecilia nigricans', rank: 'species' }
                      ]
                    },
                    { id: 'oscaecilia', name: 'Ringed Caecilians', scientificName: 'Oscaecilia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'oscaecilia-ochrocephala', name: 'Yellow-headed Caecilian', scientificName: 'Oscaecilia ochrocephala', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ichthyophiidae', name: 'Fish Caecilians', scientificName: 'Ichthyophiidae', rank: 'family', speciesCount: 57,
                  children: [
                    { id: 'ichthyophis', name: 'Asian Caecilians', scientificName: 'Ichthyophis', rank: 'genus', speciesCount: 52,
                      children: [
                        { id: 'ichthyophis-glutinosus', name: 'Ceylon Caecilian', scientificName: 'Ichthyophis glutinosus', rank: 'species' },
                        { id: 'ichthyophis-bombayensis', name: 'Bombay Caecilian', scientificName: 'Ichthyophis bombayensis', rank: 'species' },
                        { id: 'ichthyophis-beddomei', name: 'Beddome\'s Caecilian', scientificName: 'Ichthyophis beddomei', rank: 'species' }
                      ]
                    },
                    { id: 'uraeotyphlus', name: 'Kerala Caecilians', scientificName: 'Uraeotyphlus', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'uraeotyphlus-malabaricus', name: 'Malabar Caecilian', scientificName: 'Uraeotyphlus malabaricus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'typhlonectidae', name: 'Aquatic Caecilians', scientificName: 'Typhlonectidae', rank: 'family', speciesCount: 14,
                  children: [
                    { id: 'typhlonectes', name: 'Rubber Eels', scientificName: 'Typhlonectes', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'typhlonectes-natans', name: 'Río Cauca Caecilian', scientificName: 'Typhlonectes natans', rank: 'species' },
                        { id: 'typhlonectes-compressicauda', name: 'Cayenne Caecilian', scientificName: 'Typhlonectes compressicauda', rank: 'species' }
                      ]
                    },
                    { id: 'potomotyphlus', name: 'River Caecilians', scientificName: 'Potomotyphlus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'potomotyphlus-kaupii', name: 'Kaup\'s Caecilian', scientificName: 'Potomotyphlus kaupii', rank: 'species' }
                      ]
                    },
                    { id: 'atretochoana', name: 'Lungless Caecilians', scientificName: 'Atretochoana', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'atretochoana-eiselti', name: 'Lungless Caecilian', scientificName: 'Atretochoana eiselti', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'siphonopidae', name: 'Siphonopid Caecilians', scientificName: 'Siphonopidae', rank: 'family', speciesCount: 26,
                  children: [
                    { id: 'siphonops', name: 'Ringed Caecilians', scientificName: 'Siphonops', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'siphonops-annulatus', name: 'Ringed Caecilian', scientificName: 'Siphonops annulatus', rank: 'species' }
                      ]
                    },
                    { id: 'microcaecilia', name: 'Tiny Caecilians', scientificName: 'Microcaecilia', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'microcaecilia-unicolor', name: 'Tiny Caecilian', scientificName: 'Microcaecilia unicolor', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dermophiidae', name: 'Tailed Caecilians', scientificName: 'Dermophiidae', rank: 'family', speciesCount: 14,
                  children: [
                    { id: 'dermophis', name: 'Mexican Caecilians', scientificName: 'Dermophis', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'dermophis-mexicanus', name: 'Mexican Caecilian', scientificName: 'Dermophis mexicanus', rank: 'species' }
                      ]
                    },
                    { id: 'gymnopis', name: 'Central American Caecilians', scientificName: 'Gymnopis', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'gymnopis-multiplicata', name: 'Purple Caecilian', scientificName: 'Gymnopis multiplicata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scolecomorphidae', name: 'African Caecilians', scientificName: 'Scolecomorphidae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'scolecomorphus', name: 'Burrowing Caecilians', scientificName: 'Scolecomorphus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'scolecomorphus-kirkii', name: 'Kirk\'s Caecilian', scientificName: 'Scolecomorphus kirkii', rank: 'species' }
                      ]
                    },
                    { id: 'crotaphatrema', name: 'Tropical African Caecilians', scientificName: 'Crotaphatrema', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'crotaphatrema-lamottei', name: 'Lamotte\'s Caecilian', scientificName: 'Crotaphatrema lamottei', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'herpelidae', name: 'Congo Caecilians', scientificName: 'Herpelidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'herpele', name: 'Congo Caecilians', scientificName: 'Herpele', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'herpele-squalostoma', name: 'Congo Caecilian', scientificName: 'Herpele squalostoma', rank: 'species' }
                      ]
                    },
                    { id: 'boulengerula', name: 'East African Caecilians', scientificName: 'Boulengerula', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'boulengerula-taitana', name: 'Taita Hills Caecilian', scientificName: 'Boulengerula taitana', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chikilidae', name: 'Chikilid Caecilians', scientificName: 'Chikilidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'chikila', name: 'Chikilid Caecilians', scientificName: 'Chikila', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'chikila-fulleri', name: 'Fuller\'s Caecilian', scientificName: 'Chikila fulleri', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'indotyphlidae', name: 'Indian Caecilians', scientificName: 'Indotyphlidae', rank: 'family', speciesCount: 22,
                  children: [
                    { id: 'indotyphlus', name: 'Indian Caecilians', scientificName: 'Indotyphlus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'indotyphlus-battersbyi', name: 'Battersby\'s Caecilian', scientificName: 'Indotyphlus battersbyi', rank: 'species' }
                      ]
                    },
                    { id: 'gegeneophis', name: 'South Indian Caecilians', scientificName: 'Gegeneophis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'gegeneophis-ramaswamii', name: 'Ramaswami\'s Caecilian', scientificName: 'Gegeneophis ramaswamii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'grandisoniidae', name: 'Grandisonian Caecilians', scientificName: 'Grandisoniidae', rank: 'family', speciesCount: 24,
                  children: [
                    { id: 'grandisonia', name: 'Seychelles Caecilians', scientificName: 'Grandisonia', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'grandisonia-alternans', name: 'Banded Caecilian', scientificName: 'Grandisonia alternans', rank: 'species' }
                      ]
                    },
                    { id: 'hypogeophis', name: 'Seychelles Island Caecilians', scientificName: 'Hypogeophis', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'hypogeophis-rostratus', name: 'Praslin Caecilian', scientificName: 'Hypogeophis rostratus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // CLASS: ACTINOPTERYGII
        {
          id: 'actinopterygii',
          name: 'Ray-finned Fish',
          scientificName: 'Actinopterygii',
          rank: 'class',
          description: 'The largest class of vertebrates, comprising nearly all bony fish',
          speciesCount: 30000,
          children: [
            // ORDER: PERCIFORMES
            {
              id: 'perciformes',
              name: 'Perch-like Fish',
              scientificName: 'Perciformes',
              rank: 'order',
              speciesCount: 10000,
              children: [
                { id: 'cichlidae', name: 'Cichlids', scientificName: 'Cichlidae', rank: 'family', speciesCount: 1700,
                  children: [
                    { id: 'oreochromis', name: 'Tilapia', scientificName: 'Oreochromis', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'oreochromis-niloticus', name: 'Nile Tilapia', scientificName: 'Oreochromis niloticus', rank: 'species' }
                      ]
                    },
                    { id: 'pterophyllum', name: 'Angelfish', scientificName: 'Pterophyllum', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'pterophyllum-scalare', name: 'Freshwater Angelfish', scientificName: 'Pterophyllum scalare', rank: 'species' }
                      ]
                    },
                    { id: 'symphysodon', name: 'Discus', scientificName: 'Symphysodon', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'symphysodon-discus', name: 'Red Discus', scientificName: 'Symphysodon discus', rank: 'species' }
                      ]
                    },
                    { id: 'astronotus', name: 'Oscars', scientificName: 'Astronotus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'astronotus-ocellatus', name: 'Oscar', scientificName: 'Astronotus ocellatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'labridae', name: 'Wrasses', scientificName: 'Labridae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'labroides', name: 'Cleaner Wrasses', scientificName: 'Labroides', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'labroides-dimidiatus', name: 'Bluestreak Cleaner Wrasse', scientificName: 'Labroides dimidiatus', rank: 'species' }
                      ]
                    },
                    { id: 'cheilinus', name: 'Maori Wrasses', scientificName: 'Cheilinus', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'cheilinus-undulatus', name: 'Humphead Wrasse', scientificName: 'Cheilinus undulatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'percidae', name: 'Perches', scientificName: 'Percidae', rank: 'family', speciesCount: 230,
                  children: [
                    { id: 'perca', name: 'Perches', scientificName: 'Perca', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'perca-fluviatilis', name: 'European Perch', scientificName: 'Perca fluviatilis', rank: 'species' },
                        { id: 'perca-flavescens', name: 'Yellow Perch', scientificName: 'Perca flavescens', rank: 'species' }
                      ]
                    },
                    { id: 'sander', name: 'Pike-perches', scientificName: 'Sander', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'sander-vitreus', name: 'Walleye', scientificName: 'Sander vitreus', rank: 'species' },
                        { id: 'sander-lucioperca', name: 'Zander', scientificName: 'Sander lucioperca', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scombridae', name: 'Mackerels & Tunas', scientificName: 'Scombridae', rank: 'family', speciesCount: 55,
                  children: [
                    { id: 'thunnus', name: 'Tunas', scientificName: 'Thunnus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'thunnus-thynnus', name: 'Atlantic Bluefin Tuna', scientificName: 'Thunnus thynnus', rank: 'species' },
                        { id: 'thunnus-albacares', name: 'Yellowfin Tuna', scientificName: 'Thunnus albacares', rank: 'species' },
                        { id: 'thunnus-alalunga', name: 'Albacore', scientificName: 'Thunnus alalunga', rank: 'species' }
                      ]
                    },
                    { id: 'scomber', name: 'Mackerels', scientificName: 'Scomber', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'scomber-scombrus', name: 'Atlantic Mackerel', scientificName: 'Scomber scombrus', rank: 'species' }
                      ]
                    },
                    { id: 'scomberomorus', name: 'Spanish Mackerels', scientificName: 'Scomberomorus', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'scomberomorus-cavalla', name: 'King Mackerel', scientificName: 'Scomberomorus cavalla', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pomacentridae', name: 'Damselfishes', scientificName: 'Pomacentridae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'amphiprion', name: 'Clownfishes', scientificName: 'Amphiprion', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'amphiprion-ocellaris', name: 'Ocellaris Clownfish', scientificName: 'Amphiprion ocellaris', rank: 'species' },
                        { id: 'amphiprion-percula', name: 'Clown Anemonefish', scientificName: 'Amphiprion percula', rank: 'species' }
                      ]
                    },
                    { id: 'chromis', name: 'Chromis', scientificName: 'Chromis', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'chromis-viridis', name: 'Blue-green Chromis', scientificName: 'Chromis viridis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'centrarchidae', name: 'Sunfishes', scientificName: 'Centrarchidae', rank: 'family', speciesCount: 38,
                  children: [
                    { id: 'micropterus', name: 'Black Basses', scientificName: 'Micropterus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'micropterus-salmoides', name: 'Largemouth Bass', scientificName: 'Micropterus salmoides', rank: 'species' },
                        { id: 'micropterus-dolomieu', name: 'Smallmouth Bass', scientificName: 'Micropterus dolomieu', rank: 'species' }
                      ]
                    },
                    { id: 'lepomis', name: 'Sunfishes', scientificName: 'Lepomis', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'lepomis-macrochirus', name: 'Bluegill', scientificName: 'Lepomis macrochirus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'serranidae', name: 'Sea Basses & Groupers', scientificName: 'Serranidae', rank: 'family', speciesCount: 450,
                  children: [
                    { id: 'epinephelus', name: 'Groupers', scientificName: 'Epinephelus', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'epinephelus-itajara', name: 'Atlantic Goliath Grouper', scientificName: 'Epinephelus itajara', rank: 'species' },
                        { id: 'epinephelus-lanceolatus', name: 'Giant Grouper', scientificName: 'Epinephelus lanceolatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'gobiidae', name: 'Gobies', scientificName: 'Gobiidae', rank: 'family', speciesCount: 1900,
                  children: [
                    { id: 'gobius', name: 'True Gobies', scientificName: 'Gobius', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'gobius-niger', name: 'Black Goby', scientificName: 'Gobius niger', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'blenniidae', name: 'Combtooth Blennies', scientificName: 'Blenniidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'ecsenius', name: 'Combtooth Blennies', scientificName: 'Ecsenius', rank: 'genus', speciesCount: 53,
                      children: [
                        { id: 'ecsenius-bicolor', name: 'Bicolor Blenny', scientificName: 'Ecsenius bicolor', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'xiphiidae', name: 'Swordfish', scientificName: 'Xiphiidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'xiphias', name: 'Swordfish', scientificName: 'Xiphias', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'xiphias-gladius', name: 'Swordfish', scientificName: 'Xiphias gladius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'istiophoridae', name: 'Marlins & Sailfish', scientificName: 'Istiophoridae', rank: 'family', speciesCount: 11,
                  children: [
                    { id: 'istiophorus', name: 'Sailfish', scientificName: 'Istiophorus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'istiophorus-platypterus', name: 'Indo-Pacific Sailfish', scientificName: 'Istiophorus platypterus', rank: 'species' }
                      ]
                    },
                    { id: 'makaira', name: 'Marlins', scientificName: 'Makaira', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'makaira-nigricans', name: 'Blue Marlin', scientificName: 'Makaira nigricans', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CYPRINIFORMES
            {
              id: 'cypriniformes',
              name: 'Carps & Minnows',
              scientificName: 'Cypriniformes',
              rank: 'order',
              speciesCount: 4250,
              children: [
                { id: 'cyprinidae', name: 'Carps & True Minnows', scientificName: 'Cyprinidae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'cyprinus', name: 'Carps', scientificName: 'Cyprinus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'cyprinus-carpio', name: 'Common Carp', scientificName: 'Cyprinus carpio', rank: 'species' }
                      ]
                    },
                    { id: 'carassius', name: 'Crucian Carps', scientificName: 'Carassius', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'carassius-auratus', name: 'Goldfish', scientificName: 'Carassius auratus', rank: 'species' }
                      ]
                    },
                    { id: 'danio', name: 'Danios', scientificName: 'Danio', rank: 'genus', speciesCount: 27,
                      children: [
                        { id: 'danio-rerio', name: 'Zebrafish', scientificName: 'Danio rerio', rank: 'species' }
                      ]
                    },
                    { id: 'barbus', name: 'Barbels', scientificName: 'Barbus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'barbus-barbus', name: 'Common Barbel', scientificName: 'Barbus barbus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cobitidae', name: 'Loaches', scientificName: 'Cobitidae', rank: 'family', speciesCount: 260,
                  children: [
                    { id: 'misgurnus', name: 'Weatherfish', scientificName: 'Misgurnus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'misgurnus-anguillicaudatus', name: 'Pond Loach', scientificName: 'Misgurnus anguillicaudatus', rank: 'species' }
                      ]
                    },
                    { id: 'chromobotia', name: 'Clown Loaches', scientificName: 'Chromobotia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'chromobotia-macracanthus', name: 'Clown Loach', scientificName: 'Chromobotia macracanthus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SILURIFORMES
            {
              id: 'siluriformes',
              name: 'Catfish',
              scientificName: 'Siluriformes',
              rank: 'order',
              speciesCount: 3600,
              children: [
                { id: 'siluridae', name: 'Sheatfish', scientificName: 'Siluridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'silurus', name: 'Sheatfish', scientificName: 'Silurus', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'silurus-glanis', name: 'Wels Catfish', scientificName: 'Silurus glanis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ictaluridae', name: 'North American Catfish', scientificName: 'Ictaluridae', rank: 'family', speciesCount: 51,
                  children: [
                    { id: 'ictalurus', name: 'Channel Catfish', scientificName: 'Ictalurus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'ictalurus-punctatus', name: 'Channel Catfish', scientificName: 'Ictalurus punctatus', rank: 'species' }
                      ]
                    },
                    { id: 'pylodictis', name: 'Flathead Catfish', scientificName: 'Pylodictis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'pylodictis-olivaris', name: 'Flathead Catfish', scientificName: 'Pylodictis olivaris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'loricariidae', name: 'Armored Catfish', scientificName: 'Loricariidae', rank: 'family', speciesCount: 680,
                  children: [
                    { id: 'hypostomus', name: 'Suckermouth Catfish', scientificName: 'Hypostomus', rank: 'genus', speciesCount: 140,
                      children: [
                        { id: 'hypostomus-plecostomus', name: 'Common Pleco', scientificName: 'Hypostomus plecostomus', rank: 'species' }
                      ]
                    },
                    { id: 'ancistrus', name: 'Bristlenose Catfish', scientificName: 'Ancistrus', rank: 'genus', speciesCount: 76,
                      children: [
                        { id: 'ancistrus-cirrhosus', name: 'Bristlenose Catfish', scientificName: 'Ancistrus cirrhosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pimelodidae', name: 'Long-whiskered Catfish', scientificName: 'Pimelodidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'pseudoplatystoma', name: 'Tiger Catfish', scientificName: 'Pseudoplatystoma', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'pseudoplatystoma-fasciatum', name: 'Barred Sorubim', scientificName: 'Pseudoplatystoma fasciatum', rank: 'species' }
                      ]
                    },
                    { id: 'brachyplatystoma', name: 'Goliath Catfish', scientificName: 'Brachyplatystoma', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'brachyplatystoma-filamentosum', name: 'Piraíba', scientificName: 'Brachyplatystoma filamentosum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'callichthyidae', name: 'Armored Catfish', scientificName: 'Callichthyidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'corydoras', name: 'Cory Catfish', scientificName: 'Corydoras', rank: 'genus', speciesCount: 170,
                      children: [
                        { id: 'corydoras-paleatus', name: 'Peppered Cory', scientificName: 'Corydoras paleatus', rank: 'species' },
                        { id: 'corydoras-aeneus', name: 'Bronze Cory', scientificName: 'Corydoras aeneus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pangasiidae', name: 'Shark Catfish', scientificName: 'Pangasiidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'pangasianodon', name: 'Giant Catfish', scientificName: 'Pangasianodon', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pangasianodon-gigas', name: 'Mekong Giant Catfish', scientificName: 'Pangasianodon gigas', rank: 'species' },
                        { id: 'pangasianodon-hypophthalmus', name: 'Iridescent Shark', scientificName: 'Pangasianodon hypophthalmus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SALMONIFORMES
            {
              id: 'salmoniformes',
              name: 'Salmon & Trout',
              scientificName: 'Salmoniformes',
              rank: 'order',
              speciesCount: 500,
              children: [
                { id: 'salmonidae', name: 'Salmon & Trout', scientificName: 'Salmonidae', rank: 'family', speciesCount: 220,
                  children: [
                    { id: 'salmo', name: 'Atlantic Salmon & Trout', scientificName: 'Salmo', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'salmo-salar', name: 'Atlantic Salmon', scientificName: 'Salmo salar', rank: 'species' },
                        { id: 'salmo-trutta', name: 'Brown Trout', scientificName: 'Salmo trutta', rank: 'species' }
                      ]
                    },
                    { id: 'oncorhynchus', name: 'Pacific Salmon', scientificName: 'Oncorhynchus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'oncorhynchus-mykiss', name: 'Rainbow Trout', scientificName: 'Oncorhynchus mykiss', rank: 'species' },
                        { id: 'oncorhynchus-tshawytscha', name: 'Chinook Salmon', scientificName: 'Oncorhynchus tshawytscha', rank: 'species' },
                        { id: 'oncorhynchus-kisutch', name: 'Coho Salmon', scientificName: 'Oncorhynchus kisutch', rank: 'species' },
                        { id: 'oncorhynchus-nerka', name: 'Sockeye Salmon', scientificName: 'Oncorhynchus nerka', rank: 'species' },
                        { id: 'oncorhynchus-gorbuscha', name: 'Pink Salmon', scientificName: 'Oncorhynchus gorbuscha', rank: 'species' },
                        { id: 'oncorhynchus-keta', name: 'Chum Salmon', scientificName: 'Oncorhynchus keta', rank: 'species' }
                      ]
                    },
                    { id: 'salvelinus', name: 'Chars', scientificName: 'Salvelinus', rank: 'genus', speciesCount: 51,
                      children: [
                        { id: 'salvelinus-fontinalis', name: 'Brook Trout', scientificName: 'Salvelinus fontinalis', rank: 'species' },
                        { id: 'salvelinus-alpinus', name: 'Arctic Char', scientificName: 'Salvelinus alpinus', rank: 'species' },
                        { id: 'salvelinus-namaycush', name: 'Lake Trout', scientificName: 'Salvelinus namaycush', rank: 'species' }
                      ]
                    },
                    { id: 'hucho', name: 'Huchen', scientificName: 'Hucho', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'hucho-hucho', name: 'Huchen', scientificName: 'Hucho hucho', rank: 'species' },
                        { id: 'hucho-taimen', name: 'Siberian Taimen', scientificName: 'Hucho taimen', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ANGUILLIFORMES
            {
              id: 'anguilliformes',
              name: 'Eels',
              scientificName: 'Anguilliformes',
              rank: 'order',
              speciesCount: 800,
              children: [
                { id: 'anguillidae', name: 'Freshwater Eels', scientificName: 'Anguillidae', rank: 'family', speciesCount: 19,
                  children: [
                    { id: 'anguilla', name: 'Freshwater Eels', scientificName: 'Anguilla', rank: 'genus', speciesCount: 19,
                      children: [
                        { id: 'anguilla-anguilla', name: 'European Eel', scientificName: 'Anguilla anguilla', rank: 'species' },
                        { id: 'anguilla-rostrata', name: 'American Eel', scientificName: 'Anguilla rostrata', rank: 'species' },
                        { id: 'anguilla-japonica', name: 'Japanese Eel', scientificName: 'Anguilla japonica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'muraenidae', name: 'Moray Eels', scientificName: 'Muraenidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'gymnothorax', name: 'Moray Eels', scientificName: 'Gymnothorax', rank: 'genus', speciesCount: 125,
                      children: [
                        { id: 'gymnothorax-javanicus', name: 'Giant Moray', scientificName: 'Gymnothorax javanicus', rank: 'species' },
                        { id: 'gymnothorax-moringa', name: 'Spotted Moray', scientificName: 'Gymnothorax moringa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'congridae', name: 'Conger Eels', scientificName: 'Congridae', rank: 'family', speciesCount: 190,
                  children: [
                    { id: 'conger', name: 'Conger Eels', scientificName: 'Conger', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'conger-conger', name: 'European Conger', scientificName: 'Conger conger', rank: 'species' }
                      ]
                    },
                    { id: 'heteroconger', name: 'Garden Eels', scientificName: 'Heteroconger', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'heteroconger-hassi', name: 'Spotted Garden Eel', scientificName: 'Heteroconger hassi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CLUPEIFORMES
            {
              id: 'clupeiformes',
              name: 'Herrings & Sardines',
              scientificName: 'Clupeiformes',
              rank: 'order',
              speciesCount: 400,
              children: [
                { id: 'clupeidae', name: 'Herrings', scientificName: 'Clupeidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'clupea', name: 'Herrings', scientificName: 'Clupea', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'clupea-harengus', name: 'Atlantic Herring', scientificName: 'Clupea harengus', rank: 'species' },
                        { id: 'clupea-pallasii', name: 'Pacific Herring', scientificName: 'Clupea pallasii', rank: 'species' }
                      ]
                    },
                    { id: 'sardina', name: 'Sardines', scientificName: 'Sardina', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sardina-pilchardus', name: 'European Pilchard', scientificName: 'Sardina pilchardus', rank: 'species' }
                      ]
                    },
                    { id: 'sprattus', name: 'Sprats', scientificName: 'Sprattus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'sprattus-sprattus', name: 'European Sprat', scientificName: 'Sprattus sprattus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'engraulidae', name: 'Anchovies', scientificName: 'Engraulidae', rank: 'family', speciesCount: 145,
                  children: [
                    { id: 'engraulis', name: 'Anchovies', scientificName: 'Engraulis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'engraulis-encrasicolus', name: 'European Anchovy', scientificName: 'Engraulis encrasicolus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: GADIFORMES
            {
              id: 'gadiformes',
              name: 'Cods',
              scientificName: 'Gadiformes',
              rank: 'order',
              speciesCount: 555,
              children: [
                { id: 'gadidae', name: 'Cods & Haddocks', scientificName: 'Gadidae', rank: 'family', speciesCount: 22,
                  children: [
                    { id: 'gadus', name: 'Cods', scientificName: 'Gadus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'gadus-morhua', name: 'Atlantic Cod', scientificName: 'Gadus morhua', rank: 'species' },
                        { id: 'gadus-macrocephalus', name: 'Pacific Cod', scientificName: 'Gadus macrocephalus', rank: 'species' }
                      ]
                    },
                    { id: 'melanogrammus', name: 'Haddocks', scientificName: 'Melanogrammus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'melanogrammus-aeglefinus', name: 'Haddock', scientificName: 'Melanogrammus aeglefinus', rank: 'species' }
                      ]
                    },
                    { id: 'pollachius', name: 'Pollocks', scientificName: 'Pollachius', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pollachius-virens', name: 'Saithe', scientificName: 'Pollachius virens', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'merlucciidae', name: 'Hakes', scientificName: 'Merlucciidae', rank: 'family', speciesCount: 18,
                  children: [
                    { id: 'merluccius', name: 'Hakes', scientificName: 'Merluccius', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'merluccius-merluccius', name: 'European Hake', scientificName: 'Merluccius merluccius', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: PLEURONECTIFORMES
            {
              id: 'pleuronectiformes',
              name: 'Flatfish',
              scientificName: 'Pleuronectiformes',
              rank: 'order',
              speciesCount: 800,
              children: [
                { id: 'pleuronectidae', name: 'Righteye Flounders', scientificName: 'Pleuronectidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'hippoglossus', name: 'Halibut', scientificName: 'Hippoglossus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'hippoglossus-hippoglossus', name: 'Atlantic Halibut', scientificName: 'Hippoglossus hippoglossus', rank: 'species' },
                        { id: 'hippoglossus-stenolepis', name: 'Pacific Halibut', scientificName: 'Hippoglossus stenolepis', rank: 'species' }
                      ]
                    },
                    { id: 'pleuronectes', name: 'Plaice', scientificName: 'Pleuronectes', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pleuronectes-platessa', name: 'European Plaice', scientificName: 'Pleuronectes platessa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'soleidae', name: 'Soles', scientificName: 'Soleidae', rank: 'family', speciesCount: 140,
                  children: [
                    { id: 'solea', name: 'Soles', scientificName: 'Solea', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'solea-solea', name: 'Common Sole', scientificName: 'Solea solea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bothidae', name: 'Lefteye Flounders', scientificName: 'Bothidae', rank: 'family', speciesCount: 160,
                  children: [
                    { id: 'paralichthys', name: 'Summer Flounders', scientificName: 'Paralichthys', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'paralichthys-dentatus', name: 'Summer Flounder', scientificName: 'Paralichthys dentatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: TETRAODONTIFORMES
            {
              id: 'tetraodontiformes',
              name: 'Pufferfish & Allies',
              scientificName: 'Tetraodontiformes',
              rank: 'order',
              speciesCount: 430,
              children: [
                { id: 'tetraodontidae', name: 'Pufferfish', scientificName: 'Tetraodontidae', rank: 'family', speciesCount: 195,
                  children: [
                    { id: 'takifugu', name: 'Fugu', scientificName: 'Takifugu', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'takifugu-rubripes', name: 'Japanese Pufferfish', scientificName: 'Takifugu rubripes', rank: 'species' }
                      ]
                    },
                    { id: 'diodon', name: 'Porcupinefish', scientificName: 'Diodon', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'diodon-hystrix', name: 'Spot-fin Porcupinefish', scientificName: 'Diodon hystrix', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'molidae', name: 'Ocean Sunfish', scientificName: 'Molidae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'mola', name: 'Ocean Sunfish', scientificName: 'Mola', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'mola-mola', name: 'Ocean Sunfish', scientificName: 'Mola mola', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'balistidae', name: 'Triggerfish', scientificName: 'Balistidae', rank: 'family', speciesCount: 42,
                  children: [
                    { id: 'rhinecanthus', name: 'Picasso Triggerfish', scientificName: 'Rhinecanthus', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'rhinecanthus-aculeatus', name: 'Lagoon Triggerfish', scientificName: 'Rhinecanthus aculeatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SCORPAENIFORMES
            {
              id: 'scorpaeniformes',
              name: 'Scorpionfish & Allies',
              scientificName: 'Scorpaeniformes',
              rank: 'order',
              speciesCount: 1477,
              children: [
                { id: 'scorpaenidae', name: 'Scorpionfish', scientificName: 'Scorpaenidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'pterois', name: 'Lionfish', scientificName: 'Pterois', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'pterois-volitans', name: 'Red Lionfish', scientificName: 'Pterois volitans', rank: 'species' },
                        { id: 'pterois-miles', name: 'Common Lionfish', scientificName: 'Pterois miles', rank: 'species' }
                      ]
                    },
                    { id: 'synanceia', name: 'Stonefish', scientificName: 'Synanceia', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'synanceia-verrucosa', name: 'Reef Stonefish', scientificName: 'Synanceia verrucosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sebastidae', name: 'Rockfish', scientificName: 'Sebastidae', rank: 'family', speciesCount: 130,
                  children: [
                    { id: 'sebastes', name: 'Rockfish', scientificName: 'Sebastes', rank: 'genus', speciesCount: 110,
                      children: [
                        { id: 'sebastes-marinus', name: 'Ocean Perch', scientificName: 'Sebastes marinus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SYNGNATHIFORMES
            {
              id: 'syngnathiformes',
              name: 'Seahorses & Pipefish',
              scientificName: 'Syngnathiformes',
              rank: 'order',
              speciesCount: 300,
              children: [
                { id: 'syngnathidae', name: 'Seahorses & Pipefish', scientificName: 'Syngnathidae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'hippocampus', name: 'Seahorses', scientificName: 'Hippocampus', rank: 'genus', speciesCount: 46,
                      children: [
                        { id: 'hippocampus-kuda', name: 'Common Seahorse', scientificName: 'Hippocampus kuda', rank: 'species' },
                        { id: 'hippocampus-hippocampus', name: 'Short-snouted Seahorse', scientificName: 'Hippocampus hippocampus', rank: 'species' },
                        { id: 'hippocampus-abdominalis', name: 'Pot-bellied Seahorse', scientificName: 'Hippocampus abdominalis', rank: 'species' },
                        { id: 'hippocampus-bargibanti', name: 'Pygmy Seahorse', scientificName: 'Hippocampus bargibanti', rank: 'species' }
                      ]
                    },
                    { id: 'phycodurus', name: 'Leafy Seadragons', scientificName: 'Phycodurus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'phycodurus-eques', name: 'Leafy Seadragon', scientificName: 'Phycodurus eques', rank: 'species' }
                      ]
                    },
                    { id: 'phyllopteryx', name: 'Weedy Seadragons', scientificName: 'Phyllopteryx', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'phyllopteryx-taeniolatus', name: 'Weedy Seadragon', scientificName: 'Phyllopteryx taeniolatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ESOCIFORMES
            {
              id: 'esociformes',
              name: 'Pikes',
              scientificName: 'Esociformes',
              rank: 'order',
              speciesCount: 13,
              children: [
                { id: 'esocidae', name: 'Pikes', scientificName: 'Esocidae', rank: 'family', speciesCount: 7,
                  children: [
                    { id: 'esox', name: 'Pikes', scientificName: 'Esox', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'esox-lucius', name: 'Northern Pike', scientificName: 'Esox lucius', rank: 'species' },
                        { id: 'esox-masquinongy', name: 'Muskellunge', scientificName: 'Esox masquinongy', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: OSTEOGLOSSIFORMES
            {
              id: 'osteoglossiformes',
              name: 'Bonytongues',
              scientificName: 'Osteoglossiformes',
              rank: 'order',
              speciesCount: 220,
              children: [
                { id: 'osteoglossidae', name: 'Arowanas', scientificName: 'Osteoglossidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'osteoglossum', name: 'Arowanas', scientificName: 'Osteoglossum', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'osteoglossum-bicirrhosum', name: 'Silver Arowana', scientificName: 'Osteoglossum bicirrhosum', rank: 'species' }
                      ]
                    },
                    { id: 'arapaima', name: 'Arapaima', scientificName: 'Arapaima', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'arapaima-gigas', name: 'Arapaima', scientificName: 'Arapaima gigas', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mormyridae', name: 'Elephantfish', scientificName: 'Mormyridae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'gnathonemus', name: 'Elephantnose Fish', scientificName: 'Gnathonemus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'gnathonemus-petersii', name: 'Elephantnose Fish', scientificName: 'Gnathonemus petersii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CHARACIFORMES
            {
              id: 'characiformes',
              name: 'Characins',
              scientificName: 'Characiformes',
              rank: 'order',
              speciesCount: 2100,
              children: [
                { id: 'serrasalmidae', name: 'Piranhas & Pacus', scientificName: 'Serrasalmidae', rank: 'family', speciesCount: 98,
                  children: [
                    { id: 'pygocentrus', name: 'Piranhas', scientificName: 'Pygocentrus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'pygocentrus-nattereri', name: 'Red-bellied Piranha', scientificName: 'Pygocentrus nattereri', rank: 'species' }
                      ]
                    },
                    { id: 'colossoma', name: 'Pacus', scientificName: 'Colossoma', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'colossoma-macropomum', name: 'Tambaqui', scientificName: 'Colossoma macropomum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'characidae', name: 'Characids', scientificName: 'Characidae', rank: 'family', speciesCount: 1100,
                  children: [
                    { id: 'paracheirodon', name: 'Neon Tetras', scientificName: 'Paracheirodon', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'paracheirodon-innesi', name: 'Neon Tetra', scientificName: 'Paracheirodon innesi', rank: 'species' },
                        { id: 'paracheirodon-axelrodi', name: 'Cardinal Tetra', scientificName: 'Paracheirodon axelrodi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: BELONIFORMES
            {
              id: 'beloniformes',
              name: 'Needlefish & Flying Fish',
              scientificName: 'Beloniformes',
              rank: 'order',
              speciesCount: 260,
              children: [
                { id: 'exocoetidae', name: 'Flying Fish', scientificName: 'Exocoetidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'exocoetus', name: 'Flying Fish', scientificName: 'Exocoetus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'exocoetus-volitans', name: 'Tropical Two-wing Flyingfish', scientificName: 'Exocoetus volitans', rank: 'species' },
                        { id: 'exocoetus-monocirrhus', name: 'Barbel Flyingfish', scientificName: 'Exocoetus monocirrhus', rank: 'species' }
                      ]
                    },
                    { id: 'cheilopogon', name: 'Fourwing Flyingfish', scientificName: 'Cheilopogon', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'cheilopogon-exsiliens', name: 'Bandwing Flyingfish', scientificName: 'Cheilopogon exsiliens', rank: 'species' },
                        { id: 'cheilopogon-melanurus', name: 'Atlantic Flyingfish', scientificName: 'Cheilopogon melanurus', rank: 'species' }
                      ]
                    },
                    { id: 'cypselurus', name: 'Sailfin Flyingfish', scientificName: 'Cypselurus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'cypselurus-poecilopterus', name: 'Yellowwing Flyingfish', scientificName: 'Cypselurus poecilopterus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'belonidae', name: 'Needlefish', scientificName: 'Belonidae', rank: 'family', speciesCount: 34,
                  children: [
                    { id: 'belone', name: 'Garfish', scientificName: 'Belone', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'belone-belone', name: 'Garfish', scientificName: 'Belone belone', rank: 'species' }
                      ]
                    },
                    { id: 'tylosurus', name: 'Houndfish', scientificName: 'Tylosurus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'tylosurus-crocodilus', name: 'Houndfish', scientificName: 'Tylosurus crocodilus', rank: 'species' },
                        { id: 'tylosurus-acus', name: 'Agujon Needlefish', scientificName: 'Tylosurus acus', rank: 'species' }
                      ]
                    },
                    { id: 'strongylura', name: 'Needlefish', scientificName: 'Strongylura', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'strongylura-marina', name: 'Atlantic Needlefish', scientificName: 'Strongylura marina', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hemiramphidae', name: 'Halfbeaks', scientificName: 'Hemiramphidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'hemiramphus', name: 'Halfbeaks', scientificName: 'Hemiramphus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'hemiramphus-brasiliensis', name: 'Ballyhoo', scientificName: 'Hemiramphus brasiliensis', rank: 'species' },
                        { id: 'hemiramphus-far', name: 'Black-barred Halfbeak', scientificName: 'Hemiramphus far', rank: 'species' }
                      ]
                    },
                    { id: 'hyporhamphus', name: 'Halfbeaks', scientificName: 'Hyporhamphus', rank: 'genus', speciesCount: 33,
                      children: [
                        { id: 'hyporhamphus-unifasciatus', name: 'Common Halfbeak', scientificName: 'Hyporhamphus unifasciatus', rank: 'species' }
                      ]
                    },
                    { id: 'dermogenys', name: 'Wrestling Halfbeaks', scientificName: 'Dermogenys', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'dermogenys-pusilla', name: 'Wrestling Halfbeak', scientificName: 'Dermogenys pusilla', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: LOPHIIFORMES
            {
              id: 'lophiiformes',
              name: 'Anglerfish',
              scientificName: 'Lophiiformes',
              rank: 'order',
              speciesCount: 350,
              children: [
                { id: 'lophiidae', name: 'Monkfish', scientificName: 'Lophiidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'lophius', name: 'Monkfish', scientificName: 'Lophius', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'lophius-piscatorius', name: 'Monkfish', scientificName: 'Lophius piscatorius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ceratiidae', name: 'Seadevils', scientificName: 'Ceratiidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'ceratias', name: 'Northern Seadevils', scientificName: 'Ceratias', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'ceratias-holboelli', name: 'Kroyer\'s Deep-sea Anglerfish', scientificName: 'Ceratias holboelli', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'melanocetidae', name: 'Black Seadevils', scientificName: 'Melanocetidae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'melanocetus', name: 'Black Seadevils', scientificName: 'Melanocetus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'melanocetus-johnsonii', name: 'Humpback Anglerfish', scientificName: 'Melanocetus johnsonii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'antennariidae', name: 'Frogfish', scientificName: 'Antennariidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'antennarius', name: 'Frogfish', scientificName: 'Antennarius', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'antennarius-pictus', name: 'Painted Frogfish', scientificName: 'Antennarius pictus', rank: 'species' },
                        { id: 'antennarius-striatus', name: 'Striated Frogfish', scientificName: 'Antennarius striatus', rank: 'species' },
                        { id: 'antennarius-maculatus', name: 'Warty Frogfish', scientificName: 'Antennarius maculatus', rank: 'species' }
                      ]
                    },
                    { id: 'histrio', name: 'Sargassumfish', scientificName: 'Histrio', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'histrio-histrio', name: 'Sargassumfish', scientificName: 'Histrio histrio', rank: 'species' }
                      ]
                    },
                    { id: 'rhycherus', name: 'Handfish', scientificName: 'Rhycherus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'rhycherus-filamentosus', name: 'Tasselled Frogfish', scientificName: 'Rhycherus filamentosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ogcocephalidae', name: 'Batfish', scientificName: 'Ogcocephalidae', rank: 'family', speciesCount: 75,
                  children: [
                    { id: 'ogcocephalus', name: 'Batfish', scientificName: 'Ogcocephalus', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'ogcocephalus-nasutus', name: 'Shortnose Batfish', scientificName: 'Ogcocephalus nasutus', rank: 'species' },
                        { id: 'ogcocephalus-darwini', name: 'Red-lipped Batfish', scientificName: 'Ogcocephalus darwini', rank: 'species' }
                      ]
                    },
                    { id: 'halieutichthys', name: 'Pancake Batfish', scientificName: 'Halieutichthys', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'halieutichthys-aculeatus', name: 'Pancake Batfish', scientificName: 'Halieutichthys aculeatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ACIPENSERIFORMES
            {
              id: 'acipenseriformes',
              name: 'Sturgeons & Paddlefish',
              scientificName: 'Acipenseriformes',
              rank: 'order',
              speciesCount: 27,
              children: [
                { id: 'acipenseridae', name: 'Sturgeons', scientificName: 'Acipenseridae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'acipenser', name: 'Sturgeons', scientificName: 'Acipenser', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'acipenser-sturio', name: 'European Sturgeon', scientificName: 'Acipenser sturio', rank: 'species' },
                        { id: 'acipenser-oxyrinchus', name: 'Atlantic Sturgeon', scientificName: 'Acipenser oxyrinchus', rank: 'species' },
                        { id: 'acipenser-fulvescens', name: 'Lake Sturgeon', scientificName: 'Acipenser fulvescens', rank: 'species' }
                      ]
                    },
                    { id: 'huso', name: 'Beluga Sturgeons', scientificName: 'Huso', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'huso-huso', name: 'Beluga Sturgeon', scientificName: 'Huso huso', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'polyodontidae', name: 'Paddlefish', scientificName: 'Polyodontidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'polyodon', name: 'American Paddlefish', scientificName: 'Polyodon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'polyodon-spathula', name: 'American Paddlefish', scientificName: 'Polyodon spathula', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: LEPISOSTEIFORMES
            {
              id: 'lepisosteiformes',
              name: 'Gars',
              scientificName: 'Lepisosteiformes',
              rank: 'order',
              speciesCount: 7,
              children: [
                { id: 'lepisosteidae', name: 'Gars', scientificName: 'Lepisosteidae', rank: 'family', speciesCount: 7,
                  children: [
                    { id: 'atractosteus', name: 'Giant Gars', scientificName: 'Atractosteus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'atractosteus-spatula', name: 'Alligator Gar', scientificName: 'Atractosteus spatula', rank: 'species' }
                      ]
                    },
                    { id: 'lepisosteus', name: 'Gars', scientificName: 'Lepisosteus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'lepisosteus-osseus', name: 'Longnose Gar', scientificName: 'Lepisosteus osseus', rank: 'species' },
                        { id: 'lepisosteus-oculatus', name: 'Spotted Gar', scientificName: 'Lepisosteus oculatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: GYMNOTIFORMES
            {
              id: 'gymnotiformes',
              name: 'Electric Eels & Knifefish',
              scientificName: 'Gymnotiformes',
              rank: 'order',
              speciesCount: 250,
              children: [
                { id: 'gymnotidae', name: 'Electric Eels', scientificName: 'Gymnotidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'electrophorus', name: 'Electric Eels', scientificName: 'Electrophorus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'electrophorus-electricus', name: 'Electric Eel', scientificName: 'Electrophorus electricus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'apteronotidae', name: 'Ghost Knifefish', scientificName: 'Apteronotidae', rank: 'family', speciesCount: 86,
                  children: [
                    { id: 'apteronotus', name: 'Ghost Knifefish', scientificName: 'Apteronotus', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'apteronotus-albifrons', name: 'Black Ghost Knifefish', scientificName: 'Apteronotus albifrons', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: BATRACHOIDIFORMES
            {
              id: 'batrachoidiformes',
              name: 'Toadfish',
              scientificName: 'Batrachoidiformes',
              rank: 'order',
              speciesCount: 80,
              children: [
                { id: 'batrachoididae', name: 'Toadfish', scientificName: 'Batrachoididae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'opsanus', name: 'Oyster Toadfish', scientificName: 'Opsanus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'opsanus-tau', name: 'Oyster Toadfish', scientificName: 'Opsanus tau', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: MYCTOPHIFORMES
            {
              id: 'myctophiformes',
              name: 'Lanternfish',
              scientificName: 'Myctophiformes',
              rank: 'order',
              speciesCount: 250,
              children: [
                { id: 'myctophidae', name: 'Lanternfish', scientificName: 'Myctophidae', rank: 'family', speciesCount: 246,
                  children: [
                    { id: 'myctophum', name: 'Lanternfish', scientificName: 'Myctophum', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'myctophum-punctatum', name: 'Spotted Lanternfish', scientificName: 'Myctophum punctatum', rank: 'species' }
                      ]
                    },
                    { id: 'diaphus', name: 'Headlightfish', scientificName: 'Diaphus', rank: 'genus', speciesCount: 77,
                      children: [
                        { id: 'diaphus-effulgens', name: 'Headlightfish', scientificName: 'Diaphus effulgens', rank: 'species' },
                        { id: 'diaphus-theta', name: 'California Headlightfish', scientificName: 'Diaphus theta', rank: 'species' }
                      ]
                    },
                    { id: 'lampanyctus', name: 'Lampfish', scientificName: 'Lampanyctus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'lampanyctus-crocodilus', name: 'Jewel Lanternfish', scientificName: 'Lampanyctus crocodilus', rank: 'species' }
                      ]
                    },
                    { id: 'benthosema', name: 'Glacier Lanternfish', scientificName: 'Benthosema', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'benthosema-glaciale', name: 'Glacier Lanternfish', scientificName: 'Benthosema glaciale', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: STOMIIFORMES (Dragonfish & Bristlemouths)
            {
              id: 'stomiiformes',
              name: 'Dragonfish & Bristlemouths',
              scientificName: 'Stomiiformes',
              rank: 'order',
              speciesCount: 400,
              children: [
                { id: 'stomiidae', name: 'Barbeled Dragonfish', scientificName: 'Stomiidae', rank: 'family', speciesCount: 290,
                  children: [
                    { id: 'stomias', name: 'Scaly Dragonfish', scientificName: 'Stomias', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'stomias-boa', name: 'Scaly Dragonfish', scientificName: 'Stomias boa', rank: 'species' }
                      ]
                    },
                    { id: 'chauliodus', name: 'Viperfish', scientificName: 'Chauliodus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'chauliodus-sloani', name: 'Sloane\'s Viperfish', scientificName: 'Chauliodus sloani', rank: 'species' },
                        { id: 'chauliodus-macouni', name: 'Pacific Viperfish', scientificName: 'Chauliodus macouni', rank: 'species' }
                      ]
                    },
                    { id: 'idiacanthus', name: 'Black Dragonfish', scientificName: 'Idiacanthus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'idiacanthus-atlanticus', name: 'Black Dragonfish', scientificName: 'Idiacanthus atlanticus', rank: 'species' }
                      ]
                    },
                    { id: 'malacosteus', name: 'Stoplight Loosejaw', scientificName: 'Malacosteus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'malacosteus-niger', name: 'Stoplight Loosejaw', scientificName: 'Malacosteus niger', rank: 'species' }
                      ]
                    },
                    { id: 'aristostomias', name: 'Loosejaw', scientificName: 'Aristostomias', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'aristostomias-scintillans', name: 'Shiny Loosejaw', scientificName: 'Aristostomias scintillans', rank: 'species' }
                      ]
                    },
                    { id: 'eustomias', name: 'Scaleless Dragonfish', scientificName: 'Eustomias', rank: 'genus', speciesCount: 118,
                      children: [
                        { id: 'eustomias-obscurus', name: 'Obscure Dragonfish', scientificName: 'Eustomias obscurus', rank: 'species' }
                      ]
                    },
                    { id: 'photostomias', name: 'Photonfish', scientificName: 'Photostomias', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'photostomias-guernei', name: 'Photonfish', scientificName: 'Photostomias guernei', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'gonostomatidae', name: 'Bristlemouths', scientificName: 'Gonostomatidae', rank: 'family', speciesCount: 32,
                  children: [
                    { id: 'cyclothone', name: 'Bristlemouths', scientificName: 'Cyclothone', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'cyclothone-microdon', name: 'Veiled Anglemouth', scientificName: 'Cyclothone microdon', rank: 'species' },
                        { id: 'cyclothone-braueri', name: 'Garrick\'s Bristlemouth', scientificName: 'Cyclothone braueri', rank: 'species' }
                      ]
                    },
                    { id: 'gonostoma', name: 'Lightfish', scientificName: 'Gonostoma', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'gonostoma-denudatum', name: 'Naked Lightfish', scientificName: 'Gonostoma denudatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sternoptychidae', name: 'Hatchetfish', scientificName: 'Sternoptychidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'argyropelecus', name: 'Silver Hatchetfish', scientificName: 'Argyropelecus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'argyropelecus-hemigymnus', name: 'Half-naked Hatchetfish', scientificName: 'Argyropelecus hemigymnus', rank: 'species' },
                        { id: 'argyropelecus-aculeatus', name: 'Lovely Hatchetfish', scientificName: 'Argyropelecus aculeatus', rank: 'species' }
                      ]
                    },
                    { id: 'sternoptyx', name: 'Pearlside', scientificName: 'Sternoptyx', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'sternoptyx-diaphana', name: 'Diaphanous Hatchetfish', scientificName: 'Sternoptyx diaphana', rank: 'species' }
                      ]
                    },
                    { id: 'polyipnus', name: 'Hatchetfish', scientificName: 'Polyipnus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'polyipnus-spinosus', name: 'Spiny Hatchetfish', scientificName: 'Polyipnus spinosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phosichthyidae', name: 'Lightfish', scientificName: 'Phosichthyidae', rank: 'family', speciesCount: 24,
                  children: [
                    { id: 'vinciguerria', name: 'Lightfish', scientificName: 'Vinciguerria', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'vinciguerria-lucetia', name: 'Panama Lightfish', scientificName: 'Vinciguerria lucetia', rank: 'species' }
                      ]
                    },
                    { id: 'ichthyococcus', name: 'Bulldog Lightfish', scientificName: 'Ichthyococcus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'ichthyococcus-ovatus', name: 'Bulldog Lightfish', scientificName: 'Ichthyococcus ovatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: BERYCIFORMES (Squirrelfish & Flashlight Fish)
            {
              id: 'beryciformes',
              name: 'Squirrelfish & Alfonsinos',
              scientificName: 'Beryciformes',
              rank: 'order',
              speciesCount: 160,
              children: [
                { id: 'berycidae', name: 'Alfonsinos', scientificName: 'Berycidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'beryx', name: 'Alfonsinos', scientificName: 'Beryx', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'beryx-splendens', name: 'Splendid Alfonsino', scientificName: 'Beryx splendens', rank: 'species' },
                        { id: 'beryx-decadactylus', name: 'Alfonsino', scientificName: 'Beryx decadactylus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'holocentridae', name: 'Squirrelfish & Soldierfish', scientificName: 'Holocentridae', rank: 'family', speciesCount: 85,
                  children: [
                    { id: 'holocentrus', name: 'Squirrelfish', scientificName: 'Holocentrus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'holocentrus-adscensionis', name: 'Squirrelfish', scientificName: 'Holocentrus adscensionis', rank: 'species' },
                        { id: 'holocentrus-rufus', name: 'Longspine Squirrelfish', scientificName: 'Holocentrus rufus', rank: 'species' }
                      ]
                    },
                    { id: 'myripristis', name: 'Soldierfish', scientificName: 'Myripristis', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'myripristis-murdjan', name: 'Blotcheye Soldierfish', scientificName: 'Myripristis murdjan', rank: 'species' },
                        { id: 'myripristis-berndti', name: 'Bigscale Soldierfish', scientificName: 'Myripristis berndti', rank: 'species' }
                      ]
                    },
                    { id: 'sargocentron', name: 'Crown Squirrelfish', scientificName: 'Sargocentron', rank: 'genus', speciesCount: 34,
                      children: [
                        { id: 'sargocentron-cornutum', name: 'Threespot Squirrelfish', scientificName: 'Sargocentron cornutum', rank: 'species' },
                        { id: 'sargocentron-spiniferum', name: 'Sabre Squirrelfish', scientificName: 'Sargocentron spiniferum', rank: 'species' }
                      ]
                    },
                    { id: 'neoniphon', name: 'Spotfin Squirrelfish', scientificName: 'Neoniphon', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'neoniphon-sammara', name: 'Spotfin Squirrelfish', scientificName: 'Neoniphon sammara', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'anomalopidae', name: 'Flashlight Fish', scientificName: 'Anomalopidae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'anomalops', name: 'Flashlight Fish', scientificName: 'Anomalops', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'anomalops-katoptron', name: 'Splitfin Flashlight Fish', scientificName: 'Anomalops katoptron', rank: 'species' }
                      ]
                    },
                    { id: 'photoblepharon', name: 'Eyelight Fish', scientificName: 'Photoblepharon', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'photoblepharon-palpebratum', name: 'Eyelight Fish', scientificName: 'Photoblepharon palpebratum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'trachichthyidae', name: 'Roughies', scientificName: 'Trachichthyidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'hoplostethus', name: 'Roughies', scientificName: 'Hoplostethus', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'hoplostethus-atlanticus', name: 'Orange Roughy', scientificName: 'Hoplostethus atlanticus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ZEIFORMES (Dories)
            {
              id: 'zeiformes',
              name: 'Dories',
              scientificName: 'Zeiformes',
              rank: 'order',
              speciesCount: 33,
              children: [
                { id: 'zeidae', name: 'Dories', scientificName: 'Zeidae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'zeus', name: 'Dories', scientificName: 'Zeus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'zeus-faber', name: 'John Dory', scientificName: 'Zeus faber', rank: 'species' }
                      ]
                    },
                    { id: 'zenopsis', name: 'Mirror Dories', scientificName: 'Zenopsis', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'zenopsis-conchifer', name: 'Silvery John Dory', scientificName: 'Zenopsis conchifer', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'oreosomatidae', name: 'Oreos', scientificName: 'Oreosomatidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'allocyttus', name: 'Oreos', scientificName: 'Allocyttus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'allocyttus-niger', name: 'Black Oreo', scientificName: 'Allocyttus niger', rank: 'species' }
                      ]
                    },
                    { id: 'pseudocyttus', name: 'Smooth Oreo', scientificName: 'Pseudocyttus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'pseudocyttus-maculatus', name: 'Smooth Oreo Dory', scientificName: 'Pseudocyttus maculatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'parazenidae', name: 'Parazen', scientificName: 'Parazenidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'parazen', name: 'Parazen', scientificName: 'Parazen', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'parazen-pacificus', name: 'Pacific Parazen', scientificName: 'Parazen pacificus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ATHERINIFORMES (Silversides & Rainbowfish)
            {
              id: 'atheriniformes',
              name: 'Silversides & Rainbowfish',
              scientificName: 'Atheriniformes',
              rank: 'order',
              speciesCount: 350,
              children: [
                { id: 'atherinidae', name: 'Silversides', scientificName: 'Atherinidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'atherina', name: 'Sand Smelts', scientificName: 'Atherina', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'atherina-boyeri', name: 'Big-scale Sand Smelt', scientificName: 'Atherina boyeri', rank: 'species' },
                        { id: 'atherina-presbyter', name: 'Sand Smelt', scientificName: 'Atherina presbyter', rank: 'species' }
                      ]
                    },
                    { id: 'atherinops', name: 'Topsmelt', scientificName: 'Atherinops', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'atherinops-affinis', name: 'Topsmelt', scientificName: 'Atherinops affinis', rank: 'species' }
                      ]
                    },
                    { id: 'menidia', name: 'Atlantic Silversides', scientificName: 'Menidia', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'menidia-menidia', name: 'Atlantic Silverside', scientificName: 'Menidia menidia', rank: 'species' }
                      ]
                    },
                    { id: 'leuresthes', name: 'Grunion', scientificName: 'Leuresthes', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'leuresthes-tenuis', name: 'California Grunion', scientificName: 'Leuresthes tenuis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'melanotaeniidae', name: 'Rainbowfish', scientificName: 'Melanotaeniidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'melanotaenia', name: 'Rainbowfish', scientificName: 'Melanotaenia', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'melanotaenia-boesemani', name: 'Boeseman\'s Rainbowfish', scientificName: 'Melanotaenia boesemani', rank: 'species' },
                        { id: 'melanotaenia-lacustris', name: 'Lake Kutubu Rainbowfish', scientificName: 'Melanotaenia lacustris', rank: 'species' },
                        { id: 'melanotaenia-praecox', name: 'Dwarf Neon Rainbowfish', scientificName: 'Melanotaenia praecox', rank: 'species' },
                        { id: 'melanotaenia-splendida', name: 'Eastern Rainbowfish', scientificName: 'Melanotaenia splendida', rank: 'species' }
                      ]
                    },
                    { id: 'glossolepis', name: 'Glossolepis Rainbowfish', scientificName: 'Glossolepis', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'glossolepis-incisus', name: 'Red Rainbowfish', scientificName: 'Glossolepis incisus', rank: 'species' }
                      ]
                    },
                    { id: 'iriatherina', name: 'Threadfin Rainbowfish', scientificName: 'Iriatherina', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'iriatherina-werneri', name: 'Threadfin Rainbowfish', scientificName: 'Iriatherina werneri', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bedotiidae', name: 'Madagascar Rainbowfish', scientificName: 'Bedotiidae', rank: 'family', speciesCount: 16,
                  children: [
                    { id: 'bedotia', name: 'Madagascar Rainbowfish', scientificName: 'Bedotia', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'bedotia-geayi', name: 'Madagascar Rainbowfish', scientificName: 'Bedotia geayi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pseudomugilidae', name: 'Blue Eyes', scientificName: 'Pseudomugilidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'pseudomugil', name: 'Blue Eyes', scientificName: 'Pseudomugil', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'pseudomugil-gertrudae', name: 'Spotted Blue Eye', scientificName: 'Pseudomugil gertrudae', rank: 'species' },
                        { id: 'pseudomugil-furcatus', name: 'Forktail Blue Eye', scientificName: 'Pseudomugil furcatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: MUGILIFORMES (Mullets)
            {
              id: 'mugiliformes',
              name: 'Mullets',
              scientificName: 'Mugiliformes',
              rank: 'order',
              speciesCount: 80,
              children: [
                { id: 'mugilidae', name: 'Mullets', scientificName: 'Mugilidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'mugil', name: 'Grey Mullets', scientificName: 'Mugil', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'mugil-cephalus', name: 'Flathead Grey Mullet', scientificName: 'Mugil cephalus', rank: 'species' },
                        { id: 'mugil-curema', name: 'White Mullet', scientificName: 'Mugil curema', rank: 'species' }
                      ]
                    },
                    { id: 'chelon', name: 'Thicklip Mullets', scientificName: 'Chelon', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'chelon-labrosus', name: 'Thicklip Grey Mullet', scientificName: 'Chelon labrosus', rank: 'species' },
                        { id: 'chelon-auratus', name: 'Golden Grey Mullet', scientificName: 'Chelon auratus', rank: 'species' }
                      ]
                    },
                    { id: 'liza', name: 'Mullets', scientificName: 'Liza', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'liza-ramada', name: 'Thinlip Grey Mullet', scientificName: 'Liza ramada', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: GOBIESOCIFORMES (Clingfish)
            {
              id: 'gobiesociformes',
              name: 'Clingfish',
              scientificName: 'Gobiesociformes',
              rank: 'order',
              speciesCount: 170,
              children: [
                { id: 'gobiesocidae', name: 'Clingfish', scientificName: 'Gobiesocidae', rank: 'family', speciesCount: 170,
                  children: [
                    { id: 'gobiesox', name: 'Clingfish', scientificName: 'Gobiesox', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'gobiesox-maeandricus', name: 'Northern Clingfish', scientificName: 'Gobiesox maeandricus', rank: 'species' },
                        { id: 'gobiesox-strumosus', name: 'Skilletfish', scientificName: 'Gobiesox strumosus', rank: 'species' }
                      ]
                    },
                    { id: 'lepadogaster', name: 'Shore Clingfish', scientificName: 'Lepadogaster', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'lepadogaster-lepadogaster', name: 'Shore Clingfish', scientificName: 'Lepadogaster lepadogaster', rank: 'species' }
                      ]
                    },
                    { id: 'diademichthys', name: 'Urchin Clingfish', scientificName: 'Diademichthys', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'diademichthys-lineatus', name: 'Urchin Clingfish', scientificName: 'Diademichthys lineatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: KURTIFORMES (Cardinalfish & Nurserfish)
            {
              id: 'kurtiformes',
              name: 'Cardinalfish & Nurserfish',
              scientificName: 'Kurtiformes',
              rank: 'order',
              speciesCount: 370,
              children: [
                { id: 'apogonidae', name: 'Cardinalfish', scientificName: 'Apogonidae', rank: 'family', speciesCount: 350,
                  children: [
                    { id: 'apogon', name: 'Cardinalfish', scientificName: 'Apogon', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'apogon-imberbis', name: 'Cardinal Fish', scientificName: 'Apogon imberbis', rank: 'species' }
                      ]
                    },
                    { id: 'pterapogon', name: 'Banggai Cardinalfish', scientificName: 'Pterapogon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'pterapogon-kauderni', name: 'Banggai Cardinalfish', scientificName: 'Pterapogon kauderni', rank: 'species' }
                      ]
                    },
                    { id: 'sphaeramia', name: 'Orbiculate Cardinalfish', scientificName: 'Sphaeramia', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'sphaeramia-nematoptera', name: 'Pajama Cardinalfish', scientificName: 'Sphaeramia nematoptera', rank: 'species' },
                        { id: 'sphaeramia-orbicularis', name: 'Orbiculate Cardinalfish', scientificName: 'Sphaeramia orbicularis', rank: 'species' }
                      ]
                    },
                    { id: 'cheilodipterus', name: 'Large-toothed Cardinalfish', scientificName: 'Cheilodipterus', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'cheilodipterus-macrodon', name: 'Large-toothed Cardinalfish', scientificName: 'Cheilodipterus macrodon', rank: 'species' }
                      ]
                    },
                    { id: 'ostorhinchus', name: 'Ring-tailed Cardinalfish', scientificName: 'Ostorhinchus', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'ostorhinchus-cyanosoma', name: 'Yellowstriped Cardinalfish', scientificName: 'Ostorhinchus cyanosoma', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'kurtidae', name: 'Nurserfish', scientificName: 'Kurtidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'kurtus', name: 'Nurserfish', scientificName: 'Kurtus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'kurtus-gulliveri', name: 'Nurseryfish', scientificName: 'Kurtus gulliveri', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: LABRIFORMES (Wrasses & Parrotfish)
            {
              id: 'labriformes',
              name: 'Wrasses & Parrotfish',
              scientificName: 'Labriformes',
              rank: 'order',
              speciesCount: 680,
              children: [
                { id: 'scaridae', name: 'Parrotfish', scientificName: 'Scaridae', rank: 'family', speciesCount: 95,
                  children: [
                    { id: 'scarus', name: 'Parrotfish', scientificName: 'Scarus', rank: 'genus', speciesCount: 52,
                      children: [
                        { id: 'scarus-vetula', name: 'Queen Parrotfish', scientificName: 'Scarus vetula', rank: 'species' },
                        { id: 'scarus-taeniopterus', name: 'Princess Parrotfish', scientificName: 'Scarus taeniopterus', rank: 'species' },
                        { id: 'scarus-guacamaia', name: 'Rainbow Parrotfish', scientificName: 'Scarus guacamaia', rank: 'species' },
                        { id: 'scarus-rubroviolaceus', name: 'Redlip Parrotfish', scientificName: 'Scarus rubroviolaceus', rank: 'species' }
                      ]
                    },
                    { id: 'sparisoma', name: 'Parrotfish', scientificName: 'Sparisoma', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'sparisoma-viride', name: 'Stoplight Parrotfish', scientificName: 'Sparisoma viride', rank: 'species' },
                        { id: 'sparisoma-aurofrenatum', name: 'Redband Parrotfish', scientificName: 'Sparisoma aurofrenatum', rank: 'species' }
                      ]
                    },
                    { id: 'chlorurus', name: 'Daisy Parrotfish', scientificName: 'Chlorurus', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'chlorurus-sordidus', name: 'Daisy Parrotfish', scientificName: 'Chlorurus sordidus', rank: 'species' },
                        { id: 'chlorurus-microrhinos', name: 'Steephead Parrotfish', scientificName: 'Chlorurus microrhinos', rank: 'species' }
                      ]
                    },
                    { id: 'bolbometopon', name: 'Bumphead Parrotfish', scientificName: 'Bolbometopon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'bolbometopon-muricatum', name: 'Green Humphead Parrotfish', scientificName: 'Bolbometopon muricatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'labridae-labriformes', name: 'Wrasses (Labriformes)', scientificName: 'Labridae', rank: 'family', speciesCount: 520,
                  children: [
                    { id: 'thalassoma', name: 'Wrasses', scientificName: 'Thalassoma', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'thalassoma-bifasciatum', name: 'Bluehead Wrasse', scientificName: 'Thalassoma bifasciatum', rank: 'species' },
                        { id: 'thalassoma-lunare', name: 'Moon Wrasse', scientificName: 'Thalassoma lunare', rank: 'species' },
                        { id: 'thalassoma-hardwicke', name: 'Sixbar Wrasse', scientificName: 'Thalassoma hardwicke', rank: 'species' }
                      ]
                    },
                    { id: 'halichoeres', name: 'Wrasses', scientificName: 'Halichoeres', rank: 'genus', speciesCount: 82,
                      children: [
                        { id: 'halichoeres-garnoti', name: 'Yellowhead Wrasse', scientificName: 'Halichoeres garnoti', rank: 'species' },
                        { id: 'halichoeres-radiatus', name: 'Puddingwife', scientificName: 'Halichoeres radiatus', rank: 'species' }
                      ]
                    },
                    { id: 'coris', name: 'Rainbow Wrasses', scientificName: 'Coris', rank: 'genus', speciesCount: 27,
                      children: [
                        { id: 'coris-gaimard', name: 'Yellowtail Coris', scientificName: 'Coris gaimard', rank: 'species' },
                        { id: 'coris-julis', name: 'Mediterranean Rainbow Wrasse', scientificName: 'Coris julis', rank: 'species' }
                      ]
                    },
                    { id: 'bodianus', name: 'Hogfish', scientificName: 'Bodianus', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'bodianus-rufus', name: 'Spanish Hogfish', scientificName: 'Bodianus rufus', rank: 'species' },
                        { id: 'bodianus-pulchellus', name: 'Cuban Hogfish', scientificName: 'Bodianus pulchellus', rank: 'species' }
                      ]
                    },
                    { id: 'gomphosus', name: 'Bird Wrasses', scientificName: 'Gomphosus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'gomphosus-varius', name: 'Bird Wrasse', scientificName: 'Gomphosus varius', rank: 'species' }
                      ]
                    },
                    { id: 'semicossyphus', name: 'Sheephead', scientificName: 'Semicossyphus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'semicossyphus-pulcher', name: 'California Sheephead', scientificName: 'Semicossyphus pulcher', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ACANTHURIFORMES (Surgeonfish & Tangs)
            {
              id: 'acanthuriformes',
              name: 'Surgeonfish & Tangs',
              scientificName: 'Acanthuriformes',
              rank: 'order',
              speciesCount: 250,
              children: [
                { id: 'acanthuridae', name: 'Surgeonfish & Tangs', scientificName: 'Acanthuridae', rank: 'family', speciesCount: 86,
                  children: [
                    { id: 'acanthurus', name: 'Surgeonfish', scientificName: 'Acanthurus', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'acanthurus-coeruleus', name: 'Blue Tang', scientificName: 'Acanthurus coeruleus', rank: 'species' },
                        { id: 'acanthurus-leucosternon', name: 'Powder Blue Tang', scientificName: 'Acanthurus leucosternon', rank: 'species' },
                        { id: 'acanthurus-olivaceus', name: 'Orangespot Surgeonfish', scientificName: 'Acanthurus olivaceus', rank: 'species' },
                        { id: 'acanthurus-achilles', name: 'Achilles Tang', scientificName: 'Acanthurus achilles', rank: 'species' },
                        { id: 'acanthurus-japonicus', name: 'Japan Surgeonfish', scientificName: 'Acanthurus japonicus', rank: 'species' }
                      ]
                    },
                    { id: 'paracanthurus', name: 'Palette Surgeonfish', scientificName: 'Paracanthurus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'paracanthurus-hepatus', name: 'Blue Tang (Dory)', scientificName: 'Paracanthurus hepatus', rank: 'species' }
                      ]
                    },
                    { id: 'zebrasoma', name: 'Zebrasoma Tangs', scientificName: 'Zebrasoma', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'zebrasoma-flavescens', name: 'Yellow Tang', scientificName: 'Zebrasoma flavescens', rank: 'species' },
                        { id: 'zebrasoma-xanthurum', name: 'Purple Tang', scientificName: 'Zebrasoma xanthurum', rank: 'species' },
                        { id: 'zebrasoma-veliferum', name: 'Sailfin Tang', scientificName: 'Zebrasoma veliferum', rank: 'species' },
                        { id: 'zebrasoma-desjardinii', name: 'Desjardin\'s Sailfin Tang', scientificName: 'Zebrasoma desjardinii', rank: 'species' }
                      ]
                    },
                    { id: 'naso', name: 'Unicornfish', scientificName: 'Naso', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'naso-unicornis', name: 'Bluespine Unicornfish', scientificName: 'Naso unicornis', rank: 'species' },
                        { id: 'naso-lituratus', name: 'Orangespine Unicornfish', scientificName: 'Naso lituratus', rank: 'species' },
                        { id: 'naso-vlamingii', name: 'Bignose Unicornfish', scientificName: 'Naso vlamingii', rank: 'species' }
                      ]
                    },
                    { id: 'ctenochaetus', name: 'Bristletooth Tangs', scientificName: 'Ctenochaetus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'ctenochaetus-strigosus', name: 'Kole Tang', scientificName: 'Ctenochaetus strigosus', rank: 'species' },
                        { id: 'ctenochaetus-tominiensis', name: 'Tomini Tang', scientificName: 'Ctenochaetus tominiensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'siganidae', name: 'Rabbitfish', scientificName: 'Siganidae', rank: 'family', speciesCount: 29,
                  children: [
                    { id: 'siganus', name: 'Rabbitfish', scientificName: 'Siganus', rank: 'genus', speciesCount: 29,
                      children: [
                        { id: 'siganus-vulpinus', name: 'Foxface Rabbitfish', scientificName: 'Siganus vulpinus', rank: 'species' },
                        { id: 'siganus-magnificus', name: 'Magnificent Rabbitfish', scientificName: 'Siganus magnificus', rank: 'species' },
                        { id: 'siganus-unimaculatus', name: 'Onespot Foxface', scientificName: 'Siganus unimaculatus', rank: 'species' },
                        { id: 'siganus-puellus', name: 'Masked Spinefoot', scientificName: 'Siganus puellus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'zanclidae', name: 'Moorish Idol', scientificName: 'Zanclidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'zanclus', name: 'Moorish Idol', scientificName: 'Zanclus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'zanclus-cornutus', name: 'Moorish Idol', scientificName: 'Zanclus cornutus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'luvaridae', name: 'Louvar', scientificName: 'Luvaridae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'luvarus', name: 'Louvar', scientificName: 'Luvarus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'luvarus-imperialis', name: 'Louvar', scientificName: 'Luvarus imperialis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CARANGIFORMES (Jacks, Pompanos & Cobia)
            {
              id: 'carangiformes',
              name: 'Jacks, Pompanos & Cobia',
              scientificName: 'Carangiformes',
              rank: 'order',
              speciesCount: 200,
              children: [
                { id: 'carangidae', name: 'Jacks & Pompanos', scientificName: 'Carangidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'caranx', name: 'Jacks', scientificName: 'Caranx', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'caranx-hippos', name: 'Crevalle Jack', scientificName: 'Caranx hippos', rank: 'species' },
                        { id: 'caranx-ignobilis', name: 'Giant Trevally', scientificName: 'Caranx ignobilis', rank: 'species' },
                        { id: 'caranx-melampygus', name: 'Bluefin Trevally', scientificName: 'Caranx melampygus', rank: 'species' },
                        { id: 'caranx-latus', name: 'Horse-eye Jack', scientificName: 'Caranx latus', rank: 'species' }
                      ]
                    },
                    { id: 'seriola', name: 'Amberjacks', scientificName: 'Seriola', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'seriola-dumerili', name: 'Greater Amberjack', scientificName: 'Seriola dumerili', rank: 'species' },
                        { id: 'seriola-lalandi', name: 'Yellowtail Amberjack', scientificName: 'Seriola lalandi', rank: 'species' },
                        { id: 'seriola-rivoliana', name: 'Almaco Jack', scientificName: 'Seriola rivoliana', rank: 'species' }
                      ]
                    },
                    { id: 'trachinotus', name: 'Pompanos', scientificName: 'Trachinotus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'trachinotus-carolinus', name: 'Florida Pompano', scientificName: 'Trachinotus carolinus', rank: 'species' },
                        { id: 'trachinotus-falcatus', name: 'Permit', scientificName: 'Trachinotus falcatus', rank: 'species' }
                      ]
                    },
                    { id: 'trachurus', name: 'Horse Mackerels', scientificName: 'Trachurus', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'trachurus-trachurus', name: 'Atlantic Horse Mackerel', scientificName: 'Trachurus trachurus', rank: 'species' }
                      ]
                    },
                    { id: 'selene', name: 'Lookdowns', scientificName: 'Selene', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'selene-vomer', name: 'Lookdown', scientificName: 'Selene vomer', rank: 'species' }
                      ]
                    },
                    { id: 'alectis', name: 'African Pompanos', scientificName: 'Alectis', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'alectis-ciliaris', name: 'African Pompano', scientificName: 'Alectis ciliaris', rank: 'species' }
                      ]
                    },
                    { id: 'gnathanodon', name: 'Golden Trevally', scientificName: 'Gnathanodon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'gnathanodon-speciosus', name: 'Golden Trevally', scientificName: 'Gnathanodon speciosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rachycentridae', name: 'Cobia', scientificName: 'Rachycentridae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'rachycentron', name: 'Cobia', scientificName: 'Rachycentron', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'rachycentron-canadum', name: 'Cobia', scientificName: 'Rachycentron canadum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'echeneidae', name: 'Remoras', scientificName: 'Echeneidae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'echeneis', name: 'Remoras', scientificName: 'Echeneis', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'echeneis-naucrates', name: 'Live Sharksucker', scientificName: 'Echeneis naucrates', rank: 'species' }
                      ]
                    },
                    { id: 'remora', name: 'Sharksuckers', scientificName: 'Remora', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'remora-remora', name: 'Common Remora', scientificName: 'Remora remora', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'coryphaenidae', name: 'Dolphinfish', scientificName: 'Coryphaenidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'coryphaena', name: 'Dolphinfish', scientificName: 'Coryphaena', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'coryphaena-hippurus', name: 'Common Dolphinfish', scientificName: 'Coryphaena hippurus', rank: 'species' },
                        { id: 'coryphaena-equiselis', name: 'Pompano Dolphinfish', scientificName: 'Coryphaena equiselis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SPARIFORMES (Porgies & Sea Breams)
            {
              id: 'spariformes',
              name: 'Porgies & Sea Breams',
              scientificName: 'Spariformes',
              rank: 'order',
              speciesCount: 160,
              children: [
                { id: 'sparidae', name: 'Sea Breams & Porgies', scientificName: 'Sparidae', rank: 'family', speciesCount: 155,
                  children: [
                    { id: 'pagrus', name: 'Porgies', scientificName: 'Pagrus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'pagrus-pagrus', name: 'Red Porgy', scientificName: 'Pagrus pagrus', rank: 'species' },
                        { id: 'pagrus-major', name: 'Red Seabream', scientificName: 'Pagrus major', rank: 'species' },
                        { id: 'pagrus-auratus', name: 'Australasian Snapper', scientificName: 'Pagrus auratus', rank: 'species' }
                      ]
                    },
                    { id: 'sparus', name: 'Gilthead Seabream', scientificName: 'Sparus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'sparus-aurata', name: 'Gilthead Seabream', scientificName: 'Sparus aurata', rank: 'species' }
                      ]
                    },
                    { id: 'diplodus', name: 'Sea Breams', scientificName: 'Diplodus', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'diplodus-sargus', name: 'White Seabream', scientificName: 'Diplodus sargus', rank: 'species' },
                        { id: 'diplodus-vulgaris', name: 'Common Two-banded Seabream', scientificName: 'Diplodus vulgaris', rank: 'species' },
                        { id: 'diplodus-annularis', name: 'Annular Seabream', scientificName: 'Diplodus annularis', rank: 'species' }
                      ]
                    },
                    { id: 'calamus', name: 'Porgies', scientificName: 'Calamus', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'calamus-bajonado', name: 'Jolthead Porgy', scientificName: 'Calamus bajonado', rank: 'species' },
                        { id: 'calamus-penna', name: 'Sheepshead Porgy', scientificName: 'Calamus penna', rank: 'species' }
                      ]
                    },
                    { id: 'archosargus', name: 'Sheepshead', scientificName: 'Archosargus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'archosargus-probatocephalus', name: 'Sheepshead', scientificName: 'Archosargus probatocephalus', rank: 'species' }
                      ]
                    },
                    { id: 'dentex', name: 'Dentex', scientificName: 'Dentex', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'dentex-dentex', name: 'Common Dentex', scientificName: 'Dentex dentex', rank: 'species' }
                      ]
                    },
                    { id: 'boops', name: 'Bogue', scientificName: 'Boops', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'boops-boops', name: 'Bogue', scientificName: 'Boops boops', rank: 'species' }
                      ]
                    },
                    { id: 'chrysoblephus', name: 'Steenbras', scientificName: 'Chrysoblephus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'chrysoblephus-laticeps', name: 'Roman Seabream', scientificName: 'Chrysoblephus laticeps', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lethrinidae', name: 'Emperors', scientificName: 'Lethrinidae', rank: 'family', speciesCount: 44,
                  children: [
                    { id: 'lethrinus', name: 'Emperor Breams', scientificName: 'Lethrinus', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'lethrinus-nebulosus', name: 'Spangled Emperor', scientificName: 'Lethrinus nebulosus', rank: 'species' },
                        { id: 'lethrinus-obsoletus', name: 'Orange-striped Emperor', scientificName: 'Lethrinus obsoletus', rank: 'species' }
                      ]
                    },
                    { id: 'gymnocranius', name: 'Large-eye Breams', scientificName: 'Gymnocranius', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'gymnocranius-grandoculis', name: 'Blue-lined Large-eye Bream', scientificName: 'Gymnocranius grandoculis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CICHLIFORMES (Cichlids)
            {
              id: 'cichliformes',
              name: 'Cichlids',
              scientificName: 'Cichliformes',
              rank: 'order',
              speciesCount: 1900,
              children: [
                { id: 'cichlidae-cichliformes', name: 'Cichlids', scientificName: 'Cichlidae', rank: 'family', speciesCount: 1900,
                  children: [
                    { id: 'cyphotilapia', name: 'Frontosa', scientificName: 'Cyphotilapia', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'cyphotilapia-frontosa', name: 'Frontosa Cichlid', scientificName: 'Cyphotilapia frontosa', rank: 'species' }
                      ]
                    },
                    { id: 'tropheus', name: 'Tropheus', scientificName: 'Tropheus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'tropheus-duboisi', name: 'Duboisi Cichlid', scientificName: 'Tropheus duboisi', rank: 'species' },
                        { id: 'tropheus-moorii', name: 'Blunthead Cichlid', scientificName: 'Tropheus moorii', rank: 'species' }
                      ]
                    },
                    { id: 'neolamprologus', name: 'Lamprologus', scientificName: 'Neolamprologus', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'neolamprologus-brichardi', name: 'Princess of Burundi', scientificName: 'Neolamprologus brichardi', rank: 'species' },
                        { id: 'neolamprologus-multifasciatus', name: 'Multi Cichlid', scientificName: 'Neolamprologus multifasciatus', rank: 'species' }
                      ]
                    },
                    { id: 'julidochromis', name: 'Julies', scientificName: 'Julidochromis', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'julidochromis-regani', name: 'Regan\'s Julie', scientificName: 'Julidochromis regani', rank: 'species' },
                        { id: 'julidochromis-marlieri', name: 'Marlier\'s Julie', scientificName: 'Julidochromis marlieri', rank: 'species' }
                      ]
                    },
                    { id: 'pseudotropheus', name: 'Mbuna', scientificName: 'Pseudotropheus', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'pseudotropheus-zebra', name: 'Zebra Mbuna', scientificName: 'Pseudotropheus zebra', rank: 'species' }
                      ]
                    },
                    { id: 'maylandia', name: 'Maylandia', scientificName: 'Maylandia', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'maylandia-estherae', name: 'Red Zebra', scientificName: 'Maylandia estherae', rank: 'species' }
                      ]
                    },
                    { id: 'labidochromis', name: 'Labidochromis', scientificName: 'Labidochromis', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'labidochromis-caeruleus', name: 'Electric Yellow Cichlid', scientificName: 'Labidochromis caeruleus', rank: 'species' }
                      ]
                    },
                    { id: 'aulonocara', name: 'Peacock Cichlids', scientificName: 'Aulonocara', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'aulonocara-nyassae', name: 'Emperor Cichlid', scientificName: 'Aulonocara nyassae', rank: 'species' },
                        { id: 'aulonocara-stuartgranti', name: 'Flavescent Peacock', scientificName: 'Aulonocara stuartgranti', rank: 'species' }
                      ]
                    },
                    { id: 'haplochromis', name: 'Haplochromines', scientificName: 'Haplochromis', rank: 'genus', speciesCount: 230,
                      children: [
                        { id: 'haplochromis-burtoni', name: 'Burton\'s Mouthbrooder', scientificName: 'Haplochromis burtoni', rank: 'species' }
                      ]
                    },
                    { id: 'geophagus', name: 'Eartheaters', scientificName: 'Geophagus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'geophagus-surinamensis', name: 'Redstriped Eartheater', scientificName: 'Geophagus surinamensis', rank: 'species' },
                        { id: 'geophagus-brasiliensis', name: 'Pearl Cichlid', scientificName: 'Geophagus brasiliensis', rank: 'species' }
                      ]
                    },
                    { id: 'satanoperca', name: 'Demon Eartheaters', scientificName: 'Satanoperca', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'satanoperca-leucosticta', name: 'Jurupari', scientificName: 'Satanoperca leucosticta', rank: 'species' }
                      ]
                    },
                    { id: 'crenicichla', name: 'Pike Cichlids', scientificName: 'Crenicichla', rank: 'genus', speciesCount: 95,
                      children: [
                        { id: 'crenicichla-lepidota', name: 'Pike Cichlid', scientificName: 'Crenicichla lepidota', rank: 'species' }
                      ]
                    },
                    { id: 'apistogramma', name: 'Dwarf Cichlids', scientificName: 'Apistogramma', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'apistogramma-cacatuoides', name: 'Cockatoo Dwarf Cichlid', scientificName: 'Apistogramma cacatuoides', rank: 'species' },
                        { id: 'apistogramma-agassizii', name: 'Agassiz\'s Dwarf Cichlid', scientificName: 'Apistogramma agassizii', rank: 'species' }
                      ]
                    },
                    { id: 'mikrogeophagus', name: 'Ram Cichlids', scientificName: 'Mikrogeophagus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'mikrogeophagus-ramirezi', name: 'Ram Cichlid', scientificName: 'Mikrogeophagus ramirezi', rank: 'species' },
                        { id: 'mikrogeophagus-altispinosus', name: 'Bolivian Ram', scientificName: 'Mikrogeophagus altispinosus', rank: 'species' }
                      ]
                    },
                    { id: 'uaru', name: 'Uaru', scientificName: 'Uaru', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'uaru-amphiacanthoides', name: 'Uaru Cichlid', scientificName: 'Uaru amphiacanthoides', rank: 'species' }
                      ]
                    },
                    { id: 'cichla', name: 'Peacock Bass', scientificName: 'Cichla', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'cichla-ocellaris', name: 'Butterfly Peacock Bass', scientificName: 'Cichla ocellaris', rank: 'species' },
                        { id: 'cichla-temensis', name: 'Speckled Peacock Bass', scientificName: 'Cichla temensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CYPRINODONTIFORMES (Killifish & Livebearers)
            {
              id: 'cyprinodontiformes',
              name: 'Killifish & Livebearers',
              scientificName: 'Cyprinodontiformes',
              rank: 'order',
              speciesCount: 1250,
              children: [
                { id: 'poeciliidae', name: 'Livebearers', scientificName: 'Poeciliidae', rank: 'family', speciesCount: 350,
                  children: [
                    { id: 'poecilia', name: 'Mollies & Guppies', scientificName: 'Poecilia', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'poecilia-reticulata', name: 'Guppy', scientificName: 'Poecilia reticulata', rank: 'species' },
                        { id: 'poecilia-latipinna', name: 'Sailfin Molly', scientificName: 'Poecilia latipinna', rank: 'species' },
                        { id: 'poecilia-sphenops', name: 'Short-finned Molly', scientificName: 'Poecilia sphenops', rank: 'species' },
                        { id: 'poecilia-velifera', name: 'Yucatan Molly', scientificName: 'Poecilia velifera', rank: 'species' }
                      ]
                    },
                    { id: 'xiphophorus', name: 'Swordtails & Platies', scientificName: 'Xiphophorus', rank: 'genus', speciesCount: 28,
                      children: [
                        { id: 'xiphophorus-hellerii', name: 'Green Swordtail', scientificName: 'Xiphophorus hellerii', rank: 'species' },
                        { id: 'xiphophorus-maculatus', name: 'Southern Platyfish', scientificName: 'Xiphophorus maculatus', rank: 'species' },
                        { id: 'xiphophorus-variatus', name: 'Variable Platyfish', scientificName: 'Xiphophorus variatus', rank: 'species' }
                      ]
                    },
                    { id: 'gambusia', name: 'Mosquitofish', scientificName: 'Gambusia', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'gambusia-affinis', name: 'Western Mosquitofish', scientificName: 'Gambusia affinis', rank: 'species' },
                        { id: 'gambusia-holbrooki', name: 'Eastern Mosquitofish', scientificName: 'Gambusia holbrooki', rank: 'species' }
                      ]
                    },
                    { id: 'micropoecilia', name: 'Swamp Guppies', scientificName: 'Micropoecilia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'micropoecilia-picta', name: 'Swamp Guppy', scientificName: 'Micropoecilia picta', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'fundulidae', name: 'Topminnows & Killifish', scientificName: 'Fundulidae', rank: 'family', speciesCount: 45,
                  children: [
                    { id: 'fundulus', name: 'Killifish', scientificName: 'Fundulus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'fundulus-heteroclitus', name: 'Mummichog', scientificName: 'Fundulus heteroclitus', rank: 'species' },
                        { id: 'fundulus-diaphanus', name: 'Banded Killifish', scientificName: 'Fundulus diaphanus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'aplocheilidae', name: 'Asian Killifish', scientificName: 'Aplocheilidae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'aplocheilus', name: 'Panchax', scientificName: 'Aplocheilus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'aplocheilus-lineatus', name: 'Striped Panchax', scientificName: 'Aplocheilus lineatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nothobranchiidae', name: 'African Killifish', scientificName: 'Nothobranchiidae', rank: 'family', speciesCount: 285,
                  children: [
                    { id: 'nothobranchius', name: 'Killifish', scientificName: 'Nothobranchius', rank: 'genus', speciesCount: 88,
                      children: [
                        { id: 'nothobranchius-rachovii', name: 'Rachow\'s Killifish', scientificName: 'Nothobranchius rachovii', rank: 'species' },
                        { id: 'nothobranchius-furzeri', name: 'Turquoise Killifish', scientificName: 'Nothobranchius furzeri', rank: 'species' }
                      ]
                    },
                    { id: 'aphyosemion', name: 'Killifish', scientificName: 'Aphyosemion', rank: 'genus', speciesCount: 95,
                      children: [
                        { id: 'aphyosemion-australe', name: 'Golden Lyretail', scientificName: 'Aphyosemion australe', rank: 'species' },
                        { id: 'aphyosemion-striatum', name: 'Five-banded Killifish', scientificName: 'Aphyosemion striatum', rank: 'species' }
                      ]
                    },
                    { id: 'fundulopanchax', name: 'Killifish', scientificName: 'Fundulopanchax', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'fundulopanchax-gardneri', name: 'Steel-blue Killifish', scientificName: 'Fundulopanchax gardneri', rank: 'species' },
                        { id: 'fundulopanchax-sjoestedti', name: 'Blue Gularis', scientificName: 'Fundulopanchax sjoestedti', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rivulidae', name: 'South American Killifish', scientificName: 'Rivulidae', rank: 'family', speciesCount: 450,
                  children: [
                    { id: 'austrolebias', name: 'Annual Killifish', scientificName: 'Austrolebias', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'austrolebias-nigripinnis', name: 'Blackfin Pearlfish', scientificName: 'Austrolebias nigripinnis', rank: 'species' }
                      ]
                    },
                    { id: 'simpsonichthys', name: 'Brazilian Killifish', scientificName: 'Simpsonichthys', rank: 'genus', speciesCount: 55,
                      children: [
                        { id: 'simpsonichthys-boitonei', name: 'Brazilian Lyretail', scientificName: 'Simpsonichthys boitonei', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'goodeidae', name: 'Splitfins', scientificName: 'Goodeidae', rank: 'family', speciesCount: 55,
                  children: [
                    { id: 'xenotoca', name: 'Splitfins', scientificName: 'Xenotoca', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'xenotoca-eiseni', name: 'Redtail Splitfin', scientificName: 'Xenotoca eiseni', rank: 'species' }
                      ]
                    },
                    { id: 'ameca', name: 'Butterfly Splitfin', scientificName: 'Ameca', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ameca-splendens', name: 'Butterfly Splitfin', scientificName: 'Ameca splendens', rank: 'species' }
                      ]
                    },
                    { id: 'zoogoneticus', name: 'Crescent Splitfins', scientificName: 'Zoogoneticus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'zoogoneticus-tequila', name: 'Tequila Splitfin', scientificName: 'Zoogoneticus tequila', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ANABANTIFORMES (Gouramis & Bettas)
            {
              id: 'anabantiformes',
              name: 'Gouramis & Bettas',
              scientificName: 'Anabantiformes',
              rank: 'order',
              speciesCount: 200,
              children: [
                { id: 'osphronemidae', name: 'Gouramis', scientificName: 'Osphronemidae', rank: 'family', speciesCount: 135,
                  children: [
                    { id: 'betta', name: 'Fighting Fish', scientificName: 'Betta', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'betta-splendens', name: 'Siamese Fighting Fish', scientificName: 'Betta splendens', rank: 'species' },
                        { id: 'betta-imbellis', name: 'Peaceful Betta', scientificName: 'Betta imbellis', rank: 'species' },
                        { id: 'betta-smaragdina', name: 'Emerald Betta', scientificName: 'Betta smaragdina', rank: 'species' }
                      ]
                    },
                    { id: 'trichogaster', name: 'Gouramis', scientificName: 'Trichogaster', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'trichogaster-leerii', name: 'Pearl Gourami', scientificName: 'Trichogaster leerii', rank: 'species' },
                        { id: 'trichogaster-trichopterus', name: 'Three-spot Gourami', scientificName: 'Trichogaster trichopterus', rank: 'species' }
                      ]
                    },
                    { id: 'trichopodus', name: 'Giant Gouramis', scientificName: 'Trichopodus', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'trichopodus-pectoralis', name: 'Snakeskin Gourami', scientificName: 'Trichopodus pectoralis', rank: 'species' }
                      ]
                    },
                    { id: 'colisa', name: 'Dwarf Gouramis', scientificName: 'Colisa', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'colisa-lalia', name: 'Dwarf Gourami', scientificName: 'Colisa lalia', rank: 'species' }
                      ]
                    },
                    { id: 'osphronemus', name: 'Giant Gourami', scientificName: 'Osphronemus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'osphronemus-goramy', name: 'Giant Gourami', scientificName: 'Osphronemus goramy', rank: 'species' }
                      ]
                    },
                    { id: 'macropodus', name: 'Paradise Fish', scientificName: 'Macropodus', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'macropodus-opercularis', name: 'Paradise Fish', scientificName: 'Macropodus opercularis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'helostomatidae', name: 'Kissing Gourami', scientificName: 'Helostomatidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'helostoma', name: 'Kissing Gourami', scientificName: 'Helostoma', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'helostoma-temminkii', name: 'Kissing Gourami', scientificName: 'Helostoma temminkii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'anabantidae', name: 'Climbing Gouramis', scientificName: 'Anabantidae', rank: 'family', speciesCount: 34,
                  children: [
                    { id: 'anabas', name: 'Climbing Perch', scientificName: 'Anabas', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'anabas-testudineus', name: 'Climbing Perch', scientificName: 'Anabas testudineus', rank: 'species' }
                      ]
                    },
                    { id: 'ctenopoma', name: 'African Climbing Perch', scientificName: 'Ctenopoma', rank: 'genus', speciesCount: 19,
                      children: [
                        { id: 'ctenopoma-acutirostre', name: 'Leopard Bushfish', scientificName: 'Ctenopoma acutirostre', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: AULOPIFORMES (Lizardfish & Lancetfish)
            {
              id: 'aulopiformes',
              name: 'Lizardfish & Lancetfish',
              scientificName: 'Aulopiformes',
              rank: 'order',
              speciesCount: 250,
              children: [
                { id: 'synodontidae', name: 'Lizardfish', scientificName: 'Synodontidae', rank: 'family', speciesCount: 75,
                  children: [
                    { id: 'synodus', name: 'Lizardfish', scientificName: 'Synodus', rank: 'genus', speciesCount: 38,
                      children: [
                        { id: 'synodus-intermedius', name: 'Sand Diver', scientificName: 'Synodus intermedius', rank: 'species' },
                        { id: 'synodus-synodus', name: 'Diamond Lizardfish', scientificName: 'Synodus synodus', rank: 'species' }
                      ]
                    },
                    { id: 'trachinocephalus', name: 'Snakefish', scientificName: 'Trachinocephalus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'trachinocephalus-myops', name: 'Snakefish', scientificName: 'Trachinocephalus myops', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'alepisauridae', name: 'Lancetfish', scientificName: 'Alepisauridae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'alepisaurus', name: 'Lancetfish', scientificName: 'Alepisaurus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'alepisaurus-ferox', name: 'Longnose Lancetfish', scientificName: 'Alepisaurus ferox', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scopelarchidae', name: 'Pearleyes', scientificName: 'Scopelarchidae', rank: 'family', speciesCount: 18,
                  children: [
                    { id: 'scopelarchus', name: 'Pearleyes', scientificName: 'Scopelarchus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'scopelarchus-analis', name: 'Short-fin Pearleye', scientificName: 'Scopelarchus analis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'paralepididae', name: 'Barracudinas', scientificName: 'Paralepididae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'paralepis', name: 'Barracudinas', scientificName: 'Paralepis', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'paralepis-atlantica', name: 'Atlantic Barracudina', scientificName: 'Paralepis atlantica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: NOTACANTHIFORMES (Spiny Eels)
            {
              id: 'notacanthiformes',
              name: 'Spiny Eels & Halosaurs',
              scientificName: 'Notacanthiformes',
              rank: 'order',
              speciesCount: 30,
              children: [
                { id: 'notacanthidae', name: 'Spiny Eels', scientificName: 'Notacanthidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'notacanthus', name: 'Spiny Eels', scientificName: 'Notacanthus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'notacanthus-chemnitzii', name: 'Snubnosed Spiny Eel', scientificName: 'Notacanthus chemnitzii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'halosauridae', name: 'Halosaurs', scientificName: 'Halosauridae', rank: 'family', speciesCount: 18,
                  children: [
                    { id: 'halosaurus', name: 'Halosaurs', scientificName: 'Halosaurus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'halosaurus-ovenii', name: 'Halosaur', scientificName: 'Halosaurus ovenii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: POLYMIXIIFORMES (Beardfish)
            {
              id: 'polymixiiformes',
              name: 'Beardfish',
              scientificName: 'Polymixiiformes',
              rank: 'order',
              speciesCount: 10,
              children: [
                { id: 'polymixiidae', name: 'Beardfish', scientificName: 'Polymixiidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'polymixia', name: 'Beardfish', scientificName: 'Polymixia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'polymixia-nobilis', name: 'Stout Beardfish', scientificName: 'Polymixia nobilis', rank: 'species' },
                        { id: 'polymixia-lowei', name: 'Beardfish', scientificName: 'Polymixia lowei', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: OPHIDIIFORMES (Cusk-eels & Pearlfishes)
            {
              id: 'ophidiiformes',
              name: 'Cusk-eels & Pearlfishes',
              scientificName: 'Ophidiiformes',
              rank: 'order',
              speciesCount: 530,
              children: [
                { id: 'ophidiidae', name: 'Cusk-eels', scientificName: 'Ophidiidae', rank: 'family', speciesCount: 260,
                  children: [
                    { id: 'ophidion', name: 'Cusk-eels', scientificName: 'Ophidion', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'ophidion-barbatum', name: 'Snake Blenny', scientificName: 'Ophidion barbatum', rank: 'species' }
                      ]
                    },
                    { id: 'genypterus', name: 'Cusk-eels', scientificName: 'Genypterus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'genypterus-blacodes', name: 'Pink Cusk-eel', scientificName: 'Genypterus blacodes', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'carapidae', name: 'Pearlfishes', scientificName: 'Carapidae', rank: 'family', speciesCount: 36,
                  children: [
                    { id: 'carapus', name: 'Pearlfishes', scientificName: 'Carapus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'carapus-acus', name: 'Pearlfish', scientificName: 'Carapus acus', rank: 'species' }
                      ]
                    },
                    { id: 'encheliophis', name: 'Sea Cucumber Pearlfishes', scientificName: 'Encheliophis', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'encheliophis-homei', name: 'Silver Pearlfish', scientificName: 'Encheliophis homei', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bythitidae', name: 'Viviparous Brotulas', scientificName: 'Bythitidae', rank: 'family', speciesCount: 115,
                  children: [
                    { id: 'ogilbia', name: 'Coral Brotulas', scientificName: 'Ogilbia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'ogilbia-cayorum', name: 'Key Brotula', scientificName: 'Ogilbia cayorum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // CLASS: CHONDRICHTHYES
        {
          id: 'chondrichthyes',
          name: 'Sharks, Rays & Chimeras',
          scientificName: 'Chondrichthyes',
          rank: 'class',
          description: 'Cartilaginous fish with skeletons made of cartilage rather than bone',
          speciesCount: 1200,
          children: [
            // ORDER: CARCHARHINIFORMES (Ground Sharks)
            {
              id: 'carcharhiniformes',
              name: 'Ground Sharks',
              scientificName: 'Carcharhiniformes',
              rank: 'order',
              speciesCount: 270,
              children: [
                { id: 'carcharhinidae', name: 'Requiem Sharks', scientificName: 'Carcharhinidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'carcharhinus', name: 'Requiem Sharks', scientificName: 'Carcharhinus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'carcharhinus-leucas', name: 'Bull Shark', scientificName: 'Carcharhinus leucas', rank: 'species' },
                        { id: 'carcharhinus-longimanus', name: 'Oceanic Whitetip Shark', scientificName: 'Carcharhinus longimanus', rank: 'species' },
                        { id: 'carcharhinus-melanopterus', name: 'Blacktip Reef Shark', scientificName: 'Carcharhinus melanopterus', rank: 'species' },
                        { id: 'carcharhinus-amblyrhynchos', name: 'Grey Reef Shark', scientificName: 'Carcharhinus amblyrhynchos', rank: 'species' },
                        { id: 'carcharhinus-limbatus', name: 'Blacktip Shark', scientificName: 'Carcharhinus limbatus', rank: 'species' }
                      ]
                    },
                    { id: 'galeocerdo', name: 'Tiger Sharks', scientificName: 'Galeocerdo', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'galeocerdo-cuvier', name: 'Tiger Shark', scientificName: 'Galeocerdo cuvier', rank: 'species' }
                      ]
                    },
                    { id: 'prionace', name: 'Blue Sharks', scientificName: 'Prionace', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'prionace-glauca', name: 'Blue Shark', scientificName: 'Prionace glauca', rank: 'species' }
                      ]
                    },
                    { id: 'negaprion', name: 'Lemon Sharks', scientificName: 'Negaprion', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'negaprion-brevirostris', name: 'Lemon Shark', scientificName: 'Negaprion brevirostris', rank: 'species' }
                      ]
                    },
                    { id: 'triaenodon', name: 'Whitetip Reef Sharks', scientificName: 'Triaenodon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'triaenodon-obesus', name: 'Whitetip Reef Shark', scientificName: 'Triaenodon obesus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sphyrnidae', name: 'Hammerhead Sharks', scientificName: 'Sphyrnidae', rank: 'family', speciesCount: 9,
                  children: [
                    { id: 'sphyrna', name: 'Hammerheads', scientificName: 'Sphyrna', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'sphyrna-mokarran', name: 'Great Hammerhead Shark', scientificName: 'Sphyrna mokarran', rank: 'species' },
                        { id: 'sphyrna-lewini', name: 'Scalloped Hammerhead', scientificName: 'Sphyrna lewini', rank: 'species' },
                        { id: 'sphyrna-zygaena', name: 'Smooth Hammerhead', scientificName: 'Sphyrna zygaena', rank: 'species' },
                        { id: 'sphyrna-tiburo', name: 'Bonnethead', scientificName: 'Sphyrna tiburo', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scyliorhinidae', name: 'Catsharks', scientificName: 'Scyliorhinidae', rank: 'family', speciesCount: 160,
                  children: [
                    { id: 'scyliorhinus', name: 'Catsharks', scientificName: 'Scyliorhinus', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'scyliorhinus-canicula', name: 'Small-spotted Catshark', scientificName: 'Scyliorhinus canicula', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'triakidae', name: 'Hound Sharks', scientificName: 'Triakidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'galeorhinus', name: 'School Sharks', scientificName: 'Galeorhinus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'galeorhinus-galeus', name: 'School Shark', scientificName: 'Galeorhinus galeus', rank: 'species' }
                      ]
                    },
                    { id: 'mustelus', name: 'Smooth-hound Sharks', scientificName: 'Mustelus', rank: 'genus', speciesCount: 27,
                      children: [
                        { id: 'mustelus-canis', name: 'Dusky Smooth-hound', scientificName: 'Mustelus canis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: LAMNIFORMES (Mackerel Sharks)
            {
              id: 'lamniformes',
              name: 'Mackerel Sharks',
              scientificName: 'Lamniformes',
              rank: 'order',
              speciesCount: 15,
              children: [
                { id: 'lamnidae', name: 'Mackerel Sharks', scientificName: 'Lamnidae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'carcharodon', name: 'White Sharks', scientificName: 'Carcharodon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'carcharodon-carcharias', name: 'Great White Shark', scientificName: 'Carcharodon carcharias', rank: 'species' }
                      ]
                    },
                    { id: 'isurus', name: 'Mako Sharks', scientificName: 'Isurus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'isurus-oxyrinchus', name: 'Shortfin Mako', scientificName: 'Isurus oxyrinchus', rank: 'species' },
                        { id: 'isurus-paucus', name: 'Longfin Mako', scientificName: 'Isurus paucus', rank: 'species' }
                      ]
                    },
                    { id: 'lamna', name: 'Porbeagles', scientificName: 'Lamna', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'lamna-nasus', name: 'Porbeagle', scientificName: 'Lamna nasus', rank: 'species' },
                        { id: 'lamna-ditropis', name: 'Salmon Shark', scientificName: 'Lamna ditropis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cetorhinidae', name: 'Basking Sharks', scientificName: 'Cetorhinidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'cetorhinus', name: 'Basking Sharks', scientificName: 'Cetorhinus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'cetorhinus-maximus', name: 'Basking Shark', scientificName: 'Cetorhinus maximus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'alopiidae', name: 'Thresher Sharks', scientificName: 'Alopiidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'alopias', name: 'Thresher Sharks', scientificName: 'Alopias', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'alopias-vulpinus', name: 'Common Thresher Shark', scientificName: 'Alopias vulpinus', rank: 'species' },
                        { id: 'alopias-pelagicus', name: 'Pelagic Thresher', scientificName: 'Alopias pelagicus', rank: 'species' },
                        { id: 'alopias-superciliosus', name: 'Bigeye Thresher', scientificName: 'Alopias superciliosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'megachasmidae', name: 'Megamouth Sharks', scientificName: 'Megachasmidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'megachasma', name: 'Megamouth Sharks', scientificName: 'Megachasma', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'megachasma-pelagios', name: 'Megamouth Shark', scientificName: 'Megachasma pelagios', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mitsukurinidae', name: 'Goblin Sharks', scientificName: 'Mitsukurinidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'mitsukurina', name: 'Goblin Sharks', scientificName: 'Mitsukurina', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'mitsukurina-owstoni', name: 'Goblin Shark', scientificName: 'Mitsukurina owstoni', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ORECTOLOBIFORMES (Carpet Sharks)
            {
              id: 'orectolobiformes',
              name: 'Carpet Sharks',
              scientificName: 'Orectolobiformes',
              rank: 'order',
              speciesCount: 43,
              children: [
                { id: 'rhincodontidae', name: 'Whale Sharks', scientificName: 'Rhincodontidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'rhincodon', name: 'Whale Sharks', scientificName: 'Rhincodon', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'rhincodon-typus', name: 'Whale Shark', scientificName: 'Rhincodon typus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'orectolobidae', name: 'Wobbegongs', scientificName: 'Orectolobidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'orectolobus', name: 'Wobbegongs', scientificName: 'Orectolobus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'orectolobus-maculatus', name: 'Spotted Wobbegong', scientificName: 'Orectolobus maculatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ginglymostomatidae', name: 'Nurse Sharks', scientificName: 'Ginglymostomatidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'ginglymostoma', name: 'Nurse Sharks', scientificName: 'Ginglymostoma', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'ginglymostoma-cirratum', name: 'Nurse Shark', scientificName: 'Ginglymostoma cirratum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hemiscylliidae', name: 'Epaulette Sharks', scientificName: 'Hemiscylliidae', rank: 'family', speciesCount: 17,
                  children: [
                    { id: 'hemiscyllium', name: 'Walking Sharks', scientificName: 'Hemiscyllium', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'hemiscyllium-ocellatum', name: 'Epaulette Shark', scientificName: 'Hemiscyllium ocellatum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SQUALIFORMES (Dogfish Sharks)
            {
              id: 'squaliformes',
              name: 'Dogfish Sharks',
              scientificName: 'Squaliformes',
              rank: 'order',
              speciesCount: 130,
              children: [
                { id: 'squalidae', name: 'Dogfish', scientificName: 'Squalidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'squalus', name: 'Spiny Dogfish', scientificName: 'Squalus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'squalus-acanthias', name: 'Spiny Dogfish', scientificName: 'Squalus acanthias', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'somniosidae', name: 'Sleeper Sharks', scientificName: 'Somniosidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'somniosus', name: 'Sleeper Sharks', scientificName: 'Somniosus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'somniosus-microcephalus', name: 'Greenland Shark', scientificName: 'Somniosus microcephalus', rank: 'species' },
                        { id: 'somniosus-pacificus', name: 'Pacific Sleeper Shark', scientificName: 'Somniosus pacificus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dalatiidae', name: 'Kitefin Sharks', scientificName: 'Dalatiidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'isistius', name: 'Cookiecutter Sharks', scientificName: 'Isistius', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'isistius-brasiliensis', name: 'Cookiecutter Shark', scientificName: 'Isistius brasiliensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: HEXANCHIFORMES (Cow Sharks)
            {
              id: 'hexanchiformes',
              name: 'Cow Sharks & Frilled Sharks',
              scientificName: 'Hexanchiformes',
              rank: 'order',
              speciesCount: 7,
              children: [
                { id: 'hexanchidae', name: 'Cow Sharks', scientificName: 'Hexanchidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'hexanchus', name: 'Sixgill Sharks', scientificName: 'Hexanchus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'hexanchus-griseus', name: 'Bluntnose Sixgill Shark', scientificName: 'Hexanchus griseus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chlamydoselachidae', name: 'Frilled Sharks', scientificName: 'Chlamydoselachidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'chlamydoselachus', name: 'Frilled Sharks', scientificName: 'Chlamydoselachus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'chlamydoselachus-anguineus', name: 'Frilled Shark', scientificName: 'Chlamydoselachus anguineus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SQUATINIFORMES (Angel Sharks)
            {
              id: 'squatiniformes',
              name: 'Angel Sharks',
              scientificName: 'Squatiniformes',
              rank: 'order',
              speciesCount: 23,
              children: [
                { id: 'squatinidae', name: 'Angel Sharks', scientificName: 'Squatinidae', rank: 'family', speciesCount: 23,
                  children: [
                    { id: 'squatina', name: 'Angel Sharks', scientificName: 'Squatina', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'squatina-squatina', name: 'Common Angelshark', scientificName: 'Squatina squatina', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: RAJIFORMES (Rays & Skates)
            {
              id: 'rajiformes',
              name: 'Rays & Skates',
              scientificName: 'Rajiformes',
              rank: 'order',
              speciesCount: 630,
              children: [
                { id: 'rajidae', name: 'Skates', scientificName: 'Rajidae', rank: 'family', speciesCount: 270,
                  children: [
                    { id: 'raja', name: 'Skates', scientificName: 'Raja', rank: 'genus', speciesCount: 16,
                      children: [
                        { id: 'raja-clavata', name: 'Thornback Ray', scientificName: 'Raja clavata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dasyatidae', name: 'Stingrays', scientificName: 'Dasyatidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'dasyatis', name: 'Whiptail Stingrays', scientificName: 'Dasyatis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'dasyatis-pastinaca', name: 'Common Stingray', scientificName: 'Dasyatis pastinaca', rank: 'species' }
                      ]
                    },
                    { id: 'hypanus', name: 'American Stingrays', scientificName: 'Hypanus', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'hypanus-americanus', name: 'Southern Stingray', scientificName: 'Hypanus americanus', rank: 'species' }
                      ]
                    },
                    { id: 'potamotrygon', name: 'River Stingrays', scientificName: 'Potamotrygon', rank: 'genus', speciesCount: 32,
                      children: [
                        { id: 'potamotrygon-motoro', name: 'Ocellate River Stingray', scientificName: 'Potamotrygon motoro', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mobulidae', name: 'Manta Rays & Devil Rays', scientificName: 'Mobulidae', rank: 'family', speciesCount: 11,
                  children: [
                    { id: 'mobula', name: 'Manta & Devil Rays', scientificName: 'Mobula', rank: 'genus', speciesCount: 11,
                      children: [
                        { id: 'mobula-birostris', name: 'Oceanic Manta Ray', scientificName: 'Mobula birostris', rank: 'species' },
                        { id: 'mobula-alfredi', name: 'Reef Manta Ray', scientificName: 'Mobula alfredi', rank: 'species' },
                        { id: 'mobula-mobular', name: 'Giant Devil Ray', scientificName: 'Mobula mobular', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'myliobatidae', name: 'Eagle Rays', scientificName: 'Myliobatidae', rank: 'family', speciesCount: 42,
                  children: [
                    { id: 'aetobatus', name: 'Spotted Eagle Rays', scientificName: 'Aetobatus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'aetobatus-narinari', name: 'Spotted Eagle Ray', scientificName: 'Aetobatus narinari', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'torpedinidae', name: 'Electric Rays', scientificName: 'Torpedinidae', rank: 'family', speciesCount: 22,
                  children: [
                    { id: 'torpedo', name: 'Electric Rays', scientificName: 'Torpedo', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'torpedo-torpedo', name: 'Common Torpedo', scientificName: 'Torpedo torpedo', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pristidae', name: 'Sawfish', scientificName: 'Pristidae', rank: 'family', speciesCount: 5,
                  children: [
                    { id: 'pristis', name: 'Sawfish', scientificName: 'Pristis', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'pristis-pristis', name: 'Common Sawfish', scientificName: 'Pristis pristis', rank: 'species' },
                        { id: 'pristis-pectinata', name: 'Smalltooth Sawfish', scientificName: 'Pristis pectinata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'rhinobatidae', name: 'Guitarfish', scientificName: 'Rhinobatidae', rank: 'family', speciesCount: 47,
                  children: [
                    { id: 'rhinobatos', name: 'Guitarfish', scientificName: 'Rhinobatos', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'rhinobatos-productus', name: 'Shovelnose Guitarfish', scientificName: 'Rhinobatos productus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: CHIMAERIFORMES (Chimeras)
            {
              id: 'chimaeriformes',
              name: 'Chimeras',
              scientificName: 'Chimaeriformes',
              rank: 'order',
              speciesCount: 52,
              children: [
                { id: 'chimaeridae', name: 'Shortnose Chimeras', scientificName: 'Chimaeridae', rank: 'family', speciesCount: 39,
                  children: [
                    { id: 'chimaera', name: 'Ratfish', scientificName: 'Chimaera', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'chimaera-monstrosa', name: 'Rabbit Fish', scientificName: 'Chimaera monstrosa', rank: 'species' }
                      ]
                    },
                    { id: 'hydrolagus', name: 'Ratfish', scientificName: 'Hydrolagus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'hydrolagus-colliei', name: 'Spotted Ratfish', scientificName: 'Hydrolagus colliei', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'callorhinchidae', name: 'Plownose Chimeras', scientificName: 'Callorhinchidae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'callorhinchus', name: 'Elephantfish', scientificName: 'Callorhinchus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'callorhinchus-milii', name: 'Australian Ghostshark', scientificName: 'Callorhinchus milii', rank: 'species' }
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
    // PHYLUM: ARTHROPODA
    {
      id: 'arthropoda',
      name: 'Arthropods',
      scientificName: 'Arthropoda',
      rank: 'phylum',
      description: 'Invertebrates with exoskeletons and jointed limbs',
      speciesCount: 1200000,
      children: [
        {
          id: 'insecta',
          name: 'Insects',
          scientificName: 'Insecta',
          rank: 'class',
          speciesCount: 1000000,
          children: [
            // ORDER: COLEOPTERA
            {
              id: 'coleoptera',
              name: 'Beetles',
              scientificName: 'Coleoptera',
              rank: 'order',
              speciesCount: 400000,
              children: [
                { id: 'scarabaeidae', name: 'Scarab Beetles', scientificName: 'Scarabaeidae', rank: 'family', speciesCount: 30000,
                  children: [
                    { id: 'scarabaeus', name: 'Dung Beetles', scientificName: 'Scarabaeus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'scarabaeus-sacer', name: 'Sacred Scarab', scientificName: 'Scarabaeus sacer', rank: 'species' }
                      ]
                    },
                    { id: 'dynastes', name: 'Rhinoceros Beetles', scientificName: 'Dynastes', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'dynastes-hercules', name: 'Hercules Beetle', scientificName: 'Dynastes hercules', rank: 'species' },
                        { id: 'dynastes-tityus', name: 'Eastern Hercules Beetle', scientificName: 'Dynastes tityus', rank: 'species' }
                      ]
                    },
                    { id: 'oryctes', name: 'Rhinoceros Beetles', scientificName: 'Oryctes', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'oryctes-rhinoceros', name: 'Coconut Rhinoceros Beetle', scientificName: 'Oryctes rhinoceros', rank: 'species' }
                      ]
                    },
                    { id: 'megasoma', name: 'Elephant Beetles', scientificName: 'Megasoma', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'megasoma-elephas', name: 'Elephant Beetle', scientificName: 'Megasoma elephas', rank: 'species' },
                        { id: 'megasoma-actaeon', name: 'Actaeon Beetle', scientificName: 'Megasoma actaeon', rank: 'species' }
                      ]
                    },
                    { id: 'phyllophaga', name: 'June Beetles', scientificName: 'Phyllophaga', rank: 'genus', speciesCount: 900,
                      children: [
                        { id: 'phyllophaga-lanceolata', name: 'June Bug', scientificName: 'Phyllophaga lanceolata', rank: 'species' }
                      ]
                    },
                    { id: 'popillia', name: 'Japanese Beetles', scientificName: 'Popillia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'popillia-japonica', name: 'Japanese Beetle', scientificName: 'Popillia japonica', rank: 'species' }
                      ]
                    },
                    { id: 'cetonia', name: 'Rose Chafers', scientificName: 'Cetonia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'cetonia-aurata', name: 'Rose Chafer', scientificName: 'Cetonia aurata', rank: 'species' }
                      ]
                    },
                    { id: 'goliathus', name: 'Goliath Beetles', scientificName: 'Goliathus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'goliathus-goliatus', name: 'Goliath Beetle', scientificName: 'Goliathus goliatus', rank: 'species' },
                        { id: 'goliathus-regius', name: 'Royal Goliath Beetle', scientificName: 'Goliathus regius', rank: 'species' }
                      ]
                    },
                    { id: 'onthophagus', name: 'Dung Beetles', scientificName: 'Onthophagus', rank: 'genus', speciesCount: 2000,
                      children: [
                        { id: 'onthophagus-taurus', name: 'Taurus Scarab', scientificName: 'Onthophagus taurus', rank: 'species' }
                      ]
                    },
                    { id: 'copris', name: 'Dung Beetles', scientificName: 'Copris', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'copris-lunaris', name: 'Moon Copris', scientificName: 'Copris lunaris', rank: 'species' }
                      ]
                    },
                    { id: 'chalcosoma', name: 'Atlas Beetles', scientificName: 'Chalcosoma', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'chalcosoma-atlas', name: 'Atlas Beetle', scientificName: 'Chalcosoma atlas', rank: 'species' },
                        { id: 'chalcosoma-caucasus', name: 'Caucasus Beetle', scientificName: 'Chalcosoma caucasus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cerambycidae', name: 'Longhorn Beetles', scientificName: 'Cerambycidae', rank: 'family', speciesCount: 35000,
                  children: [
                    { id: 'anoplophora', name: 'Longhorn Beetles', scientificName: 'Anoplophora', rank: 'genus', speciesCount: 36,
                      children: [
                        { id: 'anoplophora-glabripennis', name: 'Asian Longhorned Beetle', scientificName: 'Anoplophora glabripennis', rank: 'species' }
                      ]
                    },
                    { id: 'titanus', name: 'Titan Beetles', scientificName: 'Titanus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'titanus-giganteus', name: 'Titan Beetle', scientificName: 'Titanus giganteus', rank: 'species' }
                      ]
                    },
                    { id: 'monochamus', name: 'Sawyer Beetles', scientificName: 'Monochamus', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'monochamus-scutellatus', name: 'White-spotted Sawyer', scientificName: 'Monochamus scutellatus', rank: 'species' }
                      ]
                    },
                    { id: 'saperda', name: 'Round-headed Borers', scientificName: 'Saperda', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'saperda-candida', name: 'Round-headed Apple Tree Borer', scientificName: 'Saperda candida', rank: 'species' }
                      ]
                    },
                    { id: 'rosalia', name: 'Rosalia Longhorns', scientificName: 'Rosalia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'rosalia-alpina', name: 'Alpine Longhorn', scientificName: 'Rosalia alpina', rank: 'species' },
                        { id: 'rosalia-funebris', name: 'Banded Alder Borer', scientificName: 'Rosalia funebris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'coccinellidae', name: 'Ladybugs', scientificName: 'Coccinellidae', rank: 'family', speciesCount: 6000,
                  children: [
                    { id: 'coccinella', name: 'Lady Beetles', scientificName: 'Coccinella', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'coccinella-septempunctata', name: 'Seven-spot Ladybird', scientificName: 'Coccinella septempunctata', rank: 'species' }
                      ]
                    },
                    { id: 'harmonia', name: 'Asian Lady Beetles', scientificName: 'Harmonia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'harmonia-axyridis', name: 'Harlequin Ladybird', scientificName: 'Harmonia axyridis', rank: 'species' }
                      ]
                    },
                    { id: 'hippodamia', name: 'Convergent Ladybugs', scientificName: 'Hippodamia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'hippodamia-convergens', name: 'Convergent Lady Beetle', scientificName: 'Hippodamia convergens', rank: 'species' }
                      ]
                    },
                    { id: 'adalia', name: 'Two-spotted Ladybugs', scientificName: 'Adalia', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'adalia-bipunctata', name: 'Two-spot Ladybird', scientificName: 'Adalia bipunctata', rank: 'species' }
                      ]
                    },
                    { id: 'chilocorus', name: 'Kidney-spot Ladybugs', scientificName: 'Chilocorus', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'chilocorus-stigma', name: 'Twice-stabbed Lady Beetle', scientificName: 'Chilocorus stigma', rank: 'species' }
                      ]
                    },
                    { id: 'rodolia', name: 'Vedalia Beetles', scientificName: 'Rodolia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'rodolia-cardinalis', name: 'Vedalia Beetle', scientificName: 'Rodolia cardinalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lucanidae', name: 'Stag Beetles', scientificName: 'Lucanidae', rank: 'family', speciesCount: 1200,
                  children: [
                    { id: 'lucanus', name: 'Stag Beetles', scientificName: 'Lucanus', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'lucanus-cervus', name: 'European Stag Beetle', scientificName: 'Lucanus cervus', rank: 'species' },
                        { id: 'lucanus-elaphus', name: 'Giant Stag Beetle', scientificName: 'Lucanus elaphus', rank: 'species' }
                      ]
                    },
                    { id: 'dorcus', name: 'Lesser Stag Beetles', scientificName: 'Dorcus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'dorcus-parallelipipedus', name: 'Lesser Stag Beetle', scientificName: 'Dorcus parallelipipedus', rank: 'species' },
                        { id: 'dorcus-titanus', name: 'Palawan Stag Beetle', scientificName: 'Dorcus titanus', rank: 'species' }
                      ]
                    },
                    { id: 'odontolabis', name: 'Giant Jaw Stag Beetles', scientificName: 'Odontolabis', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'odontolabis-elegans', name: 'Elegant Stag Beetle', scientificName: 'Odontolabis elegans', rank: 'species' }
                      ]
                    },
                    { id: 'prosopocoilus', name: 'Saw-toothed Stag Beetles', scientificName: 'Prosopocoilus', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'prosopocoilus-giraffa', name: 'Giraffe Stag Beetle', scientificName: 'Prosopocoilus giraffa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chrysomelidae', name: 'Leaf Beetles', scientificName: 'Chrysomelidae', rank: 'family', speciesCount: 35000,
                  children: [
                    { id: 'leptinotarsa', name: 'Colorado Beetles', scientificName: 'Leptinotarsa', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'leptinotarsa-decemlineata', name: 'Colorado Potato Beetle', scientificName: 'Leptinotarsa decemlineata', rank: 'species' }
                      ]
                    },
                    { id: 'chrysolina', name: 'Leaf Beetles', scientificName: 'Chrysolina', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'chrysolina-americana', name: 'Rosemary Beetle', scientificName: 'Chrysolina americana', rank: 'species' }
                      ]
                    },
                    { id: 'diabrotica', name: 'Cucumber Beetles', scientificName: 'Diabrotica', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'diabrotica-virgifera', name: 'Western Corn Rootworm', scientificName: 'Diabrotica virgifera', rank: 'species' },
                        { id: 'diabrotica-undecimpunctata', name: 'Spotted Cucumber Beetle', scientificName: 'Diabrotica undecimpunctata', rank: 'species' }
                      ]
                    },
                    { id: 'galerucella', name: 'Water Lily Beetles', scientificName: 'Galerucella', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'galerucella-nymphaeae', name: 'Water Lily Beetle', scientificName: 'Galerucella nymphaeae', rank: 'species' }
                      ]
                    },
                    { id: 'donacia', name: 'Reed Beetles', scientificName: 'Donacia', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'donacia-crassipes', name: 'Water Lily Reed Beetle', scientificName: 'Donacia crassipes', rank: 'species' }
                      ]
                    },
                    { id: 'oulema', name: 'Cereal Leaf Beetles', scientificName: 'Oulema', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'oulema-melanopus', name: 'Cereal Leaf Beetle', scientificName: 'Oulema melanopus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lampyridae', name: 'Fireflies', scientificName: 'Lampyridae', rank: 'family', speciesCount: 2000,
                  children: [
                    { id: 'photinus', name: 'Common Fireflies', scientificName: 'Photinus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'photinus-pyralis', name: 'Common Eastern Firefly', scientificName: 'Photinus pyralis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'curculionidae', name: 'Weevils', scientificName: 'Curculionidae', rank: 'family', speciesCount: 83000,
                  children: [
                    { id: 'sitophilus', name: 'Grain Weevils', scientificName: 'Sitophilus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'sitophilus-granarius', name: 'Granary Weevil', scientificName: 'Sitophilus granarius', rank: 'species' },
                        { id: 'sitophilus-oryzae', name: 'Rice Weevil', scientificName: 'Sitophilus oryzae', rank: 'species' }
                      ]
                    },
                    { id: 'curculio', name: 'Nut Weevils', scientificName: 'Curculio', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'curculio-glandium', name: 'Acorn Weevil', scientificName: 'Curculio glandium', rank: 'species' },
                        { id: 'curculio-nucum', name: 'Hazelnut Weevil', scientificName: 'Curculio nucum', rank: 'species' }
                      ]
                    },
                    { id: 'rhynchophorus', name: 'Palm Weevils', scientificName: 'Rhynchophorus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'rhynchophorus-ferrugineus', name: 'Red Palm Weevil', scientificName: 'Rhynchophorus ferrugineus', rank: 'species' }
                      ]
                    },
                    { id: 'anthonomus', name: 'Bud Weevils', scientificName: 'Anthonomus', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'anthonomus-grandis', name: 'Boll Weevil', scientificName: 'Anthonomus grandis', rank: 'species' }
                      ]
                    },
                    { id: 'dendroctonus', name: 'Bark Beetles', scientificName: 'Dendroctonus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'dendroctonus-ponderosae', name: 'Mountain Pine Beetle', scientificName: 'Dendroctonus ponderosae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'carabidae', name: 'Ground Beetles', scientificName: 'Carabidae', rank: 'family', speciesCount: 40000,
                  children: [
                    { id: 'carabus', name: 'Ground Beetles', scientificName: 'Carabus', rank: 'genus', speciesCount: 900,
                      children: [
                        { id: 'carabus-nemoralis', name: 'Bronze Ground Beetle', scientificName: 'Carabus nemoralis', rank: 'species' },
                        { id: 'carabus-violaceus', name: 'Violet Ground Beetle', scientificName: 'Carabus violaceus', rank: 'species' }
                      ]
                    },
                    { id: 'pterostichus', name: 'Woodland Ground Beetles', scientificName: 'Pterostichus', rank: 'genus', speciesCount: 1200,
                      children: [
                        { id: 'pterostichus-melanarius', name: 'Black Clock Beetle', scientificName: 'Pterostichus melanarius', rank: 'species' }
                      ]
                    },
                    { id: 'harpalus', name: 'Harpaline Ground Beetles', scientificName: 'Harpalus', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'harpalus-affinis', name: 'Strawberry Seed Beetle', scientificName: 'Harpalus affinis', rank: 'species' }
                      ]
                    },
                    { id: 'cicindela', name: 'Tiger Beetles', scientificName: 'Cicindela', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'cicindela-campestris', name: 'Green Tiger Beetle', scientificName: 'Cicindela campestris', rank: 'species' },
                        { id: 'cicindela-sexguttata', name: 'Six-spotted Tiger Beetle', scientificName: 'Cicindela sexguttata', rank: 'species' }
                      ]
                    },
                    { id: 'brachinus', name: 'Bombardier Beetles', scientificName: 'Brachinus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'brachinus-crepitans', name: 'Bombardier Beetle', scientificName: 'Brachinus crepitans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'staphylinidae', name: 'Rove Beetles', scientificName: 'Staphylinidae', rank: 'family', speciesCount: 63000,
                  children: [
                    { id: 'staphylinus', name: 'Large Rove Beetles', scientificName: 'Staphylinus', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'staphylinus-olens', name: 'Devils Coach Horse', scientificName: 'Ocypus olens', rank: 'species' }
                      ]
                    },
                    { id: 'philonthus', name: 'Philonthus Rove Beetles', scientificName: 'Philonthus', rank: 'genus', speciesCount: 1000,
                      children: [
                        { id: 'philonthus-cognatus', name: 'Common Rove Beetle', scientificName: 'Philonthus cognatus', rank: 'species' }
                      ]
                    },
                    { id: 'aleochara', name: 'Aleochara Rove Beetles', scientificName: 'Aleochara', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'aleochara-bilineata', name: 'Cabbage Maggot Hunter', scientificName: 'Aleochara bilineata', rank: 'species' }
                      ]
                    },
                    { id: 'paederus', name: 'Paederus Beetles', scientificName: 'Paederus', rank: 'genus', speciesCount: 600,
                      children: [
                        { id: 'paederus-riparius', name: 'Rove Beetle', scientificName: 'Paederus riparius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'elateridae', name: 'Click Beetles', scientificName: 'Elateridae', rank: 'family', speciesCount: 10000,
                  children: [
                    { id: 'alaus', name: 'Eyed Click Beetles', scientificName: 'Alaus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'alaus-oculatus', name: 'Eastern Eyed Click Beetle', scientificName: 'Alaus oculatus', rank: 'species' }
                      ]
                    },
                    { id: 'pyrophorus', name: 'Fire Beetles', scientificName: 'Pyrophorus', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'pyrophorus-noctilucus', name: 'Cucujo', scientificName: 'Pyrophorus noctilucus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'buprestidae', name: 'Jewel Beetles', scientificName: 'Buprestidae', rank: 'family', speciesCount: 15000,
                  children: [
                    { id: 'chrysochroa', name: 'Jewel Beetles', scientificName: 'Chrysochroa', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'chrysochroa-fulgidissima', name: 'Tamamushi Beetle', scientificName: 'Chrysochroa fulgidissima', rank: 'species' }
                      ]
                    },
                    { id: 'agrilus', name: 'Agrilus Beetles', scientificName: 'Agrilus', rank: 'genus', speciesCount: 3000,
                      children: [
                        { id: 'agrilus-planipennis', name: 'Emerald Ash Borer', scientificName: 'Agrilus planipennis', rank: 'species' }
                      ]
                    },
                    { id: 'julodis', name: 'Julodis Beetles', scientificName: 'Julodis', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'julodis-cirrosa', name: 'Hairy Jewel Beetle', scientificName: 'Julodis cirrosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dytiscidae', name: 'Diving Beetles', scientificName: 'Dytiscidae', rank: 'family', speciesCount: 4300,
                  children: [
                    { id: 'dytiscus', name: 'Great Diving Beetles', scientificName: 'Dytiscus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'dytiscus-marginalis', name: 'Great Diving Beetle', scientificName: 'Dytiscus marginalis', rank: 'species' }
                      ]
                    },
                    { id: 'cybister', name: 'Giant Water Beetles', scientificName: 'Cybister', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'cybister-lateralimarginalis', name: 'Giant Water Beetle', scientificName: 'Cybister lateralimarginalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'silphidae', name: 'Carrion Beetles', scientificName: 'Silphidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'nicrophorus', name: 'Burying Beetles', scientificName: 'Nicrophorus', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'nicrophorus-americanus', name: 'American Burying Beetle', scientificName: 'Nicrophorus americanus', rank: 'species' },
                        { id: 'nicrophorus-vespilloides', name: 'Lesser Burying Beetle', scientificName: 'Nicrophorus vespilloides', rank: 'species' }
                      ]
                    },
                    { id: 'silpha', name: 'Carrion Beetles', scientificName: 'Silpha', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'silpha-americana', name: 'American Carrion Beetle', scientificName: 'Silpha americana', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'passalidae', name: 'Bess Beetles', scientificName: 'Passalidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'odontotaenius', name: 'Bess Beetles', scientificName: 'Odontotaenius', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'odontotaenius-disjunctus', name: 'Horned Passalus', scientificName: 'Odontotaenius disjunctus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'gyrinidae', name: 'Whirligig Beetles', scientificName: 'Gyrinidae', rank: 'family', speciesCount: 900,
                  children: [
                    { id: 'gyrinus', name: 'Whirligig Beetles', scientificName: 'Gyrinus', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'gyrinus-natator', name: 'Common Whirligig Beetle', scientificName: 'Gyrinus natator', rank: 'species' }
                      ]
                    },
                    { id: 'dineutus', name: 'Large Whirligig Beetles', scientificName: 'Dineutus', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'dineutus-americanus', name: 'American Whirligig Beetle', scientificName: 'Dineutus americanus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hydrophilidae', name: 'Water Scavenger Beetles', scientificName: 'Hydrophilidae', rank: 'family', speciesCount: 3400,
                  children: [
                    { id: 'hydrophilus', name: 'Giant Water Scavengers', scientificName: 'Hydrophilus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'hydrophilus-piceus', name: 'Great Silver Water Beetle', scientificName: 'Hydrophilus piceus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tenebrionidae', name: 'Darkling Beetles', scientificName: 'Tenebrionidae', rank: 'family', speciesCount: 20000,
                  children: [
                    { id: 'tenebrio', name: 'Mealworm Beetles', scientificName: 'Tenebrio', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'tenebrio-molitor', name: 'Yellow Mealworm Beetle', scientificName: 'Tenebrio molitor', rank: 'species' }
                      ]
                    },
                    { id: 'tribolium', name: 'Flour Beetles', scientificName: 'Tribolium', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'tribolium-castaneum', name: 'Red Flour Beetle', scientificName: 'Tribolium castaneum', rank: 'species' }
                      ]
                    },
                    { id: 'eleodes', name: 'Desert Stink Beetles', scientificName: 'Eleodes', rank: 'genus', speciesCount: 180,
                      children: [
                        { id: 'eleodes-obscura', name: 'Western Desert Stink Beetle', scientificName: 'Eleodes obscura', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cantharidae', name: 'Soldier Beetles', scientificName: 'Cantharidae', rank: 'family', speciesCount: 5000,
                  children: [
                    { id: 'chauliognathus', name: 'Soldier Beetles', scientificName: 'Chauliognathus', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'chauliognathus-pennsylvanicus', name: 'Goldenrod Soldier Beetle', scientificName: 'Chauliognathus pennsylvanicus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'meloidae', name: 'Blister Beetles', scientificName: 'Meloidae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'epicauta', name: 'Blister Beetles', scientificName: 'Epicauta', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'epicauta-vittata', name: 'Striped Blister Beetle', scientificName: 'Epicauta vittata', rank: 'species' }
                      ]
                    },
                    { id: 'lytta', name: 'Spanish Fly Beetles', scientificName: 'Lytta', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'lytta-vesicatoria', name: 'Spanish Fly', scientificName: 'Lytta vesicatoria', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dermestidae', name: 'Skin Beetles', scientificName: 'Dermestidae', rank: 'family', speciesCount: 1100,
                  children: [
                    { id: 'dermestes', name: 'Hide Beetles', scientificName: 'Dermestes', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'dermestes-maculatus', name: 'Hide Beetle', scientificName: 'Dermestes maculatus', rank: 'species' }
                      ]
                    },
                    { id: 'anthrenus', name: 'Carpet Beetles', scientificName: 'Anthrenus', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'anthrenus-verbasci', name: 'Varied Carpet Beetle', scientificName: 'Anthrenus verbasci', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cleridae', name: 'Checkered Beetles', scientificName: 'Cleridae', rank: 'family', speciesCount: 3500,
                  children: [
                    { id: 'thanasimus', name: 'Bark Beetle Predators', scientificName: 'Thanasimus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'thanasimus-formicarius', name: 'Ant Beetle', scientificName: 'Thanasimus formicarius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'brentidae', name: 'Straight-snouted Weevils', scientificName: 'Brentidae', rank: 'family', speciesCount: 1700,
                  children: [
                    { id: 'cylas', name: 'Sweet Potato Weevils', scientificName: 'Cylas', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'cylas-formicarius', name: 'Sweet Potato Weevil', scientificName: 'Cylas formicarius', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: LEPIDOPTERA
            {
              id: 'lepidoptera',
              name: 'Butterflies & Moths',
              scientificName: 'Lepidoptera',
              rank: 'order',
              speciesCount: 180000,
              children: [
                { id: 'nymphalidae', name: 'Brush-footed Butterflies', scientificName: 'Nymphalidae', rank: 'family', speciesCount: 6000,
                  children: [
                    { id: 'danaus', name: 'Milkweed Butterflies', scientificName: 'Danaus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'danaus-plexippus', name: 'Monarch Butterfly', scientificName: 'Danaus plexippus', rank: 'species' },
                        { id: 'danaus-chrysippus', name: 'Plain Tiger', scientificName: 'Danaus chrysippus', rank: 'species' }
                      ]
                    },
                    { id: 'vanessa', name: 'Painted Ladies', scientificName: 'Vanessa', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'vanessa-cardui', name: 'Painted Lady', scientificName: 'Vanessa cardui', rank: 'species' },
                        { id: 'vanessa-atalanta', name: 'Red Admiral', scientificName: 'Vanessa atalanta', rank: 'species' }
                      ]
                    },
                    { id: 'morpho', name: 'Morpho Butterflies', scientificName: 'Morpho', rank: 'genus', speciesCount: 29,
                      children: [
                        { id: 'morpho-peleides', name: 'Blue Morpho', scientificName: 'Morpho peleides', rank: 'species' },
                        { id: 'morpho-menelaus', name: 'Menelaus Blue Morpho', scientificName: 'Morpho menelaus', rank: 'species' }
                      ]
                    },
                    { id: 'nymphalis', name: 'Tortoiseshells', scientificName: 'Nymphalis', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'nymphalis-antiopa', name: 'Mourning Cloak', scientificName: 'Nymphalis antiopa', rank: 'species' }
                      ]
                    },
                    { id: 'heliconius', name: 'Longwing Butterflies', scientificName: 'Heliconius', rank: 'genus', speciesCount: 39,
                      children: [
                        { id: 'heliconius-melpomene', name: 'Postman Butterfly', scientificName: 'Heliconius melpomene', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'papilionidae', name: 'Swallowtails', scientificName: 'Papilionidae', rank: 'family', speciesCount: 550,
                  children: [
                    { id: 'papilio', name: 'Swallowtails', scientificName: 'Papilio', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'papilio-machaon', name: 'Old World Swallowtail', scientificName: 'Papilio machaon', rank: 'species' },
                        { id: 'papilio-glaucus', name: 'Eastern Tiger Swallowtail', scientificName: 'Papilio glaucus', rank: 'species' }
                      ]
                    },
                    { id: 'ornithoptera', name: 'Birdwings', scientificName: 'Ornithoptera', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'ornithoptera-alexandrae', name: 'Queen Alexandra\'s Birdwing', scientificName: 'Ornithoptera alexandrae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pieridae', name: 'Whites & Sulphurs', scientificName: 'Pieridae', rank: 'family', speciesCount: 1100,
                  children: [
                    { id: 'pieris', name: 'Whites', scientificName: 'Pieris', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'pieris-brassicae', name: 'Large White', scientificName: 'Pieris brassicae', rank: 'species' },
                        { id: 'pieris-rapae', name: 'Small White', scientificName: 'Pieris rapae', rank: 'species' }
                      ]
                    },
                    { id: 'colias', name: 'Clouded Yellows', scientificName: 'Colias', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'colias-eurytheme', name: 'Orange Sulphur', scientificName: 'Colias eurytheme', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sphingidae', name: 'Hawk Moths', scientificName: 'Sphingidae', rank: 'family', speciesCount: 1450,
                  children: [
                    { id: 'manduca', name: 'Sphinx Moths', scientificName: 'Manduca', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'manduca-sexta', name: 'Tobacco Hornworm Moth', scientificName: 'Manduca sexta', rank: 'species' }
                      ]
                    },
                    { id: 'acherontia', name: 'Death\'s-head Hawkmoths', scientificName: 'Acherontia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'acherontia-atropos', name: 'Death\'s-head Hawkmoth', scientificName: 'Acherontia atropos', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'saturniidae', name: 'Giant Silk Moths', scientificName: 'Saturniidae', rank: 'family', speciesCount: 2300,
                  children: [
                    { id: 'attacus', name: 'Atlas Moths', scientificName: 'Attacus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'attacus-atlas', name: 'Atlas Moth', scientificName: 'Attacus atlas', rank: 'species' }
                      ]
                    },
                    { id: 'actias', name: 'Luna Moths', scientificName: 'Actias', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'actias-luna', name: 'Luna Moth', scientificName: 'Actias luna', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lycaenidae', name: 'Blues, Coppers & Hairstreaks', scientificName: 'Lycaenidae', rank: 'family', speciesCount: 5200,
                  children: [
                    { id: 'polyommatus', name: 'Blue Butterflies', scientificName: 'Polyommatus', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'polyommatus-icarus', name: 'Common Blue', scientificName: 'Polyommatus icarus', rank: 'species' }
                      ]
                    },
                    { id: 'lycaena', name: 'Copper Butterflies', scientificName: 'Lycaena', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'lycaena-phlaeas', name: 'Small Copper', scientificName: 'Lycaena phlaeas', rank: 'species' },
                        { id: 'lycaena-dispar', name: 'Large Copper', scientificName: 'Lycaena dispar', rank: 'species' }
                      ]
                    },
                    { id: 'thecla', name: 'Hairstreaks', scientificName: 'Thecla', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'thecla-betulae', name: 'Brown Hairstreak', scientificName: 'Thecla betulae', rank: 'species' }
                      ]
                    },
                    { id: 'celastrina', name: 'Spring Azures', scientificName: 'Celastrina', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'celastrina-ladon', name: 'Spring Azure', scientificName: 'Celastrina ladon', rank: 'species' }
                      ]
                    },
                    { id: 'glaucopsyche', name: 'Silvery Blues', scientificName: 'Glaucopsyche', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'glaucopsyche-lygdamus', name: 'Silvery Blue', scientificName: 'Glaucopsyche lygdamus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'geometridae', name: 'Geometer Moths', scientificName: 'Geometridae', rank: 'family', speciesCount: 23000,
                  children: [
                    { id: 'biston', name: 'Pepper Moths', scientificName: 'Biston', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'biston-betularia', name: 'Peppered Moth', scientificName: 'Biston betularia', rank: 'species' }
                      ]
                    },
                    { id: 'abraxas', name: 'Magpie Moths', scientificName: 'Abraxas', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'abraxas-grossulariata', name: 'Magpie Moth', scientificName: 'Abraxas grossulariata', rank: 'species' }
                      ]
                    },
                    { id: 'operophtera', name: 'Winter Moths', scientificName: 'Operophtera', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'operophtera-brumata', name: 'Winter Moth', scientificName: 'Operophtera brumata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'noctuidae', name: 'Owlet Moths', scientificName: 'Noctuidae', rank: 'family', speciesCount: 25000,
                  children: [
                    { id: 'agrotis', name: 'Cutworm Moths', scientificName: 'Agrotis', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'agrotis-ipsilon', name: 'Black Cutworm Moth', scientificName: 'Agrotis ipsilon', rank: 'species' }
                      ]
                    },
                    { id: 'noctua', name: 'Yellow Underwings', scientificName: 'Noctua', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'noctua-pronuba', name: 'Large Yellow Underwing', scientificName: 'Noctua pronuba', rank: 'species' }
                      ]
                    },
                    { id: 'helicoverpa', name: 'Bollworm Moths', scientificName: 'Helicoverpa', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'helicoverpa-armigera', name: 'Cotton Bollworm', scientificName: 'Helicoverpa armigera', rank: 'species' },
                        { id: 'helicoverpa-zea', name: 'Corn Earworm Moth', scientificName: 'Helicoverpa zea', rank: 'species' }
                      ]
                    },
                    { id: 'spodoptera', name: 'Armyworm Moths', scientificName: 'Spodoptera', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'spodoptera-frugiperda', name: 'Fall Armyworm', scientificName: 'Spodoptera frugiperda', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bombycidae', name: 'Silk Moths', scientificName: 'Bombycidae', rank: 'family', speciesCount: 350,
                  children: [
                    { id: 'bombyx', name: 'Silkworms', scientificName: 'Bombyx', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'bombyx-mori', name: 'Domestic Silkmoth', scientificName: 'Bombyx mori', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hesperiidae', name: 'Skippers', scientificName: 'Hesperiidae', rank: 'family', speciesCount: 4000,
                  children: [
                    { id: 'epargyreus', name: 'Silver-spotted Skippers', scientificName: 'Epargyreus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'epargyreus-clarus', name: 'Silver-spotted Skipper', scientificName: 'Epargyreus clarus', rank: 'species' }
                      ]
                    },
                    { id: 'urbanus', name: 'Long-tailed Skippers', scientificName: 'Urbanus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'urbanus-proteus', name: 'Long-tailed Skipper', scientificName: 'Urbanus proteus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'riodinidae', name: 'Metalmarks', scientificName: 'Riodinidae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'calephelis', name: 'American Metalmarks', scientificName: 'Calephelis', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'calephelis-virginiensis', name: 'Little Metalmark', scientificName: 'Calephelis virginiensis', rank: 'species' }
                      ]
                    },
                    { id: 'rhetus', name: 'Sword-tailed Metalmarks', scientificName: 'Rhetus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'rhetus-periander', name: 'Periander Metalmark', scientificName: 'Rhetus periander', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'arctiidae', name: 'Tiger Moths', scientificName: 'Arctiinae', rank: 'family', speciesCount: 11000,
                  children: [
                    { id: 'arctia', name: 'Tiger Moths', scientificName: 'Arctia', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'arctia-caja', name: 'Garden Tiger Moth', scientificName: 'Arctia caja', rank: 'species' }
                      ]
                    },
                    { id: 'grammia', name: 'Grammia Tigers', scientificName: 'Grammia', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'grammia-virgo', name: 'Virgin Tiger Moth', scientificName: 'Grammia virgo', rank: 'species' }
                      ]
                    },
                    { id: 'spilosoma', name: 'White Ermines', scientificName: 'Spilosoma', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'spilosoma-virginica', name: 'Virginian Tiger Moth', scientificName: 'Spilosoma virginica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pyralidae', name: 'Snout Moths', scientificName: 'Pyralidae', rank: 'family', speciesCount: 6000,
                  children: [
                    { id: 'galleria', name: 'Wax Moths', scientificName: 'Galleria', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'galleria-mellonella', name: 'Greater Wax Moth', scientificName: 'Galleria mellonella', rank: 'species' }
                      ]
                    },
                    { id: 'plodia', name: 'Meal Moths', scientificName: 'Plodia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'plodia-interpunctella', name: 'Indian Meal Moth', scientificName: 'Plodia interpunctella', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'crambidae', name: 'Grass Moths', scientificName: 'Crambidae', rank: 'family', speciesCount: 10000,
                  children: [
                    { id: 'ostrinia', name: 'Corn Borers', scientificName: 'Ostrinia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'ostrinia-nubilalis', name: 'European Corn Borer', scientificName: 'Ostrinia nubilalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'zygaenidae', name: 'Burnet Moths', scientificName: 'Zygaenidae', rank: 'family', speciesCount: 1000,
                  children: [
                    { id: 'zygaena', name: 'Burnets', scientificName: 'Zygaena', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'zygaena-filipendulae', name: 'Six-spot Burnet', scientificName: 'Zygaena filipendulae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tortricidae', name: 'Tortrix Moths', scientificName: 'Tortricidae', rank: 'family', speciesCount: 11000,
                  children: [
                    { id: 'cydia', name: 'Codling Moths', scientificName: 'Cydia', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'cydia-pomonella', name: 'Codling Moth', scientificName: 'Cydia pomonella', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: HYMENOPTERA
            {
              id: 'hymenoptera',
              name: 'Ants, Bees & Wasps',
              scientificName: 'Hymenoptera',
              rank: 'order',
              speciesCount: 150000,
              children: [
                { id: 'formicidae', name: 'Ants', scientificName: 'Formicidae', rank: 'family', speciesCount: 22000,
                  children: [
                    { id: 'atta', name: 'Leafcutter Ants', scientificName: 'Atta', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'atta-cephalotes', name: 'Leafcutter Ant', scientificName: 'Atta cephalotes', rank: 'species' }
                      ]
                    },
                    { id: 'formica', name: 'Wood Ants', scientificName: 'Formica', rank: 'genus', speciesCount: 290,
                      children: [
                        { id: 'formica-rufa', name: 'Red Wood Ant', scientificName: 'Formica rufa', rank: 'species' }
                      ]
                    },
                    { id: 'solenopsis', name: 'Fire Ants', scientificName: 'Solenopsis', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'solenopsis-invicta', name: 'Red Imported Fire Ant', scientificName: 'Solenopsis invicta', rank: 'species' }
                      ]
                    },
                    { id: 'camponotus', name: 'Carpenter Ants', scientificName: 'Camponotus', rank: 'genus', speciesCount: 1000,
                      children: [
                        { id: 'camponotus-pennsylvanicus', name: 'Black Carpenter Ant', scientificName: 'Camponotus pennsylvanicus', rank: 'species' }
                      ]
                    },
                    { id: 'dorylus', name: 'Driver Ants', scientificName: 'Dorylus', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'dorylus-wilverthi', name: 'African Driver Ant', scientificName: 'Dorylus wilverthi', rank: 'species' }
                      ]
                    },
                    { id: 'paraponera', name: 'Bullet Ants', scientificName: 'Paraponera', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'paraponera-clavata', name: 'Bullet Ant', scientificName: 'Paraponera clavata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'apidae', name: 'Bees', scientificName: 'Apidae', rank: 'family', speciesCount: 5700,
                  children: [
                    { id: 'apis', name: 'Honey Bees', scientificName: 'Apis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'apis-mellifera', name: 'Western Honey Bee', scientificName: 'Apis mellifera', rank: 'species' },
                        { id: 'apis-cerana', name: 'Asian Honey Bee', scientificName: 'Apis cerana', rank: 'species' },
                        { id: 'apis-dorsata', name: 'Giant Honey Bee', scientificName: 'Apis dorsata', rank: 'species' },
                        { id: 'apis-florea', name: 'Dwarf Honey Bee', scientificName: 'Apis florea', rank: 'species' }
                      ]
                    },
                    { id: 'bombus', name: 'Bumblebees', scientificName: 'Bombus', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'bombus-terrestris', name: 'Buff-tailed Bumblebee', scientificName: 'Bombus terrestris', rank: 'species' },
                        { id: 'bombus-impatiens', name: 'Common Eastern Bumblebee', scientificName: 'Bombus impatiens', rank: 'species' }
                      ]
                    },
                    { id: 'xylocopa', name: 'Carpenter Bees', scientificName: 'Xylocopa', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'xylocopa-violacea', name: 'Violet Carpenter Bee', scientificName: 'Xylocopa violacea', rank: 'species' }
                      ]
                    },
                    { id: 'euglossa', name: 'Orchid Bees', scientificName: 'Euglossa', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'euglossa-imperialis', name: 'Imperial Orchid Bee', scientificName: 'Euglossa imperialis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'vespidae', name: 'Wasps', scientificName: 'Vespidae', rank: 'family', speciesCount: 5000,
                  children: [
                    { id: 'vespa', name: 'Hornets', scientificName: 'Vespa', rank: 'genus', speciesCount: 22,
                      children: [
                        { id: 'vespa-mandarinia', name: 'Asian Giant Hornet', scientificName: 'Vespa mandarinia', rank: 'species' },
                        { id: 'vespa-crabro', name: 'European Hornet', scientificName: 'Vespa crabro', rank: 'species' }
                      ]
                    },
                    { id: 'polistes', name: 'Paper Wasps', scientificName: 'Polistes', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'polistes-dominula', name: 'European Paper Wasp', scientificName: 'Polistes dominula', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chrysididae', name: 'Cuckoo Wasps', scientificName: 'Chrysididae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'chrysis', name: 'Ruby-tailed Wasps', scientificName: 'Chrysis', rank: 'genus', speciesCount: 1000,
                      children: [
                        { id: 'chrysis-ignita', name: 'Ruby-tailed Wasp', scientificName: 'Chrysis ignita', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ichneumonidae', name: 'Ichneumon Wasps', scientificName: 'Ichneumonidae', rank: 'family', speciesCount: 25000,
                  children: [
                    { id: 'megarhyssa', name: 'Giant Ichneumons', scientificName: 'Megarhyssa', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'megarhyssa-macrurus', name: 'Giant Ichneumon Wasp', scientificName: 'Megarhyssa macrurus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'megachilidae', name: 'Leafcutter Bees', scientificName: 'Megachilidae', rank: 'family', speciesCount: 4000,
                  children: [
                    { id: 'megachile', name: 'Leafcutter Bees', scientificName: 'Megachile', rank: 'genus', speciesCount: 1500,
                      children: [
                        { id: 'megachile-rotundata', name: 'Alfalfa Leafcutter Bee', scientificName: 'Megachile rotundata', rank: 'species' }
                      ]
                    },
                    { id: 'osmia', name: 'Mason Bees', scientificName: 'Osmia', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'osmia-bicornis', name: 'Red Mason Bee', scientificName: 'Osmia bicornis', rank: 'species' },
                        { id: 'osmia-lignaria', name: 'Blue Orchard Bee', scientificName: 'Osmia lignaria', rank: 'species' }
                      ]
                    },
                    { id: 'anthidium', name: 'Wool Carder Bees', scientificName: 'Anthidium', rank: 'genus', speciesCount: 160,
                      children: [
                        { id: 'anthidium-manicatum', name: 'European Wool Carder Bee', scientificName: 'Anthidium manicatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'halictidae', name: 'Sweat Bees', scientificName: 'Halictidae', rank: 'family', speciesCount: 4500,
                  children: [
                    { id: 'halictus', name: 'Sweat Bees', scientificName: 'Halictus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'halictus-rubicundus', name: 'Orange-legged Furrow Bee', scientificName: 'Halictus rubicundus', rank: 'species' }
                      ]
                    },
                    { id: 'lasioglossum', name: 'Base-banded Furrow Bees', scientificName: 'Lasioglossum', rank: 'genus', speciesCount: 1800,
                      children: [
                        { id: 'lasioglossum-calceatum', name: 'Slender Mining Bee', scientificName: 'Lasioglossum calceatum', rank: 'species' }
                      ]
                    },
                    { id: 'agapostemon', name: 'Metallic Green Bees', scientificName: 'Agapostemon', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'agapostemon-virescens', name: 'Bicolored Agapostemon', scientificName: 'Agapostemon virescens', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'andrenidae', name: 'Mining Bees', scientificName: 'Andrenidae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'andrena', name: 'Mining Bees', scientificName: 'Andrena', rank: 'genus', speciesCount: 1500,
                      children: [
                        { id: 'andrena-fulva', name: 'Tawny Mining Bee', scientificName: 'Andrena fulva', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'colletidae', name: 'Plasterer Bees', scientificName: 'Colletidae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'colletes', name: 'Cellophane Bees', scientificName: 'Colletes', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'colletes-inaequalis', name: 'Unequal Cellophane Bee', scientificName: 'Colletes inaequalis', rank: 'species' }
                      ]
                    },
                    { id: 'hylaeus', name: 'Yellow-faced Bees', scientificName: 'Hylaeus', rank: 'genus', speciesCount: 700,
                      children: [
                        { id: 'hylaeus-communis', name: 'Common Yellow-faced Bee', scientificName: 'Hylaeus communis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pompilidae', name: 'Spider Wasps', scientificName: 'Pompilidae', rank: 'family', speciesCount: 5000,
                  children: [
                    { id: 'pepsis', name: 'Tarantula Hawks', scientificName: 'Pepsis', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'pepsis-grossa', name: 'Tarantula Hawk', scientificName: 'Pepsis grossa', rank: 'species' }
                      ]
                    },
                    { id: 'anoplius', name: 'Spider Wasps', scientificName: 'Anoplius', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'anoplius-viaticus', name: 'Black-banded Spider Wasp', scientificName: 'Anoplius viaticus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sphecidae', name: 'Thread-waisted Wasps', scientificName: 'Sphecidae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'sphex', name: 'Digger Wasps', scientificName: 'Sphex', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'sphex-pensylvanicus', name: 'Great Black Wasp', scientificName: 'Sphex pensylvanicus', rank: 'species' }
                      ]
                    },
                    { id: 'ammophila', name: 'Thread-waisted Sand Wasps', scientificName: 'Ammophila', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'ammophila-sabulosa', name: 'Red-banded Sand Wasp', scientificName: 'Ammophila sabulosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'crabronidae', name: 'Square-headed Wasps', scientificName: 'Crabronidae', rank: 'family', speciesCount: 9000,
                  children: [
                    { id: 'philanthus', name: 'Bee Wolves', scientificName: 'Philanthus', rank: 'genus', speciesCount: 140,
                      children: [
                        { id: 'philanthus-triangulum', name: 'European Beewolf', scientificName: 'Philanthus triangulum', rank: 'species' }
                      ]
                    },
                    { id: 'bembix', name: 'Sand Wasps', scientificName: 'Bembix', rank: 'genus', speciesCount: 380,
                      children: [
                        { id: 'bembix-rostrata', name: 'Banded Sand Wasp', scientificName: 'Bembix rostrata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mutillidae', name: 'Velvet Ants', scientificName: 'Mutillidae', rank: 'family', speciesCount: 7000,
                  children: [
                    { id: 'dasymutilla', name: 'Velvet Ants', scientificName: 'Dasymutilla', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'dasymutilla-occidentalis', name: 'Cow Killer', scientificName: 'Dasymutilla occidentalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scoliidae', name: 'Scoliid Wasps', scientificName: 'Scoliidae', rank: 'family', speciesCount: 560,
                  children: [
                    { id: 'scolia', name: 'Mammoth Wasps', scientificName: 'Scolia', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'scolia-dubia', name: 'Blue-winged Wasp', scientificName: 'Scolia dubia', rank: 'species' }
                      ]
                    },
                    { id: 'megascolia', name: 'Giant Scoliid Wasps', scientificName: 'Megascolia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'megascolia-maculata', name: 'Mammoth Wasp', scientificName: 'Megascolia maculata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'braconidae', name: 'Braconid Wasps', scientificName: 'Braconidae', rank: 'family', speciesCount: 17000,
                  children: [
                    { id: 'cotesia', name: 'Microgastrine Wasps', scientificName: 'Cotesia', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'cotesia-glomerata', name: 'Caterpillar Wasp', scientificName: 'Cotesia glomerata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cynipidae', name: 'Gall Wasps', scientificName: 'Cynipidae', rank: 'family', speciesCount: 1400,
                  children: [
                    { id: 'cynips', name: 'Oak Gall Wasps', scientificName: 'Cynips', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'cynips-quercusfolii', name: 'Cherry Gall Wasp', scientificName: 'Cynips quercusfolii', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tiphiidae', name: 'Tiphiid Wasps', scientificName: 'Tiphiidae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'tiphia', name: 'Tiphiid Flower Wasps', scientificName: 'Tiphia', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'tiphia-vernalis', name: 'Spring Tiphia', scientificName: 'Tiphia vernalis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: DIPTERA
            {
              id: 'diptera',
              name: 'Flies',
              scientificName: 'Diptera',
              rank: 'order',
              speciesCount: 150000,
              children: [
                { id: 'culicidae', name: 'Mosquitoes', scientificName: 'Culicidae', rank: 'family', speciesCount: 3500,
                  children: [
                    { id: 'anopheles', name: 'Malaria Mosquitoes', scientificName: 'Anopheles', rank: 'genus', speciesCount: 465,
                      children: [
                        { id: 'anopheles-gambiae', name: 'African Malaria Mosquito', scientificName: 'Anopheles gambiae', rank: 'species' }
                      ]
                    },
                    { id: 'aedes', name: 'Yellow Fever Mosquitoes', scientificName: 'Aedes', rank: 'genus', speciesCount: 110,
                      children: [
                        { id: 'aedes-aegypti', name: 'Yellow Fever Mosquito', scientificName: 'Aedes aegypti', rank: 'species' },
                        { id: 'aedes-albopictus', name: 'Asian Tiger Mosquito', scientificName: 'Aedes albopictus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'drosophilidae', name: 'Fruit Flies', scientificName: 'Drosophilidae', rank: 'family', speciesCount: 4500,
                  children: [
                    { id: 'drosophila', name: 'Fruit Flies', scientificName: 'Drosophila', rank: 'genus', speciesCount: 1500,
                      children: [
                        { id: 'drosophila-melanogaster', name: 'Common Fruit Fly', scientificName: 'Drosophila melanogaster', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'muscidae', name: 'House Flies', scientificName: 'Muscidae', rank: 'family', speciesCount: 5000,
                  children: [
                    { id: 'musca', name: 'House Flies', scientificName: 'Musca', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'musca-domestica', name: 'House Fly', scientificName: 'Musca domestica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'syrphidae', name: 'Hoverflies', scientificName: 'Syrphidae', rank: 'family', speciesCount: 6000,
                  children: [
                    { id: 'eristalis', name: 'Drone Flies', scientificName: 'Eristalis', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'eristalis-tenax', name: 'Common Drone Fly', scientificName: 'Eristalis tenax', rank: 'species' }
                      ]
                    },
                    { id: 'syrphus', name: 'Common Hoverflies', scientificName: 'Syrphus', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'syrphus-ribesii', name: 'Common Banded Hoverfly', scientificName: 'Syrphus ribesii', rank: 'species' }
                      ]
                    },
                    { id: 'volucella', name: 'Bulky Hoverflies', scientificName: 'Volucella', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'volucella-zonaria', name: 'Hornet Mimic Hoverfly', scientificName: 'Volucella zonaria', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tipulidae', name: 'Crane Flies', scientificName: 'Tipulidae', rank: 'family', speciesCount: 15000,
                  children: [
                    { id: 'tipula', name: 'Crane Flies', scientificName: 'Tipula', rank: 'genus', speciesCount: 2500,
                      children: [
                        { id: 'tipula-oleracea', name: 'Marsh Crane Fly', scientificName: 'Tipula oleracea', rank: 'species' },
                        { id: 'tipula-paludosa', name: 'European Crane Fly', scientificName: 'Tipula paludosa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'glossinidae', name: 'Tsetse Flies', scientificName: 'Glossinidae', rank: 'family', speciesCount: 23,
                  children: [
                    { id: 'glossina', name: 'Tsetse Flies', scientificName: 'Glossina', rank: 'genus', speciesCount: 23,
                      children: [
                        { id: 'glossina-morsitans', name: 'Savanna Tsetse Fly', scientificName: 'Glossina morsitans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tabanidae', name: 'Horse Flies', scientificName: 'Tabanidae', rank: 'family', speciesCount: 4500,
                  children: [
                    { id: 'tabanus', name: 'Horse Flies', scientificName: 'Tabanus', rank: 'genus', speciesCount: 1400,
                      children: [
                        { id: 'tabanus-bovinus', name: 'Pale Giant Horse Fly', scientificName: 'Tabanus bovinus', rank: 'species' }
                      ]
                    },
                    { id: 'chrysops', name: 'Deer Flies', scientificName: 'Chrysops', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'chrysops-relictus', name: 'Twin-lobed Deerfly', scientificName: 'Chrysops relictus', rank: 'species' }
                      ]
                    },
                    { id: 'haematopota', name: 'Clegs', scientificName: 'Haematopota', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'haematopota-pluvialis', name: 'Common Cleg', scientificName: 'Haematopota pluvialis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'simuliidae', name: 'Black Flies', scientificName: 'Simuliidae', rank: 'family', speciesCount: 2200,
                  children: [
                    { id: 'simulium', name: 'Black Flies', scientificName: 'Simulium', rank: 'genus', speciesCount: 1800,
                      children: [
                        { id: 'simulium-damnosum', name: 'River Blindness Fly', scientificName: 'Simulium damnosum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'psychodidae', name: 'Drain Flies', scientificName: 'Psychodidae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'clogmia', name: 'Drain Flies', scientificName: 'Clogmia', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'clogmia-albipunctata', name: 'Drain Fly', scientificName: 'Clogmia albipunctata', rank: 'species' }
                      ]
                    },
                    { id: 'phlebotomus', name: 'Sand Flies', scientificName: 'Phlebotomus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'phlebotomus-papatasi', name: 'Sand Fly', scientificName: 'Phlebotomus papatasi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'calliphoridae', name: 'Blow Flies', scientificName: 'Calliphoridae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'calliphora', name: 'Bluebottle Flies', scientificName: 'Calliphora', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'calliphora-vomitoria', name: 'Blue Bottle Fly', scientificName: 'Calliphora vomitoria', rank: 'species' }
                      ]
                    },
                    { id: 'lucilia', name: 'Greenbottle Flies', scientificName: 'Lucilia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'lucilia-sericata', name: 'Common Green Bottle Fly', scientificName: 'Lucilia sericata', rank: 'species' }
                      ]
                    },
                    { id: 'cochliomyia', name: 'Screwworm Flies', scientificName: 'Cochliomyia', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'cochliomyia-hominivorax', name: 'New World Screwworm', scientificName: 'Cochliomyia hominivorax', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tephritidae', name: 'Fruit Flies', scientificName: 'Tephritidae', rank: 'family', speciesCount: 5000,
                  children: [
                    { id: 'ceratitis', name: 'Fruit Flies', scientificName: 'Ceratitis', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'ceratitis-capitata', name: 'Mediterranean Fruit Fly', scientificName: 'Ceratitis capitata', rank: 'species' }
                      ]
                    },
                    { id: 'bactrocera', name: 'True Fruit Flies', scientificName: 'Bactrocera', rank: 'genus', speciesCount: 500,
                      children: [
                        { id: 'bactrocera-dorsalis', name: 'Oriental Fruit Fly', scientificName: 'Bactrocera dorsalis', rank: 'species' },
                        { id: 'bactrocera-oleae', name: 'Olive Fruit Fly', scientificName: 'Bactrocera oleae', rank: 'species' }
                      ]
                    },
                    { id: 'rhagoletis', name: 'Apple Maggot Flies', scientificName: 'Rhagoletis', rank: 'genus', speciesCount: 65,
                      children: [
                        { id: 'rhagoletis-pomonella', name: 'Apple Maggot', scientificName: 'Rhagoletis pomonella', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'asilidae', name: 'Robber Flies', scientificName: 'Asilidae', rank: 'family', speciesCount: 7500,
                  children: [
                    { id: 'promachus', name: 'Giant Robber Flies', scientificName: 'Promachus', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'promachus-rufipes', name: 'Red-footed Cannibalfly', scientificName: 'Promachus rufipes', rank: 'species' }
                      ]
                    },
                    { id: 'efferia', name: 'Bee Killers', scientificName: 'Efferia', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'efferia-aestuans', name: 'Common Efferia', scientificName: 'Efferia aestuans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bombyliidae', name: 'Bee Flies', scientificName: 'Bombyliidae', rank: 'family', speciesCount: 5000,
                  children: [
                    { id: 'bombylius', name: 'Bee Flies', scientificName: 'Bombylius', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'bombylius-major', name: 'Large Bee Fly', scientificName: 'Bombylius major', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'oestridae', name: 'Bot Flies', scientificName: 'Oestridae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'dermatobia', name: 'Human Bot Flies', scientificName: 'Dermatobia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'dermatobia-hominis', name: 'Human Bot Fly', scientificName: 'Dermatobia hominis', rank: 'species' }
                      ]
                    },
                    { id: 'gasterophilus', name: 'Horse Bot Flies', scientificName: 'Gasterophilus', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'gasterophilus-intestinalis', name: 'Horse Bot Fly', scientificName: 'Gasterophilus intestinalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sarcophagidae', name: 'Flesh Flies', scientificName: 'Sarcophagidae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'sarcophaga', name: 'Flesh Flies', scientificName: 'Sarcophaga', rank: 'genus', speciesCount: 800,
                      children: [
                        { id: 'sarcophaga-carnaria', name: 'Common Flesh Fly', scientificName: 'Sarcophaga carnaria', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chironomidae', name: 'Non-biting Midges', scientificName: 'Chironomidae', rank: 'family', speciesCount: 10000,
                  children: [
                    { id: 'chironomus', name: 'Midges', scientificName: 'Chironomus', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'chironomus-plumosus', name: 'Bloodworm Midge', scientificName: 'Chironomus plumosus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cecidomyiidae', name: 'Gall Midges', scientificName: 'Cecidomyiidae', rank: 'family', speciesCount: 6600,
                  children: [
                    { id: 'mayetiola', name: 'Hessian Flies', scientificName: 'Mayetiola', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'mayetiola-destructor', name: 'Hessian Fly', scientificName: 'Mayetiola destructor', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ODONATA
            {
              id: 'odonata',
              name: 'Dragonflies & Damselflies',
              scientificName: 'Odonata',
              rank: 'order',
              speciesCount: 6000,
              children: [
                { id: 'libellulidae', name: 'Skimmer Dragonflies', scientificName: 'Libellulidae', rank: 'family', speciesCount: 1000,
                  children: [
                    { id: 'libellula', name: 'King Skimmers', scientificName: 'Libellula', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'libellula-depressa', name: 'Broad-bodied Chaser', scientificName: 'Libellula depressa', rank: 'species' }
                      ]
                    },
                    { id: 'sympetrum', name: 'Darters', scientificName: 'Sympetrum', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'sympetrum-striolatum', name: 'Common Darter', scientificName: 'Sympetrum striolatum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'aeshnidae', name: 'Hawker Dragonflies', scientificName: 'Aeshnidae', rank: 'family', speciesCount: 450,
                  children: [
                    { id: 'anax', name: 'Emperor Dragonflies', scientificName: 'Anax', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'anax-imperator', name: 'Emperor Dragonfly', scientificName: 'Anax imperator', rank: 'species' },
                        { id: 'anax-junius', name: 'Common Green Darner', scientificName: 'Anax junius', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'coenagrionidae', name: 'Narrow-winged Damselflies', scientificName: 'Coenagrionidae', rank: 'family', speciesCount: 1250,
                  children: [
                    { id: 'enallagma', name: 'Bluets', scientificName: 'Enallagma', rank: 'genus', speciesCount: 65,
                      children: [
                        { id: 'enallagma-cyathigerum', name: 'Common Blue Damselfly', scientificName: 'Enallagma cyathigerum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'calopterygidae', name: 'Jewelwing Damselflies', scientificName: 'Calopterygidae', rank: 'family', speciesCount: 180,
                  children: [
                    { id: 'calopteryx', name: 'Demoiselles', scientificName: 'Calopteryx', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'calopteryx-virgo', name: 'Beautiful Demoiselle', scientificName: 'Calopteryx virgo', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ORTHOPTERA
            {
              id: 'orthoptera',
              name: 'Grasshoppers & Crickets',
              scientificName: 'Orthoptera',
              rank: 'order',
              speciesCount: 26000,
              children: [
                { id: 'acrididae', name: 'Grasshoppers', scientificName: 'Acrididae', rank: 'family', speciesCount: 10000,
                  children: [
                    { id: 'schistocerca', name: 'Bird Grasshoppers', scientificName: 'Schistocerca', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'schistocerca-gregaria', name: 'Desert Locust', scientificName: 'Schistocerca gregaria', rank: 'species' }
                      ]
                    },
                    { id: 'locusta', name: 'Migratory Locusts', scientificName: 'Locusta', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'locusta-migratoria', name: 'Migratory Locust', scientificName: 'Locusta migratoria', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'gryllidae', name: 'Crickets', scientificName: 'Gryllidae', rank: 'family', speciesCount: 2400,
                  children: [
                    { id: 'acheta', name: 'Field Crickets', scientificName: 'Acheta', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'acheta-domesticus', name: 'House Cricket', scientificName: 'Acheta domesticus', rank: 'species' }
                      ]
                    },
                    { id: 'gryllus', name: 'Field Crickets', scientificName: 'Gryllus', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'gryllus-campestris', name: 'European Field Cricket', scientificName: 'Gryllus campestris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tettigoniidae', name: 'Katydids', scientificName: 'Tettigoniidae', rank: 'family', speciesCount: 7000 },
                { id: 'gryllotalpidae', name: 'Mole Crickets', scientificName: 'Gryllotalpidae', rank: 'family', speciesCount: 100 }
              ]
            },
            // ORDER: HEMIPTERA
            {
              id: 'hemiptera',
              name: 'True Bugs',
              scientificName: 'Hemiptera',
              rank: 'order',
              speciesCount: 80000,
              children: [
                { id: 'cicadidae', name: 'Cicadas', scientificName: 'Cicadidae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'magicicada', name: 'Periodical Cicadas', scientificName: 'Magicicada', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'magicicada-septendecim', name: '17-year Cicada', scientificName: 'Magicicada septendecim', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'aphididae', name: 'Aphids', scientificName: 'Aphididae', rank: 'family', speciesCount: 5000 },
                { id: 'pentatomidae', name: 'Stink Bugs', scientificName: 'Pentatomidae', rank: 'family', speciesCount: 5000 },
                { id: 'gerridae', name: 'Water Striders', scientificName: 'Gerridae', rank: 'family', speciesCount: 700 },
                { id: 'reduviidae', name: 'Assassin Bugs', scientificName: 'Reduviidae', rank: 'family', speciesCount: 7000 },
                { id: 'cimicidae', name: 'Bed Bugs', scientificName: 'Cimicidae', rank: 'family', speciesCount: 90 }
              ]
            },
            // ORDER: MANTODEA
            {
              id: 'mantodea',
              name: 'Praying Mantises',
              scientificName: 'Mantodea',
              rank: 'order',
              speciesCount: 2400,
              children: [
                { id: 'mantidae', name: 'Mantids', scientificName: 'Mantidae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'mantis', name: 'Praying Mantises', scientificName: 'Mantis', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'mantis-religiosa', name: 'European Mantis', scientificName: 'Mantis religiosa', rank: 'species' }
                      ]
                    },
                    { id: 'tenodera', name: 'Giant Mantises', scientificName: 'Tenodera', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'tenodera-sinensis', name: 'Chinese Mantis', scientificName: 'Tenodera sinensis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hymenopodidae', name: 'Flower Mantises', scientificName: 'Hymenopodidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'hymenopus', name: 'Orchid Mantises', scientificName: 'Hymenopus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'hymenopus-coronatus', name: 'Orchid Mantis', scientificName: 'Hymenopus coronatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: BLATTODEA
            {
              id: 'blattodea',
              name: 'Cockroaches & Termites',
              scientificName: 'Blattodea',
              rank: 'order',
              speciesCount: 7500,
              children: [
                { id: 'blattidae', name: 'Cockroaches', scientificName: 'Blattidae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'periplaneta', name: 'American Cockroaches', scientificName: 'Periplaneta', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'periplaneta-americana', name: 'American Cockroach', scientificName: 'Periplaneta americana', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'termitidae', name: 'Higher Termites', scientificName: 'Termitidae', rank: 'family', speciesCount: 2000,
                  children: [
                    { id: 'macrotermes', name: 'Mound-building Termites', scientificName: 'Macrotermes', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'macrotermes-bellicosus', name: 'Cathedral Mound Termite', scientificName: 'Macrotermes bellicosus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: PHASMATODEA
            {
              id: 'phasmatodea',
              name: 'Stick Insects',
              scientificName: 'Phasmatodea',
              rank: 'order',
              speciesCount: 3000,
              children: [
                { id: 'phasmatidae', name: 'Stick Insects', scientificName: 'Phasmatidae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'phobaeticus', name: 'Giant Stick Insects', scientificName: 'Phobaeticus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'phobaeticus-chani', name: 'Chan\'s Megastick', scientificName: 'Phobaeticus chani', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phylliidae', name: 'Leaf Insects', scientificName: 'Phylliidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'phyllium', name: 'Leaf Insects', scientificName: 'Phyllium', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'phyllium-philippinicum', name: 'Philippine Leaf Insect', scientificName: 'Phyllium philippinicum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: NEUROPTERA
            {
              id: 'neuroptera',
              name: 'Lacewings & Antlions',
              scientificName: 'Neuroptera',
              rank: 'order',
              speciesCount: 6000,
              children: [
                { id: 'chrysopidae', name: 'Green Lacewings', scientificName: 'Chrysopidae', rank: 'family', speciesCount: 1200,
                  children: [
                    { id: 'chrysoperla', name: 'Common Green Lacewings', scientificName: 'Chrysoperla', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'chrysoperla-carnea', name: 'Common Green Lacewing', scientificName: 'Chrysoperla carnea', rank: 'species' }
                      ]
                    },
                    { id: 'chrysopa', name: 'Green Lacewings', scientificName: 'Chrysopa', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'chrysopa-perla', name: 'Green Lacewing', scientificName: 'Chrysopa perla', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'myrmeleontidae', name: 'Antlions', scientificName: 'Myrmeleontidae', rank: 'family', speciesCount: 2000,
                  children: [
                    { id: 'myrmeleon', name: 'Antlions', scientificName: 'Myrmeleon', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'myrmeleon-formicarius', name: 'Eurasian Antlion', scientificName: 'Myrmeleon formicarius', rank: 'species' }
                      ]
                    },
                    { id: 'euroleon', name: 'European Antlions', scientificName: 'Euroleon', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'euroleon-nostras', name: 'Spotted Antlion', scientificName: 'Euroleon nostras', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hemerobiidae', name: 'Brown Lacewings', scientificName: 'Hemerobiidae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'hemerobius', name: 'Brown Lacewings', scientificName: 'Hemerobius', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'hemerobius-humulinus', name: 'Common Brown Lacewing', scientificName: 'Hemerobius humulinus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ascalaphidae', name: 'Owlflies', scientificName: 'Ascalaphidae', rank: 'family', speciesCount: 450,
                  children: [
                    { id: 'libelloides', name: 'Owlflies', scientificName: 'Libelloides', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'libelloides-coccajus', name: 'Owlfly', scientificName: 'Libelloides coccajus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mantispidae', name: 'Mantidflies', scientificName: 'Mantispidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'mantispa', name: 'Mantidflies', scientificName: 'Mantispa', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'mantispa-styriaca', name: 'Mantidfly', scientificName: 'Mantispa styriaca', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: TRICHOPTERA
            {
              id: 'trichoptera',
              name: 'Caddisflies',
              scientificName: 'Trichoptera',
              rank: 'order',
              speciesCount: 14500,
              children: [
                { id: 'limnephilidae', name: 'Northern Caddisflies', scientificName: 'Limnephilidae', rank: 'family', speciesCount: 900,
                  children: [
                    { id: 'limnephilus', name: 'Caddisflies', scientificName: 'Limnephilus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'limnephilus-rhombicus', name: 'Diamond Caddisfly', scientificName: 'Limnephilus rhombicus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phryganeidae', name: 'Giant Case-makers', scientificName: 'Phryganeidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'phryganea', name: 'Giant Caddisflies', scientificName: 'Phryganea', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'phryganea-grandis', name: 'Great Red Sedge', scientificName: 'Phryganea grandis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hydropsychidae', name: 'Net-spinning Caddisflies', scientificName: 'Hydropsychidae', rank: 'family', speciesCount: 1600,
                  children: [
                    { id: 'hydropsyche', name: 'Net-spinning Caddisflies', scientificName: 'Hydropsyche', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'hydropsyche-angustipennis', name: 'Caddisfly', scientificName: 'Hydropsyche angustipennis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leptoceridae', name: 'Long-horned Caddisflies', scientificName: 'Leptoceridae', rank: 'family', speciesCount: 1500,
                  children: [
                    { id: 'mystacides', name: 'Black Dancer Caddisflies', scientificName: 'Mystacides', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'mystacides-azurea', name: 'Blue Dancer', scientificName: 'Mystacides azurea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: EPHEMEROPTERA
            {
              id: 'ephemeroptera',
              name: 'Mayflies',
              scientificName: 'Ephemeroptera',
              rank: 'order',
              speciesCount: 3000,
              children: [
                { id: 'ephemeridae', name: 'Common Burrower Mayflies', scientificName: 'Ephemeridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'ephemera', name: 'Drake Mayflies', scientificName: 'Ephemera', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'ephemera-danica', name: 'Green Drake', scientificName: 'Ephemera danica', rank: 'species' },
                        { id: 'ephemera-vulgata', name: 'Common Mayfly', scientificName: 'Ephemera vulgata', rank: 'species' }
                      ]
                    },
                    { id: 'hexagenia', name: 'Giant Mayflies', scientificName: 'Hexagenia', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'hexagenia-limbata', name: 'Giant Mayfly', scientificName: 'Hexagenia limbata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'baetidae', name: 'Small Minnow Mayflies', scientificName: 'Baetidae', rank: 'family', speciesCount: 900,
                  children: [
                    { id: 'baetis', name: 'Blue-winged Olives', scientificName: 'Baetis', rank: 'genus', speciesCount: 150,
                      children: [
                        { id: 'baetis-rhodani', name: 'Large Dark Olive', scientificName: 'Baetis rhodani', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'heptageniidae', name: 'Flatheaded Mayflies', scientificName: 'Heptageniidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'rhithrogena', name: 'March Browns', scientificName: 'Rhithrogena', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'rhithrogena-germanica', name: 'March Brown', scientificName: 'Rhithrogena germanica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'leptophlebiidae', name: 'Prong-gilled Mayflies', scientificName: 'Leptophlebiidae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'leptophlebia', name: 'Claret Duns', scientificName: 'Leptophlebia', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'leptophlebia-marginata', name: 'Sepia Dun', scientificName: 'Leptophlebia marginata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: PLECOPTERA
            {
              id: 'plecoptera',
              name: 'Stoneflies',
              scientificName: 'Plecoptera',
              rank: 'order',
              speciesCount: 3500,
              children: [
                { id: 'perlidae', name: 'Common Stoneflies', scientificName: 'Perlidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'perla', name: 'Stoneflies', scientificName: 'Perla', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'perla-bipunctata', name: 'Large Stonefly', scientificName: 'Perla bipunctata', rank: 'species' }
                      ]
                    },
                    { id: 'dinocras', name: 'Large Stoneflies', scientificName: 'Dinocras', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'dinocras-cephalotes', name: 'Willow Fly', scientificName: 'Dinocras cephalotes', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pteronarcyidae', name: 'Giant Stoneflies', scientificName: 'Pteronarcyidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'pteronarcys', name: 'Salmonflies', scientificName: 'Pteronarcys', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'pteronarcys-californica', name: 'Giant Salmonfly', scientificName: 'Pteronarcys californica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nemouridae', name: 'Spring Stoneflies', scientificName: 'Nemouridae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'nemoura', name: 'Spring Stoneflies', scientificName: 'Nemoura', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'nemoura-cinerea', name: 'Grey Flag', scientificName: 'Nemoura cinerea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chloroperlidae', name: 'Green Stoneflies', scientificName: 'Chloroperlidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'chloroperla', name: 'Green Stoneflies', scientificName: 'Chloroperla', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'chloroperla-tripunctata', name: 'Yellow Sally', scientificName: 'Chloroperla tripunctata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: SIPHONAPTERA
            {
              id: 'siphonaptera',
              name: 'Fleas',
              scientificName: 'Siphonaptera',
              rank: 'order',
              speciesCount: 2500,
              children: [
                { id: 'pulicidae', name: 'Common Fleas', scientificName: 'Pulicidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'pulex', name: 'Human Fleas', scientificName: 'Pulex', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'pulex-irritans', name: 'Human Flea', scientificName: 'Pulex irritans', rank: 'species' }
                      ]
                    },
                    { id: 'ctenocephalides', name: 'Cat and Dog Fleas', scientificName: 'Ctenocephalides', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'ctenocephalides-felis', name: 'Cat Flea', scientificName: 'Ctenocephalides felis', rank: 'species' },
                        { id: 'ctenocephalides-canis', name: 'Dog Flea', scientificName: 'Ctenocephalides canis', rank: 'species' }
                      ]
                    },
                    { id: 'xenopsylla', name: 'Plague Fleas', scientificName: 'Xenopsylla', rank: 'genus', speciesCount: 75,
                      children: [
                        { id: 'xenopsylla-cheopis', name: 'Oriental Rat Flea', scientificName: 'Xenopsylla cheopis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tungidae', name: 'Chigoe Fleas', scientificName: 'Tungidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'tunga', name: 'Chigoe Fleas', scientificName: 'Tunga', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'tunga-penetrans', name: 'Chigoe Flea', scientificName: 'Tunga penetrans', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ceratophyllidae', name: 'Bird and Rodent Fleas', scientificName: 'Ceratophyllidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'ceratophyllus', name: 'Bird Fleas', scientificName: 'Ceratophyllus', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'ceratophyllus-gallinae', name: 'Hen Flea', scientificName: 'Ceratophyllus gallinae', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: PHTHIRAPTERA
            {
              id: 'phthiraptera',
              name: 'Lice',
              scientificName: 'Phthiraptera',
              rank: 'order',
              speciesCount: 5000,
              children: [
                { id: 'pediculidae', name: 'Human Lice', scientificName: 'Pediculidae', rank: 'family', speciesCount: 2,
                  children: [
                    { id: 'pediculus', name: 'Head and Body Lice', scientificName: 'Pediculus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pediculus-humanus', name: 'Body Louse', scientificName: 'Pediculus humanus', rank: 'species' },
                        { id: 'pediculus-capitis', name: 'Head Louse', scientificName: 'Pediculus humanus capitis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pthiridae', name: 'Pubic Lice', scientificName: 'Pthiridae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'pthirus', name: 'Pubic Lice', scientificName: 'Pthirus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'pthirus-pubis', name: 'Pubic Louse', scientificName: 'Pthirus pubis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'menoponidae', name: 'Poultry Lice', scientificName: 'Menoponidae', rank: 'family', speciesCount: 650,
                  children: [
                    { id: 'menacanthus', name: 'Poultry Lice', scientificName: 'Menacanthus', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'menacanthus-stramineus', name: 'Chicken Body Louse', scientificName: 'Menacanthus stramineus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'trichodectidae', name: 'Mammal Chewing Lice', scientificName: 'Trichodectidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'trichodectes', name: 'Chewing Lice', scientificName: 'Trichodectes', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'trichodectes-canis', name: 'Dog Louse', scientificName: 'Trichodectes canis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: DERMAPTERA
            {
              id: 'dermaptera',
              name: 'Earwigs',
              scientificName: 'Dermaptera',
              rank: 'order',
              speciesCount: 2000,
              children: [
                { id: 'forficulidae', name: 'Common Earwigs', scientificName: 'Forficulidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'forficula', name: 'European Earwigs', scientificName: 'Forficula', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'forficula-auricularia', name: 'European Earwig', scientificName: 'Forficula auricularia', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'labiduridae', name: 'Striped Earwigs', scientificName: 'Labiduridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'labidura', name: 'Striped Earwigs', scientificName: 'Labidura', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'labidura-riparia', name: 'Shore Earwig', scientificName: 'Labidura riparia', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'anisolabididae', name: 'Ring-legged Earwigs', scientificName: 'Anisolabididae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'euborellia', name: 'Ring-legged Earwigs', scientificName: 'Euborellia', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'euborellia-annulipes', name: 'Ring-legged Earwig', scientificName: 'Euborellia annulipes', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: THYSANOPTERA
            {
              id: 'thysanoptera',
              name: 'Thrips',
              scientificName: 'Thysanoptera',
              rank: 'order',
              speciesCount: 6000,
              children: [
                { id: 'thripidae', name: 'Common Thrips', scientificName: 'Thripidae', rank: 'family', speciesCount: 2000,
                  children: [
                    { id: 'thrips', name: 'Thrips', scientificName: 'Thrips', rank: 'genus', speciesCount: 300,
                      children: [
                        { id: 'thrips-tabaci', name: 'Onion Thrips', scientificName: 'Thrips tabaci', rank: 'species' }
                      ]
                    },
                    { id: 'frankliniella', name: 'Flower Thrips', scientificName: 'Frankliniella', rank: 'genus', speciesCount: 230,
                      children: [
                        { id: 'frankliniella-occidentalis', name: 'Western Flower Thrips', scientificName: 'Frankliniella occidentalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'phlaeothripidae', name: 'Tube-tailed Thrips', scientificName: 'Phlaeothripidae', rank: 'family', speciesCount: 3500,
                  children: [
                    { id: 'haplothrips', name: 'Grass Thrips', scientificName: 'Haplothrips', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'haplothrips-tritici', name: 'Wheat Thrips', scientificName: 'Haplothrips tritici', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: MEGALOPTERA
            {
              id: 'megaloptera',
              name: 'Dobsonflies & Alderflies',
              scientificName: 'Megaloptera',
              rank: 'order',
              speciesCount: 380,
              children: [
                { id: 'corydalidae', name: 'Dobsonflies', scientificName: 'Corydalidae', rank: 'family', speciesCount: 220,
                  children: [
                    { id: 'corydalus', name: 'Dobsonflies', scientificName: 'Corydalus', rank: 'genus', speciesCount: 35,
                      children: [
                        { id: 'corydalus-cornutus', name: 'Eastern Dobsonfly', scientificName: 'Corydalus cornutus', rank: 'species' }
                      ]
                    },
                    { id: 'acanthacorydalis', name: 'Giant Dobsonflies', scientificName: 'Acanthacorydalis', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'acanthacorydalis-fruhstorferi', name: 'Giant Dobsonfly', scientificName: 'Acanthacorydalis fruhstorferi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sialidae', name: 'Alderflies', scientificName: 'Sialidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'sialis', name: 'Alderflies', scientificName: 'Sialis', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'sialis-lutaria', name: 'Common Alderfly', scientificName: 'Sialis lutaria', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: RAPHIDIOPTERA
            {
              id: 'raphidioptera',
              name: 'Snakeflies',
              scientificName: 'Raphidioptera',
              rank: 'order',
              speciesCount: 260,
              children: [
                { id: 'raphidiidae', name: 'Snakeflies', scientificName: 'Raphidiidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'raphidia', name: 'Snakeflies', scientificName: 'Raphidia', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'raphidia-notata', name: 'Western Snakefly', scientificName: 'Raphidia notata', rank: 'species' }
                      ]
                    },
                    { id: 'agulla', name: 'American Snakeflies', scientificName: 'Agulla', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'agulla-adnixa', name: 'Square-headed Snakefly', scientificName: 'Agulla adnixa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'inocelliidae', name: 'Inocelliid Snakeflies', scientificName: 'Inocelliidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'inocellia', name: 'Inocelliid Snakeflies', scientificName: 'Inocellia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'inocellia-crassicornis', name: 'Thick-horned Snakefly', scientificName: 'Inocellia crassicornis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: EMBIOPTERA
            {
              id: 'embioptera',
              name: 'Webspinners',
              scientificName: 'Embioptera',
              rank: 'order',
              speciesCount: 400,
              children: [
                { id: 'embiidae', name: 'Typical Webspinners', scientificName: 'Embiidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'embia', name: 'Webspinners', scientificName: 'Embia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'embia-major', name: 'Large Webspinner', scientificName: 'Embia major', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'oligotomidae', name: 'Oligotomid Webspinners', scientificName: 'Oligotomidae', rank: 'family', speciesCount: 90,
                  children: [
                    { id: 'oligotoma', name: 'Webspinners', scientificName: 'Oligotoma', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'oligotoma-saundersii', name: 'Saunders Webspinner', scientificName: 'Oligotoma saundersii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ZORAPTERA
            {
              id: 'zoraptera',
              name: 'Angel Insects',
              scientificName: 'Zoraptera',
              rank: 'order',
              speciesCount: 40,
              children: [
                { id: 'zorotypidae', name: 'Angel Insects', scientificName: 'Zorotypidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'zorotypus', name: 'Angel Insects', scientificName: 'Zorotypus', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'zorotypus-hubbardi', name: 'Hubbards Angel Insect', scientificName: 'Zorotypus hubbardi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: STREPSIPTERA
            {
              id: 'strepsiptera',
              name: 'Twisted-wing Parasites',
              scientificName: 'Strepsiptera',
              rank: 'order',
              speciesCount: 600,
              children: [
                { id: 'stylopidae', name: 'Bee Parasites', scientificName: 'Stylopidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'stylops', name: 'Bee Parasites', scientificName: 'Stylops', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'stylops-melittae', name: 'Bee Parasite', scientificName: 'Stylops melittae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'xenidae', name: 'Wasp Parasites', scientificName: 'Xenidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'xenos', name: 'Wasp Parasites', scientificName: 'Xenos', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'xenos-vesparum', name: 'Wasp Strepsipteran', scientificName: 'Xenos vesparum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'halictophagidae', name: 'Leafhopper Parasites', scientificName: 'Halictophagidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'halictophagus', name: 'Leafhopper Parasites', scientificName: 'Halictophagus', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'halictophagus-silwoodensis', name: 'Silwood Strepsipteran', scientificName: 'Halictophagus silwoodensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ARCHAEOGNATHA
            {
              id: 'archaeognatha',
              name: 'Bristletails',
              scientificName: 'Archaeognatha',
              rank: 'order',
              speciesCount: 500,
              children: [
                { id: 'machilidae', name: 'Jumping Bristletails', scientificName: 'Machilidae', rank: 'family', speciesCount: 250,
                  children: [
                    { id: 'petrobius', name: 'Rock Bristletails', scientificName: 'Petrobius', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'petrobius-maritimus', name: 'Sea Bristletail', scientificName: 'Petrobius maritimus', rank: 'species' }
                      ]
                    },
                    { id: 'trigoniophthalmus', name: 'Bristletails', scientificName: 'Trigoniophthalmus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'trigoniophthalmus-alternatus', name: 'Common Bristletail', scientificName: 'Trigoniophthalmus alternatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'meinertellidae', name: 'Rock Bristletails', scientificName: 'Meinertellidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'machiloides', name: 'Rock Jumpers', scientificName: 'Machiloides', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'machiloides-banksi', name: 'Banks Bristletail', scientificName: 'Machiloides banksi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ZYGENTOMA
            {
              id: 'zygentoma',
              name: 'Silverfish & Firebrats',
              scientificName: 'Zygentoma',
              rank: 'order',
              speciesCount: 560,
              children: [
                { id: 'lepismatidae', name: 'Silverfish', scientificName: 'Lepismatidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'lepisma', name: 'Silverfish', scientificName: 'Lepisma', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'lepisma-saccharina', name: 'Common Silverfish', scientificName: 'Lepisma saccharina', rank: 'species' }
                      ]
                    },
                    { id: 'thermobia', name: 'Firebrats', scientificName: 'Thermobia', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'thermobia-domestica', name: 'Firebrat', scientificName: 'Thermobia domestica', rank: 'species' }
                      ]
                    },
                    { id: 'ctenolepisma', name: 'Gray Silverfish', scientificName: 'Ctenolepisma', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'ctenolepisma-longicaudata', name: 'Gray Silverfish', scientificName: 'Ctenolepisma longicaudata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nicoletiidae', name: 'Cave Silverfish', scientificName: 'Nicoletiidae', rank: 'family', speciesCount: 250,
                  children: [
                    { id: 'nicoletia', name: 'Cave Silverfish', scientificName: 'Nicoletia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'nicoletia-phytophila', name: 'Cave Silverfish', scientificName: 'Nicoletia phytophila', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            // ORDER: ISOPTERA (legacy - now part of Blattodea, but kept for completeness)
            {
              id: 'isoptera',
              name: 'Termites',
              scientificName: 'Isoptera',
              rank: 'order',
              description: 'Now classified within Blattodea, historically separate order',
              speciesCount: 2900,
              children: [
                { id: 'rhinotermitidae', name: 'Subterranean Termites', scientificName: 'Rhinotermitidae', rank: 'family', speciesCount: 350,
                  children: [
                    { id: 'reticulitermes', name: 'Subterranean Termites', scientificName: 'Reticulitermes', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'reticulitermes-flavipes', name: 'Eastern Subterranean Termite', scientificName: 'Reticulitermes flavipes', rank: 'species' }
                      ]
                    },
                    { id: 'coptotermes', name: 'Formosan Termites', scientificName: 'Coptotermes', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'coptotermes-formosanus', name: 'Formosan Termite', scientificName: 'Coptotermes formosanus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'kalotermitidae', name: 'Drywood Termites', scientificName: 'Kalotermitidae', rank: 'family', speciesCount: 450,
                  children: [
                    { id: 'incisitermes', name: 'Drywood Termites', scientificName: 'Incisitermes', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'incisitermes-minor', name: 'Western Drywood Termite', scientificName: 'Incisitermes minor', rank: 'species' }
                      ]
                    },
                    { id: 'cryptotermes', name: 'Drywood Termites', scientificName: 'Cryptotermes', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'cryptotermes-brevis', name: 'West Indian Drywood Termite', scientificName: 'Cryptotermes brevis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // CLASS: ARACHNIDA
        {
          id: 'arachnida',
          name: 'Arachnids',
          scientificName: 'Arachnida',
          rank: 'class',
          speciesCount: 100000,
          children: [
            {
              id: 'araneae',
              name: 'Spiders',
              scientificName: 'Araneae',
              rank: 'order',
              speciesCount: 48000,
              children: [
                { id: 'theridiidae', name: 'Cobweb Spiders', scientificName: 'Theridiidae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'latrodectus', name: 'Widow Spiders', scientificName: 'Latrodectus', rank: 'genus', speciesCount: 32,
                      children: [
                        { id: 'latrodectus-mactans', name: 'Southern Black Widow', scientificName: 'Latrodectus mactans', rank: 'species' },
                        { id: 'latrodectus-hasselti', name: 'Redback Spider', scientificName: 'Latrodectus hasselti', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'salticidae', name: 'Jumping Spiders', scientificName: 'Salticidae', rank: 'family', speciesCount: 6200,
                  children: [
                    { id: 'maratus', name: 'Peacock Spiders', scientificName: 'Maratus', rank: 'genus', speciesCount: 92,
                      children: [
                        { id: 'maratus-volans', name: 'Peacock Spider', scientificName: 'Maratus volans', rank: 'species' }
                      ]
                    },
                    { id: 'portia', name: 'Portia Spiders', scientificName: 'Portia', rank: 'genus', speciesCount: 17,
                      children: [
                        { id: 'portia-fimbriata', name: 'Fringed Jumping Spider', scientificName: 'Portia fimbriata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'theraphosidae', name: 'Tarantulas', scientificName: 'Theraphosidae', rank: 'family', speciesCount: 1000,
                  children: [
                    { id: 'theraphosa', name: 'Goliath Birdeaters', scientificName: 'Theraphosa', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'theraphosa-blondi', name: 'Goliath Birdeater', scientificName: 'Theraphosa blondi', rank: 'species' }
                      ]
                    },
                    { id: 'brachypelma', name: 'Mexican Tarantulas', scientificName: 'Brachypelma', rank: 'genus', speciesCount: 18,
                      children: [
                        { id: 'brachypelma-hamorii', name: 'Mexican Redknee Tarantula', scientificName: 'Brachypelma hamorii', rank: 'species' }
                      ]
                    },
                    { id: 'poecilotheria', name: 'Tiger Spiders', scientificName: 'Poecilotheria', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'poecilotheria-metallica', name: 'Gooty Sapphire Ornamental', scientificName: 'Poecilotheria metallica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'araneidae', name: 'Orb-weavers', scientificName: 'Araneidae', rank: 'family', speciesCount: 3000,
                  children: [
                    { id: 'nephila', name: 'Golden Silk Orb-weavers', scientificName: 'Trichonephila', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'trichonephila-clavipes', name: 'Golden Silk Orb-weaver', scientificName: 'Trichonephila clavipes', rank: 'species' }
                      ]
                    },
                    { id: 'argiope', name: 'Garden Spiders', scientificName: 'Argiope', rank: 'genus', speciesCount: 76,
                      children: [
                        { id: 'argiope-aurantia', name: 'Yellow Garden Spider', scientificName: 'Argiope aurantia', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sicariidae', name: 'Recluse Spiders', scientificName: 'Sicariidae', rank: 'family', speciesCount: 160,
                  children: [
                    { id: 'loxosceles', name: 'Brown Recluses', scientificName: 'Loxosceles', rank: 'genus', speciesCount: 130,
                      children: [
                        { id: 'loxosceles-reclusa', name: 'Brown Recluse', scientificName: 'Loxosceles reclusa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lycosidae', name: 'Wolf Spiders', scientificName: 'Lycosidae', rank: 'family', speciesCount: 2500,
                  children: [
                    { id: 'lycosa', name: 'Wolf Spiders', scientificName: 'Lycosa', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'lycosa-tarantula', name: 'Tarantula Wolf Spider', scientificName: 'Lycosa tarantula', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ctenizidae', name: 'Trapdoor Spiders', scientificName: 'Ctenizidae', rank: 'family', speciesCount: 120 },
                { id: 'sparassidae', name: 'Huntsman Spiders', scientificName: 'Sparassidae', rank: 'family', speciesCount: 1200,
                  children: [
                    { id: 'heteropoda', name: 'Giant Huntsmen', scientificName: 'Heteropoda', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'heteropoda-maxima', name: 'Giant Huntsman Spider', scientificName: 'Heteropoda maxima', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'scorpiones',
              name: 'Scorpions',
              scientificName: 'Scorpiones',
              rank: 'order',
              speciesCount: 2500,
              children: [
                { id: 'buthidae', name: 'Thick-tailed Scorpions', scientificName: 'Buthidae', rank: 'family', speciesCount: 1100,
                  children: [
                    { id: 'leiurus', name: 'Deathstalkers', scientificName: 'Leiurus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'leiurus-quinquestriatus', name: 'Deathstalker', scientificName: 'Leiurus quinquestriatus', rank: 'species' }
                      ]
                    },
                    { id: 'centruroides', name: 'Bark Scorpions', scientificName: 'Centruroides', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'centruroides-sculpturatus', name: 'Arizona Bark Scorpion', scientificName: 'Centruroides sculpturatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scorpionidae', name: 'Scorpionidae', scientificName: 'Scorpionidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'pandinus', name: 'Emperor Scorpions', scientificName: 'Pandinus', rank: 'genus', speciesCount: 24,
                      children: [
                        { id: 'pandinus-imperator', name: 'Emperor Scorpion', scientificName: 'Pandinus imperator', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'acari',
              name: 'Mites & Ticks',
              scientificName: 'Acari',
              rank: 'order',
              speciesCount: 55000,
              children: [
                { id: 'ixodidae', name: 'Hard Ticks', scientificName: 'Ixodidae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'ixodes', name: 'Ixodes Ticks', scientificName: 'Ixodes', rank: 'genus', speciesCount: 250,
                      children: [
                        { id: 'ixodes-scapularis', name: 'Deer Tick', scientificName: 'Ixodes scapularis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tetranychidae', name: 'Spider Mites', scientificName: 'Tetranychidae', rank: 'family', speciesCount: 1200 },
                { id: 'trombiculidae', name: 'Chiggers', scientificName: 'Trombiculidae', rank: 'family', speciesCount: 3000 }
              ]
            },
            {
              id: 'opiliones',
              name: 'Harvestmen',
              scientificName: 'Opiliones',
              rank: 'order',
              speciesCount: 6500,
              children: [
                { id: 'phalangiidae', name: 'Daddy Longlegs', scientificName: 'Phalangiidae', rank: 'family', speciesCount: 380,
                  children: [
                    { id: 'phalangium', name: 'Harvestmen', scientificName: 'Phalangium', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'phalangium-opilio', name: 'Common Harvestman', scientificName: 'Phalangium opilio', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'sclerosomatidae', name: 'Sclerosomatid Harvestmen', scientificName: 'Sclerosomatidae', rank: 'family', speciesCount: 700,
                  children: [
                    { id: 'leiobunum', name: 'Brown Harvestmen', scientificName: 'Leiobunum', rank: 'genus', speciesCount: 150 }
                  ]
                }
              ]
            },
            {
              id: 'solifugae',
              name: 'Camel Spiders',
              scientificName: 'Solifugae',
              rank: 'order',
              speciesCount: 1100,
              children: [
                { id: 'galeodidae', name: 'Galeodid Solifuges', scientificName: 'Galeodidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'galeodes', name: 'Camel Spiders', scientificName: 'Galeodes', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'galeodes-arabs', name: 'Egyptian Giant Solpugid', scientificName: 'Galeodes arabs', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'eremobatidae', name: 'American Solifuges', scientificName: 'Eremobatidae', rank: 'family', speciesCount: 200 }
              ]
            },
            {
              id: 'amblypygi',
              name: 'Whip Spiders',
              scientificName: 'Amblypygi',
              rank: 'order',
              description: 'Tailless whip scorpions',
              speciesCount: 190,
              children: [
                { id: 'phrynichidae', name: 'Whip Spiders', scientificName: 'Phrynichidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'damon', name: 'African Whip Spiders', scientificName: 'Damon', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'damon-diadema', name: 'Tanzanian Giant Tailless Whip Scorpion', scientificName: 'Damon diadema', rank: 'species' },
                        { id: 'damon-variegatus', name: 'African Whip Spider', scientificName: 'Damon variegatus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'charinidae', name: 'Cave Whip Spiders', scientificName: 'Charinidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'charinus', name: 'Small Whip Spiders', scientificName: 'Charinus', rank: 'genus', speciesCount: 60 }
                  ]
                }
              ]
            },
            {
              id: 'uropygi',
              name: 'Whip Scorpions',
              scientificName: 'Uropygi',
              rank: 'order',
              description: 'Vinegaroons, spray acetic acid when threatened',
              speciesCount: 120,
              children: [
                { id: 'thelyphonidae', name: 'Vinegaroons', scientificName: 'Thelyphonidae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'mastigoproctus', name: 'Giant Vinegaroons', scientificName: 'Mastigoproctus', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'mastigoproctus-giganteus', name: 'Giant Whip Scorpion', scientificName: 'Mastigoproctus giganteus', rank: 'species' }
                      ]
                    },
                    { id: 'thelyphonus', name: 'Asian Whip Scorpions', scientificName: 'Thelyphonus', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'thelyphonus-caudatus', name: 'Tailed Whip Scorpion', scientificName: 'Thelyphonus caudatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'pseudoscorpiones',
              name: 'Pseudoscorpions',
              scientificName: 'Pseudoscorpiones',
              rank: 'order',
              description: 'Small arachnids resembling scorpions without tails',
              speciesCount: 3500,
              children: [
                { id: 'cheliferidae', name: 'House Pseudoscorpions', scientificName: 'Cheliferidae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'chelifer', name: 'Book Scorpions', scientificName: 'Chelifer', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'chelifer-cancroides', name: 'House Pseudoscorpion', scientificName: 'Chelifer cancroides', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chernetidae', name: 'Chernetid Pseudoscorpions', scientificName: 'Chernetidae', rank: 'family', speciesCount: 700 },
                { id: 'chthoniidae', name: 'Chthoniid Pseudoscorpions', scientificName: 'Chthoniidae', rank: 'family', speciesCount: 600 }
              ]
            }
          ]
        },
        // CLASS: CRUSTACEA
        {
          id: 'crustacea',
          name: 'Crustaceans',
          scientificName: 'Crustacea',
          rank: 'class',
          speciesCount: 70000,
          children: [
            {
              id: 'decapoda',
              name: 'Decapods',
              scientificName: 'Decapoda',
              rank: 'order',
              speciesCount: 15000,
              children: [
                { id: 'palaemonidae', name: 'Shrimp', scientificName: 'Palaemonidae', rank: 'family', speciesCount: 1000,
                  children: [
                    { id: 'palaemon', name: 'Common Shrimp', scientificName: 'Palaemon', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'palaemon-serratus', name: 'Common Prawn', scientificName: 'Palaemon serratus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'penaeidae', name: 'Penaeid Shrimp', scientificName: 'Penaeidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'penaeus', name: 'Tiger Prawns', scientificName: 'Penaeus', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'penaeus-monodon', name: 'Giant Tiger Prawn', scientificName: 'Penaeus monodon', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'portunidae', name: 'Swimming Crabs', scientificName: 'Portunidae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'callinectes', name: 'Blue Crabs', scientificName: 'Callinectes', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'callinectes-sapidus', name: 'Blue Crab', scientificName: 'Callinectes sapidus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cancridae', name: 'Cancer Crabs', scientificName: 'Cancridae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'cancer', name: 'Cancer Crabs', scientificName: 'Cancer', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'cancer-pagurus', name: 'Edible Crab', scientificName: 'Cancer pagurus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'nephropidae', name: 'Clawed Lobsters', scientificName: 'Nephropidae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'homarus', name: 'True Lobsters', scientificName: 'Homarus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'homarus-americanus', name: 'American Lobster', scientificName: 'Homarus americanus', rank: 'species' },
                        { id: 'homarus-gammarus', name: 'European Lobster', scientificName: 'Homarus gammarus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'palinuridae', name: 'Spiny Lobsters', scientificName: 'Palinuridae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'panulirus', name: 'Spiny Lobsters', scientificName: 'Panulirus', rank: 'genus', speciesCount: 19,
                      children: [
                        { id: 'panulirus-argus', name: 'Caribbean Spiny Lobster', scientificName: 'Panulirus argus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'paguridae', name: 'Hermit Crabs', scientificName: 'Paguridae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'pagurus', name: 'Hermit Crabs', scientificName: 'Pagurus', rank: 'genus', speciesCount: 170,
                      children: [
                        { id: 'pagurus-bernhardus', name: 'Common Hermit Crab', scientificName: 'Pagurus bernhardus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'majidae', name: 'Spider Crabs', scientificName: 'Majidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'macrocheira', name: 'Giant Spider Crabs', scientificName: 'Macrocheira', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'macrocheira-kaempferi', name: 'Japanese Spider Crab', scientificName: 'Macrocheira kaempferi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'grapsidae', name: 'Shore Crabs', scientificName: 'Grapsidae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'gecarcoidea', name: 'Land Crabs', scientificName: 'Gecarcoidea', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'gecarcoidea-natalis', name: 'Christmas Island Red Crab', scientificName: 'Gecarcoidea natalis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'isopoda',
              name: 'Isopods',
              scientificName: 'Isopoda',
              rank: 'order',
              speciesCount: 10000,
              children: [
                { id: 'cirolanidae', name: 'Giant Isopods', scientificName: 'Cirolanidae', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'bathynomus', name: 'Giant Isopods', scientificName: 'Bathynomus', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'bathynomus-giganteus', name: 'Giant Isopod', scientificName: 'Bathynomus giganteus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'oniscidae', name: 'Woodlice', scientificName: 'Oniscidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'armadillidium', name: 'Pill Bugs', scientificName: 'Armadillidium', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'armadillidium-vulgare', name: 'Common Pill Bug', scientificName: 'Armadillidium vulgare', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'amphipoda',
              name: 'Amphipods',
              scientificName: 'Amphipoda',
              rank: 'order',
              speciesCount: 10000
            },
            {
              id: 'euphausiacea',
              name: 'Krill',
              scientificName: 'Euphausiacea',
              rank: 'order',
              speciesCount: 86,
              children: [
                { id: 'euphausiidae', name: 'Krill', scientificName: 'Euphausiidae', rank: 'family', speciesCount: 86,
                  children: [
                    { id: 'euphausia', name: 'Krill', scientificName: 'Euphausia', rank: 'genus', speciesCount: 31,
                      children: [
                        { id: 'euphausia-superba', name: 'Antarctic Krill', scientificName: 'Euphausia superba', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'stomatopoda',
              name: 'Mantis Shrimp',
              scientificName: 'Stomatopoda',
              rank: 'order',
              speciesCount: 450,
              children: [
                { id: 'odontodactylidae', name: 'Smasher Mantis Shrimp', scientificName: 'Odontodactylidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'odontodactylus', name: 'Smashers', scientificName: 'Odontodactylus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'odontodactylus-scyllarus', name: 'Peacock Mantis Shrimp', scientificName: 'Odontodactylus scyllarus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'cirripedia',
              name: 'Barnacles',
              scientificName: 'Cirripedia',
              rank: 'order',
              speciesCount: 1000,
              children: [
                { id: 'balanidae', name: 'Acorn Barnacles', scientificName: 'Balanidae', rank: 'family', speciesCount: 90,
                  children: [
                    { id: 'balanus', name: 'Acorn Barnacles', scientificName: 'Balanus', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'balanus-glandula', name: 'Acorn Barnacle', scientificName: 'Balanus glandula', rank: 'species' }
                      ]
                    },
                    { id: 'semibalanus', name: 'Rock Barnacles', scientificName: 'Semibalanus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'semibalanus-balanoides', name: 'Northern Rock Barnacle', scientificName: 'Semibalanus balanoides', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pollicipedidae', name: 'Gooseneck Barnacles', scientificName: 'Pollicipedidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'pollicipes', name: 'Gooseneck Barnacles', scientificName: 'Pollicipes', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'pollicipes-pollicipes', name: 'Goose Barnacle', scientificName: 'Pollicipes pollicipes', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'lepadidae', name: 'Pelagic Gooseneck Barnacles', scientificName: 'Lepadidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'lepas', name: 'Pelagic Barnacles', scientificName: 'Lepas', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'lepas-anatifera', name: 'Pelagic Gooseneck Barnacle', scientificName: 'Lepas anatifera', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'copepoda',
              name: 'Copepods',
              scientificName: 'Copepoda',
              rank: 'order',
              description: 'Small crustaceans, major component of marine zooplankton',
              speciesCount: 13000,
              children: [
                { id: 'calanoida', name: 'Calanoid Copepods', scientificName: 'Calanoida', rank: 'family', speciesCount: 2700,
                  children: [
                    { id: 'calanus', name: 'Calanoid Copepods', scientificName: 'Calanus', rank: 'genus', speciesCount: 14,
                      children: [
                        { id: 'calanus-finmarchicus', name: 'North Atlantic Copepod', scientificName: 'Calanus finmarchicus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cyclopoida', name: 'Cyclopoid Copepods', scientificName: 'Cyclopoida', rank: 'family', speciesCount: 4500,
                  children: [
                    { id: 'cyclops-genus', name: 'Cyclops', scientificName: 'Cyclops', rank: 'genus', speciesCount: 400 }
                  ]
                },
                { id: 'harpacticoida', name: 'Harpacticoid Copepods', scientificName: 'Harpacticoida', rank: 'family', speciesCount: 4500 }
              ]
            },
            {
              id: 'branchiopoda',
              name: 'Branchiopods',
              scientificName: 'Branchiopoda',
              rank: 'order',
              description: 'Fairy shrimp, brine shrimp, water fleas',
              speciesCount: 900,
              children: [
                { id: 'anostraca', name: 'Fairy Shrimp', scientificName: 'Anostraca', rank: 'family', speciesCount: 300,
                  children: [
                    { id: 'artemia', name: 'Brine Shrimp', scientificName: 'Artemia', rank: 'genus', speciesCount: 9,
                      children: [
                        { id: 'artemia-salina', name: 'Brine Shrimp', scientificName: 'Artemia salina', rank: 'species' },
                        { id: 'artemia-franciscana', name: 'San Francisco Brine Shrimp', scientificName: 'Artemia franciscana', rank: 'species' }
                      ]
                    },
                    { id: 'branchinecta', name: 'Fairy Shrimp', scientificName: 'Branchinecta', rank: 'genus', speciesCount: 45,
                      children: [
                        { id: 'branchinecta-lindahli', name: 'Versatile Fairy Shrimp', scientificName: 'Branchinecta lindahli', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'notostraca', name: 'Tadpole Shrimp', scientificName: 'Notostraca', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'triops', name: 'Tadpole Shrimp', scientificName: 'Triops', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'triops-longicaudatus', name: 'Longtail Tadpole Shrimp', scientificName: 'Triops longicaudatus', rank: 'species' },
                        { id: 'triops-cancriformis', name: 'European Tadpole Shrimp', scientificName: 'Triops cancriformis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cladocera', name: 'Water Fleas', scientificName: 'Cladocera', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'daphnia', name: 'Water Fleas', scientificName: 'Daphnia', rank: 'genus', speciesCount: 200,
                      children: [
                        { id: 'daphnia-pulex', name: 'Common Water Flea', scientificName: 'Daphnia pulex', rank: 'species' },
                        { id: 'daphnia-magna', name: 'Large Water Flea', scientificName: 'Daphnia magna', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        // CLASS: MYRIAPODA
        {
          id: 'myriapoda',
          name: 'Myriapods',
          scientificName: 'Myriapoda',
          rank: 'class',
          speciesCount: 13000,
          children: [
            { id: 'chilopoda', name: 'Centipedes', scientificName: 'Chilopoda', rank: 'order', speciesCount: 3000,
              children: [
                { id: 'scolopendridae', name: 'Giant Centipedes', scientificName: 'Scolopendridae', rank: 'family', speciesCount: 400,
                  children: [
                    { id: 'scolopendra', name: 'Giant Centipedes', scientificName: 'Scolopendra', rank: 'genus', speciesCount: 90,
                      children: [
                        { id: 'scolopendra-gigantea', name: 'Amazonian Giant Centipede', scientificName: 'Scolopendra gigantea', rank: 'species' },
                        { id: 'scolopendra-subspinipes', name: 'Vietnamese Centipede', scientificName: 'Scolopendra subspinipes', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'scutigeridae', name: 'House Centipedes', scientificName: 'Scutigeridae', rank: 'family', speciesCount: 90,
                  children: [
                    { id: 'scutigera', name: 'House Centipedes', scientificName: 'Scutigera', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'scutigera-coleoptrata', name: 'House Centipede', scientificName: 'Scutigera coleoptrata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'diplopoda', name: 'Millipedes', scientificName: 'Diplopoda', rank: 'order', speciesCount: 10000,
              children: [
                { id: 'spirostreptidae', name: 'Giant Millipedes', scientificName: 'Spirostreptidae', rank: 'family', speciesCount: 1000,
                  children: [
                    { id: 'archispirostreptus', name: 'Giant African Millipedes', scientificName: 'Archispirostreptus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'archispirostreptus-gigas', name: 'Giant African Millipede', scientificName: 'Archispirostreptus gigas', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'julidae', name: 'Cylindrical Millipedes', scientificName: 'Julidae', rank: 'family', speciesCount: 600,
                  children: [
                    { id: 'julus', name: 'Common Millipedes', scientificName: 'Julus', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'julus-scandinavius', name: 'Blunt-tailed Snake Millipede', scientificName: 'Julus scandinavius', rank: 'species' }
                      ]
                    },
                    { id: 'tachypodoiulus', name: 'White-legged Snake Millipedes', scientificName: 'Tachypodoiulus', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'tachypodoiulus-niger', name: 'White-legged Snake Millipede', scientificName: 'Tachypodoiulus niger', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'polydesmidae', name: 'Flat-backed Millipedes', scientificName: 'Polydesmidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'polydesmus', name: 'Flat-backed Millipedes', scientificName: 'Polydesmus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'polydesmus-angustus', name: 'Flat-backed Millipede', scientificName: 'Polydesmus angustus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'glomeridae', name: 'Pill Millipedes', scientificName: 'Glomeridae', rank: 'family', speciesCount: 280,
                  children: [
                    { id: 'glomeris', name: 'Pill Millipedes', scientificName: 'Glomeris', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'glomeris-marginata', name: 'Pill Millipede', scientificName: 'Glomeris marginata', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'pauropoda', name: 'Pauropods', scientificName: 'Pauropoda', rank: 'order', speciesCount: 800,
              children: [
                { id: 'pauropodidae', name: 'Pauropods', scientificName: 'Pauropodidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'pauropus', name: 'Pauropods', scientificName: 'Pauropus', rank: 'genus', speciesCount: 100 }
                  ]
                }
              ]
            },
            { id: 'symphyla', name: 'Symphylans', scientificName: 'Symphyla', rank: 'order', speciesCount: 200,
              children: [
                { id: 'scutigerellidae', name: 'Garden Centipedes', scientificName: 'Scutigerellidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'scutigerella', name: 'Garden Centipedes', scientificName: 'Scutigerella', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'scutigerella-immaculata', name: 'Garden Symphylan', scientificName: 'Scutigerella immaculata', rank: 'species' }
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
    // PHYLUM: MOLLUSCA
    {
      id: 'mollusca',
      name: 'Mollusks',
      scientificName: 'Mollusca',
      rank: 'phylum',
      speciesCount: 85000,
      children: [
        {
          id: 'gastropoda',
          name: 'Snails & Slugs',
          scientificName: 'Gastropoda',
          rank: 'class',
          speciesCount: 65000,
          children: [
            { id: 'helicidae', name: 'Land Snails', scientificName: 'Helicidae', rank: 'family', speciesCount: 1000,
              children: [
                { id: 'helix', name: 'Edible Snails', scientificName: 'Helix', rank: 'genus', speciesCount: 100,
                  children: [
                    { id: 'helix-pomatia', name: 'Roman Snail', scientificName: 'Helix pomatia', rank: 'species' },
                    { id: 'helix-aspersa', name: 'Garden Snail', scientificName: 'Cornu aspersum', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'conidae', name: 'Cone Snails', scientificName: 'Conidae', rank: 'family', speciesCount: 800,
              children: [
                { id: 'conus', name: 'Cone Snails', scientificName: 'Conus', rank: 'genus', speciesCount: 800,
                  children: [
                    { id: 'conus-geographus', name: 'Geography Cone', scientificName: 'Conus geographus', rank: 'species' },
                    { id: 'conus-textile', name: 'Textile Cone', scientificName: 'Conus textile', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'achatinidae', name: 'Giant African Snails', scientificName: 'Achatinidae', rank: 'family', speciesCount: 200,
              children: [
                { id: 'lissachatina', name: 'Giant African Snails', scientificName: 'Lissachatina', rank: 'genus', speciesCount: 4,
                  children: [
                    { id: 'lissachatina-fulica', name: 'Giant African Land Snail', scientificName: 'Lissachatina fulica', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'nudibranchia', name: 'Nudibranchs', scientificName: 'Nudibranchia', rank: 'order', speciesCount: 3000,
              children: [
                { id: 'glaucidae', name: 'Blue Sea Slugs', scientificName: 'Glaucidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'glaucus', name: 'Blue Sea Slugs', scientificName: 'Glaucus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'glaucus-atlanticus', name: 'Blue Glaucus', scientificName: 'Glaucus atlanticus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'chromodorididae', name: 'Chromodorid Nudibranchs', scientificName: 'Chromodorididae', rank: 'family', speciesCount: 360 }
              ]
            },
            { id: 'limacidae', name: 'Keelback Slugs', scientificName: 'Limacidae', rank: 'family', speciesCount: 200,
              children: [
                { id: 'limax', name: 'Keelback Slugs', scientificName: 'Limax', rank: 'genus', speciesCount: 40,
                  children: [
                    { id: 'limax-maximus', name: 'Leopard Slug', scientificName: 'Limax maximus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'haliotidae', name: 'Abalones', scientificName: 'Haliotidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'haliotis', name: 'Abalones', scientificName: 'Haliotis', rank: 'genus', speciesCount: 100,
                  children: [
                    { id: 'haliotis-rufescens', name: 'Red Abalone', scientificName: 'Haliotis rufescens', rank: 'species' },
                    { id: 'haliotis-fulgens', name: 'Green Abalone', scientificName: 'Haliotis fulgens', rank: 'species' },
                    { id: 'haliotis-tuberculata', name: 'European Abalone', scientificName: 'Haliotis tuberculata', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'strombidae', name: 'Conchs', scientificName: 'Strombidae', rank: 'family', speciesCount: 80,
              children: [
                { id: 'lobatus', name: 'Fighting Conchs', scientificName: 'Lobatus', rank: 'genus', speciesCount: 8,
                  children: [
                    { id: 'lobatus-gigas', name: 'Queen Conch', scientificName: 'Lobatus gigas', rank: 'species' }
                  ]
                },
                { id: 'strombus', name: 'True Conchs', scientificName: 'Strombus', rank: 'genus', speciesCount: 50,
                  children: [
                    { id: 'strombus-luhuanus', name: 'Strawberry Conch', scientificName: 'Strombus luhuanus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'aplysiidae', name: 'Sea Hares', scientificName: 'Aplysiidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'aplysia', name: 'Sea Hares', scientificName: 'Aplysia', rank: 'genus', speciesCount: 40,
                  children: [
                    { id: 'aplysia-californica', name: 'California Sea Hare', scientificName: 'Aplysia californica', rank: 'species' },
                    { id: 'aplysia-punctata', name: 'Spotted Sea Hare', scientificName: 'Aplysia punctata', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'muricidae', name: 'Murex Snails', scientificName: 'Muricidae', rank: 'family', speciesCount: 1600,
              children: [
                { id: 'murex', name: 'Murex Snails', scientificName: 'Murex', rank: 'genus', speciesCount: 80,
                  children: [
                    { id: 'murex-pecten', name: 'Venus Comb Murex', scientificName: 'Murex pecten', rank: 'species' }
                  ]
                },
                { id: 'bolinus', name: 'Tyrian Purple Snails', scientificName: 'Bolinus', rank: 'genus', speciesCount: 2,
                  children: [
                    { id: 'bolinus-brandaris', name: 'Purple Dye Murex', scientificName: 'Bolinus brandaris', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'cypraeidae', name: 'Cowries', scientificName: 'Cypraeidae', rank: 'family', speciesCount: 250,
              children: [
                { id: 'cypraea', name: 'Cowries', scientificName: 'Cypraea', rank: 'genus', speciesCount: 200,
                  children: [
                    { id: 'cypraea-tigris', name: 'Tiger Cowrie', scientificName: 'Cypraea tigris', rank: 'species' },
                    { id: 'cypraea-moneta', name: 'Money Cowrie', scientificName: 'Cypraea moneta', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'trochidae', name: 'Top Shells', scientificName: 'Trochidae', rank: 'family', speciesCount: 700,
              children: [
                { id: 'trochus', name: 'Top Shells', scientificName: 'Trochus', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'trochus-niloticus', name: 'Commercial Top Shell', scientificName: 'Trochus niloticus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'patellidae', name: 'True Limpets', scientificName: 'Patellidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'patella', name: 'Limpets', scientificName: 'Patella', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'patella-vulgata', name: 'Common Limpet', scientificName: 'Patella vulgata', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'cephalopoda',
          name: 'Cephalopods',
          scientificName: 'Cephalopoda',
          rank: 'class',
          speciesCount: 800,
          children: [
            {
              id: 'octopoda',
              name: 'Octopuses',
              scientificName: 'Octopoda',
              rank: 'order',
              speciesCount: 300,
              children: [
                { id: 'octopodidae', name: 'Octopuses', scientificName: 'Octopodidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'octopus', name: 'Common Octopuses', scientificName: 'Octopus', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'octopus-vulgaris', name: 'Common Octopus', scientificName: 'Octopus vulgaris', rank: 'species' },
                        { id: 'octopus-cyanea', name: 'Big Blue Octopus', scientificName: 'Octopus cyanea', rank: 'species' },
                        { id: 'octopus-briareus', name: 'Caribbean Reef Octopus', scientificName: 'Octopus briareus', rank: 'species' }
                      ]
                    },
                    { id: 'enteroctopus', name: 'Giant Octopuses', scientificName: 'Enteroctopus', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'enteroctopus-dofleini', name: 'Giant Pacific Octopus', scientificName: 'Enteroctopus dofleini', rank: 'species' }
                      ]
                    },
                    { id: 'hapalochlaena', name: 'Blue-ringed Octopuses', scientificName: 'Hapalochlaena', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'hapalochlaena-lunulata', name: 'Greater Blue-ringed Octopus', scientificName: 'Hapalochlaena lunulata', rank: 'species' }
                      ]
                    },
                    { id: 'graneledone', name: 'Dumbo Octopuses', scientificName: 'Graneledone', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'graneledone-boreopacifica', name: 'Dumbo Octopus', scientificName: 'Graneledone boreopacifica', rank: 'species' }
                      ]
                    },
                    { id: 'thaumoctopus', name: 'Mimic Octopuses', scientificName: 'Thaumoctopus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'thaumoctopus-mimicus', name: 'Mimic Octopus', scientificName: 'Thaumoctopus mimicus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'argonautidae', name: 'Paper Nautiluses', scientificName: 'Argonautidae', rank: 'family', speciesCount: 7,
                  children: [
                    { id: 'argonauta', name: 'Argonauts', scientificName: 'Argonauta', rank: 'genus', speciesCount: 7,
                      children: [
                        { id: 'argonauta-argo', name: 'Greater Argonaut', scientificName: 'Argonauta argo', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'teuthida',
              name: 'Squid',
              scientificName: 'Teuthida',
              rank: 'order',
              speciesCount: 300,
              children: [
                { id: 'architeuthidae', name: 'Giant Squid', scientificName: 'Architeuthidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'architeuthis', name: 'Giant Squid', scientificName: 'Architeuthis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'architeuthis-dux', name: 'Giant Squid', scientificName: 'Architeuthis dux', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cranchiidae', name: 'Glass Squid', scientificName: 'Cranchiidae', rank: 'family', speciesCount: 60 },
                { id: 'ommastrephidae', name: 'Flying Squid', scientificName: 'Ommastrephidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'dosidicus', name: 'Humboldt Squid', scientificName: 'Dosidicus', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'dosidicus-gigas', name: 'Humboldt Squid', scientificName: 'Dosidicus gigas', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'loliginidae', name: 'Pencil Squid', scientificName: 'Loliginidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'loligo', name: 'Common Squid', scientificName: 'Loligo', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'loligo-vulgaris', name: 'European Squid', scientificName: 'Loligo vulgaris', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'magnapinnidae', name: 'Bigfin Squid', scientificName: 'Magnapinnidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'magnapinna', name: 'Bigfin Squid', scientificName: 'Magnapinna', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'magnapinna-pacifica', name: 'Pacific Bigfin Squid', scientificName: 'Magnapinna pacifica', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'sepiida',
              name: 'Cuttlefish',
              scientificName: 'Sepiida',
              rank: 'order',
              speciesCount: 120,
              children: [
                { id: 'sepiidae', name: 'Cuttlefish', scientificName: 'Sepiidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'sepia', name: 'Common Cuttlefish', scientificName: 'Sepia', rank: 'genus', speciesCount: 100,
                      children: [
                        { id: 'sepia-officinalis', name: 'Common Cuttlefish', scientificName: 'Sepia officinalis', rank: 'species' },
                        { id: 'sepia-apama', name: 'Australian Giant Cuttlefish', scientificName: 'Sepia apama', rank: 'species' }
                      ]
                    },
                    { id: 'metasepia', name: 'Flamboyant Cuttlefish', scientificName: 'Metasepia', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'metasepia-pfefferi', name: 'Flamboyant Cuttlefish', scientificName: 'Metasepia pfefferi', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'nautilida',
              name: 'Nautiluses',
              scientificName: 'Nautilida',
              rank: 'order',
              speciesCount: 6,
              children: [
                { id: 'nautilidae', name: 'Chambered Nautiluses', scientificName: 'Nautilidae', rank: 'family', speciesCount: 6,
                  children: [
                    { id: 'nautilus', name: 'Nautiluses', scientificName: 'Nautilus', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'nautilus-pompilius', name: 'Chambered Nautilus', scientificName: 'Nautilus pompilius', rank: 'species' },
                        { id: 'nautilus-belauensis', name: 'Palau Nautilus', scientificName: 'Nautilus belauensis', rank: 'species' },
                        { id: 'nautilus-stenomphalus', name: 'White-patch Nautilus', scientificName: 'Nautilus stenomphalus', rank: 'species' }
                      ]
                    },
                    { id: 'allonautilus', name: 'Crusty Nautiluses', scientificName: 'Allonautilus', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'allonautilus-scrobiculatus', name: 'Crusty Nautilus', scientificName: 'Allonautilus scrobiculatus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 'vampyromorphida',
              name: 'Vampire Squid',
              scientificName: 'Vampyromorphida',
              rank: 'order',
              speciesCount: 1,
              children: [
                { id: 'vampyroteuthidae', name: 'Vampire Squid', scientificName: 'Vampyroteuthidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'vampyroteuthis', name: 'Vampire Squid', scientificName: 'Vampyroteuthis', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'vampyroteuthis-infernalis', name: 'Vampire Squid', scientificName: 'Vampyroteuthis infernalis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'bivalvia',
          name: 'Bivalves',
          scientificName: 'Bivalvia',
          rank: 'class',
          speciesCount: 15000,
          children: [
            { id: 'ostreidae', name: 'Oysters', scientificName: 'Ostreidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'crassostrea', name: 'Pacific Oysters', scientificName: 'Crassostrea', rank: 'genus', speciesCount: 6,
                  children: [
                    { id: 'crassostrea-gigas', name: 'Pacific Oyster', scientificName: 'Crassostrea gigas', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'mytilidae', name: 'Mussels', scientificName: 'Mytilidae', rank: 'family', speciesCount: 400,
              children: [
                { id: 'mytilus', name: 'Bay Mussels', scientificName: 'Mytilus', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'mytilus-edulis', name: 'Blue Mussel', scientificName: 'Mytilus edulis', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'pectinidae', name: 'Scallops', scientificName: 'Pectinidae', rank: 'family', speciesCount: 300 },
            { id: 'tridacnidae', name: 'Giant Clams', scientificName: 'Tridacnidae', rank: 'family', speciesCount: 12,
              children: [
                { id: 'tridacna', name: 'Giant Clams', scientificName: 'Tridacna', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'tridacna-gigas', name: 'Giant Clam', scientificName: 'Tridacna gigas', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'unionidae', name: 'Freshwater Mussels', scientificName: 'Unionidae', rank: 'family', speciesCount: 700 },
            { id: 'veneridae', name: 'Venus Clams', scientificName: 'Veneridae', rank: 'family', speciesCount: 500 }
          ]
        },
        {
          id: 'polyplacophora',
          name: 'Chitons',
          scientificName: 'Polyplacophora',
          rank: 'class',
          speciesCount: 900
        }
      ]
    },
    // PHYLUM: CNIDARIA
    {
      id: 'cnidaria',
      name: 'Cnidarians',
      scientificName: 'Cnidaria',
      rank: 'phylum',
      description: 'Jellyfish, corals, and sea anemones',
      speciesCount: 11000,
      children: [
        { id: 'anthozoa', name: 'Corals & Anemones', scientificName: 'Anthozoa', rank: 'class', speciesCount: 6000,
          children: [
            { id: 'scleractinia', name: 'Stony Corals', scientificName: 'Scleractinia', rank: 'order', speciesCount: 1500,
              children: [
                { id: 'acroporidae', name: 'Staghorn Corals', scientificName: 'Acroporidae', rank: 'family', speciesCount: 800,
                  children: [
                    { id: 'acropora', name: 'Staghorn Corals', scientificName: 'Acropora', rank: 'genus', speciesCount: 400,
                      children: [
                        { id: 'acropora-cervicornis', name: 'Staghorn Coral', scientificName: 'Acropora cervicornis', rank: 'species' },
                        { id: 'acropora-palmata', name: 'Elkhorn Coral', scientificName: 'Acropora palmata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'meandrinidae', name: 'Brain Corals', scientificName: 'Meandrinidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'meandrina', name: 'Maze Brain Corals', scientificName: 'Meandrina', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'meandrina-meandrites', name: 'Maze Coral', scientificName: 'Meandrina meandrites', rank: 'species' }
                      ]
                    },
                    { id: 'platygyra', name: 'Grooved Brain Corals', scientificName: 'Platygyra', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'platygyra-daedalea', name: 'Lesser Valley Coral', scientificName: 'Platygyra daedalea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'faviidae', name: 'Star Corals', scientificName: 'Faviidae', rank: 'family', speciesCount: 120,
                  children: [
                    { id: 'diploria', name: 'Brain Corals', scientificName: 'Diploria', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'diploria-labyrinthiformis', name: 'Grooved Brain Coral', scientificName: 'Diploria labyrinthiformis', rank: 'species' }
                      ]
                    },
                    { id: 'colpophyllia', name: 'Boulder Brain Corals', scientificName: 'Colpophyllia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'colpophyllia-natans', name: 'Boulder Brain Coral', scientificName: 'Colpophyllia natans', rank: 'species' }
                      ]
                    },
                    { id: 'favia', name: 'Moon Corals', scientificName: 'Favia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'favia-fragum', name: 'Golfball Coral', scientificName: 'Favia fragum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'fungiidae', name: 'Mushroom Corals', scientificName: 'Fungiidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'fungia', name: 'Mushroom Corals', scientificName: 'Fungia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'fungia-fungites', name: 'Common Mushroom Coral', scientificName: 'Fungia fungites', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'poritidae', name: 'Pore Corals', scientificName: 'Poritidae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'porites', name: 'Finger Corals', scientificName: 'Porites', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'porites-lobata', name: 'Lobe Coral', scientificName: 'Porites lobata', rank: 'species' },
                        { id: 'porites-astreoides', name: 'Mustard Hill Coral', scientificName: 'Porites astreoides', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'actiniaria', name: 'Sea Anemones', scientificName: 'Actiniaria', rank: 'order', speciesCount: 1100,
              children: [
                { id: 'stichodactylidae', name: 'Carpet Anemones', scientificName: 'Stichodactylidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'stichodactyla', name: 'Carpet Anemones', scientificName: 'Stichodactyla', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'stichodactyla-gigantea', name: 'Giant Carpet Anemone', scientificName: 'Stichodactyla gigantea', rank: 'species' },
                        { id: 'stichodactyla-haddoni', name: 'Haddon\'s Carpet Anemone', scientificName: 'Stichodactyla haddoni', rank: 'species' }
                      ]
                    },
                    { id: 'heteractis', name: 'Magnificent Anemones', scientificName: 'Heteractis', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'heteractis-magnifica', name: 'Magnificent Sea Anemone', scientificName: 'Heteractis magnifica', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'actiniidae', name: 'True Anemones', scientificName: 'Actiniidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'actinia', name: 'Beadlet Anemones', scientificName: 'Actinia', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'actinia-equina', name: 'Beadlet Anemone', scientificName: 'Actinia equina', rank: 'species' }
                      ]
                    },
                    { id: 'anemonia', name: 'Snakelocks Anemones', scientificName: 'Anemonia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'anemonia-viridis', name: 'Snakelocks Anemone', scientificName: 'Anemonia viridis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'thalassianthidae', name: 'Giant Anemones', scientificName: 'Thalassianthidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'condylactis', name: 'Giant Caribbean Anemones', scientificName: 'Condylactis', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'condylactis-gigantea', name: 'Giant Caribbean Anemone', scientificName: 'Condylactis gigantea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'alcyonacea', name: 'Soft Corals', scientificName: 'Alcyonacea', rank: 'order', speciesCount: 3000,
              children: [
                { id: 'gorgoniidae', name: 'Sea Fans', scientificName: 'Gorgoniidae', rank: 'family', speciesCount: 300 }
              ]
            }
          ]
        },
        { id: 'scyphozoa', name: 'True Jellyfish', scientificName: 'Scyphozoa', rank: 'class', speciesCount: 200,
          children: [
            { id: 'semaeostomeae', name: 'Flag-mouth Jellyfish', scientificName: 'Semaeostomeae', rank: 'order', speciesCount: 60,
              children: [
                { id: 'ulmaridae', name: 'Moon Jellyfish', scientificName: 'Ulmaridae', rank: 'family', speciesCount: 35,
                  children: [
                    { id: 'aurelia', name: 'Moon Jellyfish', scientificName: 'Aurelia', rank: 'genus', speciesCount: 13,
                      children: [
                        { id: 'aurelia-aurita', name: 'Moon Jellyfish', scientificName: 'Aurelia aurita', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'cyaneidae', name: 'Lion\'s Mane Jellyfish', scientificName: 'Cyaneidae', rank: 'family', speciesCount: 4,
                  children: [
                    { id: 'cyanea', name: 'Lion\'s Mane', scientificName: 'Cyanea', rank: 'genus', speciesCount: 4,
                      children: [
                        { id: 'cyanea-capillata', name: 'Lion\'s Mane Jellyfish', scientificName: 'Cyanea capillata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'pelagiidae', name: 'Pelagic Jellyfish', scientificName: 'Pelagiidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'chrysaora', name: 'Sea Nettles', scientificName: 'Chrysaora', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'chrysaora-fuscescens', name: 'Pacific Sea Nettle', scientificName: 'Chrysaora fuscescens', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'rhizostomeae', name: 'Barrel Jellyfish', scientificName: 'Rhizostomeae', rank: 'order', speciesCount: 90,
              children: [
                { id: 'chironex', name: 'Box Jellyfish', scientificName: 'Chironex', rank: 'genus', speciesCount: 2,
                  children: [
                    { id: 'chironex-fleckeri', name: 'Box Jellyfish', scientificName: 'Chironex fleckeri', rank: 'species' }
                  ]
                },
                { id: 'nemopilema', name: 'Giant Jellyfish', scientificName: 'Nemopilema', rank: 'genus', speciesCount: 1,
                  children: [
                    { id: 'nemopilema-nomurai', name: 'Nomura\'s Jellyfish', scientificName: 'Nemopilema nomurai', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'hydrozoa', name: 'Hydrozoans', scientificName: 'Hydrozoa', rank: 'class', speciesCount: 3700,
          children: [
            { id: 'siphonophorae', name: 'Siphonophores', scientificName: 'Siphonophorae', rank: 'order', speciesCount: 175,
              children: [
                { id: 'physaliidae', name: 'Portuguese Man o\' War', scientificName: 'Physaliidae', rank: 'family', speciesCount: 1,
                  children: [
                    { id: 'physalia', name: 'Man o\' War', scientificName: 'Physalia', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'physalia-physalis', name: 'Portuguese Man o\' War', scientificName: 'Physalia physalis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'agalmatidae', name: 'Agalmatid Siphonophores', scientificName: 'Agalmatidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'praya', name: 'Giant Siphonophores', scientificName: 'Praya', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'praya-dubia', name: 'Giant Siphonophore', scientificName: 'Praya dubia', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'trachylinae', name: 'Trachyline Hydrozoans', scientificName: 'Trachylinae', rank: 'order', speciesCount: 50,
              children: [
                { id: 'turritopsidae', name: 'Immortal Jellyfish', scientificName: 'Turritopsidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'turritopsis', name: 'Immortal Jellyfish', scientificName: 'Turritopsis', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'turritopsis-dohrnii', name: 'Immortal Jellyfish', scientificName: 'Turritopsis dohrnii', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'anthoathecata', name: 'Fire Corals & Hydra', scientificName: 'Anthoathecata', rank: 'order', speciesCount: 1100,
              children: [
                { id: 'milleporidae', name: 'Fire Corals', scientificName: 'Milleporidae', rank: 'family', speciesCount: 15,
                  children: [
                    { id: 'millepora', name: 'Fire Corals', scientificName: 'Millepora', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'millepora-alcicornis', name: 'Branching Fire Coral', scientificName: 'Millepora alcicornis', rank: 'species' },
                        { id: 'millepora-complanata', name: 'Blade Fire Coral', scientificName: 'Millepora complanata', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'hydridae', name: 'Hydras', scientificName: 'Hydridae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'hydra', name: 'Hydras', scientificName: 'Hydra', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'hydra-vulgaris', name: 'Common Hydra', scientificName: 'Hydra vulgaris', rank: 'species' },
                        { id: 'hydra-viridissima', name: 'Green Hydra', scientificName: 'Hydra viridissima', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'stylasteridae', name: 'Lace Corals', scientificName: 'Stylasteridae', rank: 'family', speciesCount: 260,
                  children: [
                    { id: 'stylaster', name: 'Lace Corals', scientificName: 'Stylaster', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'stylaster-roseus', name: 'Rose Lace Coral', scientificName: 'Stylaster roseus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'cubozoa', name: 'Box Jellyfish', scientificName: 'Cubozoa', rank: 'class', speciesCount: 50,
          children: [
            { id: 'chirodropida', name: 'Box Jellyfish', scientificName: 'Chirodropida', rank: 'order', speciesCount: 30 },
            { id: 'carybdeida', name: 'Irukandji Jellyfish', scientificName: 'Carybdeida', rank: 'order', speciesCount: 20 }
          ]
        }
      ]
    },
    // PHYLUM: ECHINODERMATA
    {
      id: 'echinodermata',
      name: 'Echinoderms',
      scientificName: 'Echinodermata',
      rank: 'phylum',
      description: 'Starfish, sea urchins, and sea cucumbers',
      speciesCount: 7000,
      children: [
        { id: 'asteroidea', name: 'Starfish', scientificName: 'Asteroidea', rank: 'class', speciesCount: 1900,
          children: [
            { id: 'forcipulatida', name: 'Forcipulate Starfish', scientificName: 'Forcipulatida', rank: 'order', speciesCount: 300,
              children: [
                { id: 'asteriidae', name: 'Sea Stars', scientificName: 'Asteriidae', rank: 'family', speciesCount: 180,
                  children: [
                    { id: 'asterias', name: 'Common Starfish', scientificName: 'Asterias', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'asterias-rubens', name: 'Common Starfish', scientificName: 'Asterias rubens', rank: 'species' }
                      ]
                    },
                    { id: 'pisaster', name: 'Ochre Stars', scientificName: 'Pisaster', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'pisaster-ochraceus', name: 'Ochre Sea Star', scientificName: 'Pisaster ochraceus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'valvatida', name: 'Valvatid Starfish', scientificName: 'Valvatida', rank: 'order', speciesCount: 700,
              children: [
                { id: 'acanthasteridae', name: 'Crown-of-thorns', scientificName: 'Acanthasteridae', rank: 'family', speciesCount: 3,
                  children: [
                    { id: 'acanthaster', name: 'Crown-of-thorns Starfish', scientificName: 'Acanthaster', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'acanthaster-planci', name: 'Crown-of-thorns Starfish', scientificName: 'Acanthaster planci', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'oreasteridae', name: 'Cushion Stars', scientificName: 'Oreasteridae', rank: 'family', speciesCount: 50 }
              ]
            }
          ]
        },
        { id: 'echinoidea', name: 'Sea Urchins', scientificName: 'Echinoidea', rank: 'class', speciesCount: 950,
          children: [
            { id: 'diadematidae', name: 'Long-spined Urchins', scientificName: 'Diadematidae', rank: 'family', speciesCount: 20,
              children: [
                { id: 'diadema', name: 'Long-spined Urchins', scientificName: 'Diadema', rank: 'genus', speciesCount: 9,
                  children: [
                    { id: 'diadema-setosum', name: 'Long-spined Sea Urchin', scientificName: 'Diadema setosum', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'echinidae', name: 'Edible Sea Urchins', scientificName: 'Echinidae', rank: 'family', speciesCount: 30 },
            { id: 'strongylocentrotidae', name: 'Purple Sea Urchins', scientificName: 'Strongylocentrotidae', rank: 'family', speciesCount: 20,
              children: [
                { id: 'strongylocentrotus', name: 'Purple Sea Urchins', scientificName: 'Strongylocentrotus', rank: 'genus', speciesCount: 18,
                  children: [
                    { id: 'strongylocentrotus-purpuratus', name: 'Purple Sea Urchin', scientificName: 'Strongylocentrotus purpuratus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'clypeasteridae', name: 'Sand Dollars', scientificName: 'Clypeasteridae', rank: 'family', speciesCount: 150 }
          ]
        },
        { id: 'holothuroidea', name: 'Sea Cucumbers', scientificName: 'Holothuroidea', rank: 'class', speciesCount: 1700,
          children: [
            { id: 'holothuriidae', name: 'Sea Cucumbers', scientificName: 'Holothuriidae', rank: 'family', speciesCount: 180,
              children: [
                { id: 'holothuria', name: 'Sea Cucumbers', scientificName: 'Holothuria', rank: 'genus', speciesCount: 145,
                  children: [
                    { id: 'holothuria-tubulosa', name: 'Tubular Sea Cucumber', scientificName: 'Holothuria tubulosa', rank: 'species' },
                    { id: 'holothuria-forskali', name: 'Black Sea Cucumber', scientificName: 'Holothuria forskali', rank: 'species' }
                  ]
                },
                { id: 'actinopyga', name: 'Surf Redfish', scientificName: 'Actinopyga', rank: 'genus', speciesCount: 20,
                  children: [
                    { id: 'actinopyga-echinites', name: 'Deep-water Redfish', scientificName: 'Actinopyga echinites', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'stichopodidae', name: 'Stichopodid Sea Cucumbers', scientificName: 'Stichopodidae', rank: 'family', speciesCount: 60,
              children: [
                { id: 'stichopus', name: 'Curryfish', scientificName: 'Stichopus', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'stichopus-chloronotus', name: 'Greenfish', scientificName: 'Stichopus chloronotus', rank: 'species' }
                  ]
                },
                { id: 'apostichopus', name: 'Giant Sea Cucumbers', scientificName: 'Apostichopus', rank: 'genus', speciesCount: 6,
                  children: [
                    { id: 'apostichopus-californicus', name: 'California Sea Cucumber', scientificName: 'Apostichopus californicus', rank: 'species' },
                    { id: 'apostichopus-japonicus', name: 'Japanese Sea Cucumber', scientificName: 'Apostichopus japonicus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'cucumariidae', name: 'Small Sea Cucumbers', scientificName: 'Cucumariidae', rank: 'family', speciesCount: 150,
              children: [
                { id: 'cucumaria', name: 'Cucumaria', scientificName: 'Cucumaria', rank: 'genus', speciesCount: 40,
                  children: [
                    { id: 'cucumaria-frondosa', name: 'Orange-footed Sea Cucumber', scientificName: 'Cucumaria frondosa', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'synaptidae', name: 'Worm Sea Cucumbers', scientificName: 'Synaptidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'synapta', name: 'Worm Cucumbers', scientificName: 'Synapta', rank: 'genus', speciesCount: 20,
                  children: [
                    { id: 'synapta-maculata', name: 'Spotted Worm Sea Cucumber', scientificName: 'Synapta maculata', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'ophiuroidea', name: 'Brittle Stars', scientificName: 'Ophiuroidea', rank: 'class', speciesCount: 2000,
          children: [
            { id: 'ophiotrichidae', name: 'Brittle Stars', scientificName: 'Ophiotrichidae', rank: 'family', speciesCount: 400,
              children: [
                { id: 'ophiothrix', name: 'Brittle Stars', scientificName: 'Ophiothrix', rank: 'genus', speciesCount: 100,
                  children: [
                    { id: 'ophiothrix-fragilis', name: 'Common Brittle Star', scientificName: 'Ophiothrix fragilis', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'ophiuridae', name: 'Serpent Stars', scientificName: 'Ophiuridae', rank: 'family', speciesCount: 300,
              children: [
                { id: 'ophiura', name: 'Serpent Stars', scientificName: 'Ophiura', rank: 'genus', speciesCount: 50,
                  children: [
                    { id: 'ophiura-ophiura', name: 'Serpent Star', scientificName: 'Ophiura ophiura', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'gorgonocephalidae', name: 'Basket Stars', scientificName: 'Gorgonocephalidae', rank: 'family', speciesCount: 50,
              children: [
                { id: 'gorgonocephalus', name: 'Basket Stars', scientificName: 'Gorgonocephalus', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'gorgonocephalus-caputmedusae', name: 'Northern Basket Star', scientificName: 'Gorgonocephalus caputmedusae', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'ophiocomidae', name: 'Comb Brittle Stars', scientificName: 'Ophiocomidae', rank: 'family', speciesCount: 80,
              children: [
                { id: 'ophiocoma', name: 'Comb Stars', scientificName: 'Ophiocoma', rank: 'genus', speciesCount: 40,
                  children: [
                    { id: 'ophiocoma-echinata', name: 'Spiny Brittle Star', scientificName: 'Ophiocoma echinata', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'crinoidea', name: 'Sea Lilies & Feather Stars', scientificName: 'Crinoidea', rank: 'class', speciesCount: 650,
          children: [
            { id: 'comatulida', name: 'Feather Stars', scientificName: 'Comatulida', rank: 'order', speciesCount: 550,
              children: [
                { id: 'comasteridae', name: 'Comatulid Feather Stars', scientificName: 'Comasteridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'comanthina', name: 'Tropical Feather Stars', scientificName: 'Comanthina', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'comanthina-schlegeli', name: 'Schlegel\'s Feather Star', scientificName: 'Comanthina schlegeli', rank: 'species' }
                      ]
                    },
                    { id: 'oxycomanthus', name: 'Oxycomanthus', scientificName: 'Oxycomanthus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'oxycomanthus-bennetti', name: 'Bennett\'s Feather Star', scientificName: 'Oxycomanthus bennetti', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'antedonidae', name: 'Rosy Feather Stars', scientificName: 'Antedonidae', rank: 'family', speciesCount: 150,
                  children: [
                    { id: 'antedon', name: 'Rosy Feather Stars', scientificName: 'Antedon', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'antedon-bifida', name: 'Rosy Feather Star', scientificName: 'Antedon bifida', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'tropiometra', name: 'Tropical Feather Stars', scientificName: 'Tropiometridae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'tropiometra-genus', name: 'Tropical Feather Stars', scientificName: 'Tropiometra', rank: 'genus', speciesCount: 25,
                      children: [
                        { id: 'tropiometra-afra', name: 'African Feather Star', scientificName: 'Tropiometra afra', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'isocrinida', name: 'Sea Lilies', scientificName: 'Isocrinida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'isocrinidae', name: 'Stalked Crinoids', scientificName: 'Isocrinidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'neocrinus', name: 'Sea Lilies', scientificName: 'Neocrinus', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'neocrinus-decorus', name: 'Sea Lily', scientificName: 'Neocrinus decorus', rank: 'species' }
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
    // PHYLUM: ANNELIDA
    {
      id: 'annelida',
      name: 'Segmented Worms',
      scientificName: 'Annelida',
      rank: 'phylum',
      speciesCount: 17000,
      children: [
        { id: 'polychaeta', name: 'Bristle Worms', scientificName: 'Polychaeta', rank: 'class', speciesCount: 10000,
          children: [
            { id: 'nereididae', name: 'Ragworms', scientificName: 'Nereididae', rank: 'family', speciesCount: 700,
              children: [
                { id: 'nereis', name: 'Ragworms', scientificName: 'Nereis', rank: 'genus', speciesCount: 200,
                  children: [
                    { id: 'nereis-virens', name: 'King Ragworm', scientificName: 'Nereis virens', rank: 'species' }
                  ]
                },
                { id: 'alitta', name: 'Clam Worms', scientificName: 'Alitta', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'alitta-succinea', name: 'Pile Worm', scientificName: 'Alitta succinea', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'siboglinidae', name: 'Tubeworms', scientificName: 'Siboglinidae', rank: 'family', speciesCount: 160,
              children: [
                { id: 'riftia', name: 'Giant Tube Worms', scientificName: 'Riftia', rank: 'genus', speciesCount: 1,
                  children: [
                    { id: 'riftia-pachyptila', name: 'Giant Tube Worm', scientificName: 'Riftia pachyptila', rank: 'species' }
                  ]
                },
                { id: 'lamellibrachia', name: 'Cold Seep Tube Worms', scientificName: 'Lamellibrachia', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'lamellibrachia-luymesi', name: 'Luymes\' Tube Worm', scientificName: 'Lamellibrachia luymesi', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'serpulidae', name: 'Christmas Tree Worms', scientificName: 'Serpulidae', rank: 'family', speciesCount: 500,
              children: [
                { id: 'spirobranchus', name: 'Christmas Tree Worms', scientificName: 'Spirobranchus', rank: 'genus', speciesCount: 30,
                  children: [
                    { id: 'spirobranchus-giganteus', name: 'Christmas Tree Worm', scientificName: 'Spirobranchus giganteus', rank: 'species' }
                  ]
                },
                { id: 'serpula', name: 'Calcareous Tube Worms', scientificName: 'Serpula', rank: 'genus', speciesCount: 40,
                  children: [
                    { id: 'serpula-vermicularis', name: 'Red Tube Worm', scientificName: 'Serpula vermicularis', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'eunicidae', name: 'Bobbit Worms', scientificName: 'Eunicidae', rank: 'family', speciesCount: 350,
              children: [
                { id: 'eunice', name: 'Bobbit Worms', scientificName: 'Eunice', rank: 'genus', speciesCount: 230,
                  children: [
                    { id: 'eunice-aphroditois', name: 'Bobbit Worm', scientificName: 'Eunice aphroditois', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'alvinellidae', name: 'Pompeii Worms', scientificName: 'Alvinellidae', rank: 'family', speciesCount: 11,
              children: [
                { id: 'alvinella', name: 'Pompeii Worms', scientificName: 'Alvinella', rank: 'genus', speciesCount: 2,
                  children: [
                    { id: 'alvinella-pompejana', name: 'Pompeii Worm', scientificName: 'Alvinella pompejana', rank: 'species' }
                  ]
                },
                { id: 'paralvinella', name: 'Palm Worms', scientificName: 'Paralvinella', rank: 'genus', speciesCount: 9,
                  children: [
                    { id: 'paralvinella-grasslei', name: 'Grassle\'s Palm Worm', scientificName: 'Paralvinella grasslei', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'sabellidae', name: 'Fan Worms', scientificName: 'Sabellidae', rank: 'family', speciesCount: 500,
              children: [
                { id: 'sabella', name: 'Feather Duster Worms', scientificName: 'Sabella', rank: 'genus', speciesCount: 25,
                  children: [
                    { id: 'sabella-spallanzanii', name: 'Mediterranean Fanworm', scientificName: 'Sabella spallanzanii', rank: 'species' }
                  ]
                },
                { id: 'bispira', name: 'Twin Fan Worms', scientificName: 'Bispira', rank: 'genus', speciesCount: 30,
                  children: [
                    { id: 'bispira-brunnea', name: 'Social Feather Duster', scientificName: 'Bispira brunnea', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'terebellidae', name: 'Spaghetti Worms', scientificName: 'Terebellidae', rank: 'family', speciesCount: 400,
              children: [
                { id: 'lanice', name: 'Sand Mason Worms', scientificName: 'Lanice', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'lanice-conchilega', name: 'Sand Mason Worm', scientificName: 'Lanice conchilega', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'arenicolidae', name: 'Lugworms', scientificName: 'Arenicolidae', rank: 'family', speciesCount: 30,
              children: [
                { id: 'arenicola', name: 'Lugworms', scientificName: 'Arenicola', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'arenicola-marina', name: 'Lugworm', scientificName: 'Arenicola marina', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'aphroditidae', name: 'Sea Mice', scientificName: 'Aphroditidae', rank: 'family', speciesCount: 80,
              children: [
                { id: 'aphrodita', name: 'Sea Mice', scientificName: 'Aphrodita', rank: 'genus', speciesCount: 6,
                  children: [
                    { id: 'aphrodita-aculeata', name: 'Sea Mouse', scientificName: 'Aphrodita aculeata', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'amphinomidae', name: 'Fire Worms', scientificName: 'Amphinomidae', rank: 'family', speciesCount: 200,
              children: [
                { id: 'hermodice', name: 'Bearded Fireworms', scientificName: 'Hermodice', rank: 'genus', speciesCount: 4,
                  children: [
                    { id: 'hermodice-carunculata', name: 'Bearded Fireworm', scientificName: 'Hermodice carunculata', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'clitellata', name: 'Earthworms & Leeches', scientificName: 'Clitellata', rank: 'class', speciesCount: 7000,
          children: [
            { id: 'lumbricidae', name: 'Earthworms', scientificName: 'Lumbricidae', rank: 'family', speciesCount: 670,
              children: [
                { id: 'lumbricus', name: 'Common Earthworms', scientificName: 'Lumbricus', rank: 'genus', speciesCount: 14,
                  children: [
                    { id: 'lumbricus-terrestris', name: 'Common Earthworm', scientificName: 'Lumbricus terrestris', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'hirudinidae', name: 'Leeches', scientificName: 'Hirudinidae', rank: 'family', speciesCount: 500,
              children: [
                { id: 'hirudo', name: 'Medicinal Leeches', scientificName: 'Hirudo', rank: 'genus', speciesCount: 5,
                  children: [
                    { id: 'hirudo-medicinalis', name: 'Medicinal Leech', scientificName: 'Hirudo medicinalis', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // PHYLUM: TARDIGRADA
    {
      id: 'tardigrada',
      name: 'Tardigrades',
      scientificName: 'Tardigrada',
      rank: 'phylum',
      description: 'Microscopic water bears, extremely resilient',
      speciesCount: 1300,
      children: [
        { id: 'eutardigrada', name: 'Eutardigrades', scientificName: 'Eutardigrada', rank: 'class', speciesCount: 1000,
          children: [
            { id: 'milnesiidae', name: 'Milnesium', scientificName: 'Milnesiidae', rank: 'family', speciesCount: 40,
              children: [
                { id: 'milnesium', name: 'Water Bears', scientificName: 'Milnesium', rank: 'genus', speciesCount: 40,
                  children: [
                    { id: 'milnesium-tardigradum', name: 'Common Water Bear', scientificName: 'Milnesium tardigradum', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'macrobiotidae', name: 'Macrobiotid Tardigrades', scientificName: 'Macrobiotidae', rank: 'family', speciesCount: 300,
              children: [
                { id: 'macrobiotus', name: 'Common Tardigrades', scientificName: 'Macrobiotus', rank: 'genus', speciesCount: 100,
                  children: [
                    { id: 'macrobiotus-hufelandi', name: 'Hufelandi\'s Tardigrade', scientificName: 'Macrobiotus hufelandi', rank: 'species' }
                  ]
                },
                { id: 'paramacrobiotus', name: 'Paramacrobiotus', scientificName: 'Paramacrobiotus', rank: 'genus', speciesCount: 80,
                  children: [
                    { id: 'paramacrobiotus-richtersi', name: 'Richters\' Tardigrade', scientificName: 'Paramacrobiotus richtersi', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'hypsibiidae', name: 'Hypsibius Tardigrades', scientificName: 'Hypsibiidae', rank: 'family', speciesCount: 250,
              children: [
                { id: 'hypsibius', name: 'Hypsibius', scientificName: 'Hypsibius', rank: 'genus', speciesCount: 60,
                  children: [
                    { id: 'hypsibius-dujardini', name: 'Dujardin\'s Tardigrade', scientificName: 'Hypsibius dujardini', rank: 'species' }
                  ]
                },
                { id: 'ramazzottius', name: 'Ramazzottius', scientificName: 'Ramazzottius', rank: 'genus', speciesCount: 40,
                  children: [
                    { id: 'ramazzottius-varieornatus', name: 'Damage Suppressor Tardigrade', scientificName: 'Ramazzottius varieornatus', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'heterotardigrada', name: 'Heterotardigrades', scientificName: 'Heterotardigrada', rank: 'class', speciesCount: 300,
          children: [
            { id: 'echiniscidae', name: 'Armored Tardigrades', scientificName: 'Echiniscidae', rank: 'family', speciesCount: 200,
              children: [
                { id: 'echiniscus', name: 'Armored Water Bears', scientificName: 'Echiniscus', rank: 'genus', speciesCount: 120,
                  children: [
                    { id: 'echiniscus-testudo', name: 'Tortoise Tardigrade', scientificName: 'Echiniscus testudo', rank: 'species' }
                  ]
                },
                { id: 'pseudechiniscus', name: 'False Armored Tardigrades', scientificName: 'Pseudechiniscus', rank: 'genus', speciesCount: 40 }
              ]
            },
            { id: 'batillipedidae', name: 'Marine Tardigrades', scientificName: 'Batillipedidae', rank: 'family', speciesCount: 30,
              children: [
                { id: 'batillipes', name: 'Beach Tardigrades', scientificName: 'Batillipes', rank: 'genus', speciesCount: 25,
                  children: [
                    { id: 'batillipes-mirus', name: 'Wonderful Beach Tardigrade', scientificName: 'Batillipes mirus', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // PHYLUM: PORIFERA
    {
      id: 'porifera',
      name: 'Sponges',
      scientificName: 'Porifera',
      rank: 'phylum',
      speciesCount: 8500,
      children: [
        { id: 'demospongiae', name: 'Demosponges', scientificName: 'Demospongiae', rank: 'class', speciesCount: 7000,
          children: [
            { id: 'spongillidae', name: 'Freshwater Sponges', scientificName: 'Spongillidae', rank: 'family', speciesCount: 240 },
            { id: 'spongiidae', name: 'Bath Sponges', scientificName: 'Spongiidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'spongia', name: 'Bath Sponges', scientificName: 'Spongia', rank: 'genus', speciesCount: 20,
                  children: [
                    { id: 'spongia-officinalis', name: 'Bath Sponge', scientificName: 'Spongia officinalis', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'hexactinellida', name: 'Glass Sponges', scientificName: 'Hexactinellida', rank: 'class', speciesCount: 500,
          children: [
            { id: 'lyssacinosida', name: 'Lyssacine Sponges', scientificName: 'Lyssacinosida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'euplectellidae', name: 'Venus Flower Basket', scientificName: 'Euplectellidae', rank: 'family', speciesCount: 70,
                  children: [
                    { id: 'euplectella', name: 'Venus\' Flower Basket', scientificName: 'Euplectella', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'euplectella-aspergillum', name: 'Venus\' Flower Basket', scientificName: 'Euplectella aspergillum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'hexactinosida', name: 'Hexactinose Sponges', scientificName: 'Hexactinosida', rank: 'order', speciesCount: 300,
              children: [
                { id: 'aphrocallistidae', name: 'Cloud Sponges', scientificName: 'Aphrocallistidae', rank: 'family', speciesCount: 20,
                  children: [
                    { id: 'aphrocallistes', name: 'Cloud Sponges', scientificName: 'Aphrocallistes', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'aphrocallistes-vastus', name: 'Cloud Sponge', scientificName: 'Aphrocallistes vastus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'calcarea', name: 'Calcareous Sponges', scientificName: 'Calcarea', rank: 'class', speciesCount: 700,
          children: [
            { id: 'clathrinida', name: 'Clathrinid Sponges', scientificName: 'Clathrinida', rank: 'order', speciesCount: 250,
              children: [
                { id: 'clathrinidae', name: 'Clathrina', scientificName: 'Clathrinidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'clathrina', name: 'Tube Sponges', scientificName: 'Clathrina', rank: 'genus', speciesCount: 60,
                      children: [
                        { id: 'clathrina-coriacea', name: 'Yellow Tube Sponge', scientificName: 'Clathrina coriacea', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'leucosolenida', name: 'Leucosolenid Sponges', scientificName: 'Leucosolenida', rank: 'order', speciesCount: 100,
              children: [
                { id: 'leucosoleniidae', name: 'Leucosolenia', scientificName: 'Leucosoleniidae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'leucosolenia', name: 'Leucosolenia', scientificName: 'Leucosolenia', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'leucosolenia-botryoides', name: 'Grape Sponge', scientificName: 'Leucosolenia botryoides', rank: 'species' }
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
    // PHYLUM: NEMATODA
    {
      id: 'nematoda',
      name: 'Roundworms',
      scientificName: 'Nematoda',
      rank: 'phylum',
      speciesCount: 25000,
      children: [
        { id: 'chromadorea', name: 'Chromadorea', scientificName: 'Chromadorea', rank: 'class', speciesCount: 15000,
          children: [
            { id: 'rhabditida', name: 'Rhabditids', scientificName: 'Rhabditida', rank: 'order', speciesCount: 5000,
              children: [
                { id: 'rhabditidae', name: 'Rhabditid Nematodes', scientificName: 'Rhabditidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'caenorhabditis', name: 'Lab Nematodes', scientificName: 'Caenorhabditis', rank: 'genus', speciesCount: 50,
                      children: [
                        { id: 'caenorhabditis-elegans', name: 'C. elegans', scientificName: 'Caenorhabditis elegans', rank: 'species' },
                        { id: 'caenorhabditis-briggsae', name: 'C. briggsae', scientificName: 'Caenorhabditis briggsae', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'strongyloididae', name: 'Threadworms', scientificName: 'Strongyloididae', rank: 'family', speciesCount: 50,
                  children: [
                    { id: 'strongyloides', name: 'Threadworms', scientificName: 'Strongyloides', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'strongyloides-stercoralis', name: 'Human Threadworm', scientificName: 'Strongyloides stercoralis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'ancylostomatidae', name: 'Hookworms', scientificName: 'Ancylostomatidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'ancylostoma', name: 'Old World Hookworms', scientificName: 'Ancylostoma', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'ancylostoma-duodenale', name: 'Old World Hookworm', scientificName: 'Ancylostoma duodenale', rank: 'species' },
                        { id: 'ancylostoma-caninum', name: 'Dog Hookworm', scientificName: 'Ancylostoma caninum', rank: 'species' }
                      ]
                    },
                    { id: 'necator', name: 'New World Hookworms', scientificName: 'Necator', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'necator-americanus', name: 'New World Hookworm', scientificName: 'Necator americanus', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'ascaridida', name: 'Ascarids', scientificName: 'Ascaridida', rank: 'order', speciesCount: 2000,
              children: [
                { id: 'ascarididae', name: 'Large Roundworms', scientificName: 'Ascarididae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'ascaris', name: 'Roundworms', scientificName: 'Ascaris', rank: 'genus', speciesCount: 2,
                      children: [
                        { id: 'ascaris-lumbricoides', name: 'Giant Roundworm', scientificName: 'Ascaris lumbricoides', rank: 'species' },
                        { id: 'ascaris-suum', name: 'Pig Roundworm', scientificName: 'Ascaris suum', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'toxocaridae', name: 'Toxocara', scientificName: 'Toxocaridae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'toxocara', name: 'Toxocara', scientificName: 'Toxocara', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'toxocara-canis', name: 'Dog Roundworm', scientificName: 'Toxocara canis', rank: 'species' },
                        { id: 'toxocara-cati', name: 'Cat Roundworm', scientificName: 'Toxocara cati', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'anisakidae', name: 'Anisakid Worms', scientificName: 'Anisakidae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'anisakis', name: 'Herring Worms', scientificName: 'Anisakis', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'anisakis-simplex', name: 'Herring Worm', scientificName: 'Anisakis simplex', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'spirurida', name: 'Spirurids', scientificName: 'Spirurida', rank: 'order', speciesCount: 2000,
              children: [
                { id: 'onchocercidae', name: 'Filarial Worms', scientificName: 'Onchocercidae', rank: 'family', speciesCount: 500,
                  children: [
                    { id: 'onchocerca', name: 'River Blindness Worms', scientificName: 'Onchocerca', rank: 'genus', speciesCount: 30,
                      children: [
                        { id: 'onchocerca-volvulus', name: 'River Blindness Worm', scientificName: 'Onchocerca volvulus', rank: 'species' }
                      ]
                    },
                    { id: 'wuchereria', name: 'Elephantiasis Worms', scientificName: 'Wuchereria', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'wuchereria-bancrofti', name: 'Bancroft\'s Filarial Worm', scientificName: 'Wuchereria bancrofti', rank: 'species' }
                      ]
                    },
                    { id: 'brugia', name: 'Brugia', scientificName: 'Brugia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'brugia-malayi', name: 'Malayan Filarial Worm', scientificName: 'Brugia malayi', rank: 'species' }
                      ]
                    },
                    { id: 'dirofilaria', name: 'Heartworms', scientificName: 'Dirofilaria', rank: 'genus', speciesCount: 40,
                      children: [
                        { id: 'dirofilaria-immitis', name: 'Dog Heartworm', scientificName: 'Dirofilaria immitis', rank: 'species' }
                      ]
                    },
                    { id: 'loa', name: 'Eye Worms', scientificName: 'Loa', rank: 'genus', speciesCount: 1,
                      children: [
                        { id: 'loa-loa', name: 'African Eye Worm', scientificName: 'Loa loa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'dracunculidae', name: 'Guinea Worms', scientificName: 'Dracunculidae', rank: 'family', speciesCount: 10,
                  children: [
                    { id: 'dracunculus', name: 'Guinea Worms', scientificName: 'Dracunculus', rank: 'genus', speciesCount: 8,
                      children: [
                        { id: 'dracunculus-medinensis', name: 'Guinea Worm', scientificName: 'Dracunculus medinensis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'oxyurida', name: 'Pinworms', scientificName: 'Oxyurida', rank: 'order', speciesCount: 1000,
              children: [
                { id: 'oxyuridae', name: 'Pinworms', scientificName: 'Oxyuridae', rank: 'family', speciesCount: 100,
                  children: [
                    { id: 'enterobius', name: 'Human Pinworms', scientificName: 'Enterobius', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'enterobius-vermicularis', name: 'Human Pinworm', scientificName: 'Enterobius vermicularis', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'enoplea', name: 'Enopleans', scientificName: 'Enoplea', rank: 'class', speciesCount: 10000,
          children: [
            { id: 'trichinellida', name: 'Trichinella', scientificName: 'Trichinellida', rank: 'order', speciesCount: 500,
              children: [
                { id: 'trichinellidae', name: 'Trichina Worms', scientificName: 'Trichinellidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'trichinella', name: 'Trichina Worms', scientificName: 'Trichinella', rank: 'genus', speciesCount: 12,
                      children: [
                        { id: 'trichinella-spiralis', name: 'Pork Worm', scientificName: 'Trichinella spiralis', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'trichuridae', name: 'Whipworms', scientificName: 'Trichuridae', rank: 'family', speciesCount: 80,
                  children: [
                    { id: 'trichuris', name: 'Whipworms', scientificName: 'Trichuris', rank: 'genus', speciesCount: 70,
                      children: [
                        { id: 'trichuris-trichiura', name: 'Human Whipworm', scientificName: 'Trichuris trichiura', rank: 'species' }
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
    // PHYLUM: PLATYHELMINTHES
    {
      id: 'platyhelminthes',
      name: 'Flatworms',
      scientificName: 'Platyhelminthes',
      rank: 'phylum',
      speciesCount: 25000,
      children: [
        { id: 'turbellaria', name: 'Free-living Flatworms', scientificName: 'Turbellaria', rank: 'class', speciesCount: 4500,
          children: [
            { id: 'planariidae', name: 'Planarians', scientificName: 'Planariidae', rank: 'family', speciesCount: 200,
              children: [
                { id: 'dugesia', name: 'Freshwater Planarians', scientificName: 'Dugesia', rank: 'genus', speciesCount: 80,
                  children: [
                    { id: 'dugesia-tigrina', name: 'Brown Planarian', scientificName: 'Dugesia tigrina', rank: 'species' }
                  ]
                },
                { id: 'schmidtea', name: 'Lab Planarians', scientificName: 'Schmidtea', rank: 'genus', speciesCount: 4,
                  children: [
                    { id: 'schmidtea-mediterranea', name: 'Mediterranean Planarian', scientificName: 'Schmidtea mediterranea', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'polycladida', name: 'Marine Flatworms', scientificName: 'Polycladida', rank: 'family', speciesCount: 900,
              children: [
                { id: 'pseudoceros', name: 'Colorful Flatworms', scientificName: 'Pseudoceros', rank: 'genus', speciesCount: 100,
                  children: [
                    { id: 'pseudoceros-dimidiatus', name: 'Divided Flatworm', scientificName: 'Pseudoceros dimidiatus', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'cestoda', name: 'Tapeworms', scientificName: 'Cestoda', rank: 'class', speciesCount: 5000,
          children: [
            { id: 'taeniidae', name: 'Taeniid Tapeworms', scientificName: 'Taeniidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'taenia', name: 'Tapeworms', scientificName: 'Taenia', rank: 'genus', speciesCount: 50,
                  children: [
                    { id: 'taenia-solium', name: 'Pork Tapeworm', scientificName: 'Taenia solium', rank: 'species' },
                    { id: 'taenia-saginata', name: 'Beef Tapeworm', scientificName: 'Taenia saginata', rank: 'species' }
                  ]
                },
                { id: 'echinococcus', name: 'Hydatid Worms', scientificName: 'Echinococcus', rank: 'genus', speciesCount: 9,
                  children: [
                    { id: 'echinococcus-granulosus', name: 'Hydatid Tapeworm', scientificName: 'Echinococcus granulosus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'diphyllobothriidae', name: 'Broad Tapeworms', scientificName: 'Diphyllobothriidae', rank: 'family', speciesCount: 60,
              children: [
                { id: 'dibothriocephalus', name: 'Broad Fish Tapeworms', scientificName: 'Dibothriocephalus', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'dibothriocephalus-latus', name: 'Broad Fish Tapeworm', scientificName: 'Dibothriocephalus latus', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'trematoda', name: 'Flukes', scientificName: 'Trematoda', rank: 'class', speciesCount: 9000,
          children: [
            { id: 'schistosomatidae', name: 'Blood Flukes', scientificName: 'Schistosomatidae', rank: 'family', speciesCount: 100,
              children: [
                { id: 'schistosoma', name: 'Blood Flukes', scientificName: 'Schistosoma', rank: 'genus', speciesCount: 23,
                  children: [
                    { id: 'schistosoma-mansoni', name: 'Manson\'s Blood Fluke', scientificName: 'Schistosoma mansoni', rank: 'species' },
                    { id: 'schistosoma-haematobium', name: 'Urinary Blood Fluke', scientificName: 'Schistosoma haematobium', rank: 'species' },
                    { id: 'schistosoma-japonicum', name: 'Japanese Blood Fluke', scientificName: 'Schistosoma japonicum', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'fasciolidae', name: 'Liver Flukes', scientificName: 'Fasciolidae', rank: 'family', speciesCount: 80,
              children: [
                { id: 'fasciola', name: 'Liver Flukes', scientificName: 'Fasciola', rank: 'genus', speciesCount: 6,
                  children: [
                    { id: 'fasciola-hepatica', name: 'Common Liver Fluke', scientificName: 'Fasciola hepatica', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // PHYLUM: BRYOZOA
    {
      id: 'bryozoa',
      name: 'Moss Animals',
      scientificName: 'Bryozoa',
      rank: 'phylum',
      description: 'Colonial filter-feeding invertebrates',
      speciesCount: 6000,
      children: [
        { id: 'gymnolaemata', name: 'Marine Bryozoans', scientificName: 'Gymnolaemata', rank: 'class', speciesCount: 5000,
          children: [
            { id: 'cheilostomatida', name: 'Cheilostome Bryozoans', scientificName: 'Cheilostomatida', rank: 'order', speciesCount: 4000,
              children: [
                { id: 'membraniporidae', name: 'Sea Mat Bryozoans', scientificName: 'Membraniporidae', rank: 'family', speciesCount: 200,
                  children: [
                    { id: 'membranipora', name: 'Kelp-encrusting Bryozoans', scientificName: 'Membranipora', rank: 'genus', speciesCount: 15,
                      children: [
                        { id: 'membranipora-membranacea', name: 'Sea Mat', scientificName: 'Membranipora membranacea', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bugulidae', name: 'Moss Animals', scientificName: 'Bugulidae', rank: 'family', speciesCount: 180,
                  children: [
                    { id: 'bugula', name: 'Moss Animals', scientificName: 'Bugula', rank: 'genus', speciesCount: 80,
                      children: [
                        { id: 'bugula-neritina', name: 'Brown Bryozoan', scientificName: 'Bugula neritina', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'phylactolaemata', name: 'Freshwater Bryozoans', scientificName: 'Phylactolaemata', rank: 'class', speciesCount: 90,
          children: [
            { id: 'plumatellidae', name: 'Freshwater Bryozoans', scientificName: 'Plumatellidae', rank: 'family', speciesCount: 50,
              children: [
                { id: 'plumatella', name: 'Freshwater Bryozoans', scientificName: 'Plumatella', rank: 'genus', speciesCount: 30,
                  children: [
                    { id: 'plumatella-repens', name: 'Creeping Bryozoan', scientificName: 'Plumatella repens', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // PHYLUM: ROTIFERA
    {
      id: 'rotifera',
      name: 'Rotifers',
      scientificName: 'Rotifera',
      rank: 'phylum',
      description: 'Microscopic aquatic animals with ciliated wheel organs',
      speciesCount: 2200,
      children: [
        { id: 'monogononta', name: 'Monogonont Rotifers', scientificName: 'Monogononta', rank: 'class', speciesCount: 1500,
          children: [
            { id: 'brachionidae', name: 'Brachionid Rotifers', scientificName: 'Brachionidae', rank: 'family', speciesCount: 200,
              children: [
                { id: 'brachionus', name: 'Wheel Animals', scientificName: 'Brachionus', rank: 'genus', speciesCount: 60,
                  children: [
                    { id: 'brachionus-plicatilis', name: 'Rotifer', scientificName: 'Brachionus plicatilis', rank: 'species' },
                    { id: 'brachionus-calyciflorus', name: 'Freshwater Rotifer', scientificName: 'Brachionus calyciflorus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'asplanchnidae', name: 'Predatory Rotifers', scientificName: 'Asplanchnidae', rank: 'family', speciesCount: 30,
              children: [
                { id: 'asplanchna', name: 'Predatory Rotifers', scientificName: 'Asplanchna', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'asplanchna-priodonta', name: 'Predatory Rotifer', scientificName: 'Asplanchna priodonta', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'bdelloidea', name: 'Bdelloid Rotifers', scientificName: 'Bdelloidea', rank: 'class', speciesCount: 460,
          children: [
            { id: 'philodinidae', name: 'Bdelloid Rotifers', scientificName: 'Philodinidae', rank: 'family', speciesCount: 200,
              children: [
                { id: 'rotaria', name: 'Bdelloid Rotifers', scientificName: 'Rotaria', rank: 'genus', speciesCount: 30,
                  children: [
                    { id: 'rotaria-rotatoria', name: 'Common Bdelloid Rotifer', scientificName: 'Rotaria rotatoria', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'seisonidea', name: 'Seison Rotifers', scientificName: 'Seisonidea', rank: 'class', speciesCount: 3 }
      ]
    },
    // PHYLUM: CTENOPHORA
    {
      id: 'ctenophora',
      name: 'Comb Jellies',
      scientificName: 'Ctenophora',
      rank: 'phylum',
      description: 'Gelatinous marine animals with comb-like rows of cilia',
      speciesCount: 200,
      children: [
        { id: 'tentaculata', name: 'Tentaculate Comb Jellies', scientificName: 'Tentaculata', rank: 'class', speciesCount: 120,
          children: [
            { id: 'cydippida', name: 'Cydippid Comb Jellies', scientificName: 'Cydippida', rank: 'order', speciesCount: 50,
              children: [
                { id: 'pleurobrachiidae', name: 'Sea Gooseberries', scientificName: 'Pleurobrachiidae', rank: 'family', speciesCount: 30,
                  children: [
                    { id: 'pleurobrachia', name: 'Sea Gooseberries', scientificName: 'Pleurobrachia', rank: 'genus', speciesCount: 10,
                      children: [
                        { id: 'pleurobrachia-pileus', name: 'Sea Gooseberry', scientificName: 'Pleurobrachia pileus', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'mertensiidae', name: 'Mertensiid Comb Jellies', scientificName: 'Mertensiidae', rank: 'family', speciesCount: 20 }
              ]
            },
            { id: 'lobata', name: 'Lobate Comb Jellies', scientificName: 'Lobata', rank: 'order', speciesCount: 40,
              children: [
                { id: 'mnemiidae', name: 'Warty Comb Jellies', scientificName: 'Mnemiidae', rank: 'family', speciesCount: 12,
                  children: [
                    { id: 'mnemiopsis', name: 'Sea Walnuts', scientificName: 'Mnemiopsis', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'mnemiopsis-leidyi', name: 'Sea Walnut', scientificName: 'Mnemiopsis leidyi', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'bolinopsidae', name: 'Bolinopsid Comb Jellies', scientificName: 'Bolinopsidae', rank: 'family', speciesCount: 8,
                  children: [
                    { id: 'bolinopsis', name: 'Bolinopsis', scientificName: 'Bolinopsis', rank: 'genus', speciesCount: 6,
                      children: [
                        { id: 'bolinopsis-infundibulum', name: 'Common Northern Comb Jelly', scientificName: 'Bolinopsis infundibulum', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'nuda', name: 'Beroid Comb Jellies', scientificName: 'Nuda', rank: 'class', speciesCount: 25,
          children: [
            { id: 'beroida', name: 'Beroids', scientificName: 'Beroida', rank: 'order', speciesCount: 25,
              children: [
                { id: 'beroidae', name: 'Beroid Comb Jellies', scientificName: 'Beroidae', rank: 'family', speciesCount: 25,
                  children: [
                    { id: 'beroe', name: 'Beroes', scientificName: 'Beroe', rank: 'genus', speciesCount: 20,
                      children: [
                        { id: 'beroe-ovata', name: 'Beroe Comb Jelly', scientificName: 'Beroe ovata', rank: 'species' },
                        { id: 'beroe-cucumis', name: 'Melon Comb Jelly', scientificName: 'Beroe cucumis', rank: 'species' }
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
    // PHYLUM: BRACHIOPODA
    {
      id: 'brachiopoda',
      name: 'Lamp Shells',
      scientificName: 'Brachiopoda',
      rank: 'phylum',
      description: 'Marine bivalved animals, living fossils',
      speciesCount: 400,
      children: [
        { id: 'rhynchonellata', name: 'Articulate Brachiopods', scientificName: 'Rhynchonellata', rank: 'class', speciesCount: 300,
          children: [
            { id: 'terebratulida', name: 'Terebratulid Brachiopods', scientificName: 'Terebratulida', rank: 'order', speciesCount: 200,
              children: [
                { id: 'terebratulidae', name: 'Lamp Shells', scientificName: 'Terebratulidae', rank: 'family', speciesCount: 40,
                  children: [
                    { id: 'terebratula', name: 'Lamp Shells', scientificName: 'Terebratula', rank: 'genus', speciesCount: 5,
                      children: [
                        { id: 'terebratula-transversa', name: 'Lamp Shell', scientificName: 'Terebratula transversa', rank: 'species' }
                      ]
                    }
                  ]
                },
                { id: 'terebrataliidae', name: 'Terebrataliid Brachiopods', scientificName: 'Terebrataliidae', rank: 'family', speciesCount: 60,
                  children: [
                    { id: 'terebratalia', name: 'Pacific Lamp Shells', scientificName: 'Terebratalia', rank: 'genus', speciesCount: 3,
                      children: [
                        { id: 'terebratalia-transversa', name: 'Transverse Lamp Shell', scientificName: 'Terebratalia transversa', rank: 'species' }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: 'rhynchonellida', name: 'Rhynchonellid Brachiopods', scientificName: 'Rhynchonellida', rank: 'order', speciesCount: 60 }
          ]
        },
        { id: 'lingulata', name: 'Inarticulate Brachiopods', scientificName: 'Lingulata', rank: 'class', speciesCount: 50,
          children: [
            { id: 'lingulidae', name: 'Lingulid Brachiopods', scientificName: 'Lingulidae', rank: 'family', speciesCount: 20,
              children: [
                { id: 'lingula', name: 'Lingula', scientificName: 'Lingula', rank: 'genus', speciesCount: 8,
                  children: [
                    { id: 'lingula-anatina', name: 'Lingula', scientificName: 'Lingula anatina', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // PHYLUM: CHAETOGNATHA
    {
      id: 'chaetognatha',
      name: 'Arrow Worms',
      scientificName: 'Chaetognatha',
      rank: 'phylum',
      description: 'Small predatory marine worms important in plankton',
      speciesCount: 130,
      children: [
        { id: 'sagittoidea', name: 'Arrow Worms', scientificName: 'Sagittoidea', rank: 'class', speciesCount: 130,
          children: [
            { id: 'sagittidae', name: 'Arrow Worms', scientificName: 'Sagittidae', rank: 'family', speciesCount: 80,
              children: [
                { id: 'sagitta', name: 'Arrow Worms', scientificName: 'Sagitta', rank: 'genus', speciesCount: 50,
                  children: [
                    { id: 'sagitta-elegans', name: 'Elegant Arrow Worm', scientificName: 'Sagitta elegans', rank: 'species' },
                    { id: 'sagitta-setosa', name: 'Bristle Arrow Worm', scientificName: 'Sagitta setosa', rank: 'species' }
                  ]
                },
                { id: 'flaccisagitta', name: 'Flaccid Arrow Worms', scientificName: 'Flaccisagitta', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'flaccisagitta-enflata', name: 'Inflated Arrow Worm', scientificName: 'Flaccisagitta enflata', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'spadellidae', name: 'Benthic Arrow Worms', scientificName: 'Spadellidae', rank: 'family', speciesCount: 20,
              children: [
                { id: 'spadella', name: 'Benthic Arrow Worms', scientificName: 'Spadella', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'spadella-cephaloptera', name: 'Benthic Arrow Worm', scientificName: 'Spadella cephaloptera', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // PHYLUM: ONYCHOPHORA
    {
      id: 'onychophora',
      name: 'Velvet Worms',
      scientificName: 'Onychophora',
      rank: 'phylum',
      description: 'Soft-bodied segmented worms with unjointed legs',
      speciesCount: 200,
      children: [
        { id: 'euonychophora', name: 'True Velvet Worms', scientificName: 'Euonychophora', rank: 'class', speciesCount: 200,
          children: [
            { id: 'peripatidae', name: 'Equatorial Velvet Worms', scientificName: 'Peripatidae', rank: 'family', speciesCount: 90,
              children: [
                { id: 'peripatus', name: 'Tropical Velvet Worms', scientificName: 'Peripatus', rank: 'genus', speciesCount: 20,
                  children: [
                    { id: 'peripatus-juliformis', name: 'Caribbean Velvet Worm', scientificName: 'Peripatus juliformis', rank: 'species' }
                  ]
                },
                { id: 'eoperipatus', name: 'Southeast Asian Velvet Worms', scientificName: 'Eoperipatus', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'eoperipatus-totoro', name: 'Totoro Velvet Worm', scientificName: 'Eoperipatus totoro', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'peripatopsidae', name: 'Southern Velvet Worms', scientificName: 'Peripatopsidae', rank: 'family', speciesCount: 110,
              children: [
                { id: 'euperipatoides', name: 'Australian Velvet Worms', scientificName: 'Euperipatoides', rank: 'genus', speciesCount: 25,
                  children: [
                    { id: 'euperipatoides-rowelli', name: 'Rowell\'s Velvet Worm', scientificName: 'Euperipatoides rowelli', rank: 'species' }
                  ]
                },
                { id: 'peripatoides', name: 'New Zealand Velvet Worms', scientificName: 'Peripatoides', rank: 'genus', speciesCount: 10,
                  children: [
                    { id: 'peripatoides-novaezealandiae', name: 'New Zealand Velvet Worm', scientificName: 'Peripatoides novaezealandiae', rank: 'species' }
                  ]
                },
                { id: 'opisthopatus', name: 'South African Velvet Worms', scientificName: 'Opisthopatus', rank: 'genus', speciesCount: 8,
                  children: [
                    { id: 'opisthopatus-cinctipes', name: 'Cape Velvet Worm', scientificName: 'Opisthopatus cinctipes', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    // PHYLUM: HEMICHORDATA
    {
      id: 'hemichordata',
      name: 'Hemichordates',
      scientificName: 'Hemichordata',
      rank: 'phylum',
      description: 'Marine worms closely related to chordates',
      speciesCount: 130,
      children: [
        { id: 'enteropneusta', name: 'Acorn Worms', scientificName: 'Enteropneusta', rank: 'class', speciesCount: 90,
          children: [
            { id: 'ptychoderidae', name: 'Acorn Worms', scientificName: 'Ptychoderidae', rank: 'family', speciesCount: 30,
              children: [
                { id: 'ptychodera', name: 'Acorn Worms', scientificName: 'Ptychodera', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'ptychodera-flava', name: 'Hawaiian Acorn Worm', scientificName: 'Ptychodera flava', rank: 'species' }
                  ]
                },
                { id: 'balanoglossus', name: 'Acorn Worms', scientificName: 'Balanoglossus', rank: 'genus', speciesCount: 20,
                  children: [
                    { id: 'balanoglossus-clavigerus', name: 'Club-bearing Acorn Worm', scientificName: 'Balanoglossus clavigerus', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'harrimaniidae', name: 'Harrimaniid Acorn Worms', scientificName: 'Harrimaniidae', rank: 'family', speciesCount: 25,
              children: [
                { id: 'saccoglossus', name: 'Saccoglossus', scientificName: 'Saccoglossus', rank: 'genus', speciesCount: 15,
                  children: [
                    { id: 'saccoglossus-kowalevskii', name: 'Kowalevsky\'s Acorn Worm', scientificName: 'Saccoglossus kowalevskii', rank: 'species' }
                  ]
                }
              ]
            }
          ]
        },
        { id: 'pterobranchia', name: 'Pterobranchs', scientificName: 'Pterobranchia', rank: 'class', speciesCount: 30,
          children: [
            { id: 'cephalodiscidae', name: 'Cephalodiscids', scientificName: 'Cephalodiscidae', rank: 'family', speciesCount: 20,
              children: [
                { id: 'cephalodiscus', name: 'Cephalodiscus', scientificName: 'Cephalodiscus', rank: 'genus', speciesCount: 18,
                  children: [
                    { id: 'cephalodiscus-gracilis', name: 'Slender Cephalodiscus', scientificName: 'Cephalodiscus gracilis', rank: 'species' }
                  ]
                }
              ]
            },
            { id: 'rhabdopleuridae', name: 'Rhabdopleurids', scientificName: 'Rhabdopleuridae', rank: 'family', speciesCount: 10,
              children: [
                { id: 'rhabdopleura', name: 'Rhabdopleura', scientificName: 'Rhabdopleura', rank: 'genus', speciesCount: 8,
                  children: [
                    { id: 'rhabdopleura-normani', name: 'Norman\'s Rhabdopleura', scientificName: 'Rhabdopleura normani', rank: 'species' }
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
