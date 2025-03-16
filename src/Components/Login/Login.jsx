import React from "react";
import "./Login.css"; 


const Login = () => {
  return (
    <div className="container">


        <div className="login-container">

            <div className="heading">
                <h2>Welcome Back</h2>
                <p>Lets get back to work</p>
            </div>

            <div className="form-container">
                <form>
                    <div className="input-container">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password"/>
                    </div>
                    <a  href="https://www.google.co.in/">Forgot Password?</a>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <a href="https://www.google.co.in/">
            Don’t Have an account?
            </a>
        </div>
        <img src="src\Components\Assets\shade.png" alt="bg" />
    </div>

  );
};

export default Login;
