const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(console.log("CONNECTED"))
    .catch(error => console.log(error));



require('./routes/authRoutes')(app);





// LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT);