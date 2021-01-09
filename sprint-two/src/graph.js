// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

//{5: []}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var idx = this.nodes.indexOf(node);
  this.nodes.splice(idx, 1);
  for (var edge in this.edges) {
    var arr = this.edges[edge];
    for (var i = 0; i < arr.length; i++) {
      var idx = arr.indexOf(node);
      arr.splice(idx, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].includes(toNode) && this.edges[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] && this.edges[toNode]) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var idx1 = this.edges[fromNode].indexOf(toNode);
  var idx2 = this.edges[toNode].indexOf(fromNode);
  this.edges[fromNode].splice(idx1, 1);
  this.edges[toNode].splice(idx2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node of this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
