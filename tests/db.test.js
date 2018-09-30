const db = require('./../server/db/db')
const testEnv = require('./testEnvironment')

let testDb = null

test('test runner runs', () => {
  expect(true).toBeTruthy
})

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => {
  testEnv.cleanup(testDb)
})

test('addUser adds a new user', () => {
  const expected = 13

  return db.addUser('Yup.', testDb)
    .then(() => { return testDb('db').select() })
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})
