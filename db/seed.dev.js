<<<<<<< HEAD
const mongoose = require("mongoose");
const { seedDB } = require("../db/seed");
const { DB_URL } = require("../config");
const { muscles, users } = require("./testData/index");
=======
const mongoose = require('mongoose');
const { seedDB } = require('../db/seed');
const { DB_URL } = require('../config');
const muscles = require('./testData/muscles.json');
>>>>>>> f89e70c445297f600c0f6fcf484e6027fe6de3ba

mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true },
  )
  .then(() => seedDB({ muscles, users }))
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));
