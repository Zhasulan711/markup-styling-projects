import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <div className="bg-[#C3B3AA] w-full h-[425px] relative">
          <div className="absolute w-[1550px] h-[1px] bg-white transform rotate-[16.7deg] top-[225px] -translate-x-[32px]"></div>
          <div className="absolute w-[1550px] h-[1px] bg-white transform rotate-[163.3deg] top-[195px] -translate-x-[32px]"></div>
          <article className="absolute bg-[#008A9F] w-[460px] mt-[230px] h-[155px] ml-[200px]">
            <section className="pt-5 pl-[18px] flex flex-col ">
              <h2 className="text-[#FFFEFD] text-4xl">Welcome to SevenOaks</h2>
              <p className="text-[#FFFEFD] text-3xl">
                website which is run by the <br /> friends of SevenOaks
              </p>
            </section>
          </article>
        </div>

        <div className="w-full h-[565px]">
          <section className="pt-[35px] pl-[200px] flex flex-row space-x-[20px]">
            <div className="h-[195px] w-[320px] bg-[#C3B3AA] relative">
              <article className="">
                <img
                  src="/photo-3.jpg"
                  alt="people"
                  className="absolute w-full h-full"
                />
                <h3 className="text-[#FFFEFD] text-5xl font-semibold absolute inset-y-[95px] right-0 pr-[20px] text-shadow shadow-black/30">
                  STORIES
                </h3>
                <Link
                  href="/more"
                  className="mt-[15px] bg-[#008A9F] transition-colors hover:bg-sky-500 w-[260px] h-[45px] flex justify-center items-center absolute bottom-0 right-0"
                >
                  <p className="text-[#FFFEFD] ml-6">
                    Read stories of Seven Oaks
                  </p>
                  <Image
                    src="/Eo_circle_blue_arrow-right.svg.png"
                    width="25"
                    height="25"
                    alt="blue arrow"
                    className="ml-2"
                  />
                </Link>
              </article>
            </div>
            <div className="h-[195px] w-[320px] bg-[#C3B3AA] relative">
              <article className="">
                <img
                  src="/photo-2.jpg"
                  alt="giving something"
                  className="absolute w-full h-full"
                />
                <h3 className="text-[#FFFEFD] text-5xl font-semibold absolute inset-y-[95px] right-0 pr-[20px] whitespace-nowrap text-shadow shadow-black/30">
                  GIVE ONLINE
                </h3>
                <Link
                  href="/more"
                  className="mt-[15px] bg-[#708D45] transition-colors hover:bg-green-500 w-[260px] h-[45px] flex justify-center items-center absolute bottom-0 right-0"
                >
                  <p className="text-[#FFFEFD] ml-6">
                    Quick & easy online giving
                  </p>
                  <Image
                    src="/Eo_circle_blue_arrow-right.svg.png"
                    width="25"
                    height="25"
                    alt="blue arrow"
                    className="ml-2"
                  />
                </Link>
              </article>
            </div>
            <div className="h-[195px] w-[320px] bg-[#C3B3AA] relative">
              <article className="">
                <img
                  src="/photo-1.jpg"
                  alt="girl"
                  className="absolute w-full h-full"
                />
                <h3 className="text-[#FFFEFD] text-5xl font-semibold absolute inset-y-[95px] right-0 pr-[20px] text-shadow shadow-black/30">
                  PRAYER
                </h3>
                <Link
                  href="/more"
                  className="mt-[15px] bg-[#FF7E6B] transition-colors hover:bg-red-500 w-[260px] h-[45px] flex justify-center items-center absolute bottom-0 right-0"
                >
                  <p className="text-[#FFFEFD] ml-6">
                    Submit tour prayer request
                  </p>
                  <Image
                    src="/Eo_circle_blue_arrow-right.svg.png"
                    width="25"
                    height="25"
                    alt="blue arrow"
                    className="ml-2"
                  />
                </Link>
              </article>
            </div>
          </section>

          <div className="w-full pt-[30px] pl-[200px] flex flex-row space-x-[40px]">
            <div>
              <h4 className="text-[#039AB2] text-xl">UPCOMING EVENTS</h4>
              <div className="flex flex-col mt-[25px] w-[480px] h-[240px]">
                <div className="flex flex-row border-t h-[77px] border-black items-center relative">
                  <div className="w-[55px]">
                    <h5 className="whitespace-wrap text-[#4B8519] leading-1 pb-[10px]">
                      <span className="text-4xl">24</span>{" "}
                      <span className="pl-[7px]">JULY</span>
                    </h5>
                  </div>
                  <div className="absolute inset-autos left-[55px]">
                    <h5 className="text-[#FF6E62] text-xl whitespace-nowrap">
                      FAMILY SUNDAY
                    </h5>
                    <h5 className="whitespace-nowrap text-sm text-[#867F7D] font-medium">
                      Sunday | 9:30am
                    </h5>
                  </div>
                  <aside className="h-[30px] w-[90px] bg-[#008A9F] flex pt-[4px] justify-center rounded absolute right-0 transition-colors hover:bg-sky-500">
                    <Link href="/more" className="text-[#FFFEFD] text-base">
                      MORE
                    </Link>
                  </aside>
                </div>
                <div className="flex flex-row border-t h-[77px] border-black items-center relative">
                  <div className="w-[49px]">
                    <h5 className="whitespace-wrap text-[#4B8519] leading-1 pb-[10px]">
                      <span className="text-4xl">21</span>{" "}
                      <span className="pl-[7px]">JULY</span>
                    </h5>
                  </div>
                  <div className="absolute inset-autos left-[55px]">
                    <h5 className="text-[#FF6E62] text-xl whitespace-nowrap">
                      LOREM IPSUM
                    </h5>
                    <h5 className="whitespace-nowrap text-sm text-[#867F7D] font-medium">
                      Sunday | 9:30am
                    </h5>
                  </div>
                  <aside className="h-[30px] w-[90px] bg-[#008A9F] flex pt-[4px] justify-center rounded absolute right-0 transition-colors hover:bg-sky-500">
                    <Link href="/more" className="text-[#FFFEFD] text-base">
                      MORE
                    </Link>
                  </aside>
                </div>
                <div className="flex flex-row border-t h-[77px] border-black items-center relative">
                  <div className="w-[55px]">
                    <h5 className="whitespace-wrap text-[#4B8519] leading-1 pb-[10px]">
                      <span className="text-4xl">20</span>{" "}
                      <span className="pl-[7px]">JULY</span>
                    </h5>
                  </div>
                  <div className="absolute inset-autos left-[55px]">
                    <h5 className="text-[#FF6E62] text-xl whitespace-nowrap">
                      FAMILY SUNDAY
                    </h5>
                    <h5 className="whitespace-nowrap text-sm text-[#867F7D] font-medium">
                      Sunday | 9:30am
                    </h5>
                  </div>
                  <aside className="h-[30px] w-[90px] bg-[#008A9F] flex pt-[4px] justify-center rounded absolute right-0 transition-colors hover:bg-sky-500">
                    <Link href="/more" className="text-[#FFFEFD] text-base">
                      MORE
                    </Link>
                  </aside>
                </div>
              </div>
            </div>

            <section>
              <h4 className="text-[#039AB2] text-xl">SEVENOAKS</h4>
              <div className="flex flex-col mt-[25px] w-[480px] h-[240px] space-y-[10px]">
                <p className="text-sm text-[#635E5E] font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="text-sm text-[#635E5E] font-medium">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <aside>
                  <Link href="/more" className="text-[#FF6E62]">
                    READ MORE &gt;&gt;
                  </Link>
                </aside>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
