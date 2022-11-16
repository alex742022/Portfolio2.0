import React from 'react'
import Nav from './Components/Nav/nav'
import Home from './Components/Home/home'
import About from './Components/About/about'
import Projects from './Components/Projects/projects'
import Skills from './Components/Skills/skills'
import Footer from './Components/Footer/footer'
import './App.css'

export default function App() {
  return (
    <div>
        <Nav/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  )
}
