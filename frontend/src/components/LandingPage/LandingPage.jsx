'use client';
import React from 'react';
import Banner from '../../../public/image/banner';
import style from '@/styles/content.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LandingPage({ children }) {
  const pathname = usePathname();

  const isSignin = pathname === '/signin';
  const isSignup = pathname === '/signup';

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen">
      <div className="flex flex-col flex-1 md:flex-[2] w-full md:w-[400px] md:min-w-[400px] ">
        <div className={style.select}>
          <div className={isSignin ? style.activated : style.disabled}>
            <Link href="/signin">
              <p
                className={
                  isSignin ? style.paragraphActivated : style.paragraphDisabled
                }
              >
                Soy cliente
              </p>
            </Link>
          </div>

          <div className={isSignup ? style.activated : style.disabled}>
            <Link href="/signup">
              <p
                className={
                  isSignup ? style.paragraphActivated : style.paragraphDisabled
                }
              >
                No soy cliente
              </p>
            </Link>
          </div>
        </div>
        {children}
      </div>

      <div className="hidden md:block w-[1px] bg-divider"></div>

      <div className="flex flex-col flex-1 md:flex-[3] items-center px-4 md:px-6 py-6 gap-10">
        <div className="flex flex-col items-center justify-evenly flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-black">IUPI</h1>
          <p className="text-base md:text-xl text-justify px-4 ">
            En iUpi, te ayudamos a ahorrar e invertir de manera inteligente y
            adaptada a tus metas personales. Con portafolios personalizados y
            recomendaciones diseñadas para ti, te acompañamos en cada paso hacia
            tus objetivos financieros. ¡Empieza hoy y transforma tu futuro!
          </p>
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
