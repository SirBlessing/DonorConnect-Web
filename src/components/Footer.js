import React from 'react';
import '../App.css';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
 import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='foot'>
         <div className='footdiv words'>
           <h4>DonorConnect</h4>
           <p>At  DonorConnect, we believe every donation makes a difference. Our mission is to simplify connect donors to recipients, and save lives through innovation and community</p> 
        </div> 

         <div className='footdiv quicklink'>
         <h4>QUICK LINKS</h4>
         <Link to="/"><p>Home</p></Link>
         <Link to="/Reciepientpage"><p>Forms</p></Link>
          <Link to="/DonorPage"><p>Donor</p></Link>
          <Link to="/Reciepientpage"><p>Recipient</p></Link>
         <Link to="Hospitaldash"><p>Hospital</p></Link>
        </div> 

        <div className='footdiv'>
        <h4>LICENSE</h4>
        <p>Terms and Concition</p>
        <p>Data Privacy and Compliance</p>
        <p>Privacy Policy</p>
            </div>

            <div className='footdiv'>
            <h4>SOCIAL MEDIA</h4>
            <div className='socialimagediv'> 
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            </div>
            <div><b>Email</b> <p>donorconnect@gmail.com</p></div>
            <div><b>Phone number</b> <p>08148313560</p></div>
            </div>
        </footer>
    );
};

export default Footer;