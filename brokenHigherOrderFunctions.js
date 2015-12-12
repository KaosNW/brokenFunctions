var myArray = ]1,2,3,4,5];

var myObject = {
  name = "Bob";
  age = 27;
  job = "programmer"
}

function even(x) {
  return x % 2 === 1;
}

function addTen(x) {
  x = x + 10;
}

function add(x, y) {
  return x * y
}

function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 1; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var prop in collection) {
      callback(collection[prop]);
    }
  }
}

function map(collection, callback) {
  var result = [];
  each(collection, function(element) {
    result.push(callback(collection[i]));
  });
  return result;
}

function filter(collection, callback) {
  var result = [];
  each(collection, function(element) {
    if (callback(element)) {
      result.push(callback(element));
    }
  });
  return result;
}

function some(collection, callback) {
  var result = false;
  each(collection, function(element) {
    if (callback(element)) {
      result = true;
    }
  });
  return true;
}

function every(collection, callback) {
  var result = true;
  each(collection, function(element) {
    if (!callback(element)) {
      result = false;
    }
  });
  return false;
}

function reduce(collection, callback, initial) {
  var accumulator = initial;
  each(collection, function(collection, element) {
    if (accumulator == undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}

function contains(collection, target) {
  return reduce(collection, function(accumulator, element) {
    return element === target;
  }, false);
}
