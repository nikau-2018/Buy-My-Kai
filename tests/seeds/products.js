exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 33301, product_name: 'Orange', product_description: 'Juicy ripe for the picking, easy peel oranges from the sunny Northshore.', price: 'Free', quantity: '50', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'},
        {id: 33302, product_name: 'Apple', product_description: 'Hard as rock and super sour, great for throwing at the neighbours - come and get em', price: '$5 a bag', quantity: '100', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'},
        {id: 33303, product_name: 'Feijoa', product_description: 'Sweet and irie, perfect for your smoothies or the casual fest wit your mates.', price: '$4 a bag', quantity: '200', category: 'Fruit', organic: 1, freerange: 0, user_id: '11101'},
        {id: 33304, product_name: 'Strawberry', product_description: 'Pick your own.', price: '$2 a bag', quantity: '200', category: 'Fruit', organic: 1, freerange: 0, user_id: '11103'},
        {id: 33305, product_name: 'Cherry', product_description: 'Sweet and can be eaten raw, stewed, or in tarts and cakes.', price: '$5 a bag', quantity: '50', category: 'Fruit', organic: 1, freerange: 0, user_id: '11103'},
        {id: 33306, product_name: 'Lemon', product_description: 'When life gives you a lemons, make lemonade becasue they are freeee!', price: 'Free', quantity: '100', category: 'Fruit', organic: 1, freerange: 0, user_id: '11105'},
        {id: 33307, product_name: 'Dates', product_description: 'Extremely delicious and perfect for making scones.', price: '$4 a bag', quantity: '200', category: 'Fruit', organic: 1, freerange: 0, user_id: '11107'},
        {id: 33308, product_name: 'Carrots', product_description: 'Use them for everything - from casseroles to cakes', price: '$2 a bag', quantity: '100', category: 'Fruit', organic: 1, freerange: 0, user_id: '11107'},
        {id: 33309, product_name: 'Kiwi fruit', product_description: 'Scoop out the juicy green flesh with a spoon just like a boiled egg', price: '$4 a bag', quantity: '200', category: 'Fruit', organic: 1, freerange: 0, user_id: '11109'},
        {id: 33310, product_name: 'Pumpkin', product_description: 'Halloween is just aroung the corner!', price: '$5 each', quantity: '15', category: 'Fruit', organic: 1, freerange: 0, user_id: '11109'},
        {id: 33311, product_name: 'Potato', product_description: 'Chips chips chips', price: '$5 a bag', quantity: '50', category: 'Fruit', organic: 1, freerange: 0, user_id: '11111'},
        {id: 33312, product_name: 'Tomato', product_description: 'Sweet and tasty. Great for salads or to put it in your lunchbox.', price: '$3 a bag', quantity: '150', category: 'Fruit', organic: 1, freerange: 0, user_id: '11111'}
      ])
    })
}
