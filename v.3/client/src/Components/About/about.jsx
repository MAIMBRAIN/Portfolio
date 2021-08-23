import React from "react";
import { Avatar, Card, CardActionArea, CardMedia, Divider, makeStyles, Typography } from '@material-ui/core';
import myPic from "../../Images/MyPic.jpg"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "24px",
    marginRight: "12px",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      display: 'flex',
      flexWrap: "nowrap"
    },
  },
  content:{
    fontSize: "20px",
    marginRight: "12px",
    marginBottom: "24px"
  },
  divider:{
    marginTop:"16px",
    marginBottom: "16px"
  },
  pic: {
    width: "100%",
    height: "auto",
    display: "block"
  }
}))

function About () {

    const classes = useStyles();
    return(
        <div className={classes.container}>
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
          <CardMedia className={classes.pic} image={myPic} alt="Portrait of Avery Stahl"/>
          
        </div>
    );
};

export default About;