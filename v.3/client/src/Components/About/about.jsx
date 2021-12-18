import React from "react";
import { Divider, makeStyles, Typography, Box, Grid } from '@material-ui/core';
import myPic from "../../Images/MyPic.jpg"
import GitHub from './github.svg';
import LinkedIn from './linkedin.svg';
import Mail from './mail.svg';
import Phone from './phone.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1"
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      display:"flex",
      wrap:"wrap",
      marginRight:"2rem",
    }
  },
  content:{
    fontSize: "1.25rem",
    marginTop: "auto",
    marginBottom: "auto",
  },
  pic: {
    alignSelf:"center",
    width: "25%",
    marginRight: "1.3rem",
    [theme.breakpoints.down("md")]: {
      width: "50%",
      display: "block",
      marginLeft: "auto",
      marginRight:"auto",
      marginBottom: "2rem"
    },
    [theme.breakpoints.down("sm")]: {
      width:"75%",
      display: "block",
      marginLeft: "auto",
      marginRight:"auto"
    }
  },
  divider:{
    margin: "1.1rem"
  }
}))

function About () {
    const classes = useStyles();
    return(
      <div className={classes.root}>
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
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.container}>  
          <Box>
            <Grid container className={classes.Grid}>
                <Grid item className={classes.GridItems}>
                    <a href="https://www.github.com/maimbrain" rel="noopener">
                        <img src={GitHub} alt="github.com/maimbrain" className={classes.Icon} />
                    </a>
                </Grid>
                <Grid item className={classes.GridItems}>
                    <a href="https://www.linkedin.com/in/avery-stahl-916373143/" >
                        <img src={LinkedIn} alt="https://www.linkedin.com/in/avery-stahl-916373143/" className={classes.Icon} />
                    </a>
                </Grid>
                <Grid item className={classes.GridItems}>
                    <a href="mailto:averystahl@hotmail.com">
                        <img src={Mail} alt="averystahl@hotmail.com" className={classes.Icon}/>
                    </a>
                </Grid>
                <Grid item className={classes.GridItems}>
                    <a href="tel:321-693-3994">
                        <img src={Phone} alt="(321)693-3994" className={classes.Icon}/>
                    </a>
                    
                </Grid>
            </Grid>
          </Box>
        </div> 
      </div>
    );
};

export default About;