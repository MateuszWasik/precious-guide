import { useTranslations } from "next-intl";
import { DynamicRightSidebarList } from "./DynamicRightSidebarList";

export const DynamicRightSidebar = () => {
  const t = useTranslations("common.Component.RightSidebar");

  return (
    <nav className="sticky hidden lg:top-0 lg:h-full lg:w-64 lg:flex-col lg:py-16 xl:flex">
      <h2 className="mb-5 text-xl ">{t("on_this_site")}</h2>
      <DynamicRightSidebarList />
    </nav>
  );
};
