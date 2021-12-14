import React from "react";
import ProjectCard from './ProjectCard'

function Projects()
{
    return(
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="text-center">Projects</h1>
                    <br></br>
                </div>
            </div>
        {/* Map out Project Cards, Have lazy loading and make 2 cards slide inward when scrolling down */}
        <div className="row">
            <div className="col-sm-12">
            <ProjectCard
                title="RedeFinance"
                readme="This application was developed to help with tracking finances"
                repo = "https://github.com/MAIMBRAIN/RedeFinance"
                project = 'https://maimbrain.github.io/RedeFinance/'
            />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
            <ProjectCard
                title="No Background Check Required"
                readme="This application was developed to help those with a criminal past find jobs"
                repo = "https://github.com/panamadan/background-check-not-required"
                project = '#'
            />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
            <ProjectCard
                title="Movie List"
                readme="This application was developed to help with tracking movies"
                repo = "https://github.com/Massiel50/bamf"
                project = '#'
            />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
            <ProjectCard
                title="APPetite"
                readme="This application was developed to help with creating recipes with ingrediants in your refridgerator"
                repo = "https://github.com/cmoraes2013/APPetite-Project"
                project = '#'
            />
            </div>
        </div>
      </div>
    );
};

export default Projects;