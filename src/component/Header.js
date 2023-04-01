import { useState } from "react";
import { Link } from "react-router-dom";
import { appLogo } from "./Constant";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <a href="/">
        <img className="logo-img" alt="App Logo" src={appLogo}></img>
      </a>
      <div className="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          &nbsp;&nbsp;
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          &nbsp;&nbsp;
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
          &nbsp;&nbsp;
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
