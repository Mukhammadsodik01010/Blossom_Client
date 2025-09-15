import React, { useState } from "react";
import MainImg from "../../assets/SignInMain.svg";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";

const ConfirmPassword = () => {
    const navigate = useNavigate()
  const [otp, setOtp] = useState("");

    const BackBtn = () => {
        navigate("/reset-password")
    }
  const ConfirmBtn = () => {
    navigate("/new-password")
  }
  return (
    <div className="flex flex-col h-[100vh] justify-center bg-gray-200">
      <div className="MYContainer">
        <div className="flex justify-between">
          <div className="relative">
            <h1 className="text-4xl font-bold italic text-white z-10 absolute mt-10 ml-10">
              BLOSSOM
            </h1>
            <img src={MainImg} alt="Main Img" className="h-210 w-240 z-0" />
          </div>
          <div className="flex flex-col justify-between p-10 w-115 h-210 bg-white rounded-2xl">
            <div>
              <h1 className="text-3xl font-light">Confirm Password</h1>
              <h3 className="text-sm mt-3 font-light text-gray-400">
                OTP code
              </h3>
              <h3 className="text-sm font-light text-gray-400">
                was send to{" "}
                <span className="text-black underline cursor-pointer">
                  email
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span style={{ width: "10px" }}></span>}
                  renderInput={(props) => (
                    <input
                      {...props}
                      style={{
                        width: "80px",
                        height: "50px",
                        margin: "0 5px",
                        fontSize: "20px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        textAlign: "center",
                        outline: "none",
                      }}
                    />
                  )}
                />
              </div>

              <div className="flex items-center justify-end">
                <h3 className="text-sm font-light underline">Time</h3>
              </div>
            </div>
            <div className="flex items-center w-full justify-between">
              <button
                onClick={BackBtn}
                className="text-xl font-medium border w-[35%]  text-black  py-2 rounded-4xl cursor-pointer"
              >
                Back
              </button>

              <button
                onClick={ConfirmBtn}
                className="text-xl font-medium w-[60%] border border-[#F54F1F]  text-white bg-[#F54F1F] py-2 rounded-4xl cursor-pointer"
              >
                Confirm Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
