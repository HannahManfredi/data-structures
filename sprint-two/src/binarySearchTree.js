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
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (this.value === value) {
    return this.value + ' already exists and cannot be added.';
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
