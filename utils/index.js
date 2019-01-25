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
  const arr = []
  const findExerciseId = exerciseDocs.find(exercise => workout.exercises.forEach(ex => {
    if (ex === exercise.title) arr.push(exercise._id)
  }))


  const findUserId = userDocs.find(user => user.user_name === workout.created_by)._id;
  const findUserName = userDocs.find(user => user.user_name === workout.created_by).user_name;

  return {
    ...workout,
    created_by: findUserId,
    user_name: findUserName,
    exercises: arr
  };
});

exports.formatCompleteWorkouts = (completedWorkouts, workoutDocs, userDocs) => completedWorkouts.map((completedWorkout) => {
  const findWorkoutId = workoutDocs.find(workout => workout.name === completedWorkout.workout)._id;
  const findUserId = userDocs.find(user => user.user_name === completedWorkout.user)._id;
  const findUserName = userDocs.find(user => user.user_name === completedWorkout.user).user_name;
  return {
    ...completedWorkout,
    workout: findWorkoutId,
    user_id: findUserId,
    user_name: findUserName,
  };
});


exports.findWorkout = async (workoutName) => {
  const newWorkout = await Workouts.find({ name: workoutName }).then(workout => (workout));

  return newWorkout;
};