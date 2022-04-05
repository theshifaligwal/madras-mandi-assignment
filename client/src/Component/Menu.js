import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/actions";
import { getUserData } from "../helperFunction/user";

const Menu = () => {
  const userIsAuthenticated = useSelector((state) => state.userIsAuthenticated);
  const dispatch = useDispatch();
  const handelLogout = () => {
    return dispatch(logout());
  };

  const getUser = getUserData();

  // Render the auth buttons
  const renderAuthButtons = () => {
    if (!(userIsAuthenticated || getUser)) {
      return (
        <Fragment>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </Fragment>
      );
    }
    return (
      <li>
        <div onClick={handelLogout}>LogOut</div>
      </li>
    );
  };

  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#">E-Com SITE</a>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/cart">My Cart</Link>
              </li>
              {(userIsAuthenticated || getUser) && (
                <li>
                  <Link to="/order">My Order</Link>
                </li>
              )}
              {renderAuthButtons()}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Menu;
