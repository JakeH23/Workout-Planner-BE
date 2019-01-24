const Workouts = require('../models/Workout');
// const { findWorkout } = require('../utils');
// const Users = require('../models/Users');


exports.getAllWorkouts = (req, res, next) => {
  Workouts.find()
    .then((workouts) => {
      if (!workouts.length) return Promise.reject({ status: 404, msg: 'Workouts not found' });
      res.status(200).send({ workouts });
    })
    .catch(next);
};

// exports.addWorkoutToSavedWorkouts = async (req, res, next) => {
//   const selectedWorkout = await findWorkout(req.params.workout_name);
//   console.log(selectedWorkout)
//   Users.saved_workouts.create(selectedWorkout).then(workout => res.status(201)
//     .send({ workout }))
//     .catch(next);

// }

exports.getSingleWorkout = (req, res, next) => {
  Workouts.find({ name: req.params.workout_name })
    .then((workout) => {
      if (!workout.length) return Promise.reject({ status: 404, msg: 'Workout not found' });
      [workout] = workout;
      res.status(200).send({ workout });
    })
    .catch(next);
};

exports.postNewWorkout = (req, res, next) => {
  Workouts.create({
    name: req.body.name,
    exercises: req.body.exercises,
    private: req.body.private,
    created_by: req.body.created_by,
  })
    .then((newWorkout) => {
      res.status(201).send({ newWorkout });
    })
    .catch(next);
};

exports.deleteWorkout = (req, res, next) => {
  Workouts.deleteOne({ name: req.params.workout_name })
    .then(
      (workout) => {
        if (workout.n === 0) return Promise.reject({ status: 404, msg: 'Workout not found' });
        res.status(204).send({ msg: 'Successful deletion' })
      })
    .catch(next);
};
