const exerciseRouter = require('express').Router();
const { getAllExercises, postNewExercise, getSingleExercise } = require('../controllers/exercises');


exerciseRouter.route('/')
  .get(getAllExercises)
  .post(postNewExercise);


exerciseRouter.route('/:exercise_name')
  .get(getSingleExercise);


module.exports = exerciseRouter;
