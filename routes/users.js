const usersRouter = require('express').Router();

const {
  getAllUsers, postNewUser, getSingleUser, getUserSavedWorkouts, deleteUser,
} = require('../controllers/users');

const { getUserCompletedWorkouts } = require('../controllers/completedworkouts');

usersRouter.route('/')
  .get(getAllUsers)
  .post(postNewUser);

usersRouter.route('/:username')
  .get(getSingleUser)
  .delete(deleteUser);

usersRouter.route('/:username/saved_workouts')
  .get(getUserSavedWorkouts);
  

usersRouter.route('/:username/completed_workouts')
  .get(getUserCompletedWorkouts);


module.exports = usersRouter;
