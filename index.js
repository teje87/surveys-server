const express = require('express');
const app = express();

//ROUTES
app.get('/', (req, res)=>{
    console.log('get request running')
    res.send({hi: 'there'}) 
});


// LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT);