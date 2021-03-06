const router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
  res.render('index', { title: 'plutonotes' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/users',
    failureRedirect: '/users',
  })
);

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

//home page
router.get('/home', function(req,res) {
  res.render('index');
})

module.exports = router;

