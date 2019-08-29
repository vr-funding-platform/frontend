import React from 'react';
import {IoLogoFacebook} from 'react-icons/io';
import {IoLogoTwitter} from 'react-icons/io';
import {IoLogoYoutube} from "react-icons/io";
import './Styles/Footer.css';






function Footer () {
    return (
    
    <footer>
            <img src="https://files.slack.com/files-pri/T4JUEB3ME-FMSTV7THV/image.png" alt="VR Headgear"></img>
            <div className="footer-social">
                <p>&copy;SIXER 2019 - Simulated Immersive eXperimental Realities | Brooklyn Ave NE, Seattle, WA, 98105 | 206-571-8430 | SIXR@Studivo.com</p>
                <p>Social Media Links</p>
                <div classNameName="sml">
                 <a className="fab fa-facebook" href="https://www.facebook.com/sixrvr ">
                    <IoLogoFacebook classNameName="facebook" />
                    </a>
                    <a className="fab fa-twitter" href="https://twitter.com/sixrvr">
                    <IoLogoTwitter classNameName="twitter" />
                    </a>
                    <a className="fab fa-youtube"href="https://www.youtube.com/channel/UCVavPlD8iCYHyKhVJ06PAlw/featured ">
                    <IoLogoYoutube classNameName="youtube" />
                    </a>
                 </div>
            </div>
  </footer>
    
    )
};

export default Footer;