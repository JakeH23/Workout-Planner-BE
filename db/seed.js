const mongoose = require("mongoose");
const {
  Muscles,
  Users,
  CompletedWorkout,
  Exercise,
  Workout
} = require("../models/index");

const {
  formatExercises,
  formatWorkouts,
  formatCompleteWorkouts
} = require("../utils/index");

const seedDB = ({ muscles, users, exercises, workouts, completedWorkouts }) =>
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
    })
    .then(([exerciseDocs, userDocs, muscleDocs]) => {
      const formattedWorkouts = formatWorkouts(
        workouts,
        exerciseDocs,
        userDocs
      );
      const insertedWorkouts = Workout.insertMany(formattedWorkouts);
      return Promise.all([
        insertedWorkouts,
        exerciseDocs,
        userDocs,
        muscleDocs
      ]).then(([workoutDocs, exerciseDocs, userDocs, muscleDocs]) => {
        const formattedCompletedWorkouts = formatCompleteWorkouts(
          completedWorkouts,
          workoutDocs,
          userDocs
        );
        const insertedCompletedWorkouts = CompletedWorkout.insertMany(
          formattedCompletedWorkouts
        );
        return Promise.all([
          insertedCompletedWorkouts,
          workoutDocs,
          exerciseDocs,
          userDocs,
          muscleDocs
        ]);
      });
    });

module.exports = { seedDB };
