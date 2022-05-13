function curry(fn, ...args) {
  if (args.length >= fn.length) {
    console.log(args);
    return fn(...args);
  }

  return function(..._args) {
    return curry(fn, ..._args, ...args);
  }
};

const add = (a, b, c) => a + b + c;

const add1 = curry(add);

console.log(add1(1)(2)(3));

