// If you need a copy of an object, you have several options
// Option 1: The gross way; manually assigning each property-value pair
var obj1 = {
  p1: 'v1',
  p2: 'v2'
}

var obj2 = {}
obj2.p1 = obj1.p1
obj2.p2 = obj1.p2

// Option 2: The slightly less gross way; assigning each property-value pair
// through a loop

// We can convert an object into an array of its keys (i.e. its properties)
var keys = Object.keys(obj1)
// console.log(keys)
// Then, we can loop through those keys, and set the values of the second 
// object
var obj2 = {}
// obj2.key = obj1.key // there is no key property

// console.log(obj2)

for (let key of keys) {
  obj2[key] = obj1[key]
  // WHy won't this work?
  // obj2.key = obj1.key // key is not a property of either object,
  // but the value of the key variable (either p1 or p2) is
}
console.log("Object 1:", obj1)
console.log("Object 2:", obj2)
console.log("Are they the same actual object?", obj1 === obj2)

// Object 3: Cheating with JSON
var stringObj = JSON.stringify(obj1)
console.log("After converting the object to a string:", stringObj)
console.log("Object 1's type:", typeof (obj1))
console.log("StringObj's type:", typeof (stringObj))
var obj2 = JSON.parse(stringObj)
console.log("And now obj2 is an object again:", obj2)
console.log("Type of obj2:", typeof (obj2))

// This method is the "quickest" way to make a true deep copy;
// because each property/value pair is being created anew based on a string,
// it guarantees that no level of nestedness is pointing back to the
// original in any way



// Option 4: Pure magic; the spread operator
var { ...obj3 } = obj1 // the individual property-value pairs of obj1
// are plopped into this new object, and the new object is stored in 
// the variable obj3
console.log("The new object created via spread:", obj3)
console.log("The old object that the new one was based on:", obj1)
console.log("Are they the same address?", obj3 === obj1)

console.log("********************************")
// Note that this only makes a shallow copy
var deepObj = {
  make: "Toyota",
  model: "Sienna",
  safetyFeatures: [
    "Air bags",
    "ABS",
    "Curtain Air Bags"
  ]
}
// Spread Operator: Original on the right of the assignment operator
// And on the left of the assignment operator, in curly braces, put 3 .'s
// in front of what you want the variable name to be
var { ...spreadCopyOfDeepObj } = deepObj
console.log("Are the objects the same?", spreadCopyOfDeepObj === deepObj)
console.log("But is the safetyFeatures array the same?", spreadCopyOfDeepObj.safetyFeatures === deepObj.safetyFeatures)