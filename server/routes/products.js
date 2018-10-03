/*
  FILE: PRODUCTS.JS
  VER:  1.0.0
  DESC: Main routes file for product routes.
  -----------------------------------------------
*/

// FILE DEPENDENCIES
const express = require('express')
const db = require('../db/db')
const verifyJwt = require('express-jwt')

const router = express.Router()

// POST ROUTES

// Post new product
router.post(
  '/addproduct',
  verifyJwt({secret: process.env._KAI_JWT}),
  addProduct
)

// Create new product record route function
function addProduct (req, res) {
  const product = req.body
  const userId = req.user.id
  console.log(req.user)
  db.addProduct(product, userId)
    .then(id => {
      res.status(200).json({
        ok: true,
        message: 'Product successfully created.',
        product
      })
    })
    .catch(({message}) => {
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

// GET ROUTES

// Get product
router.get('/',
  verifyJwt({secret: process.env._KAI_JWT}),
  getProducts)

router.get('/', getProductByName)

router.delete('/:id', deleteProduct)

// Get a product by ID
function getProducts (req, res) {
  const userId = req.user.id
  db.getProductByUserId(userId)
    .then(products => {
      res.status(200).json({
        ok: true,
        message: 'Products have been retrieved.',
        products
      })
    })
    .catch(({message}) => {
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

// Get a product by suburb
function getProductByName (req, res) {
  const name = req.query.name
  db.getProductByName(name)
    .then(results => {
      if (res.length === 0) {
        res.status(400).json({
          ok: false,
          message: 'No products found.'
        })
      } else {
        res.status(200).json({
          ok: true,
          message: 'Products were found.',
          results
        })
      }
    })
    .catch(({message}) => {
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

// Delete a product by IDproductId
function deleteProduct (req, res) {
  const productId = req.params.id
  console.log(productId)
  db.deleteProductByUser(productId)
    .then(products => {
      res.status(200).json({
        ok: true,
        message: 'Product has been deleted.'
      })
    })
    .catch(({message}) => {
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

module.exports = router
