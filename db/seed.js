const mongoose = require("mongoose");
// const {
//   Muscles,
//   Users,
//   CompletedWorkout,
//   Exercise,
//   Workout
// } = require("../models/index");
const Exercise = require("../models/Exercise");
const Users = require("../models/Users");
const Workout = require("../models/Workout");
const Muscles = require("../models/Muscles");
const { formatExercises } = require("../utils/index");

const seedDB = ({ muscles, users, exercises, workouts }) =>
  mongoose.connection
    .dropDatabase()
    .then(() => Promise.all([Muscles.insertMany(muscles)]))
    .then(([muscleDocs]) => {
      return Promise.all([Users.insertMany(users), muscleDocs]);
    })
    .then(([userDocs, muscleDocs]) => {
      const formattedExercises = formatExercises(exercises, userDocs);
      const insertedExercises = Exercise.insertMany(formattedExercises);
      return Promise.all([insertedExercises, userDocs, muscleDocs]);
    });

module.exports = { seedDB };
