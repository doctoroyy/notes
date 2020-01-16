const net = require('net');

net.createServer(function (socket) {
  console.log('socket connected');
  socket.on('data', function (data) {
    console.log(data, JSON.parse(data.toString()))
  });
  socket.on('end', function () {
    console.log('"end" event');
  });
  socket.pipe(socket)
  socket.write('hello client ')
}).listen(33333);

