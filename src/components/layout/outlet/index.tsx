import React from "react";
import { Outlet as OutletComponent } from "react-router-dom";
import { Header } from "../header";

export const Outlet = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-start items-center p-4 md:max-w-[1440px] md:mx-auto">
      <Header />
      <div className="flex-1 p-0 md:p-6 pl-0 md:pl-0 w-full h-full mt-4 ">
        <OutletComponent />
      </div>
    </div>
  );
};
