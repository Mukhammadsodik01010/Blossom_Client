import React from "react";
import MainImg from "../../assets/SignInMain.svg";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const BackBtn = () => {
    navigate("/sign-in");
  };
  const SendCodeBtn = () => {
    navigate("/confirm-password");
  };

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
              <h1 className="text-3xl font-light">Reset Password</h1>
            </div>
            <div className="flex flex-col gap-5">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
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
              <div className="flex items-center justify-end"></div>
            </div>
            <div className="flex items-center w-full justify-between">
              <button
                onClick={BackBtn}
                className="text-xl font-medium border w-[35%]  text-black  py-2 rounded-4xl cursor-pointer"
              >
                Back
              </button>

              <button
                onClick={SendCodeBtn}
                className="text-xl font-medium w-[60%] border border-[#F54F1F]  text-white bg-[#F54F1F] py-2 rounded-4xl cursor-pointer"
              >
                Send Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
