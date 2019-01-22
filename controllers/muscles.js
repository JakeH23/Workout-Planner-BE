const Muscles = require('../models/Muscles');

exports.getSingleMuscle = (req, res, next) => {
  Muscles.find({ muscle_name: req.params.muscle_name })
    .then(([muscle]) => {
      return res.status(200).send({ muscle });
    })
    .catch((err) => console.log(err));
};

exports.getAllMuscles = (req, res, next) => {
  Muscles.find()
    .then((muscles) => {
      return res.status(200).send({ muscles });
    })
    .catch((err) => console.log(err));
};
