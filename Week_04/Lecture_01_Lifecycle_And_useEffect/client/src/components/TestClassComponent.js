import { Component } from 'react'

export default class TestClassComponent extends Component {
  // Equivalent of the constructor in Functional React?
  // your paramaters of the function itself (aka props) being
  // passed in, and the initialization of any state variables
  constructor(props) {
    // Initialize state
    this.state = {}
  }


  componentDidMount() {
    // Where is this in functional React? --> useEffect
  }


  render() {
    return (
      <div>TestClassComponent</div>
    )
  }
}
