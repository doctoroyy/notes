let maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
]
let startX = 0, startY = 4;
let endX = 3, endY = 2;
let m = 5, n = 5;
let q = []
let dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1]
]

let vis = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

// let vis = new Array(m).fill(new Array(n).fill(0))

function valid(x, y) {
  return x >= 0 && x < m && y >= 0 && y < n && maze[x][y] === 0;
}

function bfs() {
  q.push({ x: startX, y: startY });
  vis[startX][startY] = 1;
  while (q.length > 0) {
    let cur = q.shift();
    if (cur.x === endX && cur.y === endY) {
      return true;
    }
    for (let i = 0; i < 4; i++) {
      let nx = cur.x + dir[i][0], ny = cur.y + dir[i][1];
      // if (valid(nx, ny)) {
      //   console.log(nx, ny, vis[nx][ny], "*")
      // }
      if (valid(nx, ny) && !vis[nx][ny]) {
        // console.log(nx, ny, '@')
        vis[nx][ny] = 1;
        q.push({ x: nx, y: ny });
      }
    }
  }
  return false;
}

console.log(bfs())

let promise = new Promise((resolve, reject) => {
  console.log('ews')
  resolve('sdfsjf');
})

promise.then(res => {
  console.log(res);
})

console.log('hi')