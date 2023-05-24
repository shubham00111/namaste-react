import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const items = useSelector((store) => store.cart.items);
  const online = useOnline();
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between bg-pink-50 shadow-lg flex-wrap">
      <div className="logo-container ">
        <img className="h-28 p-2  " src={LOGO_URL} />
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
            <Link to={"/cart"}>
              Cart <strong>{items.length} items</strong>
            </Link>
          </li>
          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>

      <h2>
        {user.name} {user.email}
      </h2>
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
