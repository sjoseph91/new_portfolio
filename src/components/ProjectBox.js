import React from "react";

export default function ProjectBox(props){
    const {githubLink, imgSrc, liveLink, title} = props;
    return (
        <div className="project">
            <div className="imgContainer">
                <img src={imgSrc} alt="project"/>
            </div>
            <div className="title">
                {title}
            </div>
            <div className="links">
                <a href={liveLink}>Project</a>
                <a href={githubLink}>Github</a>
            </div>
        </div>
    )
}