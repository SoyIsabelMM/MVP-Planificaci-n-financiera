import React from 'react';
import Image from 'next/image';
import { items } from '../../constants/itemsComment';

export default function CommentBox() {
  return (
    <div className=" rounded-lg border-none bg-white shadow-md overflow-hidden">
      <div className="flex flex-wrap justify-center items-center gap-4 mx-auto max-w-full p-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-black w-[20%] h-[130px] p-5 rounded-lg flex flex-col items-center justify-center gap-2"
          >
            {item.icon && (
              <Image
                src={item.icon}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            )}
            <p className="text-white font-light text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
