const net = require('net');

net.createServer(function(socket) {
  console.log('socket connected')
  socket.on('data', function(data) {
    console.log('"data" event', data)
  })
  socket.on('end', function() {
    console.log('"end" event')
  })
  socket.pipe(socket)
}).listen(33333)

