"use client";
import "./page.sass";

import { useWindowSize } from "@/hooks/use-window-size.hook";
import { IndexPageMobile } from "./components/mobile";
import { IndexPageDesktop } from "./components/desktop";

export default function Home() {
  const { width } = useWindowSize();

  if (width < 768) return <IndexPageMobile />;

  return <IndexPageDesktop />;
}
