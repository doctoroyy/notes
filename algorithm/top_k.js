function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, low, high) {
  let p = arr[low], m = low;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] > p) {
      m++;
      swap(arr, i, m);
    }
  }
  swap(arr, low, m);
  return m;
}

function quick_sort(arr, low, high) {
  if (low < high) {
    let m = partition(arr, low, high);
    quick_sort(arr, low, m - 1);
    quick_sort(arr, m + 1, high);
  }
}

function find_top_k(arr, low, high, k) {
  if (low < high) {
    let m = partition(arr, low, high);
    let cnt = m - low + 1;
    if (cnt > k) {
      find_top_k(arr, low, m - 1, k);
    } else if (cnt < k) {
      find_top_k(arr, m + 1, high, k - cnt);
    }
  }
}

function createArr() {
  const maxn = 10000000;
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
// let arr = createArr();
const arr = [3, 1, 2, 4, 8, -1, 7, 6];

// console.log(arr)
const last = +new Date();
const k = 1;
find_top_k(arr, 0, arr.length - 1, k - 1);
// quick_sort(arr, 0, arr.length)
// const now = +new Date();
// console.log(now - last);

console.log(arr[k - 1])