
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
      tbl.increments();
      tbl.integer('vin', 128).notNullable();
      tbl.string('make', 128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.integer('mileage', 128).notNullable();
      tbl.string('title_status', 128);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-dealer');
  
};
