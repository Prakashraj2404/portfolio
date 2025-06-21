import React from "react";
import './css/about.css';
import { FaDownload } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import resume from "./assets/Prakash_Raj.pdf";

export default class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div className='port-header'>
                    <h1 className='port-back'>resume</h1>
                    <h1 className='port-head'><span>about</span> me</h1>
                </div>

                <div className="about-details">
                    <section className="about-info">
                        <div className="info">
                            <p>First Name : <span>Prakash Raj</span></p>
                            <p>Last Name : <span>Madhaiyan</span></p>
                            <p>Address : <span>Krishnagiri, 635-104</span></p>
                            <p>phone : <span>+91 94894-02877</span></p>
                            <p>E-mail : <span>prakashmadhaiyan02@gmail.com</span></p>
                            <a href={resume} download><button className="home-button abtbtn">Download CV <a><FaDownload /></a></button></a>
                        </div>

                        <div className="info">
                            <p>Freelance : <span>Available</span></p>
                            <p>Skills : <span>Full-stack Developer</span></p>
                            <p>Experience : <span>Fresher</span></p>
                            <p>Languages : <span>English,Telugu,Tamil</span></p>
                        </div>

                    </section>

                    <section className="about-boxes">
                        <div className="box box1">
                            <h1>Fresher</h1>
                            <p>Experience</p>
                        </div>

                        <div className="box box2">
                            <h1>15+</h1>
                            <p>Projects Completed</p>
                        </div>

                        <div className="box box3">
                            <h1>100+</h1>
                            <p>Positive Reviews</p>
                        </div>

                    </section>
                </div>


                <hr className="line" />

                <div className="skills">
                    <section className="prog">
                        <p>HTML & CSS<span> 95%</span></p>
                        <progress value="95" max="100" className="prog-all prog-html"></progress>
                    </section>

                    <section className="prog">
                        <p>Javascript<span> 90%</span></p>
                        <progress value="90" max="100" className="prog-all prog-js"></progress>
                    </section>

                    <section className="prog">
                        <p>React<span> 85%</span></p>
                        <progress value="85" max="100" className="prog-all prog-react"></progress>
                    </section>

                    <section className="prog">
                        <p>Node.Js<span> 65%</span></p>
                        <progress value="65" max="100" className="prog-all prog-node"></progress>
                    </section>

                    <section className="prog">
                        <p>Mongo DB<span> 75%</span></p>
                        <progress value="75" max="100" className="prog-all prog-mongo"></progress>
                    </section>

                    <section className="prog">
                        <p>Bootstrap<span> 98%</span></p>
                        <progress value="98" max="100" className="prog-all prog-bootstrap"></progress>
                    </section>
                </div>


                <hr className="line" />


                <div className="education">

                    <div className="edu-details">
                        <p>2025 - Present</p>
                        <p>Junior Software developer <span>- Yoho Technologies</span></p>
                        <p>I am currently working as a Junior Software Developer at Yoho Technologies, Chennai. I am working on various projects, focusing on both front-end and back-end development. My role involves collaborating with the team to design and implement software solutions that meet client requirements.</p>
                        <FaGraduationCap className="grad-cap" />
                    </div>

                    <div className="edu-details">
                        <p>2024</p>
                        <p>web developer <span>- Login 360</span></p>
                        <p>I designed some frond-end templates. And I workded with CSS and Bootstrap for designing UI. Then I am also worked in frond-end frameworks like React Js. I have done some API integration in small Projects.</p>
                        <FaGraduationCap className="grad-cap" />
                    </div>

                    <div className="edu-details">
                        <p>2019 - 2023</p>
                        <p>B.Tech (IT) <span>- SKCET</span></p>
                        <p>I Completed B.Tech - Information Technology, at Sri Krishna college of Engineering and tehnology,Coimbatore.With 7.53 CGPA </p>
                        <FaGraduationCap className="grad-cap" />
                    </div>

                    <div className="edu-details">
                        <p>2018 - 2019</p>
                        <p>HSE <span>- VMHSS</span></p>
                        <p> I Completed Higher Secondary Education at Vailankanni Matric Higher Seondary School, Bargur, with the percentage of 56.4 </p>
                        <FaGraduationCap className="grad-cap" />
                    </div>

                    <div className="edu-details">
                        <p>2016 - 2017</p>
                        <p>SSLC <span>- KMHSS</span></p>
                        <p> I Completed Secondary School Leaving Certificate at Kanakadasa Matric Higher Seondary School, Bargur, with the percentage of 88.4 </p>
                        <FaGraduationCap className="grad-cap" />
                    </div>


                </div>

            </div>
        )
    };
};
