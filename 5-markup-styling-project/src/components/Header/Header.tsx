import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full h-[50px] bg-[#29262F] flex flex-row justify-center text-[#9E9E9E] pt-4
        sm-min:space-x-[50px] xl:space-x-[575px]"
    >
      <h1 className="whitespace-nowrap text-lg">Start Tailwind</h1>
      <aside
        className="flex flex-row justify-center text-sm
        sm-min:space-x-[15px] xl:space-x-[25px]"
      >
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/other Pages">Other Pages</Link>
      </aside>
    </header>
  );
}
