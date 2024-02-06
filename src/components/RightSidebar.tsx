import Link from "next/link";

export const RightSidebarNavigation = () => {
  return (
    <div className="sticky hidden lg:top-0 lg:h-full lg:w-64 lg:flex-none lg:py-16 xl:flex">
      <nav>
        <div>
          <nav>
            <h2 className="mb-5 text-xl ">Na tej stronie</h2>
            <ul className="space-y-4 text-slate-400">
              <li className="text-sm text-white">
                <Link href="#speed-limits">Przepisowe prędkości</Link>
              </li>
              <li className="text-sm text-white">
                <Link href="#speed-control">Fotoradary</Link>
              </li>
              <li className=" space-x-4 space-y-4 text-sm">
                <Link className="text-white" href="#highway">
                  Autostrady
                </Link>
                <div className="">
                  <ul className=" space-y-3">
                    <li className="mb-2">Odcinki bezpłatne</li>
                    <li className="mb-2">Odcinki płatne</li>
                    <li className="mb-2">Opłaty</li>
                    <li className="mb-2">Formy płatności</li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};
