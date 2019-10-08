import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  console.log('You are in the router');
  response.send('Welcome to The Loot');
});

router.use('/api', require('./api'));

module.exports = router;
