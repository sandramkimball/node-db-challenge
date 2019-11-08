
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {name: 'Rav Ultra Computer X3.0', description:'Fastest computer in the world.', project_id: 1}, 
        {name: 'Mad Mike\'s CookBook', description:'Cookbook full of crazy recipes.', project_id: 2}, 
        {name: 'Groceries', description:'Chicken nuggets, cheese, pizza sauce, anchovies.', project_id: 2}, 
        {name: 'The Mystery Van', project_id: 3}, 
        {name: 'Lasagna and Mike', description:'Food and co-manager.', project_id: 4}, 
      ]);
    });
};
