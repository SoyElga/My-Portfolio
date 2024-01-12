import React from 'react';
import { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './ContactLink.css';

function ContactLink(props) {
    const [tooltipMessage, setTooltipMessage] = useState(props.message);
    const [messageAnimation, setMessageAnimation] = useState("")

    const iconStyles = {
        display: 'block',
        width: '100%',
        height: 'auto',
    };

    const handleClick = (e) => {
        if (!props.href && props.clipboard) {
            e.preventDefault();
            navigator.clipboard.writeText(props.clipboard);
            setMessageAnimation("tooltip-message")
            setTimeout(() => setTooltipMessage("Copied to Clipboard"), 250)
        }
    }

    const handleMouseLeave = () => {
        setTimeout(() => setTooltipMessage(props.message), 500)
        setMessageAnimation("")
    };

    return (
        <div className='icon-container'>
            <OverlayTrigger
              placement='top'
              overlay={
                <Tooltip id={`tooltip-${props.alt}`} >
                  <div className={messageAnimation}> {tooltipMessage}</div>
                </Tooltip>
              }
            >
              <a href={props.href || "#"} target={props.href? "_blank" : ""} onClick={handleClick} onMouseLeave={handleMouseLeave}>
                <img 
                    src={props.icon} 
                    alt={props.alt} 
                    style={iconStyles} 
                />
              </a>
            </OverlayTrigger>
        </div>
    );
}

export default ContactLink;
