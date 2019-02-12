const net = require("net");

// const client = new net.Socket();
// client.connect(8080, "192.168.0.12", () => {
//   console.log("connected!");
// });
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
const processArg = process.argv;

if (processArg[2] === undefined) {
  console.log('Please add an argument to end of "client.js"');
  return;
} else {
  const requestURL = processArg[2].split("/");
  const applyHeader = requestURL[1];
  console.log(requestURL);
  const hostHeader = requestURL[0];
  const hashTable = {};
  const client = net.createConnection({ port: 8080 }, () => {
    console.log("port is open!");
    if (requestURL.length > 1) {
      client.write(
        "GET /" +
          applyHeader +
          " HTTP/1.1\nHost: " +
          hostHeader +
          "\nConnection: Keep-Alive\nAccept:text/html, application/json\n" +
          Date()
      );
    } else {
      client.write(
        "GET / HTTP/1.1\nHost: " +
          hostHeader +
          "\nConnection: Keep-Alive\nAccept:text/html, application/json\n" +
          Date()
      );
    }
  });

  client.on("data", data => {
    let parseData = data.toString();
    parseData = parseData.split("\n\n");
    hashTable[requestURL] = parseData[0];
    console.log(parseData[1]);
  });
  client.on("close", () => {
    console.log("connection closed!");
  });
}

// var net = require("net");

// var client = new net.Socket();
// client.connect(8181, "127.0.0.1", function() {
//   console.log("Connected");
//   client.write("Hello, server! Love, Client.");
//   process.stdin.pipe(client);
// });

// client.on("data", function(data) {
//   console.log("Received: " + data);
// });

// client.on("close", function() {
//   console.log("Connection closed");
// });
