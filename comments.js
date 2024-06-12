//Create web server
const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

//Create a server
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    fs.readFile("index.html", function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write("Error: File not found");
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(3000);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/comments", (req, res) => {
    res.send("This is the comments page");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});