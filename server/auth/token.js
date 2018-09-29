/* 
  FILE:   TOKEN
  VER:    1.0.0
  DESC:   Module to generate and issue a JWT token as middleware.
  INPUT:  NONE
  OUTPUT: STRING
  ------------------------------------------------------------------------
*/

// FILE DEPENDENCIES
const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')
const db = require('../db/db')

// FILE EXPORTS
module.exports = {
  issue,
  createToken,
  decode,
  getSecret
}

// HELPER FUNCTIONS
// Issue a JWT token.
function issue (id, req, res) {
  db.getUser(id)
    .then(user => {
      res.json({
        ok: true,
        message: 'Authentication successful.',
        user,

        // Call createToken helper function.
        token: createToken(id)
      })
    })
}

// Create token
function createToken (id) {
  // Generate token 
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}