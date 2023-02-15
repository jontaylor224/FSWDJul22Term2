import { useEffect, useState } from 'react';

const MountDemo = () => {
  console.log("****** CONSTRUCTOR *******")

  console.log(`Props already exist, let's initialize state (even though
    this "runs" on each update as well, the actual initialization of state
    only runs on the Mount)`)
  const [data, setData] = useState([])


  console.log("State initialized, its value is:", data)
  /*
  useEffect accepts a callback function as an argument (therefore, 
  useEffect is a higher order function) and will call that function
  in specific scenarios. These scenarios involve:
    1. The component mounted (aka the equivalent of componentDidMount)
    2. The dependency array that dictates which item updates should
        trigger the execution of this function.
        For just a mounting callback (something you only want to happen
        when the component is MOUNTED), provide an empty array
  */

  console.log("Declare any effects we want to use (aka useEffect)")
  useEffect(() => {
    console.log("*********** COMPONENT DID MOUNT ***********")
    console.log("That effect we wanted to use? Just happened!")

    console.log("***********************")
  }, [])

  console.log("*******************************")

  // After any and all methods are defined,
  // what's left would basically be the equivalent of
  // the render() method from a class component

  console.log("********** RENDER ***************")

  console.log("Let's go ahead and render our actual JSX")
  return (
    <div className="App">
      <p>This component is on the page!</p>
    </div>
  );
}

export default MountDemo