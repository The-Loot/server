import mongoose, { Schema } from 'mongoose';

const playerSchema = require('./player.model').schema;

const teamSchema = new mongoose.Schema({
  name: String,
  divison: String,
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Player',
    },
  ],
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
