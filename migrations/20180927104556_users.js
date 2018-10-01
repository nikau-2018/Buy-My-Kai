exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.boolean('isSeller')
    t.string('name')
    t.string('email').unique()
    t.string('hash')
    t.float('lat')
    t.float('long')
    t.string('address')
    t.string('suburb')
    t.string('city')
    t.string('description')
    t.string('hours')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
