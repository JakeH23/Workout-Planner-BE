const Exercise = require("../models/Exercise");

exports.getAllExercises = (req, res, next) => {
  Exercise.find()
    .then(exercises => {
      if (!exercises.length)
        return Promise.reject({ status: 404, msg: "exercise not found" });
      res.send({ exercises });
    })
    .catch(next);
};

exports.getSingleExercise = (req, res, next) => {
  Exercise.find({ name: req.params.exercise })
    .then(exercise => {
      if (!exercise.length)
        return Promise.reject({ status: 404, msg: "exercise not found" });

      res.send({ exercise });
    })
    .catch(next);
};

exports.postNewExercise = (req, res, next) => {
  console.log(req.body);
  Exercise.create(req.body)
    .then(exercise => {
      return res.status(201).send({ exercise });
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        next({ status: 400, msg: "bad post request" });
      }
    });
};
