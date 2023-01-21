import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <div className="hero">
        <h1>Hi, I'm Sean Joseph</h1>
        <p>
          A Web Developer with a serious passion for creating functional and
          dynamic user experiences. Check out some of my work!{" "}
        </p>
        <div className="button-group">
          <button>
            <Link to="/about">About</Link>
          </button>
          <button>
            <Link to="/projects">Projects</Link>
          </button>
          <button>
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
