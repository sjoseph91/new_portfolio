import React from "react";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import img from "../images/SJ_LOGO_CIRCLE.png"

export default function Heading(){
    return (
        <Navbar bg="light" expand="md" fixed="top" >
            <Navbar.Brand href="/">
            <img
              src={img}
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="SJ Logo"
            /> 
          </Navbar.Brand>
          <Navbar.Brand>Sean Joseph</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/projects" >Projects</Link>
                <Link to="/Contact" >Contact</Link>
                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}