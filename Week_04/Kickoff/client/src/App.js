import './App.css';
import { useEffect, useState } from 'react';
import TestComponent from './components/TestComponent';

function App() {
  const [count, setCount] = useState(0)
  const [isCountHighEnough, setIsCountHighEnough] = useState(false)
  const [myPokemon, setMyPokemon] = useState()
  const [shouldDisplayPokemon, setShouldDisplayPokemon] = useState(true)
  console.log(myPokemon)

  // Five seconds after the page loads, let's make an annoying
  // alert pop up telling the user you appreciate them.

  // useEffect hook accepts 2 arguments:
  // 1. The function to run once the component mounts
  // 2. An array of values in state that, when changed, should trigger
  //    the callback function provided as the first argument
  //    a. If the array is left empty, then the callback will ONLY 
  //       run when the component first mounts
  useEffect(() => {
    // setTimeout(() => alert("Thanks for visiting!"), 5000)
  }, [])

  useEffect(() => {
    if (count >= 10) {
      setIsCountHighEnough(true)
    }
  }, [count])

  useEffect(() => {
    if (isCountHighEnough) {
      alert("Stop clicking!")
    }
  }, [isCountHighEnough])



  return (
    <div className="App">
      <h1>If you can see this, the App.js component has been mounted to the DOM</h1>
      {count}
      <button disabled={isCountHighEnough} onClick={() => setCount(count + 1)}>Add 1</button>
      <br />
      {
        shouldDisplayPokemon ?
          <TestComponent myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
          :
          ''
      }
      <button onClick={() => setShouldDisplayPokemon(!shouldDisplayPokemon)}>I {shouldDisplayPokemon ? "don't" : ""} want to see Pokemon Anymore</button>
    </div>
  );
}

export default App;
