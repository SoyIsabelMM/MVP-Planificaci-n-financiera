import { useState } from "react";

export function useCustomForm(fields) {
  const [formData, setFormData] = useState(
    fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]:
          field.type === "checkbox" ? field.value : field.defaultValue || "",
      }),
      {}
    )
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    fields.forEach((field) => {
      if (
        field.name === "email" &&
        !/\S+@\S+\.\S+/.test(formData[field.name])
      ) {
        newErrors[field.name] = "Email inválido";
      } else if (field.name === "password" && formData[field.name].length < 6) {
        newErrors[field.name] =
          "La contraseña debe tener al menos 6 caracteres";
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
      console.log("Formulario enviado:", formData);
    }
  };

  return { handleSubmit, handleChange, formData, errors };
}
