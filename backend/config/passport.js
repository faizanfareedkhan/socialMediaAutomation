const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../modals/userDetails');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/api/user/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const { id, displayName, emails } = profile;
    const email = emails[0].value;

    let user = await User.findOne({ email });

    if (user) {
      // If user exists, update googleId if not set
      if (!user.googleId) {
        user.googleId = id;
        await user.save();
      }
    } else {
      // If user doesn't exist, create new one
      user = new User({
        firstName: displayName.split(' ')[0],
        lastName: displayName.split(' ')[1] || '',
        email,
        googleId: id,
        password: '', // Password not required for social auth
        profile: {}
      });
      await user.save();
    }

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
