import React from 'react';
import Image from 'next/image';
import { items } from '../../constants/itemsComment';

export default function CommentBox() {
  return (
    <div className="rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.1),0px_10px_20px_rgba(0,0,0,0.1)] bg-white">
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 mx-auto max-w-full p-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-black w-[130px] h-[130px] p-5 rounded-lg flex flex-col items-center justify-center gap-2"
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
