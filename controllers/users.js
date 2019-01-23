<<<<<<< HEAD
const Users = require("../models/Users");
const Workout = require("../models/Workout");
=======
const Users = require('../models/Users');
>>>>>>> 57aea0af87efcae2ff0c76ffc925ccd47289dc05

exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then((users) => {
      if (!users.length) return Promise.reject({ status: 404, msg: 'user not found' });
      res.send({ users });
    })
    .catch(next);
};

exports.getSingleUser = (req, res, next) => {
  Users.find({ user_name: req.params.username })
    .then((user) => {
      if (!user.length) return Promise.reject({ status: 404, msg: 'user not found' });
      [user] = user;
      res.send({ user });
    })
    .catch(next);
};

exports.getWorkoutByUserId = (req, res, next) => {};
