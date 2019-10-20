import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const projectController = require('../controllers/project.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);
router.get('/:id/tasks', projectController.getTasksInProject);

module.exports = router;
