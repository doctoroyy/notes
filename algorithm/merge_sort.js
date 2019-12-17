function merge(arr, low, high) {
  let  mid = parseInt((low + high) / 2), size = high - low + 1;
  let i = low, j = mid + 1;
  let b = [], idx = 0;

  while (i <= mid && j <= high) {
    b[idx++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
  }
  while (i <= mid) b[idx++] = arr[i++];
  while (j <= high) b[idx++] = arr[j++];
  for (let i = 0; i < size; i++) {
    arr[low + i] = b[i];
  }
}

function merge_sort(arr, low, high) {
  if (low < high) {
    let mid = parseInt((low + high) / 2);
    merge_sort(arr, low, mid);
    merge_sort(arr, mid + 1, high);
    merge(arr, low, high);
  }
}

let arr = [0, 3, 2, 1, 4, 9, 6, -1, 5];

merge_sort(arr, 0, arr.length - 1);

console.log(arr)