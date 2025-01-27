import { MagnifyingGlass } from "../../../public/icons/MagnifyingGlass";

export default function SearchBar() {
  return (
    <div className="max-[600px]:bg-black max-[600px]:rounded-full max-[600px]:size-10 max-[600px]:justify-center max-[600px]:cursor-pointer flex items-center bg-gray-100 py-2 px-3 gap-2 rounded-lg">
      <MagnifyingGlass className="max-[600px]:size-6 max-[600px]:stroke-white size-5 stroke-[#411B01]" />
      <input
        type="text"
        placeholder="Buscar"
        className="max-[600px]:hidden bg-transparent border-none outline-none focus:border-none"
      />
    </div>
  );
}
