const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const db = 'mongodb://localhost/users';

mongoose.connect(db, err => {
  if (err) {
    console.log('Error' + err);
  } else {
    console.log('conectado a mongoDB');
  }
});

router.get('/', (req, res) => {
  res.send('From API route');
});

module.exports = router;
