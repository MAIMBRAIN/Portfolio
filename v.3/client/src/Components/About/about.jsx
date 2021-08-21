import React from "react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container:{
    marginLeft: "256px"
  }
})

function About () {

    const classes = useStyles();
    return(
        <div >
            <p>This is the about page</p>
        </div>
    );
};

export default About;