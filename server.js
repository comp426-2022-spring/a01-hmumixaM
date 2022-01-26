const http = require('http');
const fs = require('fs');

const args = require('minimist')(process.argv.slice(2));
let port;
if (typeof args['port'] != 'number') {
  port = 3000;
} else {
  port = args['port'];
}

const server = http.createServer((request, response) => {
  fs.readFile('./www/index.html', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data, 'utf-8');
  });
});
server.listen(port);

console.log(`Server listening on port ${port}`);
