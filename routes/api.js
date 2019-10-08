const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', (req, res) => {
  res.send('Welcome to The Loot API');
});

router.get('/teams', controllers.team.getTeams);
router.post('/teams', controllers.team.createTeam);

module.exports = router;
