import { MagnifyingGlass } from "../../../public/icons/MagnifyingGlass";

export default function SearchBar() {
  return (
    <div className="bg-black rounded-full size-8 flex items-center justify-center cursor-pointer">
      <MagnifyingGlass className="size-5 fill-white" />
    </div>
  );
}
