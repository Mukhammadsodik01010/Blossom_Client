import React from "react";
import MainImg from "../../assets/SignInMain.svg";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const SignInComp = () => {
  const navigate = useNavigate();
  const SignUpBtn = () => {
    navigate("/sign-up");
  };
    const ForgetPasswordBtn = () => {
        navigate("/reset-password")
    }
  
  const LoginBtn = () => {
    navigate("/")
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
              <h1 className="text-3xl font-light">Sign In</h1>
              <h3 className="text-sm mt-3 font-light text-gray-400">
                Do not have accaunt yet?{" "}
                <span
                  onClick={SignUpBtn}
                  className="text-black underline cursor-pointer"
                >
                  Sign Up
                </span>
              </h3>
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
              <TextField
                id="standard-basic"
                label="Password"
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
              <div className="flex items-center justify-end">
                <h3
                  onClick={ForgetPasswordBtn}
                  className="text-sm font-light underline cursor-pointer"
                >
                  Forget password?
                </h3>
              </div>
            </div>
            <button
              onClick={LoginBtn}
              className="text-xl font-medium  text-white bg-[#F54F1F] py-2 rounded-4xl cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComp;
