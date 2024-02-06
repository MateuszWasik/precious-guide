"use client";
import { IoMdClose } from "react-icons/io";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import { NavPoints } from "@/data/navigation/nav-points";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full md:hidden">
      <button onClick={handleOnClick}>
        <GiHamburgerMenu className="h-[40px] w-[40px]" />
      </button>
      {isOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col bg-black px-5">
          <button
            className="flex h-20 items-center justify-end"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose className="h-[40px] w-[40px]" />
          </button>
          <div className="pt-10">
            <ul>
              {NavPoints.map(({ name, href }) => (
                <li key={name}>
                  <Link onClick={() => setIsOpen(false)} href={href}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
