function User(name, userId) {
  this.name = name
  this.userId = userId
}

let userOne = new User("Anne", 6021)
let userTwo = new User("Ben", 6022)
let userThree = new User("Cal", 6023)
let userFour = new User("Dan", 6024)
let users = [userOne, userTwo, userThree, userFour].map( user => user.userId )
users.push(new User("Peter", 6025))
users.push(new User("John", 6026))

console.log(users) //[ 6021, 6022, 6023, 6024 ]


//######################################################

function AnimalCon(name) {
  this.name = name
}

let corey = new AnimalCon("Corey")

console.log(corey)


class Animal{
  constructor (name){
    this.name = name
  }
  sleep() {
    console.log("zzzzzzzzzzzz")
  }
  static sayHi() {
    console.log("Hi")
  }
}

let corey1 = new Animal("Corey");

console.log(corey1)

corey1.sleep()

class Human extends Animal {
  constructor(name, spokenLanguage, favoriteMovie) {
    super(name);
    this.spokenLanguage = spokenLanguage;
    this.favoriteMovie = favoriteMovie
  }
}

corey1 = new Human("Corey", "English", "Hardball")

console.log(corey1)
