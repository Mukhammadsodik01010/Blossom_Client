import React from "react";
import Girl from "../../assets/GirlsImage.svg";
import Boy from "../../assets/BoysImage.svg";
import Arrow from "../../assets/longErrow.svg";

const CategoriesComp = () => {
  return (
    <div className="MYContainer">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold font-[#202020]">Category</h1>
        <button className="text-lg font-medium">View all categories</button>
      </div>
      <div className="my-10 grid grid-cols-6 justify-items-center">
        <div className="bg-[#F7F7F7] w-[190px] h-[190px] rounded-[28px] p-4">
          <h1 className="text-[20px]">T-shirt</h1>
        </div>
        <div className="bg-[#F7F7F7] w-[190px] h-[190px] rounded-[28px] p-4">
          <h1 className="text-[20px]">Hoodie</h1>
        </div>
        <div className="bg-[#F7F7F7] w-[190px] h-[190px] rounded-[28px] p-4">
          <h1 className="text-[20px]">Girls clothes</h1>
        </div>
        <div className="bg-[#F7F7F7] w-[190px] h-[190px] rounded-[28px] p-4">
          <h1 className="text-[20px]">Outerwear</h1>
        </div>
        <div className="bg-[#F7F7F7] w-[190px] h-[190px] rounded-[28px] p-4">
          <h1 className="text-[20px]">Jeans</h1>
        </div>
        <div className="bg-[#F7F7F7] w-[190px] h-[190px] rounded-[28px] p-4">
          <h1 className="text-[20px]">Shoes</h1>
        </div>
      </div>
      <div className="my-10 flex items gap-5">
        <div className="w-full">
          <img src={Girl} alt="Girl" className="w-full h-193 rounded-3xl" />
          <h1 className="text-xl font-bold mt-3">Girls T-shirts — 924 items</h1>
          <button className="flex items-center justify-center gap-2 mt-2 text-lg font-medium cursor-pointer">
            <img src={Arrow} alt="Arow" />
            View all products
          </button>
        </div>
        <div className="w-full">
          <img src={Boy} alt="Boy" className="w-full h-193 rounded-3xl" />
          <h1 className="text-xl font-bold mt-3">Men’s shirts — 1254 items</h1>
          <button className="flex items-center justify-center gap-2 mt-2 text-lg font-medium cursor-pointer">
            <img src={Arrow} alt="Arow" />
            View all products
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComp;
