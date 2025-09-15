import React from "react";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";

const SiteTopComp = () => {
  return (
    <div className="bg-black">
      <div className="MYContainer">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center gap-2">
            <NearMeOutlinedIcon sx={{ color: "white" }} />
            <h1 className="text-white">Shipping location -</h1>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <AccessTimeOutlinedIcon sx={{ color: "white" }} />
              <h1 className="text-white">How we are doing now?</h1>
            </div>
            <div className="flex items-center gap-2">
              <PublicOutlinedIcon sx={{ color: "white" }} />
              <h1 className="text-white">English</h1>
            </div>
            <div className="flex items-center gap-2">
              <PriceChangeOutlinedIcon sx={{ color: "white" }} />
              <h1 className="text-white">USD</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteTopComp;
