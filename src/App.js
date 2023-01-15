import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Hacks from "./pages/Hacks";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/about" component={About} />
        <Route exact path="/hacks" component={Hacks} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/resume">
          <Redirect to={Resume} />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
