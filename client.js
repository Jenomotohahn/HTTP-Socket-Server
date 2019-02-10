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
const requestURL = processArg[2].split("/");
const applyHeader = requestURL[1];
console.log(applyHeader);
const hostHeader = requestURL[0];
console.log(hostHeader);
const hashTable = {};
console.log(requestURL);

const client = net.createConnection({ port: 8080 }, () => {
  console.log("port is open!");
  client.write(
    "GET /" +
      applyHeader +
      " HTTP/1.1\nHost: " +
      hostHeader +
      "\nConnection: Keep-Alive\nAccept:text/html, application/json\n" +
      Date()
  );
});

client.on("data", data => {
  let parseData = data.toString();
  console.log(parseData);
  parseData = parseData.split("\n\n");
  hashTable[requestURL] = parseData[0];
  console.log(hashTable);
});
client.on("close", () => {
  console.log("connection closed!");
});

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
