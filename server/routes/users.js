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

// POST ROUTES

router.post('/register', register)
router.post('/login', login)

// Checks the login against what is in the database using email and hash
function login (req, res) {
  const {email, hash} = req.body
  db.getUser(email, hash)
    .then((user) => {
      res.status(200).json({user})
      /* eslint-disable no-console */
      console.log('Done')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

// Create new user record route function
function register (req, res) {
  const user = req.body
  db.addUser(user)
    .then(id => {
      res.locals.userId = id[0]
      res.status(200).json({
        ok: true,
        message: 'User account was successfully created :)',
        user
      })
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
// router.get('/', getSellerBySuburb)

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

// // Get seller by suburb
// function getSellerBySuburb (req, res) {
//   const suburb = req.query.suburb
//   db.getSellerBySuburb(suburb)
//     .then(result => {
//       res.status(200).json({
//         ok: true,
//         message: 'Sellers were found.',
//         result
//       })
//     })
//     .catch(({message}) => {
//       if (result.length === 0) {
//         res.status(401).json({
//           ok: false,
//           message: 'No users found.'
//         })
//       }
//       res.status(500).json({
//         ok: false,
//         message: message
//       })
//     })
// }

router.get('/', (req, res) => {
  const suburb = req.query.suburb
  console.log(suburb)
  db.getSellerBySuburb(suburb)
    .then(result => {
      res.json({result})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
})

module.exports = router
