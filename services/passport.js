const keys = require("../config/keys");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;




passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access token: ' + accessToken);
            console.log('refresh token: ' + refreshToken);
            console.log('profile: ' + JSON.stringify(profile));
            console.log('done: ' + done);
        }
    )
);