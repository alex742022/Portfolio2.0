import React from 'react'
import Nav from './Components/Nav/nav'
import Home from './Components/Home/home'
import About from './Components/About/about'
import Projects from './Components/Projects/projects'
import Skills from './Components/Skills/skills'
import Footer from './Components/Footer/footer'
import './App.css'
//import Context from Darkmode folder
import { DarkTheme } from './Components/Darkmode/darkmodeTheme'

export default function App() {

  //Scroll Animation

  const scrollFunctionEvent = () => {

    var  reveals = document.querySelectorAll('.reveal, .reveal1, .reveal2');
      for (var i = 0; i < reveals.length; i++){
    
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 200;
    
          if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
          }

          else {
            reveals[i].classList.remove('active');
          }
      }
  }

  // scroll hook animation
  React.useEffect(() => {

    window.addEventListener('scroll', scrollFunctionEvent)

    return () => {
      window.removeEventListener("scroll", scrollFunctionEvent)
  
    }
  }, [])


  return (
    // useContext import from Dark mode folder
    <DarkTheme>
        <Nav/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Footer/>
    </DarkTheme>
  )
}
