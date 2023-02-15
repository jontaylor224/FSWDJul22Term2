var section = document.getElementById("warmup")

// Warmup 1: Display all strings longer than 4 characters in length
// strings exists because it's imported 
const longerThan4List = document.createElement("ul")
section.append(longerThan4List)

for (let i = 0; i < strings.length; i++) {
  let string = strings[i];
  // How to tell if string is longer than 4 characters?
  if (string.length > 4) {
    longerThan4List.innerHTML += `<li>${string}</li>`
  }
}

// Warmup 2: Find 15 if it is in the numbers array,
// and display it

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i]
  if (number === 15) {
    section.innerHTML += `<p>Found! The number ${number} at index ${i}`
  }
}

// Warmup 3: How many cars in the objects list are
// RWD? Find the number and display it.
let numCars = 0;
for (let i = 0; i < objects.length; i++) {
  let car = objects[i]
  if (car.drive === "RWD") {
    numCars++;
  }
}
section.innerHTML += `<p>${numCars} cars have rear wheel drive`
