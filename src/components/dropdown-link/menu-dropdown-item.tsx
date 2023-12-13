import { Menu } from "@headlessui/react";
import Link from "next/link";

type MenuDropdownItemProps = {
  country: string;
  label: string;
  path: string;
};
export const MenuDropdownItem = ({
  country,
  label,
  path,
}: MenuDropdownItemProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          className=" ml-[-30px] rounded-[0px_15px_15px_0px] p-[10px_5px_10px_30px] 
          hover:bg-[#9DB2BF] hover:text-gray-700"
          href={`/${country}${path}`}
        >
          {label}
        </Link>
      )}
    </Menu.Item>
  );
};
