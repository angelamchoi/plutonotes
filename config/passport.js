const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

// Talk to google and handle the response
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.SESSION_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    // THIS IS THE VERIFY Callback Fn.
    function(accessToken, refreshToken, profile, cb) {
      User.findOne({ 'googleId': profile.id })
            .then(function (user) {
                if (user) {
                    return cb(null, user);
                } else {
                    var newUser = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id
                    });
                    return newUser.save();
                }
            })
            .then(function (newUser) {
                return cb(null, newUser);
            })
            .catch(function (err) {
                return cb(err)
            });
    }
));

// Encode user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Decode user
passport.deserializeUser(function (id, done) {
User.findById(id)
    .then((user) => {
      done(null,user);
    })
    .catch((err) => done(err));
});