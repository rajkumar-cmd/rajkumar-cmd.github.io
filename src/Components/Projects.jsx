import React from 'react'
import wave from "../assets/waveBelowAbout.svg"
import style from "../Styles/Projects.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectOne from "./ProjectOne"

const Projects = () => {
    AOS.init();
    return (
        <div className={style.projects}>
            <div>
                <img className={style.wave} src={wave} alt="" />
            </div>
            <div>
                <div data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h1 className={style.mainText}>Projects</h1>
                </div>
            </div>
            <div>
                <div data-aos="slide-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <h2 className={style.mainProjectText}>Narvi Management Website</h2>
                        <p className={style.subProjectText}>( Individual Project )</p>
                        <p className={style.subProjectText}>A work management website that helps business teams
                            collaborate, plan projects and organize team members.</p>
                        <p className={style.subProjectText}><h3>Tech Stack Used:-</h3>React | CSS | ChakraUI | Framer Motion | React Icons</p>
                    <ProjectOne />
                </div>
                <br />
                <hr color='#ff6600' size="1" />
                <br />
                <br />
                <br />
                <div>
                    <h2 className={style.mainProjectText}>Two Punch Fitness Website</h2>
                    <p className={style.subProjectText}>( Collaborative Project build by a team of 5 )</p>
                    <p className={style.subProjectText}>
                        <h3>Areas of responsibility:-</h3>
                        ~ Lead the team
                        <br />
                        ~ Designed responsiveness.
                        <br />
                        ~ Build fetch and filtration
                    </p>
                    <p className={style.subProjectText}>The website had been created to target fitness
                        enthusiasts to explore fitness services and products.</p>
                    <p className={style.subProjectText}><h3>Tech Stack Used:-</h3>HTML | CSS | JavaScript</p>
                    <ProjectOne />
                </div>
                <br />
                <hr color='#ff6600' size="1" />
                <br />
                <div>
                    <h2 className={style.mainProjectText}>Narvi Management Website</h2>
                    <p className={style.subProjectText}>( Individual Project )</p>
                    <p className={style.subProjectText}>A work management website that helps business teams
                        collaborate, plan projects and organize team members.</p>
                    <p className={style.subProjectText}><h3>Tech Stack Used:-</h3>React | CSS | ChakraUI | Framer Motion | React Icons</p>
                    <ProjectOne />
                </div>
            </div>
        </div>
    )
}

export default Projects