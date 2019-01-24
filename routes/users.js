const usersRouter = require('express').Router();

const {
  getAllUsers, postNewUser, getSingleUser, getWorkoutByUserId, deleteUser,
} = require('../controllers/users');

const { getUserCompletedWorkouts } = require('../controllers/completedworkouts');

usersRouter.route('/')
  .get(getAllUsers)
  .post(postNewUser);

usersRouter.route('/:username')
  .get(getSingleUser)
  .delete(deleteUser);

usersRouter.route('/:username/workouts')
  .get(getWorkoutByUserId);
  

usersRouter.route('/:username/completed_workouts')
  .get(getUserCompletedWorkouts);


module.exports = usersRouter;
