import React from "react";
import SiteTopComp from "./pages/siteTop";
import NavbarComp from "./pages/navbar";
import CaruselComp from "./pages/carusel";
import CategoriesComp from "./pages/categories";
import AddImage from "../assets/AddImage.png";
import Arrow from "../assets/longErrow.svg";
import TrendingComp from "./pages/trending";
import ChildrenComp from "./pages/Children";
import AppDownloadImage from "../assets/DownloadAdds.svg";
import ShoesComp from "./pages/shoes";
import FooterComp from "./pages/footer";

const HomeComp = () => {
  return (
    <>
      <SiteTopComp />
      <NavbarComp />
      <CaruselComp />
      <CategoriesComp />
      <div className="MYContainer">
        <div className="my-20">
          <img src={AddImage} alt="Add Image" className="w-full h-130 z-10" />
        </div>
        <div className="absolute top-10 left-10 flex flex-col justify-between h-110 w-110 bg-white z-20 rounded-l-3xl rounded-r-[25%] px-10 py-13">
          <h1 className="text-5xl font-medium leading-[60px]">
            GOODS <br /> FOR SPORTS <span className="text-[#F54F1F]">-20%</span>
          </h1>
          <button className="flex items-center justify-center gap-2 text-xl font-medium cursor-pointer w-fit">
            <img src={Arrow} alt="Arrow" />
            Premium shop
          </button>
        </div>
      </div>
      <TrendingComp />
      <ChildrenComp />
      <div className="MYContainer">
        <img
          src={AppDownloadImage}
          alt="App Download"
          className="w-full my-20 h-110 rounded-3xl"
        />
      </div>
      <ShoesComp />
      <FooterComp />
    </>
  );
};

export default HomeComp;
