import * as React from "react";
import google from '../assets/Google.png';
import apple from '../assets/Vector.png';
import facebook from '../assets/Facebook.png';
import background from '../assets/bc.png';
import './login.css';

import logo from '../assets/Frame 2.png';


function Login(props) {
  return (
    <div className="main">
        
       <div className="top">
        <div className="name">
        SQrL
        </div>
        <div className="logo">
        <img src={logo}/>
        </div>
        
        
        </div>
        <div className="bottom">
            <div className="create">
            <button>
                Continue
            </button>
            </div>
            <div className="seperator">
                    or
            </div>
            <div className="continue">
                Continue with
                <div className="google">
                <img src={google}/>
                <img src={apple}/>
                <img src={facebook}/>
                </div>
                <div className="facebook">

                </div>
                <div className="apple">

                </div>
            </div>
            </div> 
            </div>
  );
}

export default Login
