import style from '@/styles/content.module.css';
import { CustomForm } from '../CustomForm/CustomForm';

export const SigninForm = () => {
  return (
    <div className={style.content}>
      <div className={style.select}>
        <div className={style.activated}>
          <p className={style.paragraphActivated}>Soy cliente</p>
        </div>

        <div className={style.disabled}>
          <p className={style.paragraphDisabled}> No soy cliente</p>
        </div>
      </div>

      <h2 className="text-4xl font-normal text-black ml-8 mb-3">Bienvenido</h2>

      <h4 className="text-xl font-normal text-black ml-8">
        Completa tus datos para ingresar
      </h4>
      <CustomForm />
      <div className={style.contentOption}>
        <p className="font-medium text-base text-grayCustom mb-2">
          Si no tenés u olvidaste tu clave y/o usuario
        </p>
        <p className="font-medium text-base text-black text-center mb-6">
          Crear o recuperar clave y/o usuario
        </p>
      </div>
      <p className="font-medium text-base text-center text-wrap mb-8 text-grayCustom">
        ¿Aún no sos cliente?{' '}
        <span className="text-black cursor-pointer">Crear usuario</span>
      </p>
    </div>
  );
};
