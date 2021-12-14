import React from "react";
import './About.css'
import MyPic from "../../images/MyPic.jpg"

function About() {
    return(
        <div className="row">
            <div className="col-sm-12 mx-auto">
                <br></br>
                <h1 className="text-center"> Avery Stahl </h1>
                <h3 className="text-center">Full Stack Web Developer</h3>
                <img className="img-fluid mx-auto d-block portrait" srcSet={MyPic} alt="Portrait of Avery Stahl" />
                <br></br>
                <h3>
                    My name is Avery Stahl and I am a Full Stack Web Developer.
                    I acquired my skills through the University of Central Florida Coding Bootcamp
                    and intend to continue with my education through self - taught research and experimentation
                    by pushing myself with challenging projects, along with keeping up with the growing technologies
                    and adapting to them. Within the three months in which I attended the coding bootcamp, I have
                    gained a substantial amount of knowledge and the ability to apply the MERN Stack through small
                    projects and building this website. 
                </h3>
                <br></br>
            </div>
        </div>
    );
};

export default About;