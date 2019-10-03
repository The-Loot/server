import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  console.log('You are in the router');
  response.send('Welcome to The Loot');
});

router.get('/api/', (request, response) => {
  response.send('Welcome to The Loot API');
});
