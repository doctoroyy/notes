const net = require('net');

const socket = net.connect({
  port: 33333,
  host: 'localhost',
})

socket.on('connect', function() {
  socket.write('hello server')
})

