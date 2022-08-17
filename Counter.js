import React from "react";
//Linking CSS Files
//import <path to file>.css
import "./index.css";
import Counter from "./components/Counter";
class App extends React.Component {
  render() {
    //Style needs to be Js Object Always
    // I want to wrap my elements
    // I donot want div to take extra space
    //Use Custom Component
    //In Cases Where You need not to write anything Between Closing and opening Tag
    return (
      <>
        <Counter  />
      </>
    );
    //else
    return <Counter></Counter>;
  }
}

export default App;
