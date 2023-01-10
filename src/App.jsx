import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'

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
    <div className="projects">
      <Projects/>
    </div>
    </div>
  )
}

export default App
