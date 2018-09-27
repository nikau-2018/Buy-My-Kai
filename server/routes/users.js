/* 
  FILE: USERS.JS
  VER:  1.0.0
  DESC: Main routes file for user routes.
  -----------------------------------------------
*/

// FILE DEPENDENCIES
const express = require('express')
const { addUser } = require('../db/db')

const router = express.Router()

// Route
router.post(
  '/register',
  register
)

// POST ROUTES
function register (req, res) {

  // Get user data from the post request.
  const user = req.body

  // Perform the user record insertion.
  addUser(user)
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

// GET ROUTES

// PUT ROUTES

// DELETE ROUTES

module.exports = router