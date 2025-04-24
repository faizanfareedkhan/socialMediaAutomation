const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const SocialMedia = require('../models/socialMedia');

// Facebook Strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
}, (accessToken, refreshToken, profile, done) => {
  SocialMedia.findOne({ platform: 'Facebook', userId: profile.id }, (err, existingUser) => {
    if (existingUser) return done(null, existingUser);
    const newUser = new SocialMedia({
      platform: 'Facebook',
      userId: profile.id,
      profileData: {
        name: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        accessToken,
      },
    });
    newUser.save().then(user => done(null, user));
  });
}));

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  SocialMedia.findOne({ platform: 'Google', userId: profile.id }, (err, existingUser) => {
    if (existingUser) return done(null, existingUser);
    const newUser = new SocialMedia({
      platform: 'Google',
      userId: profile.id,
      profileData: {
        name: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        accessToken,
      },
    });
    newUser.save().then(user => done(null, user));
  });
}));

// LinkedIn Strategy
passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/linkedin/callback',
}, (accessToken, refreshToken, profile, done) => {
  SocialMedia.findOne({ platform: 'LinkedIn', userId: profile.id }, (err, existingUser) => {
    if (existingUser) return done(null, existingUser);
    const newUser = new SocialMedia({
      platform: 'LinkedIn',
      userId: profile.id,
      profileData: {
        name: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        accessToken,
      },
    });
    newUser.save().then(user => done(null, user));
  });
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => SocialMedia.findById(id, (err, user) => done(err, user)));
