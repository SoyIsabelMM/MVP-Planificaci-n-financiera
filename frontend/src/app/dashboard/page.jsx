"use client";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import ShadowBox from "@/components/ShadowBox/ShadowBox";
import { useState } from "react";
import { EyeInvisible } from "../../../public/icons/EyeInvisible";
import { Eye } from "../../../public/icons/Eye";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Cell, Pie, PieChart } from "recharts";
import { actionsLinks, data } from "@/constants/dashboard";
import { MonthSelector } from "@/components/MonthSelector/MonthSelector";

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
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DashboardPage() {
  const balance = "2.896.367,56";
  const increment = "30.569";
  const incrementPercentage = 0.68;

  const [showBalance, setShowBalance] = useState(false);

  return (
    <DashboardLayout title="Dashboard">
      <section>
        <ShadowBox className="flex gap-4 flex-col min-[460px]:w-72">
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
          <div
            className={`flex flex-col gap-2 w-full${
              showBalance ? "" : " hidden"
            }`}
          >
            <p className={`text-2xl`}>$ {balance}</p>
            <span
              className={`${
                incrementPercentage >= 0 ? "text-green-500" : "text-red-500"
              } font-semibold`}
            >
              {incrementPercentage ? "▲" : "▼"} {increment} (
              {incrementPercentage}%)
            </span>
          </div>
        </ShadowBox>
      </section>
      <section>
        <ShadowBox className="flex justify-between gap-4 min-[460px]:w-72">
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
      <section className="flex flex-wrap gap-4">
        <ShadowBox className="flex gap-4 flex-col min-[450px]:w-[450px]">
          <div className="flex items-center justify-between w-full">
            <p>Operaciones</p>
            <MonthSelector />
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <td>Concepto</td>
                  <td>Tipo</td>
                  <td>Hora</td>
                  <td>Monto</td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <ShadowBox className="bg-gray-100 flex items-center justify-between py-1 cursor-pointer">
            <span>Ver más</span>{" "}
            <span>
              <ArrowDown />
            </span>
          </ShadowBox>
        </ShadowBox>
        <ShadowBox className="flex gap-4 flex-col min-[320px]:w-[320px]">
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
                      ["#979fd7", "#797fa4", "#32364d", "#1e2a79"][index % 4]
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <ShadowBox className="bg-gray-100 flex items-center justify-between py-1 cursor-pointer">
            <span>Ver más</span>{" "}
            <span>
              <ArrowDown />
            </span>
          </ShadowBox>
        </ShadowBox>
      </section>
    </DashboardLayout>
  );
}
