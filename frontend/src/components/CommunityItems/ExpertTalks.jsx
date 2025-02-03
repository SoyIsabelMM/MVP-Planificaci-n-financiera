import Image from 'next/image';

export default function ExpertTalks({ talks }) {
  return (
    <div className="max-h-[800px] overflow-y-auto w-full">
      {talks.slice(0, 8).map((talk, index) => (
        <div
          key={index}
          className="mb-5 w-[486px] flex-shrink-0 rounded-lg border-none bg-white shadow-md overflow-hidden mx-2"
        >
          <div className="p-5 flex flex-wrap gap-1">
            <div className="flex items-center gap-2 bg-[#139E30] w-[101px] h-[30px] rounded-sm ">
              <p className="text-white font-medium text-xl mx-auto">
                {talk.time}
              </p>
            </div>
            <div className="ml-auto items-center flex ">
              <Image
                src="/image/bell-icon.png"
                width={20}
                height={20}
                objectFit="cover"
                alt="Notificación"
              />
            </div>
          </div>
          <div className=" w-[90%] max-w-[450px] rounded-md  mx-auto bg-[#F9ECDC]">
            <h2 className="p-10 w-full h-40 text-center text-2xl font-bold">
              {talk.title}
            </h2>
          </div>

          <div className=" p-4 mx-auto max-w-[450px]">
            <h3 className="font-bold text-lg mb-1">{talk.speaker}</h3>
            <p className="text-gray-600 text-lg mb-2">{talk.date}</p>

            <p className=" text-gray-600 text-lg mb-6">{talk.description}</p>
            <button className=" text-xl font-normal flex items-center justify-between w-full bg-[#FBF3FF] text-black py-2 px-6 rounded hover:bg-[#FBF3FF] transition duration-300">
              Ingresa a la sala
              <Image
                src="/image/arrow-icon.png"
                alt="Arrow"
                height={15}
                width={15}
                className="ml-2"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
