'use client';

import { use, useState } from 'react';
import { contries } from '@/constants/countries';
import { menuItems } from '@/constants/menuItems';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../DropdownMenu/DropdownMenu';

export function HeaderComponent() {
  const [selectCountry, setSelectCountry] = useState(contries[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);

  const toggleCountryMenuOpen = () => {
    setIsCountryMenuOpen(!isCountryMenuOpen);
  };

  const toggleMobileOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white shadow-sm mx-[5%] rounded-md">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/image/logo-icon.png"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-700 px-3 py-2  font-medium text-xl"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex sm:items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                <span className="text-4xl mr-2">{selectCountry.flag}</span>
                {selectCountry.name}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-0 shadow-none">
                {contries.map((country) => (
                  <DropdownMenuItem
                    key={country.name}
                    onClick={() => setSelectCountry(country)}
                  >
                    <span className="text-xl mr-7 text-gray-500">
                      {country.flag} {country.name}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 text-base  font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <span className="text-2xl">{selectCountry.flag}</span>
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-gray-800">
                  {selectCountry.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
