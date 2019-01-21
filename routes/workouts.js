const workoutRouter = require('express').Router();
const {
  getSingleWorkout,
  postNewWorkout,
  deleteWorkout,
} = require('../controllers/workouts');

workoutRouter.route('/').post(postNewWorkout);
workoutRouter.route('/:workout_name').get(getSingleWorkout);
workoutRouter.route('/:workout_id').delete(deleteWorkout);

module.exports = workoutRouter;
