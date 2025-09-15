import React from "react";
import Girl from "../../assets/Child_Girl.svg";
import Boy from "../../assets/Child_Boy.svg";

const ChildrenComp = () => {
  return (
    <div className="MYContainer">
      <div className="my-30 flex items-center justify-between gap-5">
        <div className="w-fit relative">
          <img src={Girl} alt="Girl image" className="h-240 w-200" />
          <h1 className="text-5xl text-white font-bold absolute top-200 left-15">
            For sweet girls
          </h1>
          <button className="text-xl font-light cursor-pointer bg-white px-5 py-3 rounded-3xl absolute top-220 left-15">
            Shop now
          </button>
        </div>
        <div className="w-fit relative">
          <img src={Boy} alt="Boy image" className="h-240 w-200 rounded-3xl" />
          <h1 className="text-5xl text-white font-bold absolute top-200 left-15">
            For cheerful guys
          </h1>
          <button className="text-xl font-light cursor-pointer bg-white px-5 py-3 rounded-3xl absolute top-220 left-15">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildrenComp;
