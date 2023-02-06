import React from 'react'
import style from '../Styles/Skills.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Skill from "../svg/Skill"
import allSkill from "../assets/allSkill.webp"
import mobSvg from "../assets/mobSvg.webp"

const Skills = () => {
    AOS.init();
    return (
        <div className={style.main} id="Skills">
        <img src={allSkill} alt="" className={style.all}/>
        <img src={mobSvg} alt="" className={style.mob}/>
        </div>
    )
}

export default Skills