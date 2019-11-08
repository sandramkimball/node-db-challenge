const express = require('express');
const db = require('./project-module.js');
const router = express.Router();
const Projects = require('./project-module.js');


//GET PROJECTS
router.get('/', (req, res)=> {
  Projects.getProjects()
    .then(projects=> {
        res.json(projects)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
});

//GET PROJECT ID
router.get('/:id', (req, res) => {  
    Projects.findById(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Could not find project.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

//GET RESOURCES
router.get('/:id/resources', (req, res)=> {
  Projects.getResources()
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
router.get('/:id/tasks', (req, res)=> {
  Projects.getTasks()
    .select('tasks.name', 'tasks.description')
    .from('tasks')
    .join('projects', 'tasks.project_id', '=', 'project.id')
    // .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .then(tasks=> {
        res.status(200).json(tasks)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
});


module.exports = router;