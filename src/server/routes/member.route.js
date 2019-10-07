import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const sprintController = require('../controllers/sprint.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', sprintController.getMembers);
router.get('/:id', sprintController.getMemberById);

module.exports = router;
