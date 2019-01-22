const Muscles = require('../models/Muscles');

exports.getSingleMuscle = (req, res, next) => {
  Muscles.find({ muscle_name: req.params.muscle_name })
    .then((muscle) => {
      res.status(200).send({ muscle });
    });
};
