import { atom } from "jotai";

export type Header = {
  header: string;
  subHeader?: string;
};
export const rightSidebarElements = atom<Header[]>([]);
