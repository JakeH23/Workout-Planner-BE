const mongoose = require('mongoose');
const Muscles = require('../models/Muscles');

const seedDB = ({ muscles }) => mongoose.connection
  .dropDatabase()
  .then(() => Promise.all([Muscles.insertMany(muscles)]));


module.exports = { seedDB };
