import React from 'react'
import Style from "../Styles/Navbar.module.css"
import wave from "../assets/wave.webp"

const Navbar = () => {
  return (
    <div>
      <div className={Style.main}>
        <div>
          <h1 className={Style.portfolioLogo}>{"{/*Rajkumar*/}"}</h1>
        </div>
        <div>
          <div className={Style.navbarButton}>
            <div className={Style.home}>
              <div>Home</div>
            </div>
            <div className={Style.about}>
              <div>About Me</div>
            </div>
            <div className={Style.skills}>
              <div>Skills</div>
            </div>
            <div className={Style.projects}>
              <div>Projects</div>
            </div>
            <div className={Style.contact}>
              <div>Contact</div>
            </div>
            <div className={Style.resume}>
              <div>Resume</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <img className={Style.wave} src={wave} alt="" /> */}
        <img className={Style.wave} src={wave} alt="" />
      </div>
    </div>
  )
}

export default Navbar