import React from "react";
import MainImg from "../../assets/signupmain.svg";
import { grey } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignUpComp = () => {
  const navigate = useNavigate();
  const SignInBtn = () => {
    navigate("/sign-in");
  };
  const CreateBtn = () => {
    navigate("/sign-in")
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
              <h1 className="text-3xl font-light">Sign Up</h1>
              <h3 className="text-sm mt-3 font-light text-gray-400">
                Already have an account?
                <span
                  onClick={SignInBtn}
                  className="text-black underline cursor-pointer"
                >
                  Sign In
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-5">
              <TextField
                id="standard-basic"
                label="Name"
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
                label="Last Name"
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
              <TextField
                id="standard-basic"
                label="Confirm Password"
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
              <div className="flex items-center justify-start">
                <Checkbox
                  {...label}
                  sx={{
                    color: grey[900],
                    "&.Mui-checked": {
                      color: grey[800],
                    },
                  }}
                />
                <h4 className="text-sm font-light">
                  I agree to send an sms code.{" "}
                  <span className="underline">Privacy and Policy</span>
                </h4>
              </div>
            </div>
            <button
              onClick={CreateBtn}
              className="text-xl font-medium  text-white bg-[#F54F1F] py-2 rounded-4xl cursor-pointer"
            >
              Create accaunt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
