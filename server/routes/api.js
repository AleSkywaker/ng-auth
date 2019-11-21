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
  let usuario = {};
  usuario.email = req.body.email;
  usuario.password = req.body.password;

  let user = new User(usuario);
  console.log(user);
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err);
      res.status(400).send(err.errmsg);
    } else {
      registeredUser.email = ':)';
      res.status(200).send(registeredUser);
    }
  });
});

router.post('/login', (req, res) => {
  let usuario = {};
  usuario.email = req.body.email;
  usuario.password = req.body.password;

  User.findOne({ email: usuario.email }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (!user) {
        res.status(401).send('usuario no encontrado');
      } else {
        if (user.password !== usuario.password) {
          res.status(401).send('algo ha ido mal');
        } else {
          res.status(200).send(user);
        }
      }
    }
  });
});

router.get('/libros', (req, res) => {
  let libros = [{ titulo: 'El señor de lo sanillo', autor: 'No se' }];
  res.json(libros);
});
router.get('/librosPro', (req, res) => {
  let librosCaros = [{ titulo: 'El retorno de jedi', autor: 'varios' }];
  res.json(librosCaros);
});

module.exports = router;
