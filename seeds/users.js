exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 11101, isSeller: 1, name: 'Joe Banks', email: 'joeb@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.8019299, long: 174.7766424, address: '56 Jutland Road', suburb: 'Hauraki', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11102, isSeller: 1, name: 'Mon Collins', email: 'mon@gmail.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.7961868, long: 174.7806733, address: '23 Arthur Crescent', suburb: 'Hauraki', city: 'Auckland', description: 'Kids have moved out of home so I have lots of produce to share!', hours: 'Saturday 9am - 12pm'}
      ])
    })
}
