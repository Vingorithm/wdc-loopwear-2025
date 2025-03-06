import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  
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
              <h1 className="page-login header">Sign Up</h1>
              <div className="input-group">
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
              </div>
              <button className="page-login fix" type="submit">Sign Up</button>
            </form>
          </div>

          {/* Log In Form */}
          <div className="page-login log-in">
            <form onSubmit={handleLogin}>
              <h1 className="page-login header">Log In</h1>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <button className="page-login fix" type="submit">Log In</button>
            </form>
          </div>

          {/* Overlay */}
          <div className="page-login container-overlay">
            <div className="page-login overlay">
              <div className="page-login overlay-left">
                <h1>Already Have an Account?</h1>
                <p>Log in with your details to continue your journey with us</p>
                <button id="login" onClick={() => setIsRightPanelActive(false)}>Log in</button>
              </div>
              <div className="overlay-right">
                <h1>Don't Have an Account?</h1>
                <p>Enter your personal details and start your journey with us</p>
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
                font-family: 'Roboto', 'Segoe UI', sans-serif;
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
                justify-content: center;
                background-color: #FCFBF0;
                background-image: linear-gradient(135deg, rgba(147, 165, 136, 0.2) 0%, rgba(252, 251, 240, 0.8) 100%);
            }

            .page-login .container-signup {
                position: relative;
                width: 100%;
                max-width: 850px;
                min-height: 550px;
                background: #FCFBF0;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 14px 28px rgba(57, 117, 75, 0.18),
                    0 10px 10px rgba(57, 117, 75, 0.12);
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

            .page-login .input-group {
                width: 100%;
                margin: 15px 0;
            }

            .page-login h1 {
                margin: 0 0 20px 0;
                color: white;
                z-index: 5;
            }

            .page-login .header {
                color: #39754B;
                font-weight: 700;
                font-size: 32px;
                letter-spacing: 1px;
                margin-bottom: 30px;
                position: relative;
            }

            .page-login .header:after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -10px;
                transform: translateX(-50%);
                height: 3px;
                width: 50px;
                background: #39754B;
                border-radius: 2px;
            }

            .page-login p {
                font-size: 16px;
                font-weight: 400;
                line-height: 1.5;
                letter-spacing: 0.5px;
                margin: 20px 0;
                color: #FCFBF0;
                max-width: 80%;
                text-align: center;
            }

            .page-login input {
                background: #FCFBF0;
                padding: 15px;
                width: 100%;
                margin: 10px 0;
                border-radius: 8px;
                border: 1px solid #93A588;
                outline: none;
                color: #1A1816;
                font-size: 14px;
                transition: border-color 0.3s ease;
            }

            .page-login input:focus {
                border-color: #39754B;
                box-shadow: 0 0 0 2px rgba(57, 117, 75, 0.2);
            }

            .page-login input::placeholder {
                color: #93A588;
                opacity: 0.7;
            }

            .page-login .forgot-password {
                color: #39754B;
                font-size: 14px;
                text-decoration: none;
                margin: 15px 0;
                align-self: flex-end;
                transition: color 0.3s ease;
            }

            .page-login .forgot-password:hover {
                color: #1A1816;
                text-decoration: underline;
            }

            .page-login button {
                color: #FCFBF0;
                background: #39754B;
                font-size: 14px;
                font-weight: 600;
                padding: 14px 60px;
                margin: 20px;
                border-radius: 30px;
                border: none;
                outline: none;
                letter-spacing: 1px;
                text-transform: uppercase;
                transition: all 0.3s ease;
                cursor: pointer;
                z-index: 5;
                box-shadow: 0 4px 6px rgba(57, 117, 75, 0.2);
            }

            .page-login button:hover {
                background: #2a5437;
                transform: translateY(-2px);
                box-shadow: 0 6px 10px rgba(57, 117, 75, 0.3);
            }

            .page-login button:active {
                transform: translateY(0) scale(0.98);
                box-shadow: 0 2px 5px rgba(57, 117, 75, 0.2);
            }

            .page-login #signup,
            .page-login #login {
                background: transparent;
                border: 2px solid #FCFBF0;
                color: #FCFBF0;
            }

            .page-login #signup:hover,
            .page-login #login:hover {
                background: rgba(252, 251, 240, 0.2);
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
                background: linear-gradient(135deg, #39754B 0%, #93A588 100%);
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
                background-color: rgba(26, 24, 22, 0.3);
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

            .page-login .overlay-left::after,
            .page-login .overlay-right::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(57, 117, 75, 0.8) 0%, rgba(26, 24, 22, 0.7) 100%);
                z-index: -1;
            }

            .page-login .container-signup.right-panel-active .overlay-left {
                transform: translateX(0);
            }

            .page-login .container-signup.right-panel-active .overlay-right {
                transform: translateX(0%);
            }

            .page-login .container-social {
                margin: 20px 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .page-login .container-social a {
                height: 40px;
                width: 40px;
                margin: 0 8px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #93A588;
                border-radius: 50%;
                transition: all 0.3s ease;
                color: #39754B;
            }

            .page-login .container-social a:hover {
                background: #39754B;
                border-color: #39754B;
                color: #FCFBF0;
                transform: translateY(-3px);
            }

            .page-login .fix a {
                color: #FCFBF0;
            }

            @media (max-width: 768px) {
                .page-login .container-signup {
                    min-height: 500px;
                    max-width: 90%;
                }

                .page-login form {
                    padding: 0 30px;
                }
            }
        `}
      </style>
    </div>
  );
};

export default LoginRegister;