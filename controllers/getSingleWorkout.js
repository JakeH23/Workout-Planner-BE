const db = require('../init');

exports.getSingleWorkout = (req, res, next) => {
  const docRef = db.collection('workouts').doc(req.params.workout_name);
  docRef.get().then((workout) => {
    if (workout.exists) {
      const workoutData = (workout.data());
      res.status(200).send({ workoutData });
    } else {
      res.status(404);
    }
  }).catch((err) => {
    res.send({ error: err });
  });
};
