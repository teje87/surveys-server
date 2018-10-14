const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//DB CONNECT

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(console.log("CONNECTED"))
    .catch(error => console.log(error));


//COOKIE SETUP

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],

    })
);
app.use(passport.initialize());
app.use(passport.session());





require('./routes/authRoutes')(app);





// LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT);