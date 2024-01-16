import React from 'react';

import { Navbar, 
        Container, 
        Nav, 
        NavDropdown, 
        Dropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import LGLogo from '../../assets/logo_luisga.svg'
import './PageNavbar.css';

function PageNavbar() {
  const base_url = "/My-Portfolio/#"
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className='large-navbar'>
                <Container className='justify-content-md-center lg'>
                  <Nav className="left-links">
                    <Nav.Link href={`${base_url}/`}>Home</Nav.Link>
                    <Nav.Link href={`${base_url}/about`}>About Me</Nav.Link>
                  </Nav>
                  <Navbar.Brand href={`${base_url}/`}>
                    <img src={LGLogo} className="lg-logo" alt="Logo" />    
                  </Navbar.Brand>
                  <Nav className="right-links">
                    <NavDropdown title="Projects" id="navbarScrollingDropdown">
                      <NavDropdown.Item href={`${base_url}/projects/labyrinth-solver`}>Labyrinth Solver</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="https://github.com/SoyElga/portfolio-projects" target='_blank'>
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