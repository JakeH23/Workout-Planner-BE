const mongoose = require("mongoose");
const { seedDB } = require("../db/seed");
const { DB_URL } = require("../config");
const muscles = require("./testData/muscles.json");

mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true }
  )
  .then(() => seedDB({ muscles }))
  .then(() => mongoose.disconnect())
  .catch(err => console.log(err));
