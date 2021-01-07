// An .addToHead() method which takes a value and adds it to the front of the list.
//  A .removeTail() method which removes the last node from the list and returns its value.
// Note: each node object will need to have a new .previous property pointing to the node behind it (or to null when appropriate); this is what makes it a doubly-linked list.

var DoublyLinkedList = function() {

  var list = {};
  list.head = null;
  list.tail = null;

  //O(1)
  list.addToTail = function(value) {
    let n = Node(value);
    this.head = this.head || n;
    if (this.tail) {
      n.previous = this.tail;
      this.tail.next = n;
    }
    this.tail = n;
  };

  list.removeHead = function() {
    var head = this.head;
    if (head.next) {
      this.head.previous = null;
      this.head = this.next;
    } else {
      this.head = null;
    }
    return head.value;
  };

  list.contains = function(targetValue) {
    let curr = this.head;
    while (curr) {
      if (curr === targetValue) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  return list;

};

var Node = function(v) {
  let node = {};
  node.value = v;
  node.next = null;
  node.previous = null;
  return node;
};




//   // Time complexity:  O(1)
//   list.removeHead = function(){
//     var head = list.head;
//     if (head.next) {
//       this.head = head.next;
//       this.head.previous = null;
//     } else {
//       this.head = null;
//     }


//     return head.value;
//   };

//   // Time complexity: O(n)
//   list.contains = function(target){
//     var current = this.head;
//     while(current) {
//       if (current.value === target) {
//         return true;
//       }
//       current = current.next;
//     }
//     return false;
//   };
//   return list;
// };

// var Node = function(value){
//   var node = {};

//   node.value = value;
//   node.next = null;
//   node.previous = null;

//   return node;
// };