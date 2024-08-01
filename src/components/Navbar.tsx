"use client";

import { AlignJustify, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 w-375px md:max-w-[1440px] h-[58px] md:h-[80px] mx-auto py-[22px] px-[135px] bg-black">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <h1 className="font-bold text-white">Nettracking</h1>
          <div className="flex">
            <button onClick={() => setTheme("dark")} className="p-2 text-white">
              <Moon />
            </button>
            <button
              onClick={() => setTheme("light")}
              className="p-2 text-white"
            >
              <Sun />
            </button>
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          <ul className="flex gap-8">
            <li className="font-semibold">Features</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">How it works</li>
            <li className="text-gray-400">Knowledge base</li>
            <li className="text-gray-400">FAQ</li>
          </ul>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="bg-[#1D1F29] text-white font-semibold py-3 px-6 rounded-md">
            Sign in
          </button>
          <button className="bg-white text-black font-semibold py-3 px-6 rounded-md">
            Sign up
          </button>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            <AlignJustify />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-[20px] py-[18px] bg-black">
          <ul className="flex flex-col gap-4 mt-4">
            <li className="font-semibold">Features</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">How it works</li>
            <li className="text-gray-400">Knowledge base</li>
            <li className="text-gray-400">FAQ</li>
            <li>
              <button className="bg-[#1D1F29] text-white font-semibold py-3 px-6 rounded-md w-full">
                Sign in
              </button>
            </li>
            <li>
              <button className="bg-white text-black font-semibold py-3 px-6 rounded-md w-full">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
