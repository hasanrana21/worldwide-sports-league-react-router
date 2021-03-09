import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";


function App() {
  return (
    <div >
      <Home></Home>
    </div>
  );
}

export default App;
