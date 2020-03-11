// Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. Output the results in the following manner:
// firstAndLast(string) ➞ [first, last]

function firstAndLast(s) {
  let arr = s.split("");
  let result = [];
  let first = arr.sort().join("");
  let last = arr
    .sort()
    .reverse()
    .join("");
  result.push(first, last);
  return result;
}

// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (elem % 2 == 0) {
      res.push(elem);
    }
  }
  return res;
}

// Given an array of numbers, negate all elements contained within.
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

function negate(arr) {
  return arr.map(x => (x *= -1));
}

// Write a function that retrieves the last 'n' elements from an array.

function last(a, n) {
  if (n == 0) {
    return [];
  } else if (n > a.length) {
    return "invalid";
  } else {
    return a.slice(a.length - n);
  }
}

// Create a function that takes two arguments (item, times).
// The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated.
// Return the result in an array.

function repeat(item, times) {
  let res = [];
  for (let i = 0; i < times; i++) {
    res.push(item);
  }
  return res;
}

// Given an unsorted array, create a function that returns the nth smallest element
// (the smallest element is the first smallest, the second smallest element is the second smallest, etc).

function nthSmallest(arr, n) {
  if (n > arr.length) {
    return null;
  }
  let newArr = arr.sort();
  return newArr[n - 1];
}

// Write a function that returns true if an object is empty, and false otherwise.

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

// Write a function that returns true if all characters in a string are identical and false otherwise.

function isIdentical(s) {
  let count = 0;
  let arr = s.split("");
  for (let i = 1; i < arr.length; i++) {
    if (count != 0) {
      return false;
      break;
    }
    if (arr[i] != arr[i - 1]) {
      count++;
    }
  }
  if (count != 0) {
    return false;
  }
  return true;
}

// Given an array, transform that array into a mirror.

function mirror(arr) {
  let arr2 = arr.slice(0, arr.length - 1).reverse();
  return arr.concat(arr2);
}
