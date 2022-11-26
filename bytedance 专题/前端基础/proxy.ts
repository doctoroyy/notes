const obj = {
  a: 1,
  b: 2,
};

const objProxy = new Proxy(obj, {
  get: (target, propKey, receiver) => {
    
  }
})