import React from 'react';
import Banner from '../../../public/image/banner';

function LandingPage({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex flex-1 md:flex-[2] w-full md:w-[400px] md:min-w-[400px] ">
        {children}
      </div>

      <div className="hidden md:block w-[1px] bg-divider"></div>

      <div className="flex flex-col flex-1 md:flex-[3] items-center px-4 md:px-6 py-6 gap-10">
        <div className="flex flex-col items-center justify-evenly flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-black">IUPI</h1>
          <p className="text-base md:text-xl text-justify px-4 md:px-6 w-[580px]">
            En iUpi, te ayudamos a ahorrar e invertir de manera inteligente y
            adaptada a tus metas personales. Con portafolios personalizados y
            recomendaciones diseñadas para ti, te acompañamos en cada paso hacia
            tus objetivos financieros. ¡Empieza hoy y transforma tu futuro!
          </p>
        </div>

        <div className="w-full max-w-[300px] md:max-w-[530px]">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
