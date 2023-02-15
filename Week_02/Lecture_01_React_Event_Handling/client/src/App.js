import logo from './logo.svg';
import './App.css';

// BIG TAKEAWAY!
// With all of our events, we can access the element (and thus any information it contains)
// via event.target

function App() {

  // Define the function I want to run when the button is clicked
  const handleClick = () => alert("You clicked me!")

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const data = new FormData(e.target)

    console.log("Name:", data.get('name'))
    console.log("Age:", data.get('age'))
  }

  const handleChange = (e) => {
    console.log(e)
    // What if we want to handle the change slightly differently
    // if the input is a date?
    if (e.target.name === "email") {
      if (!e.target.value.includes("@")) {
        alert("That's no email!")
      }
    } //else if (e.target.type === "date") {
    //   // Say no if the date is in the past
    //   if (e.target.value < Date.now()) {
    //     alert("I don't have a time machine!")
    //   }
    // }
  }

  return (
    <div className="container" onCopy={(e) => e.preventDefault()}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur sapiente, exercitationem saepe repellendus, quae accusantium illo reprehenderit autem laboriosam perferendis error eaque quasi. Molestiae?</p>
      <button className="test-class" onClick={handleClick}>Click me to see an alert pop up!</button>
      {/* <input type="text" onKeyDown={() => alert("You typed something")} /> */}

      {/* In React, the change event listener is different from the vanilla js
      version. Rather than running the callback after the changes have been made, 
      and the input is no longer the focus, the callback will run every time
      the value of the input is changed */}
      <input type="text" onChange={handleChange} name="email" />
      <input type="date" onChange={handleChange} name="date" />

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <br />
        <span onMouseOver={() => alert("You need some information??")}>?</span>
        <br />
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default App;
