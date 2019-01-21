const workoutRouter = require('express').Router();
const { getSingleWorkout, postNewWorkout } = require('../controllers/workouts');


workoutRouter.route('/').post(postNewWorkout);
workoutRouter.route('/:workout_id').get(getSingleWorkout);


module.exports = workoutRouter;
