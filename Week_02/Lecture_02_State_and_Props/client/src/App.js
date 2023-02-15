import { useState } from 'react';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';

function App() {
  const [globalCount, setGlobalCount] = useState(0)

  const addToGlobalCount = () => {
    setGlobalCount(globalCount + 1)
  }

  return (
    <div className="App">
      <p>Collectively, you have clicked a button {globalCount} times</p>
      <MyFirstComponent name="Cody" email="cody.thaller@kenzie.academy" addToGlobalCount={addToGlobalCount} globalCount={globalCount} />
      <MyFirstComponent name="Vesper" email="vesper@kenzie.academy" addToGlobalCount={addToGlobalCount} globalCount={globalCount} />
      <MyFirstComponent name="Nathaniel" email="nathanial@kenzie.academy" addToGlobalCount={addToGlobalCount} globalCount={globalCount} />

      {/* <button onClick={(e) => console.log(e)} className="banana">Click Me</button> */}
    </div>
  );
}

export default App;
