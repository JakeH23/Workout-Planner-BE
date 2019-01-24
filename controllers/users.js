const Users = require("../models/Users");
const Workout = require("../models/Workout");

exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then(users => {
      if (!users.length)
        return Promise.reject({ status: 404, msg: "user not found" });
      res.send({ users });
    })
    .catch(next);
};

exports.getSingleUser = (req, res, next) => {
  Users.find({ user_name: req.params.username })
    .then(user => {
      if (!user.length)
        return Promise.reject({ status: 404, msg: "user not found" });
      [user] = user;
      res.send({ user });
    })
    .catch(next);
};

exports.getWorkoutByUserId = (req, res, next) => {};
