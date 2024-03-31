import React from "react";
import {
  LogoIcon,
  BerandaIcon,
  TransaksiIcon,
  StokIcon,
  LaporanIcon,
  MemberIcon,
  AkunIcon,
} from "../../icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='bg-white h-screen'>
      <div className='px-auto py-8 mb-16'>
        <LogoIcon />
      </div>
      <div className='font-semibold text-[#ADADAD] text-sm'>
        <Link
          href='/'
          className='flex justify-start items-center gap-8 mx-12 my-8 hover:text-black'
        >
          <BerandaIcon />
          <p>Beranda</p>
        </Link>
        <Link
          href='/'
          className='flex justify-start items-center gap-8 mx-12 my-8'
        >
          <TransaksiIcon />
          <p>Transaksi</p>
        </Link>
        <Link
          href='/'
          className='flex justify-start items-center gap-8 mx-12 my-8'
        >
          <StokIcon />
          <p>Stok</p>
        </Link>
        <Link
          href='/'
          className='flex justify-start items-center gap-8 mx-12 my-8'
        >
          <LaporanIcon />
          <p>Laporan</p>
        </Link>
        <Link
          href='/'
          className='flex justify-start items-center gap-8 mx-12 my-8'
        >
          <MemberIcon />
          <p>Member</p>
        </Link>
        <Link
          href='/'
          className='flex justify-start items-center gap-8 mx-12 my-8'
        >
          <AkunIcon />
          <p>Akun</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
