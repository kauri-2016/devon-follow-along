exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    // knex('sundaes').del(),

    // Inserts seed entries
    knex('sundaes').insert({
      size: 'medium',
      flavour: 'chocolate'
    }),
    knex('sundaes').insert({
      size: 'large',
      flavour: 'spaghetti'
    }),
    knex('sundaes').insert({
      size: 'small',
      flavour: 'strawberry'
    })
  );
};
