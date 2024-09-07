import React from "react";
import back from "../../asset/Ellipse 1.png";
import { Button } from '@mui/material';

function Main() {
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="bg-[#3b3b3b]  w-[560px]">
          <div id="1" className="bg-transparent justify-between flex h-full w-full flex-col">
            <img src={back} alt="back" className="h-screen bg-cover z-0 bg-center fixed" />
            <h1 className="bg-transparent text-wrap leading-[50px] p-5 mt-[70px] z-10 font-bold text-[#AAAAAA] text-center text-4xl mt-10 w-full">
              Connect Your Wallet to Get Started
            </h1>
            <div className="w-full flex justify-center mb-10">

            <Button className="w-4/5 h-16 "  variant="contained">connect your wallet</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
