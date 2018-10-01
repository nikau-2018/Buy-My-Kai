exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 11101, isSeller: 1, name: 'Joe Blog', email: 'joeb@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '171 lake rd', suburb: 'Belmont', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11102, isSeller: 0, name: 'Joan Blobby', email: 'jBlobby@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '21 Montgomery Avenue', suburb: 'Belmont', city: 'Auckland', description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat, Sun: 10am - 4pm'},
        {id: 11103, isSeller: 1, name: 'Kelyne B. Chambers', email: 'hbchambers1@gmail.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '171 lake rd', suburb: 'Belmont', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '8am - 2pm'},
        {id: 11104, isSeller: 0, name: 'Neal Fletcher', email: 'nfletcher14@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '2 Coronation Street', suburb: 'Belmont', city: 'Auckland', description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat, Sun: 8am - 2pm'},
        {id: 11105, isSeller: 1, name: 'Iana P. Giunta', email: 'fpgiunta15@gmail.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '34A Horoeka Avenue,', suburb: 'Mt Eden', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11106, isSeller: 0, name: 'Mia Detweiler', email: 'mdetweiler@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '177 Landscape Road', suburb: 'Mt Eden', city: 'Auckland', description: 'Part-time gardener, with lots of fruit for all.', hours: '8am - 12pm'},
        {id: 11107, isSeller: 1, name: 'Romy Ashley', email: 'romyashley@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '46 Wairiki Road', suburb: 'Mt Eden', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 3pm'},
        {id: 11108, isSeller: 0, name: 'Carl Boyers', email: 'cboyers19@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '33 Clarence Street', suburb: 'Ponsonby', city: 'Auckland', description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat, Sun: 8am - 2pm'},
        {id: 11109, isSeller: 1, name: 'Scarlett Curnutt', email: 'scarlettcurnutt@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '35 Lincoln Street', suburb: 'Ponsonby', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 4pm'},
        {id: 11110, isSeller: 0, name: 'Sherwood Estrella', email: 'caestrella0@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '89 Summer Street', suburb: 'Ponsonby', city: 'Auckland', description: 'Part-time gardener, with lots of fruit for all.', hours: 'Sat, Sun: 9am - 12pm'},
        {id: 11111, isSeller: 1, name: 'Francis Crutcher', email: 'gacrutcher0@yahoo.com', hash: 'jsahfksfbe839afhap9fdfbsdeih9w', lat: -36.798002, long: 174.745091, address: '286 Hurstmere Road', suburb: 'Takapuna', city: 'Auckland', description: 'Retired keen green finger from the sunny Northshore.', hours: '9am - 2pm'},
        {id: 11112, isSeller: 0, name: 'Muriel Ledbetter', email: 'cmledbetter12@gmail.com', hash: 'jsadhfu7832ryugf98fgasp8sdyfafh983', lat: -36.816743, long: 174.746684, address: '22A Lake View Road', suburb: 'Takapuna', city: 'Auckland', description: 'Part-time gardener, with lots of fruit for all.', hours: '10am - 4pm'}
      ])
    })
}
