import React from 'react'
import style from "../Styles/Projects.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectOne from "./ProjectOne"
import { Icon } from '@chakra-ui/react'
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai"
import Wave from 'react-wavify'

const Projects = () => {
    AOS.init();
    return (
        <div className={style.projects} id="Projects">
            <div>
                <div data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h1 className={style.mainText}>Projects</h1>
                </div>
            </div>
            <div>
                <div className={style.firstPro}>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Narvi Management Website</h2>
                            <p className={style.subProjectText}>( Individual Project )</p>
                            <p className={style.subProjectText}>A work management website that helps business teams
                                collaborate,<br /> plan projects and organize team members.</p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> React | CSS | ChakraUI | Framer Motion | React Icons</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/rajkumar-cmd/Narvi-Management/tree/main/narvi-management" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://narvi.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.firstrightText}>
                        <ProjectOne />
                    </div>
                </div>
                <br />
                <div className={style.secondPro}>
                    <div className={style.firstrightText}>
                        <ProjectOne />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Two Punch Fitness Website</h2>
                            <p className={style.subProjectText}>( Collaborative Project build by a team of 5 )</p>
                            <p className={style.subProjectText}>
                                <h4 className={style.subProjectTextMain}>Areas of responsibility:- </h4> Lead the team | Designed responsiveness | Build fetch and filtration
                            </p>
                            <p className={style.subProjectText}>The website had been created to target fitness <br />
                                enthusiasts to explore fitness services and products.</p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> HTML | CSS | JavaScript</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/rajkumar-cmd/Two-Punch-Fitness-Website/tree/main" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://admirable-raindrop-842e4c.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.firstPro}>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Narvi Management Website</h2>
                            <p className={style.subProjectText}>( Individual Project )</p>
                            <p className={style.subProjectText}>A work management website that helps business teams
                                collaborate,<br /> plan projects and organize team members.</p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> React | CSS | ChakraUI | Framer Motion | React Icons</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/rajkumar-cmd/Narvi-Management/tree/main/narvi-management" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://narvi.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.firstrightText}>
                        <ProjectOne />
                    </div>
                </div>
                <br />
                <div className={style.fouthPro}>
                    <div className={style.firstrightText}>
                        <ProjectOne />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Two Punch Fitness Website</h2>
                            <p className={style.subProjectText}>( Collaborative Project build by a team of 5 )</p>
                            <p className={style.subProjectText}>
                                <h4 className={style.subProjectTextMain}>Areas of responsibility:- </h4> Lead the team | Designed responsiveness | Build fetch and filtration
                            </p>
                            <p className={style.subProjectText}>The website had been created to target fitness <br />
                                enthusiasts to explore fitness services and products.</p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> HTML | CSS | JavaScript</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/rajkumar-cmd/Two-Punch-Fitness-Website/tree/main" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://admirable-raindrop-842e4c.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects