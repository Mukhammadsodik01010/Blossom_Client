import React from "react";
import Basket from "../../assets/basket.svg";
import Heart from "../../assets/heart-icon.svg";
import Login from "../../assets/login-icon.svg";
import Search from "../../assets/Search.svg";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SiteTopComp from "./siteTop";
import Zara from "../../assets/Zara.svg";
import Adidas from "../../assets/Adidas.svg";
import Lacoste from "../../assets/Lacoste.svg";
import Nike from "../../assets/Nike.svg";
import Supreme from "../../assets/Supreme.svg";
import Geox from "../../assets/Geox.svg";
import Oliver from "../../assets/Oliver.svg";

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  bgcolor: "white",
  outline: "none",
};

const NavbarComp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="bg-gray-100">
        <div className="MYContainer">
          <div className="flex items-center justify-between h-30 border-b-1 border-b-[]#202020">
            <div
              onClick={handleOpen}
              className="w-[90px] flex flex-col gap-4 justify-center cursor-pointer"
            >
              <div className="h-1 bg-[#202020] rounded-2xl w-full"></div>
              <div className="h-1 bg-[#202020] rounded-2xl w-full"></div>
            </div>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SiteTopComp />
          <div className="MYContainer">
            <div className="h-30 flex items-center gap-5 border-b border-b-[#202020]">
              <div
                onClick={handleClose}
                className="w-[97px] flex flex-col gap-4 justify-center cursor-pointer"
              >
                <div className="h-1 bg-[#202020] rounded-2xl w-full"></div>
                <div className="h-1 bg-[#202020] rounded-2xl w-full"></div>
              </div>
              <div className="w-full flex items-center justify-center gap-10">
                <button className="h-[50px] w-[250px] rounded-[95px] border border-[#202020] cursor-pointer">
                  Women
                </button>
                <button className="h-[50px] w-[250px] rounded-[95px] border border-[#202020] cursor-pointer bg-[#202020] text-white">
                  Men
                </button>
                <button className="h-[50px] w-[250px] rounded-[95px] border border-[#202020] cursor-pointer">
                  Kids
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div className="flex w-fit flex-col gap-10">
                <h1 className="text-xl font-bold">Shoes</h1>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-light">Boots — 686</p>
                  <p className="text-sm font-light">Sneakers — 327</p>
                  <p className="text-sm font-light">Shoes — 198</p>
                  <p className="text-sm font-light">Men's boots — 96</p>
                  <p className="text-sm font-light">Men's indoor shoes — 94</p>
                  <p className="text-sm font-light">Men's slippers — 86</p>
                  <p className="text-sm font-light">Men's sports shoes — 83</p>
                  <p className="text-sm font-light">Men's moccasins — 53</p>
                  <p className="text-sm font-light">Rubber shoes for men</p>
                  <p className="text-sm font-light">Men's sandals — 26</p>
                  <p className="text-sm font-light">Men's slip-ons — 23</p>
                  <p className="text-sm font-light">Men's uggs — 5</p>
                  <p className="text-sm font-light">Men's boots — 2</p>
                </div>
              </div>
              <div className="flex w-fit flex-col gap-10">
                <h1 className="text-xl font-bold">Clothing</h1>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-light">Pants — 5759</p>
                  <p className="text-sm font-light">Outerwear — 6605</p>
                  <p className="text-sm font-light">Jumpers, sweaters and</p>
                  <p className="text-sm font-light">cardigans — 4674</p>
                  <p className="text-sm font-light">Jeans — 2791</p>
                  <p className="text-sm font-light">Homewear — 982</p>
                  <p className="text-sm font-light">Pants and shorts — 187</p>
                  <p className="text-sm font-light">Kits — 67</p>
                  <p className="text-sm font-light">Pajamas — 289</p>
                  <p className="text-sm font-light">T-shirts — 222</p>
                  <p className="text-sm font-light">Bathrobes 217</p>
                  <p className="text-sm font-light">Overalls — 31</p>
                  <p className="text-sm font-light">Mikey — 232</p>
                  <p className="text-sm font-light">Underwear — 2266</p>
                  <p className="text-sm font-light">Socks and gaiters — 3061</p>
                  <p className="text-sm font-light">Jackets and suits — 2338</p>
                  <p className="text-sm font-light">Shorts — 2038</p>
                </div>
              </div>
              <div className="flex w-fit flex-col gap-10">
                <h1 className="text-xl font-bold">Sport</h1>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-light">All sporting goods — 676</p>
                  <p className="text-sm font-light">Run — 3</p>
                  <p className="text-sm font-light">Alpine skiing and</p>
                  <p className="text-sm font-light">snowboarding — 3</p>
                  <p className="text-sm font-light">Swimming — 11</p>
                  <p className="text-sm font-light">Tennis — 3</p>
                  <p className="text-sm font-light">
                    Trekking and tourism — 34
                  </p>
                  <p className="text-sm font-light">Fitness — 4</p>
                </div>
              </div>
              <div className="flex w-fit flex-col gap-10">
                <h1 className="text-xl font-bold">Accessories</h1>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-light">Hats — 148</p>
                  <p className="text-sm font-light">Protective masks — 1</p>
                  <p className="text-sm font-light">
                    Wallets and business card
                  </p>
                  <p className="text-sm font-light">holders — 13</p>
                  <p className="text-sm font-light">Points — 37</p>
                  <p className="text-sm font-light">Gloves and mittens — 4</p>
                  <p className="text-sm font-light">Belts and suspenders — 6</p>
                  <p className="text-sm font-light">Backpacks — 47</p>
                  <p className="text-sm font-light">Bags — 41</p>
                  <p className="text-sm font-light">
                    Suitcases and travel bags — 1
                  </p>
                  <p className="text-sm font-light">
                    Cases for phone and laptop — 1
                  </p>
                  <p className="text-sm font-light">Scarves and shawls — 6</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-25">
              <img src={Zara} alt="Zara" />
              <img src={Adidas} alt="Adidas" />
              <img src={Lacoste} alt="Lacoste" />
              <img src={Nike} alt="Nike" />
              <img src={Supreme} alt="Supreme" />
              <img src={Geox} alt="Geox" />
              <img src={Oliver} alt="Oliver" />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default NavbarComp;
