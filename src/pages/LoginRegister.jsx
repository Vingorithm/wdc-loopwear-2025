import React, { useState } from "react";

const LoginRegister = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  
  return (
    <div className="page-login body">
      <div className="page-login container-main">
        <div
          className={`container-signup ${isRightPanelActive ? "right-panel-active" : ""}`}
          id="main"
        >
          {/* Sign Up Form */}
          <div className="page-login sign-up">
            <form>
              <h1 className="page-login heder">Sign Up</h1>
              <input type="text" name="username" placeholder="Username" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
              <button className="page-login fix" type="submit">Sign Up</button>
            </form>
          </div>

          {/* Log In Form */}
          <div className="page-login log-in">
            <form>
              <h1 className="page-login heder">Log In</h1>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button className="page-login fix" type="submit">Log In</button>
            </form>
          </div>

          {/* Overlay */}
          <div className="page-login container-overlay">
            <div className="page-login overlay">
              <div className="page-login overlay-left">
                <h1>Already Have an Account?</h1>
                <button id="login" onClick={() => setIsRightPanelActive(false)}>Log in</button>
              </div>
              <div className="overlay-right">
                <h1>Don't Have an Account?</h1>
                <button id="signup" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .page-login body {
                background-color: #FCFBF0;
                height: 100%;
                width: 100%;
                margin: 0;
                padding: 0;
            }

            .page-login .container-main {
                height: 100vh;
                width: 100%;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .page-login .container-signup {
                margin-top: 10%;
                position: relative;
                width: 100%;
                max-width: 768px;
                min-height: 480px;
                background: #FCFBF0;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 14px 28px rgba(57, 117, 75, 0.25),
                    0 10px 10px rgba(57, 117, 75, 0.22);
            }

            .page-login .sign-up,
            .page-login .log-in {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 50%;
                transition: all 0.6s ease-in-out;
            }

            .page-login .sign-up {
                opacity: 0;
                z-index: 1;
            }

            .page-login .log-in {
                z-index: 2;
            }

            .page-login .container-signup.right-panel-active .sign-up {
                transform: translateX(100%);
                opacity: 1;
                z-index: 5;
            }

            .page-login .container-signup.right-panel-active .log-in {
                transform: translateX(100%);
                opacity: 0;
                z-index: 1;
            }

            .page-login form {
                background: #FCFBF0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 50px;
                height: 100%;
                text-align: center;
            }

            .page-login h1 {
                font-weight: #FCFBF0;
                margin: 0;
                color: white;
                z-index: 5;
            }

            .page-login .heder {
                color: #1A1816;
                font-weight: 900;
                font-family: Roboto;
            }

            .page-login p {
                font-size: 14px;
                font-weight: 100;
                line-height: 10px;
                letter-spacing: 0.5px;
                margin: 5px 0 10px;
                color: #1A1816;
            }

            .page-login input {
                background: #FCFBF0;
                padding: 12px 15px;
                width: 100%;
                margin: 8px 15px;
                border-radius: 5px;
                border: 1px solid #39754B;
                outline: none;
                color: #1A1816;
            }

            .page-login input::placeholder {
                color: #1A1816;
                opacity: 0.7;
            }

            .page-login a {
                color: #1A1816;
                font-size: 14px;
                text-decoration: none;
                margin: 15px 0;
            }

            .page-login button {
                color: #FCFBF0;
                background: #1A1816;
                font-size: 12px;
                font-weight: bold;
                padding: 12px 55px;
                margin: 20px;
                border-radius: 4px;
                border: 1px solid #1A1816;
                outline: none;
                letter-spacing: 1px;
                text-transform: uppercase;
                transition: transform 80ms ease-in;
                cursor: pointer;
                z-index: 5;
            }

            .page-login button:active {
                transform: scale(0.90);
            }

            .page-login #signup,
            .page-login #login {
                background: #39754B;
                border: 2px solid #FCFBF0;
                color: #FCFBF0;
            }

            .page-login .container-overlay {
                position: absolute;
                top: 0;
                left: 50%;
                width: 50%;
                height: 100%;
                overflow: hidden;
                z-index: 100;
                transition: transform 0.6s ease-in-out;
            }

            .page-login .container-signup.right-panel-active .container-overlay {
                transform: translateX(-100%);
            }

            .page-login .overlay {
                position: relative;
                background: #39754B;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                left: -100%;
                height: 100%;
                width: 200%;
                transition: transform 0.6s ease-in-out;
                z-index: 2;
            }

            .page-login .container-signup.right-panel-active .overlay {
                transform: translateX(50%);
            }

            .page-login .overlay-left::before,
            .page-login .overlay-right::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(26, 24, 22, 0.5);
                z-index: 1;
            }

            .page-login .overlay-left,
            .page-login .overlay-right {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 40px;
                text-align: center;
                top: 0;
                height: 100%;
                width: 50%;
                z-index: 2;
            }

            .page-login .overlay-left {
                transform: translateX(0%);
                background-image: url('../images/car3.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }

            .page-login .overlay-right {
                right: 0;
                transform: translateX(0);
                background-image: url('../images/car2.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }

            .page-login .container-signup.right-panel-active .overlay-left {
                transform: translateX(0);
            }

            .page-login .container-signup.right-panel-active .overlay-right {
                transform: translateX(0%);
            }

            .page-login .container-social {
                margin: 1px 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .page-login .container-social a {
                height: 40px;
                width: 40px;
                margin: 0 5px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #39754B;
                border-radius: 50%;
            }

            .page-login .fix a {
                color: #FCFBF0;
            }
        `}
      </style>
    </div>
  );
};

export default LoginRegister;