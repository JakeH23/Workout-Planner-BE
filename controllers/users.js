const Users = require('../models/Users');
const SavedWorkouts = require('../models/SavedWorkouts');

exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then((users) => {
      if (!users.length) return Promise.reject({ status: 404, msg: 'User not found' });
      res.send({ users });
    })
    .catch(next);
};

exports.getSingleUser = (req, res, next) => {
  Users.find({ user_name: req.params.username })
    .then((user) => {
      if (!user.length) return Promise.reject({ status: 404, msg: 'User not found' });
      [user] = user;
      res.status(200).send({ user });
    })
    .catch(next);
};

exports.changeUserName = (req, res, next) => {
  Users.updateOne({ user_name: req.params.username }, { $set: { user_name: req.body.newName } })
    .then((user) => {
      if (user.n === 0) return Promise.reject({ status: 404, msg: 'Please enter username' });
      res.status(200).send({ user });
    })
    .catch(next);
}

exports.postNewUser = (req, res, next) => {
  const newUser = req.body;
  Users.create(newUser)
    .then((user) => {
      res.status(201).send({ user });
    })
    .catch(next);
};


exports.deleteUser = (req, res, next) => {
  Users.deleteOne({ user_name: req.params.username })
    .then((user) => {
      if (user.result.n === 0) return Promise.reject({ status: 404, msg: 'User not found' })
      res.status(204).send({ msg: 'Successful Deletion' });
    })
    .catch(next)
};

exports.getUserSavedWorkouts = (req, res, next) => {
  SavedWorkouts.find()
    .then((savedWorkouts) => {
      const userSaved = savedWorkouts.map(workout => {
        if (workout.saved_by === req.params.username) {
          return workout;
        };
      }).filter(user => user);
      res.status(200).send({ userSaved });
    })
    .catch(next);
};
