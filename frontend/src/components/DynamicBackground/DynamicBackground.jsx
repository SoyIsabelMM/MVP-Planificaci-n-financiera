"use client";
import { usePathname } from "next/navigation";

const backgroundColors = [
  { path: "/", color: "#263238" },
  { path: "/dashboard", color: "#FBF3FF", start: true },
  { path: "/finding", color: "#FBF3FF" },
];

export default function DynamicBackground({ children }) {
  const pathname = usePathname();

  const foundBackground = backgroundColors.find((bg) =>
    bg.path === pathname || (bg.start && pathname.startsWith(bg.path))
      ? true
      : false
  );

  const backgroundClass = foundBackground
    ? `bg-[${foundBackground.color}]`
    : "bg-white text-black";

  return <div className={`${backgroundClass} min-h-screen`}>{children}</div>;
}
