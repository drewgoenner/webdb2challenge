
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { vin: '234567890', make: 'Ford', model: 'Mustang', mileage: '0', title_status: 'clean'},
        { vin: '345678901', make: 'Dodge', model: 'Caravan', mileage: '250,000', title_status: 'salvage'},
        { vin: '456789012', make: 'Porsche', model: '911', mileage: '650'}
      ]);
    });
};
