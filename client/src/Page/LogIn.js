import React from "react";

const LogIn = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginForm">
          <form className="loginBox">
            <div className="containerDivInput">
              <input placeholder="Email" className="loginInput" type="email" />
              <input
                placeholder="Password"
                className="loginInput"
                type="password"
                minLength="6"
              />
            </div>
            <button className="loginButton" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
