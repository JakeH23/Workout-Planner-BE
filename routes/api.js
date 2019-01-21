const apiRouter = require('express').Router();
const exerciseRouter = require('../routes/exercises');
const userRouter = require('../routes/users');

apiRouter.use('/exercises', exerciseRouter);
apiRouter.use('/users', userRouter);


module.exports = apiRouter;
