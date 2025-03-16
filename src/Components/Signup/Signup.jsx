import React from "react";
import "./SignUp.css"; 

const SignUp = () => {
  return (
    <div className="container">
        <div className="signup-container">
            <div className="heading">
                <h2>Create an Account</h2>
                <p>Join us and start your journey</p>
            </div>

            <div className="form-container">
                <form>
                    <div className="input-container">
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>

            <a href="/login">
            Already have an account?
            </a>
        </div>
        <img src="src\Components\Assets\shade.png" alt="bg" />
    </div>
  );
};

export default SignUp;