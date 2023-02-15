import { useEffect, useState } from 'react'

const SummaryDemo = () => {
  const [state, setState] = useState("")

  // If you ONLY want to run some code on the initial mount:
  useEffect(() => {
    // your code here
  }, [])

  // If you ONLY want to run some code on initial mount, and have some
  // code that you want to run when the component is unmounted:
  useEffect(() => {
    // code to run on mount here

    return () => {
      // code to run on unmount here
    }
  }, [])

  // placeholder
  let dependency = ''

  // If you want to run some code on mount and update of some dependency
  useEffect(() => {
    // your code here (will run both on mount and update)
  }, [dependency])

  // If you ONLY want to run some code on update, but NOT when the initial mount happens
  useEffect(() => {
    // You're kind of on your own as far as the condition is concerned. Check out
    // useRef if you really want
    // if (/* some condition to determine if the mount has already happened*/) {
    //   // your code here
    // }
  }, [dependency])

  // If you have code to run on update of some dependency, AND some (perhaps)
  // event listener to update along with it?
  useEffect(() => {
    // your code to run on update

    // your event listener to add
    return () => {
      // your removal of the previous event listener
    }
  }, [dependency])

  // For anything you wish to just on mount, and unmount,
  // combine into one useEffect that takes an empty dependency array
  useEffect(() => {
    console.log("************ COMPONENT DID MOUNT *************")

    // Have that callback return your function to run on unmount
    return () => {
      console.log("*********** COMPONENT WILL UNMOUNT ************")
    }
  }, [])


  // For anything you wish to happen each time something specific in state
  // updates
  useEffect(() => {
    // Then have the useEffect accept that value as a dependency,
    // and the useEffect callback will be what runs on update (it will also
    // run on mount, so keep that in mind in case you need to find some way
    // to conditionally only perform the functionality on updates)
    console.log("************* COMPONENT DID UPDATE ***********")

  }, [state])
  return (
    <div>SummaryDemo</div>
  )
}

export default SummaryDemo