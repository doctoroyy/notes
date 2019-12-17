function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function partition(arr, low, high) {
  let pivo = arr[low], m = low;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < pivo) {
      m++;
      swap(arr, m, i);
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


let arr = [3, 1, 2, 4, 8, -1, 7, 6];
quick_sort(arr, 0, arr.length - 1)
console.log(arr);