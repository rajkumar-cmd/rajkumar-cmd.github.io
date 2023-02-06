import React from 'react'
import Style from "../Styles/Navbar.module.css"
// import wave from "../assets/wave.png"
import NavbarMobile from './NavbarMobile'
import * as Scroll from 'react-scroll';
import Rajkumar_Pradhan_Resume from "../assets/Rajkumar_Pradhan_Resume.pdf"

const Navbar = () => {
  let Link = Scroll.Link;
  const open=()=>{
    window.open("https://drive.google.com/file/d/1CXpn4XyaG3I4gXrwoEC7FHjvbD8EQJzz/view?usp=sharing","_blank");
  }
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
          <div className={Style.resume} onClick={open}>
              <div><a href={Rajkumar_Pradhan_Resume} download className={Style.anchor}>Resume</a></div>
            </div>
          </div>
        </div>
        <div className={Style.mobile}>
          <NavbarMobile/>
        </div>
      </div>
      {/* <div>
        <img className={Style.wave} src={wave} alt="" />
      </div> */}
    </div>
  )
}

export default Navbar