const usersRouter = require('express').Router();

const { getAllUsers, getSingleUser, getWorkoutByUserId, deleteUser } = require('../controllers/users');

usersRouter.route('/')
  .get(getAllUsers);

usersRouter.route('/:username')
  .get(getSingleUser)
  .delete(deleteUser);

usersRouter.route('/:username/workouts')
  .get(getWorkoutByUserId);


module.exports = usersRouter;
