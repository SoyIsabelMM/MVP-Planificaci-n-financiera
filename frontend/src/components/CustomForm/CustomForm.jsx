'use client';
import { useState } from 'react';
import { Button } from '../ButtonCustom/ButtonCustom';
import { CustomInput } from '../CustonInput/CustomInput';
import { loginFields } from '@/constants/authFields';

export const CustomForm = () => {
  const [formData, setFormData] = useState(
    loginFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    loginFields.forEach((field) => {
      if (
        field.name === 'email' &&
        !/\S+@\S+\.\S+/.test(formData[field.name])
      ) {
        newErrors[field.name] = 'Email inválido';
      } else if (field.name === 'password' && formData[field.name].length < 6) {
        newErrors[field.name] =
          'La contraseña debe tener al menos 6 caracteres';
      } else if (formData[field.name].length === 0) {
        newErrors[field.name] = `${field.label} es requerido`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-1 mt-[12%] flex flex-col  mb-[12%] w-full max-w-md mx-auto  "
      noValidate
    >
      {loginFields.map((field) => (
        <CustomInput
          key={field.id}
          label={field.label}
          id={field.id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          icon={field.icon}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
          required
          tabIndex={field.tabIndex}
          autoComplete={field.autoComplete}
        />
      ))}

      <Button
        type="submit"
        className="w-[200px] h-[45px] mt-[10%] mx-auto text-[20px] font-medium"
      >
        Ingresar
      </Button>
    </form>
  );
};
