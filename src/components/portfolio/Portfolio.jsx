import React from 'react';
import './portfolio.css';

const projects = [
  {
    title: 'NLP CODE EDITOR ',
    description: 'A desktop application that leverages natural language processing (NLP) and machine learning techniques to generate code and manage file structures. ',
    githubLink: 'https://github.com/Mithoonns2001/NLP_CODE_EDITOR'
  },
  {
    title: 'SIGN LANGUAGE RECOGNITION ',
    description: 'A Python application to predict sign language by detecting hand gestures and providing the respective output in the native language. ',
    githubLink: 'https://github.com/Mithoonns2001/Hand-Gesture-Detection'
  },
  {
    title: 'CRIME REPORTING SYSTEM',
    description: 'This is an online web portal that allows people to register complaints about incidents through this portal and also displays the number of incidents registered with their locations.',
    githubLink: 'https://github.com/Mithoonns2001/Crime-Reporting-System'
  },
  {
    title: 'TAXI SUPER',
    description: 'Taxi Super is a ride-hailing mobile application developed using the Flutter framework. It allows users to book rides and track drivers.',
    githubLink: 'https://github.com/Mithoonns2001/tagxi-app'
  },
  {
    title: 'VIRTUAL MOUSE GESTURE CONTROL',
    description: 'A computer vision-based project that allows users to control the cursor on a computer screen using hand gestures.',
    githubLink: 'https://github.com/Mithoonns2001/Virtual-Mouse-Gesture-Control-'
  },
  {
    title: 'QUEST TRACKER ',
    description: 'Quest Tracker is a hierarchical task assignment and tracking system that allows users with different roles (CEO, managers, staff) to manage and track tasks in a company.',
    githubLink: 'https://github.com/Mithoonns2001/QUEST-TRACKER'
  },
  {
    title: 'DECENTRALIZED E-COMMERCE PLATFORM ',
    description: 'A Web3 e-commerce platform built for a hackathon that provides an e-commerce platform for electronic items, assets, gadgets, etc. In this project, we also created a new token using Solidity. ',
    githubLink: 'https://github.com/Mithoonns2001/DECENTRALIZED-E-COMMERCE-PLATFORM'
  },
  {
    title: 'CONNECT CRM',
    description: 'Connect CRM is a Customer Relationship Management (CRM) web application developed using the Laravel framework in PHP. It provides tools to manage customer interactions, sales, and leads for businesses.',
    githubLink: 'https://github.com/Mithoonns2001/connectscrm'
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className='abouth5'>My Work</h5>
      <h2 className='header-buttons'>Portfolio</h2>
      <div className="container portfolio__container ">
        {projects.map((project, index) => (
          <div key={index} className="portfolio__item header-buttons">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
