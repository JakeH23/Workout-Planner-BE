const CompletedWorkouts = require('../models/CompletedWorkout');
const { findWorkout } = require('../utils');

exports.getUserCompletedWorkouts = (req, res, next) => {
  CompletedWorkouts.find()
    .then((completedWorkouts) => {
      const userCompleted = completedWorkouts.map(workout => {
        if (workout.completed_by === req.params.username) {
          return workout;
        };
      }).filter(user => user);
      if (!userCompleted.length) return Promise.reject({ status: 404, msg: 'No workouts added' });

      res.status(200).send({ userCompleted });
    })
    .catch(next);
};

exports.addCompletedWorkout = async (req, res, next) => {
  const completedWorkout = await findWorkout(req.params.workout_name)
  const { _id, name } = completedWorkout[0];
  const newCompletedWorkout = {
    workout: _id,
    workout_name: name,
    completed_by: req.body.completed_by,
 
  };
  CompletedWorkouts.create(newCompletedWorkout)
    .then(workout => res.status(201).send({ workout }))
    .catch((next));
};

