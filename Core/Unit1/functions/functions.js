// let array1 = [1, 2, 3, 4, 5]
//
// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }
//
// console.log("==============");
//
// let array2 = [11, 12, 13, 14, 15]
//
// for (let i = 0; i < array2.length; i++) {
//   console.log(array2[i]);
// }
//
// //function declaration
// function loopAndPrint () {
//   console.log("Hello, World.");
// }
//
// //envoke or call the function. This will print the function is console.log is part of the function.
// loopAndPrint();
//
// let name = "Newton";
//
// function sayHello (parmater1) {
//   console.log("Hello, " + parmater1);
// }
//
// sayHello(name);
//
// function squareNum (num) {
//   return num * num;//function stops at return
// }
//
// console.log(squareNum(2));
//
// const addTwoNums = (num1, num2) => {
//   return num1 + num2;
// }
// let result = addTwoNums(5,4);
// console.log(result);


function evenOrOdd(num) {
  if ((num % 2) === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let result = evenOrOdd(1);
console.log(result);

const evenOrOddTwo = (num2) => {
  if ((num2 & 2) === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let result2 = evenOrOddTwo(12);
console.log(result2);
