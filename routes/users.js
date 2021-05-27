const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
// login goes to profile
// this is the users' base page!!
router.get('/', function(req, res) {
  res.render('profile')
});

router.get('/users', function(req,res){
  res.render('profile');
})

// my notes
// router.get('/users/mynotes', isLoggedIn, function(req,res) {
//   res.render('mynotes')
// });

router.get('/users/mynotes/view', function(req,res) {
  res.render('mynotesview')
});

// create note
router.get('/users/create', function(req,res) {
  res.render('create')
});

router.get('/users/mynotes', isLoggedIn, usersCtrl.allNotes);
router.post('/users/mynotes', usersCtrl.create);

//delete
router.delete('/users/mynotes/:id', isLoggedIn, usersCtrl.destroy);

//edit
router.delete('/users/mynotes/:id/edit', isLoggedIn, usersCtrl.edit);


module.exports = router;