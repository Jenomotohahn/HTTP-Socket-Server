const net = require("net");
const text = require("./text.js");
const helium = require("./helium.js");
const hydrogen = require("./hydrogen.js");
const index = require("./index.js");
const errorDoc = require("./404.js");
const styles = require("./styles.js");

const port = 8080;
const server = net.createServer(socket => {
  //request URI to change the url data pages.
  socket.on("data", data => {
    let parseData = data.toString();
    console.log(parseData);
    parseData = parseData.split("\n");
    const requestLine = parseData[0].split(" ");
    const method = requestLine[0];
    const requestURI = requestLine[1];

    if (method === "GET") {
      if (requestURI === "/") {
        socket.write(text.head + index);
        socket.end();
      } else if (requestURI === "/helium.html") {
        socket.write(text.head + helium);
        socket.end();
      } else if (requestURI === "/hydrogen.html") {
        socket.write(text.head + hydrogen);
        socket.end();
      } else if (requestURI === "/css/styles.css") {
        socket.write(text.css + styles);
        socket.end();
      } else {
        socket.write(text.head + errorDoc);
        socket.end();
      }
      socket.end();
    }
  });
});
server.on("error", err => {
  throw err;
});

server.listen(port, () => {
  console.log("hello server is open");
});
