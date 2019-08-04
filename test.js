// for (let n = 1; n <= 12; n++) {
//   console.log("\nMultiplication Table for " + n + "\n");
//   for (let i = 1; i <= 10; i++) {
//     console.log(n + " * " + i + " = " + (n * i));
//   }
// }


let string = "Hello";


console.log(string[0]);


console.log(string.length);

console.log(string[string.length - 1]);

let capitalized = string.slice(0,(string.length - 1)) + string[string.length - 1].toUpperCase();

console.log(capitalized);


let balance = 50;
let dream = 1000000;
let drEvil = dream - balance + " dollars (pinky)";

if (balance < dream) {
  console.log(drEvil);
}


let word = "train";
let verbing = word + "ing";
let adj = word + "ly";

if (word.slice(word.length - 3) === "ing") {
  console.log(adj);
} else if (word.length < 3) {
  console.log(word);
} else {
  console.log(verbing);
}



let x = "Bubonic";
let withOutLast = x.slice(0, x.length - 1);

console.log(withOutLast);
