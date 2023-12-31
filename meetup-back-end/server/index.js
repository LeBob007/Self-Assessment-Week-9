const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const { getAll, add, remove } = require('./controllers/attendee.js')

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


// const dontUseMe = () => throw new Error('implement controllers');

app.get('/attendees', getAll);
app.post('/attendees', add);
app.delete('/attendees', remove);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
