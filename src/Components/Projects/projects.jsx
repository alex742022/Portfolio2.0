import React from 'react'
import './projects.css'
import projectOne from '../../assets/projects-picture/nuvel-website.png'
import projectTwo from '../../assets/projects-picture/Nike-project.png'
import projectThree from '../../assets/projects-picture/simple-tourist-website.png'
import projectFour from '../../assets/projects-picture/student-database.png'
import projectFive from '../../assets/projects-picture/netflix-clone.png'
import projectSix from '../../assets/projects-picture/building-city-skyline.png'
import projectSeven from '../../assets/projects-picture/facebook-clone.png'
import projectEight from '../../assets/projects-picture/building-penguin.png'
// useContext import from Darkmode folder
import { UsedarkModeActive  } from '../Darkmode/darkmodeTheme'

export default function Projects() {

    //variable for toggle darkmode
    const darkMode = UsedarkModeActive()

    const projectSources = {

        "projectSourcesArray" : [

            {   
                "id" : 1,
                "projectName" : "Nuvel Global Venture, INC",
                "description" : "This website was created during my internship. They assigned me the task of creating a simple website for those companies, which I completed using React JS and Tailwind CSS.",
                "project" : projectOne,
                "source" : "https://github.com/alex742022/Simple-intern-website",
                "viewLive" : "https://alex742022.github.io/Simple-intern-website/",
                "Name" : "Nuvel Global Venture"
            },
            {
                "id" : 2,
                "projectName" : "Nike Clone",
                "description" : "Nike website clone created with Vanilla JavaScript, including a fully responsive frontend design and API fetch from a local json file.",
                "project" : projectTwo,
                "source" : "https://github.com/alex742022/Nike-Clone",
                "viewLive" : "https://alex742022.github.io/Nike-Clone",
                "Name" : "Nike Clone"
            },
            {   
                "id" : 3,
                "projectName" : "PH Tourist Website",
                "description" : "Simple Tourist Website created with React JS, on which you can see some of the most beautiful tourist destinations in the Philippines.",
                "project" : projectThree,
                "source" :  "https://github.com/alex742022/PH-Tourist-Website",
                "viewLive" : "https://alex742022.github.io/PH-Tourist-Website",
                "Name" : "PH Tourist Website"
            },
            {
                "id" : 4,
                "projectName" : "Student Database System",
                "description" : "Student database system with user admin and students account.",
                "project" : projectFour,
                "source" : "https://github.com/alex742022/Student-Database",
                "viewLive" : "https://github.com/alex742022/Student-Database",
                "Name" : "Student Database"
            },
            {
                "id" : 5,
                "projectName" : "Neflix Clone",
                "description" : "This Neflix website clone that I created with React JS and Tailwind CSS also has a fetch API from themoviedb.org, a service that offers a free live API Database. Additionally, this website is still under construction.",
                "project" : projectFive,
                "source" : "https://github.com/alex742022/Neflix_Clone",
                "viewLive" : "https://alex742022.github.io/Neflix_Clone/",
                "Name" : "Sample Magazine"
            },
            {
                "id" : 6,
                "projectName" : "Building City Sykline",
                "description" : "I made this Building City Skyline in freeCodeCamp using HTML and CSS.",
                "project" : projectSix,
                "source" : "https://github.com/alex742022/Building-City-Skyline",
                "viewLive" : "https://alex742022.github.io/Building-City-Skyline",
                "Name" : "Building City Skyline"
            },
            {
                "id" : 7,
                "projectName" : "Facebook Login Clone",
                "description" : "I've created this Facebook clone login page using HTML and CSS.",
                "project" : projectSeven,
                "source" : "https://github.com/alex742022/Facebook-Replica",
                "viewLive" : "https://alex742022.github.io/Facebook-Replica",
                "Name" : "Facebook Login Clone"
            },
            {
                "id" : 8,
                "projectName" : "Building Penguin",
                "description" : "I made this Building Penguin in FreeCodeCamp using HTML and CSS.",
                "project" : projectEight,
                "source" : "https://github.com/alex742022/Building-Penguin",
                "viewLive" : "https://alex742022.github.io/Building-Penguin",
                "Name" : "Building Penguin"
            }
        ]
    }

  return (
    <section className={darkMode ? "projects-container projects-container-dark-mode" : "projects-container"}>
         <div className="container3 container">
           <h1 className="title-section title-section3 reveal1" id="Projects">PROJECTS</h1>
            
            {projectSources.projectSourcesArray.map(projects => {

                return (
                    <div key={projects.id} className="content3 project-flex-content">

                        <div className="column-left3 left-width reveal1">

                            <h2 className="project-text-style-h2">{projects.projectName}</h2>
                            <p>{projects.description}</p>
                            
                            <div className="btn-container">
                                <a  className="project-btn" href={projects.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                                <a href={projects.viewLive} target="_blank" rel="noopener noreferrer">
                                    <button>View Live</button>
                                </a>
                            </div>
                        </div>

                        <div className="column-right3">
                            <a href={projects.viewLive} target="_blank" rel="noopener noreferrer">
                                <img className="Pimage-style reveal2" src={projects.project} alt={projects.Name}/>
                            </a>
                        </div>
                    </div>
                )
           })}
            
            
        </div>
    </section>
    
    )
}
