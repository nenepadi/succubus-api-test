const express = require('express');
const server = express();
const port = 9999;
const mReq = require('./helper').mReq;

server.get('/', (req, res) => {
    mReq('GET', 'http://192.168.0.22/api/colleges').then(data => {
        console.log(data);
        res.status(200).json(data).end();
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});