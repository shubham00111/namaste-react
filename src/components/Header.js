import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
