import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const sprintController = require('../controllers/sprint.controller.js');


// a simple test url to check that all of our files are communicating correctly.
router.get('/new', (req, res) => {
  console.log('getting a thing!')
});

module.exports = router;
