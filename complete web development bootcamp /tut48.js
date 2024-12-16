// console.log("hello chaitanya");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer((re, res) => {
  res.statusCode = 404;
  // 404,
  res.setHeader('Content-Type', 'text/plain');
  // res.write('Hello World');
  res.write(re.url);
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
