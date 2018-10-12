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

// test('addUser adds a new user', () => {
//   const expected = 13
//   const user = {name: 'Emma', hash: 'emma'}
//   return db.addUser(user, testDb)
//     .then(() => { return testDb('users').select() })
//     .then(results => {
//       const actual = results.length
//       expect(actual).toBe(expected)
//     })
// })

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

test('gets a user by their id', () => {
  const expected = 'Joe Banks'
  const userId = 11101
  return db.getUser(userId, testDb)
    .then(results => {
      const actual = results.name
      expect(actual).toEqual(expected)
    })
})

test('returns growers by suburb', () => {
  const userId = 11106
  const suburb = 'Devonport'
  const expected = [11106]

  return db.getSellerBySuburb(suburb, testDb)
    .then(() => { return testDb('users').select().where('users.id', userId) })
    .then(results => {
      const actual = results.map(result => result.id)
      expect(actual).toEqual(expected)
    })
})
