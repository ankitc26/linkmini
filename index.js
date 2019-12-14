const express = require('express');
const connectDB = require('./config/db');

var bodyParser = require('body-parser');

const app = express();



// Connect to HTML
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });