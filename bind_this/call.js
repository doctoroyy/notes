Function.prototype.myCall = function(thisArg) {
  if (!thisArg) thisArg = window;
  let fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
    // args.push('arguments[' + i + ']');
  }
  thisArg.fn = fn;
  thisArg.fn(...args);
  // eval('thisArg.fn(' + args + ')');
  delete thisArg.fn;
}

const obj = {
  name: 'oyy',
  age: 23,
}

const func = function(a, b, c) {
  console.log(this.name);
  console.log(a + b + c)
}

func.myCall(obj, 1, 2, 3)
console.log(obj)