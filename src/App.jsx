import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from "./Components/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div className="navbar">
      <Navbar/>
    </div>
    <div className="home">
      <Home/>
    </div>
    <div className="aboutMe">
      <AboutMe/>
    </div>
    <div className="skills">
      <Skills/>
    </div>
    <div className="projects">
      <Projects/>
    </div>
    <div className="contact">
      <Contact/>
    </div>
    </div>
  )
}

export default App
