import React from 'react'
import style from "../Styles/Home.module.css"
import Typewriter from 'typewriter-effect';
import wave from "../assets/wave1.png"
import ParticleBackground from "./ParticleBackground"
import profile from "../assets/profile.webp"
import { Icon } from '@chakra-ui/react'
import { BsLinkedin, BsGithub} from 'react-icons/bs'

const Home = () => {
    return (
        <>
            <ParticleBackground />
            <div className={style.home} id="Home">
                <div className={style.homeGap}></div>
                <div className={style.homeMain}>
                    <div className={style.fullText}>
                        <div className={style.autoText}>
                            I am
                            <div className={style.typewriter}>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        strings: [
                                            'Rajkumar Pradhan',
                                            'a Full-stack Web Developer',
                                            'a MERN developer'
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                        <div className={style.smallAboutme}>
                            Love to build from scratch <br />
                            Has worked on many projects <br />
                            And love to be a part of your team <br />
                            Ready to move if asked. <br />
                            <div className={style.buttonAboutme}>
                                <div className={style.buttonAboutme1}>
                                    <Icon as={BsGithub} paddingTop={"0.5rem"} boxSize={50}/>
                                </div>
                                <div className={style.buttonAboutme2}>
                                    <Icon as={BsLinkedin} paddingTop={"0.5rem"} boxSize={50}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.profilePic}>
                        {/* <img className={style.mainPic} src={profilePhoto} alt="" /> */}
                        {/* <img className={style.colorBack} src={colorBack} alt="" /> */}
                        <img className={style.mainProfilePic} src={profile} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.bottomWave}>
                <img className={style.botwave} src={wave} alt="" />
            </div>
        </>
    )
}

export default Home