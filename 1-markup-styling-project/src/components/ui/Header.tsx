import Link from "next/link";

import "../../styles/globals.css";

export default function Header() {
  return (
    <header className="relative w-full flex flex-row justify-center ">
      <img src="./Rectangle 1738.png" className="absolute w-full h-[340px]" />
      <div className="absolute flex my-4.75">
        <img
          src="./mingcute_lotus-fill.svg"
          alt="Lotus logo"
          className="-mt-0.75"
        />
        <h1 className="text-white font-normal ml-3 font-width-39 text-sm">
          Lotus
        </h1>
        <nav>
          <ul className="flex flex-row space-x-14.75 ml-29.75 w-full">
            <li>
              <Link
                href="/overview"
                className="text-gray-dark font-normal font-width-56 text-sm hover:text-white "
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/Stock&Funds"
                className="text-gray-dark font-normal font-width-86 text-sm hover:text-white whitespace-nowrap "
              >
                Stock & Funds
              </Link>
            </li>
            <li>
              <Link
                href="/Transaction"
                className="text-gray-dark font-normal font-width-68 text-sm hover:text-white "
              >
                Transaction
              </Link>
            </li>
            <li>
              <Link
                href="/allAssets"
                className="text-gray-dark font-normal font-width-56 text-sm hover:text-white whitespace-nowrap "
              >
                All assets
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-96 flex flex-row space-x-3.75 ">
          <img src="./mail.svg" alt="mail icon" />
          <img src="./bell-dot.svg" alt="bell-dot icon" />
          <h1 className="text-gray-dark font-bold">|</h1>
          <div className="flex flex-row space-x-2">
            <img
              src="./Ellipse 360.png"
              alt="beautiful girl with name Ellipse"
            />
            <span className="text-white font-normal font-width-87 text-xs pt-1 whitespace-nowrap ">
              Natali Pavchenko
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
