import SomeComponent from './components/SomeComponent'
import './App.css';

const importedData = [
  {
    mnemonic: "Please",
    operation: "Parentheses"
  },
  {
    mnemonic: "Excuse",
    operation: "Exponents"
  },
  {
    mnemonic: "My",
    operation: "Multiplication"
  },
  {
    mnemonic: "Dear",
    operation: "Division"
  },
  {
    mnemonic: "Aunt",
    operation: "Addition"
  },
  {
    mnemonic: "Sally",
    operation: "Subtraction"
  }
]

function App() {

  let indexOfDesiredData = 2

  let preFormattedData = <p>{importedData[0]}</p>

  let user = {
    name: "Cody",
    age: 31,
    didWinPowerball: false
  }


  // let someVar = someCondition ? 'someValueIfTrue' : 'someValueIfFalse'

  return (
    <div className="App">
      {/* 
        in order to render data in react, the data needs to be formatted
        in one of a few different ways:
          1. as a string
          2. as a number
          3. as a jsx element
          4. as an array of one of the 3 above
      */}

      {/* For example, if I were to render just the first string in a p tag: */}
      {/* <p>{importedData[indexOfDesiredData]}</p> */}
      {/* Or, if I want to also display the index of that value */}
      {/* <p>{importedData[indexOfDesiredData]} is at index {indexOfDesiredData} </p> */}
      {/* Note that booleans are not included */}
      <p>Is the data at index 0? {indexOfDesiredData === 0 ? "Yes" : "No"}</p>

      {/* If somehow, we had the actual JSX set up beforehand: */}
      {/* {preFormattedData} */}

      {/* 
        But, if I want to display everything in the array, it should be an array of
        one of the aforementioned data types 
      */}
      {/* {importedData} */}
      {/* 
        For example, to display an array of strings as an unordered list, we can use 
        our higher order functions
      */}
      {
        importedData.length > 0 ?
          <>
            <h3>These are the mnemonic terms that can help you remember your order of operations!</h3>
            <ul>
              {
                importedData.map((element, i) => (
                  <SomeComponent
                    key={`imported_data_${i}`}
                    mnemonic={element.mnemonic}
                    operation={element.operation}
                  />
                ))
              }
            </ul>
          </>
          : <p>Loading...</p>
      }

      {/* {user} */}


    </div>
  );
}

export default App;
