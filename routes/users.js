const usersRouter = require('express').Router();

const { getSingleUser, getWorkoutByUserId } = require('../controllers/users');

usersRouter.route('/:user_id').get(getSingleUser);
usersRouter.route('/:user_id/workouts').get(getWorkoutByUserId);


module.exports = usersRouter;
