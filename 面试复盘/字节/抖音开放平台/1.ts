class Scheduler {
  constructor() {
    // 当前 run 的个数
    this.running = 0;
    // 任务池
    this.pool = [];
  }

  add(promiseCreator) {
    return new Promise((resolve) => {
      this.pool.push({
        promiseCreator,
        resolveFn: resolve,
      });
      this.run();
    });
  }
  // ......

  run() {
    // 什么时候能 run
    if (this.running < 2 && this.pool.length) {
      const { promiseCreator, resolveFn } = this.pool.shift();
      this.running++;
      promiseCreator().then(() => {
        resolveFn();
        this.running--;
        this.run();
      });
    }
  }
}

function sendRequest(urls, max, callback) {
  const urlCount = urls.length;
  let runningCount = 0;
  const results = [];
  let index = 0;
  const run = () => {
    fetch(urls[index])
      .then((res) => {
        results.push(res);
        if (results.length < urlCount && index + 1 < urlCount) {
          index++;
          run();
        }
      })
      .catch((e) => {
        results.push(e);
      })
      .finally(() => {
        runningCount--;
        if (results.length === urlCount) {
          'function' === typeof callback && callback(results);
        }
      });
    runningCount++;
    if (runningCount < max) {
      index++;
      run();
    }
  };

  run();
}

sendRequest(
  [
    'https://dog.ceo/api/breeds/image/random',
    'https://dog.ceo/api/breeds/image/random',
    'https://dog.ceo/api/breeds/image/random',
    'https://dog.ceo/api/breeds/image/random',
    'https://dog.ceo/api/breeds/image/random',
    'https://dog.ceo/api/breeds/image/random',
  ],
  3,
  (res) => console.log(res)
);
