const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
// Navigation bar 
router.get('/', function(req, res) {
  res.render('create')
});

router.get('/users', function(req,res){
  res.render('create');
})

// create
router.get('/users/create', function(req,res) {
  res.render('create')
});
//my notes
router.get('/users/mynotes/view', function(req,res) {
  res.render('mynotesview')
});

//edit 
router.get('/users/mynotes/edit', function(req,res) {
  res.render('edit')
});

//public notes
router.get('/users/publicnotes', function(req,res) {
  res.render('publicnotes');
});

router.get('/users/publicnotes/view', function(req,res) {
  res.render('publicviews');
});

// NOTES Routes
// all notes
router.get('/users/mynotes', usersCtrl.allNotes);
// create
router.post('/users/mynotes', isLoggedIn, usersCtrl.create);
//delete
router.delete('/users/mynotes/:id', isLoggedIn, usersCtrl.delete);
//edit
router.put('/users/mynotes/:id', isLoggedIn, usersCtrl.edit);
//update
router.post('/users/mynotes/:id', isLoggedIn, usersCtrl.updateNote);
//show
router.get('/users/mynotes/:id', usersCtrl.showNote);

//PUBLIC NOTES Routes
router.get('/users/publicnotes/:id', usersCtrl.publicNote);

module.exports = router;