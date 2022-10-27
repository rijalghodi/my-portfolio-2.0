import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <Jumbotron />
      <About />
    </div>
  );
}

export default App;
