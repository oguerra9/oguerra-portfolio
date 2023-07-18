import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function NavBar(props) {

    return (
        <nav id="navbarContainer">
            <div className='d-flex navbarItemContainer'>
                {/* <div className='m-2'>
                    <Link to="/welcome" id="navbarItem">Welcome</Link>
                </div> */}
                <div className='m-2'>
                    <div id="navbarTitle">Olivia Guerra</div>
                </div>
                
                <div className='m-2'>
                    <Link to="/projects" id="navbarItem">Projects</Link>
                </div>
                <div className='m-2'>
                    <Link to="/resume" id="navbarItem">Resume</Link>
                </div>
            </div>
        </nav>
    );
}