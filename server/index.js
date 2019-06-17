const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(path.join(__dirname, '../build')));

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// Fetching strings from database on list page
app.get('/loadstrings', (req, res) => {
  const handleRequest = (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(data);
    }
  };
  db.getStrings(handleRequest);
});

// Posting string to dabase
app.post('/', (req, res) => {
  const string = Object.keys(req.body);
  const handleRequest = (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(202).send(data);
    }
  };
  db.insertString(string, handleRequest);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
