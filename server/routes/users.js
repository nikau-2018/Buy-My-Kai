/* 
  FILE: USERS.JS
  VER:  1.0.0
  DESC: Main routes file for user routes.
  -----------------------------------------------
*/

// FILE DEPENDENCIES
const express = require('express')
const db = require('../db/db')

const router = express.Router()

// 
// POST ROUTES
// 

// Post new user.
router.post(
  '/register',
  register
)

// Create new user record route function.
function register (req, res) {

  // Get user data from the post request.
  const user = req.body

  // Perform the user record insertion.
  db.addUser(user)

    // Handle success.
    .then(id => {

      // Store the new users ID in local state.
      res.locals.userId = id[0]

      // Progress to the next middleware stack function.
      // next()

      // Respond with success.
      res.status(200).json({
        ok: true,
        message: 'User account was successfully created :)',
        user
      })
    })

    // Handle errors.
    .catch(({ message }) => {

      // Check if the username is unique.
      if (message.includes('UNIQUE constraint failed: users.username')) {
        
        // Error if username exists in DB.
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }

      // Internal server error.
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

// 
// GET ROUTES
// 

// Get user records.
router.get('/:id', getUser)
router.get('/', getSellerBySuburb)

// Get user by ID route function.
function getUser (req, res) {
  
  // Get user ID.
  const userId = Number(req.params.id)

  // Query the DB.
  db.getUser(userId)

    // Handle success.
    .then(user => {

      // Check if the user is a seller.
      if (user.isSeller) {

        // Get the seller information.
        db.getSeller(userId)

          // Handle success.
          .then(seller => {
          
            // Send response.
            res.status(200).json({
              ok: true,
              seller
            })
          })

          // Handle error.
          .catch(({ message }) => {

            // Send error response.
            res.status(500).json({
              ok: false,
              message: message
            })
          })
      } else {
        
        // Send response.
        res.status(200).json({
          ok: true,
          user
        })
      }
    })

    // Handle errors.
    .catch(({ message }) => {

      // Send error response.
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

// Get seller by suburb.
function getSellerBySuburb (req, res) {

  // Get the suburb from the request query.
  const suburb = req.query.suburb

  // Query the DB.
  db.getSellerBySuburb(suburb)

    // Handle success.
    .then(results => {

      // Send response.
      res.status(200).json({
        ok: true,
        message: 'Sellers were found.',
        results
      })
    })

    // Handle error.
    .catch(({message}) => {
      
      // If no users were found.
      if (results.length === 0) {
        res.status(401).json({
          ok: false,
          message: 'No users found.'
        })
      }

      // Send error response.
      res.status(500).json({
        ok: false,
        message: message
      })
    })

}

// PUT ROUTES

// DELETE ROUTES

module.exports = router