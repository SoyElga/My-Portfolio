import React from 'react';

import './notFoundPage.css'
import RobotImg from './broken_robot.png'

function NotFoundPage(props) {
    return (
        <div>
            <div className='error-message'>
                <h2>ERROR</h2>
                <h1>404</h1>
                <img src={RobotImg} alt="Robot Image" />
                <h5>This page has not been found</h5>
            </div>
        </div>
    );
}

export default NotFoundPage;