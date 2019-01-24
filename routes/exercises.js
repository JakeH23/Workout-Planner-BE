const exerciseRouter = require('express').Router();
const {
  getAllExercises, postNewExercise, getSingleExercise, getExerciseByMajorMuscle, 
  getExerciseByUserId,
} = require('../controllers/exercises');


exerciseRouter.route('/')
  .get(getAllExercises)
  .post(postNewExercise);


exerciseRouter.route('/:title')
  .get(getSingleExercise);

exerciseRouter.route('/muscle/:major_muscle')
  .get(getExerciseByMajorMuscle);

exerciseRouter.route('/users/:created_by')
  .get(getExerciseByUserId);


module.exports = exerciseRouter;
