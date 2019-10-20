import express from 'express';

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const projectController = require('../controllers/block.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', projectController.getBlocks);
router.post('/', projectController.createBlock);
router.delete('/:id', projectController.deleteBlock);

module.exports = router;
