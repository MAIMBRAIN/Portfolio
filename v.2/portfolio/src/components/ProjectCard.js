import React from "react";
import GitRepos from "../utils/GitRepos";

const ProjectCard = (props) =>
{

    function getRepos(data)
    {
        GitRepos.repos(data).then(console.log(data))
    }

    getRepos();
    return(
        <div className="card mb-5">
            <div className="card-body">
                <img className="card-img-top" src="..." alt="Src = Project Img, Alt = Project Name" />
                <h5 className="card-title text-center">{props.title}</h5>
                <p className="card-text text-center">{props.readme}</p>
                <div className="row">
                    <div className="mx-auto">
                        <a className="btn repo-btn mx-2" href={props.repo}>View Repository</a>
                        <a className="btn project-btn mx-2" href={props.project}>View Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;