import React from "react";
import "./skills.css";
import HtmlSkill from "../../assets/skills-picture/HTML5_logo.png";
import CssSkill from "../../assets/skills-picture/CSS3_logo.png";
import JavaScriptSkill from "../../assets/skills-picture/JS_logo.png";
import NpmSkill from "../../assets/skills-picture/NPM_logo.png";
import SassSkill from "../../assets/skills-picture/SASS_logo.png";
import ReactSkill from "../../assets/skills-picture/REACT_logo.png";
import GitHubSkill from "../../assets/skills-picture/GITHUB_logo.png";
import GitSkill from "../../assets/skills-picture/GIT_logo.png";
import TailwindSkill from "../../assets/skills-picture/TAILWIND_logo.png";
// useContext import from Darkmode folder
import { UsedarkModeActive } from "../Darkmode/darkmodeTheme";

export default function Skills() {
  //variable for toggle darkmode
  const darkMode = UsedarkModeActive();
  return (
    <section
      className={
        darkMode
          ? "skills-container skills-container-dark-mode"
          : "skills-container"
      }
      id="Skills"
    >
      <div className="container container4">
        <h1 className="title-section reveal1">SKILLS</h1>
        <div className="skills-content">
          <div className="column-left reveal">
            <h2>My creative skills & experiences</h2>
            <p>
              I am grateful for the opportunity to have learned the fundamental
              concepts of web development, including programming languages and
              their applications. My interest in web development began during my
              second year of college, and I am humbled to say that this pursuit
              has helped develop my problem-solving, critical thinking, and
              analytical skills. To further enhance my abilities as a developer,
              I have actively sought out various online learning platforms to
              continue my education in this field.
            </p>
          </div>
          <div className="column-right reveal2">
            <div className="img-container">
              <div className="each-img-container-html">
                <img className="htmlpic" src={HtmlSkill} alt="html" />
              </div>
              <div className="each-img-container-css">
                <img className="csspic" src={CssSkill} alt="css" />
              </div>
              <div className="each-img-container-javaScript">
                <img className="jspic" src={JavaScriptSkill} alt="javascript" />
              </div>
            </div>
            <div className="img-container">
              <div className="each-img-container-sass">
                <img className="sasspic" src={SassSkill} alt="sass" />
              </div>
              <div className="each-img-container-react">
                <img className="reactpic" src={ReactSkill} alt="react" />
              </div>
              <div className="each-img-container-tailwind">
                <img
                  className="tailwindpic"
                  src={TailwindSkill}
                  alt="bootstrap"
                />
              </div>
            </div>
            <div className="img-container">
              <div className="each-img-container-git">
                <img className="gitpic" src={GitSkill} alt="git" />
              </div>
              <div className="each-img-container-npm">
                <img className="npmpic" src={NpmSkill} alt="nmp" />
              </div>
              <div className="each-img-container-github">
                <img className="githubpic" src={GitHubSkill} alt="github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
