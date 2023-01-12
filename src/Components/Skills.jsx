import React from 'react'
import style from '../Styles/Skills.module.css'
import wave from "../assets/waveBelowAbout.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Skill from "../svg/Skill"
import allSkill from "../assets/allSkill.svg"

const Skills = () => {
    AOS.init();
    return (
        <div className={style.main}>
            <div>
                <img className={style.wave} src={wave} alt="" />
            </div>
            {/* <div data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h1 className={style.mainText}>
                    Skills
                </h1>
            </div> */}
            <div style={{width:"70%",margin:"auto"}} data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <img src={allSkill} alt="" />
            </div>
            {/* <div className={style.skillsbox} data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <iframe className={style.frontEnd} id="SVGmator__y29m81673549966928" frameBorder="0" src="https://www.svgmator.com/embed/8SL5Qbm87QUesJW?onload=true&onclick=false&onhover=true"></iframe>
                <iframe className={style.backEnd} id="SVGmator__rtpdz1673551231712" frameBorder="0" src="https://www.svgmator.com/embed/wZrr4UNKJjUw87Y?onload=true&onclick=false&onhover=true"></iframe>
            </div> */}
        </div>
    )
}

export default Skills