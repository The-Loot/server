const Player = require('../models/player.model');
const Team = require('../models/team.model');

const getOnePlayer = async (request, response, next) => {
  try {
    const playerId = request.params.id;
    const player = await Player.findOne({ _id: playerId });
    response.send(player);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getAllPlayers = async (request, response, next) => {
  try {
    const players = await Player.find();
    response.send(players);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const addPlayer = async (request, response, next) => {
  try {
    const teamName = request.body.team;

    // Find team by name
    const getTeam = await Team.find({ name: teamName });

    // Create the Player using Player Model
    const playerInfo = new Player({
      team_id: getTeam[0]._id,
      name: request.body.name,
      playerNum: request.body.number,
      age: request.body.age,
      height: request.body.height,
      weight: request.body.weight,
      stats: {
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
      },
    });

    // Get players array from Team
    const teamPlayerArray = getTeam[0].players;

    // Push the player model into the team array
    teamPlayerArray.push(playerInfo._id);

    // Update the the player array for the correct team
    await Team.findByIdAndUpdate(getTeam[0]._id, { $set: { players: teamPlayerArray } }, { new: true });

    // Add player to player database
    await Player.create(playerInfo);
    response.send('Player was added');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deletePlayer = async (request, response, next) => {
  try {
    const playerId = request.params.id;

    // Delete Player from Team
    const player = await Player.findById({ _id: playerId });
    const team = await Team.findById({ _id: player.team_id });
    const index = team.players.indexOf(playerId);
    if (index > -1) {
      team.players.splice(index, 1);
    }

    // Update the team
    await Team.findOneAndUpdate({ _id: player.team_id }, { players: team.players }, { new: true });

    // Delete Player from Player Database
    await Player.deleteOne({ _id: playerId });

    response.send('Player Deleted');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updatePlayer = async (request, response, next) => {
  try {
    const playerId = request.params.id;
    const playerInfo = request.body;
    const updatedPlayer = await Player.updateOne({ _id: playerId }, playerInfo);
    response.send(updatedPlayer);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getOnePlayer,
  getAllPlayers,
  addPlayer,
  deletePlayer,
  updatePlayer,
};
