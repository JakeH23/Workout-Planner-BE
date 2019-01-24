const CompletedWorkouts = require('../models/CompletedWorkout')

exports.getUserCompletedWorkouts = (req, res, next) => {
  CompletedWorkouts.find()
  .then((completedWorkouts) => {
      const userCompleted = completedWorkouts.map(workout => {
   if (workout.user_name === req.params.username) {
   return workout;
      };
    });
    res.status(200).send({ userCompleted });
  })
    .catch(next);
};
