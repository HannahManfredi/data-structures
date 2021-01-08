var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

O(n)
setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

O(n)
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

O(n)
setPrototype.remove = function(item) {
  var idx = this._storage.indexOf(item);
  this._storage.splice(idx, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
