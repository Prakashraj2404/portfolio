import React from "react";
import './css/home.css';
import {Link} from "react-router-dom";
import Prakash from './assets/Prakash_IMG.png';
import { TiArrowRightThick } from "react-icons/ti";

export default class Home extends React.Component{
    render(){
        return(
            <div className="home-container">

                <div className="home-img">
                    <div className="home-clip"></div>
                    <div className="circle">
                        <div className="rotate"></div>
                        <img src={Prakash} className="me" alt="Prakash Raj"/>
                    </div>
                </div>

                <div className="home-cont">
                    <h1 className="red-bold-txt bold">I'm Prakash raj.<br/><span className="bold grey-txt-bold">Web </span></h1>                   
                    <p className="home-p">I'm a Prakash Raj..., Web Development & MERN-Stack developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <Link to="/about" className="aaa"><button className="home-button">more about me <a><TiArrowRightThick /></a></button></Link>
                </div>
            </div>
        )
    }
}