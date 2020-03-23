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

// Create a function that applies a discount d to every number in the array.

function getDiscounts(nums, d) {
  let pct = parseFloat(d) / 100;
  return nums.map(x => x * pct);
}

// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (other.age < this.age) {
      return `${other.name} is younger than me.`;
    } else if (other.age > this.age) {
      return `${other.name} is older than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}

// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

function stupidAddition(a, b) {
  if (typeof a == typeof b) {
    if (typeof a == "string") {
      return parseInt(a) + parseInt(b);
    } else {
      return "" + a + b;
    }
  }
  return null;
}

// Let's say we wanted to change the amount of pages that Google could skip to.
// Create a function where given a number of pages n, return the word 'Google' but with the correct number of "o"s.

function googlify(n) {
  if (n > 1) {
    let o = "o";
    return "G" + o.repeat(n) + "gle";
  }
  return "invalid";
}

// Write a function that finds the sum of an array. Make your function recursive.

function sum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Write a function that returns true if a number is a palindrome.

function isPalindrome(n) {
  let x = n.toString();
  let y = x
    .split("")
    .reverse()
    .join("");
  return x == y;
}

// Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 1;
  static hasSD = true;
  static hasHD = false;
  static hasUHD = false;
  static price = "$8.99";
}

class StandardPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 2;
  static hasSD = true;
  static hasHD = true;
  static hasUHD = false;
  static price = "$12.99";
}

class PremiumPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 4;
  static hasSD = true;
  static hasHD = true;
  static hasUHD = true;
  static price = "$15.99";
}

// Create a function that takes in year and months as input, then return what year it would be after n-months has elapsed.

function afterNMonths(year, months) {
  if (!year) {
    return "year missing";
  } else if (!months) {
    return "month missing";
  } else {
    return Math.floor(year + months / 12);
  }
}

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(num * (i + 1));
  }
  return arr;
}

// Create a function that takes a Present Value of Cash pv, an Investment Rate ir and the Number of Years years to be Invested and returns the Net Present Value.

function netPresentValue(pv, ir, years) {
  let present = Math.round((pv * (1 - Math.pow(1 + ir, -years))) / ir);
  if (present < 0) return false;
  return `$${present}`;
}

// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:
// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

function rogerShots(arr) {
  return arr.filter(x => x == "Bang!" || x == "BangBang!").length / 2;
}

// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "/":
      if (num2 == 0) {
        return "Can't divide by 0!";
      }
      return num1 / num2;
      break;
    case "*":
      return num1 * num2;
      break;
    default:
      return "Invalid operator";
  }
}

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(change, amountDue) {
  let quarter = change[0] * 0.25;
  let dime = change[1] * 0.1;
  let nickle = change[2] * 0.05;
  let penny = change[3] * 0.01;
  return quarter + dime + nickle + penny >= amountDue;
}
