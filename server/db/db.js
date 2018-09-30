const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
const {generateHash} = require('../auth/hash')

module.exports = {
  addUser,
  addProduct,
  getProductById,
  getProducts,
  getProductByName,
  getUser,
  getSeller,
  getSellerBySuburb,
  loginUser
}

// adds a new user to the database
function addUser (user, testDb) {
  const db = testDb || connection
  return generateHash(user.hash)
    .then(hash => {
      return db('users')
        .insert({
          name: user.name,
          isSeller: user.isSeller,
          email: user.email,
          hash: hash,
          description: user.description,
          address: user.address,
          suburb: user.suburb,
          city: user.city,
          postcode: user.postcode,
          hours: user.hours,
          lat: user.lat,
          long: user.long
        })
    })
}

// adds a product to the database
function addProduct (product, userId, testDb) {
  const db = testDb || connection
  return db('products')
    .insert({
      product_name: product.productName,
      price: product.price,
      quantity: product.quantity,
      product_description: product.productDescription,
      category: product.category,
      organic: product.organic,
      freerange: product.freerange,
      user_id: userId
    })
}

// Get a product by ID.
function getProductById (productId, testDb) {
  const db = testDb || connection
  return db('products')
    .where('products.product_id', productId)
    .first()
}

// gets products from the database using usersId
function getProducts (userId, testDb) {
  const db = testDb || connection
  return db('products')
    .where('products.users_id', userId)
    .select()
}

// Get product by name.
function getProductByName (name, testDb) {
  const db = testDb || connection
  return db('products')
    .where('products.product_name', name)
    .select({
      product_name: 'products.product_name',
      product_description: 'products.product_description',
      price: 'products.price',
      quantity: 'products.quantity'
    })
}

// gets users information from the users and products table that we are joining where userId is equal to products.user_id
function getUser (id, testDb) {
  const db = testDb || connection
  return db('users')
    .where('users.id', id)
    .first()
}

function loginUser (email, testDb) {
  const db = testDb || connection
  return db('users')
    .where({email})
    .first()
}

// Get a sellers profile information.
function getSeller (userId, testDb) {
  const db = testDb || connection
  return db('users')
    .join('products', userId, 'products.user_id')
    .where('users.id', userId)
    .select()
}

// Get seller by suburb.
function getSellerBySuburb (suburb, testDb) {
  const db = testDb || connection
  return db('users')
    .where('users.suburb', suburb)
    .select({
      id: 'users.id',
      name: 'users.name',
      email: 'users.email',
      description: 'users.description',
      hours: 'users.hours'
    })
}
