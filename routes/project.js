const express = require('express');
const path = require('path');
const controller = require(path.resolve('./controllers/project.js'));

const router = express.Router();

router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:projectId')
  .get(controller.read)
  .patch(controller.update)
  .delete(controller.delete);

router.param('projectId', controller.load);

module.exports = router;
