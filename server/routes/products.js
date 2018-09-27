/* 
  FILE: PRODUCTS.JS
  VER:  1.0.0
  DESC: Main routes file for product routes.
  -----------------------------------------------
*/

// FILE DEPENDENCIES
const express = require('express')
const db = require('../db/db')

const router = express.Router()

// POST ROUTES


// Post new product
router.post('/addproduct', addProduct)

// Create new product record route function
function addProduct (req, res) {
  const product = req.body
  db.addProduct(product, 11102)
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
router.get('/:id',getProduct)
router.get('/', getProductByName)

// Get a product by ID
function getProduct (req, res) {
  const productId = Number(req.params.id)
  db.getProductById(productId)
    .then(product => {
      res.status(200).json({
        ok: true,
        message: 'Product was retrieved.',
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

// Get a product by suburb
function getProductByName (req, res) {
  const name = req.query.name
  db.getProductByName(name)
    .then(results => {
      if (results.length == 0) {
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

module.exports = router