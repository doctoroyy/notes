// let buff =  Buffer.from('hello  server');
//
// console.log(buff);
// console.dir(buff);


function f(...args) {
  console.log(args)
}
let host = '127.0.0.1';
let port = 21;
f(host, port)