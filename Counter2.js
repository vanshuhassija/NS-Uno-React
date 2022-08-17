//1. Import
// Declare Class
// Extend React.Component
// render method
// return from render
//export

import React from "react";

//Component name should always be startCase
class Counter extends React.Component {
  constructor() {
    //Always call super
    super();
    //Define the state Variable which is an object.
    //Each Component has its own separate state
    //State is local to component
    this.state = {
      //Now give all the Variable Names in the form of
      //key: value pairs
      counter: 0,
      shouldShowCounter: false,
    };
  }
  render() {
    const incrementCounter = () => {
      //Increment the counter variable
      // this.state.counter++;
      //This is not allowed in React
      //State is immutable in React
      this.setState({
        //Pass only those keys that you need to change
        counter: this.state.counter + 1,
      });
      //Pass an Object To Set State
      // Whenever a state variable changes, the nodes that are dependent
      //on that variable, get updated.
    };
    return (
      <React.Fragment>
        {/* A special Tag/Component which acts a parent but does not occupy any space in DOM */}
        <h1 className="counter">{this.state.counter}</h1>
        {/* Try to make arrow functions everytime */}
        <button onClick={incrementCounter}>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
