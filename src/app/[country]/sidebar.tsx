"use client";
import { DropdownLink } from "@/components/dropdown-link/dropdown-link";
import { NAVIGATION_DATA } from "@/utils/navigation-data";

type SidebarProps = {
  params: {
    country: string;
  };
};

export const Sidebar = ({ params }: SidebarProps) => {
  return (
    <nav className="hidden max-w-full gap-1 md:visible md:flex md:flex-col md:pt-[100px]">
      <ul>
        {NAVIGATION_DATA.map(({ id, label, path, dropdownElements }) => {
          return (
            <li key={id}>
              <DropdownLink
                country={params.country}
                id={id}
                label={label}
                path={path}
                dropdownElements={dropdownElements}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
