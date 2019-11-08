const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'));

// ?? let options = {extensions: ['php']}

//listening for port
app.listen(port, () => {
    console.log(`app is running on ${port}`);
})