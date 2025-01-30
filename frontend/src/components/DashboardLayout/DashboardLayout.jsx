"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ShadowBox from "../ShadowBox/ShadowBox";
import VerticalDivider from "../VerticalDivider/VerticalDivider";
import Avatar from "../Avatar/Avatar";
import Notification from "../Notification/Notification";
import SearchBar from "../SearchBar/SearchBar";
import { Logout } from "../../../public/icons/Logout";
import { Bars } from "../../../public/icons/Bars";
import { navbarItems } from "@/constants/dashboard";

export default function DashboardLayout({ children, title, className }) {
  const [isCollapse, setIsCollapse] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "#FBF3FF";
  }, []);

  return (
    <div className="p-2">
      <div className="relative">
        <ShadowBox className="absolute min-[841px]:w-[calc(100%-13rem-1rem)] w-full bg-white right-0">
          <header className="flex items-center">
            <div className="min-[841px]:hidden cursor-pointer max-[500px]:flex-1">
              <Bars
                className="size-6"
                onClick={() => setIsCollapse(!isCollapse)}
              />
            </div>
            <h1 className="text-lg flex-1 ml-1 max-[500px]:hidden">{title}</h1>
            <div className="flex gap-4 items-center">
              <SearchBar />
              <div className="flex gap-2 items-center">
                <Notification />
                <VerticalDivider />
                <Avatar />
              </div>
            </div>
          </header>
        </ShadowBox>
        <ShadowBox
          className={`absolute max-[840px]:top-[74px] z-50 w-52 bg-white max-[840px]:h-[calc(100vh-74px-1rem)] h-[calc(100vh-1rem)] ${
            isCollapse ? "max-[840px]:-left-72" : ""
          } `}
        >
          <aside className="flex flex-col w-full h-full gap-4">
            <div className="w-full flex justify-center">
              <span className="text-3xl text-center">iUpi</span>
            </div>
            <div className="overflow-y-auto">
              <nav className="py-4">
                <ul className="flex flex-col gap-2">
                  {navbarItems.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <div className="size-5">
                        <item.icon className="size-5" />
                      </div>
                      <Link href={item.to}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex flex-col flex-1 justify-end">
              <button className="flex items-center gap-2 w-full">
                <Logout className="size-6" />
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </aside>
        </ShadowBox>
        <main
          className={`absolute min-[841px]:w-[calc(100%-14rem)] w-full top-[74px] min-[841px]:left-[14rem] flex flex-col gap-4 h-[calc(100vh-74px-1rem)] py-2 overflow-x-auto overflow-y-auto ${className} max-[840px]:w-full max-w-2xl px-4`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
