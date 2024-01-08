import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full bg-[#5ABC2D] h-[35px] flex flex-row justify-center items-center
      sm-lower:space-x-[50px] md:space-x-[380px]"
    >
      <div className="flex flex-row justify-center space-x-[40px]">
        <img src="./logo.png" className="w-[70px] h-[25px]" />
        <nav className="flex flex-row justify-center space-x-[20px] pt-[10px]">
          <Link href="/" className="text-[#FFFFFF] text-[7px]">
            {" "}
            EMPLOYERS
          </Link>
          <Link href="/" className="text-[#FFFFFF] text-[7px]">
            {" "}
            PORTFOLIO
          </Link>
          <Link href="/" className="text-[#FFFFFF] text-[7px]">
            {" "}
            ABOUT US
          </Link>
          <Link href="/" className="text-[#FFFFFF] text-[7px]">
            {" "}
            TEAM
          </Link>
        </nav>
      </div>
      <button className="bg-[#499C21] h-[19px] w-[65px] justify-center flex items-center rounded-sm">
        <Link
          href="/login"
          className="text-[#FFFFFF] text-[7px] font-bold pt-[1px]"
        >
          LOGIN
        </Link>
      </button>
    </header>
  );
}
