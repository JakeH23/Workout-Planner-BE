const mongoose = require('mongoose');
const  seedDB  = require('../db/seed');
const { DB_URL } = require('../config');
const {
  muscles,
  users,
  exercises,
  workouts,
  completedWorkouts,
} = require('./testData/index');

mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true },
  )
  .then(() => seedDB({
    muscles, users, exercises, workouts, completedWorkouts,
  }))
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));
