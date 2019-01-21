const db = require('../init');


exports.getSingleExercise = (req, res, next) => {
  const docRef = db.collection('exercises').doc(req.params.exercise_name);
  docRef.get().then((exercise) => {
    if (exercise.exists) {
      const exerciseData = (exercise.data());
      res.status(200).send({ exerciseData });
    } else {
      res.status(404);
    }
  }).catch((err) => {
    res.send({ error: err });
  });
};
