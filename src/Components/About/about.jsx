import React from "react";
import "./about.css";
import myProfile from "../../assets/my-pictures/my-picture.jpg";
// useContext import from Darkmode folder
import { UsedarkModeActive } from "../Darkmode/darkmodeTheme";

export default function About() {
  //variable for toggle darkmode
  const darkMode = UsedarkModeActive();

  return (
    <section
      className={
        darkMode
          ? "about-container about-container-dark-mode"
          : "about-container"
      }
      id="About"
    >
      <div className="container2 container">
        <h1 className="title-section reveal1">ABOUT ME</h1>
        <div className="content2">
          <div className="column-left2 reveal">
            <img src={myProfile} alt="profile-img" />
          </div>

          <div className="column-right2 reveal2">
            <div className="text">
              As a web developer with a Bachelor's degree in Computer Science
              from Kolehiyo ng Lungsod ng Lipa, I have honed my skills in
              creating compelling and user-friendly websites and web
              applications. I am passionate about staying up-to-date with the
              latest trends and technologies, and I thrive on taking on
              challenging projects that push me to grow. I take pride in
              crafting digital experiences that are not only visually stunning,
              but also intuitive and user-friendly, with a strong foundation in
              both front-end and back-end development. I am eager to join a team
              of like-minded individuals who are driven to create exceptional
              work and solve complex problems. With a passion for creating
              beautiful and functional websites, I am committed to delivering
              work that exceeds expectations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
