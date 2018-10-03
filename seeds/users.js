exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 11101, isSeller: 1, name: 'Joe Banks', email: 'joeb@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.8019299, long: 174.7766424, address: '56 Jutland Road', suburb: 'Hauraki', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'}
      ])
    })
}
