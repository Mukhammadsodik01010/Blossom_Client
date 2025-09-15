import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Shoe from "../../assets/ShoeImage.svg"


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ShoesComp = () => {
    return (
      <div className="MYContainer">
        <div className="flex items-end justify-between my-10">
          <h1 className="text-4xl font-bold font-[#202020]">Trending shoes</h1>
          <button className="text-lg font-medium">View all products</button>
        </div>
        <div className="grid grid-cols-3 gap-10 place-items-center my-10">
          <div className="w-fit">
            <img
              src={Shoe}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Blazer Mid 77 PRM
              </h1>
              <Checkbox
                defaultChecked
                {...label}
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={
                  <Favorite fontSize="large" sx={{ color: "#F54F1F" }} />
                }
              />
            </div>
            <h2 className="text-2xl font-black mt-1">$209.00</h2>
          </div>
          <div className="w-fit">
            <img
              src={Shoe}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Nike Air Max 90
              </h1>
              <Checkbox
                {...label}
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={
                  <Favorite fontSize="large" sx={{ color: "#F54F1F" }} />
                }
              />
            </div>
            <h2 className="text-2xl font-black mt-1">$179.00</h2>
          </div>
          <div className="w-fit">
            <img
              src={Shoe}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                ThomasMunz Force
              </h1>
              <Checkbox
                {...label}
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={
                  <Favorite fontSize="large" sx={{ color: "#F54F1F" }} />
                }
              />
            </div>
            <h2 className="text-2xl font-black mt-1">$229.00</h2>
          </div>
        </div>
      </div>
    );
};

export default ShoesComp;
