exports.up = function (knex, Promise) {
  console.log('Creating sundaes')
  return knex.schema.createTableIfNotExists('sundaes', function (table) {
    table.increments('id').primary()
    table.string('size')
    table.string('flavour')
      // if creating a foreign key
      // table.integer('sundae.id').references('sundaes.id')
  })
}

exports.down = function (knex, Promise) {
  console.log('Dropping sundaes')
  return knex.schema.dropTableIfExists('sundaes').then(function () {
    console.log('sundaes table was dropped')
  })
}
