exports.up = (knex, Promise) => {
  return knex.schema.createTable('products', t => {
    t.increments('id').primary()
    t.string('product_name')
    t.string('price')
    t.string('quantity')
    t.string('product_description')
    t.string('category')
    t.boolean('organic')
    t.boolean('freerange')
    t.integer('user_id').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('products')
}
