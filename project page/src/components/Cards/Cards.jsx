import React, { useState } from 'react';
import '../Cards/Cards.css';

const projects = [
  {
    image: '../src/project/project1.webp',
    title: 'Alcohol Detection Device Using Arduino',
    description: 'A revolutionary solution for modern problems using cutting-edge technology.',
    creators: ['Varad Vilasrao Patil', 'Sarthak Sanjiv Khandare', 'Shweta Umesh Khune'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project1', // GitHub link
  },
  {
    image: '../src/project/project2.jpg',
    title: 'Android Application RCR',
    description: 'RNXGians have developed an application that will replace the paperwork of Registering Component and Maintaining records that will be helpful for the Database Management and will help the Team To keep track of all the things',
    creators: ['Sanket Wakde', 'Umaan Khan', 'Suchit Gourkhede', 'Aashutosh Karale'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project2', // GitHub link
  },
  {
    image: '../src/project/project3.webp',
    title: 'Smart Blind Stick (Istick)',
    description: 'This project provides the best solution for the mobility difficulties of blind people, by which they can easily mobilize themselves, be a successful part of society, easily earn their living',
    creators: ['Aashutosh Karale', 'Mayur Vaidya', 'Kapil Kapse'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project3',
  },
  {
    image: '../src/project/project4.webp',
    title: 'Subscribing via email',
    description: 'User gets registered as a subscriber , and get stored in database which an be accesed via explore user. For this project A rest api is built and hosted on heroku which can be accessed any where.',
    creators: ['Adwait Bokade',],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project1', // GitHub link
  },
  {
    image: '../src/project/project5.webp',
    title: 'Live Locate',
    description: 'With the help of live locate we will track your location and speed and will provide alert when you exceed your certain speed limit(Only for mobile Devices)',
    creators: ['Shailesh Deshmukh', 'Adwait Bokade'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project2', // GitHub link
  },
  {
    image: '../src/project/project6.webp',
    title: 'Smart Lock',
    description: 'The Smart Lock Device’s working is straightforward. In simple words, the user must enter the correct pin to unlock the device. If the entered pin is incorrect, a buzzer ring. In both cases the user is notified about the actions taken by the device. It also has a built-in L.C.D to display various messages.',
    creators: ['Shailesh Deshmukh', 'Adwait Bokade', 'Ishwar Gade',],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project3',
  },
  {
    image: '../src/project/project1.webp',
    title: 'Alcohol Detection Device Using Arduino',
    description: 'A revolutionary solution for modern problems using cutting-edge technology.',
    creators: ['Varad Vilasrao Patil', 'Sarthak Sanjiv Khandare', 'Shweta Umesh Khune'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project1', // GitHub link
  },
  {
    image: '../src/project/project2.jpg',
    title: 'Android Application RCR',
    description: 'RNXGians have developed an application that will replace the paperwork of Registering Component and Maintaining records that will be helpful for the Database Management and will help the Team To keep track of all the things',
    creators: ['Sanket Wakde', 'Umaan Khan', 'Suchit Gourkhede', 'Aashutosh Karale'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project2', // GitHub link
  },
  {
    image: '../src/project/project3.webp',
    title: 'Smart Blind Stick (Istick)',
    description: 'This project provides the best solution for the mobility difficulties of blind people, by which they can easily mobilize themselves, be a successful part of society, easily earn their living',
    creators: ['Aashutosh Karale', 'Mayur Vaidya', 'Kapil Kapse'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project3',
  },
  {
    image: '../src/project/project4.webp',
    title: 'Subscribing via email',
    description: 'User gets registered as a subscriber , and get stored in database which an be accesed via explore user. For this project A rest api is built and hosted on heroku which can be accessed any where.',
    creators: ['Adwait Bokade',],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project1', // GitHub link
  },
  {
    image: '../src/project/project5.webp',
    title: 'Live Locate',
    description: 'With the help of live locate we will track your location and speed and will provide alert when you exceed your certain speed limit(Only for mobile Devices)',
    creators: ['Shailesh Deshmukh', 'Adwait Bokade'],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project2', // GitHub link
  },
  {
    image: '../src/project/project6.webp',
    title: 'Smart Lock',
    description: 'The Smart Lock Device’s working is straightforward. In simple words, the user must enter the correct pin to unlock the device. If the entered pin is incorrect, a buzzer ring. In both cases the user is notified about the actions taken by the device. It also has a built-in L.C.D to display various messages.',
    creators: ['Shailesh Deshmukh', 'Adwait Bokade', 'Ishwar Gade',],
    pdfUrl: '../src/pdf/project1.pdf', // PDF link
    githubLink: 'https://github.com/yourrepo/project3',
  },
];

const ProjectCard = ({ project, onClick }) => (
    <div className="project-card" onClick={onClick}>
      <div className="image-container">
        <img src={project.image} alt={project.title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <div className="scroll-container">
          <p className="card-description">{project.description}</p>
        </div>
        <div className="card-creators">
          Created by: {project.creators.join(', ')}
        </div>
      </div>
    </div>
  );
  
  const ProjectModal = ({ project, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-grid">
          <div className="modal-media">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="modal-info">
            <h2>{project.title}</h2>
            <div className="pdf-container">
              <embed src={project.pdfUrl} type="application/pdf" width="100%" height="400px" />
            </div>
            <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <div className="modal-creators">
              <strong>Creators:</strong> {project.creators.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const Cards = () => {
    const [selectedProject, setSelectedProject] = useState(null);
  
    return (
      <div className="cards-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
        ))}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    );
  };
  
  export default Cards;