import { useState } from "react";
import { appLogo } from "./Constant";

const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <a href="/">
        <img className="logo-img" alt="App Logo" src={appLogo}></img>
      </a>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button  onClick={()=>{setIsLoggedIn(false)}}>Sign In</button>
        ) : (
          <button onClick={()=>{setIsLoggedIn(true)}}>Sign out</button>
        )}
      </div>
    </div>
  );
};

export default Header;
