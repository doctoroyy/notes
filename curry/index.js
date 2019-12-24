function curry(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  return function() {
    let innnerArgs = Array.prototype.slice.call(arguments);
    let finnalArgs = args.concat(innnerArgs);
    return fn.apply(null, finnalArgs);
  }
}

function add(a, b) {
  return a + b;
}

let add1 = curry(add, 1);

console.log(add1(2));
