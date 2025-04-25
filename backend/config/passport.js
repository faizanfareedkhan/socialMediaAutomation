const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../modals/userDetails');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/users/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value;

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({
      firstName: profile.name.givenName,
      lastName: profile.name.familyName || '',
      email,
      password: 'google_auth',
      profile: { googleId: profile.id }
    });
  }

  return done(null, user);
}));

passport.use(new FacebookStrategy({
  clientID: process.env.FB_APP_ID,
  clientSecret: process.env.FB_APP_SECRET,
  callbackURL: '/api/users/facebook/callback',
  profileFields: ['id', 'emails', 'name']
}, async (accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value;

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({
      firstName: profile.name.givenName,
      lastName: profile.name.familyName || '',
      email,
      password: 'facebook_auth',
      profile: { facebookId: profile.id }
    });
  }

  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
