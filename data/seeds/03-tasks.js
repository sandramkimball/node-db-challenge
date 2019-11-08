
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {description: 'Create a react app.', notes: 'In bash: create-react-app', completed: true, project_id: 1},
        {description: 'Design the site.', notes: 'Add festival dates and band lineup', completed: false, project_id: 1},
        {description: 'Prep food.', notes: 'Bake nuggets, grade the cheese, open sauce jar', completed: true, project_id: 2},
        {description: 'Assemble food.', notes: 'Layer nuggest, cheese, sauce', completed: true, project_id: 2},
        {description: 'Call Mike.', completed: true, project_id: 3},
        {description: 'Print flyers.', completed: false, project_id: 4},
        {description: 'Rent out lake venue.', notes: 'Cabin in the woods at the lake', completed: true, project_id: 4},
      ]);
    });
};
