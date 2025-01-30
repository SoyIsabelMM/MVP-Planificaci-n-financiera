"use client";

import { useSearchParams } from "next/navigation";

export default function TransferLayout({ children }) {
  const searchParams = useSearchParams();
  const step = searchParams.get("step")
    ? parseInt(searchParams.get("step"), 10)
    : 1;

  return (
    <div className="max-[840px]:w-full max-w-2xl px-4">
      <section className="flex w-full items-center gap-2 justify-end">
        <div className="h-1 bg-gray-200 rounded w-full">
          <div
            className="h-1 bg-gray-500 rounded"
            style={{
              width: `${([1, 2, 3].includes(step) ? step / 3 : 1) * 100}%`,
            }}
          ></div>
        </div>
        {[1, 2, 3].includes(step) ? <span>({step}/3)</span> : null}
      </section>
      {children}
    </div>
  );
}
