const apiRouter = require('express').Router();
const exerciseRouter = require('../routes/exercises');
const userRouter = require('../routes/users');
const workoutRouter = require('../routes/workouts');

apiRouter.use('/exercises', exerciseRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/workouts', workoutRouter);

module.exports = apiRouter;
