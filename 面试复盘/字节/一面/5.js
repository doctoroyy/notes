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

function timeout(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler
    .add(() => timeout(time))
    .then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');


// 2
// 3
// 1
// 4