/*
  FILE:   HASH
  VER:    1.0.0
  DESC:   Module to generate a hash from a plan string.
  INPUT:  STRING
  OUTPUT: STRING
  ------------------------------------------------------------------------
*/

// FILE DEPENDENCIES
const sodium = require('libsodium-wrappers')

// FILE EXPORT
module.exports = {
  checkHash,
  generateHash
}

// HASH HELPER FUNCTIONS
// Check an existing password hash against the user input password.
function checkHash (hash, str) {

  // Initialise sodium.
  return sodium.ready

    // Perform the check.
    .then(() => sodium.crypto_pwhash_str_verify(hash, str))
}

// Generate a password hash.
function generateHash (str) {
  
  // Initialise sodium.
  return sodium.ready

    // Perform the hash.
    .then(() => 
      sodium.crypto_pwhash_str(
        str,
        sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
        sodium.crypto_pwhash_MEMLIMIT_MIN
      )
    )
}
