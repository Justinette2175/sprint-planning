import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const sprintController = require('../controllers/sprint.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', sprintController.getTasks);
router.get('/:id', sprintController.getTaskById);
router.put('/:id', sprintController.updateTaskById);

module.exports = router;
