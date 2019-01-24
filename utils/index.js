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
      return workout.exercises.find(ex => {
        return ex === exercise.title;
      });
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

exports.formatCompleteWorkouts = (completedWorkouts, workoutDocs, userDocs) => {
  return completedWorkouts.map(completedWorkout => {
    const findWorkoutId = workoutDocs.find(workout => {
      return workout.name === completedWorkout.workout;
    })._id;
    const findUserId = userDocs.find(user => {
      return user.user_name === completedWorkout.user;
    })._id;

    return {
      ...completedWorkout,
      workout: findWorkoutId,
      user: findUserId
    };
<<<<<<< HEAD
  })});
=======
  });
};
>>>>>>> 72e1515288fd5df9ac7b8ea860a7b96fe7a1be81
