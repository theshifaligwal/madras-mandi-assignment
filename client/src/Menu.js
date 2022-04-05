import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <a href="#!">E-Com SITE</a>
          </div>
          <nav>
            <div class="nav-mobile">
              <a id="navbar-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul class="nav-list">
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/cart">My Cart</Link>
              </li>
              <li>
                <Link to="/order">My Order</Link>
              </li>

              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
                <Link to="/">LogOut</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Menu;
