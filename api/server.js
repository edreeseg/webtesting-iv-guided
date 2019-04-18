const express = require('express');

const hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/hobbits', async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

server.post('/hobbits', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Need name key' });
  hobbits.insert({name})
    .then(res => res.status(201).json({ res }))
    .catch(err => res.status(500).json({ err }));
})

module.exports = server;
