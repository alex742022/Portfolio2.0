import React from 'react'
import './footer.css'
import MailIcon from '../../assets/icons/envelope-solid.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import LinkedinIcon from '../../assets/icons/linkedin.svg'
import GitHubIcon from '../../assets/icons/github.svg'
// useContext import from Darkmode folder
import { UsedarkModeActive  } from '../Darkmode/darkmodeTheme'

export default function Footer() {

     //variable for toggle darkmode
     const darkMode = UsedarkModeActive()
     
  return (
    <footer id="Contact" className={darkMode ? "contact contact-dark-mode" : "contact"}>
        <div className="container container5">
            <h1 className="title-section reveal1">CONTACT</h1>
            <div className="contact-container">
                <div className="contact-left reveal">
                    <form>
                        <label>What's your name?</label>
                        <input type="text" name="name" className="name" id="name" placeholder="Input your name*"/>
                        <label>What's your email?</label>
                        <input type="email" name="email" className="email" id="email" placeholder="youremail@gmail.com*"/>
                        <label>Your message</label>
                        <textarea className="comment" id="comment" name="commnet" cols="" rows="5" placeholder="Hello Alexis.."></textarea>
                        <button type="submit" className="submit" name="submit" id="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-right reveal2">

                    <div className="details">
                        
                        <span>CONTACT DETAILS</span><br/>
                        <a href="mailto:alexis.aquino.lumbera7@gmail.com" className="icon-container" rel="noopener noreferrer">
                            <img src={MailIcon} alt="mail-icon"/>
                            <label> alexis.aquino.lumbera7@gmail.com</label>
                        </a>

                    </div>

                    <div className="social">
                        
                        <span>SOCIALS</span><br/>
                        <a className="icon-container" href="https://m.facebook.com/alexis.lumbera" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookIcon} alt="facebook-icon"/><label> Facebook</label>
                        </a>

                        <a className="icon-container" href="https://www.linkedin.com/in/alexis-lumbera-547654230" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon} alt="linkedin-icon"/><label> Linkedin</label>
                        </a>
                    
                        <a className="icon-container" href="https://github.com/alex742022" target="_blank" rel="noopener noreferrer"    >
                            <img src={GitHubIcon} alt="github-icon"/><label> Github</label>
                        </a>
            
                    </div>

                </div>
            </div>
        </div>
    </footer>
  )
}
