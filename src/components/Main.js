import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import resume from "../resume.pdf";
import pfp from "../images/profile.png";

function Main() {
    return (
        <div className="container header">
            <div className="row">
                <img className="col-lg-4 col-sm-7 profileImg" height="525px" width="340px" src={pfp} alt="Ethan Lacy" />

                <div className="myInfo col-lg-6 d-flex flex-column justify-content-center">
                    <div className="mt-3 mx-auto text-center">
                        <h2>Hello, my name is</h2>
                        <h1 className="name">Ethan Lacy</h1>
                        <h5 className="mt-3"><i>Full-Stack Web Developer</i></h5>
                    </div>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="mt-5 mx-auto"><button id="resumeBtn"><h4>View my resume</h4></button></a>
                    <div className="d-flex mt-5 mx-auto mb-3">
                        <a href="https://github.com/Ethanl150" target="_blank" rel="noopener noreferrer" title="GitHub"><GitHubIcon color="primary" className="github icon" /></a>
                        <a href="https://www.linkedin.com/in/ethan-lacy-a4210819a/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><LinkedInIcon color="primary" className="icon" /></a>
                        <a href="mailto: ethanlay150@gmail.com" target="_blank" rel="noopener noreferrer" title="Email Me">
                            <EmailIcon color="primary" className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;