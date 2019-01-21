const musclesRouter = require('express').Router();

const { getSingleMuscle } = require('../controllers/muscles');

musclesRouter.route('/:muscle').get(getSingleMuscle);

module.exports = musclesRouter;
