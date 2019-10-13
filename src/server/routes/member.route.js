import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const memberController = require('../controllers/member.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', memberController.getMembers);
router.get('/:id', memberController.getMemberById);

module.exports = router;
