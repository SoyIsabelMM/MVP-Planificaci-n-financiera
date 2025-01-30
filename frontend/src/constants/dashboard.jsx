import { SquareAppApplication } from '../../public/icons/SquareAppApplication';
import { Server } from '../../public/icons/Server';
import { Wallet } from '../../public/icons/Wallet';
import { CreditCard } from '../../public/icons/CreditCard';
import { Chat } from '../../public/icons/Chat';
import { Recommend } from '../../public/icons/Recommend';
import { Settings } from '../../public/icons/Settings';
import { Headphones } from '../../public/icons/Headphones';
import { Bars } from '../../public/icons/Bars';
import {
  ArrowDown,
  ArrowUp,
  ShoppingBag,
  Train,
  TvMinimalIcon,
} from 'lucide-react';

export const navbarItems = [
  { to: '/dashboard', text: 'Inicio', icon: SquareAppApplication },
  { to: '/dashboard', text: 'Transacciones', icon: Server },
  { to: '/dashboard', text: 'Cartera', icon: Wallet },
  { to: '/dashboard', text: 'Gastos', icon: CreditCard },
  { to: '/community', text: 'Comunidad', icon: Chat },
  { to: '/finding', text: 'Recomendaciones', icon: Recommend },
  { to: '/dashboard', text: 'Configuración', icon: Settings },
  { to: '/dashboard', text: 'Ayuda', icon: Headphones },
];

export const actionsLinks = [
  {
    text: 'Retirar',
    href: '/dashboard/transaction/withdraw?step=1',
    icon: ArrowUp,
  },
  { text: 'Ingresar', href: '#', icon: ArrowDown },
  { text: 'Cartera', href: '#', icon: CreditCard },
];

export const data = [
  { name: 'Group A', value: 80, label: Train },
  { name: 'Group B', value: 70, label: Bars },
  { name: 'Group C', value: 170, label: ShoppingBag },
  { name: 'Group D', value: 40, label: TvMinimalIcon },
];
