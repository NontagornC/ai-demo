import React from "react";
import Logo from "../assets/images/axons-Cf0_kAyW.svg";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="w-full min-h-dvh flex flex-col bg-zinc-200">
      <div className="bg-white h-20 shadow-sm w-full flex items-center px-4 fixed top-0 left-0 font-semibold text-zinc-700 gap-4">
        <img src={Logo} width={40} alt="logo" />
        <span>
          AXONS<br></br>Maintenance
        </span>
      </div>
      <div className="p-4 mt-20 overflow-y-auto overflow-x-hidden bg-zinc-100 grow">
        {children}
      </div>
    </div>
  );
};

export default Layout;
