import React from "react";
import { Divider, makeStyles, Typography, Box, Grid } from '@material-ui/core';
import myPic from "../../Images/MyPic.jpg"
import GitHub from './github.svg';
import LinkedIn from './linkedin.svg';
import Mail from './mail.svg';
import Phone from './phone.svg';

const useStyles = makeStyles(theme => ({
  about: {
    [theme.breakpoints.up('lg')]: {
      display:"flex",
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
    marginRight: "1.2rem",
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
  },
  icon:{
    width:'10rem',
  },
  iconText:{
    marginTop:'1rem',
    textAlign: 'center'
  },
  gridItems:{
    alignSelf:'center',
  },
  grid:{
    justifyContent: 'space-evenly',
  },
}))

function About () {
    const classes = useStyles();

    const contactMeList = [
      {
        text: "GitHub",
        icon: GitHub,
        url: "https://www.github.com/maimbrain"
      },
      {
        text: "LinkedIn",
        icon: LinkedIn,
        url: "https://www.linkedin.com/in/avery-stahl-916373143/"
      },
      {
        text: "E-mail",
        icon: Mail,
        url: "mailto:averystahl@hotmail.com"
      },
      {
        text: "Phone Number",
        icon: Phone,
        url: "tel:321-693-3994"
      },
    ];
    
    const contactSection = (
      <div>  
        <Box>
          <Grid container spacing={10} className={classes.grid}>
              {contactMeList.map((item, index) => {
                const {text, icon, url} = item;
                return(
                  <Grid item className={classes.gridItems}>
                    <a href={url} rel="noopener">
                        <img src={icon} alt={url} className={classes.icon} />
                    </a>
                    <Typography className={classes.iconText}>{text}</Typography>
                  </Grid>
                )
              })}
          </Grid>
        </Box>
      </div> 
    );

    return(
      <div>
        <div className={classes.about}>    
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
        {contactSection}
      </div>
    );
};

export default About;