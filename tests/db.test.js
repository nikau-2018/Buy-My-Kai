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

test('prod length for 1 user', () => {
  const expected = 3
  const userId = 11101
  return db.getProducts(userId, testDb)
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})

test('prod length for another user', () => {
  const expected = 2
  const userId = 11107
  return db.getProducts(userId, testDb)
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})

test('prod length for one more user', () => {
  const expected = 2
  const userId = 11103
  return db.getProducts(userId, testDb)
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})

test('login user', () => {
  const expected = 'Joe Blog'
  const userId = 11101
  return db.getUser(userId, testDb)
    .then(results => {
      const actual = results.name
      expect(actual).toBe(expected)
    })
})

test('another user login', () => {
  const expected = 'Joan Blobby'
  const userId = 11102
  return db.getUser(userId, testDb)
    .then(results => {
      const actual = results.name
      expect(actual).toBe(expected)
    })
})

test('one more user login', () => {
  const expected = 'Neal Fletcher'
  const userId = 11104
  return db.getUser(userId, testDb)
    .then(results => {
      const actual = results.name
      expect(actual).toBe(expected)
    })
})

// test('this person live in Belmont', () => {
//   const expected = 1
//   const suburb = 'Hauraki'
//   const userId = 11101

//   return db.getSellerBySuburb(suburb, userId, testDb)
//     .then(() => { return testDb('users').select() })
//     .then(results => {
//       const actual = results.suburb
//       expect(actual).toBe(expected)
//     })
// })
