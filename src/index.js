const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});


module.exports = app;