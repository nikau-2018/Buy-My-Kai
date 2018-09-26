const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addUser,
  addProduce
}

function addUser (user, testDb) {
  const db = testDb || connection
  return db('users')
    .insert({
      name: user.name,
      email: user.email,
      password: user.hash,
      address: user.address,
      suburb: user.suburb,
      city: user.city,
      postcode: user.postcode
    })
}

function addProduce (product, testDb) {
  const db = testDb || connection
  return db('products')
    .where('id', )
    .insert({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category,
      organic: product.organic,
      freerange: product.freerange
    })
}
