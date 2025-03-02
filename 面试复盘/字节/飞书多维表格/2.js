// 给定一个数组, 要求 a[i] = max(a[i+1], a[i+2], a[i+...])

const arr = [18, 18, 4, 5, 2, 3, 1];

// function solve(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let maxSoFar = -1;
//     for (let j = i + 1; j < arr.length; j++) {
//       maxSoFar = Math.max(maxSoFar, arr[j])
//     }
//     arr[i] = maxSoFar
//   }
//   arr[arr.length - 1] = -1;

//   return arr;
// }

// console.log(solve(arr))

function solve2(arr) {
  const n = arr.length;
  if (n <= 1) {
      return n === 1 ? [-1] : [];
  }
  
  let maxSoFar = -1;
  for (let i = n - 1; i >= 0; i--) {
      const current = arr[i];
      arr[i] = maxSoFar;
      maxSoFar = Math.max(maxSoFar, current);
  }
  
  return arr;
}

console.log(solve2(arr))