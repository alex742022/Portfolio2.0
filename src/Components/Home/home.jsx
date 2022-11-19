import React from 'react'
import './home.css'
import myCover from '../../assets/my-pictures/my-cover-img.png'
// useContext import from Darkmode folder
import { UsedarkModeActive  } from '../Darkmode/darkmodeTheme'

export default function Home() {

     //variable for toggle darkmode
     const darkMode = UsedarkModeActive()

  return (
    <section className={darkMode? "home-container home-container-dark-mode" : "home-container"} id="Home">
        <div className="container1 container">
            <div className="text-content">
                <h1 id="page1-header"> Alexis Lumbera</h1>
                <p>
                    I am from Philippines. I enjoy creating websites and web applications, and this is one of my hobbies.
                    On this website, you'll discover some of my projects.
                </p>
                <a href="#Contact" rel="noopener noreferrer"><button>Let's connect</button></a>
            </div>
            <div className="image-container1">
                <img src={myCover} alt="profile-img"/>
            </div>
        </div>
    </section>
  )
}
