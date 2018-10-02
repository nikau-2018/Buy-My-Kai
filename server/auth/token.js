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
  getSecret
}

// HELPER FUNCTIONS
// Issue a JWT token.
function issue (req, res) {
  res.json({
    ok: true,
    message: 'Authentication successful.',
    token: createToken(res.locals.userId)
  })
}

// Create token
function createToken (id) {
  // Generate token
  return jwt.sign({id}, process.env._KAI_JWT, {expiresIn: '1d'})
}

function getSecret (done) {
  done(null, process.env._KAI_JWT)
}
