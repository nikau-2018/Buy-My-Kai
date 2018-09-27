
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 33301, name: 'Orange', description: 'Juicy ripe for the picking, easy peel oranges from the sunny Northshore.', price: 'Free', quantity: '50', category: 'Fruit', organic: 'true', freerange: 'false', user_id: '11101'},
        {id: 33302, name: 'Apple', description: 'Hard as rock and super sour, great for throwing at the neighbours - come and get em', price: '$5 a bag', quantity: '100', category: 'Fruit', organic: 'true', freerange: 'false', user_id: '11101'},
        {id: 33303, name: 'Feijoa', description: 'Sweet and irie, perfect for your smoothies or the casual fest wit your mates.', price: '$4 a bag', quantity: '200', category: 'Fruit', organic: 'true', freerange: 'false', user_id: '11101'}
      ])
    })
}
