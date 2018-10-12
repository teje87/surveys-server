const keys = require("../config/keys");
var passport = require('passport');
const mongoose = require('mongoose');
var GoogleStrategy = require('passport-google-oauth20').Strategy;



const User = mongoose.model('users')


passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId : profile.id})
                .then((existingUser)=> {
                    if(existingUser){
                        console.log("the user exists")
                    }else{
                        new User({googleId : profile.id})
                        .save()
                        .then(user=>console.log(user))
                    }
                })
        }
    )
);