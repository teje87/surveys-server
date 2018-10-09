const express = require('express');
const app = express();
require('./services/passport');
require('./routes/authRoutes')(app);





// LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT);