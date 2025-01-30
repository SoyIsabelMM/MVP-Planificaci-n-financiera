'use client';

import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TransferContent({ children }) {
  const searchParams = useSearchParams();
  const step = searchParams.get('step')
    ? parseInt(searchParams.get('step'), 10)
    : 1;

  return (
    <DashboardLayout
      title="Transferencia"
      className="max-[840px]:w-full max-w-2xl px-4"
    >
      <section className="flex w-full items-center gap-2 justify-end">
        <div className="h-1 bg-gray-200 rounded w-full">
          <div
            className="h-1 bg-gray-500 rounded"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        <span>({step}/3)</span>
      </section>
      {children}
    </DashboardLayout>
  );
}

export default function TransferLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransferContent>{children}</TransferContent>
    </Suspense>
  );
}
