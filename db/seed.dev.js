const mongoose = require('mongoose');
const { seedDB } = require('../db/seed');
const { DB_URL } = require('../config');
const { muscles, users } = require('./testData/index');

mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true },
  )
  .then(() => seedDB({ muscles, users }))
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));
