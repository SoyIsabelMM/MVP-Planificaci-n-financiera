'use client';

import ShadowBox from '@/components/ShadowBox/ShadowBox';
import { useState } from 'react';
import { EyeInvisible } from '../../../../public/icons/EyeInvisible';
import { Eye } from '../../../../public/icons/Eye';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Bar, BarChart, Cell, Pie, PieChart } from 'recharts';
import {
  actionsLinks,
  data,
  data2,
  data3,
  myInstruments,
} from '@/constants/dashboard';
import { MonthSelector } from '@/components/MonthSelector/MonthSelector';
import HorizontalDivider from '@/components/HorizontalDivider/HorizontalDivider';
import Modal from '@/components/Modal/Modal';
import { useEffect } from 'react';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.15;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DashboardPage() {
  const balance = '2.896.367,56';
  const balanceHidden = '*'.repeat(balance.length);
  const increment = '30.569';
  const incrementPercentage = 0.68;

  const [showBalance, setShowBalance] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const userLoggedIn = true;
    const modalClosed = localStorage.getItem('modalClosed');

    if (userLoggedIn && !modalClosed) {
      setIsModalOpen(true);
    }
  }, []);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
      <div className="flex gap-4 max-[1220px]:flex-col">
        <div className="flex min-[1220px]:flex-col max-[900px]:flex-col gap-4">
          <section>
            <ShadowBox className="flex gap-4 flex-col w-72 min-[470px]:w-80 bg-white">
              <div className="flex items-center justify-between w-full">
                <p>Total expresado en pesos</p>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="bg-black size-7 rounded-full flex items-center justify-center"
                >
                  {showBalance ? (
                    <EyeInvisible className="size-6 stroke-white" />
                  ) : (
                    <Eye className="size-6 stroke-white" />
                  )}
                </button>
              </div>
              <div className={`flex flex-col gap-2 w-full`}>
                <p className={`text-2xl`}>
                  {showBalance ? balanceHidden : balance}
                </p>
                <span
                  className={`${
                    incrementPercentage >= 0 ? 'text-green-500' : 'text-red-500'
                  } font-semibold`}
                >
                  {incrementPercentage ? '▲' : '▼'} {increment} (
                  {incrementPercentage}%)
                </span>
              </div>
            </ShadowBox>
          </section>
          <section>
            <ShadowBox className="flex justify-between gap-4 min-[470px]:w-80 h-full items-center bg-white">
              {actionsLinks.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="flex flex-col items-center gap-1"
                >
                  <ShadowBox className="flex items-center justify-center rounded-full size-12">
                    <item.icon className="size-6" />
                  </ShadowBox>
                  {item.text}
                </Link>
              ))}
            </ShadowBox>
          </section>
        </div>
        <div className="flex max-[900px]:flex-col gap-4">
          <section>
            <ShadowBox className="flex gap-4 flex-col min-[460px]:w-72 h-full bg-white">
              <p>Ganancias Mensuales</p>
              <div className="flex items-center justify-center">
                <button className="bg-black w-5 h-8 flex items-center justify-center text-white">
                  ◄
                </button>
                <div>
                  <BarChart width={200} height={200} data={data2} barSize={50}>
                    <Bar dataKey="value" fill="#3b7fc3" />
                  </BarChart>
                  <div className="flex justify-evenly w-full">
                    {data2.map((item, index) => (
                      <p key={index} className="text-xs">
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
                <button className="bg-black w-5 h-8 flex items-center justify-center text-white">
                  ►
                </button>
              </div>
            </ShadowBox>
          </section>
          <section>
            <ShadowBox className="flex flex-col justify-between gap-4 min-[470px]:w-80 h-full items-center bg-white">
              <p>Instrumentos Sugeridos</p>
              <div className="w-full flex flex-wrap gap-2">
                {data3.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-gray-100 p-2 rounded-xl"
                  >
                    <p className="text">{item.name}</p>
                    <p className="text">{item.price}</p>
                    <div
                      className={`${
                        item.difference < 0 ? 'bg-red-700' : 'bg-green-700'
                      } py-[2px] px-1`}
                    >
                      <span className="text-sm text-white">
                        {item.difference > 0 ? '▲' : '▼'} {item.difference}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <ShadowBox className="bg-black w-full flex items-center justify-between py-[3px] cursor-pointer">
                <span className="text-white text-xs">
                  Ranking de instrumentos
                </span>
                <span className="text-white text-xs">►</span>
              </ShadowBox>
            </ShadowBox>
          </section>
        </div>
      </div>
      <div className="flex gap-4 max-[916px]:flex-col">
        <section className="h-full">
          <ShadowBox className="flex gap-4 flex-col min-[300px]:w-[300px] h-full bg-white">
            <div className="flex items-center justify-between w-full">
              <p>Mis Instrumentos</p>
              <Link href="/dashboard" className="text-sm text-blue-600">
                Ir a mis inversiones
              </Link>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {myInstruments.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex justify-between w-full mb-1">
                    <p>
                      {item.name} ({item.count})
                    </p>
                    <div
                      className={`${
                        item.increment ? 'bg-red-700' : 'bg-green-700'
                      } py-[1px]`}
                    >
                      <span className="text-xs text-white">
                        {item.increment ? '▲' : '▼'} {item.value} (
                        {item.percentage}%)
                      </span>
                    </div>
                  </div>
                  <HorizontalDivider />
                  <p>Total: ${item.total}</p>
                  <p>
                    Rendimiento:{' '}
                    <span
                      className={
                        item.yield[0] === '-'
                          ? 'text-red-700'
                          : 'text-green-700'
                      }
                    >
                      ${item.yield}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </ShadowBox>
        </section>
        <section>
          <ShadowBox className="flex gap-4 flex-col min-[320px]:w-[320px] h-full bg-white">
            <div className="flex items-center justify-between w-full">
              <p>Gastos Mensuales</p>
              <MonthSelector />
            </div>
            <div className="flex items-center justify-center w-full">
              <PieChart width={160} height={160}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  fill="#979fd7"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  paddingAngle={1}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ['#979fd7', '#797fa4', '#32364d', '#1e2a79'][index % 4]
                      }
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <ShadowBox className="bg-gray-100 flex items-center justify-between py-1 cursor-pointer">
              <span>Ver más</span>{' '}
              <span>
                <ArrowDown />
              </span>
            </ShadowBox>
          </ShadowBox>
        </section>
      </div>
    </>
  );
}
