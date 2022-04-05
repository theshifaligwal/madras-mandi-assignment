import React, { useState } from "react";
import { register } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../helperFunction/user";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const [isRedirect, setIsRedirect] = useState(false);
  const dispatch = useDispatch();

  const userIsAuthenticated = useSelector((state) => state.userIsAuthenticated);

  const getUser = getUserData();

  const handelRegister = (event) => {
    event.preventDefault();
    if (email === "" || password === "" || username === "" || name === "")
      return;

    dispatch(register({ email, password, username, name }));
    setIsRedirect(true);
  };

  return (
    <div className="login">
      {(userIsAuthenticated || getUser) && <Navigate to="/" />}
      <div className="loginWrapper">
        <div className="loginForm">
          <form className="loginBox">
            <div className="containerDivInput">
              <input
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="loginInput"
              />
              <input
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="loginInput"
              />
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
            <button
              onClick={handelRegister}
              className="loginButton"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
