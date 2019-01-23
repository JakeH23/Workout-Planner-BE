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
