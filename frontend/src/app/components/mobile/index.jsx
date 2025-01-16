import { PrimaryButton } from "@/components/button";
import Banner from "@/assets/banner";

export function IndexPageMobile() {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-6 min-h-screen gap-4 w-full">
      <div className="flex flex-col flex-1 items-center justify-evenly max-w-[600px]">
        <div className="w-full my-10 max-w-[400px]">
          <Banner />
        </div>
        <p className="text-xl text-center px-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          eveniet voluptate corporis exercitationem officia sed iure doloribus!
          Totam, cupiditate rerum.
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 max-w-[600px]">
        <PrimaryButton text="Iniciar Sesión" />
        <PrimaryButton text="Registrarse" />
      </div>
    </div>
  );
}
