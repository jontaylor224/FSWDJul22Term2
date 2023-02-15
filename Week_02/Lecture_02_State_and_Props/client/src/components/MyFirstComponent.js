// State (or more specifically, the React hook useState) needs to be imported
// and used if we wish to keep track of any data that may or may not change during
// the course of using the app itself
import { useState } from 'react'

const MyFirstComponent = ({ name, email, addToGlobalCount, globalCount }) => {
  // In order to use state in React, we must call the useState hook function
  // provided by react. You will pass in the initial state value (aka, the first
  // time this component is rendered, what value do you want to keep track of?)
  const [nameToChange, setNameToChange] = useState(name)
  // nameToChange will always be the most current value of what I'm tracking in state,
  // and setNameToChange will now be the function I can use to force React to update
  // the DOM based on any changes I make.
  let [myNum, setMyNum] = useState(0)

  console.log("myNum started at 0, it is now", myNum)


  // const { name, email } = props // or, even more streamlined, just destructure the parameter directly


  // props represents an object containing all information given when this component
  // is rendered

  // If props is an object, and that object has a "name" property, how can we
  // take that value and display it in our HTML?

  const capitalizeName = () => {
    let newName = name.toUpperCase()
    setNameToChange(newName)
    addToGlobalCount()
    console.log(newName)
  }

  const incrementNum = () => {
    setMyNum(myNum + 1)
    addToGlobalCount()
  }

  return (
    <div>
      <h1>Hello, my name is {nameToChange}</h1>
      <h3>Global Count: {globalCount}</h3>
      <p>My email address is {email}</p>
      <button onClick={capitalizeName}>Capitalize Me Cap'n</button>
      <button onClick={incrementNum}>Click to increase myNum</button>
    </div>
  )
}

export default MyFirstComponent