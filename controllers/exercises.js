const Exercise = require('../models/Exercise');
const Users = require('../models/Users');

exports.getAllExercises = (req, res, next) => {
  Exercise.find()
    .then((exercises) => {
      if (!exercises.length) return Promise.reject({ status: 404, msg: 'exercise not found' });
      res.send({ exercises });
    })
    .catch(next);
};

exports.getSingleExercise = (req, res, next) => {
  Exercise.find({ title: req.params.title })
    .then((exercise) => {
      if (!exercise.length) return Promise.reject({ status: 404, msg: 'exercise not found' });
      [exercise] = exercise;
      res.send({ exercise });
    })
    .catch(next);
};

exports.postNewExercise = (req, res, next) => {
  const newExercise = {
    title: req.body.title,
    major_muscle: req.body.major_muscle,
    minor_muscles: req.body.minor_muscles,
    content: req.body.content,
    created_by: req.body.created_by,
  };
  Exercise.create(newExercise)
    .then(exercise => res.status(201).send({ exercise }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next({ status: 400, msg: 'bad post request' });
      }
    });
};

exports.getExerciseByMajorMuscle = (req, res, next) => {
  Exercise.find({ major_muscle: req.params.major_muscle })
    .then((exercises) => {
      if (!exercises.length) return Promise.reject({ status: 404, msg: 'This muscle has no exercises' });
      res.status(200).send({ exercises });
    })
    .catch(next);
};

exports.getExerciseByUserId = (req, res, next) => {
  Exercise.find({ created_by: req.params.created_by })
    .then((exercises) => {
      if (!exercises.length) return Promise.reject({ status: 404, msg: 'This user has no exercises' });
      res.status(200).send({ exercises });
    })
    .catch(next);
};

exports.deleteExercise = (req, res, next) => {
  Exercise.deleteOne({ title: req.params.title })
  .then(() => {
    res.status(204).send({ msg: 'Successful Deletion '})
  })
    .catch(next);
}
