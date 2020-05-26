const net = require('net');

const socket = net.connect({
  port: 33333,
  host: 'localhost',
});

socket.on('connect', function() {

  socket.write(JSON.stringify({
    name: 'oyy'
  }));

  socket.on('data', function (data) {
    console.log(data.toString())
  })
});

