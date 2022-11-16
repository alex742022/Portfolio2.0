import React from 'react'
import './about.css'
import myProfile from '../../assets/my-pictures/my-picture.jpg' 
export default function About() {
  return (
    <section className="about-container" id="About">
        <div className="container2 container">
            <h1 className="title-section reveal1">ABOUT ME</h1>
            <div className="content2">
                <div className="column-left2 reveal">
                    <img src={myProfile} alt="profile-img"/>
                </div>
                
                <div className="column-right2 reveal2">
                    <div className="text"><span>I'm Alexis A. Lumbera</span> and I am 22 years old.
                        I recently graduated from Kolehiyo ng Lungsod ng Lipa with a 
                        "Bachelor of Science in Computer Science." I enjoy creating things 
                        that live on the internet, whether it's websites, web applications, 
                        or anything in between. I want this job because it is a role that
                         I am very passionate about, and I also want to join or work on
                          any opportunity that will help me grow and develop in this industry
                           while also assisting a company in achieving its goals.
                            I welcome challenging projects and 
                            I am excited to work with all sorts of personalities.
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}
