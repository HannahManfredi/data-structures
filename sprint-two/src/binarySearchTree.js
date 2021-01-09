var BinarySearchTree = function(value) {
  this.value = value;
  this.left;
  this.right;
};

//O(log(n))
BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value)
    } else {
      this.right.insert(value);
    }
  }
};

//O(log(n))
BinarySearchTree.prototype.contains = function(value) {
  var z = this.value === value;
  if (!z) {
    if (this.left) {
      z = this.left.contains(value);
    }
    if (this.right) {
      z = this.right.contains(value);
    }
  }
  return z;
};

//O(log(n))
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

//should have methods named "insert", "contains", and "depthFirstLog

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Implement a binarySearchTree class with the following properties:
// A .left property, a binary search tree (BST) where all values are lower than the current value.
// A .right property, a BST where all values are higher than the current value.
// A .insert() method, which accepts a value and places it in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// What is the time complexity of the above functions?
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.