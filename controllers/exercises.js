const Exercise = require("../models/Exercise");
const User = require("../models/Users");

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
<<<<<<< HEAD
  Exercise.find({ name: req.params.exercise })
    .then(exercise => {
=======
  Exercise.find({ exercise_name: req.params.exercise_name })
    .then(([exercise]) => {
>>>>>>> e736d2332aa28d549cb4d1b3d54da1675efe979a
      if (!exercise.length)
        return Promise.reject({ status: 404, msg: "exercise not found" });

      res.send({ exercise });
    })
    .catch(next);
};

exports.postNewExercise = (req, res, next) => {
<<<<<<< HEAD
  console.log(req.body);
  Exercise.create(req.body)
=======
  const newExercise = {
    title: req.body.title,
    major_muscle: req.body.major_muscle,
    minor_muscles: req.body.minor_muscles,
    content: req.body.content,
    created_by: req.body.created_by
  };
  Exercise.create(newExercise)
>>>>>>> e736d2332aa28d549cb4d1b3d54da1675efe979a
    .then(exercise => {
      return res.status(201).send({ exercise });
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        next({ status: 400, msg: "bad post request" });
      }
    });
};
