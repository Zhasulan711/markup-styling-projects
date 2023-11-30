import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[95px] w-full bg-white flex flex-row space-x-[420px] pt-[55px] pl-[200px]">
      <h1 className="text-[#757575] text-2xl font-medium">
        <span className="text-[#6F7171] font-semibold">Seven</span>Oaks
      </h1>
      <nav className="flex flex-row  space-x-[65px]">
        <Link href="/about" className="text-[#5B8429] transition-colors hover:text-[#0595BE]">ABOUT</Link>
        <Link href="/about" className="text-[#5B8429] transition-colors hover:text-[#0595BE]">MEDIA</Link>
        <Link href="/about" className="text-[#5B8429] transition-colors hover:text-[#0595BE]">EVENTS</Link>
        <Link href="/about" className="text-[#5B8429] transition-colors hover:text-[#0595BE]">SHOP</Link>
        <Link href="/about" className="text-[#5B8429] transition-colors hover:text-[#0595BE]">GIVE</Link>
      </nav>
    </header>
  );
}
