import { useState } from "react";
import { Link } from "react-router-dom";
import { appLogo } from "./Constant";
import useConnectionStatus from "./hooks/useConnectionStatus.js";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useConnectionStatus();

  return (
    <div className="flex drop-shadow-lg border-b-2">
      <div className="flex mr-60">
        <a href="/">
          <img className="h-20 w-20 m-5" alt="App Logo" src={appLogo}></img>
        </a>
      </div>
      <div className="mt-10">
        <ul className="flex mr-80 font-semibold" >
          <Link to="/">
            <li >Home</li>
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
      <div className="mr-28 mt-10">Status : {isOnline ? "✅" : "🔴"} </div>
      <div className="float-right mt-10">
        {isLoggedIn ? (
          <button className="bg-purple-50 float-right"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Sign In
          </button>
        ) : (
          <button className="bg-purple-50 float-right"
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
