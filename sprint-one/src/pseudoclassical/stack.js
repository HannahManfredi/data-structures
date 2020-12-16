var Stack = function() {

  this.storage = {};
  this.count = 0;
  this.hasPopped = 0;

};

Stack.prototype.push = function(v) {
  this.count ++;
  this.storage[this.count] = v;
};

Stack.prototype.pop = function() {
  var remove = this.storage[this.count];
  delete this.storage[this.count];
  this.count --;
  this.hasPopped ++;
  return remove;
};

Stack.prototype.size = function() {
  if (this.hasPopped > this.count) {
    return 0;
  } else {
    return this.count;
  }
};





