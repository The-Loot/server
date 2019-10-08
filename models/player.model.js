import mongoose, { Schema } from 'mongoose';

const statsSchema = require('./stats.model').schema;

const playerSchema = new mongoose.Schema({
  name: String,
  playerNum: Number,
  age: Number,
  height: String,
  weight: Number,
  stats: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Stats',
    },
  ],
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
