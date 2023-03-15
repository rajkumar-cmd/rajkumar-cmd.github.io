import React from 'react'
import style from "../Styles/Contact.module.css"
import { Icon } from '@chakra-ui/react'
import { GrMail } from "react-icons/gr"
import { GoLocation } from "react-icons/go"
import { BiMessageDetail } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillTelephoneFill, BsLinkedin, BsGithub, BsFillPersonFill } from "react-icons/bs"
import TextField from '@mui/material/TextField';
import { useForm, ValidationError } from '@formspree/react';
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
    const [state, handleSubmit] = useForm("xvonrzwg");
    if (state.succeeded) {
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
                        <h1>Thanks for filling the form I will respond soon.</h1>
                    </div>
                </div>
            </div>
        </div>
        );
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
                        <form className={style.contactTextBase} onSubmit={handleSubmit}>
                            <div style={{ display: "flex" }}>
                                <Icon style={{ paddingTop: "0.8rem" }} as={BsFillPersonFill} boxSize={30} />
                                <TextField color='grey' fullWidth id="outlined-basic" label="Your Name" type="text" value={name} name="name" onChange={(e) => handleName(e)} variant="outlined" required />
                            </div>
                            <br />
                            <div style={{ display: "flex" }}>
                                <Icon style={{ paddingTop: "0.8rem" }} as={HiOutlineMail} boxSize={30} />
                                <TextField color='grey' fullWidth id="outlined-basic" label="Your Email" type="email" name="email" value={email} onChange={(e) => handleEmail(e)} variant="outlined" required />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <br />
                            <div style={{ display: "flex" }}>
                                <Icon style={{ paddingTop: "0.8rem" }} as={BiMessageDetail} boxSize={30} />
                                <TextField color='grey' fullWidth id="outlined-multiline-static" rows={4} label="Your Message" name="message" type="text" value={para} onChange={(e) => handlePara(e)} variant="outlined" multiline required />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <button className={style.send}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact