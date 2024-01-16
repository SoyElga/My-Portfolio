import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import LabProjectImg from './assets/lab_solver.png'
import GithubProjectsImg from './assets/github.png'

import './HomePage.css'

function HomePage(props) {
    return (
        <div className='main-page'>
            <h1 className='welcome-message'>Welcome to my portfolio!</h1>
            <div className='projects-section'>
                <h3>Projects</h3>
                <div className='projects'>
                    <Card className='project-card'>
                      <Card.Img variant="top" className='card-image' src={LabProjectImg}/>
                      <Card.Body className='card-body'>
                        <Card.Title className='card-title'>Labyrinth Solver</Card.Title>
                        <Card.Text>
                          This is a little project where you can draw a labyrinth for the character to find the quickest route to the castle, have fun!
                        </Card.Text>
                        <a href="/projects/labyrinth-solver"><Button variant="secondary">Go to project</Button></a>
                      </Card.Body>
                    </Card>
                    <Card className='project-card'>
                      <Card.Img variant="top" className='card-image' src={GithubProjectsImg}/>
                      <Card.Body className='card-body'>
                        <Card.Title className='card-title'>School Projects</Card.Title>
                        <Card.Text>
                          This is a link to a github repo where I added some of the projects I developed during my career or in my free time
                        </Card.Text>
                        <a href="https://github.com/SoyElga/portfolio-projects" target='_blank'><Button variant="secondary">Go to repo</Button></a>
                      </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default HomePage;