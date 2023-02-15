// Button Click:
// 1. Target the button we want to click
const buttonToClick = document.getElementById("clickMe")
// 2. Define the function you want to run when the button is clicked
const handleClick = () => alert("You clicked me!")
// 3. Attach the event listener
//   3a. Specify which event
//   3b. Provide the callback function
buttonToClick.addEventListener('click', handleClick)

// Typing things into an input:
// 1. Target the input we want to listen to typing in
const textInput = document.getElementById("example")
// 2. Define the function you want tor un when the button is clicked
const handleTyping = () => {
  const value = textInput.value

  console.log(value)
}

// 3. Attach the event listener
textInput.addEventListener('keydown', handleTyping)