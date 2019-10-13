import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const sprintController = require('../controllers/sprint.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', sprintController.getSprints);
router.get('/:id', sprintController.getSprintById);
router.put('/:id', sprintController.updateSprintById);
router.post('/', sprintController.createSprint);

module.exports = router;
