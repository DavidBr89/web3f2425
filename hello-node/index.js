// IMPORTS
const http = require("http");
const express = require("express");

// LOGICA

const server = http.createServer((req, res) => {
  res.end("Web 3");
});

server.listen(3000);

// EXPORTS
