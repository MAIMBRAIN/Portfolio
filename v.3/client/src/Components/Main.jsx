import React from "react";

import { makeStyles } from '@material-ui/core';

import Navbar from "./Navbar";
import About from "./About/about";
import Projects from "./Projects/projects";
import Blog from "./Blog/blog";

import { Switch, Route } from "react-router";

const useStyles = makeStyles(theme => ({
    container: {
      // Tablets+
      [theme.breakpoints.up('md')]: {
        marginLeft:"21rem",
        marginRight:'3rem'
      },
      // Phones
      [theme.breakpoints.down("sm")]: {
        margin:"2.5rem"
      }
    }
  }))

function Main(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar/>
            <Switch>
                <div className={classes.container}> 
                    <Route exact path="/" render={props => <About {...props}/>} />
                    <Route exact path="/projects" render={props => <Projects {...props}/>} />
                    <Route exact path="/blog" render={props => <Blog {...props}/>} />
                </div>
            </Switch>
        </div>
    );
}

export default Main;