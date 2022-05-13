const fetchUrl = (url, time) => {
  return () => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(url);
      resolve(url);
    }, time);
  });
}

const limitedFetch = (tasks, limit) => {
  const _tasks = [...tasks];
  const promises = _tasks.splice(0, limit).map((task, index) => {
    return task().then((res) => {
      return index;
    });
  });
  return _tasks.reduce((acc, cur) => {
    return acc.then(() => {
      return Promise.race(promises)
    }).then(fastestIndex => {
      promises[fastestIndex] = cur().then(() => {
        return fastestIndex;
      });
    });
  }, Promise.resolve())
  .then(() => {
    return Promise.all(promises);
  });
}

const tasks = [
  fetchUrl('A', 1000),
  fetchUrl('B', 1000),
  fetchUrl('C', 1000),
  
  fetchUrl('D', 1000),
  fetchUrl('E', 1000),
  fetchUrl('F', 1000),

  fetchUrl('G', 1000),
  fetchUrl('H', 1000),
]

limitedFetch(tasks, 2).then(res => {
  console.log(res);
});