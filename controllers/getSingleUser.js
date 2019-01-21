const db = require('../init');

exports.getSingleUser = (req, res, next) => {
  const docRef = db.collection('users').doc(req.params.username);
  docRef.get().then((user) => {
    if (user.exists) {
      const userData = (user.data());
      res.status(200).send({ userData });
    }
    else {
      res.status(404);
    }
  }).catch((err) => {
     res.send({ error: err });
  })
}