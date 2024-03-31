import React from "react";
import Image from "next/image";
import {LogoIcon, BerandaIcon } from '@/app/ui/icons.jsx'

const Sidebar = () => {
  return (
    <div className="bg-white text-[#ADADAD]">
      sidebar
      <div className="w-full mt-8">
        <LogoIcon/>
      </div>
      <div className="mt-16 w-full h-full gap-8">
        <ul className="space-y-2 font-semibold">
          <li className="h-12">
            
            <a href="" className="ml-8"><BerandaIcon />Beranda</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


