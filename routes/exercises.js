const exerciseRouter = require('express').Router();
const { getAllExercises, getSingleExercise } = require('../controllers/exercises');


exerciseRouter.route('/')
  .get(getAllExercises);

exerciseRouter.route('/:exercise_name')
  .get(getSingleExercise);


module.exports = exerciseRouter;
