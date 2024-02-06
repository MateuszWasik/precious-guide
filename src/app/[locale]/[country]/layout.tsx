import { Header } from "@/components/Header";
import { RightSidebarNavigation } from "@/components/RightSidebar";
import { Sidebar } from "@/components/Sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Precious Guide - Poland",
  description: "Stress free travel through Poland",
};

type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function Layout({ children, params }: LayoutProps) {
  return (
    <main className="flex flex-col">
      <Header />
      <div className=" max-w-8xl relative mx-auto flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-20">
        <Sidebar />
        <div className="min-w-0 max-w-4xl flex-auto px-4 py-16 lg:pl-8 lg:pr-0 xl:px-16">
          {children}
        </div>
        <RightSidebarNavigation />
      </div>
    </main>
  );
}
