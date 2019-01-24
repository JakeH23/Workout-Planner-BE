<<<<<<< HEAD
const mongoose = require('mongoose');
const  seedDB  = require('../db/seed');
const { DB_URL } = require('../config');
=======
const mongoose = require("mongoose");
const seedDB = require("../db/seed");
const { DB_URL } = require("../config");
>>>>>>> 72e1515288fd5df9ac7b8ea860a7b96fe7a1be81
const {
  muscles,
  users,
  exercises,
  workouts,
  completedWorkouts
} = require("./testData/index");

mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true }
  )
  .then(() =>
    seedDB({
      muscles,
      users,
      exercises,
      workouts,
      completedWorkouts
    })
  )
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));
