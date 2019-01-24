exports.formatExercises = (exercises, userDocs) => exercises.map((exercise) => {
  const findId = userDocs.find(user => user.user_name === exercise.created_by)._id;

  return {
    ...exercise,
    created_by: findId,
  };
});

exports.formatWorkouts = (workouts, exerciseDocs, userDocs) => workouts.map((workout) => {
  const findExerciseId = exerciseDocs.find(exercise => workout.exercises.find(ex => ex === exercise.title))._id;
  const findUserId = userDocs.find(user => user.user_name === workout.created_by)._id;
  return {
    ...workout,
    created_by: findUserId,
    exercises: findExerciseId,
  };
});

exports.formatCompleteWorkouts = (completedWorkouts, workoutDocs, userDocs) => completedWorkouts.map((completedWorkout) => {
  const findWorkoutId = workoutDocs.find(workout => workout.name === completedWorkout.workout)._id;
  const findUserId = userDocs.find(user => user.user_name === completedWorkout.user)._id;

  return {
    ...completedWorkout,
    workout: findWorkoutId,
    user: findUserId,
  };
});
