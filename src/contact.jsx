import './css/contact.css';
import { RiMailOpenFill } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="contact-cont">
            <div className='port-header'>
                <h1 className='port-back'>contact</h1>
                <h1 className='port-head'><span>get in</span> touch</h1>
            </div>
            <div className='contact-box'>
                <section className='txt-cont'>
                    <h1 className='txt-head'>don't be shy !</h1>
                    <p className='txt-para'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className='call-mail'>
                        <section className='mail'>
                            <RiMailOpenFill className='cont-icon' />
                            <div className='mail-cont'>
                                <p>mail me</p>
                                <p><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrkVwTpMskpvwGxXzpZjjXHZrjKLQFkZKjVBGzlfFrcLWSXCPrmkmBBJkMqrPJChtTxsXV' target='_blank'>prakashmadhaiyan02@gmail.com</a></p>
                            </div>
                        </section>
                        <section className='mail'>
                            <FaSquarePhone className='cont-icon' />
                            <div className='mail-cont'>
                                <p>call me</p>
                                <p>+91-948-940-2877</p>
                            </div>
                        </section>
                    </div>
                    <div className='cont-icons'>
                        <span><FaFacebookF /></span>
                        <span><FaXTwitter /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                        <span><FaGithub /></span>
                    </div>
                </section>


                <section className='contact-input'>
                    <form>

                        <div className='first-row-input'>
                            <input type='text' placeholder='YOUR NAME' required/>
                            <input type='email' placeholder='YOUR EMAIL' required/>
                            <input type='text' placeholder='YOUR SUBJECT' required/>
                        </div>
                        <textarea className='text-area' cols={100} rows={10} placeholder='YOUR MESSAGE'></textarea>
                        <button className="home-button" type='submit'>send message <a><FaTelegramPlane /></a></button>

                    </form>

                </section>
            </div>
        </div>
    )
}