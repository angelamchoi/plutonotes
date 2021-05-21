const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');

// login 
router.get('/', function(req, res) {
  res.render('login')
  // res.send('you are in');
});

// create notes

// my notes

// public notes





module.exports = router;