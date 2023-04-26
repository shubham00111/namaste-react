import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Hi everyone... this is an about page</p>
      <Outlet />
      <ProfileClass />
    </div>
  );
};

export default About;
