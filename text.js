const htmlDate = new Date();
const bodyLength = 20000;
const htmlHeader = `HTTP/1.1 200\nServer: localhost:8080\nDate: ${htmlDate}\nContent-Type: text/html; charset=utf-8\nConnection: closed\n\n`;
// console.log(htmlHeader.length);
const heliumBody = "<body>HTML</body>";
const cssHeader = `HTTP/1.1 200\nServer: localhost:8080\nDate: ${htmlDate}\nContent-Type: text/css; charset=utf-8\nConnection: closed\n\n`;

module.exports = {
  head: htmlHeader,
  css: cssHeader,
  helium: heliumBody
};
