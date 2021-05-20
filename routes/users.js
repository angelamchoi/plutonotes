const router = require('express').Router();
const usersCtrl = require('../controllers/users');

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

// GET /users
router.get('/users', usersCtrl.index);

module.exports = router;
