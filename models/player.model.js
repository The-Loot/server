const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  name: String,
  playerNum: Number,
  age: Number,
  height: String,
  weight: Number,
  stats: {
    points: Number,
    rebounds: Number,
    assists: Number,
    steals: Number,
    blocks: Number,
  },
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
