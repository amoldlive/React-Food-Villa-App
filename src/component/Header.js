import { useState } from "react";
import { Link } from "react-router-dom";
import { appLogo } from "./Constant";
import useConnectionStatus from "./hooks/useConnectionStatus.js";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useConnectionStatus();

  return (
    <div className="flex">
      <div className="flex">
        <a href="/">
          <img className="h-20 w-20 mr-10" alt="App Logo" src={appLogo}></img>
        </a>
      </div>
      <div >
        <ul className="flex mr-10">
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
      <div>Status : {isOnline ? "✅" : "🔴"} </div>
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
