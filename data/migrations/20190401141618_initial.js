exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    //PK
    tbl.increments();

    //username
    tbl
      .string("username", 128)
      .notNullable()
      .unique();

    //password
    tbl.string("password", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
