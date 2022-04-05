import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/actions";
import { getUserData } from "../helperFunction/user";
import { Navigate } from "react-router-dom";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userIsAuthenticated = useSelector((state) => state.userIsAuthenticated);

  const handelLogin = (event) => {
    if (email === "" || password === "") return;
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const getUser = getUserData();

  return (
    <div className="login">
      {(userIsAuthenticated || getUser) && <Navigate to="/" />}
      <div className="loginWrapper">
        <div className="loginForm">
          <form className="loginBox">
            <div className="containerDivInput">
              <input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="loginInput"
                type="email"
              />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="loginInput"
                type="password"
                minLength="6"
              />
            </div>
            <button onClick={handelLogin} className="loginButton" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
