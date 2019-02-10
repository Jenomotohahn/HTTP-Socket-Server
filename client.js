const net = require("net");

const client = new net.Socket();
client.connect(8080, () => {
  console.log("connected!");
  //   client.write("Hello");
});
client.on("data", data => {
  //   console.log(data);
  //   socket.close();
  console.log("Received Data: " + data);
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
