import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className=" hidden border-r border-slate-400  border-opacity-20 pl-5 md:block lg:block lg:flex-none lg:pl-0 ">
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
                      <Link href="/poland/transportation/car">Samochod</Link>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div className="item-center flex">
                      <div className=""></div>
                      <Link href="/poland/transportation/bus">Autobus</Link>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div>
                      <Link href="/poland/transportation/train">Pociąg</Link>
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
                      <Link href="/poland/living-cost/common-products">
                        Koszt podstawowych produktów
                      </Link>
                    </div>
                  </li>
                  <li className="mb-3 ml-5 before:relative before:left-[-24px]  before:top-[15px] before:block before:h-2 before:w-2 before:rounded-full before:content-[''] before:hover:bg-white">
                    <div className="item-center flex">
                      <div className=""></div>
                      <Link href="/poland/living-cost/flat-rent">
                        Wynajem mieszkania
                      </Link>
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
