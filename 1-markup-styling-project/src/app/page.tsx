import Image from "next/image";

import Header from "../components/ui/Header";
import Company from "../components/company/Company";
import Transaction from "../components/transaction/Transaction";

export default function Main() {
  return (
    <div>
      <Header />
      <main className="w-full flex flex-col items-center">
        <section className="absolute mt-20">
          <h2 className="text-white font-medium">Your Stock Portfolio</h2>
          <div
            dir="ltr"
            className="relative h-35 mt-4 w-310.25 rounded-s-lg overflow-x-scroll overflow-y-hidden backdrop-filter backdrop-blur"
          >
            <Company />
          </div>
        </section>

        <div className="absolute flex flex-row space-x-[20px]">
          <section className="mt-75 bg-white w-213.25 h-176 rounded-1.235">
            <div className="mt-5.875 ml-8.75">
              <ul className="flex flex-row space-x-3.5">
                <div className="flex bg-black w-31.25 h-6 rounded-1.235 border-gray-slow border-0.235 justify-center items-center">
                  <Image
                    src="./fluent_money-16-filled.svg"
                    alt="Money icon"
                    width="17"
                    height="17"
                    className=""
                  />
                  <li className="text-gray-slow text-white font-normal font-width-78 text-14 ml-2.5 whitespace-nowrap">
                    All my shares
                  </li>
                </div>
                <div className="flex rounded-1.235 border-gray-slow border-0.235 w-18.5 h-6 justify-center items-center hover:bg-yellow-500">
                  <Image
                    src="./ic_baseline-apple.svg"
                    width="17"
                    height="17"
                    alt="logo apple"
                    className=""
                  />
                  <li className="text-gray-slow font-normal text-14 font-width-35 ml-0.5 hover:text-white">
                    Apple
                  </li>
                </div>
                <div className="flex rounded-1.235 border-gray-slow border-0.235 w-23.75 h-6 justify-center items-center">
                  <Image
                    src="./mdi_microsoft.svg"
                    width="17"
                    height="17"
                    alt="logo apple"
                  />
                  <li className="text-gray-slow font-normal text-14 font-width-56 ml-0.5">
                    Microsoft
                  </li>
                </div>
                <div className="flex rounded-1.235 border-gray-slow border-0.235 w-20 h-6 justify-center items-center">
                  <Image
                    src="./bi_google.svg"
                    width="15"
                    height="15"
                    alt="logo apple"
                  />
                  <li className="text-gray-slow font-normal text-14 font-width-43 ml-0.5">
                    Google
                  </li>
                </div>
                <div className="flex rounded-1.235 border-gray-slow border-0.235 w-21 h-6 justify-center items-center">
                  <Image
                    src="./cib_ubisoft.svg"
                    width="17"
                    height="17"
                    alt="logo apple"
                  />
                  <li className="text-gray-slow font-normal text-14 font-width-43 ml-0.5">
                    Ubisoft
                  </li>
                </div>
                <div className="flex rounded-1.235 border-gray-slow border-0.235 w-19.5 h-6 justify-center items-center">
                  <Image
                    src="./uil_adobe.svg"
                    width="17"
                    height="17"
                    alt="logo apple"
                  />
                  <li className="text-gray-slow font-normal text-14 font-width-39 ml-0.5">
                    Adobe
                  </li>
                </div>
                <div className="flex rounded-1.235 border-gray-slow border-0.235 w-17.75 h-6 justify-center items-center">
                  <Image
                    src="./mingcute_meta-fill.svg"
                    width="17"
                    height="17"
                    alt="logo apple"
                  />
                  <li className="text-gray-slow font-normal text-14 font-width-30 ml-0.5">
                    Meta
                  </li>
                </div>
              </ul>
            </div>
          </section>

          <section className="mt-75 bg-white w-92 h-176 rounded-lg overflow-hidden">
            <Transaction />
          </section>
        </div>
      </main>
    </div>
  );
}
