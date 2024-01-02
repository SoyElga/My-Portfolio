import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LGLogo from '../../assets/logo_luisga.svg'
import './PageNavbar.css';

function PageNavbar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='justify-content-md-center'>
                  <Nav className="left-links">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                  </Nav>
                  <Navbar.Brand href="/">
                    <img src={LGLogo} className="lg-logo" alt="Logo" />    
                  </Navbar.Brand>
                  <Nav className="right-links">
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/projects/project-a">Project A</NavDropdown.Item>
                    <NavDropdown.Item href="/projects/project-b">Project B</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/projects/">
                      See all projects
                    </NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link href="https://github.com/SoyElga" target="_blank">Github</Nav.Link>
                  </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default PageNavbar;