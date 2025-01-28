import '../styles/globals.css';
import { Roboto } from '@/styles/font';
import { cn } from '@/lib/utils';
import DynamicBackground from '@/components/DynamicBackground/DynamicBackground';

export const metadata = {
  title: 'iUpi Ahorro e Inversiones',
  applicationName: 'iUpi App',
  description: 'iUpi fintech app',
  category: 'webapp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={cn(Roboto.className, Roboto.variable)}>
        <DynamicBackground>{children}</DynamicBackground>
      </body>
    </html>
  );
}
