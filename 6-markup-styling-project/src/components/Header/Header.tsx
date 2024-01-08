import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full h-[50px] flex flex-row justify-center pt-[25px]
      sm-lower:space-x-[30px] md:space-x-[235px]"
    >
      <img src="./logo.png" className="w-[35px] h-[15px] mt-[6px]"/>
      <aside
        className="flex flex-row pt-3
        sm-lower:space-x-[10px] md:space-x-[25px]"
      >
        <Link href="/design" className="text-[#1B0D51] text-[8px]">
          DESIGN
        </Link>
        <Link href="/design" className="text-[#1B0D51] text-[8px]">
          WEB DESIGN
        </Link>
        <Link href="/design" className="text-[#1B0D51] text-[8px]">
          GRAPHIC DESIGN
        </Link>
        <Link href="/design" className="text-[#1B0D51] text-[8px]">
          PRINT DESIGN
        </Link>
        <Link href="/design" className="text-[#1B0D51] text-[8px]">
          VIDEO DESIGN
        </Link>
      </aside>
    </header>
  );
}
