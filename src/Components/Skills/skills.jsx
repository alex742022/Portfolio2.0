import React from 'react'
import './skills.css'
import HtmlSkill from '../../assets/skills-picture/HTML5_logo.png'
import CssSkill from '../../assets/skills-picture/CSS3_logo.png'
import JavaScriptSkill from '../../assets/skills-picture/JS_logo.png'
import PhpSkill from '../../assets/skills-picture/PHP_logo.png'
import MySqlSkill from '../../assets/skills-picture/MYSQL_logo.png'
import BootstrapSkill from '../../assets/skills-picture/BOOTSTRAP_logo.png'
import ReactSkill from '../../assets/skills-picture/REACT_logo.png'
import GitHubSkill from '../../assets/skills-picture/GITHUB_logo.png'

export default function Skills() {
  return (
    <section className="skills-container" id="Skills">
        <div className="container container4">
            <h1 className="title-section reveal1" >SKILLS</h1>
            <div className="skills-content">
                <div className="column-left reveal">
                    <h2>My creative skills & experiences</h2>
                    <p>As a recent graduate, I learned the fundamentals of web development,
                        as well as how codes or programming languages work.
                         And I started my interest in web development during my internship,
                          and that is why my problem-solving, critical thinking,
                           and analytical skills were developed. Therefore,
                            I started to study more about web development and 
                            I went to different online learning platforms
                             to enhance my skills as a developer.</p>
                </div>
                <div className="column-right reveal2">
                    <div className="img-container">   
                        <img className="htmlpic" src={HtmlSkill} alt="html"/>
                        <img className="csspic" src={CssSkill} alt="css"/>
                        <img className="jspic" src={JavaScriptSkill} alt="javascript"/>
                    </div>
                    <div className="img-container">   
                        <img className="phppic" src={PhpSkill} alt="php"/>
                        <img className="msqlpic" src={MySqlSkill} alt="msql"/>
                    </div>
                    <div className="img-container">   
                        <img className="phppic" src={BootstrapSkill} alt="bootstrap"/>
                        <img className="reactpic" src={ReactSkill} alt="react"/> 
                        <img className="githubpic" src={GitHubSkill} alt="github"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
