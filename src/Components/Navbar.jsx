import React from 'react'
import Style from "../Styles/Navbar.module.css"
import wave from "../assets/wave.webp"
import NavbarMobile from './NavbarMobile'
import * as Scroll from 'react-scroll';

const Navbar = () => {
  let Link = Scroll.Link;
  return (
    <div>
      <div className={Style.main}>
        <div>
          <h1 className={Style.portfolioLogo}>{"{/*Rajkumar*/}"}</h1>
        </div>
        <div>
          <div className={Style.navbarButton}>
          <Link activeClass="active" to="Home" smooth={true} duration={1000}>
            <div className={Style.home}>
              <div>Home</div>
            </div>
          </Link>
          <Link activeClass="active" to="About Me" smooth={true} duration={1000}>
            <div className={Style.about}>
              <div>About Me</div>
            </div>
          </Link>
          <Link activeClass="active" to="Skills" smooth={true} duration={1000}>
            <div className={Style.skills}>
              <div>Skills</div>
            </div>
          </Link>
          <Link activeClass="active" to="Projects" smooth={true} duration={1000}>
            <div className={Style.projects}>
              <div>Projects</div>
            </div>
          </Link>
          <Link activeClass="active" to="Contact" smooth={true} duration={1000}>
            <div className={Style.contact}>
              <div>Contact</div>
            </div>
          </Link>
          <div className={Style.resume}>
              <div>Resume</div>
            </div>
          </div>
        </div>
        <div className={Style.mobile}>
          <NavbarMobile/>
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