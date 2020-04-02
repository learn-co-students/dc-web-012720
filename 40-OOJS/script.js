//ES5
// function Instructor(firstName="Ann", lastName="Duong"){
//   this.firstName = firstName
//   this.lastName = lastName
// }
//
// Instructor.prototype.greet = function(){
//   console.log(`I am ${this.firstName} ${this.lastName}`)
// }
//
// Instructor.prototype.gotosleep = function(){
//   console.log(`${this.firstName} is going to sleep`)
// }

//ES6
class Instructor {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`I am ${this.firstName} ${this.lastName}`)
  }
}

class Coach extends Instructor {
  constructor(firstName, lastName, middleName){
    super(firstName, lastName) //RIGHT HERE!!!!
    this.role = "coach"
    this.middleName = middleName
  }

  deployLabs(){
    //have coaches greet students before deploying labs
    // self.greet()
    this.greet()
    console.log("deploying labs...")
  }

  static welcomeToFlatiron(){
    console.log("welcome to flatiron")
  }
}

let ann = new Instructor("Ann", "Duong")
let paul = new Instructor("Paul", "Nicholsen")
let jenny = new Coach("Jenny", "Ingram", "Alice")
let joe = new Coach("Joe", "Arias", "Alice")















//
