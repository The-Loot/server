const mongoose = require('mongoose');

// mongoose.connection.on('connecting', () => console.log(`Server connecting to mongo database.`));

// mongoose.connection.on('connected', () => console.log(`Server connected to mongo database.`));

// mongoose.connection.on('reconnected', () => console.log(`Server reconnected to mongo database.`));

// mongoose.connection.on('disconnecting', () => console.log(`Server disconnecting from mongo database.`));

// mongoose.connection.on('disconnected', () => console.log(`Server disconnected from mongo database.`));

/**
 * Models
 */

module.exports.Player = require('./player.model');
module.exports.Stats = require('./stats.model');
module.exports.Team = require('./team.model');
