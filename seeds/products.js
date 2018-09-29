
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {product_id: 33301, product_name: 'Orange', product_description: 'Juicy ripe for the picking, easy peel oranges from the sunny Northshore.', price: 'Free', quantity: '50', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'},
        {product_id: 33302, product_name: 'Apple', product_description: 'Hard as rock and super sour, great for throwing at the neighbours - come and get em', price: '$5 a bag', quantity: '100', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'},
        {product_id: 33303, product_name: 'Feijoa', product_description: 'Sweet and irie, perfect for your smoothies or the casual fest wit your mates.', price: '$4 a bag', quantity: '200', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'}
      ])
    })
}
