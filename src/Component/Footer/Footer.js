import React, { PureComponent } from 'react';
import '../Footer/Footer.css';
import logo from '../Images/ytlogo.png'

const Footer = () =>{
    return(
        <div className="footer container-fluid">
            <div className="footer-uper-section">
            <img src={logo} alt="ytlogo" title="ytlogo" className="footer-ytlogo"/>
            <ul className="footer-ul">
                <li>
                <button className="footer-btn">Language: <span> English</span></button>
            
                </li>
                <li>
                <button className="footer-btn">Location: <span> Pakistan</span></button>
            
                </li>
                <li>
                <button className="footer-btn">Restricted Mode: <span> off</span></button>
            
                </li>
                <li>
                <button className="footer-btn">History</button>
            
                </li>
                <li>
                <button className="footer-btn">Help</button>
            
                </li>
            </ul>
            </div>
            <div className="footer-down-section">
                <ul className="down-section-first-ul">
                    <li>About</li>
                    <li>Press</li>
                    <li>Copyright</li>
                    <li>Creators</li>
                    <li>Advertise</li>
                    <li>Developers</li>
                </ul>
                <ul className="down-section-second-ul">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Policy &#38; Saftey</li>
                    <li>Send feedback</li>
                    <li>Test new features</li>
                    
                </ul>

            </div>
        </div>
    )
}
export default Footer;