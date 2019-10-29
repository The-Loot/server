const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  points: Number,
  rebounds: Number,
  assists: Number,
  steals: Number,
  blocks: Number,
});

const Stats = mongoose.model('Stats', statsSchema);
module.exports = Stats;
