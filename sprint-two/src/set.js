var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

//O(n)
setPrototype.add = function(...args) {
  // if (!this._storage.includes(item)) {
  //   this._storage.push(item);
  // }
  for (var i = 0; i < args.length; i ++) {
    if (!this._storage.includes(args[i])) {
      this._storage.push(args[i]);
    }
  }
};

//O(n)
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

//O(n)
setPrototype.remove = function(item) {
  var idx = this._storage.indexOf(item);
  this._storage.splice(idx, 1);
};

setPrototype.intersections = function(set) {
  var result = [];
  for (var i = 0; i < set._storage.length; i++) {
    if (this._storage.includes(set._storage[i])) {
      result.push(set._storage[i]);
    }
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
