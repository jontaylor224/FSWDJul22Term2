const anonymousDisplay = document.createElement("section")
anonymousDisplay.innerHTML = "<h2>3 - Using Anonymous Functions as Callbacks</h2>"
var section = document.getElementById("anonymous")

// An anonymous function is a function that is not assigned to
// a variable when defined

// Example 1: The filter method from 02_higherOrderFunctions
// function lostNumbersCheck(number) {
//   return number > 10 && number < 30
// }

// To declare an anonymous function, skip the name of the function
console.log(numbers.filter(function (number) {
  return number > 10 && number < 30
}))

