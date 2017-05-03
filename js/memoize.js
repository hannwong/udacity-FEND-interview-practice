function foo(x) {
  console.log("calculating foo(" + x + ")!");
  return x + 5;
}

function bar(x) {
  console.log("calculating foo(" + x + ")!");
  return x * 2;
}

function memoize(func) {
  // Invocation context is not garbage-collected.
  // It contains the anonymous function we will still reference outside.
  var results = {};
  return function(x) {
    if (results.hasOwnProperty(x)) {
      return results[x];
    }
    results[x] = func(x);
    return results[x];
  };
}

var memoizedFoo = memoize(foo); // Creates 1st context, 1st copy of 'results' var.
var memoizedBar = memoize(bar); // Creates 2nd context, 2nd copy of 'results' var.

console.log(memoizedFoo(5));
// calculating foo(5)!
// 10

console.log(memoizedBar(3));
// calculating bar(3)!
// 6

console.log(memoizedFoo(5));
// 10 (notice how 'calculating!' is not printed this time)

console.log(memoizedBar(3));
// 6

console.log(memoizedFoo(10));
// calculating foo(10)!
// 15

console.log(memoizedBar(9));
// calculating bar(9)!
// 18
