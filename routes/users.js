const usersRouter = require('express').Router();

const {
  getAllUsers, postNewUser, getSingleUser, getUserSavedWorkouts, deleteUser, changeUserDetails,
} = require('../controllers/users');
const {
  deleteSavedWorkout,
} = require('../controllers/workouts');

const { getUserCompletedWorkouts } = require('../controllers/completedworkouts');

usersRouter.route('/')
  .get(getAllUsers)
  .post(postNewUser);

usersRouter.route('/:username')
  .get(getSingleUser)
  .patch(changeUserDetails)
  .delete(deleteUser);

usersRouter.route('/:username/saved_workouts')
  .get(getUserSavedWorkouts)
  .delete(deleteSavedWorkout);


usersRouter.route('/:username/completed_workouts')
  .get(getUserCompletedWorkouts);


module.exports = usersRouter;
