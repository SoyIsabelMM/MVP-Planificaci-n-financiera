"use client";

import React, { useState } from "react";
import HorizontalDivider from "@/components/HorizontalDivider/HorizontalDivider";
import { CreditCard, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ButtonCustom/ButtonCustom";
import { useSearchParams } from "next/navigation";
import OTPInput from "react-otp-input";
import { PrimaryButton } from "@/components/Button/Button";
import { CustomInput } from "@/components/CustonInput/CustomInput";
import { useCustomForm } from "@/components/CustomForm/form.hook";
import {
  transferenceToExistingAccountFields,
  transferenceToNewAccountFields,
} from "@/constants/withdraw";
import CustomSelector from "@/components/CustomSelector/CustomSelector";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import { BannerSuccessTransfer } from "../../../../../../public/image/banner-success-transfer";
import { Share } from "../../../../../../public/icons/Share";
import { Download } from "../../../../../../public/icons/Download";

const myAccounts = [
  { name: "Juan Carlos Ramirez", bankName: "BBVA", account: "85 0000 1234" },
  {
    name: "Juan Carlos Ramirez",
    bankName: "Santander",
    account: "89 0000 1234",
  },
  {
    name: "Juan Carlos Ramirez",
    bankName: "Mercado Pago",
    account: "90 0000 1234",
  },
];

const selectedAccount = myAccounts[0];

export default function TransferPage() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step")
    ? parseInt(searchParams.get("step"), 10)
    : 1;

  const type = searchParams.get("type");

  return (
    <>
      {step === 1 ? <Step1 /> : null}
      {step === 2 && type === "new-account" ? <Step2NewAccount /> : null}
      {step === 2 && type === "accounts" ? <Step2Accounts /> : null}
      {step === 3 ? <Step3 /> : null}
      {step === 4 ? <Step4 /> : null}
    </>
  );
}

