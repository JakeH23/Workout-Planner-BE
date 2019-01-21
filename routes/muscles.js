const musclesRouter = require('express').Router();

const { getSingleMuscle } = require('../controllers/getSingleMuscle');

musclesRouter.route('/:muscle').get(getSingleMuscle);

module.exports = musclesRouter;
