const Muscles = require('../models/Muscles');

exports.getSingleMuscle = (req, res, next) => {
  Muscles.find({ muscle_name: req.params.muscle_name })
    .then((muscle) => {
      if (!muscle.length) return Promise.reject({ status: 404, msg: 'Muscle not found' });
      res.status(200).send({ muscle });
    })
    .catch(next);
};

exports.getAllMuscles = (req, res, next) => {
  Muscles.find()
    .then((muscles) => {
      if (!muscles.length) return Promise.reject({ status: 404, msg: 'Muscle not found' });
      res.status(200).send({ muscles });
    })
    .catch(next);
};
