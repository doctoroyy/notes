let maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
];

let startX = 0, startY = 4;
let endX = 4, endY = 4;
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
];


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
      let nx = cur.x, ny = cur.y;
      while (valid(nx, ny)) {
        nx += dir[i][0];
        ny += dir[i][1];
      }
      nx -= dir[i][0], ny -= dir[i][1];
      if (!vis[nx][ny]) {
        vis[nx][ny] = 1;
        q.push({ x: nx, y: ny });
      }
    }
  }
  return false;
}

console.log(bfs())

