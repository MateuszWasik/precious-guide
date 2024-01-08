import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className=" border-r border-slate-400 border-opacity-20  lg:block lg:flex-none">
      <div className="w-64 py-16 lg:pr-0">
        <nav>
          <div className="mb-7">
            <ul className="space-y-2">
              <li>
                <h2>Podstawowe informacje</h2>
              </li>
              <li>
                <ul className="border-l border-slate-400 border-opacity-20 text-gray-400">
                  <li className="relative">
                    <div className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                      <span>Polityka</span>
                    </div>
                  </li>
                  <li>
                    <div className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                      <span>Waluta</span>
                    </div>
                  </li>
                  <li>
                    <div className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                      <span>Religia</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <ul className="space-y-2">
              <li>
                <h2 className="space-y-2">Środki komunikacji</h2>
              </li>
              <li>
                <ul className="border-l border-slate-400 border-opacity-20 text-gray-400">
                  <li className="relative">
                    <div className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                      <Link href="poland/transportation/car">Samochod</Link>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div className="item-center flex">
                      <div className=""></div>
                      <span>Autobus</span>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div>
                      <span>Pociąg</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <ul className="space-y-2">
              <li>
                <h2>Koszty zycia</h2>
              </li>
              <li>
                <ul className="border-l border-slate-400 border-opacity-20 text-gray-400">
                  <li className="relative">
                    <div className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                      <span>Koszt podstawowych produktów</span>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div className="item-center flex">
                      <div className=""></div>
                      <span>Wynajem mieszkania</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
