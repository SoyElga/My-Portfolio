import React from 'react';
import PersonalPicture from './assets/linkedin_no_background.png';
import UniLogo from './assets/tec_logo.png';
import './AboutPage.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';

import SkillComponent from './SkillComponent';
import personal_skills from './skillsData';
import BloannyPic from './assets/certificates/Bloanny.jpeg';
import NFTCertificate from './assets/certificates/NFTs_certificate.jpg';
import SQLCertificate from './assets/certificates/SQLCertificate.jpg';
import PersonalInterests from './PersonalInterests';
import ContactLink from './ContactLink';

import WaLogo from './assets/contacts/whatsapp.svg';
import EmailLogo from './assets/contacts/email.svg';
import LinkedinLogo from './assets/contacts/linkedin.svg';
import GithubLogo from './assets/contacts/github.svg';

function AboutPage(props) {

    return (
        <div>
            <div className='name-section'>
                <div className='text'>
                    <div className='name'>
                        <h1>Luis Gabriel</h1>
                        <h2>Martínez Rentería</h2>
                    </div>
                    <hr />
                    <div className='title'>
                        <h3>Data Science and Mathematics Engineer</h3>
                        <p>Hello! I'm an engineer in data science and mathematics with a minor in advanced artificial intelligence. Experience with web scrapping, statistical analysis, data mining, data cleaning and model engineering. I have also worked on Full Stack development and smart contract development.</p>
                    </div>
                </div>
                <div className='picture'>
                    <img src={PersonalPicture} alt="PersonalPic" className='personal-pic'/>
                </div>
            </div>
            <hr className='section-separator'/>
            <div className="education-experience">
                <div className='header'>
                    <h1>Education</h1>
                </div>
                <div className='content'>
                    <div className='text'>
                        <div className='education'>
                            <h3>Data Science and Mathematics Engineering</h3>
                            <h5>Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM), Monterrey</h5>
                            <h6>December 2023</h6>
                            <br />
                            <h3>Minor in advanced artificial intelligence</h3>
                            <h5>Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM), Monterrey</h5>
                            <h6>Fall 2022</h6>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={UniLogo} alt="Tec de monterrey" />
                    </div>
                </div>
            </div>
            <hr className='section-separator'/>
            <div className="work-experience">
                <div className='header'>
                    <h1>Work Experience</h1>
                </div>
                <div className='text'>
                    <div className='jobs'>
                        <div className='job'>
                            <div className='job-title'>
                                <h3>Web Developer and "Juegamex" Coordinator</h3>
                                <h5>January 2023 - Present</h5>
                            </div>
                            <h5 className='job-place'>Cambiando Mexico con Valores A.C. Monterrey</h5>
                            <ul>
                                <li>I developed the oficial web page for the organization using React, EmailJS for automatic email response and Bootstrap for styles. The webpage's purpose is to promote the organization's work, reclute new people and get funds</li>
                                <li>I made a proposal for the use of technologies to update and formalize the practices that were carried out in the organization, such as the use of repositories, the development stack and the video game engine</li>
                                <li>I held a git and github workshop so that the students knew how to collaborate as a team and could share their projects with us once they were finished</li>
                                <li>I organize every schollar period the work teams for the students that work with us for social service hours, making the work teams for the diferent parts of the platform we are developing (Juegamex), assigning the projects and evaluating their progress</li>
                                <li>I carry out the progress meetings that we have with the students to see where each of the parts that are being developed are in the project and assign the objectives for the next meeting.</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="job">
                            <div className="job-title">
                                <h3>Data Science and Full stack developer</h3>
                                <h5>May 2023 — November 2023</h5>
                            </div>
                            <h5 className='job-place'>4040apps, Guadalajara</h5>
                            <ul>
                                <li>I developed web scraping tools for real state data scraping and user data gathering to generate a potential users database, I developed this in Python with Selenium, pandas and Streamlit for an UI to use the bot</li>
                                <li>I developed web scraping tools to gather user information such as judicial processes and college and postgraduate academic background to create a potential users database, I developed this in Python with Selenium and Streamlit</li>
                                <li>I Developed a sign in process with Outlook and One-Time Passwords for a secure system login, using React for the front end and Fast API with Python for the backend</li>
                                <li>I developed a CRUD-API for an admin page where admins can create, read, update, delete users, roles, and permissions in the platform</li>
                            </ul>
                        </div>
                        <hr />
                        <div className='job'>
                            <div className='job-title'>
                                <h3>Smart Contract Developer Internship</h3>
                                <h5>February 2022 - September 2022</h5>
                            </div>
                            <h5 className='job-place'>4040apps, Guadalajara</h5>
                            <ul>
                                <li>I took a Smart Contract Development Course in Udemy to train myself in Smart Contract Development and learn about Blockchain technology</li>
                                <li>I did a market analysis to find the NFT Marketplaces that existed and look for market opportunities.</li>
                                <li>I made different business proposals for an NFT marketplace, proposing a new standard for stackable NFTs and tokens</li>
                                <li>I built a blockchain development environment using Ganache and Truffle for testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='section-separator'/>
            <div className='project-history'>
                <div className='header'>
                    <h1>Project History</h1>
                </div>
                <div className="text">
                    <div className="projects">
                        <div className="project">
                            <h3>Hotel Recognition for Human Trafficing</h3>
                            <p className='project-description'>
                                One of the big problems in the world is human trafficing, and most of the pictures are in hotel rooms. This is a competition held by Kaggle to prevent this issue with a dataset of +47K pictures from +3K hotels around the world, our goal was to develop an AI model to predict the hotel from which a picture was taken.
                            </p>
                            <ul>
                                <li>Because the database was very unblanced, we used picture preprocessing and sampling techniques to balance the number of samples from the different hotels</li>
                                <li>Applied fine tuning to pretrained models to accelerate the training process and reduce the energy consumption, adding some layers to the Neural Network for classification</li>
                                <li>We tried different architectures, from Resnet to VGGNet, to compare the models and choose the one with the best accuracy</li>
                            </ul>
                        </div>
                        <br />
                        <div className='project'>
                            <h3>Machine Learning Model for Cemex</h3>
                            <p className='project-description'>
                                We were asked to develop a model to find the most efficient way to distribute a concrete order between combustion machines and electric machines, in order to not pollute as much and make the cost more efficient.
                            </p>
                            <ul>
                                <li>We made an exploratory analysis of the database Cemex provided us, to understand the data and se wich variables we were going to use</li>
                                <li>We deleted the variables we were not going to use and then cleaned the data, filling null records, removing outliers and normalizing the data</li>
                                <li>We tried different regression models to apply to the model:
                                    <ul>
                                        <li>Support Vector Regressor</li>
                                        <li>Decision Tree Regressor</li>
                                        <li>Random Forest Regressor</li>
                                        <li>XG Boost</li>
                                    </ul>
                                </li>
                                <li>We picked the best model based on the R<sup>2</sup>, MAE, MSE and RMSE (Random Forest Regressor in our case) and we tried to find the best hiperparameters to the model using GridSearch</li>
                                <li>We developed a web application using Flask to be able to try the model and make predictions, as well to showcase the project objective and the team</li>
                            </ul>
                            <a href="https://concrete-project.onrender.com/" target="_blank" className='outside-project-link'>Link to the web app</a>
                        </div>
                        <br />
                        <div className='project'>
                            <h3>Digital Document Signing web app for Teleton</h3>
                            <p className='project-description'>
                            When COVID-19 arrived and its mobility limitations, Teleton searched an alternative to autograph signatures, therefore a system of digital signatures was apt for their needs.
                            </p>
                            <ul>
                                <li>We developed from scratch a python library for ECDSA key generation and signature</li>
                                <li>We validaded the solution with test vectors defined in the RFC6979 and implemented the library with the NIST-P 256 curve</li>
                                <li>We implemented a MySQL Database to store users, hashed keys, certificates, signatures and files</li>
                                <li>We developed a web app using Flask for them to be able to use the system</li>
                            </ul>
                            <a href="https://github.com/SoyElga/pagina-teleton" target='_' className='outside-project-link'>Link to the github repository</a>
                        </div>
                        <br />
                        <div className='project'>
                            <h3>Esports match predictor bot for discord</h3>
                            <ul>
                                <li>Developed an AI for League of Legends professional esports matches, this bot can predict with high accuracy match winner, most likely scores and other statistics using Python</li>
                                <li>Developed a Discord bot using Python that functions as an input for the prediction model</li>
                                <li>Hosted all parts of the bot in the cloud using AWS for it to be available all the time, optimizing the code to make less requests and give users the predictions generated by the AI</li>
                                <li>Developed a web scraper for Valorant (game) data to have enough data to create a new AI for this game</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='section-separator'/>
            <div className='skills'>
                <div className='header'>
                    <h1>Skills</h1>
                </div>
                <Swiper
                    modules={[Autoplay ]}
                    spaceBetween={10}
                    breakpoints={{
                        240: {slidesPerView: 1},
                        480: {slidesPerView: 2},
                        720: {slidesPerView: 3},
                        960: {slidesPerView: 4},
                        1200: {slidesPerView: 5},
                        1440: {slidesPerView: 6},
                    }}
                    autoplay={{ 
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    {Object.entries(personal_skills).map(([skillKey, { title, description, img }]) => (
                        <SwiperSlide key={skillKey}>
                            <SkillComponent img={img} skillName={title} description={description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <hr className='section-separator'/>
            <div className='certificates-contests'>
                <div className='header'>
                    <h1>Certificates and contests</h1>
                </div>
                <div className='contests'>
                    <div className='contest'>
                        <div className="description">
                            <h3>Startup Weekend Blockchain Mexico, Techstars (May 2022)</h3>
                            <h5>Achieved second Place</h5>
                            <p>We developed a business idea to meet the loan needs for users without credit history using the Stellar Blockchain network. The "Bloanny" project intended, with the use of artificial intelligence, to rate the risk level of Latin American loan applicants based on their digital footprint, supported with a series of smart contracts that would be responsible for connecting lenders around the world with loan applicants</p>
                        </div>
                            <img src={BloannyPic} alt="BLoanny Team" />
                    </div>
                </div>
                <hr />
                <div className='certificates'>
                    <div className='certificate'>
                        <div className='description'>
                            <h3>The Complete NFT Web Development Course - Zero To Expert</h3>
                            <h5>Udemy</h5>
                            <p>In this course I learned the way Smart Contracts work in the Ethereum Virtual Machine, I learned to code in Solidity and I learned to develop the ERC-721 standard for NFT smart contracts from scratch. I also learned how to mount a Blockchain Development Environment with Ganache and how to connect it with web3.js to a React front end</p>
                        </div>
                        <img src={NFTCertificate} alt="The Complete NFT Web Development Course" />
                    </div>
                    <hr />
                    <div className='certificate'>
                        <div className='description'>
                            <h3>SQL for Data Analysis - with SQL Server</h3>
                            <h5>Udemy</h5>
                            <p>In this course I reinforced the knowledge I had on SQLServer, since this course is the preview for another course I'm taking now from the same instructor. I reinforced mi knowledge in database connection, filtering data, creating new tables and data, table and data normalization and Joining requests from diferent tables</p>
                        </div>
                        <img src={SQLCertificate} alt="The Complete NFT Web Development Course" />
                    </div>
                </div>
            </div>
            <hr className='section-separator'/>
            <div className='personal-interests'>
                <div className='header'>
                    <h1>Personal Interests</h1>
                </div>
                <div className='content'>
                    <PersonalInterests />
                </div>
            </div>
            <hr className='section-separator'/>
            <div className='contact-list'>
                <div className='header'>
                    <h1>Contact List</h1>
                </div>
                <div className='contacts'>
                    {/* <a href=""><img className="contact-icon wa" src={ WaLogo } alt="Whatsapp" /></a>
                    <a href=""><img className="contact-icon email" src={ EmailLogo } alt="Email" /></a>
                    <a href=""><img className="contact-icon linkedin" src={ LinkedinLogo } alt="Linkedin" /></a>
                    <a href=""><img className="contact-icon github" src={ GithubLogo } alt="Github" /></a> */}
                    <div className='contact-container'>
                        <ContactLink 
                            clipboard="5634329366"
                            icon={WaLogo}
                            alt="WhatsApp"
                            message="+52 1 56-3432-9366"
                        />
                    </div>
                    <div className='contact-container'>
                        <ContactLink 
                            clipboard="luisgabrielmtzr@gmail.com"
                            icon={EmailLogo}
                            alt="Correo"
                            message="luisgabrielmtzr@gmail.com"
                        />
                    </div>
                    <div className='contact-container'>
                        <ContactLink 
                            href="https://www.linkedin.com/in/luis-gabriel-martinez-renteria/"
                            icon={LinkedinLogo}
                            alt="Linkedin"
                            message="Click to Linkedin page"
                        />
                    </div>
                    <div className='contact-container'>
                        <ContactLink 
                            href="https://github.com/SoyElga"
                            icon={GithubLogo}
                            alt="Github"
                            message="CLick to Github page"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutPage;