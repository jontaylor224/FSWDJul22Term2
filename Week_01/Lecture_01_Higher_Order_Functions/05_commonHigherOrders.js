var section = document.getElementById('common')

// Common higher order functions (all built in array methods
// can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


// Already, we have "accidentally" created two higher order
// functions that were built in methods in javascript


// These were:



// Some Methods return Nothing
// .forEach() => perform whatever the callback function does
// for each item in the array. note that .forEach() does not return 
// anything, nor does it affect the original array natively.
// NOTE: If your callback function modifies the original array, 
// then obviously that invoking of forEach will result in the original
// array being changed
strings.forEach((string, i, array) => {
  if (string.length < 5) {
    console.log(string)
  } else {
    array[i] = string.slice(0, 4)
    console.log(array[i])
  }
})
// ********************************
// Some Methods Return an Array
// ********************************
// .filter() => return a new array (a shallow copy) containing all elements
// in the original array that pass the conditional check performed
// by the callback (if the callback always returns true, for example,
// then all elements will be included in the output)
console.log(numbers.filter(num => num > 15 && num < 30))



// let newStrings = strings.filter(() => true)
// console.log(newStrings)
// console.log(strings)
// strings[2] = "Bologna"
// console.log(newStrings)
// console.log(strings)


// let newObjects = objects.filter(() => true)
// console.log(newObjects)
// console.log(objects)
// objects[2] = { make: "Ferrari" }
// console.log(newObjects)
// console.log(objects)

// .map() => return a new array containing the item returned each time
// the callback is executed
// Example: Create a li string for each item in the array
const ul = document.createElement("ul")
section.append(ul)
const listItems = strings.map(str => `<li>${str}</li>`)
// .forEach(li => ul.innerHTML += li)
// NOTE: Any methods/functions that return something can be chained
// console.log(listItems)


// ********************************
// Some Methods return a single element
// ********************************
// .find() => the same as .filter(), but rather than storing all
// results in an array and return it, it will find and return the
// FIRST element that passes the test
// Example: Find the first car with RWD
const firstRWD = objects.find((car) => car.drive === "RWD")
console.log(firstRWD)
const allRWD = objects.filter((car) => car.drive === "RWD")
console.log(allRWD)

// ********************************
// Some Methods Return a Boolean
// ********************************
// .some() => returns a boolean indicating if there is at least
// one element that matches the condition
// Example: Are any of the strings longer than 10 characters?
const anyLongerThan10 = strings.some(str => str.length > 10)
console.log("Are any strings longer than 10 characters?", anyLongerThan10)

// .every() => similar to .some(), but the boolean indicates if ALL
// elements in the array match the condition
// Example: Is every number less than 100?
const areAllLessThan100 = numbers.every(num => num < 100)
console.log("Is every number less than 100? ", areAllLessThan100)

// ********************************
// Some Methods Return... idk, depends?
// ********************************

// .reduce() => each iteration will take the returned result of the
// callback from the previous iteration, and pass it into the callback
// Example: Calculate the sum of all numbers
const sum = numbers.reduce((prev, curr) => prev + curr)

// Example 2: Take that array of list items from our .map(), and combine
// them all into 1 long string

ul.innerHTML = listItems.reduce((prev, curr) => prev + curr)
