exports.formatExercises = (exercises, userDocs) => {
  return exercises.map(exercise => {
    const findId = userDocs.find(user => {
      return user.user_name === exercise.created_by;
    })._id;

    return {
      ...exercise,
      created_by: findId
    };
  });
};

exports.formatWorkouts = (workouts, exerciseDocs, userDocs) => {
  return workouts.map(workout => {
    const findExerciseId = exerciseDocs.find(exercise => {
      return workout.exercises.map(exercise => exercise === exercise.name);
    })._id;
    const findUserId = userDocs.find(user => {
      return user.user_name === workout.created_by;
    })._id;
    return {
      ...workout,
      created_by: findUserId,
      exercises: findExerciseId
    };
  });
};
