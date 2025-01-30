import React from 'react';
import { cards } from '@/constants/renderCards';
import Marquee from '../Marquee/Marquee';
import CardComponent from '../CardComponent/CardComponent';

export default function FindingComponent() {
  if (!cards || cards.length === 0) {
    return <div>No hay tarjetas para mostrar</div>;
  }
  return (
    <div className="relative flex flex-col gap-4 py-4 overflow-hidden">
      <Marquee className="[--duration:40s]" pauseOnHover>
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </Marquee>

      <Marquee className="[--duration:40s]" pauseOnHover reverse>
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </Marquee>
    </div>
  );
}
