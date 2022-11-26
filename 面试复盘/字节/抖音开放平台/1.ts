class Scheduler {
  constructor() {
    // 当前 run 的个数
    this.running = 0;
    // 任务池
    this.pool = [];
  }

  add(promiseCreator) {
    return new Promise(resolve => {
      this.pool.push({
        promiseCreator,
        resolveFn: resolve,
      });
      this.run();
    })
  }
  // ......

  run() {
    // 什么时候能 run
    if (this.running < 2 && this.pool.length) {
      const {
        promiseCreator,
        resolveFn,
      } = this.pool.shift();
      this.running++;
      promiseCreator().then(() => {
        resolveFn();
        this.running--;
        this.run();
      });
    }
  }
}

function sendRequest(urls: string[], max: number, callback?: (args: any) => void) {
  
}