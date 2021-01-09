

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = {};
  }
  this._storage[index][k] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index][k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index][k]) {
    delete this._storage[index][k];
  }
};

HashTable.prototype.currentCapacity = function() {
  // this._limit is our benchmark
  // count of filled buckets
  // check this._storage[index] is defined, if defined, count of billed buckets++
  // since this._storage[index] is an object, we may use Object.keys(this._storage[index]).length to get the number of tuples passed in and then use it to compare with our benchmark

  var countTuples = 0;
  for (var i = 0; i < this._limit; i++) {
    if (this._storage[i]) {
      countTuples += Object.keys(this._storage[i]).length;
    }
  }
  return countTuples;


  // var capacity
  // var cb = function(arr) { //arr = bucket
  //   return arr.length this._limit
  // };

  // this._storage.each(cb)
};

//limitedArray.each = function(callback) {
//   for (var i = 0; i < storage.length; i++) {
//     callback(storage[i], i, storage);
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */