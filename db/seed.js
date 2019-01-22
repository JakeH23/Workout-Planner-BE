const mongoose = require("mongoose");
const Muscles = require("../models/Muscles");
const Users = require("../models/Users");

const seedDB = ({ muscles, users }) =>
  mongoose.connection
    .dropDatabase()
    .then(() =>
      Promise.all([Muscles.insertMany(muscles), Users.insertMany(users)])
    );

<<<<<<< HEAD
=======

>>>>>>> f89e70c445297f600c0f6fcf484e6027fe6de3ba
module.exports = { seedDB };
