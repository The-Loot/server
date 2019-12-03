const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', (req, res) => {
  res.send('Welcome to The Loot API');
});

// Team Routes
router.get('/teams', controllers.team.getTeams);
router.post('/teams', controllers.team.createTeam);
router.delete('/teams/:id', controllers.team.removeTeam);
router.patch('/teams/:id', controllers.team.updateTeam);

// PLayer Routes
router.post('/player', controllers.player.addPlayer);
router.get('/player', controllers.player.getAllPlayers);
router.get('/player/:id', controllers.player.getOnePlayer);
router.get('/players/team/:id', controllers.player.getPlayersByTeam);
router.delete('/player/:id', controllers.player.deletePlayer);
router.put('/player/:id', controllers.player.updatePlayer);

// User Routes
router.post('/login', controllers.user.login);
router.post('/signup', controllers.user.signup);

// Schedule Routes
router.post('/schedule', controllers.schedule.createSchedule);
router.put('/schedule/:id', controllers.schedule.updateSchedule);
router.get('/teamschedule/:id', controllers.schedule.getSchedulesByTeam);
router.get('/schedule', controllers.schedule.getAllSchedules);
router.delete('/schedule/:id', controllers.schedule.deleteSchedule);

module.exports = router;
