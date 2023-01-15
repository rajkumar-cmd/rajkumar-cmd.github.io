import React from 'react'
import style from "../Styles/Home.module.css"
import Typewriter from 'typewriter-effect';
import profilePhoto from "../assets/profilePic.webp"
import wave from "../assets/wave1.png"
import colorBack from "../assets/colorBack.png"
import ParticleBackground from "./ParticleBackground"

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
                            Ready to move if asked.
                        </div>
                    </div>
                    <div className={style.profilePic}>
                        <img className={style.mainPic} src={profilePhoto} alt="" />
                        <img className={style.colorBack} src={colorBack} alt="" />
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