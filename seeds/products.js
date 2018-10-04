exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {
          category: 'Fruit',
          freerange: '0',
          id: '33301',
          organic: '1',
          price: 'Free',
          product_description: 'Juicy and ripe!',
          product_name: 'Oranges',
          quantity: '250 oranges',
          user_id: '11101'
        },
        {
          category: 'Fruit',
          freerange: '0',
          id: '33302',
          organic: '1',
          price: '$3 per bag',
          product_description: 'Ugly but declicious',
          product_name: 'Lemons',
          quantity: '50 lemons',
          user_id: '11102'
        },
        {
          category: '',
          freerange: '0',
          id: '33303',
          organic: '1',
          price: '$1 a head',
          product_description: "How would you describe broccoli? It's green...",
          product_name: 'Broccoli',
          quantity: 'too many heads to count!',
          user_id: '11103'
        },
        {
          category: '',
          freerange: '0',
          id: '33304',
          organic: '1',
          price: '$2 a bunch',
          product_description: 'Ripe, great in a Sunday roast! ',
          product_name: 'Silverbeet',
          quantity: 'Heaps',
          user_id: '11103'
        },
        {
          category: '',
          freerange: '0',
          id: '33305',
          organic: '1',
          price: '$2 a head',
          product_description: 'Medium sized and leafy',
          product_name: 'Lettuce',
          quantity: 'A dozen',
          user_id: '11104'
        },
        {
          category: '',
          freerange: '0',
          id: '33306',
          organic: '1',
          price: '50c',
          product_description: 'Leafy and fragrant',
          product_name: 'Coriander',
          quantity: '4 bunches',
          user_id: '11105'
        },
        {
          category: '',
          freerange: '0',
          id: '33307',
          organic: '1',
          price: '$3 a dozen',
          product_description: 'Juicy and vibrant',
          product_name: 'Peaches',
          quantity: '30 peaches',
          user_id: '11106'
        }
      ])
    })
}
