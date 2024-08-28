import fs from 'fs';
import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  console.log(req.url);
  if (req.url === '/') {
   fs.readFile('index.html', (err, data) => {
          if (err) {
              res.statusCode = 500;
              res.end('Internal Server Error');
          } else {
              res.statusCode = 200;
              res.end(data);
          }
      });
  } 
  else if (req.url === '/style') {
     res.setHeader('Content-Type', 'text/css');
    fs.readFile('styles.css', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } 
  else if (req.url === '/script') {
    res.setHeader('Content-Type', 'text/javascript');
    fs.readFile('index.js', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } 
  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
