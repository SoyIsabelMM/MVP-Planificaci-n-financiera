'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const backgroundColors = [
  { path: '/', color: '#263238' },
  { path: '/dashboard', color: '#FBF3FF', start: true },
  { path: '/finding', color: '#FBF3FF' },
  { path: '/community', color: '#FBF3FF' },
];

export default function DynamicBackground({ children }) {
  const pathname = usePathname();

  const foundBackground = backgroundColors.find((bg) =>
    bg.path === pathname || (bg.start && pathname.startsWith(bg.path))
      ? true
      : false
  );

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: foundBackground ? foundBackground.color : 'white',
      }}
    >
      {children}
    </div>
  );
}
