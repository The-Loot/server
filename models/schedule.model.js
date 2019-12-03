const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  teamOne_name: {
    type: String,
    ref: 'Team',
  },
  teamTwo_name: {
    type: String,
    ref: 'Team',
  },
  location: String,
  date: String,
  time: String,
  division: String,
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
