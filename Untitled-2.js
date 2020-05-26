// const request = function (url, values, method = 'get') {
//   return new Promise(function (resolve, reject) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         resolve(this.response);
//       }
//     }
//     xhr.open(method, url);
//     xhr.send(values);
//   })
// }
// request('https://api.doctoroyy.net/book/getAll?page=1&pageSize=20', null)
//   .then(res => {
//     console.log(res);
//   })

const func = () => {
  return new Promise((resolve, reject) => {
    console.log('sfdsf');
    setTimeout(() => {
      resolve('successful!');
    }, 1000);
  })
}

// func().then(res => console.log(res))

// console.log('12234')


const promise1 = new Promise((resolve, reject) => setTimeout(() => {
  resolve('data1')
}, 1000));

const promise2 = new Promise((resolve, reject) => setTimeout(() => {
  resolve('data2')
}, 400));
console.log(+new Date)
Promise.all([promise1, promise2]).then(res => console.log(res, +new Date))