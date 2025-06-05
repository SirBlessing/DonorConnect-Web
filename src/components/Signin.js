import React from "react";
import '../App.css';
import { FaGoogle, FaApple, FaPhoneAlt } from "react-icons/fa";
import {Link } from "react-router-dom"
const Signin = ({ closeOverlay }) => {
  return (
    <div className="modal">
          <h2 className="signinh2">Sign In</h2>
          
          <div  className="signup-container">
          <div className="signup-btn">
            <FaGoogle className="icon" />
            Continue with Google
          </div>
          <div className="signup-btn">
            <FaApple className="icon" />
            Continue - Apple
          </div>
          <div className="signup-btn">
            <FaPhoneAlt className="icon" />
            Continue with phone number
          </div>
          </div>
          {/* <button onClick={closeOverlay}>Close</button> */}
          <div className="or-divider">
            <h2>OR</h2>
          </div>
          <div className="signupform">
      <label>Email</label>
      <input type="text" required />
      {/* <label>Password</label>
      <input type="password" required /> */}
      <button className="signupform-btn">Sign In</button>
      <p className="termss">
       Don't have an account? <Link to="/signup"><b>Sign Up</b></Link>
      </p>
    </div>
    
        </div>
  );
};

export default Signin;
