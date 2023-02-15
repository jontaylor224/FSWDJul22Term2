import { useState, useEffect } from 'react'

/*
  UPDATING

  So far, we know that updates to React components are triggered
  by updates to State. But when React actually updates, how (and in
  what order) does it actually do so?
*/

const UpdateDemo = () => {
  console.log("technically, this runs first on an update (because functions run sequentially)")
  const [state, setState] = useState({
    name: '',
    count: 0
  })

  /*
  An empty dependency array means to ONLY run the callback on mount, but
  a populated dependency array will also run the callback when the values
  inside the array are updated
  */

  console.log("Does the useEffect run in a different order on updates?")
  useEffect(() => {
    console.log("********** COMPONENT DID MOUNT **********")
    console.log("you'll see this ONLY runs on initial mount")
    console.log("*****************************************")
  }, [])

  useEffect(() => {
    if (state.count === 0) {
      console.log("You can't avoid this function running on the initial mount")
    }
    else {
      console.log("*********** COMPONENT DID UPDATE ************")
      console.log(`But by providing a populated dependency array, you 
      CAN have the useEffect callback ALSO run on updates (assuming that provided
      array's value(s) have updated)`)
    }

    // NOTE: useEffect callbacks will not run a returned function
    // on mount
    return () => {
      console.log("If your useEffect does have dependencies in its dependency array, ")
      console.log("then every time the component updates, it will take the function returned")
      console.log("by the useEffect callback, run it after the render, but before the useEffect")
      console.log("callback runs on update")

      console.log("Example: Count -", state.count)
    }
  }, [state.count])

  const handleClick = (e) => {
    setState({
      ...state,
      count: state.count + 1
    })
  }

  console.log("*********** RENDER ***************")
  return (
    <p>
      Welcome, {state.name}
      <button onClick={handleClick}>Click to Increment {state.count}</button>
    </p>
  )
}

export default UpdateDemo