function Step1() {
  return (
    <section>
      <h2 className="font-semibold text-xl mb-2">
        ¿A qué cuenta queres enviar?
      </h2>
      <div className="flex flex-col w-full gap-2">
        <Link
          href="?step=2&type=new-account"
          className="bg-gray-200 w-full flex items-center gap-4 py-2 px-3"
        >
          <div className="bg-white size-10 flex items-center justify-center rounded-sm">
            <Plus />
          </div>{" "}
          <span>Nueva Cuenta</span>
        </Link>
        <Link
          href="?step=2&type=accounts"
          className="bg-gray-200 w-full flex items-center gap-4 py-2 px-3"
        >
          <div className="bg-white size-10 flex items-center justify-center rounded-sm">
            <CreditCard />
          </div>{" "}
          <span>Mis cuentas</span>
        </Link>
      </div>
      <h2 className="font-semibold mt-4 text-xl">Cuentas Propias</h2>
      <div>
        {myAccounts.map((account, index) => (
          <React.Fragment key={index}>
            <div className="py-2">
              <p className="font-semibold">{account.name}</p>
              <p className="text-gray-500">{account.bankName}</p>
              <p className="">{account.account}</p>
            </div>
            {index < myAccounts.length - 1 ? <HorizontalDivider /> : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Step2NewAccount() {
  const { handleSubmit, handleChange, formData, errors } = useCustomForm(
    transferenceToNewAccountFields
  );

  return (
    <section>
      <h2 className="font-semibold text-xl mb-2">Ingresa los datos</h2>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full gap-4 max-[500px]:flex-wrap"
      >
        <div className="flex flex-col w-full gap-2">
          <CustomInputText
            {...transferenceToNewAccountFields[0]}
            onChange={handleChange}
          />
          <CustomSelector
            {...transferenceToNewAccountFields[1]}
            className="!bg-gray-300 p-2"
            customClass="!bg-gray-300"
            onChange={handleChange}
          />
          <CustomInputText
            {...transferenceToNewAccountFields[2]}
            onChange={handleChange}
          />
          <CustomCheckbox
            {...transferenceToNewAccountFields[3]}
            className="!bg-gray-300 p-2"
            customClass="!bg-gray-300"
            onChange={handleChange}
          />
          <CustomInputText
            {...transferenceToNewAccountFields[4]}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <CustomInputText
            {...transferenceToNewAccountFields[5]}
            onChange={handleChange}
          />
          <CustomSelector
            {...transferenceToNewAccountFields[6]}
            className="!bg-gray-300 p-2"
            customClass="!bg-gray-300"
            onChange={handleChange}
          />
          <CustomInputText
            {...transferenceToNewAccountFields[7]}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <CustomSelector
            {...transferenceToNewAccountFields[8]}
            className="!bg-gray-300 p-2"
            customClass="!bg-gray-300"
            onChange={handleChange}
          />

          <Button
            type="submit"
            className="w-[200px] h-[45px] mx-auto text-[20px] font-medium"
          >
            <Link href="?step=3&type=new-account">Continuar</Link>
          </Button>
        </div>
      </form>
    </section>
  );
}

function Step2Accounts() {
  const { handleSubmit, handleChange, formData, errors } = useCustomForm(
    transferenceToExistingAccountFields
  );

  return (
    <section className="flex w-full gap-4">
      <form
        className="flex w-full gap-4 max-[500px]:flex-wrap"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="w-full">
          <h2 className="font-semibold text-xl mb-2">
            Selecciona los beneficiarios
          </h2>
          <div className="flex flex-col w-full gap-2">
            <CustomInputText
              {...transferenceToExistingAccountFields[0]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-xl mb-2">Introduce los datos</h2>
          <div className="flex flex-col w-full gap-2">
            <CustomInputText
              {...transferenceToExistingAccountFields[1]}
              error={errors[1]}
              onChange={handleChange}
            />
            <CustomSelector
              {...transferenceToExistingAccountFields[2]}
              error={errors[2]}
              className="!bg-gray-300 p-2"
              customClass="!bg-gray-300"
              onChange={handleChange}
            />
            <CustomInputText
              {...transferenceToExistingAccountFields[3]}
              error={errors[3]}
              onChange={handleChange}
            />
            <CustomSelector
              {...transferenceToExistingAccountFields[4]}
              error={errors[4]}
              className="!bg-gray-300 p-2"
              customClass="!bg-gray-300"
              onChange={handleChange}
            />

            <Button
              type="submit"
              className="w-[200px] h-[45px] mx-auto text-[20px] font-medium"
            >
              <Link href="?step=3&type=new-account">Continuar</Link>
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

function CustomInputText(props) {
  return (
    <CustomInput
      {...props}
      className="!bg-gray-300 p-2"
      customClass="!bg-gray-300 p-1 pr-11"
      showLabel={true}
    />
  );
}

function Step3() {
  const [otp, setOtp] = useState("");

  return (
    <section>
      <h2 className="font-semibold text-xl mb-2">
        Verifica que todo esté correcto
      </h2>
      <div className="flex flex-col">
        <div className="flex py-2">
          <div className="flex-1">
            <p className="font-semibold">{selectedAccount.name}</p>
            <p className="text-gray-500">{selectedAccount.bankName}</p>
            <p className="">{selectedAccount.account}</p>
          </div>
          <div className="">
            <Link href="#" className="text-gray-800 text-sm font-semibold">
              Modificar
            </Link>
          </div>
        </div>
        <HorizontalDivider />
        <div className="flex py-2">
          <div className="flex-1">
            <p className="text-gray-500">Monto</p>
            <p className="font-semibold flex items-start">
              $ 40 <span className="text-sm">00</span>
            </p>
          </div>
          <div className="">
            <Link href="#" className="text-gray-800 text-sm font-semibold">
              Modificar
            </Link>
          </div>
        </div>
        <HorizontalDivider />
        <div className="flex py-2">
          <div className="flex-1">
            <p className="text-gray-500">Concepto</p>
            <p className="font-semibold">Descripción del concepto</p>
          </div>
          <div className="">
            <Link href="#" className="text-gray-800 text-sm font-semibold">
              Modificar
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="bg-gray-300 w-[90%] rounded-md flex flex-col items-center gap-2 py-4 px-7">
          <p className="text-center font-semibold">
            Confirma antes de proceder
          </p>
          <p className="text-center">
            Confirma el correo que enviamos a tu correo
          </p>
          <div className="flex flex-col gap-2 items-center justify-center my-4">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              renderSeparator={
                <span className="!min-w-1 !w-full !max-w-2"></span>
              }
              renderInput={(props) => (
                <input
                  {...props}
                  className="!min-w-8 !w-full !max-w-14  h-10  rounded-md"
                />
              )}
            />
            <p className="text-center text-sm">
              ¿No has recibido el código de verificación?{" "}
              <span className="font-semibold">Enviar de nuevo</span>
            </p>
          </div>
          <div className="w-full my-2">
            <Button className="w-full h-[45px] mx-auto text-[20px] font-medium">
              <Link href="?step=4&type=new-account">Continuar</Link>
            </Button>
          </div>
          <p className="font-bold">Selecciona otra forma</p>
        </div>
      </div>
    </section>
  );
}

function Step4() {
  return (
    <section className="flex w-full py-4 max-[700px]:flex-col-reverse">
      <div className="flex items-center justify-center w-full">
        <BannerSuccessTransfer />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="text-3xl text-center font-medium">
          !Transferencia enviada con éxito!
        </h3>
        <p className="py-4">22 de enero del 2025</p>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center py-4">
            <p className="flex items-start font-extrabold text-5xl">
              $ 40 <span className="text-xl">00</span>
            </p>
          </div>
          <HorizontalDivider />
          <div className="flex flex-col items-center py-4">
            <p className="font-bold">Juan Carlos Ramirez</p>
            <p className="text-gray-500">BBVA</p>
            <p>85 0000 1234</p>
          </div>
          <HorizontalDivider />
          <div className="flex flex-col items-center py-4">
            <p className="text-gray-500">Concepto</p>
            <p className="font-bold">Descripción del concepto</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <Share className="size-6" />
              <p>Compartir</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Download className="size-6" />
              <p>Descargar</p>
            </div>
          </div>
          <div className="flex items-center w-full py-4">
            <PrimaryButton text="Revisar tus movimientos" className="w-full" />
          </div>
          <Link href="/dashboard" className="font-medium">
            Ir a inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
