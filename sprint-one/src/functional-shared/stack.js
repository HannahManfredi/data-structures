//LIFO

var Stack = function() {

  var stackInstance = {};
  stackInstance.storage = {};
  stackInstance.count = 0;

  extend(stackInstance, stackMethods);

  return stackInstance;

};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
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
