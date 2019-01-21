const usersRouter = require('express').Router();

const { getSingleUser } = require('../controllers/getSingleUser');

usersRouter.route('/:username').get(getSingleUser);

module.exports = usersRouter;
