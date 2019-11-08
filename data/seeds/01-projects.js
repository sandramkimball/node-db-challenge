
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          project_id: 1, 
          name: 'Build a website',
          description: 'Build a ReactJS site for practice.',
          completed: false,
          tasks: [
            {
              task_id: 1,
              description: 'Start a react-app.',
              notes: 'syntax: create-react-app',
              completed: true
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Resource of what?',
              description: 'banana pie'
            },
            {
              id: 2,
              name: 'Knock Knock',
              description: 'Pizza is here!'
            }
          ]
        },
      ]);
    });
};
