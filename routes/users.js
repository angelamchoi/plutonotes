const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('YOU ARE IN!!!!');
});

module.exports = router;