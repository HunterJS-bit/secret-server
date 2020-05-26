const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors')
const apiRoutes = require('./routes/hashRoutes');
const connectToDB = require('./db');


const app = express();


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

// connect to MongoDB
connectToDB();

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, function() {
  console.log(`Server running on   ${listener.address().port}`);
});
