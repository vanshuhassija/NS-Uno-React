import React from "react";
//Linking CSS Files
//import <path to file>.css
import "./index.css";
class App extends React.Component {
  // A way where we can maintain the variables and it automitically
  //updates the UI when Changed

  //State Variables

  constructor() {
    //Always call super
    super();
    //Define the state Variable which is an object.
    this.state = {
      //Now give all the Variable Names in the form of
      //key: value pairs
      counter: 0,
      shouldShowCounter: false,
    };
  }

  //this.state.counter
  //Interpolation ---> Interpolate the value

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
    //Style needs to be Js Object Always
    return (
      <div>
        {/* Show the current counter variable */}
        {/* Whenever you want to write, some Js/dynamic, wrap it in {} */}
        {/* Anything that should be computed */}
        <h1 className="counter">{this.state.counter}</h1>
        {/* Try to make arrow functions everytime */}
        <button onClick={incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default App;
