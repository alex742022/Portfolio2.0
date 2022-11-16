import React from 'react'
import './home.css'
import myCover from '../../assets/my-pictures/my-cover-img.png'

export default function Home() {

  return (
    <section className="home-container container" id="Home">
        <div className="container1">
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
