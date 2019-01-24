const exerciseRouter = require('express').Router();
const {
  getAllExercises, postNewExercise, getSingleExercise, getExerciseByMajorMuscle,
  getExerciseByUserId, deleteExercise,
} = require('../controllers/exercises');


exerciseRouter.route('/')
  .get(getAllExercises)
  .post(postNewExercise);


exerciseRouter.route('/:title')
  .get(getSingleExercise)
  .delete(deleteExercise);

exerciseRouter.route('/muscle/:major_muscle')
  .get(getExerciseByMajorMuscle);

exerciseRouter.route('/users/:created_by')
  .get(getExerciseByUserId);


module.exports = exerciseRouter;
