function done() {
    console.log("finished")
}

function sayHey(){
    console.log("Hey")
    // return done
}

function executeThis(myFunction) {
    // myFunction is a callback function
    myFunction()

}

function timesTwo(num) {
    return num * 2
}

let numbers = [1, 2, 3, 7, 15]

let doubled = numbers.map(timesTwo)

let myMap = function(arr, myFunc) {
    let results = []
    for(let i=0; i<arr.length; i++) {
        let newValue = myFunc(arr[i])
        results.push(newValue)
    }
    return results
}

// console.log(myMap(numbers, timesTwo))
let timesFive = numbers.map(num => num * 5)

function greaterThanFive(num) {
    return num > 5
}

console.log(numbers.filter(greaterThanFive))

let myFilter = function(arr, myFunc) {
    let results = []
    for (let i=0; i<arr.length; i++) {
        let testNum = arr[i]
        if(myFunc(testNum)) {
            results.push(testNum)
        }
    }
    return results
}

myFilter(numbers, greaterThanFive)

let evens = num => num % 2 == 0

console.log(numbers.filter(evens))
console.log(numbers.filter(num => num % 2 == 1))



