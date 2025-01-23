export default function Avatar() {
  return (
    <div className="cursor-pointer flex items-center gap-2">
      <div className="size-10 rounded-full bg-black overflow-hidden flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaZGrcA7s9nGfitj6J4I-XkKTnXE-D8NPGw&s"
          alt="Avatar"
        />
      </div>
      <div className="flex flex-col max-[380px]:hidden">
        <p className="font-bold max-w-24 truncate overflow-hidden whitespace-nowrap">
          Nombre
        </p>
        <p className="text-sm">Disponible</p>
      </div>
    </div>
  );
}
