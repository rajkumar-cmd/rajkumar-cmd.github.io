import React from 'react'
import style from "../Styles/Projects.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from '@chakra-ui/react'
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai"
import NarviLaptop from "../assets/NarviLaptop.webp"
import Bechef from "../assets/Bechef.webp"
import twopunchLaptop from "../assets/twopunchLaptop.webp"
import Naukri from "../assets/naukri.webp"
import Gadget from "../assets/gadget.webp"
// import LaptopNarvi from './LaptopNarvi';

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
                    <div className={style.pc} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Bechef Website (MERN)</h2>
                            <p className={style.subProjectText}>( Collaborative Project build by a team of 4 )</p>
                            <p className={style.subProjectText}>Bechef is an online Ecommerce Website which is <br /> providing high quality food products as well as easy <br /> to cook meals. From this website, users can Order food <br /> products cooked as well as raw and much more across the world.</p>
                            <p className={style.subProjectText}>
                                <h4 className={style.subProjectTextMain}>Areas of responsibility:- </h4> Login and Signup | Navbar | Routes | Backend | Cart
                            </p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> React | CSS | Redux | Node.js | Express.js | MongoDB |<br /> MongoDB Atlas | Mongoose | JsonWebToken | Nodemon |<br /> Bcrypt | ChakraUI | Framer Motion | React Icons</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/akarshabhardwaj/Blue-Apron-Clone" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://befchef.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.firstrightText}>
                        <img src={Bechef} alt="" className={style.img} />
                    </div>
                </div>
                <br />
                <div className={style.secondPro}>
                    <div className={style.firstrightText}>
                        <img src={Gadget} alt="" className={style.img} />
                    </div>
                    <div className={style.pc} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Gadget Rambo Website</h2>
                            <p className={style.subProjectText}>( Collaborative Project build by a team of 5 )</p>
                            <p className={style.subProjectText}>This website had been created to target tech-geeks to <br /> explore tech gadgets and tech related news.</p>
                            <p className={style.subProjectText}>
                                <h4 className={style.subProjectTextMain}>Areas of responsibility:- </h4> Designed responsiveness | Home Page | Cart | Payment Page
                            </p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> Redux | React | CSS | Firebase | Typescript | Nextjs | Mui | ChakraUI</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/Atanu8250/GadgetRambo" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://gadget-rambo.vercel.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.firstPro}>
                    <div className={style.pc} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Narvi Management Website</h2>
                            <p className={style.subProjectText}>( Individual Project )</p>
                            <p className={style.subProjectText}>A work management website that helps business teams
                                collaborate,<br /> plan projects and organize team members.</p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> React | CSS | ChakraUI | Framer Motion | React Icons</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/rajkumar-cmd/Narvi-Management" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://narvi.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.firstrightText}>
                        <img src={NarviLaptop} alt="" className={style.img} />
                    </div>
                </div>
                <br />
                <div className={style.secondPro}>
                    <div className={style.firstrightText}>
                        <img src={twopunchLaptop} alt="" className={style.img} />
                    </div>
                    <div className={style.pc} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Two Punch Fitness Website</h2>
                            <p className={style.subProjectText}>( Collaborative Project build by a team of 5 )</p>
                            <p className={style.subProjectText}>The website had been created to target fitness <br />
                                enthusiasts to explore fitness services and products.</p>
                            <p className={style.subProjectText}>
                                <h4 className={style.subProjectTextMain}>Areas of responsibility:- </h4> Lead the team | Designed responsiveness | Build fetch and filtration
                            </p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> HTML | CSS | JavaScript</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/rajkumar-cmd/Two-Punch-Fitness-Website/tree/main" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://admirable-raindrop-842e4c.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className={style.fifthPro}>
                    <div className={style.pc} data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <div className={style.firstleftText}>
                            <h2 className={style.mainProjectText}>Naukri Website Clone</h2>
                            <p className={style.subProjectText}>( Individual Project )</p>
                            <p className={style.subProjectText}>It is a job searching website where a user can <br /> search for the jobs he is interested in.</p>
                            <p className={style.subProjectText}><h4 className={style.subProjectTextMain}>Tech Stack Used:- </h4> HTML | CSS | JavaScript</p>
                            <br />
                            <div className={style.linkMain}>
                                <a href="https://github.com/rajkumar-cmd/Naukri.com-Clone" target="_blank"><button className={style.linkMainButton}><Icon as={AiFillGithub} boxSize={30} /></button></a>
                                <a href="https://dashing-kelpie-f02b5b.netlify.app/" target="_blank"><button className={style.linkMainButton}><Icon as={AiOutlineGlobal} boxSize={30} /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.firstrightText}>
                        <img src={Naukri} alt="" className={style.img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects