
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 11101, isSeller: 'true', name: 'Joe Blog', email: 'joeb@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '171 lake rd', suburb: 'Belmont', city: 'Auckland', postcode: 0622, description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11102, isSeller: 'false', name: 'Joan Blobby', email: 'jBlobby@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '17 Richmond Ave', suburb: 'Northcote Point', city: 'Auckland', postcode: 0627, description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat: 10am - Sun: 3pm'}
      ])
    })
}
