import * as React from "react";
import google from '../assets/Google.png';
function Login(props) {
  return (
    <div>
       <div className="top">
        SQrL
        photo
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
