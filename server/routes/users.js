/*
  FILE: USERS.JS
  VER:  1.0.0
  DESC: Main routes file for user routes.
  -----------------------------------------------
*/

// FILE DEPENDENCIES
const express = require('express')
const db = require('../db/db')
const jwt = require('jsonwebtoken')

const router = express.Router()

// Auth
const verifyJwt = require('express-jwt')
const {checkHash} = require('../auth/hash')
const {createToken} = require('../auth/token')

// POST ROUTES
router.post(
  '/register',
  register
)

router.post(
  '/login',
  login
)

// Checks the login against what is in the database using email and hash
function login (req, res) {
  const {email} = req.body
  db.loginUser(email)
    .then(user => {
      // Save users password.
      const pwd = req.body.hash

      // Check if user exists.
      if (!user) {
        return res.status(400).json({
          ok: false,
          message: 'That user does not exist.'
        })
      } else {
        // Compare user input password with hash record.
        const {hash, id} = user

        checkHash(hash, pwd)
          .then(ok => {
            if (!ok) {
              return res.status(403).json({
                ok: false,
                message: 'Password incorrect.'
              })
            } else {
              res.json({
                user: user,
                token: createToken(id)
              })
            }
          })
      }
    })

    .catch((err) => {
      res.status(500).json({
        ok: false,
        message: err.message
      })
    })
}

// Create new user record route function
function register (req, res) {
  const user = req.body
  db.addUser(user)
    .then(id => {
      res.status(201).json({
        ok: true,
        message: 'Account created successfully.',
        token: createToken(id[0])
      })
    })
    .catch(({message}) => {
      if (message.includes('UNIQUE constraint failed: users.email')) {
        return res.status(400).json({
          ok: false,
          message: 'Email already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: 'An unknown error occured'
      })
    })
}

// GET ROUTES

// Get user records
router.get(
  '/profile',
  verifyJwt({secret: process.env._KAI_JWT}),
  getUser
)

// Get user by ID route function
function getUser (req, res) {
  // Get the users ID from the token.
  const userId = req.user.id
  db.getUser(userId)
    .then(user => {
      // Determine which user type to return.
      switch (user.isSeller) {
        case 1:
          return db.getSeller(userId)
            .then(user => {
              res.status(200).json({
                ok: true,
                token: createToken(user.id),
                user
              })
            })
            .catch(({message}) => {
              res.status(500).json({
                ok: false,
                message: message
              })
            })

        default:
            return res.status(200).json({
              ok: true,
              token: createToken(userId),
              user
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

// Get seller by suburb
router.get(
  '/neighbourhood/',
  verifyJwt({secret: process.env._KAI_JWT}),
  getSellerBySuburb
)

function getSellerBySuburb (req, res) {
  const suburb = req.query.suburb
  db.getSellerBySuburb(suburb)
    .then(result => {
      /* eslint-disable no-console */
      console.log('sellers found')
      res.json({result})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
}

module.exports = router
