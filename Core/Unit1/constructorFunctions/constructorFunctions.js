let dog = {
  name: "Pluto",
  breed: "cartoon",
  bark: function() {
    console.log("woof!")
  },
  sayName: function() {
    console.log(`My name is ${this.name} I am a ${this.breed} and I weigh ${this.weight}lbs`)
  }
}

dog.bark()
dog.sayName()

dog.color = "orange"

dog.sayColor = function() {console.log(`I'm ${this.color}`)}

dog.sayColor()

dog.enemy = "cats"

dog.chase = function () {console.log(`I chase ${this.enemy}`)}

dog.chase()

dog.weight = 100
dog.sayName()

//this allows us to assign a function to a key of an array. Once a function is part of a object it becomes method.


//constructor functions can only be in es5.
//they start with capital letters

function Dog(name, breed, enemy) {
  this.name = name;
  this.breed = breed;
  this.bark = function() {
    console.log("Woof!!")
  };
  this.enemy = enemy;
  this.chase = function() {
    console.log(`I chase ${enemy}`)
  }
}

let cuzzie = new Dog("Cuzzie", "Collie", "cats");

console.log(cuzzie)
console.log(cuzzie.name)
console.log(cuzzie.breed)

let tom = new Dog("Tom", "Golden Retriever", "Jerry");
let charlie = new Dog("Charlie", "English Sheep Dog", "Pat")

console.log(tom)
console.log(charlie)

// tom.bark()
// charlie.bark()
//
// cuzzie.chase()
// tom.chase()
// charlie.chase()

tom.bark = function() {
  console.log("Wuuuuf!")
}

charlie.bark()
tom.bark()


Dog.prototype.sayName = function() {
  console.log(`${this.name}`)
}

charlie.sayName()

console.log(Dog.prototype === charlie.__proto__)
