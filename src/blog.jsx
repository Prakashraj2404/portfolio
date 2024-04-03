import React from "react";
import './css/blog.css';
import Blog1 from './accests/project-6.jpg';
import Blog2 from './accests/project-2.jpg';
import Blog3 from './accests/project-7.jpg';

// import Blog1 from "./assets/blog1.jpg";
// import Blog2 from "./assets/blog2.jpg";
// import Blog3 from "./assets/blog3.jpg";
import Blog4 from "./accests/blog4.jpg";
import Blog5 from "./accests/blog5.jpg";
import Blog6 from "./accests/blog6.jpg";
import { IoToday } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaLink } from "react-icons/fa";



export default class Nav extends React.Component {

    render() {
        return (
            <div className="blog-cont">
                <div className='port-header'>
                    <h1 className='port-back'>posts</h1>
                    <h1 className='port-head'><span>my</span> blog</h1>
                </div>
                <div className="myblogs-containers">
                    <div className="card-overall">

                        {/* one card */}
                        <div className="parent">
                            <div className="one">
                                <div className="child bg-one">
                                    <img src={Blog1} alt="blog images" />
                                </div>

                                <div className="titles">
                                    <IoToday className="cal" /><span>21st may,2021 </span><IoPerson className="person" /><span>By Admin</span>
                                </div>

                                <div className="first-part">

                                    <h3>Web developer</h3>

                                    <p>Jim Morisson Says when the musics over turn off the light.</p>

                                    <button>Read more <FaLink className="link" /></button>

                                </div>

                            </div>
                        </div>



                          {/* two card */}
                          <div className="parent">
                            <div className="one">
                                <div className="child bg-one">
                                    <img src={Blog2} alt="blog images" />
                                </div>

                                <div className="titles">
                                    <IoToday className="cal" /><span>8st Aug,2022 </span><IoPerson className="person" /><span>By prakash</span>
                                </div>

                                <div className="first-part">

                                    <h3>Branding</h3>

                                    <p>How to be appreciated for your hard work as a developer</p>

                                    <button>Read more <FaLink className="link" /></button>

                                </div>

                            </div>
                        </div>


                        {/* three card */}
                        <div className="parent">
                            <div className="one">
                                <div className="child bg-one">
                                    <img src={Blog3} alt="blog images" />
                                </div>

                                <div className="titles">
                                    <IoToday className="cal" /><span>14st Dec,2000 </span><IoPerson className="person" /><span>By Leo</span>
                                </div>

                                <div className="first-part">

                                    <h3>Social Media</h3>

                                    <p>How designers and developers can collaborate better</p>

                                    <button>Read more <FaLink className="link" /></button>

                                </div>

                            </div>
                        </div>



                        {/*four card */}
                        <div className="parent">
                            <div className="one">
                                <div className="child bg-one">
                                    <img src={Blog4} alt="blog images" />
                                </div>

                                <div className="titles">
                                    <IoToday className="cal" /><span>17st Mar,2024 </span><IoPerson className="person" /><span>By Jeru</span>
                                </div>

                                <div className="first-part">

                                    <h3>UI/UX Design</h3>

                                    <p>Angular team welarges to trequests blog. team work design.</p>

                                    <button>Read more <FaLink className="link" /></button>

                                </div>

                            </div>
                        </div>


                        {/* five card */}
                        <div className="parent">
                            <div className="one">
                                <div className="child bg-one">
                                    <img src={Blog5} alt="blog images" />
                                </div>

                                <div className="titles">
                                    <IoToday className="cal" /><span>09st July,2023 </span><IoPerson className="person" /><span>By Ram</span>
                                </div>

                                <div className="first-part">

                                    <h3>Responsive design</h3>

                                    <p>How to create a website using html and css in responsive design works.</p>

                                    <button>Read more <FaLink className="link" /></button>

                                </div>

                            </div>
                        </div>



                        {/* six card */}
                        <div className="parent">
                            <div className="one">
                                <div className="child bg-one">
                                    <img src={Blog6} alt="blog images" />
                                </div>

                                <div className="titles">
                                    <IoToday className="cal" /><span>24st March,2023 </span><IoPerson className="person" /><span>By Subash</span>
                                </div>

                                <div className="first-part">

                                    <h3>Shopify</h3>

                                    <p>We mack team welarges to trequests blog. and create our own teams goals.</p>

                                    <button>Read more <FaLink className="link" /></button>

                                </div>

                            </div>
                        </div>



                    </div>
                </div>

            </div>
        )
    }
}