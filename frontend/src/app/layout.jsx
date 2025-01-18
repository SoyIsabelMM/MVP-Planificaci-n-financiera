import '../styles/globals.css';
import { Roboto } from '@/styles/font';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'iUpi Ahorro e Inversiones',
  applicationName: 'iUpi App',
  description: 'iUpi fintech app',
  category: 'webapp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={cn(Roboto.className, Roboto.variable)}>{children}</body>
    </html>
  );
}
