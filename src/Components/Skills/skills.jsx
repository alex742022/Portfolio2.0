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

import PythonSkill from "../../assets/skills-picture/PYTHON_logo.png";
import NodejsSkill from "../../assets/skills-picture/NODE_logo.png";
import PhpSkill from "../../assets/skills-picture/PHP_logo.png";
import ExpressSkill from "../../assets/skills-picture/EXPRESS_logo.png";
import MongodbSkill from "../../assets/skills-picture/MONGODB_logo.png";
import MySqlSkill from "../../assets/skills-picture/MYSQL_logo.png";
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

          <div className="skills-image-container">
            <div className="front-end-container">
              <h1>Front End Skills</h1>
              <div className="image-container">
                <img src={HtmlSkill} alt="Html" />
                <img src={CssSkill} alt="Css" />
                <img src={JavaScriptSkill} alt="JavaScript" />
              </div>
              <div className="image-container">
                <img src={SassSkill} alt="sass" />
                <img src={ReactSkill} alt="reactjs" />
                <img src={TailwindSkill} alt="tailwindcss" />
              </div>
            </div>

            <div className="back-end-container">
              <h1>Back End Skills</h1>
              <div className="image-container">
                <img src={NodejsSkill} alt="nodejs" />
                <img src={PythonSkill} alt="python" />
                <img src={PhpSkill} alt="php" />
              </div>
              <div className="image-container">
                <img src={MongodbSkill} alt="mongodb" />
                <img src={MySqlSkill} alt="mysql" />
                <img src={ExpressSkill} alt="express" />
              </div>
            </div>

            <div className="otherskills-container">
              <div className="image-container">
                <img src={GitSkill} alt="git" />
                <img src={NpmSkill} alt="npm" />
                <img src={GitHubSkill} alt="github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
