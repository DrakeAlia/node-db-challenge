const express = require('express');

const ResourcesRouter = require('./projects/project-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ api: 'up' });
});

server.use('/api/projects', ResourcesRouter);

module.exports = server;
