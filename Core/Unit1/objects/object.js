// // objects are indetified by {}
//
// let apple = {};
//
// apple = {color: "red", ripeness: "ripe", type: "Gala"};
//
// // key goes on the left of the colon, value goes on the left.
// //key:value
//
// console.log(apple);
//
// apple.type = "Granny Smith";
//
// apple.size = "large";
//
// console.table(apple);
//
// let appleKeys = Object.keys(apple);
// let appleValues = Object.values(apple);
//
// console.log(appleKeys);
// console.log(appleValues);
// //Objects are also called Maps, HashMaps, Dictionary, Hash table


let closet = {
 winter: { hands: "gloves",
           head: "beenie"
           },
 summer: { hands: "rings",
           head: "baseball cap"
           }
}

// for (let key in closet) {
//   console.log(`${key}: ${closet[key]}`);
// }







let myCloset = [];
let myClosetValues = [];

for (let x in closet) {
  myCloset.push(x);
  myClosetValues.push(closet[x]);
}

console.log(myCloset);
console.log(myClosetValues);
