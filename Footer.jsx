import React from "react";
import { FaFacebookF,FaTwitter,FaGithub,FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                <h3>G-code</h3>
                            </div>
                            <ul className="footerCircles">
                                <li><FaFacebookF className="footerIcon"/></li>
                                <li><FaTwitter className="footerIcon"/></li>
                                <li><FaGithub className="footerIcon"/></li>
                                <li><FaInstagram className="footerIcon"/></li>
                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright">Copyright {new Date().getFullYear()} G-code | All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;