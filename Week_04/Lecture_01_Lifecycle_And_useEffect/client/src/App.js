import { useEffect, useState } from 'react';
import './App.css';
import MountDemo from './components/MountDemo';
import UnmountDemo from './components/UnmountDemo';
import UpdateDemo from './components/UpdateDemo';

/* Vocab
- useEffect - React hook that allows us to use certain effects
based on something other than direct user interaction

*/

/* Basic order of a React Component's Lifecycle
A React component's life can be broken down into 3 phases
1. Mounting Phase - When the component is first rendered onto the DOM
  - There is nothing preventing a React component from mounting 
    several times during a single life session of the React application
2. Updating Phase - The phase that component lives in for the vast
  majority of its lifecycle
  - This the phase that is continuously ongoing as you interact with an
  application (and by extension, its components)
3. Unmounting Phase - The phase that involves removing a component
  from the DOM. Think of this as the end of a component's lifecycle
  - Reasons for a component being unmounted:
    - Conditional rendering that determined that the component should 
      not be rendered (after it already has been)
    - React Routing involves swapping components in and out of the DOM,
      so by definition, any time you navigate (using React routing, which
      we will learn next week), a component is unmounted while another is
      mounted
4. Error Handling* 

COINCIDENTALLY (but not actually), these 3 phases align with various
aspects of the useEffect hook
*/



function App() {
  const [shouldHide, setShouldHide] = useState(false)
  const hideComponent = () => {
    setShouldHide(true)
  }

  return (
    <>
      {/* <MountDemo />*/}
      <UpdateDemo />
      {
        shouldHide ?
          ''
          :
          <UnmountDemo />
      }
      <button onClick={hideComponent}>Hide</button>
    </>
  );
}

export default App;
