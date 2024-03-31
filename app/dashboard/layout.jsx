import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

const layout = ({ children }) => {
  return (
    <div className='flex justify-start items-start'>
      <div className='w-64'>
        <Sidebar />
      </div>
      <div className='w-full h-screen'>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
