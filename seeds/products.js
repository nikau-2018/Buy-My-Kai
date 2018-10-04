exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 33301, product_name: 'Oranges', product_description: 'Juicy and ripe!', price: 'Free', quantity: '250 oranges', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'},
        {id: 33302, product_name: 'Lemons', product_description: 'Ugly but declicious', price: '$3 per bag', quantity: '50 lemons', category: 'Fruit', organic: 1, freerange: 0, user_id: '11102'}
      ])
    })
}
