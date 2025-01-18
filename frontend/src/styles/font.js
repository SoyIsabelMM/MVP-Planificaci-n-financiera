import { Roboto as RobotoFont } from 'next/font/google';

export const Roboto = RobotoFont({
  subsets: ['latin'],
  variable: '--font-roboto',
  style: ['normal'],
  weight: ['400', '500', '700'],
});
