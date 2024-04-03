import React from "react";
import { CiDark } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { MdBrightness5 } from "react-icons/md";
import {Link} from "react-router-dom";
import './css/nav.css'

export default class Nav extends React.Component {
    constructor(){
        super();
        this.state={condition:true};
        this.change=this.change.bind(this);
    }

    change(){
        this.setState({condition:!this.state.condition})
    }


    render() {
        return (
            <div className={this.state.condition?"nav-bar":"nav-bar dark"}>
                <nav> <a onClick={this.change}> {this.state.condition? <CiDark />:<MdBrightness5 /> } </a> </nav>
                <nav> <Link to="/"><span>Home</span><FaHome/></Link> </nav>
                <nav> <Link to="/about"><span>About</span><IoPerson/></Link> </nav>
                <nav> <Link to="/portfolio"><span>Portfolio</span><FaBriefcase/></Link> </nav>
                <nav> <Link to="/contact"><span>Contact</span><FaEnvelopeOpen/></Link> </nav>
                <nav> <Link to="/blog"><span>Blog</span><FaComments/></Link> </nav>              
            </div>
        )
    }
}