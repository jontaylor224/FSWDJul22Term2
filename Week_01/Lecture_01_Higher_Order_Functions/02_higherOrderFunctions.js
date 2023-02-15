var section = document.getElementById("hof")

/*
  Higher Order Functions are simply functions that accept another function
  as an argument
*/

// Example:
const example1 = document.createElement("section")
section.append(example1)
example1.innerHTML += "<h2>Example 1: Countdown</h2>"

function blastoff() {
  example1.innerHTML += "BLASTOFF!"
}

function higherOrderCountdown(whatToDo) {
  for (let i = 10; i > 0; i--) {
    example1.innerHTML += `<p>${i}</p>`
  }

  whatToDo() // Based on the function call on line 27, calling
  // whatToDo() will in fact call blastoff()
}

// To invoke our higher order function, pass the function DEFINITION as an argument
higherOrderCountdown(blastoff)

let x = 25;

function printProvidedNumber(y) {
  console.log(y)
}

printProvidedNumber(x)
printProvidedNumber(10)

// Example 2: I hate For Loops, Electric Boogaloo
// Base For Loop:
// for (let i = 0; i < strings.length; i++) {
//   if (strings[i].length <= 4) {
//     console.log("Too Few")
//   } else {
//     console.log(strings[i])
//   }
// }

function forEachIn(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

// Putting it to use 1: console log each string, unless it's 4
// or fewer characters; then, console log "Too Few"
function printOrTooFew(string) {
  if (string.length <= 4) {
    console.log("Too Few")
  } else {
    console.log(string)
  }
}

// console.log("Using My Higher Order Function")
// forEachIn(strings, printOrTooFew)
// console.log("*****************************")
// // The almighty javascript creators are ahead of me :(
// console.log("Using the Built In Array Method")
// strings.forEach(printOrTooFew)

// Example 3: What about a search?
// Write a higher function that will return a new array
// containing all numbers greater than 10 but less than 30

// Base For Loop (using numbers):
let numsInRange = []
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10 && numbers[i] < 30) {
    numsInRange.push(numbers[i])
  }
}

console.log("Base For Loop")
console.log(numsInRange)
console.log("*************")
console.log("My Higher Order Function")
function filterMyStuff(array, callback) {
  // in this case, the callback must return a boolean
  const result = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i])
    }
  }
  return result
}

function lostNumbersCheck(number) {
  return number > 10 && number < 30
}

const myNums = filterMyStuff(numbers, lostNumbersCheck)
console.log(myNums)
console.log("**************")
console.log("The Built In Array Method")
console.log(numbers.filter(lostNumbersCheck))
console.log("**************")

