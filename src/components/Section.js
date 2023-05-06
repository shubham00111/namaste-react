import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-2 p-2 border border-black">
      <h1 className="font-bold  text-2xl py-3 ">{title}</h1>
      {!isVisible ? (
        <button onClick={() => setIsVisible(true)} className=" underline py-2">
          Show
        </button>
      ) : (
        <button onClick={() => setIsVisible(false)} className=" underline py-2">
          Hide
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default Section;
