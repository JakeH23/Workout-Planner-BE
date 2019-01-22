const db = require('../init');


exports.getAllExercises = (req, res, next) => {
  const docRef = db.collection('exercises');
  docRef.get().then((exercises) => {
    const exercisesData = exercises.data();
    res.status(200).send({ exercisesData });
  })
    .catch((err) => {
      res.send({ error: err });
    });
};


exports.getSingleExercise = (req, res, next) => {
  const { exercise_name } = req.params;
  const docRef = db.collection('exercises').doc(exercise_name);
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

exports.postNewExercise = (req, res, next) => {
  const newExercise = {
    ...req.body,
    created_at: new Date(),
  };
  db.collection('exercises')
    .add(newExercise)
    .then(() => res.status(201).send({msg: 'Exercises Added'}))
    .catch((err) => {
      res.status(500);
      res.send({ error: err });
    });
}