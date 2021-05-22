const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');

// login goes to create notes
// this is the users' base page!!
router.get('/', function(req, res) {
  res.render('profile')
});

router.get('/users', function(req,res){
  res.render('profile');
})

// my notes
router.get('/mynotes', function(req,res) {
  res.render('mynotes')
});

router.get('/mynotes/view', function(req,res) {
  res.render('mynotesview')
});

// create page
router.get('/create', function(req,res) {
  res.render('create')
});







module.exports = router;