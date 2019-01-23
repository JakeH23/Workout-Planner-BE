exports.formatExercises = (exercises, userDocs) =>
  exercises.map(exercise => {
    const findId = userDocs.find(user => user.user_name === exercise.created_by)
      ._id;

  return {
    ...exercise,
    created_by: findId,
  };
});

exports.formatWorkouts = (workouts, exerciseDocs, userDocs) => workouts.map((workout) => {
  const arr = [];
  const findExerciseId = exerciseDocs.forEach((exercise) => {
    const exId = new Promise((resolve, reject) => workout.exercises.find((ex) => {
      if (ex === exercise.title) arr.push(exercise._id);
      if (workout.exercises.length === arr.length) resolve(arr);
    }));
    return exId.then(val => val);
    //   if (arr.length === workout.exercises.length) return arr;
  });

exports.formatWorkouts = (workouts, exerciseDocs, userDocs) =>
  workouts.map(workout => {
    const arr = [];
    const findExerciseId = exerciseDocs.forEach(exercise => {
      const exId = new Promise((resolve, reject) =>
        workout.exercises.find(ex => {
          if (ex === exercise.title) arr.push(exercise._id);
          if (workout.exercises.length === arr.length) resolve(arr);
        })
      );
      return exId.then(val => val);
      //   if (arr.length === workout.exercises.length) return arr;
    });

    const findUserId = userDocs.find(
      user => user.user_name === workout.created_by
    )._id;
    return {
      ...workout,
      created_by: findUserId,
      exercises: findExerciseId
    };
  });

exports.formatCompleteWorkouts = (completedWorkouts, workoutDocs, userDocs) =>
  completedWorkouts.map(completedWorkout => {
    const findWorkoutId = workoutDocs.find(
      workout => workout.name === completedWorkout.workout
    )._id;
    const findUserId = userDocs.find(
      user => user.user_name === completedWorkout.user
    )._id;

    return {
      ...completedWorkout,
      workout: findWorkoutId,
      user: findUserId
    };
  });
