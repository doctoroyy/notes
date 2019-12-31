const  find = function(a) {
  let num = 0;
  for (let i = 0; i < a.length; i++) {
    num = num ^  a[i];
  }
  return num;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}


function createArr(maxn) {
  let arr = [];
  for (let i = 0; i < maxn; i++) {
    arr[i] = i + 1;
  }
  for (let i = 0; i < maxn; i++) {
    const random_num = parseInt(Math.random() * maxn);
    swap(arr, i, random_num);
  }
  return arr;
}

let arr = createArr(100);
arr.push(-4)
arr.concat(createArr(100));

console.log(find(arr))