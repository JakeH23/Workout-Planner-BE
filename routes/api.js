const apiRouter = require('express').Router();
const exerciseRouter = require('../routes/exercises');

apiRouter.use('/exercises', exerciseRouter);


module.exports = apiRouter;
