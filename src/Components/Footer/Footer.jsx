import React from 'react'
import './Footer.css'
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer_top">
                <div className="footer_top_left">
                    <h1>MoniR</h1>
                    <p>I'm Front End Web Developer in BD with 10 year's of experience</p>
                </div>
                <div className="footer_top_right">
                    <div className="footer_email_input">
                        <AiOutlineUser />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="footer_subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer_botom">
                <p className="footer_botom_left">&copy; 2023 MoniR, All Right Reserved</p>
                <div className="footer_botom_right">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
