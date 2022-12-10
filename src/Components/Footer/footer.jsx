import React, { useRef, useState } from "react"
import "./footer.css"

// use Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
//Emailjs
import emailjs from '@emailjs/browser'
// useContext import from Darkmode folder
import { UsedarkModeActive } from "../Darkmode/darkmodeTheme"
import { useEffect } from "react"

export default function Footer() {
  //variable for toggle darkmode
  const darkMode = UsedarkModeActive()

  //Emailjs
  const form = useRef();
  const [formReset, setFormReset] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

   const sendEmail = (e) => {
     e.preventDefault()
        
     emailjs.sendForm('service_oigpdqe', 'template_845u13l', form.current, 'pyZR1RJEC2bfjknVo')
       .then((result) => {
           console.log(result.text)
           setFormReset(true)
       }, (error) => {
           console.log(error.text)
           setErrorMessage(true)
       })
   }
//Hook with success
  useEffect(() => {
    if (formReset) {
      form.current?.reset()
      setFormReset(false)
      setDisplayMessage(true)

      setTimeout(()=>{
        setDisplayMessage(false)
      },7000)

    }
  }, [formReset])

  //Hook with an error
  useEffect(()=>{
    if(errorMessage){
      setTimeout(()=>{
        setErrorMessage(false)
      },7000)
    }
  },[errorMessage])


  return (
    <footer
      id="Contact"
      className={darkMode ? "contact contact-dark-mode" : "contact"}
    >

{/* display when form submit is successfull */}
{displayMessage ? 
    (<div className="popup-success-message">
        <div className="check-container">
            <FontAwesomeIcon icon={faCheckCircle}/>
            <small className="text-messages">Thank you!</small>
        </div>
        <small className="text-messages2">Message successfully sent!</small>
        <div className="loading-animation"></div>
    </div>) : ""}

{/* display when have an error */}
{errorMessage ?
    (<div className="popup-error-message">
        <div className="error-container">
            <FontAwesomeIcon icon={faCircleXmark}/>
            <small className="error-text">Error!</small>
        </div>
        <small className="error-text2">Message not sent!</small>
        <div className="loading-error-animation"></div>
    </div>): ""}

    
      <div className="container container5">
        <h1 className="title-section reveal1">CONTACT</h1>
        <div className="contact-container">
          <div className="contact-left reveal">
            <form ref={form} onSubmit={sendEmail}>
              <label>What's your name?</label>
              <input
                type="text"
                name="name"
                className="name"
                id="name"
                placeholder="Input your name*"
                required
              />
              <label>What's your email?</label>
              <input
                type="email"
                name="email"
                className="email"
                id="email"
                placeholder="youremail@gmail.com*"
                required
              />
              <label>Your message</label>
              <textarea
                className="comment"
                id="comment"
                name="message"
                cols=""
                rows="5"
                placeholder="Hello Alexis.."
                required
              ></textarea>
              <button
                type="submit"
                className="submit"
                name="submit"
                id="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="contact-right reveal2">
            <div className="details">
              <span>CONTACT DETAILS</span>
              <br />
              <a
                href="mailto:alexis.aquino.lumbera7@gmail.com"
                className="icon-container"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <label> alexis.aquino.lumbera7@gmail.com</label>
              </a>
            </div>

            <div className="social">
              <span>SOCIALS</span>
              <br />
              <a
                className="icon-container"
                href="https://m.facebook.com/alexis.lumbera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <label> Facebook</label>
              </a>

              <a
                className="icon-container"
                href="https://www.linkedin.com/in/alexis-lumbera-547654230"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                <label> Linkedin</label>
              </a>

              <a
                className="icon-container"
                href="https://github.com/alex742022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="icon" />
                <label> Github</label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
