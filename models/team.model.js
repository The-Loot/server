const mongoose = require('mongoose');

const playerSchema = require('./player.model').schema;

const teamSchema = new mongoose.Schema({
  name: String,
  division: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player',
    },
  ],
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
