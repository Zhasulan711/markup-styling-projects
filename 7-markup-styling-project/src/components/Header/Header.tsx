import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#775BA3] h-[38px]">
      <div
        className="flex flex-row justify-center items-center text-center
        sm-lower:space-x-[20px] md:space-x-[250px]"
      >
        <div className="flex flex-row justify-center space-x-[60px] items-center text-center">
          <img src="./logo.png" alt="logo" className="w-[80px]" />
          <nav className="flex flex-row space-x-[20px] pt-2">
            <Link href="/" className="text-[#FFFFFF] text-[8px]">
              HOME
            </Link>
            <Link href="/" className="text-[#FFFFFF] text-[8px]">
              PORTFOLIOJOBS
            </Link>
            <Link href="/" className="text-[#FFFFFF] text-[8px]">
              BLOG
            </Link>
            <Link href="/" className="text-[#FFFFFF] text-[8px]">
              CONTACT
            </Link>
            <Link href="/" className="text-[#FFFFFF] text-[8px]">
              SHOP
            </Link>
          </nav>
        </div>

        <img
          src="./ic-user.png"
          alt="user-image"
          className="w-[15px] pt-2"
        ></img>
      </div>
    </header>
  );
}
