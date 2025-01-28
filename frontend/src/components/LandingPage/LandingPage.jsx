import React from 'react';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';

function LandingPage() {
  return (
    <section className=" pt-[4%]">
      <HeaderComponent />
      <div className="flex flex-col items-center">
        <h1 className="mt-[5%] text-4xl font-medium">
          {' '}
          IUPI La única Fintech que necesitas
        </h1>
      </div>
    </section>
  );
}

export default LandingPage;
