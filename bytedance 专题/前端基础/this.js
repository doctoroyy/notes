// use strict;

const foo = {
  a: 1,
  bar: () => {
    return this;
  }
}

console.log(foo.bar());

function swap(arr, i, j) {
  [arr[i], [arr[j]]] = [arr[j], [arr[i]]];
}

// 3 4 1 2 7 6
// 3 1 4 2 7 6
// 3 1 2 4 7 6

function partition(arr, low, high) {
  const pivot = arr[low];
  let m = low + 1;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, m);
      m++;
    }
  }
  swap(arr, low, m - 1);
  return m - 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const mid = partition(arr, low, high);
    quickSort(arr, low, mid - 1);
    quickSort(arr, mid + 1, high);
  }
}

const arr = [3, 4, 1, 2, 7, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);