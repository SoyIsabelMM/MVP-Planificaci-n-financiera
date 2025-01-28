'use client';
import { usePathname } from 'next/navigation';

export default function DynamicBackground({ children }) {
  const pathname = usePathname();

  const backgroundClass =
    pathname === '/' ? 'bg-[#263238] text-white' : 'bg-white text-black';

  return <div className={`${backgroundClass} min-h-screen`}>{children}</div>;
}
