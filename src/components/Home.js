import React from "react";
import {Link} from "react-router-dom";


function Home(){
    return (
        <main class="home">
            <div className="hero">
                <h1>Hi, I'm Sean Joseph</h1>
                <p>A  Web Developer with a serious passion for creating functional and dynamic user experiences. Check out some of my work! </p>
                <button>
                    <Link to="/projects">Projects</Link>
                </button>
            </div>
        </main>
    )
}

export default Home;