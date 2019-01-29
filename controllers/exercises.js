const Exercise = require('../models/Exercise');


exports.getAllExercises = (req, res, next) => {
  Exercise.find()
    .then((exercises) => {
      if (!exercises.length) return Promise.reject({ status: 404, msg: 'Exercise not found' });
      res.send({ exercises });
    })
    .catch(next);
};

exports.getSingleExercise = (req, res, next) => {
  Exercise.find({ title: req.params.title })
    .then((exercise) => {
      if (!exercise.length) return Promise.reject({ status: 404, msg: 'Exercise not found' });
      [exercise] = exercise;
      res.send({ exercise });
    })
    .catch(next);
};

exports.postNewExercise = (req, res, next) => {
  const {
    title, major_muscle, minor_muscles, content, created_by,
  } = req.body;
  const newExercise = {
    title,
    major_muscle,
    minor_muscles,
    content,
    created_by,
  };
  Exercise.create(newExercise)
    .then(exercise => res.status(201).send({ exercise }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next({ status: 400, msg: 'Bad Post Request' });
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
  Exercise.find()
    .then((exercises) => {
      const usersExercises = exercises.map((exercise) => {
        if (exercise.user_name === req.params.created_by) return exercise;
      }).filter(user => user);
      if (!exercises.length || !usersExercises.length) return Promise.reject({ status: 404, msg: 'This user has no exercises' });
      res.status(200).send({ usersExercises });
    })
    .catch(next);
};

exports.deleteExercise = (req, res, next) => {
  Exercise.deleteOne({ title: req.params.title })
    .then((exercise) => {
      if (exercise.result.n === 0) return Promise.reject({ status: 404, msg: 'Exercise not found' });
      res.status(204).send({ msg: 'Successful Deletion ' });
    })
    .catch(next);
};
