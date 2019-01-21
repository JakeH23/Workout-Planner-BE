const apiRouter = require('express').Router();
const exerciseRouter = require('../routes/exercises');
const userRouter = require('../routes/users');
const workoutRouter = require('../routes/workouts');
const muscleRouter = require('../routes/muscles');

apiRouter.use('/exercises', exerciseRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/workouts', workoutRouter);
apiRouter.use('/muscles', muscleRouter);

module.exports = apiRouter;
