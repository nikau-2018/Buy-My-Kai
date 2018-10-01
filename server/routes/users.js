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

      res.locals.userId = user.id

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
              res.locals.userId = id
              res.json({
                user: user,
                token: createToken(id)
              })
            }
          })
      }
    })

    .catch((err) => {
      console.log('...', err)
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
  verifyJwt({ secret: process.env._KAI_JWT }),
  getUser
)

// Get user by ID route function
function getUser (req, res) {
  const id = res.locals.userId
  db.getUser(id)
    .then(user => {
      if (user.isSeller) {
        db.getSeller(id)
          .then(seller => {
            res.status(200).json({
              ok: true,
              seller
            })
              .catch(({message}) => {
                res.status(500).json({
                  ok: false,
                  message: message
                })
              })
          })
      } else {
        res.status(200).json({
          ok: true,
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
  verifyJwt({ secret: process.env._KAI_JWT }),
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
