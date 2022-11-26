// 二进制加法
// 例如:
//   1 0 1 1
//     1 0 1
//  ---------
// 1 0 0 0 0

// 其实就是大数加法的思路, 模拟竖式加法

const num1 = '1011', num2 = '101';

function binaryAdd(num1, num2) {
  const times = Math.max(num1.length, num2.length);
  const a = num1.split('').reverse(), b = num2.split('').reverse();

  const res = [];
  let carry = 0; // 进位
  for (let i = 0; i < times; i++) {
    const sum = parseInt(a[i] || '0') + parseInt(b[i] || '0') + carry;
    carry = parseInt(sum / 2);
    res.push(parseInt(sum % 2));
  }

  if (carry) {
    res.push(carry);
  }

  return res.reverse().join('');
}

console.log(binaryAdd(num1, num2));
