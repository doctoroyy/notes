const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const cache = {};

function send404(response) {
  response.writeHead(404, {'content-type': 'text-plain'});
  response.write('Error 404: resource not found');
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(200, {
    'content-type': mime.getType(path.basename(filePath))
  });
  response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function (exists) {
      if (exists) {
        fs.readFile(absPath, function (err, data) {
          if (err) {
            send404(response);
            return;
          }
          cache[absPath] = data;
          sendFile(response, absPath, data);
        });
      } else {
        send404(response);
      }
    });
  }
}


const server = http.createServer(function (request, response) {
  let filePath = false;
  if (request.url === '/') {
    filePath = 'public/index.html';
  } else {
    filePath = 'public' + request.url;
  }
  const absPath = './' + filePath;
  serveStatic(response, cache, absPath);
});

server.listen(3000, function () {
  console.log('sever listening on port 3000');
});

