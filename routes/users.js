const usersRouter = require('express').Router();

const { getAllUsers, getSingleUser, getWorkoutByUserId } = require('../controllers/users');

usersRouter.route('/')
  .get(getAllUsers);

usersRouter.route('/:user_id')
  .get(getSingleUser);

usersRouter.route('/:user_id/workouts')
  .get(getWorkoutByUserId);


module.exports = usersRouter;
