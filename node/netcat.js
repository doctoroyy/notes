let net = require('net');
let host = process.argv[2];
let port = Number(process.argv[3]);

let socket = net.connect(port, host);

socket.on('data', function (data) {
  process.stdin.pipe(socket);
  socket.pipe(process.stdout);
  process.stdin.resume();

});

socket.on('end', function () {
  process.stdin.pause();
});
