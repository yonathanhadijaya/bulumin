import React from "react";
import {
  MenuIcon,
  SearchIcon,
  NotificationIcon,
  ProfilePicture,
} from "../../icons";

const Navbar = () => {
  return (
    <div className='flex py-8 justify-between items-center'>
      <MenuIcon />
      <div className='flex gap-4 mx-8'>
        <SearchIcon /> <NotificationIcon />
        <div className='flex gap-4'>
          <ProfilePicture /> <p className='my-auto text-black'>Liana Sari</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
