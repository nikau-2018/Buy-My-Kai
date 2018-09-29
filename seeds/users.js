
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 11101, isSeller: 1, name: 'Joe Blog', email: 'joeb@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '171 lake rd', suburb: 'Belmont', city: 'Auckland', postcode: 0622, description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11102, isSeller: 0, name: 'Joan Blobby', email: 'jBlobby@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '17 Richmond Ave', suburb: 'Northcote Point', city: 'Auckland', postcode: 0627, description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat: 10am - Sun: 3pm'},
        {id: 11103, isSeller: 1, name: 'Kelyne B. Chambers', email: 'hbchambers1@gmail.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '171 lake rd', suburb: 'Belmont', city: 'Auckland', postcode: 0622, description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11104, isSeller: 0, name: 'Neal Fletcher', email: 'nfletcher14@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '568 Ormiston Rd', suburb: 'Flat Bush', city: 'Manukau', postcode: 0627, description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat: 10am - Sun: 3pm'},
        {id: 11105, isSeller: 1, name: 'Iana P. Giunta', email: 'fpgiunta15@gmail.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '7 Munro Rd', suburb: 'Pokeno', city: 'Franklin', postcode: 0622, description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11106, isSeller: 0, name: 'Mia Detweiler', email: 'mdetweiler@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '7A Aldred Rd', suburb: 'Remuera', city: 'Auckland', postcode: 0627, description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat: 10am - Sun: 3pm'},
        {id: 11107, isSeller: 1, name: 'Romy Ashley', email: 'romyashley@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '9 Springcombe Rd', suburb: 'St Heliers', city: 'Auckland', postcode: 0622, description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11108, isSeller: 0, name: 'Carl Boyers', email: 'cboyers19@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '17 Richmond Ave', suburb: 'Northcote Point', city: 'Auckland', postcode: 0627, description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat: 10am - Sun: 3pm'},
        {id: 11109, isSeller: 1, name: 'Scarlett Curnutt', email: 'scarlettcurnutt@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '18 Ronaki Rd', suburb: 'Mission Bay', city: 'Auckland', postcode: 0622, description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11110, isSeller: 0, name: 'Sherwood Estrella', email: 'caestrella0@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '2 Mainston Rd', suburb: 'Remuera', city: 'Auckland', postcode: 0627, description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat: 10am - Sun: 3pm'},
        {id: 11111, isSeller: 1, name: 'Francis Crutcher', email: 'gacrutcher0@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '50 Normanby Rd', suburb: 'Karaka', city: 'Franklin', postcode: 0622, description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11112, isSeller: 0, name: 'Muriel Ledbetter', email: 'cmledbetter12@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '17 Holly St', suburb: 'Avondale', city: 'Auckland', postcode: 0627, description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat: 10am - Sun: 3pm'}
      ])
    })
}
