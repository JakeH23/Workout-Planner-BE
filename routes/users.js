const usersRouter = require('express').Router();

const { getAllUsers, postNewUser, getSingleUser, getWorkoutByUserId, deleteUser } = require('../controllers/users');

usersRouter.route('/')
  .get(getAllUsers)
  .post(postNewUser);

usersRouter.route('/:username')
  .get(getSingleUser)
  .delete(deleteUser);

usersRouter.route('/:username/workouts')
  .get(getWorkoutByUserId);


module.exports = usersRouter;
