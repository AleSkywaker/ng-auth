const express = require('express');
const router = express.Router();

const User = require('../models/user');

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

router.post('/register', (req, res) => {
  let userData = req.body;
  console.log(userData);
  let usu = new User(userData);
  usu.save((err, registeredUser) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});

module.exports = router;
