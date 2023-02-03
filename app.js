const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');
const characterRouter = require('./routes/character');
const comboRouter = require('./routes/combo');
const port = 3000;

// Mongo Config
require('./mongoConfig');

const app = express();

// Extracts body of incoming request and makes it accessible on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Routes
app.use('/api', indexRouter);
app.use('/api/characters', characterRouter);
app.use('/api/combos', comboRouter);

app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});

module.exports = app;