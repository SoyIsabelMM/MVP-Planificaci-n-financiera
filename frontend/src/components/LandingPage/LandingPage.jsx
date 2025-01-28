import React from 'react';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import Image from 'next/image';
import { Button } from '@/components/ButtonCustom/ButtonCustom';
import Link from 'next/link';

function LandingPage() {
  return (
    <section className="pt-10 flex flex-col items-center">
      <HeaderComponent />

      <div className="flex flex-col items-center text-center px-4 sm:px-8 lg:px-20">
        <h1 className="mt-[5%] text-3xl sm:text-4xl lg:text-5xl font-medium">
          IUPI, la única Fintech que necesitas
        </h1>

        <p className="mt-10 mx-[15%] text-sm sm:text-base lg:text-lg leading-relaxed">
          Fomentar una cultura de ahorro e inversión responsable en Argentina,
          proporcionando herramientas accesibles y personalizadas para que las
          personas puedan crecer financieramente, cumplir sus objetivos y
          adaptarse a los desafíos de un entorno económico incierto.
        </p>

        <div className="bg-[#DDA7FF] mt-8 w-full max-w-2xl h-auto flex items-center justify-center rounded-lg">
          <Image
            src="/image/money-transfer.svg"
            alt="banner"
            width={500}
            height={500}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <Button className="w-[80%] sm:w-[50%] lg:w-[30%] h-[45px] font-light text-base sm:text-lg lg:text-xl mt-8 mb-10 bg-white text-black border border-black hover:bg-black hover:text-white transition ease-in-out duration-300">
        <Link href="/signup">Crea tu cuenta en IUPI</Link>
      </Button>
    </section>
  );
}

export default LandingPage;
