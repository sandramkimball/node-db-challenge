
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          name: 'Build marketing site website',
          completed: false,
        },
        {
          name: 'Make Chicken Nugget Lasagna',
          completed: true,
        },
        {
          name: 'Assemble the band.',
          completed: false,
        },
        {
          name: 'Plan music food website festival.',
          completed: false,
        },

      ]);
    });
};
