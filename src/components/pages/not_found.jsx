import React from "react";
import SiteTopComp from "./siteTop";
import NavbarComp from "./navbar";
import { Link } from "react-router-dom";

const NotFoundComp = () => {
  return (
    <div>
      <SiteTopComp />
      <NavbarComp />
      <div className="h-100 flex flex-col items-center justify-center gap-15 mt-30">
        <h1 className="text-4xl font-bold text-red-500">
          This page is not available
        </h1>
        <Link to={"/"}>
          <button className="bg-green-700 px-3 py-1 rounded-xl text-2xl font-bold text-white cursor-pointer hover:bg-green-500">
            Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundComp;
