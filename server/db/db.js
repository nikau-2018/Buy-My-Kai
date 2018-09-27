const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addUser,
  addProduct,
  getProducts,
  getUser
}

// adds a new user to the database
function addUser (user, testDb) {
  const db = testDb || connection
  return db('users')
    .insert({
      name: user.name,
      isSeller: user.isSeller,
      email: user.email,
      hash: user.hash,
      description: user.description,
      address: user.address,
      suburb: user.suburb,
      city: user.city,
      postcode: user.postcode,
      hours: user.hours
    })
}

// adds a product to the database
function addProduct (product, userId, testDb) {
  const db = testDb || connection
  return db('products')
    .insert({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category,
      organic: product.organic,
      freerange: product.freerange,
      users_id: userId
    })
}

// gets products from the database using usersId
function getProducts (userId, testDb) {
  const db = testDb || connection
  return db('products')
    .where('products.users_id', userId)
    .select()
}

// gets users information from the users and products table that we are joining where userId is equal to products.user_id
function getUser (userId, testDb) {
  const db = testDb || connection
  return db('users')
    .join('products', userId, 'products.user_id')
    .where('id', userId)
    .select()
}
