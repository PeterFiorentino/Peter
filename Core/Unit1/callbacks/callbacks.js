//A callback is a function that gets passed as an argument to use in another
//function.

//Basically, it lets you use a function inside of a function


function combine(num1, num2, callback) {
  return callback(num1, num2);
}

function mult(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function concat (num1, num2) {
  return num1 + "" + num2;
}

console.log(combine(5, 6, mult));
console.log(combine(10, 4, add));
console.log(combine(11, 3, sub));
console.log(combine(25, 5, div));
console.log(combine(5, 4, concat));




// function sayHello() {
//   console.log("Hello!");
// }
//
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
//
// setInterval(sayHello, 1000);
// setInterval(sayGoodbye, 1000);



// function forEachElem(arr, callback) {
//   // iterate through the array
//   for (let i = 0; i < arr.length; i++) {
//     // invoke our callback on each item of the array
//     callback(arr[i]);
//   }
// }
//
// function logValue(num) {
//   console.log(num)
// }
//
// function logTriple (num) {
//   console.log(num * 3);
// }
//
// function logDollarFormattedNum(num) {
//   console.log("$" + num)
// }
//
// let arr0 = [1, 2, 3];
//
// forEachElem(arr0, logValue);
// // will log: 1, 2, 3
//
// forEachElem(arr0, logTriple);
// // will log: 3, 6, 9
//
// forEachElem(arr0, logDollarFormattedNum)
// // will log: $1, $2, $3

//set setInterval calls a function every x amount of milliseconds (1 second is 1000 milliseconds)


// To put them into a new array :

let arr1 = [25, 50, 75, 100];

function forEachElem(arr, callback) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let callbackReturnValue = callback(arr[i]);
    output.push(callbackReturnValue);
  }
  return output;
}

function logDollarFormattedNum(num) {
  return "$" + num;
}


console.log(forEachElem(arr1, logDollarFormattedNum));

let users = [
  {
    name: "Oziel",
    email: "Oziel@pursuit.org",
    userId: 24601
  },
  {
    name: "Senka",
    email: "Senka@pursuit.org",
    userId: 38217
  },
  {
    name: "Erika",
    email: "Erika@pursuit.org",
    userId: 18104
  },
  {
    name: "Evan",
    email: "Evan@pursuit.org",
    userId: 78293
  }
]


function firstName (user) {
  return user.name
}

console.log(forEachElem(users, firstName));
