import React from 'react';
import { cn } from '@/lib/utils';

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  ...props
}) {
  return (
    <div {...props} className={cn('group flex overflow-hidden')}>
      <div
        className={cn(
          'flex shrink-0 items-center justify-around gap-4 py-4',
          reverse ? 'animate-marqueeReverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 items-center justify-around gap-4 py-4',
          reverse ? 'animate-marqueeReverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
    </div>
  );
}
