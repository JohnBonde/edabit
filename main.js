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

// Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    res.push(elem * arr.length);
  }
  return res;
}

// Given a string of letters, how many capital letters are there?

function capitalLetters(str) {
  let count = 0;
  let arr = str.split("");
  arr.forEach(x => {
    if (x == x.toUpperCase()) count++;
  });
  return count;
}

// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group.
// Given a sorted array of numbers, return the mean (rounded to one decimal place).

function mean(nums) {
  reducer = (a, c) => a + c;
  let sum = nums.reduce(reducer) / nums.length;
  return parseFloat(sum.toFixed(1));
}

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

function showdown(p1, p2) {
  let n1 = p1.split("").indexOf("B");
  let n2 = p2.split("").indexOf("B");
  if (n1 < n2) {
    return "p1";
  } else if (n1 > n2) {
    return "p2";
  } else {
    return "tie";
  }
}

// Imagine a circle and two squares: a smaller and a bigger one. For the smaller one, the circle is a circumcircle and for the bigger one, an incircle.
// Create a function, that takes an integer (radius of the circle) and returns the difference of the square-areas.

function squareAreasDifference(r) {
  let s = Math.sqrt(2 * Math.pow(r, 2));
  let small = Math.pow(s, 2);
  return Math.round(small);
}

// Write a function that takes an array of elements and returns only the integers.

function returnOnlyInteger(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (Number.isInteger(elem)) {
      res.push(elem);
    }
  }
  return res;
}
