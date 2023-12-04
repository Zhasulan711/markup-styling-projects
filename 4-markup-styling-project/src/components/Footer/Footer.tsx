import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full bg-[#204A52] h-[130px] mt-[70px] text-center pt-[50px]">
      <aside>
        <h5 className="text-[#E7EFE9] sm-little:text-xs sm-min:text-sm">
          Copyright(c) website name{" "}
          <span className="text-[#F9BD2A]">
            .Designed by: <Link href="/more">www.alltemplateneeds.com</Link>
          </span>
        </h5>
      </aside>
    </footer>
  );
}
