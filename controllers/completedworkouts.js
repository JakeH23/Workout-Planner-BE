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

exports.addCompletedWorkout = async (req, res, next) => {
  const completedWorkout = await findCompletedWorkout(req.params.workout_name)
  console.log(completedWorkout)
  const { _id, created_by } = completedWorkout[0]
  const newCompletedWorkout = {
    workout: _id,
    user_id: created_by
  }
  console.log(newCompletedWorkout)
  CompletedWorkouts.create(newCompletedWorkout)
    .then(workout => res.status(201).send({ workout }))
    .catch((next));
};


const findCompletedWorkout = async (workoutName) => {
  const newWorkout = await Workouts.find({ name: workoutName }).then(workout => (workout))

  return newWorkout;


}
