'use strict';

const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("hello from home route");
});

function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}