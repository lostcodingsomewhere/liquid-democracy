const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
Vote = require('./models/vote');
const app = express();
const CreateController = require('./controllers/create');

app.use(bodyParser.json({ strict: false }));

app.post('/vote/create', async (req, res) => {
  // res.send(create.execute(req));
  const result = await CreateController.execute(req);
  res.send(result);
});

app.get('/votes', async (req, res) => {
  // get all votes
  res.send('Hello World!');
});

app.get('/vote/:address', async (req, res) => {
  // get a vote
});

app.post('/vote/submit', async (req, res) => {
  // submit vote
});

app.post('/vote/delegate', async (req, res) => {
  // proxy vote
});

app.post('/vote/join', async (req, res) => {
  // join a vote
});

module.exports.handler = serverless(app);
