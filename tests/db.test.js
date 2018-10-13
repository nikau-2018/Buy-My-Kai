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
  const expected = 7
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
  const expected = 'Joe Banks'
  const userId = 11101
  return db.getUser(userId, testDb)
    .then(results => {
      const actual = results.name
      expect(actual).toEqual(expected)
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

test('returns all growers by suburb', () => {
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

test('gets a growers profile information and products using their id', () => {
  const userId = 11103
  const expected = [ {id: 33304,
    isSeller: 1,
    name: 'Danny Chapman',
    email: 'dchapman@gmail.com',
    hash:
     '$argon2id$v=19$m=8,t=2,p=1$SWgDZz8QbOTM9G7vaa+qOQ$s64POjOCRSWBe2+eCl23SfVtQ4NM0eX5KdeXUSl5oHs',
    lat: -36.80195,
    long: 174.78688,
    address: '243 Lake Road',
    suburb: 'Belmont',
    city: 'Auckland',
    description:
     'Hey! I have a thriving veggie patch and would love to share with the community',
    hours: 'Sundays anytime',
    product_name: 'Strawberry',
    price: '$2 a bag',
    quantity: '200',
    product_description: 'Pick your own.',
    category: 'Fruit',
    organic: 1,
    freerange: 0,
    user_id: 11103},
  {id: 33305,
    isSeller: 1,
    name: 'Danny Chapman',
    email: 'dchapman@gmail.com',
    hash:
     '$argon2id$v=19$m=8,t=2,p=1$SWgDZz8QbOTM9G7vaa+qOQ$s64POjOCRSWBe2+eCl23SfVtQ4NM0eX5KdeXUSl5oHs',
    lat: -36.80195,
    long: 174.78688,
    address: '243 Lake Road',
    suburb: 'Belmont',
    city: 'Auckland',
    description:
     'Hey! I have a thriving veggie patch and would love to share with the community',
    hours: 'Sundays anytime',
    product_name: 'Cherry',
    price: '$5 a bag',
    quantity: '50',
    product_description: 'Sweet and can be eaten raw, stewed, or in tarts and cakes.',
    category: 'Fruit',
    organic: 1,
    freerange: 0,
    user_id: 11103} ]

  return db.getSeller(userId, testDb)
    .then(() => {
      return testDb('users').join('products', userId, 'products.user_id')
        .select().where('users.id', userId)
    })
    .then(results => {
      const actual = results
      expect(actual).toEqual(expected)
    })
})

test('edit an existing user in the database', () => {
  const expected = ['Sundays all day']
  const user = {hours: 'Sundays all day'}
  const userId = 11105
  return db.editUser(userId, user, testDb)
    .then(() => { return testDb('users').select().where('users.id', userId) })
    .then(results => {
      const actual = results.map(result => result.hours)
      expect(actual).toEqual(expected)
    })
})

test('deletes a product in the database', () => {
  const expected = 11
  const productId = 33301
  return db.deleteProductById(productId, testDb)
    .then(() => { return testDb('products').select() })
    .then(results => {
      const actual = results.length
      expect(actual).toEqual(expected)
    })
})
