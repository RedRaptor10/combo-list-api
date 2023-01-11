const express = require('express');
const indexRouter = require('./routes/index');
const comboRouter = require('./routes/combo');
const port = 3000;

// Mongo Config
require('./mongoConfig');

const app = express();

// Extracts body of incoming request and makes it accessible on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', indexRouter);
app.use('/api/combos', comboRouter);

app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});

module.exports = app;