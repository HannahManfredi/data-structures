

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //x
};

// hashTable.insert('Steven', 'Tyler');
// hashTable.remove('Steven');
// expect(hashTable.retrieve('Steven')).to.equal(undefined);

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //how does hash table keep record of k/v pair?
  //check whether index already exists/occupied in storage
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



/*
 * Complexity: What is the time complexity of the above functions?
 */


// A hashTable class, in pseudoclassical style:
//  First: Play with each of the helper functions provided to get a sense of what they do.
// You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
// A limitedArray helper has been provided for you, check out the source code for it in src/hashTableHelpers.js. Use it to store all inserted values rather than using a plain JavaScript array. The limitedArray, as you will see in the source code, provides get, set, and each methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a limitedArray instance. Try interacting with it from the console first.
// Make the following properties appear on all instances:
//  An .insert() method
//  A .retrieve() method
//  A .remove() method
//  What is the time complexity of the above functions?
//  Using your understanding of hash tables, refactor your set implementation from above to run in constant time