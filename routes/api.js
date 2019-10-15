const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', (req, res) => {
  res.send('Welcome to The Loot API');
});

// Team Routes
router.get('/teams', controllers.team.getTeams);
router.post('/teams', controllers.team.createTeam);
router.delete('/teams/:id', controllers.team.removeTeam);
router.put('/teams/:id', controllers.team.updateTeam);

// PLayer Routes
router.post('/player', controllers.player.addPlayer);
router.get('/player', controllers.player.getAllPlayers);
router.get('/player/:id', controllers.player.getOnePlayer);
router.delete('/player/:id', controllers.player.deletePlayer);
router.put('/player/:id', controllers.player.updatePlayer);

module.exports = router;
