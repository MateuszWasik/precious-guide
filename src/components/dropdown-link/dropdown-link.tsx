"use client";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "@headlessui/react";
import { MenuDropdownItem } from "./menu-dropdown-item";
import { DropdownChevron } from "./dropdown-chevron";

type DropdownLinkProps = {
  country: string;
  id: string;
  label: string;
  path: string;
  dropdownElements?: { id: string; label: string; path: string }[];
};

export const DropdownLink = ({
  country,
  id,
  label,
  path,
  dropdownElements,
}: DropdownLinkProps) => {
  const router = useRouter();

  const hasDropdownElements = dropdownElements && dropdownElements.length > 0;

  const handleOnClick = () => {
    router.push(`/${country}${path}`);
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button
            onClick={handleOnClick}
            className={` flex w-full items-center justify-between gap-2 rounded-[0px_15px_15px_0] p-[10px_5px_10px_20px] hover:bg-[#9DB2BF] hover:text-gray-700
			${open && "bg-[#526D82] text-gray-700"}
			`}
          >
            <span>{label}</span>
            <DropdownChevron
              isOpen={open}
              hasDropdownElements={hasDropdownElements}
            />
          </Menu.Button>
          {open && hasDropdownElements && (
            <Menu.Items className="flex flex-col pl-[30px] first-of-type:mt-2">
              {dropdownElements?.map(({ id, label, path }) => {
                return (
                  <MenuDropdownItem
                    label={label}
                    path={path}
                    country={country}
                    key={id}
                  />
                );
              })}
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
};
