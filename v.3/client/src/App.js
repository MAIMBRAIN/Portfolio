import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route exact from="/" render={props => <About {...props}/>} />
        <Route exact path="/projects" render={props => <Projects {...props}/>} />
        <Route exact path="/contact" render={props => <Contact {...props}/>} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
