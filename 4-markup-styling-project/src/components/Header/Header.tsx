import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[75px] bg-[#204A52] flex flex-row justify-center pt-8
    sm-little:space-x-[110px] sm-min:space-x-[160px] sm:space-x-[250px] md:space-x-[410px] lg:space-x-[500px] xl:space-x-[600px] pc-sm:space-x-[750px] ">
      <h1 className="text-[#F5FCFC] text-xl">Site name</h1>
      <nav className="flex flex-row space-x-[30px] mt-1">
        <Link href="/Home" className="text-[#F5FCFC]">
          Home
        </Link>
        <Link href="/About" className="text-[#F5FCFC]">
          About
        </Link>
        <Link href="/Work" className="text-[#F5FCFC]">
          Work
        </Link>
        <Link href="/Contact" className="text-[#F5FCFC]">
          Contact
        </Link>
      </nav>
    </header>
  );
}
