const musclesRouter = require('express').Router();

const { getSingleMuscle } = require('../controllers/muscles');

musclesRouter.route('/:muscle_name').get(getSingleMuscle);

module.exports = musclesRouter;
