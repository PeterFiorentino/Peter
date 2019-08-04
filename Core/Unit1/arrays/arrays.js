let shoppingList = ["eggs" ,"milk" ,"cheese"];
let str = "ABCD";
console.log(shoppingList[shoppingList.length - 1]);
console.log(str[str.length - 1]);

//.push() adds whatever is in the parenthesis to the end of the array
shoppingList.push("avocados");
console.log(shoppingList);


//.pop() will remove the last element from the array
shoppingList.pop();
console.log(shoppingList);


//.unshift() will add something to the beginning of the array
shoppingList.unshift("water");
console.log(shoppingList);


//.shift() removes an element form the beginning of the array
shoppingList.shift();
console.log(shoppingList);


let toDo = [];
toDo.push("Take out the garbage");
toDo.unshift("water the plants");
toDo.pop();
toDo.shift();
console.log(toDo);


//.slice() removes things that are in the middle. First number in the
//parenthesis is the index. Second is how many items are going to be removed.
//The third (and further) is what you are going to add in place of what you removed.
shoppingList.splice(1, 1, "fruit", "cookies");
console.log(shoppingList);

//.concat() concatonates the two arrays.
let b = ["beans", "rice"];
console.log(shoppingList.concat(b));

//.join() turns an array into a string with commas
//.join("") turns an aray into a string with no commas or spaces (comes back as one word)
//.join(" ") turns an array into a string with spaces (or whatever is in quotes) and no commas


console.log(shoppingList.join());
console.log(shoppingList.join(""));
console.log(shoppingList.join(" "));
console.log(shoppingList.join(" and "));


let words = ["stop", "yield", "go"];
let j = "go";

for (let f = 0; f < words.length; f++) {
  if (words[f] === j){
    console.log("yes");
  }
}
