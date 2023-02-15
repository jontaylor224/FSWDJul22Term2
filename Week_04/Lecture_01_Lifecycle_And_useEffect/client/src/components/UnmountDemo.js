import { useEffect } from 'react'

const UnmountDemo = () => {

  useEffect(() => {
    console.log("********** COMPONENT DID MOUNT **********")
    console.log("Empty dependency array? Everything UP TO the return statement")
    console.log("will run on mount")
    console.log("*****************************************")
    // If your useEffect callback returns a function, that function
    // will execute when the component is unmounted
    return () => {
      console.log("******* COMPONENT WILL UNMOUNT **********")
      console.log("If your useEffect callback returns a function AND has an empty dependency array, ")
      console.log("that returned function will run ONLY on the unmounting of the component.")

      console.log("This is referred to as a \"cleanup method\"")
      console.log("*****************************************")
    }
  }, [])


  console.log("********** RENDER *************")
  return (
    <div>UnmountDemo</div>
  )
}

export default UnmountDemo