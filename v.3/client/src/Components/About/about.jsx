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
            <br></br>
                <h1 > Avery Stahl </h1>
                <h3 >Full Stack Web Developer</h3>
                {/* <img className="img-fluid mx-auto d-block portrait" srcSet={MyPic} alt="Portrait of Avery Stahl" /> */}
                <br></br>
                <p>
                    My name is Avery Stahl and I am a Full Stack Web Developer.
                    I acquired my skills through the University of Central Florida Coding Bootcamp
                    and intend to continue with my education through self - taught research and experimentation
                    by pushing myself with challenging projects, along with keeping up with the growing technologies
                    and adapting to them. Within the three months in which I attended the coding bootcamp, I have
                    gained a substantial amount of knowledge and the ability to apply the MERN Stack through small
                    projects and building this website. 
                </p>
                <br></br>
        </div>
    );
};

export default About;