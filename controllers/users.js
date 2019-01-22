const db = require('../init');

exports.getAllUsers = (req, res, next) => {
  const docRef = db.collection('users');
  docRef.get().then((users) => {
    const usersData = users.data();
    res.status(200).send({ usersData });
  })
    .catch((err) => {
      res.send({ error: err });
    });
};

exports.getSingleUser = (req, res, next) => {
  const docRef = db.collection('users').doc(req.params.user_id);
  docRef.get().then((user) => {
    if (user.exists) {
      const userData = (user.data());
      res.status(200).send({ userData });
    } else {
      res.status(404);
    }
  }).catch((err) => {
    res.send({ error: err });
  });
};

exports.getWorkoutByUserId = (req, res, next) => {
  const docRef = db.collection('workouts').doc(req.params.user_id);
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
