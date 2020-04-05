const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const GoogleStratgey = require('./googleStrategy');
const User = require('../db/models/user');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const matchingUser = await User.findOne({ _id: id }).exec();
  done(null, matchingUser);
});

// ==== Register Strategies ====
passport.use(LocalStrategy);
passport.use(GoogleStratgey);

module.exports = passport;
