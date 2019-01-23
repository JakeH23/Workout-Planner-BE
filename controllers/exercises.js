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

exports.getSingleExercise = (req, res, next) => {};

exports.postNewExercise = (req, res, next) => {
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
