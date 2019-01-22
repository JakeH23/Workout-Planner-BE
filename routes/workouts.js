const workoutRouter = require('express').Router();
const {
  getAllWorkouts,
  getSingleWorkout,
  postNewWorkout,
  deleteWorkout,
} = require('../controllers/workouts');

workoutRouter.route('/')
  .get(getAllWorkouts)
  .post(postNewWorkout);


workoutRouter.route('/:workout_name').get(getSingleWorkout);
workoutRouter.route('/:workout_id').delete(deleteWorkout);

module.exports = workoutRouter;
