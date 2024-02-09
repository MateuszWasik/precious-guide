"use client";

import { Provider } from "jotai";

type Providers = {
  children: React.ReactNode;
};

export default function Providers({ children }: Providers) {
  return <Provider>{children}</Provider>;
}
