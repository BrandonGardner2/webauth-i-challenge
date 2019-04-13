exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { id: 1, username: "daboss", password: "password" },
    { id: 2, username: "brandon", password: "password" },
    { id: 3, username: "test", password: "password" }
  ]);
};
