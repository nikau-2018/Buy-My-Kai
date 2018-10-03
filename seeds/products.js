exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 33301, product_name: 'Feijoas', product_description: 'Get them while they are in season!!', price: '$5 a dozen', quantity: 'around 80 feijoas to sell', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'}
      ])
    })
}
