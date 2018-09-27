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

// 
// POST ROUTES
// 

// Post new product.
router.post(
  '/addproduct', 
  addProduct
)

// Create new product record route function.
function addProduct (req, res) {

  // Get the product data.
  const product = req.body

  // Perform the product record insertion.
  db.addProduct(product, 11102)
    
    // Handle success.
    .then(id => {

      // Send response.
      res.status(200).json({
        ok: true,
        message: 'Product successfully created.',
        product
      })
    })

    // Handle error. 
    .catch(({message}) => {
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

// 
// GET ROUTES
// 

// Get product.
router.get('/:id',getProduct)
router.get('/', getProductByName)

// Get a product by ID.
function getProduct (req, res) {

  // Get the product ID.
  const productId = Number(req.params.id)

  // Query the DB.
  db.getProductById(productId)

    // Handle success.
    .then(product => {

      // Send response.
      res.status(200).json({
        ok: true,
        message: 'Product was retrieved.',
        product
      })
    })

    // Handle error.
    .catch(({message}) => {
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

// Get a product by suburb.
function getProductByName (req, res) {

  // Get the suburb from the request query.
  const name = req.query.name

  // Query the DB.
  db.getProductByName(name)

    // Handle success.
    .then(results => {

      // If no products were found.
      if (results.length == 0) {
        res.status(400).json({
          ok: false,
          message: 'No products found.'
        })
      } else {
        // Send response.
        res.status(200).json({
          ok: true,
          message: 'Products were found.',
          results
        })
      }
    })

    // Handle error.
    .catch(({message}) => {

      // Send error response.
      res.status(500).json({
        ok: false,
        message: message
      })
    })

}

module.exports = router