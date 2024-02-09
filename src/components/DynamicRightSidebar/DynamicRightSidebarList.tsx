"use client";
import { rightSidebarElements } from "@/providers/state-store";
import { useAtom } from "jotai";

export const DynamicRightSidebarList = () => {
  const [sidebarHeaders] = useAtom(rightSidebarElements);

  return (
    <ul className="space-y-4 text-slate-400">
      {sidebarHeaders.map((header, index) => (
        <li key={index} className="text-sm text-white">
          <span>{header.header}</span>
        </li>
      ))}
    </ul>
  );
};
