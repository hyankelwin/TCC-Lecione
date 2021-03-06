
exports.up = function (knex, Promise) {
  return knex.schema.table('monitorings', function (table) {
    table.integer('employee_id').unsigned();

    table.foreign("employee_id").references("id").inTable("employees");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('monitorings', function (table) {
    table.dropColumn('employee_id')
  })
};

