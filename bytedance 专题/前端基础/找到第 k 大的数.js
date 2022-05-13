function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, low, high) {
  const pivot = arr[low];
  let targetPivot = low;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] > pivot) {
      targetPivot++;
      swap(arr, targetPivot, i);
    }
  }
  swap(arr, low, targetPivot);
  return targetPivot;
}

function quick_sort(arr, low, high) {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quick_sort(arr, low, pivot);
    quick_sort(arr, pivot + 1, high);
  }
}

function quick_find(arr, low, high, k) {
  if (low < high) {
    const pivot = partition(arr, low, high);
    const count = pivot - low + 1;
    if (count > k) {
      quick_find(arr, low, pivot - 1, k);
    } else if (count < k) {
      quick_find(arr, pivot + 1, high, k - count);
    }
  }
}

const arr = [3, 1, 2, 4, 8, -1, 7, 6];
// 8 7 6 4 3 2 1 -1
// quick_sort(arr, 0, arr.length - 1);
const k = 1;
quick_find(arr, 0, arr.length - 1, k);
console.log(arr[k]);


function throttle(fn, delay) {
  let last = 0;
  return function() {
    const now = Date.now();
    if (now - last > delay) {
      fn.apply(this, arguments);
      last = now;
    }
  }
}