const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

const Resources = require('./resource-model');
const Tasks = require('./tasks-model');

router.get('/', (req, res) => {
  Projects.find()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get project' });
    });
});

router.get('/resources', (req, res) => {
  ////// retrieving all resources 
  Resources.getAll()
  .then((resources) => {
    res.json(resources)
  })
})

router.post('/addResources', (req, res) => {
	// adding resources.
	const resourceData = req.body;

	Resources.addResource(resourceData)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new resource' });
		});
});

router.get('/resources/:id', (req, res) => {
	// retrieving resources id.
	const { id } = req.params;
	Resources.findById(id)
		.then((resource) => {
			res.json(resource);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

router.post('/addProject', (req, res) => {
	// adding projects.
	const projectData = req.body;

	Projects.addProject(projectData)
		.then((project) => {
			res.status(201).json(project);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new project' });
		});
});

router.get('/tasks', (req, res)  => {
  //////// getting all tasks with project name and project descriptions
  Tasks.getAll()
  .then((tasks) => {
    res.json(tasks);
  })
  .catch((err) => {
    res.status(500).json({ message: 'Failed to find tasks' });
  });
});

router.get('/:id/tasks/project', (req, res) => {
	// retrieving a task
	const { id } = req.params;
	Projects.findByProjectId(id)
		.then((Projects) => {
			res.json(Projects);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get Projects' });
		});
});

router.get('/:id/project', (req, res) => {
	// retrieving a list of projects.
	const { id } = req.params;
	Projects.findById(id)
		.then((Projects) => {
			res.json(Projects);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get Projects' });
		});
});

router.post('/addTask', (req, res) => {
	// adding tasks
	const taskData = req.body;

	Tasks.addTask(taskData)
		.then((task) => {
			res.status(201).json(task);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new task' });
		});
});

router.get('/:id/detail', (req, res) => {
	// retrieving a list of resources.
	const { id } = req.params;
	Tasks.findByTaskId(id)
		.then((Projects) => {
			res.json(Projects);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get a list of Tasks' });
		});
});

module.exports = router;
