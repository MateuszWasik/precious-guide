import { ChevronIcon } from "@/assets/chevron";

type DropdownChevronProps = {
  isOpen?: boolean;
  hasDropdownElements?: boolean;
};

export const DropdownChevron = ({
  isOpen,
  hasDropdownElements,
}: DropdownChevronProps) => {
  return (
    <div
      className={`h-[20px] w-[20px] transition duration-300 ${
        isOpen && "rotate-90 transition "
      } ${hasDropdownElements ? "visible" : "hidden"}`}
    >
      <ChevronIcon />
    </div>
  );
};
