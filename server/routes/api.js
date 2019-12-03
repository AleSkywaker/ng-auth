const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

require('dotenv').config();
const db = 'mongodb://localhost/users';

mongoose.connect(db, err => {
  if (err) {
    console.log('Error' + err);
  } else {
    console.log('conectado a mongoDB');
  }
});

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('invalid request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === null) {
    return res.status(401).send('missing credentials');
  }
  let payload = jwt.verify(token, 'verydificultsecretkey');
  if (!payload) {
    return res.status(401).send('Unauthorized request');
  }
  req.userId = payload.subject;
  next();
}

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
      // registeredUser.email = ':)';
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, SECRET_KEY);
      res.status(200).send({ token });
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
          let payload = { subject: user._id };
          let token = jwt.sign(payload, SECRET_KEY);
          res.status(200).send({ token });
        }
      }
    }
  });
});

router.get('/libros', (req, res) => {
  let libros = [
    { titulo: 'El señor de lo sanillo', autor: 'No se', date: Date.now() },
    { titulo: 'El señor de lo sanillo', autor: 'No se', date: Date.now() },
    { titulo: 'El señor de lo sanillo', autor: 'No se', date: Date.now() }
  ];
  res.json(libros);
});
router.get('/librosPro', verifyToken, (req, res) => {
  let librosCaros = [
    { titulo: 'El retorno de jedi (PRO)', autor: 'varios', date: Date.now() },
    { titulo: 'El retorno de jedi (PRO)', autor: 'varios', date: Date.now() },
    { titulo: 'El retorno de jedi (PRO)', autor: 'varios', date: Date.now() }
  ];
  res.json(librosCaros);
});

module.exports = router;
