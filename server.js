const http = require('http');
const fs = require('fs');

const args = require('minimist')(process.argv.slice(2));
const port = args['port']
if (port == undefined) {
    port = 3000;
}

let content = "";
fs.readFile('./www/index.html', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  content = data;
});

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(content, 'utf-8');
}).listen(port);

console.log(`Server listening on port ${port}`);
