import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioFull from "./components/Portfolio/PortfolioFull";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CertificatesFull from "./components/About/CertificatesFull";

function App() {
  return (
    <Router className="container-fluid p-0 m-0">
      <Switch>
        <Route path="/portfolio-full">
          <PortfolioFull />
        </Route>
        <Route path="/certificates-full">
          <CertificatesFull />
        </Route>
        <Route path="/">
          <Header />
          <Jumbotron />
          <About />
          <Portfolio />
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
