const mongoose = require('mongoose');
const nconf = require('nconf');

// Set up nconf
nconf.argv().env().file({ file: './config.json' });

// Set up mongoose connection
const mongoDB = 'mongodb+srv://' + nconf.get('MONGODB_USERNAME') + ':' + nconf.get('MONGODB_PASSWORD') + '@cluster0.okx3gdx.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));