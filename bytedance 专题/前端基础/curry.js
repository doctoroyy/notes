const add = (x, y, z) => x + y + z;

const curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return (..._args) => curry(fn, ...args, ..._args);
};

const add1 = curry(add);
console.log(add1(1)(2)(3), add1(1, 2)(3), add1(1)(2, 3));
