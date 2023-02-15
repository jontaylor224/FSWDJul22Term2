// Higher Order and Arrow Functions
let arrayOfData = ["Spider-Man", "Incredible Hulk", "Iron Man"]

const result = arrayOfData
  .filter((hero) => hero.includes("Man"))
  .find((hero) => hero[0] === "I")

console.log(result)

let higherOrderResult = arrayOfData.filter((string) => string[0].toLowerCase() === "s")
console.log(higherOrderResult)

let results = [];
for (let i = 0; i < arrayOfData.length; i++) {
  let string = arrayOfData[i];
  if (string[0].toLowerCase() === "s") {
    results.push(string)
  }
}
console.log(results)

// Print the first character in each string
for (let i = 0; i < arrayOfData.length; i++) {
  console.log(arrayOfData[i][0]);
}

// Print the last character in each string
for (let i = 0; i < arrayOfData.length; i++) {
  console.log(arrayOfData[i][arrayOfData[i].length - 1])
}

// Print each string
for (let i = 0; i < arrayOfData.length; i++) {
  console.log(arrayOfData[i])
}

/* Common Higher Order Functions

.filter() => filter and return all items that match a given condition
.find() => find and return the first instance of an item that matches a given condition
.map() => return all items after some function runs
.some() => return a boolean based on whether there is SOME item in the array matching a given condition
.all() => return a boolean based on whether ALL items in the array match a given condition

*/

function tellMeWhatToDo(whatToDo) {

}


// Objects and Equality
let user1 = {
  name: "Cody",
  position: "Instructor",
  courses: ["FSWD Term 2", "FSWD Term 3"]
}

let user2 = {
  name: "Randy",
  position: "Instructor",
  courses: ["FSWD Term 1"]
}

// Primitive data types: pass by value
let string1 = "Hello"
let string2 = "Hello"
// Are string1 and string2 the same?
console.log(string1 === string2)

let num1 = 5
let num2 = 5
// Are num1 and num2 the same?
console.log(num1 === num2)

let isTodayTuesday = true
let isTomorrowWednesday = true
// Are isTodayTuesday and isTomorrowWednesday both true?
console.log(isTodayTuesday === isTomorrowWednesday)

// Complex data types: pass by reference
let tobey = { // at this memory address is stored another memory address (or range of memory addresses)
  name: "Spider-Man", // this is stored at memory address 75
  alterEgo: "Peter Parker", // this is tored at memory address 76
  powers: ["Wall Crawling", "Web Shooting", "Super Strength"],
  allies: [
    {
      name: "Iron Man",
      alterEgo: "Tony Stark"
    }
  ]
}
let garfield = {
  name: "Spider-Man", // this is stored at memory address 77
  alterEgo: "Peter Parker", // this is stored at memory address 78
  powers: ["Wall Crawling", "Web Shooting", "Super Strength"]
}
let holland = {
  name: "Spider-Man", // this is stored at memory address 79
  alterEgo: "Peter Parker", // this is stored at memory address 80
  powers: ["Wall Crawling", "Web Shooting", "Super Strength"]
}
// Are the 3 Spider-Men the same?
// console.log(tobey == garfield)
// What about their names?
// console.log(tobey.name === garfield.name)
// And their powers?
console.log(tobey.powers === garfield.powers)
//    newSpidey is pointing to holland 
let newSpidey = holland
// console.log(newSpidey === holland)
newSpidey.alterEgo = "Miles Morales"


const main = document.getElementById("test")

const printKata = function (kataNumber, object) {
  // For the usage of the DETAILS and SUMMARY tags
  // in HTML, see: http://mdn.io/details-element
  const detailsElement = document.createElement('details')
  main.append(detailsElement)
  //
  const summaryElement = document.createElement('summary')
  summaryElement.append("KATA " + kataNumber)
  detailsElement.append(summaryElement)
  //
  // http://mdn.io/json.stringify
  const stringifiedObject = JSON.stringify(object)
  detailsElement.append(stringifiedObject)
}


printKata(1, newSpidey)

