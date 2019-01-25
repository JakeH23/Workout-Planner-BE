const mongoose = require('mongoose');

const { Schema } = mongoose;

const MusclesSchema = new Schema({
  muscle_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('muscles', MusclesSchema);
