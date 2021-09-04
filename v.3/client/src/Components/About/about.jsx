import React from "react";
import { CardMedia, Divider, makeStyles, Typography } from '@material-ui/core';
import myPic from "../../Images/MyPic.jpg"

const useStyles = makeStyles(theme => ({
  container: {
    // [theme.breakpoints.up('md')]: {
    //   marginTop:"2rem",
    //   marginLeft:"22rem",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   margin:"2rem"
    // }
  },
  content:{
    fontSize: "1.25rem",
  },
  divider:{
    margin: "1.1rem"
  },
  pic: {
    marginRight: "1.3rem",
    width: "25%",
  }
}))

function About () {

    const classes = useStyles();
    return(
        <div className={classes.container}>
          <img src={myPic} className={classes.pic} alt="A portrait of Avery Stahl"/>
          <Typography className={classes.content}>
              My name is Avery Stahl and I am a Full Stack Web Developer.
              I acquired my skills through the University of Central Florida Coding Bootcamp
              and intend to continue with my education through self-taught research and experimentation
              by pushing myself with challenging projects, along with keeping up with the growing technologies
              and adapting to them. Within the three months in which I attended the coding bootcamp, I have
              gained a substantial amount of knowledge and the ability to apply the MERN Stack through small
              projects and building this website. 
              <Divider className={classes.divider} />
              <Typography className={classes.content}>
              some other personal stuff about me like hobbies and whatnot
               
              </Typography>
          </Typography>
          
          
        </div>
    );
};

export default About;