import React from "react";
import data from "./data";
import ProjectBox from "./ProjectBox";


function Projects(){
    return (
        <main class="projects">
            <h1>Projects</h1>
            <div className="bar"></div>
            <div className="projects-container">
                {data.map(project => <ProjectBox key={project.title} {...project}/>)}
                
            </div>
        </main>
    )
}

export default Projects;