import React from 'react'
import style from "../Styles/Contact.module.css"
import { Icon } from '@chakra-ui/react'
import { GrMail } from "react-icons/gr"
import { GoLocation } from "react-icons/go"
import { BiMessageDetail } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillTelephoneFill, BsLinkedin, BsGithub, BsFillPersonFill } from "react-icons/bs"
import TextField from '@mui/material/TextField';
// import Wave from 'react-wavify'

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [para, setPara] = React.useState("");

    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePara = (e) => {
        setPara(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div className={style.mainContact}>
            <div id="Contact" className={style.contact}>
                <h1 className={style.contactText}>
                    Contact
                </h1>
                <div className={style.contactForm}>
                <div className={style.contactTextBase1}>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <Icon as={GrMail} boxSize={30} />
                            <h3>pradhan.rajkumar.1999@gmail.com</h3>
                        </div>
                        <br />
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <Icon as={BsFillTelephoneFill} boxSize={30} />
                            <h3>+91 9875487846</h3>
                        </div>
                        <br />
                        <a style={{ textDecoration: "none", color: "#181818" }} href="https://www.linkedin.com/in/rajkumar-pradhan-9a5ba6213/" target="_blank">
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <Icon as={BsLinkedin} boxSize={30} />
                                <h3>Rajkumar Pradhan</h3>
                            </div>
                        </a>
                        <br />
                        <a style={{ textDecoration: "none", color: "#181818" }} href="https://github.com/rajkumar-cmd" target="_blank">
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <Icon as={BsGithub} boxSize={30} />
                                <h3>rajkumar-cmd</h3>
                            </div>
                        </a>
                        <br />
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <Icon as={GoLocation} boxSize={30} />
                            <h3>EB-108, Sec-1, Saltlake,Kolkata, WestBengal, India</h3>
                        </div>
                        <br />
                    </div>
                    <div className={style.form}>
                        <form className={style.contactTextBase}>
                            <div style={{ display: "flex" }}>
                                <Icon style={{ paddingTop: "0.8rem" }} as={BsFillPersonFill} boxSize={30} />
                                <TextField color='grey' fullWidth id="outlined-basic" label="Your Name" type="text" value={name} onChange={(e) => handleName(e)} variant="outlined" />
                            </div>
                            <br />
                            <div style={{ display: "flex" }}>
                                <Icon style={{ paddingTop: "0.8rem" }} as={HiOutlineMail} boxSize={30} />
                                <TextField color='grey' fullWidth id="outlined-basic" label="Your Email" type="email" value={email} onChange={(e) => handleEmail(e)} variant="outlined" />
                            </div>
                            <br />
                            <div style={{ display: "flex" }}>
                                <Icon style={{ paddingTop: "0.8rem" }} as={BiMessageDetail} boxSize={30} />
                                <TextField color='grey' fullWidth id="outlined-multiline-static" rows={4} label="Your Message" type="text" value={para} onChange={(e) => handlePara(e)} variant="outlined" multiline />
                            </div>
                            <button className={style.send}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#ff6600"}}>
                {/* <Wave fill='#000'
                    paused={false}
                    options={{
                        height: 60,
                        amplitude: 50,
                        speed: 0.15,
                        points: 4
                    }}
                /> */}
            </div>
        </div>
    )
}

export default Contact