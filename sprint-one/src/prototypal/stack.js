var Stack = function() {

  var stackInstance = Object.create(stackMethods);

  stackInstance.storage = {};
  stackInstance.count = 0;

  return stackInstance;
};

var stackMethods = {

  push: function() {

  },

  pop: function() {

  },

  size: function(){

  }

};


// Do:
// Work within the src/protoypal/ folder.
// Use Object.create  with the object from step 2 to create instances of your class
// Don't:
// Use the keyword new