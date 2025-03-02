// const urls = [3, 1, 2, 4, 5]
// 要求尽可能快的输出


// const _fetch = url => new Promise(resolve => {
//   setTimeout(() => {
//     resolve(`url: ${url} done.`)
//   }, url * 1000);
// })

// async function sendRequests(urls) {
//   const results = []
//   // let completed = 0;

//   for (let i = 0; i < urls.length; i++) {
//     console.log(urls[i])
//     _fetch(urls[i]).then(value => {
//       // console.log(value)
//       results[i] = value;
//     }).catch(reason => {
//       results[i] = reason
//     })
//   }

//   let outIdx = 0;

//   while (outIdx < urls.length) {
//     if (results[outIdx]) {
//       console.log(results[outIdx]);
//       outIdx++;
//     } else {
//       // 如果当前结果还未就绪，等待一小段时间再检查
//       await new Promise(resolve => setTimeout(resolve, 0));
//     }
//   }
// }

// sendRequests(urls)

const urls = [3, 1, 2, 4, 5];
const _fetch = url => new Promise(resolve => {
  setTimeout(() => {
    resolve(`url: ${url} done.`);
  }, url * 1000);
});

async function sendRequests(urls) {
  const promises = urls.map(url => _fetch(url)); // 并行发起所有请求
  for (const promise of promises) {
    console.log(await promise); // 按顺序等待并输出
  }
}

sendRequests(urls);