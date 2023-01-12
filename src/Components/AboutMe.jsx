import React from 'react'
import style from "../Styles/AboutMe.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import masai from "../assets/masai.png"
import rcciit from "../assets/rcciit.png"
import kv from "../assets/kv.png"
import { FaLaptopCode, FaSchool } from "react-icons/fa";
import { Icon } from '@chakra-ui/react'
import { AiFillGithub} from "react-icons/ai"
import { GiGraduateCap } from "react-icons/gi";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import GitHubCalendar from 'react-github-calendar';


const AboutMe = () => {
    AOS.init();
    return (
        <div className={style.AboutMe}>
            <div>
                <h1 className={style.mainTextTop}>ABOUT ME</h1>
                <p className={style.mainTextTopSmall}>An aspiring and hardworking full-stack developer
                    skilled in MERN stack. Has the ability to create modern
                    websites using REACT, Javascript, NodeJS, MongoDB,
                    and ExpressJS. Has a creative mind to always find new
                    solutions to a given problem. Looking forward to
                    starting a career in a reputed firm and hone my skills.</p>
            </div>
            <div data-aos="fade" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h1 className={style.mainText}>Education</h1>
            </div>
            <div className={style.main}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#ffffff', color: '#181818' }}
                        contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
                        date="08/2022 - 03/2023"
                        iconStyle={{ background: '#ff6600', color: '#181818' }}
                        icon={<FaLaptopCode />}
                    >
                        <img src={masai} alt="" width={100} />
                        <h3 className="vertical-timeline-element-title">Full Stack Web Development</h3>
                        <h4 className="vertical-timeline-element-subtitle">Masai School</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#ffffff', color: '#181818' }}
                        contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
                        date="08/2017 - 07/2021"
                        iconStyle={{ background: '#ff6600', color: '#181818' }}
                        icon={<GiGraduateCap />}
                    >
                        <img src={rcciit} alt="" width={100} />
                        <h3 className="vertical-timeline-element-title">B.Tech Electronics and Communication Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">RCC Institute of Information Technology</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#ffffff', color: '#181818' }}
                        contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
                        date="06/2016 - 06/2017"
                        iconStyle={{ background: '#ff6600', color: '#181818' }}
                        icon={<FaSchool />}
                    >
                        <img src={kv} alt="" width={100} />
                        <h3 className="vertical-timeline-element-title">Class 12 (Computer Science)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya No.1 Salt Lake</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <br />
            <br />
            <br />
            <div style={{ textAlign: "center", width: "100%" }}>
                <h1 className={style.mainText}>GitHub Calendar<a href="https://github.com/rajkumar-cmd" target="_blank"><button className={style.gitcal}><Icon as={AiFillGithub} boxSize={30} /></button></a></h1>
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: "5rem" }}>
                    <GitHubCalendar username="rajkumar-cmd" />
                </div>
            </div>
        </div >
    )
}

export default AboutMe