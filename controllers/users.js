const Users = require("../models/Users");

exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then(users => {
      if (!users.length)
        return Promise.reject({ status: 404, msg: "user not found" });
      res.send({ users });
    })
    .catch(next);
};

exports.getSingleUser = (req, res, next) => {};

exports.getWorkoutByUserId = (req, res, next) => {};
