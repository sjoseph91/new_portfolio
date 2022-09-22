
import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Heading from './components/Heading';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {

 

  return (
    <div className="App">
      <Heading />
        <div className="transition">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
        
    </div>
  );
}

export default App;
