const knex = require('knex')
const config = require('../knexfile').test

module.exports = {
  getTestDb,
  initialise,
  cleanup
}

function getTestDb () {
  // return a new db connection
  return knex(config)
}

function initialise (db) {
  return db.migrate.latest()
    .then(() => db.seed.run())
}

function cleanup (db) {
  return db.destroy()
}
