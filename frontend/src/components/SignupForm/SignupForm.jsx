import style from '@/styles/content.module.css';
import { CustomForm } from '../CustomForm/CustomForm';
import { registerFields } from '@/constants/authFields';
import Link from 'next/link';

export const SignupForm = () => {
  return (
    <div className={style.content}>
      <h2 className="text-4xl font-normal text-black ml-8 mb-3">Registro</h2>

      <h4 className="text-xl font-normal text-black ml-8">
        Completa tus datos para crear una cuenta
      </h4>
      <CustomForm fields={registerFields} nameBtn="Registrate" />

      <p className="font-medium text-base text-center text-wrap mb-8 text-grayCustom">
        ¿Ya sos cliente?{' '}
        <Link href="/signin">
          <span className="text-black cursor-pointer">Inicia sesión</span>
        </Link>
      </p>
    </div>
  );
};
