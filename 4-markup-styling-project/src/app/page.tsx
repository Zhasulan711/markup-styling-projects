import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="w-full flex flex-col items-center">
        <img src="./main-pic.png" className="absolute z-0" />
        <section className="pt-[145px] z-10 flex flex-col items-center space-y-[25px] mt-[80px]">
          <h2 className="text-[#FFFCFE] font-semibold
          sm-little:text-2xl sm-min:text-2xl sm:text-4xl pc-sm:text-4xl">
            CRAS ORNARE TRIST LOREM IPSUM
          </h2>
          <p className="text-[#FFFCFE] sm-little:text-xl sm-min:text-xl sm:text-3xl pc-sm:text-3xl font-light">
            CUSCE PELLENTESQUE SUSC
          </p>
          <aside className="border border-[#FFFCFE] w-[140px] h-[45px] text-center pt-[10.5px]">
            <Link href="more" className="text-[#FFFCFE]">
              READ MORE
            </Link>
          </aside>
        </section>

        <section>
          <div className="grid sm-little:grid-cols-1 sm-min:grid-cols-1 pc-sm:grid-cols-2 pt-[130px]">
            <div className="bg-[#E74C3B] h-[330px] relative
            sm-little:w-[500px] sm-min:w-[585px]">
              <div className="flex flex-col items-center">
                <figure className="h-[110px] relative mt-[55px]">
                  <img src="./ic-chat.png" alt="chat" className="absolute pt-4 pl-4"/>
                  <div className="bg-[#FFFFFF] rounded-[50%] w-[90px] h-[90px] "></div>
                </figure>
                <article className="flex flex-col items-center space-y-[15px] text-center">
                  <h3 className="text-[#F8FBF8] text-2xl font-semibold">
                    VESTIBULUM AUCTOR
                  </h3>
                  <p className="text-[#F8FBF8]">
                    Praesent dapibus, neque id cursus faucibus, <br /> tortor
                    neque egestas augue, eu vulputate magna eros eu erat. <br />{" "}
                    Aliquam erat volutpat
                  </p>
                </article>
              </div>
            </div>
            <div className="bg-[#FDBC1D] h-[330px] relative
            sm-little:w-[500px] sm-min:w-[585px]">
              <div className="flex flex-col items-center">
                <figure className="h-[110px] relative mt-[55px]">
                  <img src="./ic-pencil.png" alt="chat" className="absolute pt-5 pl-5"/>
                  <div className="bg-[#FFFFFF] rounded-[50%] w-[90px] h-[90px] "></div>
                </figure>
                <article className="flex flex-col items-center space-y-[15px] text-center">
                  <h3 className="text-[#F8FBF8] text-2xl font-semibold">
                    INTEGER VITAE LIB
                  </h3>
                  <p className="text-[#F8FBF8]">
                    Jiraesent dapibus, neque id cursus faucibus,
                    <br /> tortor neque egestas augue, eu vulputate magna eros
                    eu erat.
                    <br />
                    Aliquam erat volutpat
                  </p>
                </article>
              </div>
            </div>
            <div className="bg-[#19BC9B] h-[330px] relative
            sm-little:w-[500px] sm-min:w-[585px]">
              <div className="flex flex-col items-center">
                <figure className="h-[110px] relative mt-[55px]">
                  <img src="./ic-crown.png" alt="chat" className="absolute pt-4 pl-[18px]"/>
                  <div className="bg-[#FFFFFF] rounded-[50%] w-[90px] h-[90px] "></div>
                </figure>
                <article className="flex flex-col items-center space-y-[15px] text-center">
                  <h3 className="text-[#F8FBF8] text-2xl font-semibold">
                    TEMPOR INTERDUM
                  </h3>
                  <p className="text-[#F8FBF8]">
                    Sed adipiscing ornare risus. Morbi est est, b<br /> landit
                    sit amet, sagittis vel, euismod vel, velit. Pellentesque
                    <br /> egestas sem. Suspendisse commodo ullamcorper
                  </p>
                </article>
              </div>
            </div>
            <div className="bg-[#9B58B5] h-[330px] relative
            sm-little:w-[500px] sm-min:w-[585px]">
              <div className="flex flex-col items-center">
                <figure className="h-[110px] relative mt-[55px]">
                  <img src="./ic-user.png" alt="chat" className="absolute pt-4 pl-4"/>
                  <div className="bg-[#FFFFFF] rounded-[50%] w-[90px] h-[90px] "></div>
                </figure>
                <article className="flex flex-col items-center space-y-[15px] text-center">
                  <h3 className="text-[#F8FBF8] text-2xl font-semibold">
                    FELIS QUIS TORTOR
                  </h3>
                  <p className="text-[#F8FBF8]">
                    Lorem dapibus, neque id cursus faucibus,
                    <br /> tortor neque egestas augue, eu vulputate magna eros
                    eu erat.
                    <br />
                    Aliquam erat volutpat
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center pt-[80px]">
          <h4 className="text-[#FFFFFF] text-2xl font-semibold">
            TEMPOR INTERDUM
          </h4>
          <div className="flex flex-row ">
            <div className="h-[1px] bg-[#377C85] w-[100px] flex justify-between mt-[29.5px]"></div>
            <p className="text-[#FFFFFF] sm-little:text-[11px] sm-min:text-xs sm:text-sm pc-sm:text-base pt-[20px]">
              INTEGER VITAE LIBERO AC RISUS EGESTAS PLACERAT
            </p>
            <div className="h-[1px] bg-[#377C85] w-[100px] transform mt-[29.5px]"></div>
            <div></div>
          </div>
        </section>

        <div className="flex sm-little:flex-col sm-little:items-center sm-min:flex-col sm-min:items-center pc-sm:flex-row pc-sm:justify-center pc-sm:space-x-[25px] mt-[65px]">
          <div className="bg-[#204A52] flex flex-col items-center space-y-[30px] w-[370px] h-[470px] border-t-8 border-[#E84A3E]">
            <figure>
              {" "}
              <img
                src="./photo-1.jpg"
                className="rounded-[50%] mt-[30px]"
              />{" "}
            </figure>
            <article className="text-center">
              <p className="text-[#68A1AB]">
                Cing ornare risus. Morbi est est, binto sin <br /> landit sit
                amet, sagittis vel, euismod vel, velit. <br />
                Pellentesque egestas sem. Suspendisse com-
                <br />
                modo ullamcorper
              </p>
            </article>
            <aside className="bg-[#E74C3B] w-[100px] h-[40px] text-center text-[#FFFFFF] py-[10px] text-sm font-bold">
              READ MORE
            </aside>
          </div>
          <div className="bg-[#204A52] flex flex-col items-center space-y-[30px] w-[370px] h-[470px] border-t-8 border-[#FCBD1F]">
            <figure>
              {" "}
              <img
                src="./photo-2.jpg"
                className="rounded-[50%] mt-[30px]"
              />{" "}
            </figure>
            <article className="text-center">
              <p className="text-[#68A1AB]">
                Joren ornare risus. Morbi est est, binto sin <br /> landit sit
                amet, sagittis vel, euismod vel, velit.
                <br />
                Pellentesque egestas sem. Suspendisse com-
                <br />
                modo ullamcorper
              </p>
            </article>
            <aside className="bg-[#E74C3B] w-[100px] h-[40px] text-center text-[#FFFFFF] py-[10px] text-sm font-bold">
              READ MORE
            </aside>
          </div>
          <div className="bg-[#204A52] flex flex-col items-center space-y-[30px] w-[370px] h-[470px] border-t-8 border-[#19BC9B]">
            <figure>
              {" "}
              <img
                src="./photo-3.jpg"
                className="rounded-[50%] mt-[30px]"
              />{" "}
            </figure>
            <article className="text-center">
              <p className="text-[#68A1AB]">
                Lorem ornare risus. Morbi est est, binto sin <br /> landit sit
                amet, sagittis vel, euismod vel, velit.
                <br />
                Pellentesque egestas sem. Suspendisse com
                <br />
                -modo ullamcorper
              </p>
            </article>
            <aside className="bg-[#E74C3B] w-[100px] h-[40px] text-center text-[#FFFFFF] py-[10px] text-sm font-bold">
              READ MORE
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
