"use client";

import { useWindowSize } from "@/hooks/use-window-size.hook";
import { IndexPageMobile } from "./components/mobile";
import { IndexPageDesktop } from "./components/desktop";

export default function Home() {
  const { width, height } = useWindowSize();

  if (width === 0 && height === 0) return <></>;
  if (width < 768) return <IndexPageMobile />;

  return <IndexPageDesktop />;
}
