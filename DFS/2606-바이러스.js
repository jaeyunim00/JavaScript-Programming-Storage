let fs = require("fs");
let input = fs.readFileSync("DFS/index.txt").toString().split("\n");

let graph = [];

for (let i = 2; i < input.length; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let visited = Array(100).fill(false);

function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);

  for (i of graph[v]) {
    if (!visited[v]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);
