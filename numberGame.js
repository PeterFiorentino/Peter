const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

let randomNum = Math.floor((Math.random() * 10) + 1);
let randomNum2 = Math.floor((Math.random() * 10) + 1);
let answer = randomNum + randomNum2;

rl.question(`What is ${randomNum} + ${randomNum2}? \n`, function(userInput) {
  if (userInput.trim() == answer) {
    console.log("Correct!")
    rl.close();
  } else {
    rl.setPrompt("What an idiot! Try again! \n")
    rl.prompt();
    rl.on("line", function(userInput) {
      if(userInput.trim() == answer) {
        console.log("That's better");
        rl.close();
      } else {
        console.log(`${userInput}???? That's your best guess? `)
        rl.prompt();
      }
    })
  }
})
