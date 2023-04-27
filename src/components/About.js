import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Hi everyone... this is an about page</p>
      <Outlet />
      <Profile />
    </div>
  );
};

export default About;
