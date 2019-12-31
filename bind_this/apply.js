Function.prototype.myApply = function(thisArgs) {
  if (!thisArgs) thisArgs = window;
  let fn = this;
  let args = arguments[1] || [];
  thisArgs.fn = fn;
  thisArgs.fn(...args);
  delete thisArgs.fn;
}

const obj = {
  name: 'oyy',
  age: 23,
}

const func = function(a, b, c) {
  console.log(this.name);
  console.log(a + b + c)
}

func.myApply(obj, [1, 2, 3])
console.log(obj)