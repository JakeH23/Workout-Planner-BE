const Users = require('../models/Users');
const Workout = require('../models/Workout');

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
      res.send({ user });
    })
    .catch(next);
};

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
      console.log(user)
      if (user.n === 0) return Promise.reject({ status: 404, msg: 'User not found' })
      res.status(204).send({ msg: 'Successful Deletion' });
    })
    .catch(next)
};

exports.getWorkoutByUserId = (req, res, next) => {
  Users.find({ user_name: req.params.username })
    .then((user) => {
      if (!user.length) return Promise.reject({ status: 404, msg: 'User not found' });
      [user] = user;

      res.send({ saved_workouts: user.saved_workouts });
    })
    .catch(next);
};
