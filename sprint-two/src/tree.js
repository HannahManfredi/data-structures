var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;

};

var treeMethods = {};

//O(1)
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children[this.children.length] = child;
};

//O(log(n))
treeMethods.contains = function(target, search = this.children) {
  var flag = this.value === target;
  if (search) {
    for (var i = 0; i < search.length; i++) {
      if (search[i].value === target) {
        return true;
      }
      flag += treeMethods.contains(target, search[i].children);
    }
  }
  if (flag > 0) {
    return true;
  } else {
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
