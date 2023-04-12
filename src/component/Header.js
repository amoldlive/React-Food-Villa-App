import { useState } from "react";
import { Link } from "react-router-dom";
import { appLogo } from "./Constant";
import useConnectionStatus from "./hooks/useConnectionStatus.js";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline=useConnectionStatus();

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
          &nbsp;&nbsp;
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <div >Status : {isOnline ? '✅' : '🔴' } </div>
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
