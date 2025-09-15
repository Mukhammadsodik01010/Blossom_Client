import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import TrendingImg from "../../assets/TrendingImage.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TrendingComp = () => {
  return (
    <div className="MYContainer">
      <div className="my-10">
        <h1 className="text-4xl font-medium my-10">Trending products</h1>
        <div className="grid grid-cols-3 gap-10 place-items-center">
          <div className="w-fit">
            <img
              src={TrendingImg}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Athletic pants
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
            <h2 className="text-2xl font-black mt-1">$259.00</h2>
          </div>
          <div className="w-fit">
            <img
              src={TrendingImg}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Athletic pants
              </h1>
              <Checkbox
                {...label}
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={
                  <Favorite fontSize="large" sx={{ color: "#F54F1F" }} />
                }
              />
            </div>
            <h2 className="text-2xl font-black mt-1">$259.00</h2>
          </div>
          <div className="w-fit">
            <img
              src={TrendingImg}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Athletic pants
              </h1>
              <Checkbox
                {...label}
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={
                  <Favorite fontSize="large" sx={{ color: "#F54F1F" }} />
                }
              />
            </div>
            <h2 className="text-2xl font-black mt-1">$259.00</h2>
          </div>
          <div className="w-fit">
            <img
              src={TrendingImg}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Athletic pants
              </h1>
              <Checkbox
                {...label}
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={
                  <Favorite fontSize="large" sx={{ color: "#F54F1F" }} />
                }
              />
            </div>
            <h2 className="text-2xl font-black mt-1">$259.00</h2>
          </div>
          <div className="w-fit">
            <img
              src={TrendingImg}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Athletic pants
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
            <h2 className="text-2xl font-black mt-1">$259.00</h2>
          </div>
          <div className="w-fit">
            <img
              src={TrendingImg}
              alt="Trending Image"
              className="w-[420px] h-[520px] rounded-3xl"
            />
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-xl font-light text-[#202020] ">
                Athletic pants
              </h1>
              <Checkbox
                {...label}
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={
                  <Favorite fontSize="large" sx={{ color: "#F54F1F" }} />
                }
              />
            </div>
            <h2 className="text-2xl font-black mt-1">$259.00</h2>
          </div>
        </div>
        <button className="mt-10 text-xl font-light w-full bg-[#F7F7F7] py-4 rounded-3xl cursor-pointer">View all</button>
      </div>
    </div>
  );
};

export default TrendingComp;
