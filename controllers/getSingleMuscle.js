const db = require('../init');

exports.getSingleMuscle = (req, res, next) => {
  const docRef = db.collection('muscles').doc(req.params.muscle);
  docRef.get().then((muscle) => {
    if (muscle.exists) {
      const muscleData = (muscle.data());
      res.status(200).send({ muscleData });
    } else {
      res.status(404);
    }
  }).catch((err) => {
    res.send({error: err});
  })
}