import Link from "next/link";

import "../../styles/globals.css";

export default function Footer() {
  return (
    <footer className="w-full h-[225px] bg-[#515151]">
      <div className="flex flex-row space-x-[435px] pl-[200px] pt-[25px]">
        <div className="flex flex-col space-y-5">
          <h5 className="text-[#F7F0EA] text-[22.3px]">SIGNUP TO OUR NEWSLETTER</h5>
          <aside className="bg-[#039AB2] w-[270px] h-[35px] flex justify-center items-center rounded transition-colors hover:bg-sky-500">
            <Link href="/more" className="text-[#F7F0EA] text-lg">
              EMAIL SIGNUP
            </Link>
          </aside>
        </div>
        <div>
          <h5 className="text-[#F7F0EA] text-[22.3px]">SERVICE TIMES</h5>
          <h5 className="text-[#F7F0EA] text-[22.3px] pt-5">Sundays at 9:30 & 11:30 AM</h5>
          <h6 className="text-sm text-[#A4A4A4]">Lorem ipsum dolor sit amet.</h6>
        </div>
      </div>
      <div className="w-[1000px] h-[30px] border-t border-[#6B6B6B] mt-[40px] ml-[200px] pt-2">
        <span className="text-[#A4A4A4] text-xs">&copy; Copyright 2013 SevenOaks. All rights reserved. Privacy Policy | Share This </span>
      </div>
    </footer>
  );
}
