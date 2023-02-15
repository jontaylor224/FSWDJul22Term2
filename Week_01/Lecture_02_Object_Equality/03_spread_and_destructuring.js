var userData = {
  firstName: "Mary-Jane",
  lastName: "Watson",
  age: 20,
  username: "i<3spidey",
  password: "gogetemtiger",
  creditCardNumber: 1234123412341234
}

// We want to pass the firstName, lastName, age, and userName back to
// somewhere in an object

// Destructuring: We can grab, for example, just the first name and
// username from this object in a way that looks kind of like spread
var { firstName, username } = userData
console.log("This user's first name:", firstName)
console.log("And their username:", username)

// So, we could just grab the bits we need, and then put them
// in a new object
// var { firstName, lastName, email, username } = userData
// var mjw = { firstName, lastName, email, username }

// This isn't DRY enough if you ask me. Let's combine destructuring
// and spread:
var { password, creditCardNumber, ...restOfTheData } = userData
console.log("After pulling the password and ccn out first:", restOfTheData)

// If you only want one piece of information:
var { firstName } = userData
console.log(firstName)

// Both Destructuring and Spread can be used with arrays as well
var data = [
  {
    firstName: "Billy",
    lastName: "Bob",
  },
  {
    firstName: "Mary",
    lastName: "Sue",
  },
  {
    firstName: "Peter",
    lastName: "Griffin",
  }
]

// Let's make a copy (shallow) of the data
var [...newData] = data
console.log("Array copy:", newData)
console.log("Are they the same?", newData === data)

// What if we wanted to make a copy of the data, and add a new user
// to the copy
var newUser = {
  firstName: "Mary",
  lastName: "Shelley"
}
// This time, we want to use the spread operator on the righthand side
// of the assignment operator
var newData = [...data, newUser]

console.log("New data with one extra user:", newData)

// What about making copies of the contents of an array of object's nested
// arrays, but putting them all in one place
var data = [
  {
    field: "value",
    values: [1, 2, 3]
  },
  {
    field: "alskdjf",
    values: [4, 5]
  },
  {
    field: "lakjs",
    values: [6, 7, 8]
  }
]
// Old School (not wrong)
// let arrOfValues = []
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data[i].values.length; j++) {
//     arrOfValues.push(data[i].values[j])
//   }
// }
// console.log(arrOfValues)

// Less Old School (also not wrong)
// for (let i = 0; i < data.length; i++) {
//   arrOfValues.push(...data[i].values)
// }
// console.log(arrOfValues)

// The "I Wear My Sunglasses At Night" Cool-Kidz Approach
var nestedData = data.reduce((prev, curr) => [...prev, ...curr.values], [])
console.log(nestedData)

// We CAN destructure arrays, but the question is: why?
// var [firstElement, secondElement, thirdElement] = data
// console.log("First item in data:", firstElement)
// console.log("Second item in data:", secondElement)
// console.log("Third item in data:", thirdElement)

// You can "skip" elements when destructuring, but you need to know
// exactly how many elements to skip
var [firstElement, , thirdElement] = data

console.log("First:", data[0])
console.log("Fourth:", data[2])

// Pro Tip: To remove just the first item from an array:
var arr = [1, 2, 3, 4, 5]
var [deletedItem, ...arr] = arr
console.log(arr)

// To add to the beginning of the array:
var arr = [0, ...arr]
console.log(arr)
