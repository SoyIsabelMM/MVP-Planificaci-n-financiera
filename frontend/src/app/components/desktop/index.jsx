import Banner from "@/assets/banner";

export function IndexPageDesktop() {
  return (
    <div className="flex min-h-full">
      <div className="flex flex-[2] w-[400px] min-w-[400px]"></div>
      <div className="w-[1px] bg-gray-900"></div>
      <div className="flex flex-col flex-[3] items-center px-6 py-6 gap-10">
        <div className="flex flex-col items-center justify-evenly flex-1">
          <h1 className="text-4xl font-bold">IUPI</h1>
          <p className="text-xl text-center px-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quae
            sint quasi voluptas accusamus cum optio blanditiis quis expedita
            ducimus?
          </p>
        </div>
        <div className="w-full max-w-[530px]">
          <Banner />
        </div>
      </div>
    </div>
  );
}
