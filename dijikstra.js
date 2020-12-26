const graph = {
  "start": {
    "a": 6,
    "b": 2,
  },
  "a": {
    "fin": 1,
  },
  "b": {
    "a": 3,
    "fin": 5
  },
  "fin" : {
    
  }
};
const costs = {
  "a": 6,
  "b": 2,
  "fin": 100_000,
};
const parents = {
  "a" : "start",
  "b" : "start",
  "fin" : null
};

function dijikstra(graphs) {
  const [graph, costs, parents] = graphs;
  // All processed vertexes
  const processed = [];
  // The lowest node among the unprocessed vertexes
  const node = searchLowestCost(costs,processed);

  while (node !== null) {
    let cost = costs[node]
    let neighbors = graph[node]
    for (let n in Object.keys(neighbors)) {
      let new_cost = cost + neighbors[n]
      if(costs[n] > new_cost) {
        costs[n] = new_cost
        parents[n] = node
      }
    }
    processed.push(node);
    node = searchLowestCost(costs);
  }
}

function searchLowestCost(costs, processed) {
  lowest_cost = 100_000;
  lowest_cost_node = null;

  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowest_cost && !(cost in processed)) {
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  }
  return lowest_cost_node;
}

dijikstra([graph, costs, parents])