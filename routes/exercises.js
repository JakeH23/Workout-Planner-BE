const exerciseRouter = require('express').Router();
const { getSingleExercise } = require('../controllers/getSingleExercise');

exerciseRouter.route('/:exercise_name').get(getSingleExercise);


module.exports = exerciseRouter;
