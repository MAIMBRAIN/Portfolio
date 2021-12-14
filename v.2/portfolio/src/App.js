import React from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Projects from './components/Projects';
import Contact from "./components/Contact/Contact";

function App() {
  return(
    <div>
      <Navbar />
      <div className="container">
        <div id='about'>
          <br></br>
          <br></br>
          <About/>
        </div>
        <div id='projects'>
          <br></br>
          <br></br>
          <br></br>
          <Projects />
        </div>
      </div>
      <br></br>
      <br></br>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
};

export default App;
