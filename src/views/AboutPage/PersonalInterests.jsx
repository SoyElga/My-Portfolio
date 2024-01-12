import Carousel from 'react-bootstrap/Carousel';

import React, { useState, useEffect } from 'react';

import GymImage from './assets/personalInterests/gym.jpeg'
import PetsImage from './assets/personalInterests/pets.jpeg'
import TravelImage from './assets/personalInterests/travel.jpeg'
import SeriesImage from './assets/personalInterests/series.jpg'

import './personalInterestsStyles.css'

function PersonalInterests(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [textContent, setTextContent] = useState({
        title: '',
        description: ''
      });

    const animationTime = 3000;

    const personalInterestsList = {
        Gym: {
            title: "Going to the gym",
            description: "I like to spend a couple hours at least 3 times a week in the gym, mostly I like to do calisthenics and free weight exercises",
            img: GymImage
        },
        Pets: {
            title: "Spend time with my pets",
            description: "In Mexico City we have 2 dogs and in Guadalajara I have another dog who I love to spend time with, petting and throwing the ball at her, the one in the image is called Lu, she arrived on December 2023",
            img: PetsImage
        },
        Travel: {
            title: "Travel around the world",
            description: "I have been to different countries around the world and everywhere I like to explore coffee shops and walk around the famous streets",
            img: TravelImage
        },
        Series: {
            title: "Watch TV Series and Movies",
            description: "This is what I like the most! watching series and movies alone or with friends, specially in the Cinema. Breaking Bad is my favourite TV Show",
            img: SeriesImage
        },
    };

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex)
    }

    useEffect(() => {
        setAnimate(true);
        const textTimer = setTimeout(() => {
            const active = Object.values(personalInterestsList)[activeIndex];
            setTextContent({
                title: active.title,
                description: active.description
            });
        }, 250);

        const timer = setTimeout(() => setAnimate(false), 500); // Duración de la animación
        return () => {
            clearTimeout(textTimer);
            clearTimeout(timer);
        }
    }, [activeIndex]);

    const activeItem = Object.values(personalInterestsList)[activeIndex];

    return (
        <div className='carrousell-container'>
            <Carousel className='pi-carrousel' activeIndex={activeIndex} onSelect={handleSelect}>
                {Object.entries(personalInterestsList).map(([key, { img }], index) => (
                    <Carousel.Item key={index} interval={animationTime}>
                        <img className="carrousel-image" src={img} alt={key} />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className={`details ${animate ? 'details-enter' : ''}`}>
                <h3>{textContent.title}</h3>
                <p>{textContent.description}</p>
            </div>
        </div>
    );
}


export default PersonalInterests;