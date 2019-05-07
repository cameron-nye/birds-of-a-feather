import React, { Component } from "react";
import "./App.css";
//Components
import Nav from "./components/Nav/Nav";
//Routes
import Routes from "./routes";

//STYLESHEETS
import './reset.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {Routes}
      </div>
    );
  }
}

export default App;
