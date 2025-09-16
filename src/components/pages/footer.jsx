import React from "react";
import TextField from "@mui/material/TextField";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Telegram from "../../assets/Telegram.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import Visa from "../../assets/Visa.svg";
import Master from "../../assets/MasterCard.svg";
import PayPal from "../../assets/Paypal.svg";
import GPay from "../../assets/GooglePay.svg";

const FooterComp = () => {
  return (
    <div className="MYContainer">
      <div className="mt-30">
        <div className="h-[130px] w-full bg-[#F7F7F7] rounded-3xl my-20 flex items-center gap-5 justify-between p-10">
          <div className="w-full">
            <h1 className="text-4xl font-bold">
              Get a discount for the first order
            </h1>
            <h2 className="text-sm font-light mt-2">
              Subscribe to our news and special offers
            </h2>
          </div>
          <div className="w-full flex items-center gap-10">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className="w-full"
              sx={{
                "& .MuiInput-underline:after": {
                  borderBottomColor: "black",
                },
                "& .MuiInputBase-input": {
                  color: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "grey",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "grey",
                },
              }}
            />
            <button className="text-lg font-medium text-white cursor-pointer bg-[#202020] rounded-4xl px-5 py-3 w-45">
              Shop now
            </button>
          </div>
        </div>
        <hr className="text-gray-300 mb-20" />
        <div className="flex justify-between pb-20">
          <div className="w-fit flex flex-col gap-5">
            <h1 className="text-2xl font-medium">Customer Care</h1>
            <p className="text-lg font-light">
              Address: 4140 Parker Rd. Allentown, <br /> New York 31134
            </p>
            <p className="text-lg font-light">
              Call now: +31 (0) 20 775 99 77{" "}
            </p>
            <p className="text-lg font-light">Email: blossomshop@example.com</p>
          </div>
          <div className="w-fit flex flex-col gap-5">
            <h1 className="text-2xl font-medium">Our Company</h1>
            <p className="text-lg font-light cursor-pointer">About us</p>
            <p className="text-lg font-light cursor-pointer">Find a Store</p>
            <p className="text-lg font-light cursor-pointer">Careers</p>
          </div>
          <div className="w-fit flex flex-col gap-5">
            <h1 className="text-2xl font-medium">Legal Area</h1>
            <p className="text-lg font-light cursor-pointer">Cookie Policy</p>
            <p className="text-lg font-light cursor-pointer">Terms of Use </p>
            <p className="text-lg font-light cursor-pointer">
              Conditions of Sale
            </p>
            <p className="text-lg font-light cursor-pointer">Privacy</p>
          </div>
          <div className="w-fit flex flex-col gap-5">
            <h1 className="text-2xl font-medium">Contact us</h1>
            <div className="flex items-center justify-start gap-5 ">
              <img src={Instagram} alt="Instagram" />
              <img src={Telegram} alt="Telegram" />
              <img src={Facebook} alt="Facebook" />
              <img src={LinkedIn} alt="LinkedIn" />
            </div>
            <h1 className="text-2xl font-medium mt-10">Payment methods</h1>
            <div className="flex items-center justify-between gap-5">
              <img
                src={Visa}
                alt="Visa"
                className="border border-[#9EA3A8] px-2 py-1 rounded"
              />
              <img
                src={Master}
                alt="MasterCard"
                className="border border-[#9EA3A8] px-2 py-1 rounded"
              />
              <img
                src={PayPal}
                alt="PayPal"
                className="border border-[#9EA3A8] px-2 py-1 rounded"
              />
              <img
                src={GPay}
                alt="Google Pay"
                className="border border-[#9EA3A8] px-2 py-1 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
