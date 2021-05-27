const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
// Navigation bar - profile
router.get('/', function(req, res) {
  res.render('profile')
});

router.get('/users', function(req,res){
  res.render('profile');
})

// // Navigation bar - create
router.get('/users/create', function(req,res) {
  res.render('create')
});

router.get('/users/mynotes/view', function(req,res) {
  res.render('mynotesview')
});


//edit 
router.get('/users/mynotes/edit', function(req,res) {
  res.render('edit')
});

// all notes
router.get('/users/mynotes', isLoggedIn, usersCtrl.allNotes);

// create
router.post('/users/mynotes', usersCtrl.create);

//delete
router.delete('/users/mynotes/:id', isLoggedIn, usersCtrl.delete);

//edit
router.put('/users/mynotes/:id', isLoggedIn, usersCtrl.edit);


module.exports = router;