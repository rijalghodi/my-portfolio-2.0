import React from "react";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <Jumbotron />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
