const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const articles = require('./routes/articles');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use('/users', users);
app.use('/articles', articles);

mongoose.connect('mongodb://localhost/jumadi-hacktivpress', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.listen(3000);

module.exports = app;
