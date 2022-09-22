import React from "react";
import {Link} from "react-router-dom";


function About(){
    return (
        <main class="about">
            <h1>About Me</h1>
            <div className="bar"></div>
            <div className="info">
                <div className="background-info">
                    <h2>Background</h2>
                    <p>I specialize in building the Front-end of websites and web applications in order to produce interactive and attractive user experiences.</p>
                    <p> I regularly use React alongside a wide range of libraries and frameworks to produce efficient solutions.</p>
                    <p> If you think my skills and experience are a good match for you or your company, don't hesitate to contact me.</p>
                    <button>
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
                <div className="skills-info">
                    <h2>My Skills</h2>
                    <div className="skills-container">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">Sass</div>
                        <div className="skill">Bootstrap</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">React</div>
                        <div className="skill">Git</div>
                        <div className="skill">Responsive Design</div>
                        <div className="skill">Linux Administration</div>
                        <div className="skill">Express</div>
                        <div className="skill">MongoDB</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;