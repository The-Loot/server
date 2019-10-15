const Team = require('../models/team.model');

const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    res.send(teams);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createTeam = async (request, response, next) => {
  try {
    const team = new Team({
      name: request.body.name,
      division: request.body.division,
      players: [],
    });

    await Team.create(team);
    response.send('Team was created');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const removeTeam = async (request, response, next) => {
  try {
    const deleted = await Team.deleteOne({ _id: request.params.id });
    response.send(deleted);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateTeam = async (request, response, next) => {
  try {
    const team = request.body;
    const updatedTeam = await Team.updateOne(team);
    response.send(updatedTeam);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getTeams,
  createTeam,
  removeTeam,
  updateTeam,
};
