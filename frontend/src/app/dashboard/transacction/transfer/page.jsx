"use client";

import { useState } from "react";
import HorizontalDivider from "@/components/HorizontalDivider/HorizontalDivider";
import { CreditCard, Plus } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import OTPInput from "react-otp-input";
import { PrimaryButton } from "@/components/Button/Button";

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
          <>
            <div key={index} className="py-2">
              <p className="font-semibold">{account.name}</p>
              <p className="text-gray-500">{account.bankName}</p>
              <p className="">{account.account}</p>
            </div>
            {index < myAccounts.length - 1 ? <HorizontalDivider /> : null}
          </>
        ))}
      </div>
    </section>
  );
}

function Step2NewAccount() {
  return (
    <section>
      <h2 className="font-semibold text-xl mb-2">Ingresa los datos</h2>
    </section>
  );
}

function Step2Accounts() {
  return (
    <section className="flex w-full gap-4">
      <div>
        <h2 className="font-semibold text-xl mb-2">
          Selecciona los beneficiarios
        </h2>
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-2">Introduce los datos</h2>
      </div>
    </section>
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
            <PrimaryButton text="Confirmar" className="w-full" />
          </div>
          <p className="font-bold">Selecciona otra forma</p>
        </div>
      </div>
    </section>
  );
}
