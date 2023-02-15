// Let's look at primitives and how changing them affects
// their values
let x = 10;
let y = 20;

// If we re-assign the value of x to now be y
x = y;

// x and y now both have the same value
// console.log("x:", x)
// console.log("y:", y)
// // thus, they are the same
// console.log("Are x and y the same?", x === y)

// Although technically, they are not actually identical; they simply
// are holding on to the same value. Thus, if we change one,
// the other does not change
x += 5;
// console.log("x:", x)
// console.log("y:", y)
// console.log("Are x and y the same?", x === y)


// What about complex data types? Billy and Chloe's car
// is an object
let chloeCar = {
  color: 'silver',
  type: 'mini van',
  make: 'Toyota',
  model: 'Sienna'
}
let billyCar = chloeCar

// Chloe and Billy now own the same car
console.log("Chloe's Car:", chloeCar)
console.log("Billy's Car:", billyCar)
console.log("Do Billy and Chloe own the same car?", chloeCar === billyCar)

// Billy has his midlife crisis and feels the need for speed
// So Billy takes his mini van to Cool Dad Customs, and gets a paintjob and some
// flame decals
billyCar.color = 'red'
billyCar.decals = 'flames'

console.log("Chloe's Car:", chloeCar)
console.log("Billy's Car:", billyCar)
console.log("Do Billy and Chloe own the same car?", chloeCar === billyCar)
console.log("Is Chloe mad that their mini van is now a different color?", chloeCar === billyCar)

// What about that stranger that walked into the dealership and asked for the same car?
let chloeAndBillyCar = {
  color: 'silver',
  type: 'mini van',
  make: 'Toyota',
  model: 'Sienna'
}

// The dealer can't just say "Sorry, y'all own the same physical vehicle now. Have fun
// sharing it!"
// let strangerCar = chloeAndBillyCar // < this does not work in this situation :(

// Dealership needs to order a new Silver Toyota Sienna
let strangerCar = {}
strangerCar.color = chloeAndBillyCar.color
strangerCar.type = chloeAndBillyCar.type
strangerCar.make = chloeAndBillyCar.make
strangerCar.model = chloeAndBillyCar.model

console.log("Do Billy and Chloe own the same physical car as the Stranger?", chloeAndBillyCar === strangerCar)

chloeAndBillyCar.color = 'red'
chloeAndBillyCar.decals = 'flames'
console.log("After the paint job, Chloe and Billy's car:", chloeAndBillyCar)
console.log("And the stranger's car:", strangerCar)