'use strict';

const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("hello from home route");
});

app.get('/data', stamper, sendRes)

function stamper(req, res, next) {
    req.timeStamp = new Date();
    next();
}
function sendRes(req, res) {
    res.json({
        id: 1,
        name: "malek",
        email: "malek@ltuc.com",
        time: req.timeStamp,
    });
}
function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}