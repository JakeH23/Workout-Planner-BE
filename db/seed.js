const mongoose = require('mongoose');
const Muscles = require('../models/Muscles');
const Users = require('../models/Users');

const seedDB = ({ muscles, users }) => mongoose.connection
  .dropDatabase()
  .then(() => Promise.all([Muscles.insertMany(muscles), Users.insertMany(users)]));

module.exports = { seedDB };
