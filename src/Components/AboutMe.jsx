import React from 'react'
import style from "../Styles/AboutMe.module.css"
import 'aos/dist/aos.css';
import { Icon } from '@chakra-ui/react'
import { AiFillGithub } from "react-icons/ai"
import GitHubCalendar from 'react-github-calendar';

const AboutMe = () => {
    return (
        <div className={style.AboutMe} id="About Me">
            <div className={style.mainTextAbout}>
                <div>
                    <h1 className={style.mainTextTop}>ABOUT ME</h1>
                    <p className={style.mainTextTopSmall}>An aspiring and hardworking full-stack developer
                        skilled in MERN stack. Has the ability to create modern
                        websites using REACT, Javascript, NodeJS, MongoDB,
                        and ExpressJS. Has a creative mind to always find new
                        solutions to a given problem. Looking forward to
                        starting a career in a reputed firm and hone my skills.
                    </p>
                </div>
            </div>
            <div className={style.experience}>
                <h1 className={style.mainTextTop}>Experience</h1>
                <h2 className={style.experienceText}>&diams; Freelance Full Stack Web Developer (March/2023-June/2023)</h2>
                <h2 className={style.experienceText}>(at Autotron Electronics)</h2>
                <p className={style.mainTextTopSmall}>
                 After the completion of my training at Masai School I did a freelance job at 
                 Autotron electronics as a Full stack web developer to hone my skills in real-world
                 and contributed in creating the organization's main webside from scratch and managing
                 the website.
                </p>
            </div>
            <div className={style.gittop}>
                <h1 className={style.mainText}>GitHub Details<a href="https://github.com/rajkumar-cmd" target="_blank"><button className={style.gitcal}><Icon as={AiFillGithub} boxSize={30} /></button></a></h1>
                <p> <img className={style.gitstatsone} src="https://komarev.com/ghpvc/?username=rajkumar-cmd&label=Profile%20views&color=0e75b6&style=flat" alt="rajkumar-cmd" /> </p> <br />
                <div className={style.gitHubDet}>
                    <p> <img className={style.gitstatstwo} src="https://github-profile-trophy.vercel.app/?username=rajkumar-cmd" alt="rajkumar-cmd" /> </p> <br />
                    <p><img className={style.gitstatsthree} src="https://github-readme-streak-stats.herokuapp.com/?user=rajkumar-cmd&" alt="rajkumar-cmd" /></p> <br />
                </div>
                <div>
                    <h3 className={style.mainText}>GitHub Calendar</h3>
                    <div className={style.calgit}>
                        <GitHubCalendar style={{ margin: "auto" }} color={"yellow"} username="rajkumar-cmd" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe