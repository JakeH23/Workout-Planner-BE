const db = require("../init");

exports.getSingleWorkout = (req, res, next) => {
  const docRef = db.collection("workouts").doc(req.params.workout_name);
  docRef
    .get()
    .then(workout => {
      if (workout.exists) {
        const workoutData = workout.data();
        res.status(200).send({ workoutData });
      } else {
        res.status(404);
      }
    })
    .catch(err => {
      res.send({ error: err });
    });
};

exports.postNewWorkout = (req, res, next) => {
  const newWorkout = {
    ...req.body,
    created_at: new Date()
  };
  db.collection("workouts")
    .add(newWorkout)
    .then(() => {
      return res.status(201).send({ msg: "Workout added." });
    })
    .catch(err => {
      res.status(500);
      res.send({ error: err });
    });
};

exports.deleteWorkout = (req, res, next) => {
  const { workout_id } = req.params;

  db.collection("workouts")
    .doc(workout_id)
    .delete()
    .then(() => {
      res.status(204).send({ msg: "successful deletion" });
    })
    .catch(error => {
      console.error("Error removing document: ", error);
    });
};
