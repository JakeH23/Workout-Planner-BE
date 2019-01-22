const musclesRouter = require('express').Router();

const { getAllMuscles, getSingleMuscle } = require('../controllers/muscles');

musclesRouter.route('/').get(getAllMuscles);

musclesRouter.route('/:muscle_name').get(getSingleMuscle);

module.exports = musclesRouter;
