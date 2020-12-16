//LIFO

var Stack = function() {

  var stackInstance = {};
  stackInstance.storage = {};
  stackInstance.count = 0;

  _.extend(stackInstance, stackMethods);

  return stackInstance;

};

var stackMethods = {

  push: function(value) {
    this.count ++;
    this.storage[this.count] = value;
  },

  pop: function() {
    var remove = this.storage[this.count];
    delete this.storage[this.count];
    this.count --;
    return remove;
  },

  size: function() {
    if (this.count <= 0) {
      return 0;
    }
    return this.count;
  }

};
