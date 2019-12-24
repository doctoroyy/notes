function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function heapify(arr, start, end) {
  let parent = start;
  let child = parent * 2 + 1;
  child = (arr[child + 1] > arr[child] && child + 1 <= end) ? child + 1 : child;
  if (arr[child] > arr[parent] && child <= end) {
    swap(arr, child, parent);
    heapify(arr, child, end);
  }
  // while (child <= end) {
  //   child = (arr[child + 1] > arr[child] && child + 1 <= end) ? child + 1 : child;
  //   if (arr[child] > arr[parent]) {
  //     swap(arr, child, parent);
  //     parent = child;
  //     child = parent * 2 + 1;
  //   }
  // }

}

function heap_sort(arr, len) {
  for (let i = parseInt(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len - 1);
  }
  console.log(arr)
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i - 1);
    console.log(arr)
  }
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

let arr = createArr(10);
console.log(arr)

heap_sort(arr, arr.length);

console.log(arr)