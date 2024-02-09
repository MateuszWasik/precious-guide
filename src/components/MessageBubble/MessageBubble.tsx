import { useTranslations } from "next-intl";
import { FaRegLightbulb } from "react-icons/fa6";

export type MessageBubbleVariants = "note" | "hint";

type MessageBubbleProps = {
  children: React.ReactNode;
  variant: MessageBubbleVariants;
};

export const MessageBubble = ({ children, variant }: MessageBubbleProps) => {
  const t = useTranslations("common.Component.MessageBubble");
  if (!children) return null;

  return (
    <div
      className={`h-min-0 relative flex w-full rounded-md border-4 border-dotted ${
        variant === "note" ? "border-green-400" : "border-yellow-500"
      } p-10`}
    >
      <div className="absolute left-[10px] top-[-35px] m-5 bg-[#0F172A]">
        {variant === "note" ? (
          <p className="mx-2 text-green-400">{t("note_from_native")}</p>
        ) : (
          <div className="mx-2 flex items-center">
            <FaRegLightbulb size="2rem" className="text-yellow-300" />
            <p className="ml-2 text-yellow-300">{t("good_to_know")}</p>
          </div>
        )}
      </div>
      <div className="inline-block">{children}</div>
    </div>
  );
};
