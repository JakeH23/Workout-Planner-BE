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
    const arr = [];
    const findExerciseId = exerciseDocs.forEach(exercise => {
      const exId = new Promise((resolve, reject) => {
        return workout.exercises.find(ex => {
          if (ex === exercise.title) arr.push(exercise._id);
          if (workout.exercises.length === arr.length) resolve(arr);
        });
      });
      return exId.then(val => console.log(val));
    });

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
  });
};
