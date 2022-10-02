import React, {useState} from "react";

export default function ProjectBox(props){

    const [hovering, setHovering] = useState(false);
    const {
        githubLink,
        imgSrc,
        liveLink,
        title,
        description
    } = props;

    function handleMouseEnter(e){
        setHovering(true);
    }
    function handleMouseLeave(e){
        document.getElementById("description").textContent = "";
        setHovering(false);
    }
    
    const customStyle = hovering ? {
        backgroundColor: "lightgray",
        opacity: 0.6
    } :
    {
        
    }
    
    return (
        <div 
        className="project" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div className="imgContainer">
                <div className="overlay"  >
                    <p id="description">{hovering && description}</p>
                    <img src={imgSrc} style={customStyle} alt="project"/>
                </div>
            </div>
            <div className="title">
                {title}
            </div>
            <div className="links">
                <a href={liveLink} target="_blank">Project</a>
                <a href={githubLink} target="_blank">Github</a>
            </div>
        </div>
    )
}