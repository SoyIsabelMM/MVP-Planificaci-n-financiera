"use client";

import { Button } from "../ButtonCustom/ButtonCustom";
import { CustomInput } from "../CustonInput/CustomInput";
import Link from "next/link";
import { useCustomForm } from "./form.hook";

export const CustomForm = ({ fields, nameBtn }) => {
  const { handleSubmit, handleChange, formData, errors } =
    useCustomForm(fields);

  return (
    <form
      onSubmit={handleSubmit}
      className="px-1 mt-[12%] flex flex-col  mb-[12%] w-full max-w-md mx-auto  "
      noValidate
    >
      {fields.map((field) => (
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
        <Link href="/dashboard">{nameBtn}</Link>
      </Button>
    </form>
  );
};
