const workoutRouter = require('express').Router();
const { getSingleWorkout } = require('../controllers/getSingleWorkout');

workoutRouter.route('/:workout_name').get(getSingleWorkout);


module.exports = workoutRouter;
