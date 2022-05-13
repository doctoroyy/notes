const flat = arr => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
}

const arr = [1, [2, 3, 4], [5, 6, [7, [8]]]];

console.log(flat(arr))

const flat2 = arr => {
  const res = [];
  const stack = [...arr];

  while (stack.length) {
    const top = stack.pop();
    if (Array.isArray(top)) {
      stack.push(...top);
    } else {
      res.unshift(top);
    }
  }
  return res;
}

// console.log(flat2(arr));

const flat3 = (arr, num) => {
  if (num > 0) {
    return arr.reduce((acc, cur) => {
      return acc.concat(Array.isArray(cur) ? flat3(cur, num - 1) : cur);
    }, []);
  }
  return arr;
}


console.log(flat3(arr, 0))
console.log(flat3(arr, 1))
console.log(flat3(arr, 2))
console.log(flat3(arr, 3))