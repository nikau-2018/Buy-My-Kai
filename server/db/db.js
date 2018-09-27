const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addUser,
  addProduce,
  getProduce
}

function addUser (user, testDb) {
  const db = testDb || connection
  return db('users')
    .insert({
      name: user.name,
      email: user.email,
      hash: user.hash,
      address: user.address,
      suburb: user.suburb,
      city: user.city,
      postcode: user.postcode
    })
}

function addProduce (product, id, testDb) {
  const db = testDb || connection
  return db('products')
    .join('users', 'products.users_id', id) // foreign key that joins products table and users table
    .where('id', product.id)
    .insert({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category,
      organic: product.organic,
      freerange: product.freerange,
      users_id: id
    })
}

function getProduce (id, testDb) {
  const db = testDb || connection
  return db('products')
    .join('users', 'prod')
}
