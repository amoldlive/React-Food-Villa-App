import { appLogo } from "./Constant";

const Header = () => (
  <div className="header">
    <a href="/">
      <img className="logo-img" alt="App Logo" src={appLogo}></img>
    </a>
    <div className="navbar">
      <ul>
        <li>Login</li>
        <li>Home</li>
        <li>Contact</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
