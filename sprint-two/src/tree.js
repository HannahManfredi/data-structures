var Tree = function(value) {

  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  //how do you incremenet each node's level property as you add a child?
    //how do you access that level prop?
  newTree.level = 0;

  extend(newTree, treeMethods);

  return newTree;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

//O(1)
treeMethods.addChild = function(value) {

  var child = Tree(value);
  this.children[this.children.length] = child;
  child.level = this.level + 1;
  //track parent level?
    //child level = parent level + 1?
  // var addLevel = function(c) {
  //   // currentLevel ++;
  //   // c.level = currentLevel;
  //   if (c.children) {
  //     c.children.forEach(kid => {
  //       console.log('level: ', kid.level);
  //       addLevel(kid);
  //     });
  //   }
  // };
  // addLevel(child);

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

var x = Tree(1) //level = 0
x.addChild(2) //level = 1
x.children[0].addChild(3) //adds child to node 3, level should be 2
x.children[0].children[0].addChild(4) //should be 3
console.log(x);


/*
 * Complexity: What is the time complexity of the above functions?
 */
