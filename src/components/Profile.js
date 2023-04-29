import { useState, useEffect } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste react is an op course");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleOnClick = () => {
    setCount(count + 1);
  };
  console.log("render");
  return (  
    <div>
      <h1>{count}</h1>
      <button onClick={handleOnClick}>increment</button>
    </div>
  );
};

export default Profile;
