import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Navbar';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import Blog from './Components/Blog/blog';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft:"8px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "256px;"
    }
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className="App">
    <Router >
      <Navbar />
      <Switch >
      <div className={classes.container}>
        <Route exact path="/" render={props => <About {...props}/>} />
        <Route exact path="/projects" render={props => <Projects {...props}/>} />
        <Route exact path="/blog" render={props => <Blog {...props}/>} />
        <Route exact path="/contact" render={props => <Contact {...props}/>} />
      </div>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
