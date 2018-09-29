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

// Auth
// const verifyJwt = require('express-jwt')
const {checkHash} = require('../auth/hash')
const token = require('../auth/token')
 
// POST ROUTES

router.post('/register', register, token.issue)
router.post('/login', login)

// Checks the login against what is in the database using email and hash
function login (req, res, next) {
  const {email, hash} = req.body
  db.getUser(email, hash)
  .then((user) => {

    // Check if user exists.
    if (!user) {
      return res.status(400).json({
        ok: false,
        error: 'That user does not exist.'
      })
    }

    // Compare user input password with hash record.
    const {hash, id} = user

    checkHash(hash, hash)
      .then(ok => {
        if (!ok) {
          return res.status(403).json({
            ok: false,
            error: 'Password incorrect.'
          })
        }

        res.locals.userId = id
        next()
      })
  }) 
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

// Create new user record route function
function register (req, res, next) { 
  const user = req.body  
  db.addUser(user) 
  .then(id => { 

    // Store the new users ID in local state.
    res.locals.userId = id[0]

    // Progress to the next middleware stack function.
    next() 
  })
  .catch(({ message }) => {
    if (message.includes('UNIQUE constraint failed: users.username')) {
      return res.status(400).json({
        ok: false,
        message: 'Username already exists.'
        })
    }
    res.status(500).json({
      ok: false,
      message: message
      })
    })
}

// GET ROUTES

// Get user records
router.get('/:id', getUser)
router.get('/', getSellerBySuburb)

// Get user by ID route function
function getUser (req, res) {
  const userId = Number(req.params.id)
  db.getUser(userId)
  .then(user => {
    if (user.isSeller) {
      db.getSeller(userId)
      .then(seller => {
        res.status(200).json({
          ok: true,
          seller
          })
        })
      .catch(({ message }) => {
        res.status(500).json({
          ok: false,
          message: message
            })
        })
      } else {
        res.status(200).json({
          ok: true,
          user
        })
      }
    })
      .catch(({ message }) => {
        res.status(500).json({
          ok: false,
          message: message
        })
    })
}

// Get seller by suburb
function getSellerBySuburb (req, res) {
  const suburb = req.query.suburb
  db.getSellerBySuburb(suburb)
  .then(results => {
    res.status(200).json({
      ok: true,
      message: 'Sellers were found.',
      results
        })
    })
  .catch(({message}) => {
    if (results.length === 0) {
      res.status(401).json({
        ok: false,
        message: 'No users found.'
      })
    }
      res.status(500).json({
        ok: false,
        message: message
      })
    })
}

module.exports = router
