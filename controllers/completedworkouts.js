const CompletedWorkouts = require('../models/CompletedWorkout');
const Workouts = require('../models/Workout');

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

exports.addCompletedWorkout = (req, res, next) => {
  const completedWorkout = findCompletedWorkout(req.params.name)
  CompletedWorkouts.create(completedWorkout)
    .then(workout => res.status(201).send({ workout }))
    .catch((next));
};


const findCompletedWorkout = (workoutName) => {
  return Workouts.find({ name: workoutName })
}
