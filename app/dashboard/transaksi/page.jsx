import React from "react";
import { PlusIcon, PrintIcon } from "@/app/ui/icons";

const Transaksi = () => {
  return (
    <div className='h-3/4'>
      <h1 className='mx-8 font-bold text-2xl text-black'>Transaksi</h1>
      <div className='h-full mx-8 my-8 bg-white text-[#ADADAD] rounded-xl'>
        <div className='p-8 justify-between items-center flex'>
          <div className='flex gap-4'>
            <button className='bg-[#7b8fc3] flex rounded-lg p-2 text-sm text-white gap-2'>
              <PlusIcon /> Tambah
            </button>
            <button className='bg-[#c3b37b] flex rounded-lg p-2 text-sm text-white gap-2'>
              <PrintIcon /> Print
            </button>
          </div>
          <div>filter</div>
        </div>

        {/* Table Section */}
        <div class='relative overflow-x-auto mx-8 rounded-xl'>
          <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead class='text-xs text-gray-700 uppercase bg-gray-50 '>
              <tr>
                <th scope='col' class='px-6 py-3'>
                  Name
                </th>
                <th scope='col' class='px-6 py-3'>
                  Barang
                </th>
                <th scope='col' class='px-6 py-3'>
                  Jenis Barang
                </th>
                <th scope='col' class='px-6 py-3'>
                  Terjual
                </th>
                <th scope='col' class='px-6 py-3'>
                  Pembayaran
                </th>
                <th scope='col' class='px-6 py-3'>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class='bg-white border-b'>
                <th
                  scope='row'
                  class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                >
                  Nathan
                </th>
                <td class='px-6 py-4'>Aqua 600ML</td>
                <td class='px-6 py-4'>Minuman</td>
                <td class='px-6 py-4'>2</td>
                <td class='px-6 py-4'>Tunai</td>
                <td class='px-6 py-4'></td>
              </tr>
              <tr class='bg-white border-b'>
                <th
                  scope='row'
                  class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                >
                  Vania
                </th>
                <td class='px-6 py-4'>Aqua 600ML</td>
                <td class='px-6 py-4'>Minuman</td>
                <td class='px-6 py-4'>2</td>
                <td class='px-6 py-4'>Tunai</td>
                <td class='px-6 py-4'></td>
              </tr>
              <tr class='bg-white border-b'>
                <th
                  scope='row'
                  class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                >
                  Tio
                </th>
                <td class='px-6 py-4'>Aqua 600ML</td>
                <td class='px-6 py-4'>Minuman</td>
                <td class='px-6 py-4'>2</td>
                <td class='px-6 py-4'>Tunai</td>
                <td class='px-6 py-4'></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
