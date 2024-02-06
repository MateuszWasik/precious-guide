import { ImageComponent } from "./ImageComponent";
import { MobileNavigation } from "./MobileNavigation";
import Logo from "@images/logo/logo.png";

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between px-5 md:px-0">
      <div className="h-[80px] w-[80px] md:ml-5">
        <ImageComponent imageSrc={Logo} alt="logo" placeholder="empty" />
      </div>
      <div>
        <MobileNavigation />
      </div>
    </header>
  );
};
