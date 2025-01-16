import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "iUpi Ahorro e Inversiones",
  description:
    "iUpi es una innovadora app financiera que ayuda a los usuarios a gestionar y hacer crecer su patrimonio. Con iUpi, puedes establecer metas personales como vacaciones, compra de bienes o proyectos a largo plazo, y recibir un portafolio de inversiones personalizado según tu perfil y las condiciones del mercado. La plataforma también aprende de tu comportamiento para ofrecerte recomendaciones de inversión cada vez más precisas y alineadas con tus objetivos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
