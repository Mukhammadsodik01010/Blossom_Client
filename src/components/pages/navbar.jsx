import React from "react";
import Basket from "../../assets/basket.svg"
import Heart from "../../assets/heart-icon.svg"
import Login from "../../assets/login-icon.svg"
import Search from "../../assets/Search.svg"
import { Link } from "react-router-dom";

const NavbarComp = () => {
    return (
      <div className="bg-gray-100">
        <div className="MYContainer">
          <div className="flex items-center justify-between h-20 border-b-1 border-b-gray-300">
            <div className="border-y-5 border-y-gray-500 h-6 w-20"></div>
            <h1 className="text-4xl font-medium italic">BLOSSOM</h1>
            <div className="flex items-center gap-9">
              <img src={Basket} alt="Basket" />
              <img src={Heart} alt="Heart" />
              <div className="border-r-2 border-r-gray-300 h-8"></div>
              <Link to={"sign-in"}>
                <div className="flex items-center gap-3 cursor-pointer hover:text-gray-400">
                  <img src={Login} alt="Login" />
                  <h2 className="text-xl font-bold ">Login</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-10">
              <p className="text-xl font-medium">Ideas</p>
              <p className="text-xl font-medium">New</p>
              <p className="text-xl font-medium">Clothing</p>
              <p className="text-xl font-medium">Shoes</p>
              <p className="text-xl font-medium">Accessories</p>
              <p className="text-xl font-medium">Brands</p>
              <p className="text-xl font-medium">Sports</p>
              <p className="text-xl font-medium">Premium</p>
              <p className="text-xl font-medium text-red-500">Sale</p>
            </div>
            <img src={Search} alt="" />
          </div>
        </div>
      </div>
    );
};

export default NavbarComp;
