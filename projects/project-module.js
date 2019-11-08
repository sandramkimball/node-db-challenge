const express = require('express');
const db = require('./project-model.js');
const router = express.Router();

//GET PROJECTS
router.getProjects('/', (req, res)=> {
    db.then(projects=> {
        res.json(projects)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
});

//GET PROJECT ID
router.getProject('/:id', (req, res) => {
    const { id } = req.params;
  
    db.findById(id)
    .then(projects => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

//GET RESOURCES
router.getResources('/:id/resources', (req, res)=> {
    db
    .select('resources.name', 'resources.description')
    .from('resources')
    .join('resources', 'projects.id', '=', 'resources.project_id')
    .then(resources=> {
        res.status(200).json(resources)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get resources' });
      });
});

//GET TASKS
router.getTasks('/:id/tasks', (req, res)=> {
    db
    .select('tasks.name', 'tasks.description')
    .from('tasks')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .then(tasks=> {
        res.status(200).json(tasks)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
});


module.exports = router;