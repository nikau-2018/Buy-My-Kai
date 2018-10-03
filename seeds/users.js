exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 11101, isSeller: 1, name: 'Lauren Hart', email: 'laurenannehart@gmail.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.8144769, long: 174.7787518, address: '115 Norwood Road', suburb: 'Bayswater', city: 'Auckland', description: 'Hi there! not a keen gardener, but I have a lemon tree in my backyard. Please come by and pick up a bag!', hours: 'Sunday 9am-12pm'}
      ])
    })
}
