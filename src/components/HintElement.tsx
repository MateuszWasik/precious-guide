import { FaRegLightbulb } from "react-icons/fa6";

type HintElementProps = {
  text: React.ReactNode;
};

export const HintElement = ({ text }: HintElementProps) => {
  if (!text) return null;
  return (
    <div className="h-min-0 relative flex w-full rounded-md border-4 border-dotted border-yellow-500 p-10">
      <div className="absolute left-[10px] top-[-35px] m-5 bg-[#0F172A]">
        <FaRegLightbulb size="2rem" className="text-yellow-300" />
      </div>
      <div className="inline-block">{text}</div>
    </div>
  );
};
