import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginForm">
          <form className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" type="email" />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
