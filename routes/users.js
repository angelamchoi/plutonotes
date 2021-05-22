const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');

// login goes to profile
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

router.post('/mynotes', function(req,res) {
  console.log(req.body.title);
  console.log(req.body.content);
});







module.exports = router;