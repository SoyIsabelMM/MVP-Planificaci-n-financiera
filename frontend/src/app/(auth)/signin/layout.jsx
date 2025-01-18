export const metadata = {
  title: 'iUpi - Signin',
  applicationName: 'iUpi App',
  description: 'fintech iUpi App',
  category: 'webapp',
};

export default function SigninLayout({ children }) {
  return (
    <section>
      <h1 className="sr-only">Iniciar sesion</h1>
      {children}
    </section>
  );
}
