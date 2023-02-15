var section = document.getElementById("arrow")

// Arrow Functions are just another way to create functions.

// Example 1: Converting lostNumbersCheck to an arrow function
// As a traditional function
// lostNumbersCheck(10)

const lostNumbersCheck = (number) => {
  return number > 10 && number < 30
}

// The same but as an arrow function
// no function key word; we're assigning a function to a variable
// let lostNumbersCheck = number => number > 10 && number < 30

// section.innerHTML = numbers.filter(lostNumbersCheck)

// But let's get even simpler! Let's try just taking the arrow
// function itself, and passing it into the filter higher order
// function



section.innerHTML += numbers.filter(n => n > 10 && n < 30)
