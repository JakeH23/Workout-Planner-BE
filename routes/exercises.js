const exerciseRouter = require('express').Router();
const {
  getAllExercises, postNewExercise, getSingleExercise, getExerciseByMajorMuscle,
} = require('../controllers/exercises');


exerciseRouter.route('/')
  .get(getAllExercises)
  .post(postNewExercise);


exerciseRouter.route('/:title')
  .get(getSingleExercise);

exerciseRouter.route('/muscle/:major_muscle')
  .get(getExerciseByMajorMuscle);


module.exports = exerciseRouter;
