import {React, useState} from "react";
import "./projects.css";
import projectOne from "../../assets/projects-picture/nuvel-website.png";
import projectTwo from "../../assets/projects-picture/Nike-project.png";
import projectThree from "../../assets/projects-picture/simple-tourist-website.png";
import projectFour from "../../assets/projects-picture/student-database.png";
import projectFive from "../../assets/projects-picture/netflix-clone.png";
import projectSix from "../../assets/projects-picture/building-city-skyline.png";
import projectSeven from "../../assets/projects-picture/facebook-clone.png";
import projectEight from "../../assets/projects-picture/coolistic-aircon.png";
// useContext import from Darkmode folder
import { UsedarkModeActive } from "../Darkmode/darkmodeTheme";

export default function Projects() {
  //variable for toggle darkmode
  const darkMode = UsedarkModeActive();
const [notifPrivate, setPrivateNotif] = useState(false)
  const projectSources = {
    projectSourcesArray: [
      {
        id: 1,
        projectName: "Nuvel Global Venture, INC",
        description:
          "During my internship, I was tasked with creating a simple website for a company. I completed this project using React JS and Tailwind CSS.",
        project: projectOne,
        source: "https://github.com/alex742022/Simple-intern-website",
        viewLive: "https://alex742022.github.io/Simple-intern-website/",
        Name: "Nuvel Global Venture",
      },
      {
        id: 2,
        projectName: "Nike Clone",
        description:
          "I created a clone of the Nike website using Vanilla JavaScript, featuring a fully responsive frontend design and API fetching from a local JSON file.",
        project: projectTwo,
        source: "https://github.com/alex742022/Nike-Clone",
        viewLive: "https://alex742022.github.io/Nike-Clone",
        Name: "Nike Clone",
      },
      {
        id: 3,
        projectName: "PH Tourist Website",
        description:
          "I created a simple tourist website using React JS that showcases some of the most breathtaking tourist destinations in the Philippines.",
        project: projectThree,
        source: "https://github.com/alex742022/PH-Tourist-Website",
        viewLive: "https://alex742022.github.io/PH-Tourist-Website",
        Name: "PH Tourist Website",
      },
      {
        id: 4,
        projectName: "Student Database System",
        description:
          "I developed a student database system that includes both admin and student accounts for easy management of student records and information.",
        project: projectFour,
        source: "https://github.com/alex742022/Student-Database",
        viewLive: "https://github.com/alex742022/Student-Database",
        Name: "Student Database",
      },
      {
        id: 5,
        projectName: "Neflix Clone",
        description:
          "I have developed a Netflix website clone using React JS and Tailwind CSS, which includes a fetch API from themoviedb.org. This service provides a free live API Database to the website. Although the website is still under construction, it showcases my skills in front-end development and API integration.",
        project: projectFive,
        source: "https://github.com/alex742022/Neflix_Clone",
        viewLive: "https://alex742022.github.io/Neflix_Clone/",
        Name: "Sample Magazine",
      },
      {
        id: 6,
        projectName: "Building City Sykline",
        description:
          "I created a Building City Skyline project using HTML and CSS on the freeCodeCamp platform.",
        project: projectSix,
        source: "https://github.com/alex742022/Building-City-Skyline",
        viewLive: "https://alex742022.github.io/Building-City-Skyline",
        Name: "Building City Skyline",
      },
      {
        id: 7,
        projectName: "Facebook Login Clone",
        description:
          "I have created a login page clone for Facebook using HTML and CSS.",
        project: projectSeven,
        source: "https://github.com/alex742022/Facebook-Replica",
        viewLive: "https://alex742022.github.io/Facebook-Replica",
        Name: "Facebook Login Clone",
      },
      {
        id: 8,
        projectName: "Coolistic Airconditioning Shop",
        description:
          "This website is created for Coolistic Airconditioning Shop, a company that specializes in air conditioning systems.",
        project: projectEight,
        source: "https://github.com/alex742022/coolistic-website2.0",
        viewLive: "https://coolisticaircon.vercel.app/",
        Name: "Coolistic Airconditioning Shop",
      },
    ],
  };

  return (
    <section
      className={
        darkMode
          ? "projects-container projects-container-dark-mode"
          : "projects-container"
      }
    >
      <div className="container3 container">
        <h1 className="title-section title-section3 reveal1" id="Projects">
          PROJECTS
        </h1>

        {projectSources.projectSourcesArray.map((projects) => {
          return (
            <div key={projects.id} className="content3 project-flex-content">
              <div className="column-left3 left-width reveal1">
                <h2 className="project-text-style-h2">
                  {projects.projectName}
                </h2>
                <p>{projects.description}</p>

                <div className="btn-container">
                  {projects.source ===
                  "https://github.com/alex742022/coolistic-website2.0" ? (
                    <>
                      <button className="project-btn">wala</button>
                      
                      {notifPrivate && <p className="private-notif">This code is private</p>}
                    </>
                  ) : (
                    <a
                      className="project-btn"
                      href={projects.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                  <a
                    href={projects.viewLive}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View Live</button>
                  </a>
                </div>
              </div>

              <div className="column-right3">
                <a
                  href={projects.viewLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="Pimage-style reveal2"
                    src={projects.project}
                    alt={projects.Name}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
