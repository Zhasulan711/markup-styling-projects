import Link from "next/link";

export default function Header() {
  return (
    <header
      className="h-[95px] w-full bg-white flex flex-row pt-[55px] 
      sm-min:space-x-[57px] sm:space-x-[114px] md:space-x-[171px] lg:space-x-[228px] xl:space-x-[285px] pc-sm:md:space-x-[340px] 
      justify-center"
    >
      <h1 className="text-[#757575] text-2xl font-medium">
        <span className="text-[#6F7171] font-semibold">Seven</span>Oaks
      </h1>
      <nav className="flex flex-row pt-[5px]
        sm-min:space-x-[11px] sm:space-x-[22px] md:space-x-[33px] lg:space-x-[44px] xl:space-x-[55px] pc-sm:space-x-[65px]">
        <Link
          href="/about"
          className="text-[#5B8429] transition-colors hover:text-[#0595BE]"
        >
          ABOUT
        </Link>
        <Link
          href="/about"
          className="text-[#5B8429] transition-colors hover:text-[#0595BE]"
        >
          MEDIA
        </Link>
        <Link
          href="/about"
          className="text-[#5B8429] transition-colors hover:text-[#0595BE]"
        >
          EVENTS
        </Link>
        <Link
          href="/about"
          className="text-[#5B8429] transition-colors hover:text-[#0595BE]"
        >
          SHOP
        </Link>
        <Link
          href="/about"
          className="text-[#5B8429] transition-colors hover:text-[#0595BE]"
        >
          GIVE
        </Link>
      </nav>
    </header>
  );
}

