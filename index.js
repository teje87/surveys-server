const express = require('express');
const app = express();
const keys = require("./config/keys");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;




passport.use(
    new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    (accessToken) => {console.log(accessToken)}
    )
);

//ROUTES

app.get(
    '/auth/google', 
    passport.authenticate(
        'google',
        { scope : ['profile','email']})
)


app.get('/', (req, res)=>{
    console.log('get request running')
    res.send({bye: 'goodbye'}) 
});


// LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT);