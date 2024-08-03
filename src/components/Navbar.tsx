"use client";

import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="sticky top-0 w-375px md:max-w-[1440px] h-[58px] md:h-[80px] mx-auto py-[18px] md:py-[22px] px-5 md:px-[135px] bg-black">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <h1 className="font-bold text-white">Nettracking</h1>
          {/* Toggle button */}
          <div className="flex">
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`block h-8 w-14 rounded-full ${
                    isChecked ? "bg-[#2A2B33]" : "bg-[#2A2B33]"
                  } transition`}
                ></div>
                <div
                  className={`dot absolute top-1 transition-transform ${
                    isChecked ? "left-1" : "left-7"
                  } flex h-6 w-6 items-center justify-center rounded-full bg-white`}
                >
                  <span
                    className={`active ${
                      isChecked ? "hidden" : "block"
                    } bg-white rounded-full p-[2px]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  </span>
                  <span
                    className={`inactive ${
                      isChecked ? "block" : "hidden"
                    } text-body-color bg-white rounded-full p-[2px]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          <ul className="flex gap-8">
            <li className="font-semibold text-white">Features</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">How it works</li>
            <li className="text-gray-400">Knowledge base</li>
            <li className="text-gray-400">FAQ</li>
          </ul>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="bg-[#1D1F29] text-white font-semibold py-[10px] px-4 rounded-md">
            Sign in
          </button>
          <button className="bg-white text-black font-semibold py-[10px] px-4 rounded-md">
            Sign up
          </button>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMobileMenu} className="p-2 text-white">
            <AlignJustify />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-[20px] py-[18px] bg-black">
          <ul className="flex flex-col gap-4 mt-4">
            <li className="font-semibold text-white">Features</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">How it works</li>
            <li className="text-gray-400">Knowledge base</li>
            <li className="text-gray-400">FAQ</li>
            <li>
              <button className="bg-[#1D1F29] text-white font-semibold py-[10px] px-4 rounded-md w-full">
                Sign in
              </button>
            </li>
            <li>
              <button className="bg-white text-black font-semibold py-[10px] px-4 rounded-md w-full">
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
