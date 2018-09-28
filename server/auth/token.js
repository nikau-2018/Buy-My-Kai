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

// FILE EXPORTS
module.exports = {
  issue,
  createToken
}

// HELPER FUNCTIONS
// Issue a JWT token.
function issue (req, res) {
  console.log(res.locals.userId)
  res.json({
    ok: true,
    message: 'Authentication successful.',

    // Call createToken helper function.
    token: createToken(res.locals.userId)
  })
}

// Create token
function createToken (id) {
  // Generate token 
  return jwt.sign({id}, "jlksjdklfjasdfoi3nfiwen", {expiresIn: '1d'})
}
