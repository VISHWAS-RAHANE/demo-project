import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Light from "./Light";
import { useState } from "react";
import Axios from "./Axios";

function App() {
  
  return (
    <div className="App">
      {/* <MyComponent /> */}
      {/* <h4 style={{marginTop:'2rem'}}>My Bulb appication</h4> */}
      {/* <Light /> */}

      <Axios/>
    </div>
  );
}

export default App;
