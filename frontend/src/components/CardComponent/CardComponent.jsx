import Image from 'next/image';
import React from 'react';

export const getTagColor = (tag) => {
  const lowercaseTag = tag.toLowerCase();
  switch (lowercaseTag) {
    case 'fintech':
    case 'inversiones':
      return 'bg-blue-100 text-blue-800';
    case 'innovación':
    case 'bolsa':
      return 'bg-green-100 text-green-800';
    case 'ahorro':
    case 'blockchain':
      return 'bg-yellow-100 text-yellow-800';
    case 'criptomonedas':
    case 'presupuesto':
      return 'bg-purple-100 text-purple-800';
    case 'jubilacion':
    case 'planificación':
      return 'bg-red-100 text-red-800';
    case 'impuestos':
    case 'pensiones':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

function CardComponent({ tags = [], image, title, description }) {
  return (
    <div className="w-64 flex-shrink-0 rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden mx-2">
      <div className="p-2 flex flex-wrap gap-1">
        {tags && tags.length > 0 ? (
          tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-semibold px-2 py-1 rounded-full ${getTagColor(
                tag
              )}`}
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="text-xs text-gray-500">Sin etiquetas</span>
        )}
      </div>
      <div className="w-[90%]  relative rounded-md overflow-hidden mx-auto">
        <Image
          src={image || '/image/placeholder-default.svg'}
          alt={title}
          objectFit="cover"
          height={150}
          width={256}
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title || 'Sin título'}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {description || 'Sin descripción'}
        </p>
        <button className="flex items-center justify-center w-full bg-[#FBF3FF] text-black py-2 px-4 rounded hover:bg-[#FBF3FF] transition duration-300">
          Ver más
          <Image
            src="/image/arrow-icon.png"
            alt="Arrow"
            height={10}
            width={10}
            className="ml-2"
          />
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
