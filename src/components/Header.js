import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const online = useOnline();

  return (
    <div className="flex items-center justify-between bg-pink-50 shadow-lg flex-wrap">
      <div className="logo-container ">
        <img className="h-28 p-2 sm:h-full sm:w-full" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-4">
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
          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>
      <h2>{online ? "🟢" : "🔴"}</h2>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
