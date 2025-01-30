import { SquareAppApplication } from "../../public/icons/SquareAppApplication";
import { Server } from "../../public/icons/Server";
import { Wallet } from "../../public/icons/Wallet";
import { CreditCard } from "../../public/icons/CreditCard";
import { Chat } from "../../public/icons/Chat";
import { Recommend } from "../../public/icons/Recommend";
import { Settings } from "../../public/icons/Settings";
import { Headphones } from "../../public/icons/Headphones";
import { Bars } from "../../public/icons/Bars";
import {
  ArrowDown,
  ArrowUp,
  ShoppingBag,
  Train,
  TvMinimalIcon,
} from "lucide-react";

export const navbarItems = [
  { to: "/dashboard", text: "Inicio", icon: SquareAppApplication },
  { to: "/dashboard", text: "Transacciones", icon: Server },
  { to: "/dashboard", text: "Cartera", icon: Wallet },
  { to: "/dashboard", text: "Gastos", icon: CreditCard },
  { to: "/community", text: "Comunidad", icon: Chat },
  { to: "/finding", text: "Recomendaciones", icon: Recommend },
  { to: "/dashboard", text: "Configuración", icon: Settings },
  { to: "/dashboard", text: "Ayuda", icon: Headphones },
];

export const actionsLinks = [
  {
    text: "Retirar",
    href: "/dashboard/transaction/withdraw?step=1",
    icon: ArrowUp,
  },
  { text: "Ingresar", href: "#", icon: ArrowDown },
  { text: "Cartera", href: "#", icon: CreditCard },
];

export const data = [
  { name: "Group A", value: 80 },
  { name: "Group B", value: 70 },
  { name: "Group C", value: 170 },
  { name: "Group D", value: 40 },
];

export const data2 = [
  { name: "Nov 2024", value: 150 },
  { name: "Dic 2024", value: 60 },
  { name: "Ene 2025", value: 10 },
];

export const data3 = [
  { name: "BPY26", price: "$ 1.120,00", difference: 0.66 },
  { name: "NVDA", price: "$ 7.220,00", difference: 0.9 },
  { name: "PAMP", price: "$ 4.120,00", difference: -0.26 },
  { name: "AMZN", price: "$ 1.955,89", difference: 9.66 },
  { name: "GOOGL", price: "$ 3.980,00", difference: -3.66 },
  { name: "YPF", price: "$ 5.120,00", difference: 0.66 },
];

export const myInstruments = [
  {
    name: "Corporativos",
    count: 30,
    total: "40.987.454,89",
    yield: "-508.978,74",
    increment: true,
    value: 789,
    percentage: 0.45,
  },
  {
    name: "Cedears",
    count: 60,
    total: "48.487.454,89",
    yield: "79.875,24",
    increment: false,
    value: 900,
    percentage: 2.45,
  },
  {
    name: "Acciones",
    count: 10,
    total: "20.987.454,89",
    yield: "-23.456,89",
    increment: true,
    value: 500,
    percentage: 0.95,
  },
];
