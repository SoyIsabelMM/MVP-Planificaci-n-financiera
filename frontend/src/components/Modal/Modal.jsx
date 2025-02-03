'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ButtonCustom/ButtonCustom';

export default function Modal({ isOpen, onClose, modal }) {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    localStorage.setItem('modalClosed', false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md ">
        <div className="flex justify-between items-center">
          <h2 className="w-full text-2xl font-medium  text-center">
            {modal.title}
          </h2>

          <button
            onClick={handleClose}
            className=" text-gray-500 hover:text-gray-700"
          >
            <Image
              src="/image/close-btn.png"
              alt="Close"
              width={30}
              height={30}
            />
          </button>
        </div>

        <Image src={modal.image} alt="Inversor" width={500} height={500} />

        <p className="text-center text-gray-500 mt-4 text-base font-normal">
          {modal.description}
        </p>
        <p className="text-center text-gray-500 mt-4 text-base font-normal">
          {modal.description2}
        </p>

        <div className="flex flex-col justify-center mt-5">
          <Button className=" w-[288] mx-auto"> Realizar</Button>
          <p className="text-black text-sm mt-1 text-center">{modal.option} </p>
        </div>
      </div>
    </div>
  );
}
