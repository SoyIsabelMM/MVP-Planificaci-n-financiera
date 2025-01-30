import React from 'react';
import Image from 'next/image';

export default function CardComment({ comments }) {
  return (
    <div className="max-h-[500px] overflow-y-auto">
      {comments.slice(0, 5).map((comment, index) => (
        <div
          key={index}
          className="mb-5 w-[500px] flex-shrink-0 rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden mx-2"
        >
          <div className="p-8 flex flex-wrap gap-1">
            <div className="w-[51px] h-[51px] rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                src={comment.avatar}
                width={51}
                height={50}
                alt={`Usuario ${comment.name}`}
              />
            </div>
            <div className="ml-2 flex flex-col">
              <h4 className="font-medium text-l">{comment.name}</h4>
              <p className="text-gray-500 text-sm">{comment.location}</p>
            </div>
            <div className="ml-auto items-center flex mr-[50px]">
              <Image
                src="/image/bell-icon.png"
                width={20}
                height={20}
                objectFit="cover"
                alt="Notificación"
              />
            </div>
          </div>
          <div className="w-[80%] relative rounded-md overflow-hidden mx-auto">
            <p className="text-gray-600 text-l mb-4 w-[70%]">
              {comment.message}
            </p>
          </div>
          <div className="m-5 flex items-center border border-none rounded-3xl bg-[#F9ECDC]">
            <Image
              src="/image/add-file-icon.png"
              width={20}
              height={20}
              alt="Subir archivo"
              className="ml-5"
            />
            <input
              type="text"
              placeholder="Comenta algo..."
              className="w-full p-3 border border-none rounded-3xl bg-[#F9ECDC] outline-none"
            />
            <Image
              src="/image/voice-message-icon.png"
              width={15}
              height={15}
              alt="Mensaje de voz"
              className="mr-5"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
