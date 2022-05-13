
const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const adj = {
  A: ['B', 'C', 'E'],
  B: ['D', 'F'],
  C: ['G'],
  D: ['H'],
}

const levelMap = {};
const visited = {};

const dfs = (adj, cur, level) => {
  levelMap[cur] = level;
  visited[cur] = true;
  adj[cur]?.forEach(next => {
    if (!visited[next]) {
      dfs(adj, next, level + 1);
    }
  });
}

const inDegrees = {};

nodes.forEach(node => {
  inDegrees[node] = 0;
});

Object.entries(adj).forEach(([node, nexts]) => {
  nexts.forEach(next => {
    inDegrees[next]++;
  });
});

const root = Object.entries(inDegrees).find(([cur, indegree]) => indegree === 0);

console.log(inDegrees);

console.log(root);

dfs(adj, root[0], 0);

console.log(levelMap);