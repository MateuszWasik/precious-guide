"use client";
import { rightSidebarElements } from "@/providers/state-store";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

import { useEffect } from "react";

type DynamicSectionHeaderProps = {
  translatedText: string;
};

export const DynamicSectionHeader = ({
  translatedText,
}: DynamicSectionHeaderProps) => {
  const [sidebarElements, setSidebarElements] = useAtom(rightSidebarElements);

  useEffect(() => {
    setSidebarElements((prev) => [...prev, { header: translatedText }]);

    return () => {
      setSidebarElements([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h3>{translatedText}</h3>;
};
