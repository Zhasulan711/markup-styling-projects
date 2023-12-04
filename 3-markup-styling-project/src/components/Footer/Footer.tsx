import Link from "next/link";

import "../../styles/globals.css";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#515151] sm-little:mt-[700px] sm-min:mt-[270px] pc-sm:mt-[0px] h-full flex flex-col items-center"
    >
      <div
        className="flex pt-[25px]
        sm-little:flex-col sm-min:flex-col pc-sm:flex-row
        sm-little:items-center sm-min:items-center pc-sm:justify-center
        pc-sm:pl-[200px]
        sm-little:space-y-[100px] sm-min:space-y-[100px] pc-sm:space-y-[0px] 
        pc-sm:space-x-[435px]"
      >
        <div className="flex flex-col space-y-5">
          <h5 className="text-[#F7F0EA] text-[22.3px]">
            SIGNUP TO OUR NEWSLETTER
          </h5>
          <aside className="bg-[#039AB2] w-[270px] h-[35px] flex justify-center items-center rounded transition-colors delay-150 hover:bg-sky-500">
            <Link href="/more" className="text-[#F7F0EA] text-lg">
              EMAIL SIGNUP
            </Link>
          </aside>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="text-[#F7F0EA] text-[22.3px]">SERVICE TIMES</h5>
          <div>
            <h5 className="text-[#F7F0EA] text-[22.3px]">
              Sundays at 9:30 & 11:30 AM
            </h5>
            <h6 className="text-sm text-[#A4A4A4]">
              Lorem ipsum dolor sit amet.
            </h6>
          </div>
        </div>
      </div>
      <div
        className="w-[1000px] h-[30px] border-t border-[#6B6B6B] mt-[40px] pt-2
        pc-sm:ml-[200px]"
      >
        <span className="text-[#A4A4A4] text-xs sm-min:pl-[100px]">
          &copy; Copyright 2013 SevenOaks. All rights reserved. Privacy Policy |
          Share This{" "}
        </span>
      </div>
    </footer>
  );
}
