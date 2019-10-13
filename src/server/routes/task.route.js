import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const taskController = require('../controllers/task.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTaskById);


module.exports = router;
