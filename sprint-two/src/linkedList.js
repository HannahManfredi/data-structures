var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //O(1)
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  //O(n)
  list.removeHead = function() {
    if (list.head === null) {
      return null;
    } else {
      var removed = list.head.value;
      list.head = list.head.next;
      if (list.head) {
        list.tail = list.head.next;
      }
      return removed;
    }
  };

  //O(n)
  list.contains = function(target) {
    var flag = list.head.value === target;
    if (!flag) {
      var rest = list.head.next;
      while (rest) {
        if (rest.value === target) {
          return true;
        }
        rest = rest.next;
      }
    }
    return flag;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
