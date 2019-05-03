import React, { Component } from "react";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import Search from "./components/Search/index";
import Results from "./components/Results/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
