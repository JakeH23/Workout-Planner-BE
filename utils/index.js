const Workouts = require('../models/Workout');


exports.formatExercises = (exercises, userDocs) => exercises.map((exercise) => {
  const userName = userDocs.find(user => user.user_name === exercise.created_by).user_name;
  const findId = userDocs.find(user => user.user_name === exercise.created_by)._id;

  return {
    ...exercise,
    created_by: findId,
    user_name: userName,

  };
});

exports.formatWorkouts = (workouts, exerciseDocs, userDocs) => workouts.map((workout) => {
  const arr = [];
  exerciseDocs.find(exercise => workout.exercises.forEach((ex) => {
    if (ex === exercise.title) arr.push(exercise.title);
  }));


  const findUserId = userDocs.find(user => user.user_name === workout.created_by)._id;
  const findUserName = userDocs.find(user => user.user_name === workout.created_by).user_name;

  return {
    ...workout,
    created_by: findUserId,
    user_name: findUserName,
    exercises: arr,
  };
});

exports.formatCompleteWorkouts = (completedWorkouts, workoutDocs) => completedWorkouts
  .map((completedWorkout) => {
    const findWorkoutId = workoutDocs.find(workout => workout.name
    === completedWorkout.workout)._id;
    return {
      ...completedWorkout,
      workout: findWorkoutId,
    };
  });


exports.findWorkout = async (workoutName) => {
  const newWorkout = await Workouts.find({ name: workoutName }).then(workout => (workout));
  return newWorkout;
};
