import React from 'react'
import ThemedLink from './ThemedLink'

const ContextDescription = () => {
  return (
    <>
      <p>
        Previously, if we wished to access or modify state across several components,
        we used prop drilling and lifting state. However, this involves the potential
        of state accessors and mutators being in components that are not actually using
        them.
      </p>
      <p>
        The Context API allows us to provide state to any component within a specific
        subset of the application. There are three major portions of the Context API
        that you will need to make this work:
      </p>
      <ul>
        <li>
          <strong>createContext</strong> - The <code>createContext</code> function is needed
          to start the process. There is not much to this function other than calling it and
          assigning its return value to a variable: <code>const myContext = createContext()</code>
        </li>
        <li>
          <strong>ContextProvider</strong> - This is the most flexible portion of the Context API.
          The Context Provider is a component that you must wrap around the portion of the application
          you wish to share the context. Then, you can initialize any state and create any functions
          that you would like to use across multiple components. Using the context created by <code>useContext</code>,
          you can create the provider, pass any values and/or functions to it as a value prop, and render
          children within the provider. If you wish some state to be shared by the entire application,
          you will need to wrap the <code>&lt;App /&gt;</code> in index.js.
          <br />
          This is the hardest portion to describe via text. Check the <code>UIProvider.js</code> file in
          the contexts folder for an example.
        </li>
        <li>
          <strong>useContext</strong> - The <code>useContext</code> hook is the final piece of the puzzle.
          In any component that you wish to utilize the shared state from, call the <code>useContext</code> hook.
          Whatever you passed as the value prop in your Context Provider will be what is returned by <code>useContext</code>.
        </li>
      </ul>
      <p>
        <ThemedLink to="/context/setclouds">Click Here</ThemedLink> to see more.
      </p>
    </>
  )
}

export default ContextDescription