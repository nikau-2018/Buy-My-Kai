const db = require('./../server/db/db')
const testEnv = require('./testEnvironment')

let testDb = null

test('test runner runs', () => {
  expect(true).toBeTruthy()
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
  const user = {name: 'Emma', hash: 'emma'}
  return db.addUser(user, testDb)
    .then(() => { return testDb('users').select() })
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})

test('add a product to the database', () => {
  const expected = 13
  const product = {productName: 'Banana'}
  const userId = 11101
  return db.addProduct(product, userId, testDb)
    .then(() => { return testDb('products').select() })
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})
