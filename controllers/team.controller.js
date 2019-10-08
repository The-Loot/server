const Team = require('../models/team.model');

const getTeams = (req, res) => {
  res.send('Hi, You read all the teams');
};

const createTeam = (request, response, next) => {
  const team = new Team({
    name: request.body.name,
    division: request.body.division,
    players: [],
  });

  response.send(team);

  // Team.create(team, function(err, team) {
  //   if (err) return next(err);
  //   res.send('Team was created');
  // });
};

module.exports = {
  getTeams,
  createTeam,
};
