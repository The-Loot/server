require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Setup a Mongoose Connection
const devConnectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}/theloot?retryWrites=true&w=majority`;
const mongoDB = process.env.DB_URL || devConnectionUrl;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('connecting', () => console.log(`Server connecting to mongo database.`));
db.on('connected', () => console.log(`Server connected to mongo database.`));
db.on('reconnected', () => console.log(`Server reconnected to mongo database.`));
db.on('disconnecting', () => console.log(`Server disconnecting from mongo database.`));
db.on('disconnected', () => console.log(`Server disconnected from mongo database.`));
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));

app.listen(5000, () => {
  console.log('The Loot Server is running on Port 5000');
});
