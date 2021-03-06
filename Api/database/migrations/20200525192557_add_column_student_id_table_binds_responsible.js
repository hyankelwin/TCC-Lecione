
exports.up = function (knex, Promise) {
  return knex.schema.table('binds_responsible', function (table) {
    table.integer('student_id').unsigned();

    table.foreign("student_id").references("id").inTable("students");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('binds_responsible', function (table) {
    table.dropColumn('student_id')
  })
};

