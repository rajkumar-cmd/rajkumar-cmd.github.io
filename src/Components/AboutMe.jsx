import React from 'react'
import style from "../Styles/AboutMe.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import masai from "../assets/masai.png"
import rcciit from "../assets/rcciit.png"
import kv from "../assets/kv.png"
import { FaLaptopCode,FaSchool } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const AboutMe = () => {
    AOS.init();
    return (
        <div className={style.AboutMe}>
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
                        <img src={masai} alt="" width={100}/>
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
                        <img src={rcciit} alt="" width={100}/>
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
                        <img src={kv} alt="" width={100}/>
                        <h3 className="vertical-timeline-element-title">Class 12 (Computer Science)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya No.1 Salt Lake</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            
        </div >
    )
}

export default AboutMe