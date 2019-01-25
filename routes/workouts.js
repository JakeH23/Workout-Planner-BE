const workoutRouter = require('express').Router();
const {
  getAllWorkouts,
  getSingleWorkout,
  postNewWorkout,
  deleteWorkout,
  addWorkoutToSavedWorkouts,
} = require('../controllers/workouts');
const { addCompletedWorkout } = require('../controllers/completedworkouts');

workoutRouter.route('/')
  .get(getAllWorkouts)
  .post(postNewWorkout);


workoutRouter.route('/:workout_name')
  .get(getSingleWorkout)
  .post(addCompletedWorkout)
  .delete(deleteWorkout);

workoutRouter.route('/:workout_name/save/:username')
  .post(addWorkoutToSavedWorkouts);

module.exports = workoutRouter;
