const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
const {generateHash} = require('../auth/hash')

module.exports = {
  addUser,
  addProduct,
  getProductByUserId,
  getProducts,
  getProductByName,
  getUser,
  getSeller,
  getSellerBySuburb,
  loginUser,
  editUser,
  deleteProductByUser,
  addGrower
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
function getProductByUserId (userId, testDb) {
  const db = testDb || connection
  return db('products')
    .where('user_id', userId)
    .select()
}

// gets products from the database using usersId
function getProducts (userId, testDb) {
  const db = testDb || connection
  return db('products')
    .where('products.user_id', userId)
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
    .join('products', 'users.id', 'products.user_id')
    // .where('users.id', userId)
    // .where('users.id', 'products.user_id')
    // .select({
    //   id: 'users.id',
    //   name: 'users.name',
    //   email: 'users.email',
    //   lat: 'users.lat',
    //   long: 'users.long',
    //   description: 'users.description',
    //   hours: 'users.hours'
    // })
    .where('users.suburb', suburb)
    .select()
}

function editUser (userId, user, testDb) {
  const db = testDb || connection
  return db('users')
    .where('id', userId)
    .update({
      name: user.name,
      description: user.description,
      address: user.address,
      suburb: user.suburb,
      city: user.city,
      hours: user.hours,
      lat: user.lat,
      long: user.long
    })
}

function deleteProductByUser (productId, testDb) {
  const db = testDb || connection
  return db('products')
    .where('id', productId)
    .del()
}

// become a grower
function addGrower (user, userId, testDb) {
  const db = testDb || connection
  return db('users')
    .where('id', userId)
    .insert({
      address: user.address,
      suburb: user.suburb,
      city: user.city,
      description: user.description,
      hours: user.hours,
      lat: user.lat,
      long: user.long
    })
    .update({
      isSeller: user.isSeller
    })
}
