const Users = require('../models/Users');
const Workouts = require('../models/Workout')

exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then((users) => {
      if (!users.length) return Promise.reject({ status: 404, msg: 'user not found' });
      res.status(200).send({ users });
    })
    .catch(next);
};

exports.getSingleUser = (req, res, next) => {
  Users.find({ user_name: req.params.username })
    .then((user) => {
      if (!user.length) return Promise.reject({ status: 404, msg: 'user not found' });
      [user] = user;
      res.status(200).send({ user });
    })
    .catch(next);
};

exports.getWorkoutByUserId = (req, res, next) => {
  Workouts.find({ belongs_to: req.params.username })
    .then((userWorkouts) => {
      if (!userWorkouts.length) return Promise.reject({ status: 404, msg: 'no workouts found'});
      console.log(userWorkouts);
      res.status(200).send({ userWorkouts });
    })
    .catch(next);
};
