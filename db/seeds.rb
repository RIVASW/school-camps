# frozen_string_literal: true

CAMPS_LIST = [
  {
    name: 'PCYC',
    location: 'North Sydney',
    price: 60,
    contacts: '0495876398',
    description: 'PCYC sport camp in North Sydney and other areas of Sydney'
  },
  {
    name: 'Big Blue Camp',
    location: 'North Sydney',
    price: 120,
    contacts: '0495876584',
    description: 'Big Blue camp with different activities including tennis, swimming, soccer'
  },
  {
    name: 'Tennis camp',
    location: 'Cammerey',
    price: 85,
    contacts: '0495556584',
    description: 'Cammerey tennis camp for kids'
  },
  {
    name: 'Leasure center camp',
    location: 'North Sydney',
    price: 70,
    contacts: '0495123584',
    description: 'Holidays activities in North Sydney leasure center'
  },
  {
    name: 'Bricks for kids',
    location: 'North Sydney',
    price: 90,
    contacts: '0495858784',
    description: 'Bricks for kids Lego activities for kids during school holidays'
  }
].freeze

Camp.create!(CAMPS_LIST)
