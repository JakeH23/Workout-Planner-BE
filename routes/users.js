const usersRouter = require('express').Router();

const { getSingleUser } = require('../controllers/users');

usersRouter.route('/:username').get(getSingleUser);

module.exports = usersRouter;
